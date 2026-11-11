// Construye la web de Nebego lista para subir a GitHub/Azure.
// Uso (desde la carpeta _fuente):  npm install  &&  node build.mjs
// Resultado: actualiza la web en la carpeta de arriba (raíz del repositorio): index.html, una carpeta por
// página con su HTML ya generado, assets/app.<código>.js y sitemap.xml. Las imágenes de assets/ no se tocan.
import { build } from "esbuild";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const { chromium } = createRequire(import.meta.url)("playwright");
const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(HERE, "src");
const OUT = process.argv[2] ? path.resolve(process.argv[2]) : path.join(HERE, "..");
const SITE = "https://www.nebego.com";
const GOATCOUNTER = "nebego";                      // nombre de la cuenta: https://nebego.goatcounter.com

// ---------- 1. Compilar el código (React incluido, sin Babel en el navegador)
const res = await build({
  entryPoints: [path.join(SRC, "entry.js")], bundle: true, minify: true, format: "iife", target: "es2018",
  loader: { ".jsx": "jsx" }, jsxFactory: "React.createElement", jsxFragment: "React.Fragment",
  define: { "process.env.NODE_ENV": '"production"' }, write: false, logLevel: "warning",
});
const js = res.outputFiles[0].contents;
const hash = crypto.createHash("md5").update(js).digest("hex").slice(0, 10);
const appName = `app.${hash}.js`;
for (const f of fs.readdirSync(path.join(OUT, "assets"))) if (/^app\..*\.js$/.test(f)) fs.rmSync(path.join(OUT, "assets", f));
fs.writeFileSync(path.join(OUT, "assets", appName), js);

// ---------- 2. Plantilla HTML
let head = fs.readFileSync(path.join(SRC, "head.html"), "utf8");
const template = head
  + `<script data-goatcounter="https://${GOATCOUNTER}.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>\n`
  + `<script defer src="/assets/${appName}"></script>\n`
  + `</head>\n<body><div id="root"></div>\n</body></html>\n`;
fs.writeFileSync(path.join(OUT, "index.html"), template);

// ---------- 3. Rutas a generar
const app = fs.readFileSync(path.join(SRC, "app.jsx"), "utf8");
const pagesLine = app.match(/const pages=\{([^}]*)\}/)[1];
const routes = [...pagesLine.matchAll(/"?([a-z-]+)"?:[A-Za-z]+Page/g)].map(m => m[1]);
const slugs = [...app.matchAll(/\{slug:"([a-z0-9-]+)"/g)].map(m => m[1]);
const all = [...routes, ...slugs.map(s => "novedades/" + s)];

// ---------- 4. Servidor local y generación de cada página (prerender)
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".ico": "image/x-icon", ".xml": "application/xml", ".txt": "text/plain", ".json": "application/json" };
const server = http.createServer((req, resp) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  let f = path.join(OUT, p);
  if (!path.extname(p)) f = path.join(OUT, "index.html");
  if (!fs.existsSync(f)) { resp.writeHead(404); return resp.end(); }
  resp.writeHead(200, { "content-type": types[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(resp);
}).listen(0);
const port = server.address().port;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.route(/goatcounter|gc\.zgo\.at|fonts\.(googleapis|gstatic)\.com/, r => r.abort());
const errors = [];
page.on("pageerror", e => errors.push(e.message));
const pages = {};
for (const r of all) {
  const url = `http://localhost:${port}${r === "inicio" ? "/" : "/" + r + "/"}`;
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForSelector("#root nav", { state: "attached" });
  await page.evaluate(() => document.querySelectorAll(".rev,.revL,.revR").forEach(e => e.classList.add("on")));
  pages[r] = await page.evaluate(() => "<!DOCTYPE html>\n" + document.documentElement.outerHTML);
}
await browser.close(); server.close();
if (errors.length) { console.error("Errores de JavaScript:", errors); process.exit(1); }
for (const [r, html] of Object.entries(pages)) {
  const dir = r === "inicio" ? OUT : path.join(OUT, r);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

// ---------- 5. Sitemap
const today = new Date().toISOString().slice(0, 10);
const urls = all.filter(r => r !== "legal").map(r => {
  const loc = SITE + (r === "inicio" ? "/" : "/" + r + "/");
  const pr = r === "inicio" ? "1.0" : r.startsWith("servicio") || r === "servicios" ? "0.9" : r.startsWith("novedades/") ? "0.6" : "0.7";
  return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`;
});
fs.writeFileSync(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
console.log(`OK: ${all.length} páginas, ${appName} (${(js.length / 1024).toFixed(0)} KB) → ${OUT}`);

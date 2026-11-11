# Fuente de www.nebego.com

Desde noviembre de 2026, la web ya no se edita directamente en `index.html`. Se edita aquí y se genera.

## Qué hay en esta carpeta

- `src/app.jsx`: todo el contenido y diseño de la web (textos, páginas, formularios).
- `src/head.html`: cabecera común (título por defecto, datos para Google, iconos).
- `build.mjs`: genera la web en la carpeta de arriba.

Esta carpeta no es visible desde internet (está bloqueada en `staticwebapp.config.json`).

## Cómo cambiar algo

1. Editar `src/app.jsx`.
2. En esta carpeta: `npm install` (solo la primera vez) y después `node build.mjs`.
3. Se regeneran `index.html`, una carpeta por página (`servicios/`, `novedades/…`), `assets/app.<código>.js` y `sitemap.xml`.
4. Subir todo a GitHub (rama `main`). Azure lo publica solo en un par de minutos.

Si se añade un artículo nuevo en `ARTICULOS` o una página nueva en `pages`, el script crea su página y la añade al sitemap automáticamente.

## Datos que se usan

- WhatsApp: 628 366 907 (constante `WHATSAPP` en `app.jsx`).
- Instagram y LinkedIn: constantes `INSTAGRAM_URL` y `LINKEDIN_URL`.
- Formularios: Web3Forms (presupuesto y avisos de ayudas) y FormSubmit (empleo), a contacto@nebego.com.
- Analítica: GoatCounter, cuenta `nebego` (constante `GOATCOUNTER` en `build.mjs`). No usa cookies.

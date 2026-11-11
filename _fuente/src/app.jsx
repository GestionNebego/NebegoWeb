const {useState,useEffect,useRef}=React;


const C = {
  blue:"#1B6FBF",blueDark:"#145299",blueLight:"#E8F1FB",
  accent:"#3B9AE1",white:"#FFFFFF",offWhite:"#F7F8FA",
  grayLight:"#EEF0F3",grayMid:"#C4CAD4",grayText:"#6B7785",
  grayDark:"#3A4553",ink:"#1A2332",
};

const LOGO = "assets/img01.png";

const imgCabecera = "assets/img02.jpg";
const img03 = "assets/img03.jpg";
const img04 = "assets/img04.jpg";
const img06 = "assets/img05.jpg";
const img07 = "assets/img06.jpg";
const img08 = "assets/img07.jpg";
const imgMuseo = "assets/img08.jpg";
const imgUniv = "assets/img09.jpg";

const imgNave = "assets/img10.jpg";

const imgEmpleo = "assets/img11.jpg";

const imgInstElec = "assets/img12.jpg";

const imgTelecom = "assets/img13.jpg";

const imgRenov = "assets/img14.jpg";

const imgRecarga = "assets/img15.jpg";

const imgPCI = "assets/img16.jpg";

const imgPH = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='3'%3E%3Crect width='4' height='3' fill='%23e8eef5'/%3E%3C/svg%3E";

const imgPortada = "assets/img17.jpg";

const imgN = "assets/img18.png";

const imgNebego = "assets/img19.png";

const imgMapa = "assets/img20.png";

const imgMapaDark = "assets/img21.png";

const imgNovRecarga = "assets/img22.jpg";

const imgNovEficiencia = "assets/img23.jpg";

const imgNovLegal = "assets/img24.jpg";

const imgNovSeguridad = "assets/img25.jpg";

const imgNovObra = "assets/img26.jpg";

const imgNovRevision = "assets/img27.jpg";

const imgObLoro = "assets/img28.jpg";

const imgObAmigos = "assets/img29.jpg";

const imgObMuga = "assets/img30.jpg";

const imgObMuseo = "assets/img31.jpg";

const imgObPasarela = "assets/img32.jpg";

const imgObMarisol = "assets/img33.jpg";

const imgObCorella = "assets/img34.jpg";

const imgObPalacio = "assets/img35.jpg";

const imgObAulario = "assets/img36.jpg";

const imgObSeminario = "assets/img37.jpg";

const imgObDistricalor = "assets/img38.jpg";

const imgObEstadio = "assets/img39.jpg";

const imgObBardenas = "assets/img40.jpg";

const imgObHacienda = "assets/img41.jpg";

const imgObLaser = "assets/img42.jpg";

const imgObVW = "assets/img43.jpg";

const imgObBunker = "assets/img44.jpg";

const imgObQuirofano = "assets/img45.jpg";

const imgObCentroDia = "assets/img46.jpg";

const imgObEsteribar = "assets/img47.jpg";

const imgObBerriozar = "assets/img48.jpg";

const imgObVillava = "assets/img49.jpg";

const imgObGongora = "assets/img50.jpg";

const imgHombre = "assets/img51.jpg";

const WHATSAPP = "34628366907";
const WHATSAPP_TXT = "628 366 907";
const WHATSAPP_URL = "https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent("Hola, escribo desde la web de Nebego. Quería consultaros: ");
const INSTAGRAM_URL = "https://www.instagram.com/nebego_instalaciones/";
const LINKEDIN_URL = "https://www.linkedin.com/company/montajeselectricosnebego/";

const WEB3FORMS_KEY = "b05e9829-18ab-402c-b325-f5ba2cc4e329";

const IMG = {
  hero:       imgPortada,
  empleo:     imgEmpleo,
  instelec: imgInstElec,
  telecom: imgTelecom,
  renov: imgRenov,
  recarga: imgRecarga,
  pci: imgPCI,
  panel1:     img04,
  cable1:     imgUniv,
  industrial: img06,
  worker:     img07,
  panel2:     img08,
  building:   imgMuseo,
  factory:    img06,
  wiring:     img03,
  proj1:       imgPH,
  proj2:       imgPH,
  proj3:       imgPH,
  proj4:       imgPH,
  proj5:       imgPH,
  proj6:       imgPH,
  poema:       imgPH,
  cabecera:   imgNave,
};

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');`;

const GLOBAL = `
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:#FFFFFF;color:#1A2332;font-family:'Poppins',sans-serif;}
.b{font-family:'Poppins',sans-serif;}
.bc{font-family:'Poppins',sans-serif;}
.rev{opacity:0;transform:translateY(30px);transition:opacity .65s ease,transform .65s ease;}
.revL{opacity:0;transform:translateX(-36px);transition:opacity .7s ease,transform .7s ease;}
.revR{opacity:0;transform:translateX(36px);transition:opacity .7s ease,transform .7s ease;}
.rev.on,.revL.on,.revR.on{opacity:1;transform:none;}
.d1{transition-delay:.08s}.d2{transition-delay:.16s}.d3{transition-delay:.24s}.d4{transition-delay:.32s}
a{text-decoration:none;color:inherit;}
input,textarea{font-family:'Poppins',sans-serif;outline:none;border:none;background:transparent;}
@keyframes fup{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:820px){.dcol{grid-template-columns:1fr!important}.flip{direction:ltr!important}}
@media(max-width:1020px){.dnav{display:none!important}.mnb{display:flex!important}}
.dnav button,.dnav a{white-space:nowrap}
.mapfx{background-attachment:fixed;}
.bcbar{position:fixed;right:clamp(10px,1.4vw,20px);top:50%;transform:translateY(-50%);z-index:150;display:flex;flex-direction:column;border-radius:10px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.28);background:#1C3266}
.bcitem{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;width:78px;height:68px;color:#fff;font-size:10.5px;font-weight:700;letter-spacing:.01em;border-top:1px solid rgba(255,255,255,.12);transition:background .2s}
.bcitem:first-child{border-top:none}
.bcitem:hover{background:#25407D}
.bcitem.bc-wa{background:#1FA855}.bcitem.bc-wa:hover{background:#178A45}
.nbmap .leaflet-tile-pane{filter:invert(100%) hue-rotate(185deg) brightness(.92) contrast(.88) saturate(.55);}
.nbmap .leaflet-control-attribution{background:rgba(20,30,50,.75);color:#cdd6e6;font-size:10px}
.nbmap .leaflet-control-attribution a{color:#fff}
.nbmap path.leaflet-interactive{cursor:pointer}
@media(min-width:901px){.blogfaq{position:sticky;top:110px;max-height:calc(100vh - 130px);overflow-y:auto;padding-right:6px}}@media(max-width:900px){.blog2col{grid-template-columns:1fr!important}}
@media(max-width:900px){.eqgrid{grid-template-columns:1fr 1fr!important}}@media(max-width:600px){.eqgrid{grid-template-columns:1fr!important}}
.nbtip small{display:block;font-size:11px;color:#5b6575;font-weight:600}.nbtip b{display:block;font-size:13px;color:#1A2332;max-width:240px;white-space:normal}.nbtip em{display:block;font-style:normal;font-size:11.5px;color:#1B6FBF;font-weight:700;margin-top:2px}
.nbviews{display:flex;background:rgba(20,30,50,.85);border-radius:6px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.3)}
.nbviews button{background:none;border:none;color:#cdd6e6;font:600 12px Poppins,sans-serif;padding:8px 11px;cursor:pointer}
.nbviews button.on{background:#1B6FBF;color:#fff}
.nbpin{position:absolute;transform:translate(-14px,-50%);display:flex;align-items:center;gap:6px;background:#1FA855;color:#fff;font:700 12px Poppins,sans-serif;padding:5px 11px 5px 6px;border-radius:999px;white-space:nowrap;box-shadow:0 4px 12px rgba(0,0,0,.35)}
.nbpin span{width:12px;height:12px;border-radius:50%;background:#fff;border:3px solid #0d6b36;display:block}
@media(max-width:640px){.bcbar{top:auto;bottom:0;left:0;right:0;transform:none;flex-direction:row;border-radius:0;box-shadow:0 -4px 16px rgba(0,0,0,.18)}
.bcitem{flex:1;width:auto;height:58px;border-top:none;border-left:1px solid rgba(255,255,255,.12)}.bcitem:first-child{border-left:none}
footer{padding-bottom:90px!important}}
@media(max-width:820px){.mapfx{background-attachment:scroll;background-size:cover !important;}}
`;

function useReveal() {
  const r = useRef(null);
  useEffect(() => {
    const el = r.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("on"); o.disconnect(); }
    }, { threshold: 0.1 });
    o.observe(el); return () => o.disconnect();
  }, []);
  return r;
}

function V({ c="rev", d="", style={}, children }) {
  const r = useReveal();
  return <div ref={r} className={`${c} ${d}`} style={style}>{children}</div>;
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function IcoChat({size=22,color="#fff"}){
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19.5l1.2-3.6A8 8 0 1 1 8.4 19L4 19.5z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 10.5h6M9 13.5h4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcoExt({size=12,color="currentColor"}){
  return <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4.5 2H2v8h8V7.5M7 2h3v3M10 2 5.5 6.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

// Barra flotante de contacto: a la derecha en ordenador, abajo en el móvil.
// Iconos genéricos (sin logotipos de marca).
function IcoPhone({size=20,color="#fff"}){
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3.5h3.6l1.7 4.4-2.2 1.5a12 12 0 0 0 6.5 6.5l1.5-2.2 4.4 1.7V19a2 2 0 0 1-2 2C10.3 21 3 13.7 3 5.5a2 2 0 0 1 2-2z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/></svg>;
}
function IcoPhoto({size=20,color="#fff"}){
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4.5" width="18" height="15" rx="2.5" stroke={color} strokeWidth="1.8"/><circle cx="8.5" cy="9.5" r="1.7" fill={color}/><path d="M4 17.5l5-4.5 3.5 3 3-2.5 4.5 4" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/></svg>;
}
function IcoWork({size=20,color="#fff"}){
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" stroke={color} strokeWidth="1.8"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18" stroke={color} strokeWidth="1.8"/></svg>;
}
function BarraContacto(){
  const items=[
    {t:"WhatsApp",href:WHATSAPP_URL,ext:true,ico:<IcoChat size={21}/>,cls:"bc-wa"},
    {t:"Llamar",href:"tel:+34948236434",ico:<IcoPhone/>},
    {t:"Instagram",href:INSTAGRAM_URL,ext:true,ico:<IcoPhoto/>},
    {t:"LinkedIn",href:LINKEDIN_URL,ext:true,ico:<IcoWork/>},
  ];
  return (
    <nav className="bcbar" aria-label="Contacto rápido">
      {items.map(it=>(
        <a key={it.t} href={it.href} className={"bcitem "+(it.cls||"")} aria-label={it.t} {...(it.ext?{target:"_blank",rel:"noopener"}:{})}>
          {it.ico}<span>{it.t}</span>
        </a>
      ))}
    </nav>
  );
}

// Bloque "Avísame cuando salgan ayudas" (suscripción a novedades con consentimiento expreso)
function AvisosNovedades(){
  const [email,setEmail]=useState("");
  const [nombre,setNombre]=useState("");
  const [acepto,setAcepto]=useState(false);
  const [estado,setEstado]=useState("");
  const [error,setError]=useState("");
  const enviar=async()=>{
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ setError("Escribe un correo electrónico válido."); return; }
    if(!acepto){ setError("Para apuntarte tienes que marcar la casilla de aceptación."); return; }
    setError(""); setEstado("enviando");
    try{
      const fd=new FormData();
      fd.append("access_key",WEB3FORMS_KEY);
      fd.append("subject","Alta novedades — web Nebego");
      fd.append("from_name","Web Nebego");
      fd.append("Email",email); fd.append("Nombre",nombre||"(sin indicar)");
      fd.append("Consentimiento","Acepta recibir por correo avisos de ayudas y novedades de Montajes Eléctricos Nebego, S.L. y ha leído la política de privacidad.");
      fd.append("Fecha y hora",new Date().toLocaleString("es-ES",{timeZone:"Europe/Madrid"}));
      fd.append("Página",window.location.pathname);
      const r=await fetch("https://api.web3forms.com/submit",{method:"POST",body:fd});
      const j=await r.json();
      if(j.success) setEstado("ok"); else { setEstado(""); setError("No se ha podido enviar. Escríbenos a contacto@nebego.com."); }
    }catch(e){ setEstado(""); setError("No se ha podido enviar por un problema de conexión. Inténtalo de nuevo."); }
  };
  const fld={width:"100%",padding:"12px 14px",fontSize:15,color:C.ink,background:C.white,border:`1.5px solid ${C.grayMid}`,borderRadius:3};
  return (
    <section id="avisos" style={{background:C.blueLight,padding:"clamp(3.5rem,6vw,5rem) clamp(1rem,4vw,2.8rem)"}}>
      <div style={{maxWidth:880,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(1.8rem,4vw,3.5rem)",alignItems:"center"}} className="dcol">
          <div>
            <div style={{display:"inline-flex",alignItems:"center",gap:10,marginBottom:12}}>
              <div style={{width:34,height:3,background:C.blue,borderRadius:2}}/>
              <span style={{fontSize:11,fontWeight:700,letterSpacing:".14em",color:C.blue,textTransform:"uppercase"}}>Avisos de ayudas</span>
            </div>
            <h2 className="b" style={{fontSize:"clamp(1.4rem,2.6vw,2rem)",fontWeight:800,color:C.ink,lineHeight:1.2,letterSpacing:"-.02em",marginBottom:12}}>¿Te avisamos cuando salgan ayudas?</h2>
            <p style={{fontSize:14.5,color:C.grayText,lineHeight:1.8}}>Te escribimos cuando se abran ayudas para placas solares, puntos de recarga o mejoras de la instalación eléctrica en Navarra, y con alguna novedad útil. Pocos correos y puedes darte de baja cuando quieras.</p>
          </div>
          {estado==="ok" ? (
            <div style={{background:C.white,borderRadius:4,padding:"2rem",textAlign:"center"}}>
              <h3 className="b" style={{fontSize:18,fontWeight:800,color:C.ink,marginBottom:8}}>¡Apuntado!</h3>
              <p style={{fontSize:14,color:C.grayText,lineHeight:1.7}}>Te avisaremos cuando haya novedades. Para darte de baja, basta con escribir a contacto@nebego.com.</p>
            </div>
          ) : (
            <div>
              <input type="text" placeholder="Nombre (opcional)" value={nombre} onChange={e=>setNombre(e.target.value)} style={{...fld,marginBottom:10}}/>
              <input type="email" placeholder="Correo electrónico" value={email} onChange={e=>setEmail(e.target.value)} style={{...fld,marginBottom:12}}/>
              <label style={{display:"flex",alignItems:"flex-start",gap:9,marginBottom:14,cursor:"pointer"}}>
                <input type="checkbox" checked={acepto} onChange={e=>setAcepto(e.target.checked)} style={{marginTop:3,accentColor:C.blue,flexShrink:0}}/>
                <span style={{fontSize:12,color:C.grayText,lineHeight:1.55}}>Acepto recibir por correo avisos de ayudas y novedades de Nebego y he leído la <a {...linkProps("legal")} style={{color:C.blue,textDecoration:"underline"}}>política de privacidad</a>.</span>
              </label>
              <button onClick={enviar} disabled={estado==="enviando"} style={{width:"100%",padding:"13px 0",background:estado==="enviando"?C.grayMid:C.blue,color:C.white,fontSize:14,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",border:"none",borderRadius:3,cursor:"pointer",fontFamily:"inherit"}}>{estado==="enviando"?"Enviando…":"Avisadme"}</button>
              {error && <p style={{fontSize:12.5,color:"#E23B3B",marginTop:10,lineHeight:1.5}}>{error}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Hero(){
  return (
    <section id="hero" style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",overflow:"hidden"}}>
      <img src={IMG.hero} alt="Poema del Mar — iluminación de Montajes Eléctricos Nebego"
        style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
      <div style={{position:"absolute",inset:0,
        background:"linear-gradient(180deg,rgba(10,22,42,.5) 0%,rgba(12,28,55,.6) 100%)"}}/>
      <div style={{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",
        gap:"clamp(24px,5vw,72px)",flexWrap:"wrap",padding:"clamp(150px,23vh,250px) clamp(1rem,4vw,2.8rem) 0",animation:"fup .8s .2s both"}}>
        <img src={imgN} alt="Símbolo Nebego"
          style={{height:"clamp(140px,25vh,300px)",width:"auto",display:"block",
            filter:"drop-shadow(0 6px 24px rgba(0,0,0,.45))"}}/>
        <img src={imgNebego} alt="NEBEGO"
          style={{height:"clamp(42px,9vw,135px)",width:"auto",display:"block",
            filter:"drop-shadow(0 4px 24px rgba(0,0,0,.4))"}}/>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [["⚡","Instaladores autorizados"],["📋","Cumplimiento REBT"],["🔧","Ejecución en obra real"],["🏢","Entornos corporativos e industriales"],["📅","Fundada en 2000"]];
  return (
    <div style={{background:C.blue,padding:"14px clamp(1rem,4vw,2.8rem)"}}>
      <div style={{maxWidth:1280,margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {items.map(([ic,tx],i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:7,padding:"6px 18px",
            borderRight:i<items.length-1?"1px solid rgba(255,255,255,.2)":"none"}}>
            <span style={{fontSize:14}}>{ic}</span>
            <span style={{fontSize:12,fontWeight:600,color:C.white,letterSpacing:".04em",whiteSpace:"nowrap"}}>{tx}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="empresa" style={{background:C.white,padding:"clamp(7rem,11vw,9.5rem) clamp(1rem,4vw,2.8rem)"}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <V>
          <div style={{textAlign:"center",marginBottom:"clamp(2.8rem,5vw,4.5rem)"}}>
            <h1 className="b" style={{fontSize:"clamp(2.4rem,5vw,4rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",lineHeight:1.05,marginBottom:18}}>El equipo detrás de cada proyecto</h1>
            <p style={{fontSize:"clamp(1rem,1.5vw,1.18rem)",color:C.grayText,lineHeight:1.7,maxWidth:700,margin:"0 auto"}}>Profesionales comprometidos con la excelencia y tu satisfacción.</p>
          </div>
        </V>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(2rem,5vw,5rem)",alignItems:"center"}} className="dcol">
          <V c="revL">
            <p style={{fontSize:15.5,color:C.grayText,lineHeight:1.95}}>Detrás de cada instalación hay un equipo técnico que planifica, coordina y ejecuta con rigor. En Nebego trabajamos con responsabilidad, cercanía y compromiso para ofrecer resultados fiables y bien terminados.</p>
          </V>
          <V c="revR">
            <div style={{position:"relative"}}>
              <img src={imgHombre} alt="Electricista de Montajes Eléctricos Nebego trabajando en un cuadro" style={{width:"100%",height:440,objectFit:"cover",borderRadius:4,display:"block"}}/>
              <div style={{position:"absolute",bottom:-20,left:-20,background:C.blue,color:C.white,padding:"18px 24px",borderRadius:3,boxShadow:"0 8px 28px rgba(27,111,191,.28)"}}>
                <div className="bc" style={{fontSize:"1.9rem",fontWeight:800,lineHeight:1}}>2000</div>
                <div style={{fontSize:11,fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginTop:4,opacity:.8}}>Fundada en</div>
              </div>
              <div style={{position:"absolute",top:-14,right:-14,background:C.accent,width:58,height:58,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M14 2L4 15h9l-1 9 10-13h-9l1-9z" fill="white"/></svg>
              </div>
            </div>
          </V>
        </div>
      </div>
    </section>
  );
}

function Services(){
  const ic={width:30,height:30,viewBox:"0 0 48 48",fill:"none",stroke:C.blue,strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};
  const areas=[
    {t:"Instalaciones eléctricas",img:IMG.instelec,
      icon:(<svg {...ic}><path d="M24 5V43"/><path d="M14 43 24 5 34 43"/><path d="M16.5 36H31.5"/><path d="M18.5 28H29.5"/><path d="M11 20H37"/><path d="M15 13H33"/><path d="M20 20v4M28 20v4"/></svg>),
      d:"Instalaciones de baja, media y alta tensión, cuadros de distribución, iluminación, alumbrado público y reformas. Como instaladores autorizados (IBTE 0273 / LAT-0273), ejecutamos y legalizamos cada instalación conforme a normativa."},
    {t:"PCI y Telecomunicaciones",img:IMG.telecom,
      icon:(<svg {...ic}><circle cx="24" cy="13" r="2.5"/><path d="M24 15.5V42"/><path d="M17 42 24 22 31 42"/><path d="M19.5 34H28.5"/><path d="M30 8a9 9 0 0 1 0 11"/><path d="M34 5a14 14 0 0 1 0 17"/><path d="M18 8a9 9 0 0 0 0 11"/><path d="M14 5a14 14 0 0 0 0 17"/></svg>),
      d:"Protección contra incendios (detección y alarma) e infraestructuras de telecomunicaciones: cableado estructurado, fibra, CCTV y domótica. Empresa habilitada en PCI (EIPCI-0167) e instaladora de telecomunicaciones (nº 8052)."},
    {t:"Renovables",img:IMG.renov,
      icon:(<svg {...ic}><circle cx="32" cy="12" r="4"/><path d="M32 4v3M32 17v3M24 12h3M37 12h3"/><path d="M10 40 14 26h16l4 14Z"/><path d="M12.5 33h19"/><path d="M19 26 17 40M25 26l.5 14"/></svg>),
      d:"Instalaciones de autoconsumo fotovoltaico para vivienda, comunidad, empresa e industria. Diseño, montaje y legalización de la instalación, con soluciones orientadas al ahorro y la eficiencia energética."},
    {t:"Puntos de recarga de vehículo eléctrico",img:IMG.recarga,
      icon:(<svg {...ic}><rect x="13" y="5" width="18" height="38" rx="2.5"/><path d="M13 14h18"/><path d="M24 19 20 28h4l-2 8"/><path d="M31 13h3a2 2 0 0 1 2 2v8a2.5 2.5 0 0 0 5 0v-6"/></svg>),
      d:"Instalación de puntos de recarga para vehículo eléctrico en viviendas, comunidades, empresas y aparcamientos, con sus protecciones, gestión de carga y legalización de la instalación."},
  ];
  return (
    <section id="servicios" style={{background:C.white,padding:"clamp(5rem,9vw,9rem) clamp(1rem,4vw,2.8rem)",borderTop:`1px solid ${C.grayLight}`}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"clamp(3rem,5vw,4.5rem) clamp(2rem,4vw,3.5rem)"}} className="dcol">
          {areas.map((a,i)=>(
            <V key={i} d={`d${(i%3)+1}`}>
              <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
                <div style={{width:"100%",aspectRatio:"16 / 10",overflow:"hidden",borderRadius:4,marginBottom:20}}>
                  <img src={a.img} alt={a.t}
                    style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .5s"}}
                    onMouseEnter={e=>e.currentTarget.style.transform="scale(1.05)"}
                    onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}/>
                </div>
                <div style={{marginBottom:11}}>{a.icon}</div>
                <h3 className="b" style={{fontSize:"1.2rem",fontWeight:700,color:C.blue,lineHeight:1.25,marginBottom:12,letterSpacing:"-.01em"}}>{a.t}</h3>
                <p style={{fontSize:13.5,color:C.grayText,lineHeight:1.8,marginBottom:20,flex:1}}>{a.d}</p>
                <button onClick={()=>go(["servicio-electricas","servicio-telecom","servicio-renovables","servicio-recarga"][i])}
                  style={{alignSelf:"flex-start",fontSize:12,fontWeight:700,letterSpacing:".04em",background:C.blue,color:C.white,
                    padding:"9px 20px",borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit",transition:"background .2s"}}
                  onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
                  onMouseLeave={e=>e.currentTarget.style.background=C.blue}>+ info</button>
              </div>
            </V>
          ))}
        </div>
        <V>
          <div style={{textAlign:"center",marginTop:"clamp(3.5rem,6vw,5.5rem)"}}>
            <p style={{fontSize:15,color:C.grayText,lineHeight:1.75,marginBottom:18}}>¿Tu proyecto no encaja en ninguna de estas áreas? Cuéntanoslo y lo estudiamos.</p>
            <button onClick={()=>openContacto()}
              style={{display:"inline-flex",alignItems:"center",gap:8,background:C.blue,color:C.white,fontWeight:700,fontSize:14,letterSpacing:".05em",textTransform:"uppercase",padding:"13px 28px",borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit",transition:"background .2s"}}
              onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
              onMouseLeave={e=>e.currentTarget.style.background=C.blue}>
              Cuéntanos tu proyecto
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </V>
      </div>
    </section>
  );
}

function AltBlock({img,alt,subtitle,title,text,bullets,rev}) {
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0,direction:rev?"rtl":"ltr"}} className="dcol flip">
      <div style={{direction:"ltr",overflow:"hidden",minHeight:400,maxHeight:480}}>
        <img src={img} alt={alt} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
      </div>
      <div style={{direction:"ltr",background:rev?C.blueLight:C.grayLight,
        display:"flex",alignItems:"center",
        padding:"clamp(2.5rem,5vw,4.5rem) clamp(2rem,4vw,3.5rem)"}}>
        <V c={rev?"revR":"revL"}>
          <div style={{width:34,height:3,background:C.blue,borderRadius:2,marginBottom:14}}/>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:".14em",color:C.blue,textTransform:"uppercase",marginBottom:10}}>{subtitle}</div>
          <h2 className="b" style={{fontSize:"clamp(1.4rem,2.4vw,2.1rem)",fontWeight:800,color:C.ink,
            lineHeight:1.18,marginBottom:18,letterSpacing:"-.02em"}}>{title}</h2>
          <p style={{fontSize:15,color:C.grayText,lineHeight:1.85,marginBottom:bullets?22:0}}>{text}</p>
          {bullets&&(
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:9}}>
              {bullets.map((b,i)=>(
                <li key={i} style={{display:"flex",gap:9,alignItems:"flex-start",fontSize:14,color:C.grayDark,fontWeight:500}}>
                  <div style={{width:5,height:5,borderRadius:"50%",background:C.blue,marginTop:7,flexShrink:0}}/>{b}
                </li>
              ))}
            </ul>
          )}
        </V>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section style={{borderTop:`1px solid ${C.grayLight}`}}>
      <AltBlock img={IMG.panel2} alt="Cuadro eléctrico de distribución"
        subtitle="Instalaciones eléctricas"
        title="Cuadros y sistemas de distribución eléctrica."
        text="Ejecutamos instalaciones de baja, media y alta tensión con criterio técnico y cumplimiento normativo. Desde el diseño del cuadro de distribución hasta la puesta en servicio, coordinamos cada fase con el resto de gremios en obra."
        bullets={["Cuadros de baja tensión para edificios y naves","Centros de transformación MT/AT","Instalaciones en entornos de alta exigencia técnica"]}
        rev={false}/>
      <AltBlock img={IMG.building} alt="Edificio corporativo"
        subtitle="Entornos corporativos"
        title="Proyectos en edificios de oficinas y uso corporativo."
        text="Trabajamos habitualmente en edificios de nueva construcción y rehabilitación con uso corporativo: oficinas, hoteles, centros educativos y sanitarios. Conocemos los estándares que se exigen en este tipo de obra."
        bullets={["Coordinación con constructoras y project managers","Instalaciones de telecomunicaciones e ICT integradas","Protección contra incendios conforme a CTE"]}
        rev={true}/>
      <AltBlock img={IMG.factory} alt="Nave industrial"
        subtitle="Entornos industriales"
        title="Instalaciones técnicas en entornos industriales y logísticos."
        text="Naves industriales, plantas de producción y centros logísticos presentan requisitos específicos de potencia, redundancia y seguridad. Tenemos experiencia en coordinación con ingeniería de procesos y mantenimiento industrial."
        bullets={["Alta potencia y cuadros de fuerza industriales","Sistemas de seguridad y detección de incendios industriales","Media tensión y centros de transformación propios"]}
        rev={false}/>
    </section>
  );
}

function Sectors() {
  const s = [
    {label:"Hoteles y hospitality",img:IMG.worker},
    {label:"Edificios de oficinas",img:IMG.panel1},
    {label:"Industria y logística",img:IMG.factory},
    {label:"Centros educativos y cultura",img:IMG.hero},
    {label:"Museos e institucionales",img:IMG.building},
    {label:"Infraestructura y espacio público",img:IMG.proj4},
    {label:"Ocio y restauración",img:IMG.wiring},
    {label:"Obra nueva y rehabilitación",img:IMG.proj6},
  ];
  return (
    <section id="sectores" style={{background:C.white,padding:"clamp(5rem,9vw,9rem) clamp(1rem,4vw,2.8rem)",borderTop:`1px solid ${C.grayLight}`}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <V>
          <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"clamp(2rem,4vw,3.5rem)",flexWrap:"wrap",gap:18}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:13}}>
                <div style={{width:34,height:3,background:C.blue,borderRadius:2}}/>
                <span style={{fontSize:11,fontWeight:700,letterSpacing:".14em",color:C.blue,textTransform:"uppercase"}}>Sectores</span>
              </div>
              <h2 className="b" style={{fontSize:"clamp(1.6rem,2.8vw,2.5rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em"}}>
                Ámbitos en los que trabajamos.
              </h2>
            </div>
            <p style={{fontSize:15,color:C.grayText,maxWidth:360,lineHeight:1.75}}>
              Nuestra experiencia cubre proyectos de muy distinta tipología, lo que nos da capacidad de adaptación técnica real.
            </p>
          </div>
        </V>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:14}}>
          {s.map((it,i)=>(
            <V key={i} d={`d${(i%4)+1}`}>
              <div style={{position:"relative",overflow:"hidden",borderRadius:4,height:195,cursor:"default"}}
                onMouseEnter={e=>e.currentTarget.querySelector("img").style.transform="scale(1.07)"}
                onMouseLeave={e=>e.currentTarget.querySelector("img").style.transform="scale(1)"}>
                <img src={it.img} alt={it.label}
                  style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .45s"}}/>
                <div style={{position:"absolute",inset:0,
                  background:"linear-gradient(to top,rgba(18,38,68,.76) 0%,rgba(0,0,0,.07) 100%)"}}/>
                <div style={{position:"absolute",bottom:16,left:16,right:16,
                  fontSize:13,fontWeight:700,color:C.white,letterSpacing:".02em"}}>{it.label}</div>
              </div>
            </V>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {icon:"📐",t:"Experiencia acumulada",d:"Llevar activos desde 2000 es el resultado de haber resuelto proyectos con complejidad técnica real y haber construido un equipo con criterio propio."},
    {icon:"🔩",t:"Rigor en la ejecución",d:"Cada instalación parte de un análisis real del proyecto. Dimensionamos, planificamos y ejecutamos con precisión, sin soluciones genéricas ni atajos."},
    {icon:"🏗",t:"Coordinación en obra",d:"Sabemos trabajar donde la coordinación con otros gremios y la gestión de plazos son determinantes. La obra no espera y nosotros tampoco."},
    {icon:"📋",t:"Cumplimiento normativo",d:"Todas nuestras instalaciones se ejecutan conforme a normativa vigente: REBT, CTE, protocolos MT/AT. Sin atajos ni interpretaciones convenientes."},
    {icon:"🤝",t:"Interlocución directa",d:"El cliente tiene acceso directo a los responsables técnicos del proyecto, sin capas intermedias. Comunicación clara en todas las fases."},
    {icon:"⚙️",t:"Adaptación al proyecto",d:"Cada instalación se estudia en función del contexto real: obra nueva, reforma, entorno industrial o corporativo. La solución responde al proyecto, no al revés."},
  ];
  return (
    <section style={{background:C.ink,padding:"clamp(5rem,9vw,9rem) clamp(1rem,4vw,2.8rem)"}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <V>
          <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",
            marginBottom:"clamp(2rem,4vw,3.5rem)",flexWrap:"wrap",gap:18}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:13}}>
                <div style={{width:34,height:3,background:C.accent,borderRadius:2}}/>
                <span style={{fontSize:11,fontWeight:700,letterSpacing:".14em",color:C.accent,textTransform:"uppercase"}}>Por qué Nebego</span>
              </div>
              <h2 className="b" style={{fontSize:"clamp(1.6rem,2.8vw,2.5rem)",fontWeight:800,color:C.white,letterSpacing:"-.02em"}}>
                Lo que diferencia nuestro trabajo.
              </h2>
            </div>
          </div>
        </V>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:2}}>
          {items.map((it,i)=>(
            <V key={i} d={`d${(i%3)+1}`}>
              <div style={{background:i%2===0?"rgba(255,255,255,.04)":"rgba(255,255,255,.025)",
                padding:"clamp(1.6rem,2.8vw,2.4rem)",borderTop:"1px solid rgba(255,255,255,.07)",transition:"background .2s"}}
                onMouseEnter={e=>e.currentTarget.style.background="rgba(27,111,191,.14)"}
                onMouseLeave={e=>e.currentTarget.style.background=i%2===0?"rgba(255,255,255,.04)":"rgba(255,255,255,.025)"}>
                <div style={{fontSize:22,marginBottom:16}}>{it.icon}</div>
                <h3 className="b" style={{fontSize:15,fontWeight:800,color:C.white,marginBottom:11}}>{it.t}</h3>
                <p style={{fontSize:13.5,color:"rgba(255,255,255,.52)",lineHeight:1.82}}>{it.d}</p>
              </div>
            </V>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectModal({project, onClose}) {
  useEffect(() => {
    const fn = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, []);
  return (
    <div onClick={onClose} style={{
      position:"fixed",inset:0,zIndex:1000,
      background:"rgba(10,20,40,.82)",backdropFilter:"blur(6px)",
      display:"flex",alignItems:"center",justifyContent:"center",
      padding:"clamp(1rem,4vw,2rem)",
      animation:"fadeModal .25s ease",
    }}>
      <style>{`@keyframes fadeModal{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}`}</style>
      <div onClick={e=>e.stopPropagation()} style={{
        background:C.white,borderRadius:6,overflow:"hidden",
        width:"100%",maxWidth:860,
        maxHeight:"90vh",display:"flex",flexDirection:"column",
        boxShadow:"0 32px 80px rgba(0,0,0,.4)",
      }}>
        {/* Image */}
        <div style={{position:"relative",flexShrink:0,height:"clamp(220px,45vw,420px)",overflow:"hidden"}}>
          <img src={project.img} alt={project.label}
            style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
          <div style={{position:"absolute",inset:0,
            background:"linear-gradient(to top,rgba(10,20,40,.6) 0%,transparent 50%)"}}/>
          {/* Tag */}
          <div style={{position:"absolute",top:16,left:16,background:C.blue,color:C.white,
            fontSize:11,fontWeight:700,letterSpacing:".08em",padding:"4px 12px",
            borderRadius:2,textTransform:"uppercase"}}>{project.tag}</div>
          {/* Close btn */}
          <button onClick={onClose} style={{
            position:"absolute",top:14,right:14,
            width:36,height:36,borderRadius:"50%",
            background:"rgba(255,255,255,.15)",backdropFilter:"blur(8px)",
            border:"1px solid rgba(255,255,255,.3)",
            color:C.white,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
            transition:"background .2s",
          }}
            onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.3)"}
            onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.15)"}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          {/* Title overlay */}
          <div style={{position:"absolute",bottom:20,left:24,right:24}}>
            <h3 className="b" style={{fontSize:"clamp(1.2rem,2.5vw,1.6rem)",fontWeight:800,
              color:C.white,lineHeight:1.2,letterSpacing:"-.01em"}}>{project.label}</h3>
          </div>
        </div>
        {/* Content */}
        <div style={{padding:"clamp(1.4rem,3vw,2rem) clamp(1.4rem,3vw,2rem)",overflowY:"auto"}}>
          <div style={{display:"flex",gap:24,flexWrap:"wrap",marginBottom:20}}>
            {project.meta && project.meta.map((m,i)=>(
              <div key={i} style={{borderLeft:`3px solid ${C.blue}`,paddingLeft:12}}>
                <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",color:C.grayText,textTransform:"uppercase",marginBottom:2}}>{m.label}</div>
                <div style={{fontSize:14,fontWeight:600,color:C.ink}}>{m.value}</div>
              </div>
            ))}
          </div>
          <p style={{fontSize:15,color:C.grayText,lineHeight:1.85,marginBottom:20}}>{project.desc}</p>
          <button onClick={()=>{onClose();setTimeout(()=>openContacto(),100);}} style={{
            display:"inline-flex",alignItems:"center",gap:8,
            background:C.blue,color:C.white,fontWeight:700,
            fontSize:13,letterSpacing:".06em",textTransform:"uppercase",
            padding:"11px 24px",borderRadius:3,transition:"background .2s",
            border:"none",cursor:"pointer",fontFamily:"inherit",
          }}
            onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
            onMouseLeave={e=>e.currentTarget.style.background=C.blue}
          >
            Solicitar información
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

const PROYECTOS = [
  {
    img:imgObPalacio, label:"Palacio de Navarra", tag:"Edificio público",
    meta:[{label:"Tipo",value:"Edificio institucional / histórico"},{label:"Especialidad",value:"Baja tensión, iluminación, canalizaciones y cuadros eléctricos"},{label:"Ubicación",value:"Pamplona, Navarra"}],
    desc:"Participación en la segunda fase de trabajos eléctricos del Palacio de Navarra, uno de los edificios institucionales más representativos de la Comunidad Foral. La actuación requirió una ejecución técnica cuidada, coordinación en obra y especial atención a la integración de las instalaciones en un edificio de alto valor representativo.",
  },
  {
    img:imgObSeminario, label:"Casa Seminario — Ayuntamiento de Pamplona", tag:"Edificio público",
    meta:[{label:"Tipo",value:"Edificio municipal / administrativo"},{label:"Especialidad",value:"Baja tensión, iluminación, canalizaciones y cuadros eléctricos"},{label:"Ubicación",value:"Pamplona, Navarra"}],
    desc:"Trabajos eléctricos en edificio vinculado al Ayuntamiento de Pamplona. La intervención se desarrolló con criterios de seguridad, orden y adaptación a las necesidades de un edificio público de uso administrativo o institucional.",
  },
  {
    img:imgObEstadio, label:"Estadio Larrabide", tag:"Deportivo",
    meta:[{label:"Tipo",value:"Instalación deportiva"},{label:"Especialidad",value:"Baja tensión, iluminación, cuadros eléctricos y canalizaciones"},{label:"Ubicación",value:"Pamplona, Navarra"}],
    desc:"Trabajos eléctricos en instalación deportiva de referencia en Pamplona. La intervención incluyó soluciones de distribución eléctrica e iluminación, adaptadas a las necesidades de un espacio deportivo con uso intensivo y público.",
  },
  {
    img:imgObMuseo, label:"Museo de Arte Contemporáneo — Universidad de Navarra", tag:"Iluminación",
    meta:[{label:"Tipo",value:"Museo / edificio cultural"},{label:"Especialidad",value:"Baja tensión, iluminación, canalizaciones y telecomunicaciones"},{label:"Ubicación",value:"Pamplona, Navarra"}],
    desc:"Participación en trabajos eléctricos en un edificio cultural de referencia en Navarra. La instalación requería especial atención a la iluminación, la integración técnica y la fiabilidad de los sistemas en un espacio destinado a exposiciones y actividad cultural.",
  },
  {
    img:imgObAulario, label:"Aulario UPNA", tag:"Baja tensión",
    meta:[{label:"Tipo",value:"Edificio universitario / docente"},{label:"Especialidad",value:"Baja tensión, iluminación, canalizaciones y telecomunicaciones"},{label:"Ubicación",value:"Pamplona, Navarra"}],
    desc:"Participación en trabajos de instalación eléctrica en edificio docente de la Universidad Pública de Navarra. La actuación incluyó soluciones orientadas al funcionamiento de aulas, zonas comunes y espacios técnicos, garantizando una instalación ordenada y adaptada al uso universitario.",
  },
  {
    img:imgObDistricalor, label:"Nave Districalor Txantrea", tag:"Industrial",
    meta:[{label:"Tipo",value:"Nave industrial / instalación energética"},{label:"Especialidad",value:"Baja tensión, fuerza, cuadros eléctricos y canalizaciones industriales"},{label:"Ubicación",value:"Txantrea, Pamplona, Navarra"}],
    desc:"Trabajos eléctricos en nave vinculada a actividad energética o industrial. La instalación requirió una ejecución técnica orientada a la distribución de potencia, cuadros eléctricos y canalizaciones, con especial atención a la seguridad y continuidad de servicio.",
  },
  {
    img:imgPortada, label:"Poema del Mar Aquarium", tag:"Baja tensión",
    meta:[{label:"Tipo",value:"Acuario / edificio turístico"},{label:"Especialidad",value:"Baja tensión, iluminación, cuadros eléctricos y canalizaciones"},{label:"Ubicación",value:"Las Palmas de Gran Canaria"}],
    desc:"Trabajos de instalación eléctrica en un edificio turístico y técnico de gran singularidad. La intervención se desarrolló en un entorno con altos requisitos de seguridad, coordinación y fiabilidad de las instalaciones.",
  },
  {
    img:imgObVW, label:"Volkswagen N1C", tag:"Industrial",
    meta:[{label:"Tipo",value:"Instalación industrial / automoción"},{label:"Especialidad",value:"Baja tensión, fuerza, alimentación de climatización y cuadros eléctricos"},{label:"Ubicación",value:"Navarra"}],
    desc:"Trabajos eléctricos asociados a instalación de climatización en entorno industrial vinculado a Volkswagen N1C. La intervención requirió alimentación eléctrica, canalizaciones y coordinación técnica para dar servicio a equipos de climatización en un entorno de alta exigencia.",
  },
  {
    img:imgObAmigos, label:"Edificio Amigos — Universidad de Navarra", tag:"Baja tensión",
    meta:[{label:"Tipo",value:"Edificio universitario / docente"},{label:"Especialidad",value:"Baja tensión, iluminación, telecomunicaciones y cuadros eléctricos"},{label:"Ubicación",value:"Pamplona, Navarra"}],
    desc:"Participación en instalaciones eléctricas del Edificio Amigos, destinado a Económicas y másteres de la Universidad de Navarra. Los trabajos estuvieron orientados a dotar al edificio de una instalación segura, ordenada y adaptada a espacios docentes y administrativos.",
  },
  {
    img:imgObMuga, label:"Hotel Muga de Beloso", tag:"Hotel",
    meta:[{label:"Tipo",value:"Hotel / edificio terciario"},{label:"Especialidad",value:"Baja tensión, iluminación, canalizaciones y cuadros eléctricos"},{label:"Ubicación",value:"Pamplona, Navarra"}],
    desc:"Trabajos eléctricos en edificio hotelero, donde la calidad de ejecución, la integración de las instalaciones y el cuidado del acabado son especialmente importantes. La actuación permitió adaptar la instalación eléctrica a las necesidades de un espacio de alta exigencia y uso continuado.",
  },
  {
    img:imgObQuirofano, label:"Quirófano Híbrido — Hospital de Navarra", tag:"Sanitario",
    meta:[{label:"Tipo",value:"Instalación hospitalaria / quirófano"},{label:"Especialidad",value:"Baja tensión, alimentación técnica, seguridad eléctrica, canalizaciones y cuadros eléctricos"},{label:"Ubicación",value:"Pamplona, Navarra"}],
    desc:"Trabajos eléctricos en quirófano híbrido del Hospital de Navarra, un entorno sanitario de alta exigencia técnica. La actuación requirió una instalación segura, fiable y cuidadosamente coordinada para dar servicio a equipamiento médico especializado y garantizar la continuidad de funcionamiento del espacio quirúrgico.",
  },
  {
    img:imgObBardenas, label:"Centro de Interpretación de las Bardenas Reales", tag:"Edificio público",
    meta:[{label:"Tipo",value:"Centro interpretativo / edificio cultural"},{label:"Especialidad",value:"Baja tensión, iluminación, telecomunicaciones y canalizaciones"},{label:"Ubicación",value:"Fustiñana, Navarra"}],
    desc:"Participación en trabajos eléctricos en centro de interpretación vinculado al entorno de las Bardenas Reales. La actuación combinó instalación eléctrica, iluminación y sistemas auxiliares para un edificio destinado a visitantes, divulgación y uso público.",
  },
  {
    img:imgObPasarela, label:"Pasarela Aranzadi", tag:"Iluminación",
    meta:[{label:"Tipo",value:"Infraestructura urbana"},{label:"Especialidad",value:"Baja tensión, iluminación exterior y canalizaciones"},{label:"Ubicación",value:"Pamplona, Navarra"}],
    desc:"Trabajos eléctricos vinculados a una infraestructura urbana situada en el entorno de Aranzadi. La intervención se centró en la instalación eléctrica y la iluminación, contribuyendo a la funcionalidad y seguridad del espacio público.",
  },
  {
    img:imgObBunker, label:"Búnker Radiología — Hospital de Navarra", tag:"Sanitario",
    meta:[{label:"Tipo",value:"Instalación hospitalaria / radiología"},{label:"Especialidad",value:"Baja tensión, alimentación técnica, seguridad eléctrica y canalizaciones"},{label:"Ubicación",value:"Pamplona, Navarra"}],
    desc:"Trabajos eléctricos en zona técnica de radiología del Hospital de Navarra. La intervención requirió una ejecución especialmente cuidada por tratarse de un entorno hospitalario con altas exigencias de seguridad, precisión técnica y fiabilidad de la instalación.",
  },
  {
    img:imgObCorella, label:"Casa de Cultura de Corella", tag:"Baja tensión",
    meta:[{label:"Tipo",value:"Edificio cultural / público"},{label:"Especialidad",value:"Baja tensión, iluminación, telecomunicaciones y cuadros eléctricos"},{label:"Ubicación",value:"Corella, Navarra"}],
    desc:"Trabajos de instalación eléctrica en edificio cultural de uso público. La actuación incluyó soluciones orientadas a la seguridad, la funcionalidad y la correcta distribución eléctrica en un espacio destinado a actividades culturales y ciudadanas.",
  },
  {
    img:imgObLaser, label:"Metálicas Láser Ebro", tag:"Industrial",
    meta:[{label:"Tipo",value:"Nave industrial / empresa metalúrgica"},{label:"Especialidad",value:"Baja tensión, fuerza, iluminación industrial y cuadros eléctricos"},{label:"Ubicación",value:"Navarra / Ribera del Ebro"}],
    desc:"Instalación eléctrica en entorno industrial, adaptada a las necesidades de una empresa vinculada al sector metálico. La actuación incluyó soluciones de fuerza, distribución eléctrica e iluminación industrial, priorizando la fiabilidad y la seguridad de la instalación.",
  },
  {
    img:imgObHacienda, label:"Oficinas Hacienda — Calle Esquíroz", tag:"Oficinas",
    meta:[{label:"Tipo",value:"Edificio administrativo / oficinas"},{label:"Especialidad",value:"Baja tensión, iluminación, telecomunicaciones y cuadros eléctricos"},{label:"Ubicación",value:"Pamplona, Navarra"}],
    desc:"Trabajos eléctricos en oficinas administrativas, orientados a garantizar una instalación funcional, segura y adaptada al uso diario de puestos de trabajo, zonas comunes y espacios técnicos. La intervención incluyó distribución eléctrica, iluminación y sistemas asociados.",
  },
  {
    img:imgObMarisol, label:"Chill Out Restaurante Marisol", tag:"Iluminación",
    meta:[{label:"Tipo",value:"Hostelería / restaurante"},{label:"Especialidad",value:"Baja tensión, iluminación decorativa y canalizaciones"},{label:"Ubicación",value:"Cadreita, Navarra"}],
    desc:"Instalación eléctrica en zona chill out de establecimiento hostelero, cuidando especialmente la iluminación ambiental y la integración de las instalaciones en el diseño del espacio. El objetivo fue crear una solución funcional, segura y visualmente cuidada.",
  },
  {
    img:imgObLoro, label:"Animal Embassy — Loro Parque", tag:"Baja tensión",
    meta:[{label:"Tipo",value:"Parque zoológico / edificio divulgativo"},{label:"Especialidad",value:"Baja tensión, iluminación, canalizaciones y telecomunicaciones"},{label:"Ubicación",value:"Puerto de la Cruz, Tenerife"}],
    desc:"Participación en los trabajos de instalación eléctrica del espacio Animal Embassy en Loro Parque. La actuación requirió una ejecución cuidada, adaptada a un entorno singular y con necesidades técnicas específicas para espacios de uso público y divulgativo.",
  },
  {
    img:imgObCentroDia, label:"Centro de Día de Zubiri", tag:"Sanitario",
    meta:[{label:"Tipo",value:"Centro asistencial / edificio público"},{label:"Especialidad",value:"Baja tensión, iluminación, seguridad eléctrica y telecomunicaciones"},{label:"Ubicación",value:"Zubiri, Navarra"}],
    desc:"Instalación eléctrica en centro asistencial, donde la seguridad, la fiabilidad y el confort de los usuarios son aspectos fundamentales. La actuación incluyó distribución eléctrica, iluminación y sistemas auxiliares adaptados al uso diario del centro.",
  },
  {
    img:imgObEsteribar, label:"Ayuntamiento de Esteribar", tag:"Edificio público",
    meta:[{label:"Tipo",value:"Edificio municipal / administrativo"},{label:"Especialidad",value:"Baja tensión, iluminación, cuadros eléctricos y canalizaciones"},{label:"Ubicación",value:"Esteribar, Navarra"}],
    desc:"Participación en trabajos eléctricos para edificio municipal del Ayuntamiento de Esteribar. La intervención incluyó instalaciones de baja tensión y soluciones adaptadas al funcionamiento diario de un edificio público.",
  },
  {
    img:imgObBerriozar, label:"Centro de Salud de Berriozar", tag:"Sanitario",
    meta:[{label:"Tipo",value:"Centro sanitario"},{label:"Especialidad",value:"Baja tensión, iluminación, cuadros eléctricos y seguridad eléctrica"},{label:"Ubicación",value:"Berriozar, Navarra"}],
    desc:"Trabajos eléctricos en centro sanitario, con especial atención a la seguridad, continuidad de servicio y cumplimiento de las exigencias propias de este tipo de instalaciones. La actuación incluyó distribución eléctrica, protecciones, iluminación y sistemas asociados.",
  },
  {
    img:imgObVillava, label:"Piscinas Municipales de Villava", tag:"Deportivo",
    meta:[{label:"Tipo",value:"Instalación deportiva / pública"},{label:"Especialidad",value:"Baja tensión, iluminación, seguridad eléctrica y canalizaciones"},{label:"Ubicación",value:"Villava, Navarra"}],
    desc:"Instalación eléctrica en equipamiento deportivo municipal, con especial atención a la seguridad de las instalaciones y al correcto funcionamiento de zonas de uso público. La actuación incluyó trabajos de distribución eléctrica, protecciones, iluminación y sistemas auxiliares.",
  },
  {
    img:imgObGongora, label:"Palacio Viejo de Góngora", tag:"Edificio singular",
    meta:[{label:"Tipo",value:"Edificio histórico / institucional"},{label:"Especialidad",value:"Baja tensión, iluminación, canalizaciones e integración técnica"},{label:"Ubicación",value:"Góngora, Navarra"}],
    desc:"Participación en trabajos eléctricos en edificio singular de carácter histórico. La intervención requirió una ejecución cuidada, respetando las características del inmueble y adaptando las instalaciones a las necesidades actuales de uso.",
  },
];

function Projects({limit,map}={}) {
  const [selected, setSelected] = useState(null);
  const p = PROYECTOS;
  // Si se llega desde el mapa ("Ven a conocernos"), abrir directamente esa obra
  useEffect(()=>{
    const t=window.__abrirObra; if(!t) return;
    window.__abrirObra=null;
    const k=p.findIndex(x=>x.label===t);
    if(k>=0) setSelected(k);
  },[]);
  return (
    <>
      {selected !== null && (
        <ProjectModal project={p[selected]} onClose={()=>setSelected(null)}/>
      )}
      <section id="proyectos" style={{position:"relative",overflow:"hidden",background:map?C.white:C.offWhite,padding:"clamp(5rem,9vw,9rem) clamp(1rem,4vw,2.8rem)",borderTop:`1px solid ${C.grayLight}`}}>
        {map && <div className="mapfx" aria-hidden="true" style={{position:"absolute",inset:0,backgroundImage:`url(${imgMapa})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",opacity:.62,pointerEvents:"none"}}/>}
        <div style={{position:"relative",zIndex:1,maxWidth:1280,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(360px,1fr))",gap:18}}>
            {(limit?p.slice(0,limit):p).map((it,i)=>(
              <V key={i} d={`d${(i%3)+1}`}>
                <div
                  onClick={()=>{ if(!it.empty) setSelected(i); }}
                  style={{background:C.white,borderRadius:4,overflow:"hidden",cursor:it.empty?"default":"pointer",
                    boxShadow:"0 2px 12px rgba(0,0,0,.06)",transition:"transform .25s,box-shadow .25s"}}
                  onMouseEnter={e=>{ if(it.empty) return; e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 8px 26px rgba(27,111,191,.15)"}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,.06)"}}>
                  <div style={{position:"relative",overflow:"hidden",height:215,background:C.grayLight}}>
                    {!it.empty && (<img src={it.img} alt={it.label}
                      style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .5s"}}/>)}
                    {!it.empty && (<div style={{position:"absolute",top:11,right:11,background:C.blue,color:C.white,
                      fontSize:10,fontWeight:700,letterSpacing:".07em",padding:"3px 9px",borderRadius:2,textTransform:"uppercase"}}>{it.tag}</div>)}
                    {!it.empty && (<div style={{position:"absolute",bottom:11,right:11,
                      background:"rgba(255,255,255,.92)",borderRadius:2,
                      padding:"4px 10px",display:"flex",alignItems:"center",gap:5,
                      fontSize:11,fontWeight:700,color:C.blue,letterSpacing:".04em"}}>
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <circle cx="5.5" cy="5.5" r="4.5" stroke={C.blue} strokeWidth="1.3"/>
                        <circle cx="5.5" cy="5.5" r="1.8" fill={C.blue}/>
                      </svg>
                      Ver proyecto
                    </div>)}
                  </div>
                  <div style={{padding:"14px 18px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,minHeight:52}}>
                    <div style={{fontSize:13.5,fontWeight:600,color:it.empty?C.grayMid:C.grayDark,lineHeight:1.45,fontStyle:it.empty?"italic":"normal"}}>{it.empty?"Próximamente":it.label}</div>
                    {!it.empty && (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{flexShrink:0}}>
                      <path d="M3 8h10M8 3l5 5-5 5" stroke={C.blue} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>)}
                  </div>
                </div>
              </V>
            ))}
            {limit && (
              <V d="d3">
                <div onClick={()=>go("proyectos")} style={{background:C.blue,borderRadius:4,overflow:"hidden",cursor:"pointer",height:"100%",minHeight:255,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"30px",transition:"background .2s"}}
                  onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
                  onMouseLeave={e=>e.currentTarget.style.background=C.blue}>
                  <div className="b" style={{color:C.white,fontSize:"clamp(1.15rem,1.8vw,1.45rem)",fontWeight:800,marginBottom:16,lineHeight:1.2}}>Ver más proyectos</div>
                  <div style={{width:52,height:52,borderRadius:"50%",border:"2px solid rgba(255,255,255,.6)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h11M10 4l6 6-6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </V>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function CtaBanner() {
  return (
    <section style={{position:"relative",overflow:"hidden"}}>
      <img src={imgCabecera} alt="Instalación de iluminación de Montajes Eléctricos Nebego"
        style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
      <div style={{position:"absolute",inset:0,
        background:"linear-gradient(90deg,rgba(18,60,120,.93) 0%,rgba(27,111,191,.8) 100%)"}}/>
      <div style={{position:"relative",zIndex:2,padding:"clamp(2.8rem,5vw,4.4rem) clamp(1rem,4vw,2.8rem)"}}>
        <div style={{maxWidth:1280,margin:"0 auto",display:"flex",alignItems:"center",
          justifyContent:"space-between",gap:"clamp(2rem,5vw,4rem)",flexWrap:"wrap"}}>
          <V c="revL">
            <h2 className="b" style={{fontSize:"clamp(1.4rem,2.8vw,2.3rem)",fontWeight:800,color:C.white,lineHeight:1.22,marginBottom:12,letterSpacing:"-.02em"}}>
              ¿Tiene un proyecto en marcha?
            </h2>
            <p style={{fontSize:15,color:"rgba(255,255,255,.78)",lineHeight:1.75,maxWidth:480}}>
              Cuéntanos tu proyecto. Te asesoramos sin compromiso.
            </p>
          </V>
          <V c="revR">
            <div style={{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"}}>
              <button onClick={()=>openContacto()}
                style={{display:"inline-flex",alignItems:"center",gap:9,background:C.accent,color:C.white,
                  fontWeight:700,fontSize:14,letterSpacing:".06em",textTransform:"uppercase",
                  padding:"15px 32px",borderRadius:3,whiteSpace:"nowrap",transition:"background .2s",border:"none",cursor:"pointer",fontFamily:"inherit"}}
                onMouseEnter={e=>e.currentTarget.style.background="#2E7FD1"}
                onMouseLeave={e=>e.currentTarget.style.background=C.accent}>Háblanos de tu proyecto</button>
              <div style={{display:"flex",alignItems:"center",gap:7}}>
                <div style={{width:7,height:7,borderRadius:"50%",background:"#5CDBA0"}}/>
                <span style={{fontSize:13,color:"rgba(255,255,255,.65)"}}>Respuesta en 24–48 h hábiles</span>
              </div>
            </div>
          </V>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form,setForm] = useState({nombre:"",empresa:"",email:"",telefono:"",mensaje:""});
  const [sent,setSent] = useState(false);
  const h = e => setForm({...form,[e.target.name]:e.target.value});
  const [sending,setSending] = useState(false);
  const [error,setError] = useState("");
  const [acepto,setAcepto] = useState(false);
  const [novedades,setNovedades] = useState(false);
  const submit = async()=>{
    if(!acepto || !form.nombre || !form.email){ setError("Revisa que has puesto nombre, email y aceptado la política de privacidad."); return; }
    setError(""); setSending(true);
    try{
      const fd=new FormData();
      fd.append("access_key",WEB3FORMS_KEY);
      fd.append("subject",novedades?"Nueva solicitud de presupuesto (+ alta novedades) — web Nebego":"Nueva solicitud de presupuesto — web Nebego");
      fd.append("from_name","Web Nebego");
      fd.append("Nombre",form.nombre); fd.append("Empresa",form.empresa);
      fd.append("Email",form.email); fd.append("Teléfono",form.telefono);
      fd.append("Mensaje",form.mensaje);
      fd.append("Alta novedades",novedades?("SÍ. Acepta recibir por correo avisos de ayudas y novedades de Nebego ("+new Date().toLocaleString("es-ES",{timeZone:"Europe/Madrid"})+")"):"No");
      const r=await fetch("https://api.web3forms.com/submit",{method:"POST",body:fd});
      const j=await r.json();
      if(j.success) setSent(true); else setError("No se ha podido enviar: "+(j.message||"error desconocido")+". Puedes escribirnos a contacto@nebego.com.");
    }catch(e){ setError("No se ha podido enviar por un problema de conexión. Inténtalo de nuevo o escríbenos a contacto@nebego.com."); }
    setSending(false);
  };
  const fld = {width:"100%",padding:"12px 0",fontSize:15,color:C.ink,
    borderBottom:`1.5px solid ${C.grayMid}`,display:"block",transition:"border-color .2s"};
  return (
    <section id="contacto" style={{background:C.white,padding:"clamp(5rem,9vw,9rem) clamp(1rem,4vw,2.8rem)"}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <V>
          <div style={{textAlign:"center",marginBottom:"clamp(2rem,4vw,3.5rem)"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:10,marginBottom:14}}>
              <div style={{width:34,height:3,background:C.blue,borderRadius:2}}/>
              <span style={{fontSize:11,fontWeight:700,letterSpacing:".14em",color:C.blue,textTransform:"uppercase"}}>Contacto</span>
              <div style={{width:34,height:3,background:C.blue,borderRadius:2}}/>
            </div>
            <h2 className="b" style={{fontSize:"clamp(1.6rem,2.8vw,2.5rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em"}}>
              Hablemos de su proyecto.
            </h2>
          </div>
        </V>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(2.5rem,6vw,6rem)",alignItems:"start"}} className="dcol">
          <V c="revL">
            <p style={{fontSize:15,color:C.grayText,lineHeight:1.85,marginBottom:36}}>
              Cuéntanos tu proyecto. Te asesoramos sin compromiso.
            </p>
            {[
              {l:"Teléfono",v:"948 236 434",href:"tel:+34948236434",icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 2h4l1.5 4L6 7.5a11 11 0 004.5 4.5L12 9.5l4 1.5V15a2 2 0 01-2 2C6.48 17 1 11.52 1 4a2 2 0 012-2z" stroke={C.blue} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>},
              {l:"WhatsApp",v:WHATSAPP_TXT,href:WHATSAPP_URL,ext:true,icon:<IcoChat size={18} color={C.blue}/>},
              {l:"Email",v:"contacto@nebego.com",href:"mailto:contacto@nebego.com",icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1" y="3" width="16" height="12" rx="1.5" stroke={C.blue} strokeWidth="1.3"/><path d="M1 5l8 5.5L17 5" stroke={C.blue} strokeWidth="1.3" strokeLinecap="round"/></svg>},
              {l:"Ubicación",v:"Mutilva (Navarra)",icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1C6.24 1 4 3.24 4 6c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z" stroke={C.blue} strokeWidth="1.3"/><circle cx="9" cy="6" r="1.5" stroke={C.blue} strokeWidth="1.3"/></svg>},
            ].map((it,i)=>(
              <div key={i} style={{display:"flex",gap:14,alignItems:"center",marginBottom:22}}>
                <div style={{width:42,height:42,background:C.blueLight,borderRadius:3,
                  display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{it.icon}</div>
                <div>
                  <div style={{fontSize:10,fontWeight:700,letterSpacing:".08em",color:C.grayText,textTransform:"uppercase",marginBottom:2}}>{it.l}</div>
                  <div style={{fontSize:15,fontWeight:600,color:C.ink}}>{it.href ? <a href={it.href} {...(it.ext?{target:"_blank",rel:"noopener"}:{})} style={{color:C.ink}}>{it.v}</a> : it.v}</div>
                </div>
              </div>
            ))}
            <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:6}}>
              {[["Instagram",INSTAGRAM_URL],["LinkedIn",LINKEDIN_URL]].map(([t,u])=>(
                <a key={t} href={u} target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:C.blue,border:`1.5px solid ${C.blue}`,borderRadius:3,padding:"8px 14px"}}>{t} <IcoExt/></a>
              ))}
            </div>
          </V>
          <V c="revR">
            {sent ? (
              <div style={{background:C.blueLight,borderRadius:4,padding:"3rem",textAlign:"center"}}>
                <div style={{width:54,height:54,background:C.blue,borderRadius:"50%",
                  display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12l5 5 11-11" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="b" style={{fontSize:20,fontWeight:800,color:C.ink,marginBottom:9}}>Mensaje recibido</h3>
                <p style={{fontSize:14,color:C.grayText,lineHeight:1.75}}>Hemos recibido su consulta. Nos pondremos en contacto en un plazo de 24–48 horas hábiles.</p>
              </div>
            ) : (
              <div style={{background:C.white,borderRadius:4,padding:"clamp(1.6rem,3vw,2.5rem)",boxShadow:"0 4px 22px rgba(0,0,0,.08)"}}>
                <div className="b" style={{fontSize:16,fontWeight:800,color:C.ink,marginBottom:24}}>Háblanos de tu proyecto</div>
                {[{n:"nombre",p:"Nombre y apellidos",t:"text"},{n:"empresa",p:"Empresa",t:"text"},{n:"email",p:"Correo electrónico",t:"email"},{n:"telefono",p:"Teléfono",t:"tel"}].map(f=>(
                  <div key={f.n} style={{marginBottom:18}}>
                    <input name={f.n} type={f.t} placeholder={f.p} value={form[f.n]} onChange={h}
                      style={fld}
                      onFocus={e=>e.target.style.borderBottomColor=C.blue}
                      onBlur={e=>e.target.style.borderBottomColor=C.grayMid}/>
                  </div>
                ))}
                <div style={{marginBottom:24}}>
                  <textarea name="mensaje" placeholder="Describa su proyecto o consulta" value={form.mensaje} onChange={h} rows={4}
                    style={{...fld,resize:"none",lineHeight:1.6}}
                    onFocus={e=>e.target.style.borderBottomColor=C.blue}
                    onBlur={e=>e.target.style.borderBottomColor=C.grayMid}/>
                </div>
                <label style={{display:"flex",alignItems:"flex-start",gap:9,marginBottom:16,cursor:"pointer"}}>
                  <input type="checkbox" checked={acepto} onChange={e=>setAcepto(e.target.checked)} style={{marginTop:3,accentColor:C.blue,flexShrink:0}}/>
                  <span style={{fontSize:12,color:C.grayText,lineHeight:1.55}}>He leído y acepto la <button type="button" onClick={()=>{ const m=document.querySelector('[aria-label="Cerrar"]'); if(m) m.click(); go("legal"); }} style={{background:"none",border:"none",padding:0,color:C.blue,cursor:"pointer",fontFamily:"inherit",fontSize:12,textDecoration:"underline"}}>política de privacidad</button>.</span>
                </label>
                <label style={{display:"flex",alignItems:"flex-start",gap:9,marginBottom:16,cursor:"pointer"}}>
                  <input type="checkbox" checked={novedades} onChange={e=>setNovedades(e.target.checked)} style={{marginTop:3,accentColor:C.blue,flexShrink:0}}/>
                  <span style={{fontSize:12,color:C.grayText,lineHeight:1.55}}>Quiero recibir por correo avisos de ayudas y novedades de Nebego (opcional).</span>
                </label>
                <button onClick={submit} disabled={sending}
                  style={{width:"100%",padding:"14px 0",background:sending?C.grayMid:C.blue,color:C.white,
                    fontSize:14,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",
                    border:"none",borderRadius:3,cursor:sending?"default":"pointer",transition:"background .2s"}}
                  onMouseEnter={e=>{if(!sending)e.currentTarget.style.background=C.blueDark;}}
                  onMouseLeave={e=>{if(!sending)e.currentTarget.style.background=C.blue;}}>{sending?"Enviando…":"Enviar consulta"}</button>
                {error && <p style={{fontSize:12.5,color:"#E23B3B",marginTop:11,lineHeight:1.5}}>{error}</p>}
                <p style={{fontSize:11.5,color:C.grayText,marginTop:11,lineHeight:1.6}}>
                  Sus datos serán tratados de forma confidencial y únicamente para gestionar su consulta.
                </p>
              </div>
            )}
          </V>
        </div>
      </div>
    </section>
  );
}


function Nav({route,light}){
  const [sc,setSc]=useState(false);
  const [op,setOp]=useState(false);
  useEffect(()=>{
    const fn=()=>setSc(window.scrollY>48);
    window.addEventListener("scroll",fn);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);
  const links=[["Inicio","inicio"],["Nosotros","nosotros"],["Proyectos","proyectos"],["Servicios","servicios"],["Blog","blog"],["Empleo","empleo"]];
  const solid = sc || light;
  const tc = solid ? C.grayDark : "rgba(255,255,255,.9)";
  const nav=(p)=>{ go(p); setOp(false); };
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,
      background:solid?C.white:"transparent",
      boxShadow:solid?"0 2px 20px rgba(0,0,0,.09)":"none",
      transition:"all .32s ease"}}>
      <div style={{maxWidth:1280,margin:"0 auto",padding:"0 clamp(1rem,4vw,2.8rem)",
        display:"flex",alignItems:"center",justifyContent:"space-between",height:86}}>
        <a {...linkProps("inicio",()=>setOp(false))} aria-label="Inicio" style={{background:"none",border:"none",cursor:"pointer",padding:0}}>
          <img src={LOGO} alt="Nebego — Montajes Eléctricos"
            style={{height:52,width:"auto",display:"block",
              filter: solid ? "none" : "brightness(0) invert(1)",
              transition:"filter .32s ease"}}/>
        </a>
        <div className="dnav" style={{display:"flex",gap:24,alignItems:"center"}}>
          {links.map(([l,p])=>(
            <a key={p} {...linkProps(p,()=>setOp(false))}
              style={{fontSize:13,fontWeight:600,letterSpacing:".07em",textTransform:"uppercase",
                color: route===p ? C.blue : tc,transition:"color .2s",background:"none",border:"none",cursor:"pointer",padding:0,fontFamily:"inherit"}}
              onMouseEnter={e=>e.currentTarget.style.color=C.blue}
              onMouseLeave={e=>e.currentTarget.style.color = route===p ? C.blue : tc}>{l}</a>
          ))}
          <button onClick={()=>openContacto()}
            style={{fontSize:13,fontWeight:700,letterSpacing:".05em",textTransform:"uppercase",
              background:C.blue,color:C.white,padding:"9px 20px",borderRadius:3,transition:"background .2s",border:"none",cursor:"pointer",fontFamily:"inherit"}}
            onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
            onMouseLeave={e=>e.currentTarget.style.background=C.blue}>Háblanos de tu proyecto</button>
        </div>
        <button className="mnb" onClick={()=>setOp(!op)}
          style={{display:"none",flexDirection:"column",gap:5,background:"none",border:"none",cursor:"pointer",padding:4}}>
          {[0,1,2].map(i=>(
            <div key={i} style={{width:23,height:2,background:solid?C.ink:C.white,transition:"all .3s",
              transform:op&&i===0?"rotate(45deg) translate(5px,5px)":op&&i===2?"rotate(-45deg) translate(5px,-5px)":"none",
              opacity:op&&i===1?0:1}}/>
          ))}
        </button>
      </div>
      {op&&(
        <div style={{background:C.white,borderTop:`1px solid ${C.grayLight}`,padding:"1rem clamp(1rem,4vw,2.8rem)"}}>
          {links.map(([l,p])=>(
            <a key={p} {...linkProps(p,()=>setOp(false))}
              style={{display:"block",width:"100%",textAlign:"left",padding:"11px 0",fontSize:15,fontWeight:600,
                color: route===p ? C.blue : C.grayDark,background:"none",border:"none",borderBottom:`1px solid ${C.grayLight}`,cursor:"pointer",fontFamily:"inherit"}}>{l}</a>
          ))}
          <button onClick={()=>{openContacto();setOp(false);}}
            style={{display:"block",marginTop:14,fontSize:14,fontWeight:700,color:C.blue,background:"none",border:"none",cursor:"pointer",padding:0,fontFamily:"inherit"}}>
            Háblanos de tu proyecto →
          </button>
        </div>
      )}
    </nav>
  );
}

function PageHero({tag,title,subtitle,img}){
  return (
    <section style={{position:"relative",minHeight:"clamp(320px,46vh,460px)",display:"flex",alignItems:"center",overflow:"hidden"}}>
      <img src={img||IMG.cabecera} alt={title}
        style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
      <div style={{position:"absolute",inset:0,
        background:"linear-gradient(108deg,rgba(18,38,68,.92) 0%,rgba(27,111,191,.6) 70%,rgba(0,0,0,.25) 100%)"}}/>
      <div style={{position:"relative",zIndex:2,maxWidth:1280,margin:"0 auto",width:"100%",
        padding:"120px clamp(1rem,4vw,2.8rem) 56px"}}>
        {tag&&(<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
          <div style={{width:34,height:2,background:C.accent}}/>
          <span style={{fontSize:12,fontWeight:700,letterSpacing:".15em",color:C.accent,textTransform:"uppercase"}}>{tag}</span>
        </div>)}
        <h1 className="bc" style={{fontSize:"clamp(2.1rem,5vw,3.6rem)",fontWeight:800,lineHeight:1.06,color:C.white,marginBottom:subtitle?16:0,letterSpacing:"-.01em"}}>{title}</h1>
        {subtitle&&<p style={{fontSize:"clamp(.95rem,1.5vw,1.1rem)",color:"rgba(255,255,255,.85)",lineHeight:1.7,maxWidth:580,fontWeight:300}}>{subtitle}</p>}
      </div>
    </section>
  );
}

function Acreditaciones(){
  const items=[
    {n:"IBTE 0273",l:"Instalador autorizado de Baja Tensión"},
    {n:"LAT-0273",l:"Instalador de Alta Tensión (hasta 30 kV)"},
    {n:"Nº 8052",l:"Telecomunicaciones tipos A · B · C · F"},
    {n:"EIPCI-0167",l:"Empresa habilitada en Protección Contra Incendios"},
    {n:"EcoXpert",l:"Partner certificado de Schneider Electric"},
    {n:"AMP",l:"Contratista de sistemas netconnect AMP"},
  ];
  return (
    <section style={{background:C.white,padding:"clamp(4.5rem,7.5vw,7.5rem) clamp(1rem,4vw,2.8rem)",borderTop:`1px solid ${C.grayLight}`}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <V>
          <div style={{textAlign:"center",marginBottom:"clamp(1.8rem,4vw,3rem)"}}>
            <h2 className="b" style={{fontSize:"clamp(1.5rem,2.8vw,2.4rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em"}}>Empresa instaladora autorizada</h2>
            <p style={{fontSize:15,color:C.grayText,maxWidth:560,margin:"12px auto 0",lineHeight:1.7}}>Registros oficiales y certificaciones que respaldan cada una de nuestras instalaciones.</p>
          </div>
        </V>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:14}}>
          {items.map((it,i)=>(
            <V key={i} d={`d${(i%3)+1}`}>
              <div style={{background:C.offWhite,border:`1px solid ${C.grayLight}`,borderTop:`3px solid ${C.blue}`,borderRadius:4,padding:"22px 20px",height:"100%"}}>
                <div className="bc" style={{fontSize:"1.5rem",fontWeight:800,color:C.blue,letterSpacing:".01em"}}>{it.n}</div>
                <div style={{fontSize:12.5,color:C.grayDark,marginTop:7,lineHeight:1.55,fontWeight:500}}>{it.l}</div>
              </div>
            </V>
          ))}
        </div>
        <p style={{textAlign:"center",fontSize:12,color:C.grayText,marginTop:22}}>Marcas con las que trabajamos en protección contra incendios: Notifier · Morley · Siemens</p>
      </div>
    </section>
  );
}

function EmpleoForm(){
  const [f,setF]=useState({nombre:"",email:"",nacimiento:"",sexo:"",doc:"",telefono:"",carnet:"",cv:"",interes:""});
  const [msg,setMsg]=useState("");
  const [cvFile,setCvFile]=useState(null);
  const set=(k,v)=>setF(p=>({...p,[k]:v}));
  const req=["nombre","email","nacimiento","sexo","doc","telefono","cv"];
  const onSubmit=(e)=>{
    if(req.some(k=>!f[k])){ e.preventDefault(); setMsg("Por favor, completa los campos obligatorios (*)."); return; }
    if(cvFile && cvFile.size > 5*1024*1024){ e.preventDefault(); setMsg("El CV supera el tamaño máximo permitido (5 MB). Comprime el PDF o envíalo por email a contacto@nebego.com."); return; }
    setMsg("");
  };
  const lbl={display:"block",fontSize:14,fontWeight:700,color:C.ink,marginBottom:8};
  const inp={width:"100%",padding:"11px 13px",fontSize:14,color:C.ink,border:`1px solid ${C.grayMid}`,borderRadius:3,background:C.white,transition:"border-color .2s"};
  const onF=e=>e.target.style.borderColor=C.blue;
  const onB=e=>e.target.style.borderColor=C.grayMid;
  const star=()=>(<span style={{color:"#E23B3B",marginLeft:3}}>*</span>);
  const radio=(key,label,opts)=>(
    <div style={{display:"flex",flexWrap:"wrap",gap:"10px 18px"}}>
      {opts.map(o=>(
        <label key={o} style={{display:"inline-flex",alignItems:"center",gap:6,fontSize:14,color:C.grayDark,cursor:"pointer"}}>
          <input type="radio" name={label} value={o} checked={f[key]===o} onChange={()=>set(key,o)} style={{accentColor:C.blue,cursor:"pointer"}}/>{o}
        </label>
      ))}
    </div>
  );
  return (
    <section style={{background:C.offWhite,padding:"clamp(4.5rem,7.5vw,7.5rem) clamp(1rem,4vw,2.8rem)"}}>
      <V>
        <form action="https://formsubmit.co/contacto@nebego.com" method="POST" encType="multipart/form-data" onSubmit={onSubmit} style={{maxWidth:720,margin:"0 auto",background:C.white,borderRadius:6,boxShadow:"0 4px 22px rgba(0,0,0,.08)",padding:"clamp(1.8rem,4vw,3rem)"}}>
          <input type="hidden" name="_subject" value="Nueva candidatura — Empleo web Nebego"/>
          <input type="hidden" name="_template" value="table"/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{display:"none"}}/>
          <h2 className="b" style={{fontSize:"1.5rem",fontWeight:800,color:C.blue,marginBottom:14,letterSpacing:"-.01em"}}>Datos personales</h2>
          <div style={{height:1,background:C.grayMid,marginBottom:28}}/>
          <div style={{marginBottom:20}}>
            <label style={lbl}>Nombre y apellidos{star()}</label>
            <input name="Nombre" style={inp} placeholder="Nombre" value={f.nombre} onChange={e=>set("nombre",e.target.value)} onFocus={onF} onBlur={onB}/>
          </div>
          <div style={{marginBottom:20}}>
            <label style={lbl}>Email{star()}</label>
            <input name="Email" type="email" style={inp} placeholder="Correo electrónico" value={f.email} onChange={e=>set("email",e.target.value)} onFocus={onF} onBlur={onB}/>
          </div>
          <div style={{marginBottom:20}}>
            <label style={lbl}>Fecha de nacimiento{star()}</label>
            <input name="Fecha de nacimiento" type="date" style={inp} value={f.nacimiento} onChange={e=>set("nacimiento",e.target.value)} onFocus={onF} onBlur={onB}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px 28px",marginBottom:20}} className="dcol">
            <div>
              <label style={lbl}>Sexo{star()}</label>
              {radio("sexo","Sexo",["Hombre","Mujer"])}
            </div>
            <div>
              <label style={lbl}>Documento de identificación{star()}</label>
              {radio("doc","Documento",["DNI","NIE","Pasaporte"])}
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px 28px",marginBottom:20}} className="dcol">
            <div>
              <label style={lbl}>Teléfono{star()}</label>
              <input name="Teléfono" type="tel" style={inp} value={f.telefono} onChange={e=>set("telefono",e.target.value)} onFocus={onF} onBlur={onB}/>
            </div>
            <div>
              <label style={lbl}>Carnet de conducir</label>
              {radio("carnet","Carnet de conducir",["A1","A2","B1","B2","C","D"])}
            </div>
          </div>
          <div style={{marginBottom:20}}>
            <label style={lbl}>Adjuntar CV{star()}</label>
            <input name="attachment" type="file" accept=".pdf,.doc,.docx" onChange={e=>{const file=e.target.files[0]; setCvFile(file||null); set("cv",file?file.name:"");}} style={{fontSize:14,color:C.grayDark}}/>
          </div>
          <div style={{marginBottom:26}}>
            <label style={lbl}>¿En qué estás interesado/a?</label>
            <textarea name="Interés" rows={4} style={{...inp,resize:"vertical",lineHeight:1.6}} placeholder="Escribir aquí" value={f.interes} onChange={e=>set("interes",e.target.value)} onFocus={onF} onBlur={onB}/>
          </div>
          {msg&&<p style={{fontSize:13,color:"#E23B3B",marginBottom:14,lineHeight:1.55}}>{msg}</p>}
          <button type="submit" style={{width:"100%",padding:"14px 0",background:C.blue,color:C.white,fontSize:15,fontWeight:700,border:"none",borderRadius:3,cursor:"pointer",transition:"background .2s"}}
            onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
            onMouseLeave={e=>e.currentTarget.style.background=C.blue}>Enviar</button>
          <p style={{fontSize:11.5,color:C.grayText,marginTop:12,lineHeight:1.6}}>Tus datos serán tratados de forma confidencial y únicamente para procesos de selección.</p>
        </form>
      </V>
    </section>
  );
}

// Novedades: publicaciones de las redes sociales de Nebego (LinkedIn e Instagram), de la más nueva a la más antigua.
// Para añadir una: copiar un bloque, cambiar slug (único), fecha, textos, imagen y enlaces, y regenerar la web.
// image: imagen de la tarjeta. fit:"contain" para imágenes con texto (se ven enteras sobre fondo azul).
// hero: foto de cabecera del artículo (si no se indica, se usa image).
const LI="https://www.linkedin.com/feed/update/urn:li:activity:";
const IG="https://www.instagram.com/p/";
const ARTICULOS=[
  {slug:"ayudas-navarra-coche-electrico-recarga",category:"Ayudas",date:"3 NOV 2026",image:"assets/blog-ayudas.jpg",fit:"contain",hero:imgRecarga,
   title:"Nuevas ayudas en Navarra para el coche eléctrico y los puntos de recarga",
   excerpt:"Navarra ha anunciado 12,6 millones de euros en ayudas para el coche eléctrico y la recarga. Te contamos lo que se sabe y cómo prepararte.",
   redes:[["LinkedIn",LI+"7523301443127369729/"]],
   content:[
     {p:"Navarra ha anunciado nuevas ayudas para el coche eléctrico y los puntos de recarga: 12,6 millones de euros en total. Esto es lo que se sabe:"},
     {list:["11 millones para comprar coches eléctricos e instalar puntos de recarga en 2027 y 2028. Podrán pedirlas particulares, autónomos y empresas.","Para turismos se habla de entre 2.500 y 5.000 euros por coche.","Otros 1,25 millones para que empresas y autónomos den de baja vehículos de combustión."]},
     {p:"Todavía no se pueden solicitar: faltan por publicarse las bases en el Boletín Oficial de Navarra, que fijarán cuantías, requisitos y plazos. Antes de empezar ninguna obra, conviene esperar a conocerlas."},
     {p:"Si estás pensando en poner un cargador en casa, en tu garaje o en tu empresa, es buen momento para ir preparando el estudio y el presupuesto. Así, cuando se abra la convocatoria, lo tendrás todo listo."},
     {p:"En Nebego instalamos y legalizamos puntos de recarga. Si quieres que lo veamos, escríbenos."},
   ]},
  {slug:"orden-que-se-nota-cuadro-sala-calderas",category:"Trabajo terminado",date:"29 OCT 2026",image:"assets/blog-cuadro.jpg",fit:"contain",hero:imgInstElec,
   title:"Orden que se nota: el cuadro de una sala de calderas",
   excerpt:"Cada circuito etiquetado, cada bomba con su protección y el cableado recogido y peinado. Un cuadro ordenado da menos sustos.",
   redes:[["Instagram",IG+"DfFOq2njeWu/"]],
   content:[
     {p:"Orden que se nota."},
     {p:"Cuadro de una sala de calderas recién terminado: cada circuito etiquetado, cada bomba con su protección y el cableado recogido y peinado."},
     {p:"Un cuadro ordenado se revisa antes, se amplía sin líos y da menos sustos."},
     {p:"¿Tu instalación necesita una puesta al día? Escríbenos y te la revisamos."},
   ]},
  {slug:"renovamos-electricidad-fronton",category:"Obra",date:"29 OCT 2026",image:"assets/blog-fronton.jpg",fit:"contain",hero:imgPCI,
   title:"Renovamos la electricidad de un frontón en la Comarca de Pamplona",
   excerpt:"Suministro de reserva, cuadros nuevos, iluminación, detección de incendios y megafonía: así hemos renovado la instalación de un frontón.",
   redes:[["LinkedIn",LI+"7521551139327184897/"]],
   content:[
     {p:"Detrás de cada partido en un frontón hay una instalación eléctrica que tiene que responder siempre."},
     {p:"En los últimos meses hemos renovado la electricidad de un frontón en la Comarca de Pamplona. Entre otras cosas:"},
     {list:["Un suministro de reserva, para que lo esencial siga funcionando aunque falle la red principal.","Cuadros eléctricos nuevos.","Iluminación de la cancha, del exterior y de emergencia.","Detección de incendios y megafonía para avisar y evacuar al público."]},
     {p:"En un edificio con público la seguridad es lo primero, y eso pasa por una instalación bien hecha y bien coordinada con todos los que participan en la obra. Gracias al equipo que lo ha hecho posible."},
     {p:"¿Tienes un proyecto parecido? Escríbenos y lo vemos."},
   ]},
  {slug:"jornada-diario-de-navarra-pymes-ia",category:"Eventos",date:"5 OCT 2026",image:"assets/blog-geo.jpg",
   title:"Nebego, en la jornada del Diario de Navarra para pymes",
   excerpt:"Iker Beraza estuvo en representación de Nebego en una jornada sobre cómo aparecer cuando los clientes preguntan a la inteligencia artificial.",
   autor:"Iker Beraza",
   redes:[["LinkedIn",LI+"7512765233464107008/"]],
   content:[
     {p:"Hace unos días estuve en la jornada de publicidad que organizó el Diario de Navarra (DN Management) para pymes y pude ir en representación de Montajes Eléctricos Nebego."},
     {p:"Nos hablaron principalmente del término GEO, Generative Engine Optimization. Dicho rápido: cómo conseguir que tu empresa aparezca cuando alguien le pregunta a ChatGPT, Gemini o Copilot en vez de buscar en Google."},
     {p:"Hasta ahora todos hablábamos de SEO. Pero cada vez más gente pregunta directamente a una IA: ¿quién me hace la instalación eléctrica de una nave en Pamplona?, y lo que responde depende, entre otras cosas, de lo que esa IA ha leído sobre nosotros."},
     {p:"Me encantó. Todo explicado en base a números y casos reales de otras empresas. Una suerte haber asistido y estar junto a profesionales que están en la última. Gracias al Diario de Navarra por organizarla."},
     {p:"Espero que la próxima vez que preguntes a ChatGPT, aparezcamos nosotros."},
   ]},
  {slug:"buscamos-oficial-electricista",category:"Empleo",date:"11 SEP 2026",image:imgEmpleo,
   title:"Buscamos Oficial Electricista en Pamplona",
   excerpt:"Necesitamos incorporar un Oficial Electricista para nuestro equipo en Pamplona. ¿Conoces a alguien que pueda estar interesado?",
   redes:[["LinkedIn",LI+"7504150416935346176/"]],
   content:[
     {p:"¡Estamos buscando personal en Nebego!"},
     {p:"Necesitamos incorporar un Oficial Electricista para nuestro equipo en Pamplona."},
     {p:"¿Conoces a alguien que pueda estar interesado? Puede mandarnos su currículum a contacto@nebego.com o desde la sección Empleo de esta web."},
   ]},
  {slug:"25-anos-instalando-electricidad-navarra",category:"Empresa",date:"18 AGO 2026",image:imgNave,
   title:"25 años instalando electricidad en Navarra",
   excerpt:"Desde el año 2000 hemos crecido proyecto a proyecto. En este vídeo te contamos de dónde venimos y cómo hemos llegado hasta aquí.",
   redes:[["Vídeo en LinkedIn",LI+"7495484530024247298/"],["Reel en Instagram","https://www.instagram.com/reel/DcLiJVmoGw6/"]],
   content:[
     {p:"25 años instalando electricidad en Navarra dan para mucho."},
     {p:"Desde el año 2000, en Montajes Eléctricos Nebego hemos crecido proyecto a proyecto, manteniendo la misma forma de trabajar: compromiso, cercanía y responsabilidad."},
     {p:"En este vídeo te contamos un poco más sobre nuestra historia: de dónde venimos y cómo hemos llegado hasta aquí."},
   ]},
  {slug:"punto-recarga-garaje-comunitario",category:"Vehículo eléctrico",date:"11 AGO 2026",image:imgNovRecarga,
   title:"Punto de recarga en un garaje comunitario: lo que hay que saber",
   excerpt:"Instalar un cargador en un garaje comunitario es cada vez más habitual, pero no es tan sencillo como conectar un cable.",
   redes:[["Documento en LinkedIn",LI+"7492916005611159553/"],["Instagram",IG+"Db5pm2GDU8e/"]],
   content:[
     {p:"Instalar un punto de recarga en un garaje comunitario es cada vez más habitual, pero no es tan sencillo como conectar un cable."},
     {p:"Hay varios aspectos técnicos y de convivencia que hay que tener en cuenta para que la instalación funcione bien y sea segura. Te lo explicamos paso a paso en el documento que publicamos en LinkedIn."},
     {p:"En Nebego instalamos y legalizamos puntos de recarga para viviendas, comunidades y empresas. ¡Anímate y hazlo con nosotros! Pide tu presupuesto sin compromiso."},
   ]},
];

function RedesChips({p}){
  const n=[...new Set((p.redes||[]).map(([t])=>/Instagram/.test(t)?"Instagram":"LinkedIn"))];
  return <div style={{display:"flex",gap:6,marginBottom:14}}>{n.map(x=><span key={x} style={{fontSize:10.5,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",color:"#1C3266",background:C.blueLight,padding:"4px 9px",borderRadius:99}}>{x}</span>)}</div>;
}

function ArticlePage({slug}){
  useEffect(()=>{ window.scrollTo(0,0); },[slug]);
  const a=ARTICULOS.find(x=>x.slug===slug);
  if(!a) return (
    <section style={{background:C.white,padding:"clamp(7rem,14vh,11rem) clamp(1rem,4vw,2.8rem)",textAlign:"center"}}>
      <h1 className="b" style={{fontSize:"1.8rem",fontWeight:800,color:C.ink,marginBottom:18}}>Artículo no encontrado</h1>
      <button onClick={()=>go("blog")} style={{background:C.blue,color:C.white,fontWeight:700,fontSize:14,padding:"12px 26px",borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit"}}>Volver a Novedades</button>
    </section>
  );
  return (
    <>
      <section style={{position:"relative",minHeight:"clamp(340px,50vh,520px)",display:"flex",alignItems:"flex-end",overflow:"hidden"}}>
        <img src={a.hero||a.image} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,rgba(12,24,45,.5) 0%,rgba(12,24,45,.35) 42%,rgba(12,24,45,.92) 100%)"}}/>
        <div style={{position:"relative",zIndex:2,maxWidth:900,margin:"0 auto",width:"100%",padding:"120px clamp(1rem,4vw,2.8rem) clamp(2rem,4vw,3rem)"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16,flexWrap:"wrap"}}>
            <span style={{fontSize:11,fontWeight:700,letterSpacing:".07em",color:C.white,background:C.accent,padding:"4px 11px",borderRadius:3,textTransform:"uppercase"}}>{a.category}</span>
            <span style={{fontSize:13,color:"rgba(255,255,255,.8)"}}>{a.date}{a.autor?" · "+a.autor:""}</span>
          </div>
          <h1 className="b" style={{fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:800,color:C.white,lineHeight:1.15,letterSpacing:"-.02em",maxWidth:820}}>{a.title}</h1>
        </div>
      </section>
      <article style={{background:C.white}}>
        <div style={{maxWidth:800,margin:"0 auto",padding:"clamp(2.5rem,5vw,4rem) clamp(1rem,4vw,2rem) clamp(2rem,4vw,3rem)"}}>
          <button onClick={()=>go("blog")} style={{fontSize:13.5,fontWeight:700,color:C.blue,background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",padding:0,marginBottom:"clamp(1.5rem,3vw,2.2rem)",display:"inline-flex",alignItems:"center",gap:7}}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M9 3.5 5 7.5l4 4M5 7.5h8" stroke={C.blue} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Volver a Novedades
          </button>
          {a.fit && <img src={a.image} alt={a.title} style={{width:"100%",height:"auto",display:"block",borderRadius:6,margin:"0 0 clamp(1.5rem,3vw,2.2rem)",background:"#0E1E3A"}}/>}
          {a.content.map((b,i)=> b.h!==undefined
            ? <h2 key={i} className="b" style={{fontSize:"clamp(1.25rem,2.2vw,1.65rem)",fontWeight:800,color:C.ink,letterSpacing:"-.01em",margin:"clamp(1.8rem,3.5vw,2.6rem) 0 12px"}}>{b.h}</h2>
            : b.list ? <ul key={i} style={{margin:"0 0 18px",paddingLeft:22}}>{b.list.map((t,k)=><li key={k} style={{fontSize:"clamp(1rem,1.4vw,1.1rem)",color:C.grayDark,lineHeight:1.8,marginBottom:6}}>{t}</li>)}</ul>
            : <p key={i} style={{fontSize:"clamp(1rem,1.4vw,1.1rem)",color:C.grayDark,lineHeight:1.95,marginBottom:16}}>{b.p}</p>
          )}
          {a.redes && a.redes.length>0 && (
            <div style={{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",marginTop:"clamp(1.4rem,3vw,2rem)"}}>
              <span style={{fontSize:13,color:C.grayText,fontWeight:600,marginRight:4}}>Publicado en nuestras redes:</span>
              {a.redes.map(([t,u])=>(
                <a key={u} href={u} target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:C.blue,border:`1.5px solid ${C.blue}`,borderRadius:3,padding:"8px 14px"}}>Ver en {t} <IcoExt/></a>
              ))}
            </div>
          )}
          <div style={{marginTop:"clamp(2rem,4vw,3rem)",paddingTop:"clamp(1.5rem,3vw,2rem)",borderTop:`1px solid ${C.grayLight}`}}>
            <button onClick={()=>go("blog")} style={{fontSize:13.5,fontWeight:700,color:C.blue,background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",padding:0,display:"inline-flex",alignItems:"center",gap:7}}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M9 3.5 5 7.5l4 4M5 7.5h8" stroke={C.blue} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Volver a Novedades
            </button>
          </div>
        </div>
      </article>
      <AvisosNovedades/>
      <section style={{background:C.ink,padding:"clamp(3.5rem,6vw,5.5rem) clamp(1rem,4vw,2.8rem)"}}>
        <div style={{maxWidth:820,margin:"0 auto",textAlign:"center"}}>
          <h2 className="b" style={{fontSize:"clamp(1.4rem,2.6vw,2.1rem)",fontWeight:800,color:C.white,marginBottom:14,letterSpacing:"-.01em"}}>¿Necesitas ayuda con tu instalación eléctrica?</h2>
          <p style={{fontSize:15,color:"rgba(255,255,255,.7)",lineHeight:1.8,maxWidth:560,margin:"0 auto 26px"}}>En Nebego estudiamos cada proyecto de forma personalizada para ofrecer una solución segura, eficiente y adaptada a tus necesidades.</p>
          <button onClick={()=>openContacto()} style={{background:C.accent,color:C.white,fontWeight:700,fontSize:14,letterSpacing:".05em",textTransform:"uppercase",padding:"14px 32px",borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit",transition:"background .2s"}}
            onMouseEnter={e=>e.currentTarget.style.background="#2E7FD1"}
            onMouseLeave={e=>e.currentTarget.style.background=C.accent}>Contacta con nosotros</button>
        </div>
      </section>
    </>
  );
}

function BlogContent(){
  return (
    <section style={{background:C.white,padding:"clamp(7rem,11vw,9rem) clamp(1rem,4vw,2.8rem) clamp(3.5rem,6vw,5.5rem)"}}>
      <div style={{maxWidth:1240,margin:"0 auto"}}>
        <V>
          <div style={{marginBottom:"clamp(2.5rem,5vw,4rem)"}}>
            <h1 className="b" style={{fontSize:"clamp(2.4rem,5vw,4rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",lineHeight:1.05,marginBottom:18}}>Blog</h1>
            <p style={{fontSize:"clamp(1rem,1.5vw,1.18rem)",color:C.grayText,lineHeight:1.7,maxWidth:680}}>Lo último que hemos publicado en nuestras redes y las respuestas a las dudas más habituales sobre instalaciones eléctricas.</p>
          </div>
        </V>
        <div className="blog2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1.35fr) minmax(0,1fr)",gap:"clamp(2.5rem,5vw,4.5rem)",alignItems:"start"}}>
          {/* Columna 1: Novedades */}
          <div>
            <h2 className="b" style={{fontSize:"clamp(1.5rem,2.4vw,2rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",paddingBottom:14,marginBottom:"clamp(1.6rem,3vw,2.2rem)",borderBottom:`3px solid ${C.blue}`}}>Novedades</h2>
            <div style={{display:"flex",flexDirection:"column",gap:"clamp(2.5rem,4vw,3.5rem)"}}>
              {ARTICULOS.map((p,i)=>(
                <V key={p.slug}>
                  <a {...linkProps("novedades/"+p.slug)} style={{cursor:"pointer",display:"flex",flexDirection:"column"}}>
                    <div style={{position:"relative",width:"100%",aspectRatio:"16 / 10",overflow:"hidden",borderRadius:4,marginBottom:18}}>
                      <img src={p.image} alt={p.title} loading="lazy" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:p.fit||"cover",background:p.fit?"#0E1E3A":"transparent",transition:"transform .5s"}}
                        onMouseEnter={e=>e.currentTarget.style.transform="scale(1.04)"}
                        onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}/>
                      <span style={{position:"absolute",top:14,left:14,background:C.white,color:C.ink,fontSize:10.5,fontWeight:800,letterSpacing:".09em",textTransform:"uppercase",padding:"6px 11px",borderRadius:2,boxShadow:"0 2px 8px rgba(0,0,0,.12)"}}>{p.category}</span>
                    </div>
                    <div style={{fontSize:12,fontWeight:600,letterSpacing:".1em",color:C.grayText,textTransform:"uppercase",marginBottom:10}}>{p.date}</div>
                    <h3 className="b" style={{fontSize:"clamp(1.3rem,2vw,1.65rem)",fontWeight:800,color:C.ink,lineHeight:1.25,letterSpacing:"-.01em",marginBottom:12,transition:"color .2s"}}
                      onMouseEnter={e=>e.currentTarget.style.color=C.blue}
                      onMouseLeave={e=>e.currentTarget.style.color=C.ink}>{p.title}</h3>
                    <p style={{fontSize:15,color:C.grayText,lineHeight:1.8,marginBottom:16}}>{p.excerpt}</p>
                    <RedesChips p={p}/>
                    <span style={{fontSize:12.5,fontWeight:800,letterSpacing:".1em",color:C.blue,textTransform:"uppercase",display:"inline-flex",alignItems:"center",gap:8}}>Leer más
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h9M7 2.5 11.5 7 7 11.5" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </a>
                </V>
              ))}
            </div>
          </div>
          {/* Columna 2: Preguntas frecuentes */}
          <aside id="preguntas" className="blogfaq">
            <h2 className="b" style={{fontSize:"clamp(1.5rem,2.4vw,2rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",paddingBottom:14,marginBottom:"clamp(1.2rem,2.5vw,1.8rem)",borderBottom:`3px solid ${C.blue}`}}>Preguntas frecuentes</h2>
            {FAQS.map((cat,ci)=>(
              <div key={ci} style={{marginBottom:"clamp(1.8rem,3vw,2.4rem)"}}>
                <div style={{fontSize:11.5,fontWeight:800,letterSpacing:".12em",color:C.blue,textTransform:"uppercase",marginBottom:6}}>{cat.cat}</div>
                <div style={{borderTop:`1px solid ${C.grayLight}`}}>
                  {cat.items.map((it,ii)=><FaqItem key={ii} q={it.q} a={it.a}/>)}
                </div>
              </div>
            ))}
            <div style={{background:C.blueLight,borderRadius:6,padding:"clamp(1.3rem,2.5vw,1.8rem)"}}>
              <div className="b" style={{fontSize:17,fontWeight:800,color:C.ink,marginBottom:8}}>¿No encuentras tu respuesta?</div>
              <p style={{fontSize:14,color:C.grayText,lineHeight:1.7,marginBottom:16}}>Escríbenos y te contestamos lo antes posible.</p>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                <button onClick={()=>openContacto()} style={{background:C.blue,color:C.white,fontWeight:700,fontSize:13,letterSpacing:".05em",textTransform:"uppercase",padding:"11px 18px",borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit"}}>Contactar</button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener" style={{background:"#1FA855",color:C.white,fontWeight:700,fontSize:13,letterSpacing:".05em",textTransform:"uppercase",padding:"11px 18px",borderRadius:3}}>WhatsApp</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Footer(){
  const links=[["Nosotros","nosotros"],["Servicios","servicios"],["Proyectos","proyectos"],["Novedades","blog"],["Preguntas frecuentes","blog"],["Empleo","empleo"]];
  return (
    <footer style={{borderTop:"3px solid "+C.blue,background:"#131a26",padding:"clamp(2.5rem,4vw,3.5rem) clamp(1rem,4vw,2.8rem)"}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1.4fr 1fr 1.2fr",gap:"clamp(1.5rem,4vw,3rem)",marginBottom:28,paddingBottom:28,borderBottom:"1px solid rgba(255,255,255,.09)"}} className="dcol">
          <div>
            <img src={LOGO} alt="Nebego — Montajes Eléctricos" style={{width:"100%",maxWidth:300,height:"auto",display:"block",filter:"brightness(0) invert(1)",opacity:.85,marginBottom:18}}/>
            <p style={{fontSize:13,color:"rgba(255,255,255,.5)",lineHeight:1.75,maxWidth:300}}>Desde el año 2000, apasionados con tu proyecto.</p>
          </div>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:".1em",color:"rgba(255,255,255,.4)",textTransform:"uppercase",marginBottom:14}}>Navegación</div>
            <div style={{display:"flex",flexDirection:"column",gap:9}}>
              {links.map(([l,p])=>(
                <a key={p} {...linkProps(p)} style={{fontSize:13.5,color:"rgba(255,255,255,.62)",fontWeight:500,background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",padding:0,textAlign:"left"}}
                  onMouseEnter={e=>e.currentTarget.style.color=C.white}
                  onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,.62)"}>{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:".1em",color:"rgba(255,255,255,.4)",textTransform:"uppercase",marginBottom:14}}>Contacto</div>
            <div style={{fontSize:13.5,color:"rgba(255,255,255,.62)",lineHeight:1.85}}>
              <div>Pol. Ind. Mutilva Baja,<br/>Calle B, Nave 43 · 31192 Mutilva (Navarra)</div>
              <a href="tel:+34948236434" style={{color:"rgba(255,255,255,.8)",fontWeight:600,display:"block",marginTop:9}}>948 236 434</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" style={{color:"rgba(255,255,255,.8)",fontWeight:600,display:"block"}}>WhatsApp {WHATSAPP_TXT}</a>
              <a href="mailto:contacto@nebego.com" style={{color:"rgba(255,255,255,.8)",fontWeight:600}}>contacto@nebego.com</a>
              <div style={{display:"flex",gap:16,marginTop:12}}>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener" style={{color:"rgba(255,255,255,.8)",fontWeight:600,display:"inline-flex",alignItems:"center",gap:6}}>Instagram <IcoExt/></a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener" style={{color:"rgba(255,255,255,.8)",fontWeight:600,display:"inline-flex",alignItems:"center",gap:6}}>LinkedIn <IcoExt/></a>
              </div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <div style={{fontSize:11.5,color:"rgba(255,255,255,.3)"}}>© {new Date().getFullYear()} Montajes Eléctricos Nebego S.L. — Todos los derechos reservados</div>
          <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            {[["Aviso legal","legal"],["Política de privacidad","legal"],["Política de cookies","legal"]].map(([t,p],i)=>(
              <a key={i} {...linkProps(p)} style={{fontSize:11.5,color:"rgba(255,255,255,.32)",background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",padding:0,transition:"color .2s"}}
                onMouseEnter={e=>e.currentTarget.style.color="rgba(255,255,255,.7)"}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,.32)"}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function LegalPage(){
  const block={fontSize:14.5,color:C.grayText,lineHeight:1.85,marginBottom:14};
  const h2={fontSize:"1.35rem",fontWeight:800,color:C.ink,margin:"36px 0 14px",letterSpacing:"-.01em"};
  const h3={fontSize:"1.05rem",fontWeight:700,color:C.blue,margin:"22px 0 8px"};
  const CIF="B-31687437"; // Pendiente de confirmar por Nebego
  return (
    <>
      <PageHero tag="Información legal" title="Aviso legal, privacidad y cookies" img={IMG.building}/>
      <section style={{background:C.white,padding:"clamp(4.5rem,7vw,7rem) clamp(1rem,4vw,2.8rem)"}}>
        <div style={{maxWidth:820,margin:"0 auto"}}>

          <h2 className="b" style={{...h2,marginTop:0}}>1. Aviso legal e información general</h2>
          <p style={block}>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:</p>
          <p style={block}>
            <strong>Titular:</strong> Montajes Eléctricos Nebego, S.L.<br/>
            <strong>NIF:</strong> {CIF}<br/>
            <strong>Domicilio:</strong> Pol. Ind. Mutilva Baja, Calle B, Nave 43, 31192 Mutilva (Navarra).<br/>
            <strong>Teléfono:</strong> 948 236 434<br/>
            <strong>Correo electrónico:</strong> contacto@nebego.com
          </p>
          <p style={block}>El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las condiciones recogidas en el presente Aviso Legal. El titular se reserva el derecho a modificar la presente información sin previo aviso.</p>

          <h2 className="b" style={h2}>2. Propiedad intelectual e industrial</h2>
          <p style={block}>Todos los contenidos de este sitio web (textos, fotografías, logotipos, marcas, diseño y código) son titularidad de Montajes Eléctricos Nebego, S.L., o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o comunicación pública, total o parcial, sin autorización expresa del titular.</p>

          <h2 className="b" style={h2}>3. Responsabilidad</h2>
          <p style={block}>El titular no se responsabiliza de los daños o perjuicios derivados del uso de la información contenida en este sitio, ni del acceso a sitios de terceros a través de enlaces. Se compromete a procurar que la información sea exacta y actualizada, si bien no garantiza la ausencia de errores.</p>

          <h2 className="b" style={h2}>4. Política de privacidad y protección de datos</h2>
          <p style={block}>De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), se informa sobre el tratamiento de los datos personales facilitados a través de este sitio web.</p>
          <h3 style={h3}>Responsable del tratamiento</h3>
          <p style={block}>Montajes Eléctricos Nebego, S.L. — NIF {CIF} — Pol. Ind. Mutilva Baja, Calle B, Nave 43, 31192 Mutilva (Navarra). Correo: contacto@nebego.com.</p>
          <h3 style={h3}>Finalidad</h3>
          <p style={block}>Los datos facilitados a través del formulario de contacto se tratan para gestionar y responder a las consultas y solicitudes de presupuesto recibidas. Los datos facilitados a través del formulario de empleo se tratan para valorar la candidatura en los procesos de selección de la empresa.</p>
          <p style={block}>Si el usuario lo solicita expresamente (marcando la casilla correspondiente en el formulario de presupuesto o apuntándose en el bloque «Avisos de ayudas»), su nombre y correo electrónico se tratarán también para enviarle por correo electrónico avisos sobre ayudas y subvenciones, novedades y servicios de Montajes Eléctricos Nebego, S.L. relacionados con las instalaciones eléctricas. Cada envío incluirá un medio sencillo y gratuito para darse de baja.</p>
          <h3 style={h3}>Legitimación</h3>
          <p style={block}>La base jurídica es el consentimiento del interesado, otorgado al marcar la casilla de aceptación y enviar el formulario, así como la aplicación de medidas precontractuales a petición del interesado. El envío de avisos y novedades por correo se basa en el consentimiento expreso que el usuario da al marcar la casilla específica, que es voluntaria e independiente de la solicitud de presupuesto (artículo 21 de la LSSI-CE). El consentimiento puede retirarse en cualquier momento, sin que ello afecte a la licitud del tratamiento previo. A los clientes con los que exista una relación contractual previa se les podrán enviar comunicaciones sobre servicios similares a los contratados, con la posibilidad de oponerse en cada envío.</p>
          <h3 style={h3}>Conservación</h3>
          <p style={block}>Los datos se conservarán durante el tiempo necesario para atender la solicitud y, posteriormente, durante los plazos legalmente exigibles. Los currículos se conservarán durante un máximo de un año para futuros procesos de selección. Los datos de quienes se apunten a los avisos y novedades se conservarán mientras no soliciten la baja.</p>
          <h3 style={h3}>Destinatarios</h3>
          <p style={block}>Los datos no se cederán a terceros salvo obligación legal. Podrán acceder a los datos los proveedores de servicios que asisten al titular (por ejemplo, el servicio de envío de formularios y el proveedor de alojamiento web) como encargados del tratamiento.</p>
          <h3 style={h3}>Derechos</h3>
          <p style={block}>El interesado puede ejercer sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad dirigiendo una comunicación a contacto@nebego.com, indicando el derecho que desea ejercer. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>

          <h2 className="b" style={h2}>5. Política de cookies</h2>
          <p style={block}>Este sitio web utiliza únicamente cookies técnicas y de sesión, estrictamente necesarias para su correcto funcionamiento y para la gestión de la navegación. Estas cookies no requieren consentimiento previo conforme al artículo 22.2 de la LSSI-CE.</p>
          <p style={block}>Para conocer de forma agregada el número de visitas y las páginas más vistas, este sitio utiliza GoatCounter, una herramienta de estadísticas que no instala cookies, no guarda datos que identifiquen al usuario y no hace seguimiento entre sitios web. El mapa de ubicación se muestra con OpenStreetMap: al verlo, el navegador descarga las imágenes del mapa desde sus servidores, sin instalar cookies. Este sitio no utiliza cookies de analítica, publicidad ni de terceros con fines de seguimiento. El usuario puede configurar su navegador para bloquear o eliminar las cookies en cualquier momento.</p>

          <p style={{...block,marginTop:30,fontSize:12.5,color:C.grayMid}}>Última actualización: noviembre de 2026.</p>
        </div>
      </section>
    </>
  );
}

function Pilares(){
  const ic={width:46,height:46,viewBox:"0 0 48 48",fill:"none",stroke:C.blue,strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"};
  const areas=[
    {t:"Instalaciones eléctricas", icon:(
      <svg {...ic}><path d="M24 5V43"/><path d="M14 43 24 5 34 43"/><path d="M16.5 36H31.5"/><path d="M18.5 28H29.5"/><path d="M11 20H37"/><path d="M15 13H33"/><path d="M20 20v4M28 20v4"/></svg>
    )},
    {t:"PCI y Telecomunicaciones", icon:(
      <svg {...ic}><circle cx="24" cy="13" r="2.5"/><path d="M24 15.5V42"/><path d="M17 42 24 22 31 42"/><path d="M19.5 34H28.5"/><path d="M30 8a9 9 0 0 1 0 11"/><path d="M34 5a14 14 0 0 1 0 17"/><path d="M18 8a9 9 0 0 0 0 11"/><path d="M14 5a14 14 0 0 0 0 17"/></svg>
    )},
    {t:"Renovables", icon:(
      <svg {...ic}><circle cx="32" cy="12" r="4"/><path d="M32 4v3M32 17v3M24 12h3M37 12h3"/><path d="M10 40 14 26h16l4 14Z"/><path d="M12.5 33h19"/><path d="M19 26 17 40M25 26l.5 14"/></svg>
    )},
    {t:"Puntos de recarga de vehículo eléctrico", icon:(
      <svg {...ic}><rect x="13" y="5" width="18" height="38" rx="2.5"/><path d="M13 14h18"/><path d="M24 19 20 28h4l-2 8"/><path d="M31 13h3a2 2 0 0 1 2 2v8a2.5 2.5 0 0 0 5 0v-6"/></svg>
    )},
  ];
  return (
    <section id="servicios" style={{background:C.offWhite,padding:"clamp(5rem,9vw,9rem) clamp(1rem,4vw,2.8rem)",borderTop:`1px solid ${C.grayLight}`}}>
      <div style={{maxWidth:1280,margin:"0 auto"}}>
        <V>
          <div style={{textAlign:"center",marginBottom:"clamp(2rem,4vw,3.5rem)"}}>
            <h2 className="b" style={{fontSize:"clamp(1.6rem,2.8vw,2.5rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em"}}>
              Áreas de actuación
            </h2>
          </div>
        </V>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18}}>
          {areas.map((a,i)=>(
            <V key={i} d={`d${(i%3)+1}`}>
              <div style={{background:C.white,border:`1px solid ${C.grayLight}`,borderRadius:4,
                padding:"34px 22px 28px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",
                transition:"transform .25s,box-shadow .25s,border-color .25s"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 10px 30px rgba(27,111,191,.14)";e.currentTarget.style.borderColor=C.blueLight}}
                onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=C.grayLight}}>
                <div style={{marginBottom:18}}>{a.icon}</div>
                <h3 className="b" style={{fontSize:"1.05rem",fontWeight:700,color:C.grayDark,lineHeight:1.35,marginBottom:22,flex:1,display:"flex",alignItems:"center"}}>{a.t}</h3>
                <button onClick={()=>go(["servicio-electricas","servicio-telecom","servicio-renovables","servicio-recarga"][i])}
                  style={{fontSize:12,fontWeight:700,letterSpacing:".04em",background:C.blue,color:C.white,
                    padding:"8px 18px",borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit",transition:"background .2s"}}
                  onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
                  onMouseLeave={e=>e.currentTarget.style.background=C.blue}>+ info</button>
              </div>
            </V>
          ))}
        </div>
      </div>
    </section>
  );
}

function svcIcon(name){
  const ic={width:40,height:40,viewBox:"0 0 48 48",fill:"none",stroke:C.blue,strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"};
  const m={
    panel:(<svg {...ic}><rect x="11" y="6" width="26" height="36" rx="2"/><path d="M11 16h26"/><path d="M17 23v7M23 23v7M29 23v7M35 23v7"/></svg>),
    tower:(<svg {...ic}><path d="M24 5V43"/><path d="M14 43 24 5 34 43"/><path d="M11 20H37"/><path d="M15 13H33"/><path d="M17 30H31"/></svg>),
    bulb:(<svg {...ic}><path d="M17 33a11 11 0 1 1 14 0c-1.6 1.4-2 2.6-2 4H19c0-1.4-.4-2.6-2-4Z"/><path d="M19 41h10M21 45h6"/></svg>),
    doc:(<svg {...ic}><path d="M14 5h13l9 9v29H14Z"/><path d="M27 5v9h9"/><path d="M19 24h12M19 30h12M19 36h8"/></svg>),
    network:(<svg {...ic}><circle cx="24" cy="8" r="4"/><circle cx="9" cy="40" r="4"/><circle cx="39" cy="40" r="4"/><path d="M24 12v8M24 20 11 37M24 20l13 17"/></svg>),
    fiber:(<svg {...ic}><path d="M7 39c9 0 9-15 17-15s8 15 17 15"/><circle cx="7" cy="39" r="2.5"/><circle cx="41" cy="39" r="2.5"/></svg>),
    camera:(<svg {...ic}><rect x="8" y="15" width="23" height="12" rx="2"/><circle cx="14" cy="21" r="2.4"/><path d="M31 18l8-3v13l-8-3z"/><path d="M15 27v7"/></svg>),
    home:(<svg {...ic}><path d="M8 22 24 8l16 14"/><path d="M12 20v20h24V20"/><path d="M20 40V29h8v11"/></svg>),
    solar:(<svg {...ic}><path d="M10 36 14 24h20l4 12Z"/><path d="M12.5 30h23"/><path d="M20 24 18 36M27 24l1 12"/></svg>),
    battery:(<svg {...ic}><rect x="8" y="17" width="30" height="15" rx="2"/><path d="M38 22v5h3v-5z"/><path d="M15 24.5h6M18 21.5v6"/></svg>),
    chart:(<svg {...ic}><rect x="6" y="9" width="36" height="24" rx="2"/><path d="M12 26l6-6 5 4 8-9"/><path d="M18 40h12M24 33v7"/></svg>),
    building:(<svg {...ic}><rect x="13" y="6" width="22" height="36"/><path d="M19 13h3M26 13h3M19 20h3M26 20h3M19 27h3M26 27h3"/><path d="M21 42v-8h6v8"/></svg>),
    gauge:(<svg {...ic}><path d="M8 36a16 16 0 0 1 32 0"/><path d="M24 36 33 25"/><circle cx="24" cy="36" r="2.2"/><path d="M9 36h2M37 36h2M24 21v2"/></svg>),
    flame:(<svg {...ic}><path d="M25 5c1 7 7 9 7 16a8 8 0 1 1-16 0c0-4 2-7 4-9 0 3 2 4 3 4-1-4 0-8 2-11Z"/></svg>),
    shield:(<svg {...ic}><path d="M24 5 38 9.5V19c0 9-6 16-14 19.5C16 35 10 28 10 19V9.5L24 5Z"/><path d="M24 19v5"/><circle cx="24" cy="16.5" r="1.5"/></svg>),
  };
  return m[name]||null;
}

const SVC={
  "servicio-electricas":{
    nombre:"Instalaciones eléctricas", img:IMG.instelec,
    intro:"Ejecutamos instalaciones eléctricas de baja, media y alta tensión para obra nueva, reforma e industria: desde el diseño del cuadro hasta la puesta en servicio y la legalización de la instalación.",
    puntos:[
      {i:"panel",t:"Baja tensión",d:"Cuadros de distribución y control, circuitos interiores, fuerza, alumbrado y sistemas auxiliares en edificios, naves y locales."},
      {i:"tower",t:"Media y alta tensión",d:"Líneas subterráneas y centros de transformación hasta 30 kV, con su proyecto y legalización."},
      {i:"bulb",t:"Alumbrado y eficiencia",d:"Alumbrado interior, alumbrado público y actuaciones de mejora de la eficiencia energética."},
      {i:"doc",t:"Reformas y legalización",d:"Adaptación de instalaciones existentes a la normativa vigente y tramitación ante Organismo de Control Autorizado (OCA)."},
    ],
    acred:[
      {n:"IBTE 0273",l:"Instalador autorizado de Baja Tensión"},
      {n:"LAT-0273",l:"Instalador de Alta Tensión (hasta 30 kV)"},
    ],
  },
  "servicio-telecom":{
    nombre:"PCI y Telecomunicaciones", img:IMG.telecom,
    intro:"Sistemas de protección contra incendios e infraestructuras de telecomunicaciones para edificios y empresas: detección y alarma, redes de datos, fibra, seguridad y automatización.",
    secciones:[
      {titulo:"Protección contra incendios (PCI)", puntos:[
        {i:"flame",t:"Detección y alarma",d:"Detección automática de incendios, pulsadores manuales, sirenas y comunicación de alarma conforme a normativa."},
        {i:"shield",t:"Sistemas y marcas",d:"Empresa habilitada en PCI (EIPCI-0167). Trabajamos con Notifier, Morley y Siemens, adaptando el sistema a cada edificio."},
      ]},
      {titulo:"Telecomunicaciones", puntos:[
        {i:"network",t:"Cableado estructurado",d:"Redes de datos horizontales y verticales, con certificación de la instalación."},
        {i:"fiber",t:"Fibra óptica e ICT",d:"Despliegue de fibra e infraestructuras comunes de telecomunicaciones en edificios."},
        {i:"camera",t:"CCTV y control de accesos",d:"Videovigilancia, control de accesos y sistemas de seguridad."},
        {i:"home",t:"Domótica",d:"Automatización y control de instalaciones para mayor confort y eficiencia."},
      ]},
    ],
    acred:[
      {n:"EIPCI-0167",l:"Empresa habilitada en Protección Contra Incendios"},
      {n:"Nº 8052",l:"Empresa instaladora de Telecomunicaciones · tipos A · B · C · F"},
    ],
  },
  "servicio-renovables":{
    nombre:"Renovables", img:IMG.renov,
    intro:"Instalaciones de autoconsumo fotovoltaico para vivienda, comunidad, empresa e industria, con diseño, montaje y legalización completa de la instalación.",
    puntos:[
      {i:"solar",t:"Autoconsumo fotovoltaico",d:"Generación de energía solar para reducir el coste eléctrico en vivienda, empresa e industria."},
      {i:"battery",t:"Almacenamiento",d:"Sistemas de baterías para aprovechar la energía generada también fuera de las horas de sol."},
      {i:"chart",t:"Monitorización",d:"Control y seguimiento de la producción y el consumo de la instalación."},
      {i:"doc",t:"Legalización y tramitación",d:"Diseño, montaje y legalización de la instalación de principio a fin."},
    ],
    acred:[
      {n:"IBTE 0273",l:"Instalador eléctrico autorizado — legalización de la instalación"},
    ],
  },
  "servicio-recarga":{
    nombre:"Puntos de recarga de vehículo eléctrico", img:IMG.recarga,
    intro:"Instalación de puntos de recarga para vehículo eléctrico en viviendas, comunidades, empresas y aparcamientos, con sus protecciones, gestión de carga y legalización.",
    puntos:[
      {i:"home",t:"Vivienda y comunidad",d:"Puntos de recarga individuales y para comunidades de vecinos, con reparto de consumo."},
      {i:"building",t:"Empresa y flotas",d:"Soluciones de recarga para aparcamientos de empresa y flotas de vehículos."},
      {i:"gauge",t:"Gestión de carga",d:"Sistemas de balanceo y control de potencia para optimizar la instalación."},
      {i:"doc",t:"Legalización",d:"Protecciones, puesta en marcha y legalización de la instalación."},
    ],
    acred:[
      {n:"IBTE 0273",l:"Instalador eléctrico autorizado — legalización de la instalación"},
    ],
  },
};

function ServiceDetailPage({d}){
  return (
    <>
      <PageHero tag="Servicios" title={d.nombre} subtitle={d.intro} img={d.img}/>
      <section style={{background:C.white,padding:"clamp(5rem,8vw,8rem) clamp(1rem,4vw,2.8rem)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          {(d.secciones || [{titulo:"Qué hacemos",puntos:d.puntos}]).map((sec,si)=>(
            <div key={si} style={{marginTop:si>0?"clamp(2.8rem,5vw,4rem)":0}}>
              <V><h2 className="b" style={{fontSize:"clamp(1.5rem,2.6vw,2.2rem)",fontWeight:800,color:C.ink,marginBottom:"clamp(1.8rem,4vw,2.8rem)",letterSpacing:"-.02em"}}>{sec.titulo}</h2></V>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"40px 52px"}}>
                {sec.puntos.map((p,i)=>(
                  <V key={i} d={`d${(i%2)+1}`}>
                    <div style={{height:"100%"}}>
                      <div style={{marginBottom:16}}>{svcIcon(p.i)}</div>
                      <h3 className="b" style={{fontSize:"clamp(1.1rem,1.7vw,1.3rem)",fontWeight:800,color:C.blue,marginBottom:11,letterSpacing:"-.01em"}}>{p.t}</h3>
                      <p style={{fontSize:15,color:C.grayText,lineHeight:1.85}}>{p.d}</p>
                    </div>
                  </V>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {d.acred && d.acred.length>0 && (
        <section style={{background:C.offWhite,padding:"clamp(4.5rem,7vw,7rem) clamp(1rem,4vw,2.8rem)",borderTop:`1px solid ${C.grayLight}`}}>
          <div style={{maxWidth:1100,margin:"0 auto"}}>
            <V><h2 className="b" style={{fontSize:"clamp(1.4rem,2.4vw,2rem)",fontWeight:800,color:C.ink,textAlign:"center",marginBottom:"clamp(1.5rem,3vw,2.4rem)",letterSpacing:"-.02em"}}>Acreditaciones</h2></V>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:14,maxWidth:760,margin:"0 auto"}}>
              {d.acred.map((a,i)=>(
                <V key={i} d={`d${(i%3)+1}`}>
                  <div style={{background:C.white,border:`1px solid ${C.grayLight}`,borderTop:`3px solid ${C.blue}`,borderRadius:4,padding:"22px 20px",height:"100%",textAlign:"center"}}>
                    <div className="bc" style={{fontSize:"1.4rem",fontWeight:800,color:C.blue}}>{a.n}</div>
                    <div style={{fontSize:12.5,color:C.grayDark,marginTop:7,lineHeight:1.5,fontWeight:500}}>{a.l}</div>
                  </div>
                </V>
              ))}
            </div>
          </div>
        </section>
      )}
      <section style={{background:C.ink,padding:"clamp(3.5rem,6vw,5.5rem) clamp(1rem,4vw,2.8rem)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"clamp(1.5rem,4vw,3rem)",flexWrap:"wrap"}}>
          <div>
            <h2 className="b" style={{fontSize:"clamp(1.3rem,2.4vw,1.9rem)",fontWeight:800,color:C.white,marginBottom:8,letterSpacing:"-.01em"}}>¿Quiere ver ejemplos reales?</h2>
            <p style={{fontSize:15,color:"rgba(255,255,255,.6)",lineHeight:1.7,maxWidth:460}}>Consulte algunas de las instalaciones que hemos ejecutado.</p>
          </div>
          <button onClick={()=>go("proyectos")}
            style={{background:C.accent,color:C.white,fontWeight:700,fontSize:14,letterSpacing:".05em",textTransform:"uppercase",padding:"14px 30px",borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap",transition:"background .2s"}}
            onMouseEnter={e=>e.currentTarget.style.background="#2E7FD1"}
            onMouseLeave={e=>e.currentTarget.style.background=C.accent}>Ver nuestros proyectos</button>
        </div>
      </section>
    </>
  );
}

function ElectricasPage(){ return <ServiceDetailPage d={SVC["servicio-electricas"]}/>; }
function TelecomPage(){ return <ServiceDetailPage d={SVC["servicio-telecom"]}/>; }
function RenovablesPage(){ return <ServiceDetailPage d={SVC["servicio-renovables"]}/>; }
function RecargaPage(){ return <ServiceDetailPage d={SVC["servicio-recarga"]}/>; }

function Intro(){
  return (
    <section id="empresa" style={{background:C.white,padding:"clamp(5rem,9vw,9rem) clamp(1rem,4vw,2.8rem)"}}>
      <div style={{maxWidth:1120,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(2rem,4vw,4rem)",alignItems:"center"}} className="dcol">
        <V c="revL">
          <h2 className="bc" style={{fontSize:"clamp(2rem,4.4vw,3.7rem)",fontWeight:800,color:C.ink,lineHeight:1.1,letterSpacing:"-.02em",marginBottom:20}}>
            Desde el año <span style={{color:C.blue}}>2000</span>,<br/>apasionados con tu proyecto.
          </h2>
          <p style={{fontSize:"clamp(.98rem,1.4vw,1.12rem)",color:C.grayText,lineHeight:1.85,maxWidth:480}}>
            Desarrollamos soluciones completas para todo tipo de instalaciones relacionadas con la electricidad, desde el diseño y la ejecución hasta la puesta en marcha.
          </p>
          <button onClick={()=>go("nosotros")} style={{marginTop:26,display:"inline-flex",alignItems:"center",gap:9,background:C.blue,color:C.white,fontWeight:700,fontSize:14,letterSpacing:".05em",textTransform:"uppercase",padding:"13px 28px",borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit",transition:"background .2s"}}
            onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
            onMouseLeave={e=>e.currentTarget.style.background=C.blue}>Conócenos
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </V>
        <V c="revR">
          <img src={IMG.cabecera} alt="Nave de Montajes Eléctricos Nebego en Mutilva (Navarra)"
            style={{width:"100%",height:"auto",objectFit:"contain",background:"#fff",borderRadius:4,display:"block"}}/>
        </V>
      </div>
    </section>
  );
}

function MapaCobertura(){
  return (
    <section style={{background:C.white,padding:"clamp(2rem,5vw,4rem) clamp(1rem,3vw,2rem)"}}>
      <V>
        <div style={{maxWidth:1440,margin:"0 auto"}}>
          <img src={imgMapa} alt="Zonas donde trabaja Montajes Eléctricos Nebego" style={{width:"100%",height:"auto",display:"block"}}/>
        </div>
      </V>
    </section>
  );
}

function NovedadesPreview(){
  const posts=ARTICULOS.slice(0,3);
  return (
    <section style={{background:C.white,padding:"clamp(5rem,9vw,9rem) clamp(1rem,4vw,2.8rem)",borderTop:`1px solid ${C.grayLight}`}}>
      <div style={{maxWidth:1180,margin:"0 auto"}}>
        <V>
          <div style={{textAlign:"center",marginBottom:"clamp(2.5rem,5vw,4rem)"}}>
            <div style={{fontSize:12,fontWeight:800,letterSpacing:".16em",color:C.blue,textTransform:"uppercase",marginBottom:14}}>Novedades</div>
            <h2 className="b" style={{fontSize:"clamp(1.8rem,3.4vw,2.8rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",marginBottom:16}}>Lo último de Nebego</h2>
            <p style={{fontSize:15,color:C.grayText,lineHeight:1.75,maxWidth:600,margin:"0 auto"}}>Lo último de nuestras obras, ayudas, consejos y el día a día del equipo, tal como lo contamos en LinkedIn e Instagram.</p>
          </div>
        </V>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"clamp(2rem,3.5vw,3rem)"}}>
          {posts.map((p,i)=>(
            <V key={i} d={`d${(i%3)+1}`}>
              <a {...linkProps("novedades/"+p.slug)} style={{cursor:"pointer",display:"flex",flexDirection:"column",height:"100%"}}>
                <div style={{position:"relative",width:"100%",aspectRatio:"16 / 10",overflow:"hidden",borderRadius:4,marginBottom:18}}>
                  <img src={p.image} alt={p.title} loading="lazy" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:p.fit||"cover",background:p.fit?"#0E1E3A":"transparent",transition:"transform .5s"}}
                    onMouseEnter={e=>e.currentTarget.style.transform="scale(1.04)"}
                    onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}/>
                  <span style={{position:"absolute",top:14,left:14,background:C.white,color:C.ink,fontSize:10.5,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",padding:"6px 11px",borderRadius:2,boxShadow:"0 2px 8px rgba(0,0,0,.12)"}}>{p.category}</span>
                </div>
                <div style={{fontSize:11.5,fontWeight:600,letterSpacing:".1em",color:C.grayText,textTransform:"uppercase",marginBottom:10}}>{p.date}</div>
                <h3 className="b" style={{fontSize:"1.15rem",fontWeight:800,color:C.ink,lineHeight:1.3,letterSpacing:"-.01em",marginBottom:11,transition:"color .2s"}}
                  onMouseEnter={e=>e.currentTarget.style.color=C.blue}
                  onMouseLeave={e=>e.currentTarget.style.color=C.ink}>{p.title}</h3>
                <p style={{fontSize:14,color:C.grayText,lineHeight:1.75,marginBottom:16,flex:1}}>{p.excerpt}</p>
                <RedesChips p={p}/>
                <span style={{fontSize:12,fontWeight:800,letterSpacing:".1em",color:C.blue,textTransform:"uppercase",display:"inline-flex",alignItems:"center",gap:7}}>Leer más
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </a>
            </V>
          ))}
        </div>
        <V>
          <div style={{textAlign:"center",marginTop:"clamp(2.5rem,4vw,3.5rem)"}}>
            <button onClick={()=>go("blog")} style={{display:"inline-flex",alignItems:"center",gap:9,background:C.blue,color:C.white,fontWeight:700,fontSize:14,letterSpacing:".05em",textTransform:"uppercase",padding:"14px 32px",borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit",transition:"background .2s"}}
              onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
              onMouseLeave={e=>e.currentTarget.style.background=C.blue}>Ver todas las novedades
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h9M7 2.5 11.5 7 7 11.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </V>
      </div>
    </section>
  );
}

function FaqItem({q,a}){
  const [open,setOpen]=useState(false);
  return (
    <div style={{borderBottom:`1px solid ${C.grayLight}`}}>
      <button onClick={()=>setOpen(!open)} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,padding:"clamp(17px,2.4vw,23px) 2px",background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",textAlign:"left"}}>
        <span className="b" style={{fontSize:"clamp(1rem,1.55vw,1.15rem)",fontWeight:700,color:open?C.blue:C.ink,lineHeight:1.4,transition:"color .2s"}}>{q}</span>
        <span style={{flexShrink:0,width:28,height:28,borderRadius:"50%",background:open?C.blue:C.blueLight,display:"flex",alignItems:"center",justifyContent:"center",transition:"background .2s"}}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={open?"M2 6h8":"M6 2v8M2 6h8"} stroke={open?"#fff":C.blue} strokeWidth="1.9" strokeLinecap="round"/></svg>
        </span>
      </button>
      {open && <div style={{padding:"0 2px clamp(18px,2.5vw,24px)",fontSize:15,color:C.grayText,lineHeight:1.85,maxWidth:800}}>{a}</div>}
    </div>
  );
}

const FAQS=[
  {cat:"Preguntas generales", items:[
    {q:"¿Dónde está Nebego y desde cuándo trabaja?", a:"Montajes Eléctricos Nebego es una empresa familiar con sede en Mutilva (Navarra) que trabaja en instalaciones eléctricas desde el año 2000."},
    {q:"¿Qué tipo de instalaciones realiza Nebego?", a:"Instalaciones eléctricas de baja, media y alta tensión, cuadros, iluminación, telecomunicaciones, protección contra incendios, renovables y puntos de recarga de vehículo eléctrico, además de legalizaciones."},
    {q:"¿Trabajáis para empresas, comunidades y particulares?", a:"Sí. Trabajamos habitualmente con constructoras, empresas, comunidades, administraciones e industrias, adaptando la solución a cada tipo de cliente."},
    {q:"¿En qué zona trabajáis?", a:"Nuestra actividad se concentra en Navarra, aunque hemos ejecutado proyectos en distintos puntos de España."},
    {q:"¿Estáis autorizados y acreditados?", a:"Sí. Somos instaladores autorizados de baja tensión (IBTE 0273) y alta tensión (LAT-0273), empresa instaladora de telecomunicaciones (nº 8052) y empresa habilitada en protección contra incendios (EIPCI-0167)."},
    {q:"¿Cómo puedo solicitar un presupuesto?", a:"Puedes contactarnos por teléfono (948 236 434), por email (contacto@nebego.com) o a través del formulario de la web. Estudiamos cada solicitud y respondemos con información concreta."},
  ]},
  {cat:"Actualidad eléctrica y eficiencia energética", items:[
    {q:"¿Por qué cada vez más empresas instalan puntos de recarga para vehículo eléctrico?", a:"Porque la movilidad eléctrica está creciendo y muchas empresas quieren adaptar sus instalaciones para empleados, clientes o flotas propias. Instalar puntos de recarga permite anticiparse a esa demanda, mejorar el servicio y preparar el edificio para nuevas necesidades energéticas."},
    {q:"¿Qué ventajas tiene instalar un punto de recarga en una empresa?", a:"Un punto de recarga puede mejorar la comodidad de empleados y clientes, facilitar la transición hacia flotas eléctricas y aumentar el valor funcional de las instalaciones. Además, permite controlar mejor la recarga y adaptarla a las necesidades reales del edificio."},
    {q:"¿Es recomendable instalar puntos de recarga en garajes comunitarios?", a:"Sí. Cada vez más usuarios necesitan cargar su vehículo en casa, y los garajes comunitarios deben adaptarse progresivamente a esta realidad. Una instalación bien planteada permite ordenar la infraestructura, evitar soluciones improvisadas y facilitar futuras ampliaciones."},
    {q:"¿Qué es una preinstalación para vehículo eléctrico?", a:"Es una preparación previa de canalizaciones, cuadros, protecciones y comunicaciones para facilitar la instalación futura de puntos de recarga. Es especialmente útil en comunidades, aparcamientos de empresas y edificios de nueva construcción."},
    {q:"¿El coche eléctrico puede reducir costes de uso?", a:"En muchos casos sí, especialmente cuando se carga en horarios adecuados o con una instalación bien dimensionada. El ahorro depende del uso del vehículo, la tarifa eléctrica, la potencia contratada y el tipo de recarga instalada."},
    {q:"¿Qué debe tener una buena instalación de recarga eléctrica?", a:"Debe estar correctamente dimensionada, contar con protecciones adecuadas, cumplir la normativa aplicable y estar preparada para un uso seguro. También es recomendable valorar sistemas de control de potencia o gestión dinámica de carga cuando hay varios puntos."},
    {q:"¿Qué es la gestión dinámica de carga?", a:"Es un sistema que reparte la potencia disponible entre varios cargadores o consumos del edificio para evitar sobrecargas. Es especialmente útil en comunidades, empresas y aparcamientos con varios puntos de recarga."},
    {q:"¿Por qué es importante revisar una instalación eléctrica antigua?", a:"Porque una instalación antigua puede no estar preparada para las necesidades actuales de consumo, seguridad o eficiencia. Revisarla permite detectar problemas, mejorar protecciones y adaptar la instalación a nuevos usos."},
    {q:"¿Cuándo conviene modernizar un cuadro eléctrico?", a:"Conviene hacerlo cuando la instalación ha crecido, se han añadido nuevos consumos, hay disparos frecuentes, falta espacio, existen protecciones antiguas o se quiere mejorar la seguridad y el control de la instalación."},
    {q:"¿Qué papel tiene la electricidad en la eficiencia energética de un edificio?", a:"La instalación eléctrica influye directamente en el consumo, la seguridad y el funcionamiento de un edificio. Una instalación bien diseñada permite integrar iluminación eficiente, control de consumos, recarga de vehículos, energías renovables y sistemas técnicos de forma ordenada."},
    {q:"¿Qué son los Certificados de Ahorro Energético?", a:"Son un mecanismo que permite acreditar ahorros de energía conseguidos tras determinadas actuaciones de eficiencia energética. Pueden ser interesantes en proyectos donde se mejoran instalaciones y se reduce el consumo energético."},
    {q:"¿Por qué cada vez se habla más de autoconsumo y energía solar?", a:"Porque muchas empresas y edificios buscan reducir su dependencia energética y aprovechar mejor sus propios recursos. El autoconsumo puede combinarse con instalaciones eléctricas eficientes, sistemas de almacenamiento y puntos de recarga."},
    {q:"¿Se puede combinar energía solar con puntos de recarga?", a:"Sí. En muchos casos, una instalación fotovoltaica puede complementar la recarga de vehículos eléctricos y ayudar a optimizar el consumo energético del edificio. Para hacerlo correctamente es necesario estudiar potencias, horarios de uso y necesidades reales."},
    {q:"¿Qué importancia tiene la legalización de una instalación eléctrica?", a:"La legalización garantiza que la instalación se ha ejecutado conforme a la normativa aplicable y que cuenta con la documentación necesaria. Es un paso fundamental en obra nueva, ampliaciones, reformas, puntos de recarga y determinadas instalaciones técnicas."},
    {q:"¿Por qué es importante contar con una empresa especializada para este tipo de instalaciones?", a:"Porque una instalación eléctrica no solo debe funcionar, también debe ser segura, estar bien dimensionada y cumplir la normativa. Contar con una empresa especializada ayuda a evitar problemas futuros y facilita una ejecución más ordenada del proyecto."},
  ]},
];

function FAQsPage(){
  return (
    <>
      <section style={{background:C.white,padding:"clamp(7rem,11vw,9rem) clamp(1rem,4vw,2.8rem) clamp(1.5rem,3vw,2.5rem)"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <h1 className="b" style={{fontSize:"clamp(2.4rem,5vw,4rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",lineHeight:1.05,marginBottom:18}}>Preguntas frecuentes</h1>
          <p style={{fontSize:"clamp(1rem,1.5vw,1.18rem)",color:C.grayText,lineHeight:1.7,maxWidth:680}}>Resolvemos las dudas más habituales sobre instalaciones eléctricas, recarga de vehículo eléctrico, eficiencia energética y el trabajo de Nebego.</p>
        </div>
      </section>
      <section style={{background:C.white,padding:"clamp(2rem,4vw,3.5rem) clamp(1rem,4vw,2.8rem) clamp(5rem,8vw,8rem)"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          {FAQS.map((cat,ci)=>(
            <div key={ci} style={{marginBottom:ci<FAQS.length-1?"clamp(3rem,5vw,4.5rem)":0}}>
              <V><h2 className="b" style={{fontSize:"clamp(1.4rem,2.4vw,2rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",marginBottom:"clamp(1rem,2vw,1.6rem)"}}>{cat.cat}</h2></V>
              <div style={{borderTop:`1px solid ${C.grayLight}`}}>
                {cat.items.map((it,ii)=><FaqItem key={ii} q={it.q} a={it.a}/>)}
              </div>
            </div>
          ))}
          <div style={{textAlign:"center",marginTop:"clamp(3rem,5vw,4.5rem)"}}>
            <p style={{fontSize:15,color:C.grayText,marginBottom:20}}>¿No encuentras tu respuesta?</p>
            <button onClick={()=>openContacto()} style={{display:"inline-flex",alignItems:"center",gap:9,background:C.blue,color:C.white,fontWeight:700,fontSize:14,letterSpacing:".05em",textTransform:"uppercase",padding:"14px 32px",borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit",transition:"background .2s"}}
              onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
              onMouseLeave={e=>e.currentTarget.style.background=C.blue}>Contacta con Nebego</button>
          </div>
        </div>
      </section>
    </>
  );
}

function ComoTrabajamos(){
  const fases=[
    {n:"01",t:"Análisis técnico",d:"Estudiamos las necesidades del proyecto, los planos y las condiciones de la obra para plantear una solución eléctrica segura y eficiente."},
    {n:"02",t:"Organización del trabajo",d:"Planificamos recorridos, materiales, cuadros, canalizaciones y fases de ejecución para evitar improvisaciones durante la obra."},
    {n:"03",t:"Coordinación profesional",d:"Nos integramos con constructoras, ingenierías y otros oficios para que la instalación eléctrica encaje correctamente en el desarrollo general del proyecto."},
    {n:"04",t:"Instalación eléctrica",d:"Ejecutamos los trabajos de baja tensión, media y alta tensión, telecomunicaciones o protección contra incendios con orden, precisión y criterio técnico."},
    {n:"05",t:"Control y pruebas",d:"Comprobamos conexiones, protecciones, funcionamiento y seguridad para asegurar que la instalación responde correctamente antes de su entrega."},
    {n:"06",t:"Puesta en servicio",d:"Dejamos la instalación preparada para su uso, con una ejecución fiable, limpia y adaptada a las necesidades del cliente."},
  ];
  return (
    <section style={{position:"relative",overflow:"hidden",background:C.ink,padding:"clamp(4.5rem,8vw,8rem) clamp(1rem,4vw,2.8rem)"}}>
      <div aria-hidden="true" style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)",backgroundSize:"52px 52px",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1,maxWidth:1180,margin:"0 auto"}}>
        <V>
          <div style={{textAlign:"center",marginBottom:"clamp(3rem,6vw,5rem)"}}>
            <h2 className="b" style={{fontSize:"clamp(1.9rem,3.6vw,3rem)",fontWeight:800,color:C.white,letterSpacing:"-.02em",lineHeight:1.1,marginBottom:18}}>Lo que hace un instalador eléctrico</h2>
            <p style={{fontSize:"clamp(1rem,1.5vw,1.15rem)",color:"rgba(255,255,255,.7)",lineHeight:1.7,maxWidth:640,margin:"0 auto"}}>Seis etapas que garantizan excelencia de principio a fin.</p>
          </div>
        </V>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"clamp(2.5rem,4vw,4rem) clamp(2rem,3.5vw,3.5rem)"}}>
          {fases.map((f,i)=>(
            <V key={i} d={`d${(i%3)+1}`}>
              <div style={{height:"100%"}}>
                <div className="b" style={{fontSize:"clamp(3.2rem,5vw,4.5rem)",fontWeight:800,color:"rgba(255,255,255,.1)",lineHeight:1,marginBottom:8}}>{f.n}</div>
                <h3 className="b" style={{fontSize:"clamp(1.15rem,1.8vw,1.4rem)",fontWeight:700,color:C.white,marginBottom:12,letterSpacing:"-.01em"}}>{f.t}</h3>
                <p style={{fontSize:14.5,color:"rgba(255,255,255,.62)",lineHeight:1.85}}>{f.d}</p>
              </div>
            </V>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- Sección "Ven a conocernos" (mapa + datos de contacto)
const NAVE = { lat:42.7896, lng:-1.6248 }; // Calle B, Pol. Ind. Mutilva Baja (punto aproximado de la calle)
const DIRECCION = "Pol. Ind. Mutilva Baja, Calle B, Nave 43, 31192 Mutilva (Navarra)";
const COMO_LLEGAR = "https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent("Montajes Eléctricos Nebego, Calle B 43, Polígono Industrial Mutilva Baja, 31192 Mutilva, Navarra");
// Obras en el mapa: "label" tiene que coincidir con el nombre del proyecto en PROYECTOS.
// Coordenadas de OpenStreetMap; las marcadas "aprox" están en la zona, no en el edificio exacto.
const OBRAS_MAPA = [
  {label:"Palacio de Navarra",lugar:"Pamplona",lat:42.81557,lng:-1.64242},
  {label:"Casa Seminario — Ayuntamiento de Pamplona",lugar:"Pamplona",lat:42.81800,lng:-1.64400}, // aprox
  {label:"Estadio Larrabide",lugar:"Pamplona",lat:42.80850,lng:-1.64048},
  {label:"Museo de Arte Contemporáneo — Universidad de Navarra",lugar:"Pamplona",lat:42.80322,lng:-1.65730},
  {label:"Aulario UPNA",lugar:"Pamplona",lat:42.80044,lng:-1.63665},
  {label:"Nave Districalor Txantrea",lugar:"la Txantrea (Pamplona)",lat:42.82820,lng:-1.63140}, // aprox
  {label:"Volkswagen N1C",lugar:"Landaben (Pamplona)",lat:42.81152,lng:-1.69122},
  {label:"Edificio Amigos — Universidad de Navarra",lugar:"Pamplona",lat:42.80043,lng:-1.65442},
  {label:"Hotel Muga de Beloso",lugar:"Pamplona",lat:42.82050,lng:-1.62680}, // aprox
  {label:"Quirófano Híbrido — Hospital de Navarra",lugar:"Pamplona",lat:42.80509,lng:-1.66855},
  {label:"Búnker Radiología — Hospital de Navarra",lugar:"Pamplona",lat:42.80440,lng:-1.66760},
  {label:"Pasarela Aranzadi",lugar:"Pamplona",lat:42.82430,lng:-1.63740}, // aprox
  {label:"Oficinas Hacienda — Calle Esquíroz",lugar:"Pamplona",lat:42.80702,lng:-1.64960},
  {label:"Centro de Salud de Berriozar",lugar:"Berriozar",lat:42.83495,lng:-1.67503},
  {label:"Piscinas Municipales de Villava",lugar:"Villava",lat:42.83058,lng:-1.61370}, // aprox
  {label:"Palacio Viejo de Góngora",lugar:"Góngora",lat:42.76204,lng:-1.53049},
  {label:"Centro de Día de Zubiri",lugar:"Zubiri",lat:42.93060,lng:-1.50430}, // aprox
  {label:"Ayuntamiento de Esteribar",lugar:"Zubiri (Esteribar)",lat:42.92678,lng:-1.50717},
  {label:"Centro de Interpretación de las Bardenas Reales",lugar:"Fustiñana",lat:42.02120,lng:-1.48570}, // aprox
  {label:"Casa de Cultura de Corella",lugar:"Corella",lat:42.11520,lng:-1.78940}, // aprox
  {label:"Chill Out Restaurante Marisol",lugar:"Cadreita",lat:42.21820,lng:-1.69300}, // aprox
];

function abrirObra(label){ window.__abrirObra=label; go("proyectos"); }

function MapaVisita(){
  const ref=useRef(null);
  useEffect(()=>{
    const L=window.L; const el=ref.current;
    if(!L || !el || navigator.webdriver) return; // en la generación de páginas no se carga el mapa
    if(!document.getElementById("leaflet-css")){ const s=document.createElement("style"); s.id="leaflet-css"; s.textContent=window.LEAFLET_CSS; document.head.appendChild(s); }
    const map=L.map(el,{scrollWheelZoom:false,dragging:!L.Browser.mobile,tap:false,attributionControl:true});
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'}).addTo(map);
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" target="_blank" rel="noopener">Leaflet</a>');
    const esc=t=>t.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
    const comarca=[], todas=[];
    OBRAS_MAPA.forEach(o=>{
      const m=L.circleMarker([o.lat,o.lng],{radius:8,color:"#fff",weight:2,fillColor:"#6E8BFF",fillOpacity:.95}).addTo(map);
      m.bindTooltip('<div class="nbtip"><small>Obra en '+esc(o.lugar)+'</small><b>'+esc(o.label)+'</b><em>Ver proyecto →</em></div>',{direction:"top",offset:[0,-8]});
      m.on("click",()=>abrirObra(o.label));
      todas.push([o.lat,o.lng]); if(o.lat>42.6) comarca.push([o.lat,o.lng]);
    });
    const naveIcon=L.divIcon({className:"",html:'<div class="nbpin"><span></span>Nebego</div>',iconSize:[0,0]});
    L.marker([NAVE.lat,NAVE.lng],{icon:naveIcon,zIndexOffset:1000}).addTo(map).bindTooltip("Nave y oficinas de Nebego",{direction:"top",offset:[0,-14]});
    comarca.push([NAVE.lat,NAVE.lng]); todas.push([NAVE.lat,NAVE.lng]);
    map.fitBounds(comarca,{padding:[28,28]});
    // Botones para cambiar de vista
    const Vista=L.Control.extend({onAdd(){
      const d=L.DomUtil.create("div","nbviews");
      d.innerHTML='<button type="button" data-v="c" class="on">Pamplona y comarca</button><button type="button" data-v="t">Toda Navarra</button>';
      L.DomEvent.disableClickPropagation(d);
      d.querySelectorAll("button").forEach(bt=>bt.onclick=()=>{
        d.querySelectorAll("button").forEach(x=>x.classList.toggle("on",x===bt));
        map.flyToBounds(bt.dataset.v==="c"?comarca:todas,{padding:[28,28],duration:.8});
      });
      return d;
    }});
    new Vista({position:"topright"}).addTo(map);
    return ()=>map.remove();
  },[]);
  return <div ref={ref} className="nbmap" role="img" aria-label="Mapa con la nave de Nebego en Mutilva y las obras destacadas en Navarra" style={{width:"100%",height:"100%",minHeight:380,borderRadius:8,overflow:"hidden",background:"#1d2b45"}}/>;
}

function VenAConocernos(){
  const item={borderTop:"1px solid rgba(255,255,255,.18)",padding:"20px 0 22px"};
  const lbl={fontSize:12.5,fontWeight:600,color:"rgba(255,255,255,.62)",marginBottom:8};
  const val={fontSize:"clamp(1.05rem,1.6vw,1.25rem)",fontWeight:800,color:C.white,lineHeight:1.35,marginBottom:10};
  const lnk={fontSize:14,color:C.white,textDecoration:"underline",textUnderlineOffset:3,fontWeight:500,cursor:"pointer",background:"none",border:"none",padding:0,fontFamily:"inherit"};
  return (
    <section id="visitanos" style={{background:"#1C3266",padding:"clamp(4.5rem,8vw,7rem) clamp(1rem,4vw,2.8rem)"}}>
      <div style={{maxWidth:1120,margin:"0 auto"}}>
        <V>
          <h2 className="b" style={{fontSize:"clamp(2.6rem,8vw,6.2rem)",fontWeight:800,color:C.white,textAlign:"center",letterSpacing:"-.035em",lineHeight:1,marginBottom:"clamp(1.2rem,2.5vw,1.8rem)"}}>Ven a conocernos</h2>
          <p style={{fontSize:"clamp(.98rem,1.4vw,1.08rem)",color:"rgba(255,255,255,.78)",textAlign:"center",lineHeight:1.7,maxWidth:520,margin:"0 auto clamp(2.2rem,4vw,3.2rem)"}}>Nuestra nave y oficinas están en el polígono de Mutilva Baja, junto a Pamplona. Escríbenos por WhatsApp y te atendemos.</p>
        </V>
        <V>
          <div style={{display:"grid",gridTemplateColumns:"1.45fr 1fr",gap:"clamp(1.8rem,3.5vw,2.6rem)",alignItems:"stretch"}} className="dcol">
            <div style={{minHeight:380}}><MapaVisita/></div>
            <div>
              <div style={item}>
                <div style={lbl}>Nave y oficinas</div>
                <div style={val}>Calle B, Nave 43<br/>Pol. Ind. Mutilva Baja</div>
                <a href={COMO_LLEGAR} target="_blank" rel="noopener" style={lnk}>Cómo llegar</a>
              </div>
              <div style={item}>
                <div style={lbl}>Teléfono y WhatsApp</div>
                <div style={val}>948 236 434 · {WHATSAPP_TXT}</div>
                <a href="tel:+34948236434" style={{...lnk,marginRight:18}}>Llamar</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener" style={lnk}>Escribir por WhatsApp</a>
              </div>
              <div style={{...item,borderBottom:"1px solid rgba(255,255,255,.18)"}}>
                <div style={lbl}>Obras</div>
                <div style={val}>Pincha en los puntos azules del mapa para ver cada obra</div>
                <a {...linkProps("proyectos")} style={lnk}>Ver proyectos</a>
              </div>
            </div>
          </div>
        </V>
        <div style={{textAlign:"center",marginTop:"clamp(2rem,4vw,2.8rem)"}}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" style={{display:"inline-flex",alignItems:"center",gap:10,background:C.white,color:"#1C3266",fontWeight:700,fontSize:15,padding:"15px 30px",borderRadius:4}}>
            <IcoChat size={20} color="#1C3266"/> Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- Equipo (página Nosotros). Datos sacados de sus perfiles de LinkedIn (nov. 2026)
const EQUIPO = [
  {nombre:"Iñigo Beraza", cargo:"Gerente asistente", foto:"assets/equipo-inigo.jpg",
   formacion:{t:"MBA",d:"EAE Business School · Madrid"},
   puntos:[
     "Gerente asistente de Nebego desde 2026, a cargo de la gestión administrativa",
     "Impulsa la mejora de los procesos de la empresa con inteligencia artificial",
     "Auxiliar administrativo en Nebego entre 2020 y 2022",
     "Experiencia de trabajo en Estados Unidos y con equipos internacionales",
   ], linkedin:"https://www.linkedin.com/in/i%C3%B1igoberaza/"},
  {nombre:"Mikel Beraza", cargo:"Ingeniero técnico · Gerente y fundador", foto:"assets/equipo-mikel.jpg",
   cifra:"+35", cifraTxt:"años en el sector eléctrico",
   puntos:[
     "Fundó Montajes Eléctricos Nebego en el año 2000 y la dirige desde entonces",
     "Instalaciones eléctricas de baja y media tensión, telecomunicaciones y protección contra incendios",
     "Lidera proyectos y coordina equipos para clientes públicos y privados",
     "Formación en la Universidad Pública de Navarra",
   ], linkedin:"https://www.linkedin.com/in/mikelberaza/"},
  {nombre:"Iker Beraza", cargo:"Digitalización y análisis financiero", foto:"assets/equipo-iker.jpg",
   formacion:{t:"Máster en Finanzas",d:"Barcelona Finance School"},
   puntos:[
     "Especializado en digitalizar la empresa con nuevas herramientas de inteligencia artificial",
     "Análisis financiero de Nebego para apoyar las decisiones de gestión",
     "Llevó el paso de Nebego a Microsoft 365 y la digitalización de fichajes y partes de trabajo",
     "Experiencia en contabilidad y en cuadros de mando con Power BI",
   ], linkedin:"https://www.linkedin.com/in/ikerberaza/"},
];

function Equipo(){
  return (
    <section id="equipo" style={{background:"#E9EBF0",padding:"clamp(4.5rem,8vw,7rem) clamp(1rem,4vw,2.8rem)"}}>
      <div style={{maxWidth:1180,margin:"0 auto"}}>
        <V>
          <div style={{textAlign:"center",marginBottom:"clamp(2.2rem,4.5vw,3.4rem)"}}>
            <h2 className="b" style={{fontSize:"clamp(1.9rem,3.4vw,3rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",marginBottom:14}}>Quiénes somos</h2>
            <p style={{fontSize:"clamp(1rem,1.5vw,1.12rem)",color:C.grayText,lineHeight:1.7,maxWidth:620,margin:"0 auto"}}>Una empresa familiar: las personas que están detrás de Nebego.</p>
          </div>
        </V>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(1rem,2vw,1.4rem)"}} className="eqgrid">
          {EQUIPO.map((p,i)=>(
            <V key={p.nombre} d={`d${i+1}`} style={{height:"100%"}}>
              <article style={{background:C.white,borderRadius:10,padding:"clamp(1.2rem,2vw,1.7rem)",height:"100%",display:"flex",flexDirection:"column"}}>
                <img src={p.foto} alt={p.nombre} loading="lazy" style={{width:"100%",aspectRatio:"1 / 1",objectFit:"cover",borderRadius:8,display:"block",marginBottom:16}}/>
                <div style={{fontSize:11.5,color:C.grayText,fontWeight:600,marginBottom:4}}>{p.cargo}</div>
                <h3 className="b" style={{fontSize:"clamp(1.45rem,2.2vw,1.85rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",paddingBottom:14,borderBottom:`1px solid ${C.grayLight}`}}>{p.nombre}</h3>
                {p.formacion && <div style={{padding:"16px 0",borderBottom:`1px solid ${C.grayLight}`}}>
                  <div style={{fontSize:11,fontWeight:700,letterSpacing:".1em",color:C.blue,textTransform:"uppercase",marginBottom:6}}>Formación</div>
                  <div className="b" style={{fontSize:"clamp(1.35rem,2vw,1.7rem)",fontWeight:800,color:"#1C3266",lineHeight:1.1,letterSpacing:"-.02em"}}>{p.formacion.t}</div>
                  <div style={{fontSize:13,color:C.grayText,marginTop:4}}>{p.formacion.d}</div>
                </div>}
                {p.cifra && <div style={{display:"flex",alignItems:"center",gap:14,padding:"16px 0",borderBottom:`1px solid ${C.grayLight}`}}>
                  <div className="b" style={{fontSize:"clamp(2.2rem,3.4vw,2.9rem)",fontWeight:800,color:"#1C3266",lineHeight:1,letterSpacing:"-.03em"}}>{p.cifra}</div>
                  <div style={{fontSize:12.5,color:C.grayText,lineHeight:1.45,maxWidth:170}}>{p.cifraTxt}</div>
                </div>}
                <ul style={{listStyle:"none",padding:"16px 0 0",margin:0,flex:1}}>
                  {p.puntos.map((t,k)=>(
                    <li key={k} style={{fontSize:13.5,color:C.grayDark,lineHeight:1.55,marginBottom:9,paddingLeft:14,position:"relative"}}>
                      <span style={{position:"absolute",left:0,top:9,width:5,height:5,borderRadius:"50%",background:C.blue}}/>{t}
                    </li>
                  ))}
                </ul>
                <a href={p.linkedin} target="_blank" rel="noopener" style={{marginTop:10,fontSize:13.5,fontWeight:600,color:C.blue,textDecoration:"underline",textUnderlineOffset:3,display:"inline-flex",alignItems:"center",gap:6}}>Ver su perfil en LinkedIn <IcoExt/></a>
              </article>
            </V>
          ))}
        </div>
      </div>
    </section>
  );
}

function MisionVision(){
  return (
    <section style={{background:C.white,padding:"clamp(4.5rem,8vw,7.5rem) clamp(1rem,4vw,2.8rem)"}}>
      <div style={{maxWidth:900,margin:"0 auto"}}>
        <V>
          <div style={{textAlign:"center",marginBottom:"clamp(2.5rem,5vw,3.8rem)"}}>
            <h2 className="b" style={{fontSize:"clamp(1.9rem,3.4vw,3rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",marginBottom:16}}>Misión - Visión</h2>
            <p style={{fontSize:"clamp(1rem,1.5vw,1.15rem)",color:C.grayText,lineHeight:1.7,maxWidth:620,margin:"0 auto"}}>Lo que guía nuestro trabajo, desde la planificación hasta la entrega final.</p>
          </div>
        </V>
        <V>
          <div style={{maxWidth:760,margin:"0 auto"}}>
            <p style={{fontSize:"clamp(1rem,1.5vw,1.1rem)",color:C.grayText,lineHeight:1.95,marginBottom:24}}><strong style={{color:C.ink,fontWeight:700}}>Misión:</strong> Ejecutar instalaciones eléctricas seguras, eficientes y de calidad, aportando soluciones técnicas adaptadas a cada proyecto y trabajando con orden, responsabilidad y compromiso en cada fase de la obra.</p>
            <p style={{fontSize:"clamp(1rem,1.5vw,1.1rem)",color:C.grayText,lineHeight:1.95}}><strong style={{color:C.ink,fontWeight:700}}>Visión:</strong> Consolidarnos como una empresa de referencia en el sector eléctrico, acompañando la evolución de edificios, industrias e infraestructuras hacia instalaciones más modernas, fiables y sostenibles.</p>
          </div>
        </V>
      </div>
    </section>
  );
}

function HomePage(){
  return (
    <>
      <Hero/>
      <Intro/>
      <Projects limit={5} map/>
      <CtaBanner/>
      <Pilares/>
      <NovedadesPreview/>
      <AvisosNovedades/>
      <VenAConocernos/>
    </>
  );
}

function NosotrosPage(){
  return (
    <>
      <About/>
      <MisionVision/>
      <Equipo/>
      <VenAConocernos/>
      <ComoTrabajamos/>
    </>
  );
}

function ServiciosPage(){
  return (
    <>
      <section style={{background:C.white,padding:"clamp(7rem,11vw,9rem) clamp(1rem,4vw,2.8rem) clamp(1.5rem,3vw,2.5rem)"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <h1 className="b" style={{fontSize:"clamp(2.4rem,5vw,4rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",lineHeight:1.05,marginBottom:18}}>Nuestras áreas</h1>
          <p style={{fontSize:"clamp(1rem,1.5vw,1.18rem)",color:C.grayText,lineHeight:1.7,maxWidth:660}}>Desarrollamos cada proyecto desde la planificación hasta la puesta en marcha, garantizando instalaciones seguras y eficientes.</p>
        </div>
      </section>
      <Services/>
      <Acreditaciones/>
    </>
  );
}

function ProyectosPage(){
  return (
    <>
      <section style={{background:C.white,padding:"clamp(7rem,11vw,9rem) clamp(1rem,4vw,2.8rem) clamp(1.5rem,3vw,2.5rem)"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <h1 className="b" style={{fontSize:"clamp(2.4rem,5vw,4rem)",fontWeight:800,color:C.ink,letterSpacing:"-.02em",lineHeight:1.05,marginBottom:18}}>Nuestros proyectos</h1>
          <p style={{fontSize:"clamp(1rem,1.5vw,1.18rem)",color:C.grayText,lineHeight:1.7,maxWidth:660}}>Nuestra satisfacción nace de un trabajo bien hecho.</p>
        </div>
      </section>
      <Projects map/>
      <CtaBanner/>
    </>
  );
}

function EmpleoPage(){
  return (
    <>
      <PageHero tag="Empleo" title="Envíanos tu currículum" subtitle="Si estás buscando formar parte de nuestro equipo, déjanos tu currículum en el siguiente formulario." img={IMG.empleo}/>
      <EmpleoForm/>
    </>
  );
}

function BlogPage(){
  return (
    <>
      <BlogContent/>
      <AvisosNovedades/>
      <section style={{background:C.blueLight,padding:"clamp(3.5rem,6vw,5.5rem) clamp(1rem,4vw,2.8rem)"}}>
        <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
          <h2 className="b" style={{fontSize:"clamp(1.5rem,2.8vw,2.3rem)",fontWeight:800,color:C.ink,lineHeight:1.2,marginBottom:14,letterSpacing:"-.02em"}}>¿Necesitas asesoramiento para tu instalación eléctrica?</h2>
          <p style={{fontSize:15,color:C.grayText,lineHeight:1.8,maxWidth:560,margin:"0 auto 26px"}}>Nuestro equipo puede ayudarte a estudiar tu caso y ofrecerte la solución más adecuada.</p>
          <button onClick={()=>openContacto()} style={{background:C.blue,color:C.white,fontWeight:700,fontSize:14,letterSpacing:".05em",textTransform:"uppercase",padding:"14px 32px",borderRadius:3,border:"none",cursor:"pointer",fontFamily:"inherit",transition:"background .2s"}}
            onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
            onMouseLeave={e=>e.currentTarget.style.background=C.blue}>Contacta con Nebego</button>
        </div>
      </section>
    </>
  );
}

// Rutas reales (/servicios/, /novedades/<articulo>/...). Las direcciones antiguas con "#/" se redirigen solas.
function currentRoute(){
  if(typeof window==="undefined") return "inicio";
  const h=window.location.hash||"";
  if(h.indexOf("#/")===0){ const r=h.slice(2).replace(/^\/+|\/+$/g,""); return r||"inicio"; }
  const p=window.location.pathname.replace(/index\.html$/,"").replace(/^\/+|\/+$/g,"");
  return p||"inicio";
}
function routeHref(page){ return (!page||page==="inicio")?"/":"/"+page+"/"; }

const SITE="https://www.nebego.com";
const META_DEF={
  inicio:["Montajes Eléctricos Nebego | Instalaciones eléctricas en Navarra","Empresa instaladora eléctrica en Mutilva (Navarra) desde el año 2000. Instalaciones eléctricas, telecomunicaciones, fotovoltaica, puntos de recarga y protección contra incendios."],
  nosotros:["Nosotros | Montajes Eléctricos Nebego","Empresa familiar de instalaciones eléctricas en Navarra desde el año 2000. Conoce al equipo, cómo trabajamos y nuestras acreditaciones."],
  servicios:["Servicios | Montajes Eléctricos Nebego","Instalaciones eléctricas, telecomunicaciones, energía solar fotovoltaica y puntos de recarga de vehículo eléctrico en Pamplona y Navarra."],
  proyectos:["Proyectos | Montajes Eléctricos Nebego","Obras de instalación eléctrica realizadas por Nebego en Navarra: edificios, reformas, naves, oficinas y equipamientos."],
  empleo:["Trabaja con nosotros | Montajes Eléctricos Nebego","¿Eres electricista? Envíanos tu currículum y forma parte del equipo de Nebego en Navarra."],
  blog:["Blog y preguntas frecuentes | Montajes Eléctricos Nebego","Novedades de Nebego en redes y respuestas a las dudas más habituales sobre instalaciones eléctricas, recarga de vehículo eléctrico, presupuestos y legalizaciones en Navarra."],
  faqs:["Preguntas frecuentes | Montajes Eléctricos Nebego","Respuestas a las dudas más habituales sobre presupuestos, plazos, legalizaciones y mantenimiento de instalaciones eléctricas."],
  legal:["Aviso legal, privacidad y cookies | Montajes Eléctricos Nebego","Aviso legal, política de privacidad y política de cookies de Montajes Eléctricos Nebego, S.L."],
  "servicio-electricas":["Instalaciones eléctricas en Navarra | Nebego","Instalaciones eléctricas de baja, media y alta tensión para obra nueva, reforma e industria en Pamplona y Navarra, con su legalización."],
  "servicio-telecom":["Telecomunicaciones e infraestructuras | Nebego","Instalaciones de telecomunicaciones, redes de datos y antenas para edificios, empresas y comunidades en Navarra."],
  "servicio-renovables":["Energía solar fotovoltaica y autoconsumo | Nebego","Instalaciones de placas solares y autoconsumo para viviendas, comunidades y empresas en Navarra, con su legalización y mantenimiento."],
  "servicio-recarga":["Puntos de recarga de vehículo eléctrico | Nebego","Instalación y legalización de puntos de recarga de coche eléctrico en garajes comunitarios, viviendas y empresas en Pamplona y Navarra."],
};
function routeMeta(r){
  if(r.indexOf("novedades/")===0){
    const a=ARTICULOS.find(x=>x.slug===r.slice(10));
    if(a) return [a.title+" | Nebego", a.excerpt, a.image];
  }
  const m=META_DEF[r]||META_DEF.inicio;
  return [m[0],m[1],null];
}
function setMetaTag(sel,attr,val){ const el=document.querySelector(sel); if(el) el.setAttribute(attr,val); }
function applyMeta(r){
  if(typeof document==="undefined") return;
  const [t,d,img]=routeMeta(r);
  const known=!!META_DEF[r] || (r.indexOf("novedades/")===0 && ARTICULOS.some(x=>x.slug===r.slice(10)));
  const url=SITE+routeHref(known?r:"inicio");
  document.title=t;
  setMetaTag('meta[name="description"]',"content",d);
  setMetaTag('link[rel="canonical"]',"href",url);
  setMetaTag('meta[property="og:title"]',"content",t);
  setMetaTag('meta[property="og:description"]',"content",d);
  setMetaTag('meta[property="og:url"]',"content",url);
  setMetaTag('meta[name="twitter:title"]',"content",t);
  setMetaTag('meta[name="twitter:description"]',"content",d);
  const im=SITE+"/"+(img||"assets/img17.jpg");
  setMetaTag('meta[property="og:image"]',"content",im);
  setMetaTag('meta[name="twitter:image"]',"content",im);
}

function useRoute(){
  const [r,setR]=useState(currentRoute);
  useEffect(()=>{
    const fixHash=()=>{ if((window.location.hash||"").indexOf("#/")===0) history.replaceState(null,"",routeHref(currentRoute())); };
    fixHash();
    const fn=()=>{ fixHash(); setR(currentRoute()); };
    window.addEventListener("popstate",fn);
    window.addEventListener("hashchange",fn);
    window.addEventListener("nebego:route",fn);
    return ()=>{ window.removeEventListener("popstate",fn); window.removeEventListener("hashchange",fn); window.removeEventListener("nebego:route",fn); };
  },[]);
  useEffect(()=>{ applyMeta(r); },[r]);
  return r;
}

function go(page){
  const u=routeHref(page);
  if(window.location.pathname!==u || window.location.hash) history.pushState(null,"",u);
  window.dispatchEvent(new Event("nebego:route"));
  window.scrollTo(0,0);
  // Analítica (GoatCounter, sin cookies): cuenta cada cambio de página
  try{ if(window.goatcounter && window.goatcounter.count) window.goatcounter.count({path:u}); }catch(e){}
}
// Enlace real (lo ven Google y el botón derecho del ratón) que navega sin recargar
function linkProps(page,after){
  return {href:routeHref(page),onClick:e=>{ if(e.metaKey||e.ctrlKey||e.shiftKey||e.button===1) return; e.preventDefault(); go(page); if(after) after(); }};
}

function openContacto(){ if(typeof window!=="undefined") window.dispatchEvent(new Event("nebego:contacto")); }

function ContactModal(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    const fn=()=>setOpen(true);
    window.addEventListener("nebego:contacto",fn);
    return ()=>window.removeEventListener("nebego:contacto",fn);
  },[]);
  useEffect(()=>{
    const esc=e=>{ if(e.key==="Escape") setOpen(false); };
    if(open){ document.addEventListener("keydown",esc); document.body.style.overflow="hidden"; }
    return ()=>{ document.removeEventListener("keydown",esc); document.body.style.overflow=""; };
  },[open]);
  if(!open) return null;
  return (
    <div onClick={()=>setOpen(false)} style={{position:"fixed",inset:0,zIndex:1000,background:"rgba(10,20,40,.82)",backdropFilter:"blur(6px)",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"clamp(1rem,4vw,2.5rem)",overflowY:"auto"}}>
      <div onClick={e=>e.stopPropagation()} style={{background:C.white,borderRadius:6,width:"100%",maxWidth:1080,position:"relative",boxShadow:"0 32px 80px rgba(0,0,0,.4)",margin:"auto"}}>
        <button onClick={()=>setOpen(false)} aria-label="Cerrar" style={{position:"absolute",top:16,right:16,zIndex:5,width:38,height:38,borderRadius:"50%",background:C.grayLight,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke={C.grayDark} strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <Contact/>
      </div>
    </div>
  );
}

function NebegoWeb(){
  const route=useRoute();
  const pages={inicio:HomePage,nosotros:NosotrosPage,servicios:ServiciosPage,proyectos:ProyectosPage,empleo:EmpleoPage,blog:BlogPage,legal:LegalPage,"servicio-electricas":ElectricasPage,"servicio-telecom":TelecomPage,"servicio-renovables":RenovablesPage,"servicio-recarga":RecargaPage};
  const isArt=route.indexOf("novedades/")===0;
  const Page=pages[route]||HomePage;
  return (
    <>
      <style>{FONTS}</style>
      <style>{GLOBAL}</style>
      <Nav route={isArt?"blog":route} light={route==="blog"||route==="servicios"||route==="proyectos"||route==="nosotros"}/>
      {isArt ? <ArticlePage slug={route.slice(10)}/> : <Page/>}
      <Footer/>
      <ContactModal/>
      <BarraContacto/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(NebegoWeb));

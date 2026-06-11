/* =====================================================
   Hamza El Haddad Sabri — Portfolio
   i18n ES/EN · animaciones · navegación · formulario
   ===================================================== */

/* ---------- Diccionario de traducciones ---------- */
const I18N = {
  es: {
    meta_title: "Hamza El Haddad Sabri — Ciberseguridad | Pentesting · Blue Team · Malware",
    meta_desc: "Portafolio de Hamza El Haddad Sabri, ingeniero de ciberseguridad en formación: pentesting, seguridad defensiva, análisis de malware, criptografía y HPC. Creador de ShadowScan y RedTrace.",
    nav_about: "Sobre mí", nav_skills: "Habilidades", nav_projects: "Proyectos",
    nav_journey: "Trayectoria", nav_contact: "Contacto", nav_cv: "Descargar CV",
    hero_badge: "Disponible para nuevas oportunidades",
    hero_hello: "Hola, soy",
    hero_role_prefix: "Ciberseguridad",
    roles: ["Pentesting", "Seguridad de Redes", "Análisis de Malware", "Blue Team", "Criptografía", "HPC · CUDA"],
    hero_lead: "Estudiante de Ingeniería de la Ciberseguridad en ENTI – Universitat de Barcelona. Diseño y construyo herramientas de seguridad reales — desde plataformas de pentesting hasta simuladores de movimiento lateral — cubriendo todo el ciclo ofensivo y defensivo.",
    hero_cta1: "Ver proyectos", hero_cta2: "Hablemos",
    chip_blue: "Blue Team", chip_red: "Pentesting",
    stat1: "Proyectos open source", stat2: "en Análisis y Gestión de Riesgos",
    stat3: "Idiomas (EN C1)", stat4: "Herramientas y tecnologías",
    about_eyebrow: "Sobre mí",
    about_title: "Seguridad ofensiva y defensiva,<br>con mentalidad de builder.",
    about_p1: "Soy estudiante de <strong>Ingeniería de la Ciberseguridad en ENTI – Universitat de Barcelona</strong> con un expediente sobresaliente y experiencia práctica en todo el ciclo de vida de la seguridad: reconocimiento pasivo y activo, OSINT, escaneo y enumeración de servicios, investigación y explotación de CVEs con Metasploit y técnicas manuales, y detección de intrusiones con Suricata IDS/IPS.",
    about_p2: "No me limito a la teoría: <strong>construyo mis propias herramientas</strong>. He desarrollado una plataforma unificada de pentesting (ShadowScan), un simulador de movimiento lateral basado en grafos (RedTrace) y criptoanálisis acelerado por GPU con CUDA. Practico de forma constante en TryHackMe y utilizo IA de forma avanzada para acelerar investigación, threat intelligence y revisión de código.",
    ac1_t: "Ofensiva", ac1_d: "Recon, OSINT, explotación de CVEs, Metasploit, escalada de privilegios.",
    ac2_t: "Defensiva", ac2_d: "Suricata IDS/IPS, análisis de tráfico, respuesta a incidentes, hardening.",
    ac3_t: "Builder", ac3_d: "Herramientas de seguridad propias, publicadas y documentadas en GitHub.",
    ac4_t: "IA aplicada", ac4_d: "Workflows con IA para investigación, threat intel y revisión de código.",
    skills_eyebrow: "Habilidades", skills_title: "Arsenal técnico.",
    skills_lead: "Del exploit al informe: cubro la cadena completa.",
    sk1: "Ofensiva & Pentesting", sk1_c1: "Explotación de CVEs", sk1_c2: "Escalada de privilegios",
    sk2: "Defensiva & Blue Team", sk2_c1: "Análisis de logs", sk2_c2: "Respuesta a incidentes",
    sk3: "Redes & Ataques",
    sk4: "Criptografía", sk4_c1: "Firmas digitales", sk4_c2: "Gestión de claves",
    sk5: "Programación",
    sk6: "HPC & Paralelismo", sk6_c1: "Criptoanálisis",
    sk7: "Cloud & DevSecOps", sk7_c1: "Hardening cloud",
    sk8: "Malware & GRC", sk8_c1: "Análisis estático y dinámico", sk8_c2: "Modelado de amenazas",
    sk9: "Sistemas, Datos e IA", sk9_c1: "Automatización Bash/Python", sk9_c2: "SQL avanzado", sk9_c3: "IA aplicada (Claude · ChatGPT · Copilot)",
    proj_eyebrow: "Proyectos", proj_title: "Herramientas reales,<br>código abierto.",
    proj_lead: "Todo publicado en GitHub. Sin humo.",
    proj_more: "Ver todo en GitHub →",
    pr1_s: "Simulador de movimiento lateral",
    pr1_d: "Modela redes corporativas como grafos dirigidos ponderados y usa Dijkstra para descubrir las rutas de ataque óptimas entre hosts, replicando TTPs reales de MITRE ATT&CK: escalada de privilegios, bypass de segmentación y pivoting multi-salto.",
    pr1_c1: "Teoría de grafos",
    pr2_s: "Plataforma unificada de pentesting",
    pr2_d: "Aplicación profesional con interfaz gráfica que centraliza escaneo de puertos, fingerprinting de servicios y descubrimiento de vulnerabilidades, con informes estructurados y exportables para auditorías repetibles.",
    pr3_s: "Criptoanálisis acelerado por GPU",
    pr3_d: "Cracking de contraseñas por fuerza bruta con CUDA y algoritmos paralelos optimizados con OpenMP y MPI para clústeres HPC: criptoanálisis aplicado con rendimiento de nivel GPGPU.",
    pr4_s: "Gestor de contraseñas seguro",
    pr4_d: "Cifrado AES con derivación segura de claves y defensa en profundidad: protección de clave maestra, validación de integridad y manejo seguro de credenciales en memoria.",
    pr4_c1: "Criptografía aplicada",
    pr5_s: "Sistemas distribuidos desde cero",
    pr5_d: "Implementación completa del algoritmo de consenso Raft en Go: elección de líder, heartbeats y replicación de logs tolerante a fallos. Ingeniería directamente aplicable a arquitecturas cloud-native.",
    pr5_c1: "Sistemas distribuidos",
    pr6_s: "Automatización de navegador",
    pr6_d: "Extensión de Chrome con manipulación del DOM y extracción de datos en tiempo real — habilidades directamente aplicables al análisis de vulnerabilidades web como XSS y CSRF.",
    pr6_c1: "Web scraping",
    tl_eyebrow: "Trayectoria", tl_title: "Formación y experiencia.", tl_now: "Actualidad",
    tl1_t: "Grado en Ingeniería de la Ciberseguridad",
    tl1_d: "Expediente sobresaliente: <strong>10.0 en Análisis y Gestión de Riesgos</strong>, 9.61 en Redes III, 8.91 en Gobernanza y Normativas. Criptografía avanzada, técnicas de ataque en red, análisis de malware, IA aplicada a ciberseguridad y sistemas paralelos y distribuidos.",
    tl2_t: "Grado en Ingeniería Telemática",
    tl2_d: "Base sólida en telecomunicaciones: pila TCP/IP, modelo OSI, teoría de la señal y diseño de arquitecturas de red.",
    tl3_t: "Instructor de Informática",
    tl3_d: "Formación teórica y práctica a grupos de estudiantes en fundamentos de informática, mantenimiento de hardware, configuración de redes LAN y buenas prácticas de seguridad. Soporte técnico de nivel 1 y administración de la infraestructura IT del aula.",
    tl4_t: "Bachillerato Tecnológico",
    cert1: "Práctica activa y constante: labs, retos de ciberseguridad y CTFs.",
    cert2_t: "Inglés C1 avanzado", cert2: "Además de español, catalán y árabe nativos.",
    cert3: "Udemy · 2022", cert4: "W3Schools · 2022",
    ct_eyebrow: "Contacto", ct_title: "¿Hablamos?",
    ct_lead: "Busco prácticas o una primera posición junior en ciberseguridad. Si crees que puedo aportar a tu equipo, escríbeme — respondo en menos de 24 horas.",
    ct_cv: "⬇ Descargar CV en PDF",
    f_name: "Nombre", f_name_ph: "Tu nombre", f_msg: "Mensaje",
    f_msg_ph: "Cuéntame en qué puedo ayudarte...", f_send: "Enviar mensaje",
    f_ok: "✓ ¡Mensaje enviado! Te responderé muy pronto.",
    f_err: "No se pudo enviar. Escríbeme directamente a hamzaelhaddadsabri@gmail.com",
    footer: "Diseñado y construido por mí, en Manresa"
  },
  en: {
    meta_title: "Hamza El Haddad Sabri — Cybersecurity | Pentesting · Blue Team · Malware",
    meta_desc: "Portfolio of Hamza El Haddad Sabri, cybersecurity engineering student: pentesting, defensive security, malware analysis, cryptography and HPC. Creator of ShadowScan and RedTrace.",
    nav_about: "About", nav_skills: "Skills", nav_projects: "Projects",
    nav_journey: "Journey", nav_contact: "Contact", nav_cv: "Download CV",
    hero_badge: "Open to new opportunities",
    hero_hello: "Hi, I'm",
    hero_role_prefix: "Cybersecurity",
    roles: ["Pentesting", "Network Security", "Malware Analysis", "Blue Team", "Cryptography", "HPC · CUDA"],
    hero_lead: "Cybersecurity Engineering student at ENTI – University of Barcelona. I design and build real security tools — from pentesting platforms to lateral movement simulators — covering the full offensive and defensive lifecycle.",
    hero_cta1: "View projects", hero_cta2: "Let's talk",
    chip_blue: "Blue Team", chip_red: "Pentesting",
    stat1: "Open source projects", stat2: "in Risk Analysis & Management",
    stat3: "Languages (EN C1)", stat4: "Tools & technologies",
    about_eyebrow: "About me",
    about_title: "Offensive and defensive security,<br>with a builder mindset.",
    about_p1: "I'm a <strong>Cybersecurity Engineering student at ENTI – University of Barcelona</strong> with an outstanding academic record and hands-on experience across the full security lifecycle: passive and active reconnaissance, OSINT, port scanning and service enumeration, CVE research and exploitation with Metasploit and manual techniques, and intrusion detection with Suricata IDS/IPS.",
    about_p2: "I don't stop at theory: <strong>I build my own tools</strong>. I've developed a unified pentesting platform (ShadowScan), a graph-based lateral movement simulator (RedTrace) and GPU-accelerated cryptanalysis with CUDA. I practice consistently on TryHackMe and make advanced use of AI to accelerate research, threat intelligence and code review.",
    ac1_t: "Offensive", ac1_d: "Recon, OSINT, CVE exploitation, Metasploit, privilege escalation.",
    ac2_t: "Defensive", ac2_d: "Suricata IDS/IPS, traffic analysis, incident response, hardening.",
    ac3_t: "Builder", ac3_d: "My own security tools, published and documented on GitHub.",
    ac4_t: "Applied AI", ac4_d: "AI workflows for research, threat intel and code review.",
    skills_eyebrow: "Skills", skills_title: "Technical arsenal.",
    skills_lead: "From exploit to report: I cover the whole chain.",
    sk1: "Offensive & Pentesting", sk1_c1: "CVE exploitation", sk1_c2: "Privilege escalation",
    sk2: "Defensive & Blue Team", sk2_c1: "Log analysis", sk2_c2: "Incident response",
    sk3: "Networks & Attacks",
    sk4: "Cryptography", sk4_c1: "Digital signatures", sk4_c2: "Key management",
    sk5: "Programming",
    sk6: "HPC & Parallel Computing", sk6_c1: "Cryptanalysis",
    sk7: "Cloud & DevSecOps", sk7_c1: "Cloud hardening",
    sk8: "Malware & GRC", sk8_c1: "Static & dynamic analysis", sk8_c2: "Threat modeling",
    sk9: "Systems, Data & AI", sk9_c1: "Bash/Python automation", sk9_c2: "Advanced SQL", sk9_c3: "Applied AI (Claude · ChatGPT · Copilot)",
    proj_eyebrow: "Projects", proj_title: "Real tools,<br>open source.",
    proj_lead: "Everything published on GitHub. No smoke.",
    proj_more: "See everything on GitHub →",
    pr1_s: "Lateral movement simulator",
    pr1_d: "Models enterprise networks as weighted directed graphs and uses Dijkstra to discover optimal attack routes between hosts, replicating real MITRE ATT&CK TTPs: privilege escalation, segmentation bypass and multi-hop pivoting.",
    pr1_c1: "Graph theory",
    pr2_s: "Unified pentesting platform",
    pr2_d: "Professional GUI application that centralizes port scanning, service fingerprinting and vulnerability discovery, with structured, exportable reports for repeatable audits.",
    pr3_s: "GPU-accelerated cryptanalysis",
    pr3_d: "Brute-force password cracking with CUDA plus parallel algorithms optimized with OpenMP and MPI for HPC clusters: applied cryptanalysis at GPGPU-grade performance.",
    pr4_s: "Secure password manager",
    pr4_d: "AES encryption with secure key derivation and defense in depth: master key protection, integrity validation and secure in-memory credential handling.",
    pr4_c1: "Applied cryptography",
    pr5_s: "Distributed systems from scratch",
    pr5_d: "Complete implementation of the Raft consensus algorithm in Go: leader election, heartbeats and fault-tolerant log replication. Engineering directly applicable to cloud-native architectures.",
    pr5_c1: "Distributed systems",
    pr6_s: "Browser automation",
    pr6_d: "Chrome extension with DOM manipulation and real-time data extraction — skills directly applicable to web vulnerability analysis such as XSS and CSRF.",
    pr6_c1: "Web scraping",
    tl_eyebrow: "Journey", tl_title: "Education & experience.", tl_now: "Present",
    tl1_t: "BSc in Cybersecurity Engineering",
    tl1_d: "Outstanding record: <strong>10.0 in Risk Analysis & Management</strong>, 9.61 in Networks III, 8.91 in Governance & Standards. Advanced cryptography, network attack techniques, malware analysis, AI applied to cybersecurity, and parallel & distributed systems.",
    tl2_t: "BSc in Telematics Engineering",
    tl2_d: "Solid telecom foundation: TCP/IP stack, OSI model, signal theory and network architecture design.",
    tl3_t: "Computer Science Instructor",
    tl3_d: "Theoretical and practical training for student groups in computer fundamentals, hardware maintenance, LAN configuration and security best practices. Level 1 technical support and classroom IT infrastructure administration.",
    tl4_t: "Technological Baccalaureate",
    cert1: "Active, consistent practice: labs, cybersecurity challenges and CTFs.",
    cert2_t: "Advanced English (C1)", cert2: "Plus native Spanish, Catalan and Arabic.",
    cert3: "Udemy · 2022", cert4: "W3Schools · 2022",
    ct_eyebrow: "Contact", ct_title: "Let's talk.",
    ct_lead: "I'm looking for an internship or a first junior role in cybersecurity. If you think I can add value to your team, drop me a line — I reply within 24 hours.",
    ct_cv: "⬇ Download CV (PDF)",
    f_name: "Name", f_name_ph: "Your name", f_msg: "Message",
    f_msg_ph: "Tell me how I can help...", f_send: "Send message",
    f_ok: "✓ Message sent! I'll get back to you very soon.",
    f_err: "Couldn't send. Email me directly at hamzaelhaddadsabri@gmail.com",
    footer: "Designed & built by me, in Manresa"
  }
};

let currentLang = localStorage.getItem("lang") || "es";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  const dict = I18N[lang];

  document.documentElement.lang = lang;
  document.title = dict.meta_title;
  document.querySelector('meta[name="description"]').setAttribute("content", dict.meta_desc);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.getElementById("langEs").classList.toggle("active", lang === "es");
  document.getElementById("langEn").classList.toggle("active", lang === "en");
}

document.getElementById("langEs").addEventListener("click", () => applyLang("es"));
document.getElementById("langEn").addEventListener("click", () => applyLang("en"));
applyLang(currentLang);

/* ---------- Rotador de roles en el hero ---------- */
const rotator = document.getElementById("roleRotator");
let roleIdx = 0;
setInterval(() => {
  rotator.classList.add("fade");
  setTimeout(() => {
    const roles = I18N[currentLang].roles;
    roleIdx = (roleIdx + 1) % roles.length;
    rotator.textContent = roles[roleIdx];
    rotator.classList.remove("fade");
  }, 350);
}, 2600);

/* ---------- Animaciones de entrada ---------- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 6, 4) * 60}ms`;
  observer.observe(el);
});

// Red de seguridad: si el observer no llega a dispararse, mostrar el contenido igualmente
setTimeout(() => {
  if (!document.querySelector(".reveal.visible")) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
  }
}, 1800);

/* ---------- Navbar: sombra al hacer scroll + enlace activo ---------- */
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a =>
        a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`)
      );
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => sectionObserver.observe(s));

/* ---------- Menú móvil ---------- */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

/* ---------- Formulario de contacto ---------- */
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const dict = I18N[currentLang];

  // Si aún no se ha configurado Formspree, abrimos el cliente de correo
  if (form.action.includes("TU_ID_FORMSPREE")) {
    const data = new FormData(form);
    const subject = encodeURIComponent(`Contacto desde el portfolio — ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:hamzaelhaddadsabri@gmail.com?subject=${subject}&body=${body}`;
    return;
  }

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });
    if (res.ok) {
      form.reset();
      formStatus.textContent = dict.f_ok;
      formStatus.className = "form-status ok";
    } else {
      throw new Error();
    }
  } catch {
    formStatus.textContent = dict.f_err;
    formStatus.className = "form-status err";
  }
});

/* ---------- Año del footer ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* =====================================================
   Hamza El Haddad Sabri — Portfolio v2
   i18n ES/EN · fondo animado · typing · animaciones
   ===================================================== */

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Diccionario de traducciones ---------- */
const I18N = {
  es: {
    meta_title: "Hamza El Haddad Sabri — Ciberseguridad | Pentesting · Blue Team · Threat Intel",
    meta_desc: "Portafolio de Hamza El Haddad Sabri, ingeniero de ciberseguridad en formación: pirateo ético, detección de intrusiones, análisis de malware, threat intelligence y seguridad en la nube.",
    nav_about: "Sobre mí", nav_domains: "Dominios", nav_projects: "Proyectos",
    nav_certs: "Certificaciones", nav_journey: "Trayectoria", nav_contact: "Contacto",
    nav_cv: "Descargar CV",
    hero_badge: "Disponible para nuevas oportunidades",
    hero_title: "Pienso como un atacante.<br><span class=\"grad\">Defiendo como un ingeniero.</span>",
    hero_name_sub: "— Ingeniería de la Ciberseguridad · ENTI – Universitat de Barcelona",
    hero_lead: "Formación con profundidad de máster en seguridad ofensiva y defensiva: del análisis de malware y la detección de intrusiones al pirateo ético, la inteligencia contra amenazas y la seguridad en la nube. Construyo mis propias herramientas de seguridad y las publico.",
    hero_cta1: "Ver proyectos", hero_cta2: "Descargar CV",
    stat1: "Proyectos publicados", stat2: "Dominios de seguridad",
    stat3: "Herramientas dominadas", stat4: "Idiomas (EN C1)",
    about_eyebrow: "Sobre mí",
    about_title: "Ofensiva y defensiva.<br><span class=\"grad\">Teoría y herramientas reales.</span>",
    about_p1: "Estudio <strong>Ingeniería de la Ciberseguridad en ENTI – Universitat de Barcelona</strong>, un plan de estudios con la profundidad de un máster: protección perimetral, detección de intrusiones, criptografía, análisis de malware, forense digital, pirateo ético, inteligencia contra amenazas y seguridad en la nube. He trabajado el ciclo completo de un ataque — reconocimiento, OSINT, enumeración, explotación de CVEs y movimiento lateral — y el ciclo completo de su defensa: hardening, reglas de Suricata, análisis de tráfico, correlación en SIEM y respuesta a incidentes.",
    about_p2: "Mi diferencia: <strong>no me quedo en el laboratorio</strong>. Construyo herramientas ofensivas y defensivas propias, las documento y las publico en GitHub. Practico de forma constante en TryHackMe y aplico IA de forma avanzada para acelerar investigación, threat intelligence y revisión de código.",
    ac1_t: "Ofensiva", ac1_d: "Recon, OSINT, explotación de CVEs, Metasploit, escalada de privilegios.",
    ac2_t: "Defensiva", ac2_d: "Suricata IDS/IPS, análisis de tráfico, SIEM, respuesta a incidentes.",
    ac3_t: "Builder", ac3_d: "Herramientas de seguridad propias, publicadas y documentadas en GitHub.",
    ac4_t: "IA aplicada", ac4_d: "Workflows con IA para investigación, threat intel y revisión de código.",
    dom_eyebrow: "Dominios", dom_title: "Dominios de seguridad.",
    dom_lead: "Del perímetro al endpoint, del exploit al informe de cumplimiento.",
    d1: "Protección Perimetral", d1_c1: "Doble firewall", d1_c2: "Defensa en profundidad",
    d2: "Segmentación y VLANs", d2_c1: "Dominios de broadcast", d2_c2: "Enlaces troncales",
    d3: "Ataques de Red", d3_c1: "Análisis por capa OSI",
    d4: "Detección de Intrusos", d4_c1: "Suricata · escritura y tuning de reglas",
    d5: "SIEM y Correlación", d5_c1: "Pipeline SIEM", d5_c2: "Correlación de eventos", d5_c3: "Análisis de logs", d5_c4: "Monitorización",
    d6: "VPN y Túneles Seguros", d6_c1: "Modo túnel / transporte", d6_c2: "Post-cuántica (ML-KEM)",
    d7: "Seguridad Wireless", d7_c1: "Auditoría WLAN", d7_c2: "Hardening de APs",
    d8: "Criptografía", d8_c1: "Firmas digitales", d8_c2: "Gestión de claves",
    d9: "Análisis de Malware", d9_c1: "Análisis estático y dinámico", d9_c2: "Tipología", d9_c3: "Ofuscación",
    d10: "Pirateo Ético", d10_c1: "Explotación de CVEs", d10_c2: "Escalada de privilegios",
    d11: "Threat Intelligence", d11_c1: "OSINT avanzado",
    d12: "Cloud y GRC", d12_c1: "Gestión de riesgos",
    edu_eyebrow: "Formación",
    edu_title: "Un plan de estudios con<br><span class=\"grad\">profundidad de máster.</span>",
    edu_lead: "Bloques de conocimiento cursados en Ingeniería de la Ciberseguridad (ENTI – UB).",
    e1: "Seguridad de Redes e Infraestructura", e1_c1: "Seguridad Wireless",
    e2: "Seguridad Ofensiva", e2_c1: "Pirateo ético", e2_c2: "Análisis y tipología de malware", e2_c3: "Inteligencia contra amenazas", e2_c4: "Control de acceso",
    e3: "Criptografía y Protección de Datos", e3_c1: "Criptografía aplicada", e3_c2: "Seguridad de bases de datos", e3_c3: "Ciclo de vida y protección del dato",
    e4: "Gobierno, Riesgo y Cumplimiento", e4_c1: "Análisis y gestión de riesgos", e4_c2: "Gobernanza y estándares", e4_c3: "Forense digital",
    e5: "Desarrollo Seguro", e5_c1: "Programación segura (SDLC)", e5_c2: "Desarrollo web seguro", e5_c3: "Seguridad en la nube", e5_c4: "Desarrollos innovadores",
    e6: "IA y Datos aplicados a Ciberseguridad", e6_c1: "IA aplicada a ciberseguridad", e6_c2: "Captura y seguridad de datos", e6_c3: "Automatización de análisis",
    st_eyebrow: "Stack", st_title: "Herramientas de trabajo.",
    stg1: "Análisis de red", stg2: "Ofensiva", stg3: "Defensiva",
    stg4: "Sistemas", stg5: "Lenguajes", stg6: "Cloud y datos",
    proj_eyebrow: "Proyectos",
    proj_title: "Herramientas reales,<br><span class=\"grad\">código abierto.</span>",
    proj_lead: "Todo publicado y verificable en GitHub.",
    proj_more: "Ver todo en GitHub →",
    pt_off: "Ofensiva", pt_crypto: "Criptoanálisis", pt_crypto2: "Criptografía",
    pr1_s: "Simulador de movimiento lateral",
    pr1_d: "Modela redes corporativas como grafos y descubre las rutas de ataque óptimas entre hosts, replicando TTPs reales de MITRE ATT&CK: escalada de privilegios, bypass de segmentación y pivoting multi-salto.",
    pr1_c1: "Grafos de ataque",
    pr2_s: "Plataforma unificada de pentesting",
    pr2_d: "Aplicación profesional con interfaz gráfica que centraliza escaneo de puertos, fingerprinting de servicios y descubrimiento de vulnerabilidades, con informes estructurados y exportables para auditorías repetibles.",
    pr3_t: "Password Cracking Engine", pr3_s: "Criptoanálisis acelerado por GPU",
    pr3_d: "Motor de cracking de contraseñas por fuerza bruta acelerado por GPU: demuestra en la práctica por qué las contraseñas débiles caen en segundos y cómo se dimensiona un ataque de criptoanálisis real.",
    pr3_c1: "Fuerza bruta",
    pr4_s: "Gestor de contraseñas seguro",
    pr4_d: "Cifrado AES con derivación segura de claves y defensa en profundidad: protección de clave maestra, validación de integridad y manejo seguro de credenciales en memoria.",
    pr4_c1: "Criptografía aplicada",
    pr5_t: "Cybersecurity Labs", pr5_s: "Laboratorios completos de ciberseguridad",
    pr5_d: "Colección de laboratorios reales: análisis de malware, diseño de redes seguras, seguridad de bases de datos y administración de sistemas. La práctica que respalda la teoría.",
    pr6_t: "Browser Automation Research", pr6_s: "Automatización e investigación web",
    pr6_d: "Extensión de Chrome con manipulación del DOM y extracción de datos en tiempo real: la base técnica del análisis de vulnerabilidades web como XSS y CSRF.",
    rt_eyebrow: "Ruta", rt_title: "Mi ruta de aprendizaje.",
    rt_lead: "De los fundamentos de red al threat hunting, paso a paso.",
    r1: "Fundamentos de red", r2: "Análisis de tráfico", r3: "Ataques de red",
    r4: "Detección y prevención", r5: "Criptografía", r6: "Análisis de malware", r6_p: "Estático · Dinámico",
    r7: "Pirateo ético", r8: "Threat Intelligence", r9: "Cloud y GRC",
    ce_eyebrow: "Certificaciones", ce_title: "Roadmap de certificaciones.",
    ce_lead: "Objetivos definidos, en orden. El destino: OSCP+.",
    ce1_st: "En preparación", ce1_d: "Pentesting junior 100% práctico: la primera validación oficial del camino ofensivo.",
    ce2_st: "Siguiente objetivo", ce2_d: "La base de seguridad reconocida globalmente por toda la industria.",
    ce3_st: "Objetivo intermedio", ce3_d: "Pentesting profesional sobre máquinas y escenarios de dificultad realista.",
    ce4_st: "Objetivo final", ce4_d: "El estándar de oro del pentesting ofensivo. Try Harder.",
    ce_note: "// mientras tanto: práctica continua en TryHackMe — labs, retos y CTFs",
    tl_eyebrow: "Trayectoria", tl_title: "Formación y experiencia.", tl_now: "Actualidad",
    tl1_t: "Grado en Ingeniería de la Ciberseguridad",
    tl1_d: "Criptografía avanzada, técnicas de ataque en red, análisis de malware, IA aplicada a ciberseguridad, gestión de riesgos, gobernanza y cumplimiento. Formación técnica con la profundidad de un máster especializado.",
    tl2_t: "Grado en Ingeniería Telemática",
    tl2_d: "Base sólida en telecomunicaciones: pila TCP/IP, modelo OSI, teoría de la señal y diseño de arquitecturas de red.",
    tl3_t: "Instructor de Informática",
    tl3_d: "Formación teórica y práctica a grupos de estudiantes en fundamentos de informática, redes LAN y buenas prácticas de seguridad. Soporte técnico de nivel 1 y administración de la infraestructura IT del aula.",
    tl4_t: "Bachillerato Tecnológico",
    tlx1: "Español · Catalán · Árabe nativos", tlx2: "Inglés C1 avanzado",
    rs_eyebrow: "Recursos", rs_title: "Recursos que recomiendo.",
    rs_lead: "Plataformas con las que practico y aprendo. Si estás empezando en ciberseguridad, son un buen punto de partida.",
    rs1: "Práctica general",
    rs1_1: "Rutas guiadas de ciberseguridad, ideal para empezar.",
    rs1_2: "Máquinas y retos de dificultad realista.",
    rs1_3: "El mejor recurso gratuito de seguridad web.",
    rs1_4: "Wargames para dominar Linux y la terminal.",
    rs1_5: "Práctica de analista SOC con alertas reales.",
    rs2: "Seguridad en la nube",
    rs2_1: "Retos clásicos de seguridad en AWS.",
    rs2_2: "Entornos AWS vulnerables por diseño.",
    rs2_3: "Laboratorios de seguridad cloud (AWS, Azure, GCP).",
    rs2_4: "Referencia de técnicas de pentesting cloud.",
    rs2_5: "Preparación gratuita de AZ-900, SC-900 y más.",
    rs3: "Referencia y comunidad",
    rs3_1: "Estándares y proyectos de seguridad de aplicaciones.",
    rs3_2: "Marco de tácticas y técnicas de adversarios.",
    rs3_3: "Avisos y guías del CERT nacional español.",
    rs3_4: "Calendario mundial de competiciones CTF.",
    rs3_5: "Guías de configuración segura por tecnología.",
    ct_eyebrow: "Contacto", ct_title: "¿Hablamos?",
    ct_lead: "Busco prácticas o una primera posición junior en ciberseguridad. Si crees que puedo aportar a tu equipo, escríbeme — respondo en menos de 24 horas.",
    ct_cv: "Descargar CV en PDF",
    f_name: "Nombre", f_name_ph: "Tu nombre", f_msg: "Mensaje",
    f_msg_ph: "Cuéntame en qué puedo ayudarte...", f_send: "Enviar mensaje",
    f_ok: "Mensaje enviado. Te responderé muy pronto.",
    f_err: "No se pudo enviar. Escríbeme a hamzaelhaddadsabri@gmail.com",
    ft_tag: "// cybersecurity engineering — offensive mindset, defensive discipline",
    ft_menu: "Menú", ft_res: "Recursos",
    ft_rights: "Todos los derechos reservados."
  },
  en: {
    meta_title: "Hamza El Haddad Sabri — Cybersecurity | Pentesting · Blue Team · Threat Intel",
    meta_desc: "Portfolio of Hamza El Haddad Sabri, cybersecurity engineering student: ethical hacking, intrusion detection, malware analysis, threat intelligence and cloud security.",
    nav_about: "About", nav_domains: "Domains", nav_projects: "Projects",
    nav_certs: "Certifications", nav_journey: "Journey", nav_contact: "Contact",
    nav_cv: "Download CV",
    hero_badge: "Open to new opportunities",
    hero_title: "Think like an attacker.<br><span class=\"grad\">Defend like an engineer.</span>",
    hero_name_sub: "— Cybersecurity Engineering · ENTI – University of Barcelona",
    hero_lead: "Master's-depth training in offensive and defensive security: from malware analysis and intrusion detection to ethical hacking, threat intelligence and cloud security. I build my own security tools and publish them.",
    hero_cta1: "View projects", hero_cta2: "Download CV",
    stat1: "Published projects", stat2: "Security domains",
    stat3: "Tools mastered", stat4: "Languages (EN C1)",
    about_eyebrow: "About me",
    about_title: "Offense and defense.<br><span class=\"grad\">Theory and real tools.</span>",
    about_p1: "I study <strong>Cybersecurity Engineering at ENTI – University of Barcelona</strong>, a curriculum with master's-level depth: perimeter protection, intrusion detection, cryptography, malware analysis, digital forensics, ethical hacking, threat intelligence and cloud security. I've worked the full attack lifecycle — reconnaissance, OSINT, enumeration, CVE exploitation and lateral movement — and the full defense lifecycle: hardening, Suricata rules, traffic analysis, SIEM correlation and incident response.",
    about_p2: "What sets me apart: <strong>I don't stop at the lab</strong>. I build my own offensive and defensive tools, document them and publish them on GitHub. I practice consistently on TryHackMe and make advanced use of AI to accelerate research, threat intelligence and code review.",
    ac1_t: "Offensive", ac1_d: "Recon, OSINT, CVE exploitation, Metasploit, privilege escalation.",
    ac2_t: "Defensive", ac2_d: "Suricata IDS/IPS, traffic analysis, SIEM, incident response.",
    ac3_t: "Builder", ac3_d: "My own security tools, published and documented on GitHub.",
    ac4_t: "Applied AI", ac4_d: "AI workflows for research, threat intel and code review.",
    dom_eyebrow: "Domains", dom_title: "Security domains.",
    dom_lead: "From the perimeter to the endpoint, from exploit to compliance report.",
    d1: "Perimeter Protection", d1_c1: "Dual firewall", d1_c2: "Defense in depth",
    d2: "Segmentation & VLANs", d2_c1: "Broadcast domains", d2_c2: "Trunk links",
    d3: "Network Attacks", d3_c1: "OSI-layer analysis",
    d4: "Intrusion Detection", d4_c1: "Suricata · rule writing & tuning",
    d5: "SIEM & Correlation", d5_c1: "SIEM pipeline", d5_c2: "Event correlation", d5_c3: "Log analysis", d5_c4: "Monitoring",
    d6: "VPN & Secure Tunneling", d6_c1: "Tunnel / transport mode", d6_c2: "Post-quantum (ML-KEM)",
    d7: "Wireless Security", d7_c1: "WLAN auditing", d7_c2: "AP hardening",
    d8: "Cryptography", d8_c1: "Digital signatures", d8_c2: "Key management",
    d9: "Malware Analysis", d9_c1: "Static & dynamic analysis", d9_c2: "Typology", d9_c3: "Obfuscation",
    d10: "Ethical Hacking", d10_c1: "CVE exploitation", d10_c2: "Privilege escalation",
    d11: "Threat Intelligence", d11_c1: "Advanced OSINT",
    d12: "Cloud & GRC", d12_c1: "Risk management",
    edu_eyebrow: "Education",
    edu_title: "A curriculum with<br><span class=\"grad\">master's-level depth.</span>",
    edu_lead: "Knowledge blocks covered in Cybersecurity Engineering (ENTI – UB).",
    e1: "Network & Infrastructure Security", e1_c1: "Wireless Security",
    e2: "Offensive Security", e2_c1: "Ethical hacking", e2_c2: "Malware analysis & typology", e2_c3: "Threat intelligence", e2_c4: "Access control",
    e3: "Cryptography & Data Protection", e3_c1: "Applied cryptography", e3_c2: "Database security", e3_c3: "Data lifecycle & protection",
    e4: "Governance, Risk & Compliance", e4_c1: "Risk analysis & management", e4_c2: "Governance & standards", e4_c3: "Digital forensics",
    e5: "Secure Development", e5_c1: "Secure programming (SDLC)", e5_c2: "Secure web development", e5_c3: "Cloud security", e5_c4: "Innovative developments",
    e6: "AI & Data applied to Cybersecurity", e6_c1: "AI applied to cybersecurity", e6_c2: "Data capture & security", e6_c3: "Analysis automation",
    st_eyebrow: "Stack", st_title: "Working tools.",
    stg1: "Network analysis", stg2: "Offensive", stg3: "Defensive",
    stg4: "Systems", stg5: "Languages", stg6: "Cloud & data",
    proj_eyebrow: "Projects",
    proj_title: "Real tools,<br><span class=\"grad\">open source.</span>",
    proj_lead: "Everything published and verifiable on GitHub.",
    proj_more: "See everything on GitHub →",
    pt_off: "Offensive", pt_crypto: "Cryptanalysis", pt_crypto2: "Cryptography",
    pr1_s: "Lateral movement simulator",
    pr1_d: "Models enterprise networks as graphs and discovers optimal attack routes between hosts, replicating real MITRE ATT&CK TTPs: privilege escalation, segmentation bypass and multi-hop pivoting.",
    pr1_c1: "Attack graphs",
    pr2_s: "Unified pentesting platform",
    pr2_d: "Professional GUI application that centralizes port scanning, service fingerprinting and vulnerability discovery, with structured, exportable reports for repeatable audits.",
    pr3_t: "Password Cracking Engine", pr3_s: "GPU-accelerated cryptanalysis",
    pr3_d: "GPU-accelerated brute-force password cracking engine: a hands-on demonstration of why weak passwords fall in seconds and how a real cryptanalysis attack is scaled.",
    pr3_c1: "Brute force",
    pr4_s: "Secure password manager",
    pr4_d: "AES encryption with secure key derivation and defense in depth: master key protection, integrity validation and secure in-memory credential handling.",
    pr4_c1: "Applied cryptography",
    pr5_t: "Cybersecurity Labs", pr5_s: "Complete cybersecurity laboratories",
    pr5_d: "A collection of real labs: malware analysis, secure network design, database security and systems administration. The practice behind the theory.",
    pr6_t: "Browser Automation Research", pr6_s: "Web automation & research",
    pr6_d: "Chrome extension with DOM manipulation and real-time data extraction: the technical foundation of web vulnerability analysis such as XSS and CSRF.",
    rt_eyebrow: "Route", rt_title: "My learning route.",
    rt_lead: "From network fundamentals to threat hunting, step by step.",
    r1: "Network fundamentals", r2: "Traffic analysis", r3: "Network attacks",
    r4: "Detection & prevention", r5: "Cryptography", r6: "Malware analysis", r6_p: "Static · Dynamic",
    r7: "Ethical hacking", r8: "Threat Intelligence", r9: "Cloud & GRC",
    ce_eyebrow: "Certifications", ce_title: "Certification roadmap.",
    ce_lead: "Defined goals, in order. The destination: OSCP+.",
    ce1_st: "In preparation", ce1_d: "100% hands-on junior pentesting: the first official validation of the offensive path.",
    ce2_st: "Next goal", ce2_d: "The security baseline recognized globally across the industry.",
    ce3_st: "Intermediate goal", ce3_d: "Professional pentesting on machines and scenarios of realistic difficulty.",
    ce4_st: "Final goal", ce4_d: "The gold standard of offensive pentesting. Try Harder.",
    ce_note: "// meanwhile: continuous practice on TryHackMe — labs, challenges & CTFs",
    tl_eyebrow: "Journey", tl_title: "Education & experience.", tl_now: "Present",
    tl1_t: "BSc in Cybersecurity Engineering",
    tl1_d: "Advanced cryptography, network attack techniques, malware analysis, AI applied to cybersecurity, risk management, governance and compliance. Technical training with the depth of a specialized master's degree.",
    tl2_t: "BSc in Telematics Engineering",
    tl2_d: "Solid telecom foundation: TCP/IP stack, OSI model, signal theory and network architecture design.",
    tl3_t: "Computer Science Instructor",
    tl3_d: "Theoretical and practical training for student groups in computer fundamentals, LAN networks and security best practices. Level 1 technical support and classroom IT infrastructure administration.",
    tl4_t: "Technological Baccalaureate",
    tlx1: "Native Spanish · Catalan · Arabic", tlx2: "Advanced English (C1)",
    rs_eyebrow: "Resources", rs_title: "Resources I recommend.",
    rs_lead: "Platforms I practice and learn with. If you're starting out in cybersecurity, they're a great starting point.",
    rs1: "General practice",
    rs1_1: "Guided cybersecurity paths, ideal to get started.",
    rs1_2: "Machines and challenges of realistic difficulty.",
    rs1_3: "The best free web security resource.",
    rs1_4: "Wargames to master Linux and the terminal.",
    rs1_5: "SOC analyst practice with real alerts.",
    rs2: "Cloud security",
    rs2_1: "Classic AWS security challenges.",
    rs2_2: "AWS environments vulnerable by design.",
    rs2_3: "Cloud security labs (AWS, Azure, GCP).",
    rs2_4: "Reference for cloud pentesting techniques.",
    rs2_5: "Free prep for AZ-900, SC-900 and more.",
    rs3: "Reference & community",
    rs3_1: "Application security standards and projects.",
    rs3_2: "Adversary tactics and techniques framework.",
    rs3_3: "Advisories and guides from Spain's national CERT.",
    rs3_4: "Worldwide CTF competition calendar.",
    rs3_5: "Secure configuration guides per technology.",
    ct_eyebrow: "Contact", ct_title: "Let's talk.",
    ct_lead: "I'm looking for an internship or a first junior role in cybersecurity. If you think I can add value to your team, drop me a line — I reply within 24 hours.",
    ct_cv: "Download CV (PDF)",
    f_name: "Name", f_name_ph: "Your name", f_msg: "Message",
    f_msg_ph: "Tell me how I can help...", f_send: "Send message",
    f_ok: "Message sent. I'll get back to you very soon.",
    f_err: "Couldn't send. Email me at hamzaelhaddadsabri@gmail.com",
    ft_tag: "// cybersecurity engineering — offensive mindset, defensive discipline",
    ft_menu: "Menu", ft_res: "Resources",
    ft_rights: "All rights reserved."
  }
};

let currentLang = localStorage.getItem("lang") || "es";

/* ---------- Animación de títulos palabra a palabra ---------- */
function splitTitle(el) {
  const wrapWords = node => {
    [...node.childNodes].forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach(part => {
          if (/^\s+$/.test(part) || part === "") {
            frag.appendChild(document.createTextNode(part));
          } else {
            const w = document.createElement("span");
            w.className = "w";
            w.textContent = part;
            frag.appendChild(w);
          }
        });
        node.replaceChild(frag, child);
      } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== "BR") {
        wrapWords(child);
      }
    });
  };
  wrapWords(el);
  el.querySelectorAll(".w").forEach((w, i) => {
    w.style.transitionDelay = `${i * 55}ms`;
  });
}

function initTitles() {
  document.querySelectorAll(".t-anim").forEach(el => {
    el.classList.remove("in");
    splitTitle(el);
    // si ya está en pantalla, animar ya; si no, esperar al observer
    if (el.getBoundingClientRect().top < innerHeight * 0.92) {
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("in")));
    } else {
      titleObserver.observe(el);
    }
  });
}

const titleObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      titleObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

/* ---------- i18n ---------- */
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

  initTitles();
}

document.getElementById("langEs").addEventListener("click", () => applyLang("es"));
document.getElementById("langEn").addEventListener("click", () => applyLang("en"));

/* ---------- Efecto de escritura (terminal) ---------- */
const ROLES = ["pentester", "network-defender", "malware-analyst", "threat-hunter", "security-engineer"];
const typedEl = document.getElementById("typed");

if (REDUCED) {
  typedEl.textContent = ROLES[0];
} else {
  let roleI = 0, charI = 0, deleting = false;
  (function type() {
    const word = ROLES[roleI];
    typedEl.textContent = word.slice(0, charI);
    let delay;
    if (!deleting) {
      charI++;
      delay = 70 + Math.random() * 60;
      if (charI > word.length) { deleting = true; delay = 1700; }
    } else {
      charI--;
      delay = 38;
      if (charI === 0) { deleting = false; roleI = (roleI + 1) % ROLES.length; delay = 350; }
    }
    setTimeout(type, delay);
  })();
}

/* ---------- Fondo: red de partículas ---------- */
const canvas = document.getElementById("netCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  const target = Math.min(90, Math.floor((innerWidth * innerHeight) / 22000));
  while (particles.length < target) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: 1 + Math.random() * 1.4
    });
  }
  particles.length = target;
}

function drawNet() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const LINK = 130;
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x += p.vx; p.y += p.vy;
    if (p.x < -20) p.x = canvas.width + 20; else if (p.x > canvas.width + 20) p.x = -20;
    if (p.y < -20) p.y = canvas.height + 20; else if (p.y > canvas.height + 20) p.y = -20;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(108, 178, 58, 0.35)";
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dx = p.x - q.x, dy = p.y - q.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < LINK * LINK) {
        const a = (1 - Math.sqrt(d2) / LINK) * 0.14;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(108, 178, 58, ${a})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawNet);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
if (REDUCED) {
  // una sola pasada estática, sin animación
  const once = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(108, 178, 58, 0.25)";
      ctx.fill();
    });
  };
  once();
  window.addEventListener("resize", once);
} else {
  drawNet();
}

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

// Red de seguridad: si el observer no se dispara, mostrar el contenido
setTimeout(() => {
  if (!document.querySelector(".reveal.visible")) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
    document.querySelectorAll(".t-anim").forEach(el => el.classList.add("in"));
  }
}, 1800);

/* ---------- Contadores animados ---------- */
const statsBox = document.getElementById("statsBox");
let counted = false;
function runCounters() {
  if (counted) return;
  counted = true;
  document.querySelectorAll(".count").forEach(el => {
    const target = parseInt(el.dataset.n, 10);
    if (REDUCED) { el.textContent = target; return; }
    const dur = 1300;
    const start = performance.now();
    (function tick(now) {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * ease);
      if (t < 1) requestAnimationFrame(tick);
    })(start);
  });
}
const statsObserver = new IntersectionObserver(entries => {
  if (entries.some(e => e.isIntersecting)) {
    runCounters();
    statsObserver.disconnect();
  }
}, { threshold: 0.4 });
statsObserver.observe(statsBox);
// Red de seguridad: si la animación no llegó a ejecutarse, fijar los valores finales
setTimeout(() => {
  document.querySelectorAll(".count").forEach(el => {
    if (el.textContent === "0") el.textContent = el.dataset.n;
  });
  counted = true;
}, 4000);

/* ---------- Navbar ---------- */
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

/* ---------- Arranque ---------- */
applyLang(currentLang);

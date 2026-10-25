// Datos del CV. Para agregar contenido nuevo (proyectos, logros, cursos), añade un objeto
// a la lista correspondiente en AMBOS idiomas (es y en).
window.PORTFOLIO = {
  name: "Edwin David Cruz Perez",
  monogram: "EC", // editable: iniciales o símbolo
  cv: "cv.pdf",
  links: [
    { label: "GitHub", url: "https://github.com/Ew-p" },
    { label: "Email", url: "mailto:cruzpeedwin@gmail.com" }
  ],
  // ===== CONSTANCIAS =====
  // Cada constancia necesita su PDF y una imagen de vista previa (JPG) en la raíz del repo.
  // Para agregar otra: quita los // del bloque de plantilla, cambia los datos y sube los 2 archivos.
  certificates: [
    {
      file: "constancia-2024-microservicios.pdf", img: "constancia-2024-microservicios.jpg",
      date: "2024-11-14", hours: 4,
      es: { role: "Asistente", title: "Introducción a la arquitectura de microservicios: Spring Boot + PL/SQL + Feign + Docker", issuer: "UATx · Seminario de Ingeniería en Computación 2024" },
      en: { role: "Attendee", title: "Introduction to microservices architecture: Spring Boot + PL/SQL + Feign + Docker", issuer: "UATx · Computer Engineering Seminar 2024" }
    },
    {
      file: "constancia-2023-huawei-cloud.pdf", img: "constancia-2023-huawei-cloud.jpg",
      date: "2023-11-14", hours: 4,
      es: { role: "Participante", title: "Infraestructura y funciones informáticas Huawei Cloud Developer", issuer: "UATx · Seminario de Ingeniería en Computación 2023" },
      en: { role: "Participant", title: "Huawei Cloud Developer: infrastructure and IT functions", issuer: "UATx · Computer Engineering Seminar 2023" }
    },
    // ---- PLANTILLA: descomenta y completa para agregar una constancia nueva ----
    // {
    //   file: "constancia-AAAA-nombre.pdf", img: "constancia-AAAA-nombre.jpg",
    //   date: "AAAA-MM-DD", hours: 0,
    //   es: { role: "Participante", title: "Título en español", issuer: "Institución · Evento" },
    //   en: { role: "Participant", title: "Title in English", issuer: "Institution · Event" }
    // },
  ],
  es: {
    ui: { start: "Presiona inicio", skip: "Omitir", menu: "Menú principal", back: "← Menú", sound: "Sonido", switchLang: "Cambiar a inglés", cv: "Descargar CV (PDF)", pick: "Selecciona un proyecto", tech: "Tecnologías", links: "Enlaces", noLinks: "Enlaces próximamente.", external: "(abre en otra pestaña)", hint: "↑ ↓ mover · Enter elegir · Esc volver · o toca una opción", cvMissing: "Aún no se ha subido cv.pdf al sitio.", interests: "Intereses", solving: "Cómo resuelvo problemas", problem: "Problema", approach: "Enfoque", status: "Estado", equip: "Seleccionado", home: "Inicio", certs: "Constancias", openPdf: "Abrir PDF", certAlt: "Vista previa de la constancia" },
    tagline: "Ingeniería en Computación: ciencia de datos, IA y ciberseguridad",
    sections: { profile: "Perfil", projects: "Proyectos", skills: "Habilidades", education: "Formación y logros", contact: "Contacto" },
    profile: "Estudiante de séptimo semestre de Ingeniería en Computación con promedio de 9.0 y enfoque en ciencia de datos, inteligencia artificial y ciberseguridad. Experiencia en modelado de requerimientos, aplicaciones de escritorio con Java y JavaFX, clasificadores de visión por computadora y concursos de ciencia de datos. Con interés en contribuir al desarrollo de la industria tecnológica en México.",
    location: "Apizaco, Tlaxcala, México",
    interests: ["Ciencia de datos", "Inteligencia artificial", "Ciberseguridad"],
    solving: "[[Escribe aquí tu enfoque personal para resolver problemas]]",
    certs: "[[Certificaciones, constancias y reconocimientos: por agregar]]",
    moreContact: "[[Otros medios (LinkedIn, etc.): por agregar]]",
    projects: [
      { name: "Tesis: análisis de amenazas (CTI) con MITRE ATT&CK", status: "En desarrollo · equipo", problem: "Los reportes de incidentes llegan como texto no estructurado y analizarlos a mano consume tiempo.", tech: ["LLM local", "MITRE ATT&CK", "STIX/JSON", "SIEM/SOAR"], desc: ["Pipeline con un LLM de código abierto ejecutado localmente que extrae técnicas y tácticas de reportes de incidentes en texto no estructurado y las mapea a MITRE ATT&CK.", "Salida estructurada en STIX/JSON, lista para integrarse a sistemas SIEM/SOAR."], links: [] },
      { name: "Clasificadores de visión por computadora", status: "Python", problem: "Reconocer automáticamente escenas naturales (bosque o playa) a partir de sus características de color.", tech: ["Python", "HSV", "MLP"], desc: ["Clasificador de imágenes (bosque y playa) con análisis de color HSV y perceptrón multicapa (MLP)."], links: [] },
      { name: "Aplicaciones de uso local con Java y JavaFX", status: "Escritorio", problem: "Construir aplicaciones de escritorio de uso local a partir de requerimientos bien modelados.", tech: ["Java", "JavaFX", "PlantUML"], desc: ["Modelado de requerimientos y diseño con PlantUML; construcción de aplicaciones de escritorio de uso local."], links: [] },
      { name: "Piper Studio: texto a voz", status: "Python", problem: "Generar voz sintética a partir de voces de referencia, de forma controlada y con salvaguardas éticas.", tech: ["Python", "Chatterbox Multilingual"], desc: ["Aplicación de escritorio de síntesis de voz con clonación zero-shot, biblioteca de voces de referencia con interfaz gráfica y salvaguardas éticas."], links: [] }
    ],
    skills: [
      { g: "Lenguajes", i: ["Python", "MATLAB", "Java", "C", "C++"] },
      { g: "Datos e IA", i: ["Ciencia de datos", "Perceptrón multicapa (MLP)", "Visión por computadora", "Procesamiento de texto"] },
      { g: "Ciberseguridad", i: ["MITRE ATT&CK", "Inteligencia de amenazas (CTI)", "STIX/JSON"] },
      { g: "Herramientas", i: ["Linux", "PlantUML", "Figma", "HTML y CSS", "Git y GitHub"] },
      { g: "Idiomas", i: ["Español: nativo", "Inglés: B1"] }
    ],
    education: [
      { h: "Ingeniería en Computación", s: "Universidad Autónoma de Tlaxcala (UATx) · en curso, 7.º semestre, promedio 9.0", p: ["Cursos relevantes: aprendizaje automático y redes neuronales, Big Data, ciberseguridad y recuperación de información."] },
      { h: "Reto AgroCebada 2026, FIRA", s: "Concurso nacional de ciencia de datos", p: ["Estimación del rendimiento de parcelas de cebada en Hidalgo, Tlaxcala y Puebla con índices de vegetación, precipitación y temperatura (percepción remota).", "Entregables: modelo predictivo, reporte técnico y aplicación web o dashboard."] },
      { h: "Ciencia de datos: trabajos académicos", s: "Python y MATLAB", p: ["Análisis de datos y aprendizaje automático en proyectos y tareas de la carrera."] }
    ]
  },
  en: {
    ui: { start: "Press start", skip: "Skip", menu: "Main menu", back: "← Menu", sound: "Sound", switchLang: "Switch to Spanish", cv: "Download CV (PDF)", pick: "Select a project", tech: "Technologies", links: "Links", noLinks: "Links coming soon.", external: "(opens in a new tab)", hint: "↑ ↓ move · Enter select · Esc back · or tap an option", cvMissing: "cv.pdf has not been uploaded to the site yet.", interests: "Interests", solving: "How I solve problems", problem: "Problem", approach: "Approach", status: "Status", equip: "Selected", home: "Home", certs: "Certificates", openPdf: "Open PDF", certAlt: "Preview of certificate" },
    tagline: "Computer Engineering: data science, AI and cybersecurity",
    sections: { profile: "Profile", projects: "Projects", skills: "Skills", education: "Education & achievements", contact: "Contact" },
    profile: "Seventh-semester Computer Engineering student with a 9.0 GPA, focused on data science, artificial intelligence and cybersecurity. Experience in requirements modeling, Java/JavaFX desktop applications, computer vision classifiers and data science competitions. Interested in contributing to the growth of the technology industry in Mexico.",
    location: "Apizaco, Tlaxcala, Mexico",
    interests: ["Data science", "Artificial intelligence", "Cybersecurity"],
    solving: "[[Write your personal approach to problem-solving here]]",
    certs: "[[Certifications, certificates and awards: to be added]]",
    moreContact: "[[Other channels (LinkedIn, etc.): to be added]]",
    projects: [
      { name: "Thesis: threat analysis (CTI) with MITRE ATT&CK", status: "In progress · team", problem: "Incident reports arrive as unstructured text and analyzing them by hand takes time.", tech: ["Local LLM", "MITRE ATT&CK", "STIX/JSON", "SIEM/SOAR"], desc: ["Pipeline using a locally run open-source LLM that extracts techniques and tactics from unstructured incident reports and maps them to MITRE ATT&CK.", "Structured STIX/JSON output, ready to plug into SIEM/SOAR systems."], links: [] },
      { name: "Computer vision classifiers", status: "Python", problem: "Automatically recognizing natural scenes (forest or beach) from their color features.", tech: ["Python", "HSV", "MLP"], desc: ["Image classifier (forest vs. beach) using HSV color analysis and a multilayer perceptron (MLP)."], links: [] },
      { name: "Local desktop apps with Java and JavaFX", status: "Desktop", problem: "Building locally run desktop applications from well-modeled requirements.", tech: ["Java", "JavaFX", "PlantUML"], desc: ["Requirements modeling and design with PlantUML; building locally run desktop applications."], links: [] },
      { name: "Piper Studio: text-to-speech", status: "Python", problem: "Generating synthetic speech from reference voices in a controlled way, with ethical safeguards.", tech: ["Python", "Chatterbox Multilingual"], desc: ["Desktop speech synthesis app with zero-shot voice cloning, a GUI reference-voice library and ethical safeguards."], links: [] }
    ],
    skills: [
      { g: "Languages", i: ["Python", "MATLAB", "Java", "C", "C++"] },
      { g: "Data & AI", i: ["Data science", "Multilayer perceptron (MLP)", "Computer vision", "Text processing"] },
      { g: "Cybersecurity", i: ["MITRE ATT&CK", "Cyber threat intelligence (CTI)", "STIX/JSON"] },
      { g: "Tools", i: ["Linux", "PlantUML", "Figma", "HTML & CSS", "Git & GitHub"] },
      { g: "Languages spoken", i: ["Spanish: native", "English: B1"] }
    ],
    education: [
      { h: "B.Eng. in Computer Engineering", s: "Universidad Autónoma de Tlaxcala (UATx) · in progress, 7th semester, GPA 9.0", p: ["Relevant courses: machine learning and neural networks, Big Data, cybersecurity and information retrieval."] },
      { h: "AgroCebada Challenge 2026, FIRA", s: "National data science competition", p: ["Estimating barley plot yield in Hidalgo, Tlaxcala and Puebla using vegetation indices, rainfall and temperature (remote sensing).", "Deliverables: predictive model, technical report and web app or dashboard."] },
      { h: "Data science: academic work", s: "Python and MATLAB", p: ["Data analysis and machine learning in coursework and projects."] }
    ]
  }
};

// Datos del CV. Para agregar contenido nuevo (proyectos, logros, cursos), añade un objeto
// a la lista correspondiente en AMBOS idiomas (es y en).
window.PORTFOLIO = {
  name: "Edwin David Cruz Perez",
  cv: "cv.pdf",
  links: [
    { label: "GitHub", url: "https://github.com/Ew-p" },
    { label: "Email", url: "mailto:cruzpeedwin@gmail.com" }
  ],
  es: {
    ui: { start: "Presiona inicio", skip: "Omitir", menu: "Menú principal", back: "← Menú", sound: "Sonido", switchLang: "Cambiar a inglés", cv: "Descargar CV (PDF)", pick: "Selecciona un proyecto", tech: "Tecnologías", links: "Enlaces", noLinks: "Enlaces próximamente.", external: "(abre en otra pestaña)" },
    tagline: "Ingeniería en Computación: ciencia de datos, IA y ciberseguridad",
    sections: { profile: "Perfil", projects: "Proyectos", skills: "Habilidades", education: "Formación y logros", contact: "Contacto" },
    profile: "Estudiante de séptimo semestre de Ingeniería en Computación con promedio de 9.0 y enfoque en ciencia de datos, inteligencia artificial y ciberseguridad. Experiencia en modelado de requerimientos, aplicaciones de escritorio con Java y JavaFX, clasificadores de visión por computadora y concursos de ciencia de datos. Con interés en contribuir al desarrollo de la industria tecnológica en México.",
    location: "Apizaco, Tlaxcala, México",
    projects: [
      { name: "Tesis: análisis de amenazas (CTI) con MITRE ATT&CK", status: "En desarrollo · equipo", tech: ["LLM local", "MITRE ATT&CK", "STIX/JSON", "SIEM/SOAR"], desc: ["Pipeline con un LLM de código abierto ejecutado localmente que extrae técnicas y tácticas de reportes de incidentes en texto no estructurado y las mapea a MITRE ATT&CK.", "Salida estructurada en STIX/JSON, lista para integrarse a sistemas SIEM/SOAR."], links: [] },
      { name: "Clasificadores de visión por computadora", status: "Python", tech: ["Python", "HSV", "MLP"], desc: ["Clasificador de imágenes (bosque y playa) con análisis de color HSV y perceptrón multicapa (MLP)."], links: [] },
      { name: "Aplicaciones de uso local con Java y JavaFX", status: "Escritorio", tech: ["Java", "JavaFX", "PlantUML"], desc: ["Modelado de requerimientos y diseño con PlantUML; construcción de aplicaciones de escritorio de uso local."], links: [] },
      { name: "Piper Studio: texto a voz", status: "Python", tech: ["Python", "Chatterbox Multilingual"], desc: ["Aplicación de escritorio de síntesis de voz con clonación zero-shot, biblioteca de voces de referencia con interfaz gráfica y salvaguardas éticas."], links: [] }
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
    ui: { start: "Press start", skip: "Skip", menu: "Main menu", back: "← Menu", sound: "Sound", switchLang: "Switch to Spanish", cv: "Download CV (PDF)", pick: "Select a project", tech: "Technologies", links: "Links", noLinks: "Links coming soon.", external: "(opens in a new tab)" },
    tagline: "Computer Engineering: data science, AI and cybersecurity",
    sections: { profile: "Profile", projects: "Projects", skills: "Skills", education: "Education & achievements", contact: "Contact" },
    profile: "Seventh-semester Computer Engineering student with a 9.0 GPA, focused on data science, artificial intelligence and cybersecurity. Experience in requirements modeling, Java/JavaFX desktop applications, computer vision classifiers and data science competitions. Interested in contributing to the growth of the technology industry in Mexico.",
    location: "Apizaco, Tlaxcala, Mexico",
    projects: [
      { name: "Thesis: threat analysis (CTI) with MITRE ATT&CK", status: "In progress · team", tech: ["Local LLM", "MITRE ATT&CK", "STIX/JSON", "SIEM/SOAR"], desc: ["Pipeline using a locally run open-source LLM that extracts techniques and tactics from unstructured incident reports and maps them to MITRE ATT&CK.", "Structured STIX/JSON output, ready to plug into SIEM/SOAR systems."], links: [] },
      { name: "Computer vision classifiers", status: "Python", tech: ["Python", "HSV", "MLP"], desc: ["Image classifier (forest vs. beach) using HSV color analysis and a multilayer perceptron (MLP)."], links: [] },
      { name: "Local desktop apps with Java and JavaFX", status: "Desktop", tech: ["Java", "JavaFX", "PlantUML"], desc: ["Requirements modeling and design with PlantUML; building locally run desktop applications."], links: [] },
      { name: "Piper Studio: text-to-speech", status: "Python", tech: ["Python", "Chatterbox Multilingual"], desc: ["Desktop speech synthesis app with zero-shot voice cloning, a GUI reference-voice library and ethical safeguards."], links: [] }
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

"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

export const t = {
  es: {
    nav: {
      classes: "Clases", about: "Nosotros", schedule: "Horarios", pricing: "Precios", contact: "Contacto", enroll: "Matricúlate",
    },
    hero: {
      badge: "Academia de Baile",
      sub: "Donde el ritmo se convierte en arte. Aprende a bailar con los mejores instructores y descubre tu potencial en la pista.",
      cta1: "Explorar Clases", cta2: "Matricúlate Gratis",
      stats: [
        { value: "255", label: "Alumnos activos" },
        { value: "10+", label: "Años de experiencia" },
        { value: "7",   label: "Estilos de baile" },
      ],
      scroll: "Scroll",
    },
    about: {
      tag: "◈ Quiénes Somos ◈",
      title1: "Más que clases,", title2: "una pasión",
      p1: "Sky Dance nació con un sueño: hacer que cada persona pueda expresarse a través del baile sin importar su nivel. Hoy somos la academia más reconocida de la región.",
      p2: "Nuestros instructores han competido en torneos nacionales e internacionales y traen ese nivel de excelencia a cada clase, adaptándolo para que sea accesible, divertido y transformador.",
      bullets: ["Clases personalizadas para tu nivel", "Ambiente profesional y acogedor", "Certificados oficiales de nivel", "Clase de prueba gratuita"],
      cta: "Reserva tu clase gratis →",
      stats: ["Estudiantes formados", "Años de experiencia", "Instructores certificados", "Estilos de baile"],
    },
    classes: {
      tag: "◈ Nuestros Estilos ◈",
      title1: "Elige tu", title2: "ritmo",
      sub: "Siete estilos únicos, un solo propósito: que te enamores del baile.",
      items: [
        { name: "Salsa",        level: "Todos los niveles",       desc: "El ritmo del Caribe en cada paso. Aprende la salsa con técnica, sabor y mucha energía.",                           tag: "POPULAR"  },
        { name: "Hip Hop",      level: "Todos los niveles",       desc: "Expresión libre con coreografías urbanas. Cultura, música y movimiento auténtico.",                                 tag: "URBANO"   },
        { name: "Ballet",       level: "Principiante · Avanzado", desc: "La base de toda danza. Técnica, elegancia y disciplina en su máxima expresión.",                                   tag: "CLÁSICO"  },
        { name: "Tap",          level: "Todos los niveles",       desc: "Ritmo con los pies. Un estilo único donde tu cuerpo se convierte en instrumento musical.",                          tag: "RITMO"    },
        { name: "Bachata",      level: "Todos los niveles",       desc: "La sensualidad dominicana en cada movimiento. Ideal para parejas y solistas.",                                      tag: "PAREJAS"  },
        { name: "Music Teatro", level: "Todos los niveles",       desc: "Danza, canto y actuación en perfecta armonía. El arte escénico en su versión más completa.",                       tag: "ESCÉNICO" },
        { name: "Puntas",       level: "Intermedio · Avanzado",   desc: "La cima del ballet clásico. Técnica de pointe con disciplina, fuerza y elegancia.",                                tag: "AVANZADO" },
        { name: "Y más...",     level: "Consulta disponibilidad", desc: "Contamos con más estilos y clases especiales. ¡Contáctanos para conocer toda nuestra oferta!",                     tag: "ESPECIAL" },
      ],
    },
    schedule: {
      tag: "◈ Horarios ◈",
      title1: "Tu semana en", title2: "movimiento",
      sub: "Selecciona tu localidad para ver los horarios disponibles.",
      days: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      note: "✦ Los horarios pueden variar en días festivos ✦",
      isabela: "Isabela", hatillo: "Hatillo",
    },
    gallery: {
      tag: "◈ Logros y Competencias ◈",
      title1: "Campeones en", title2: "el escenario",
      sub: "Nuestros estudiantes compiten y ganan a nivel nacional. Orgullo puertorriqueño en cada presentación.",
      trophies: [
        { icon: "🏆", text: "Grand Champions", sub: "All Dance PR 2026" },
        { icon: "🥇", text: "Múltiples Oros",  sub: "Competencias Nacionales" },
        { icon: "🎖️", text: "10+ Años",        sub: "Formando Campeones" },
        { icon: "🇵🇷", text: "Orgullo Boricua", sub: "Isabela · Hatillo" },
      ],
    },
    contact: {
      tag: "◈ Contáctanos ◈",
      title1: "¿Listo para", title2: "empezar?",
      sub: "Da el primer paso. Tu primera clase es gratis — sin compromisos.",
      social: "Redes Sociales",
      fields: { name: "Tu nombre", email: "Tu email", phone: "Teléfono (opcional)", classSelect: "¿Qué clase te interesa?", location: "Localidad", message: "Cuéntanos algo sobre ti (opcional)", submit: "Enviar mensaje ✦", free: "Tu primera clase es completamente gratis 🎵" },
      sent: { title: "¡Mensaje enviado!", sub: "Te contactaremos muy pronto. ¡Prepárate para bailar!" },
      locations: ["Isabela", "Hatillo"],
    },
    footer: {
      testimonialsTag: "◈ Testimonios ◈",
      testimonialsTitle1: "Lo que dicen nuestros", testimonialsTitle2: "alumnos",
      ctaTitle1: "Tu primera clase es", ctaTitle2: "gratis",
      ctaSub: "Sin compromisos. Solo ven y siente la diferencia.",
      ctaBtn: "Reservar ahora ✦",
      navLinks: ["Clases", "Nosotros", "Galeria", "Horarios", "Contacto"],
      copyright: `© ${new Date().getFullYear()} Sky Dance Studio PR · skydancestudio76@gmail.com`,
    },
  },
  en: {
    nav: {
      classes: "Classes", about: "About", schedule: "Schedule", pricing: "Pricing", contact: "Contact", enroll: "Enroll",
    },
    hero: {
      badge: "Dance Academy",
      sub: "Where rhythm becomes art. Learn to dance with the best instructors and discover your potential on the floor.",
      cta1: "Explore Classes", cta2: "Enroll for Free",
      stats: [
        { value: "255", label: "Active students" },
        { value: "10+", label: "Years of experience" },
        { value: "7",   label: "Dance styles" },
      ],
      scroll: "Scroll",
    },
    about: {
      tag: "◈ Who We Are ◈",
      title1: "More than classes,", title2: "a passion",
      p1: "Sky Dance was born with a dream: to let every person express themselves through dance, regardless of their level. Today we are the most recognized academy in the region.",
      p2: "Our instructors have competed in national and international tournaments, bringing that level of excellence to every class — making it accessible, fun, and transformative.",
      bullets: ["Personalized classes for your level", "Professional and welcoming environment", "Official level certificates", "Free trial class"],
      cta: "Book your free class →",
      stats: ["Students trained", "Years of experience", "Certified instructors", "Dance styles"],
    },
    classes: {
      tag: "◈ Our Styles ◈",
      title1: "Choose your", title2: "rhythm",
      sub: "Seven unique styles, one single purpose: to make you fall in love with dance.",
      items: [
        { name: "Salsa",         level: "All levels",              desc: "The Caribbean rhythm in every step. Learn salsa with technique, flavor, and lots of energy.",                    tag: "POPULAR"  },
        { name: "Hip Hop",       level: "All levels",              desc: "Free expression through urban choreography. Culture, music, and authentic movement.",                            tag: "URBAN"    },
        { name: "Ballet",        level: "Beginner · Advanced",     desc: "The foundation of all dance. Technique, elegance, and discipline at its finest.",                               tag: "CLASSIC"  },
        { name: "Tap",           level: "All levels",              desc: "Rhythm with your feet. A unique style where your body becomes a musical instrument.",                           tag: "RHYTHM"   },
        { name: "Bachata",       level: "All levels",              desc: "Dominican sensuality in every move. Perfect for couples and solo dancers.",                                     tag: "COUPLES"  },
        { name: "Music Theater", level: "All levels",              desc: "Dance, singing, and acting in perfect harmony. Stage art at its most complete.",                                tag: "STAGE"    },
        { name: "Pointe",        level: "Intermediate · Advanced", desc: "The pinnacle of classical ballet. Pointe technique with discipline, strength, and elegance.",                   tag: "ADVANCED" },
        { name: "And more...",   level: "Check availability",      desc: "We offer more styles and special classes. Contact us to learn about our full lineup!",                         tag: "SPECIAL"  },
      ],
    },
    schedule: {
      tag: "◈ Schedule ◈",
      title1: "Your week in", title2: "motion",
      sub: "Select your location to see available class times.",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      note: "✦ Schedules may vary on holidays ✦",
      isabela: "Isabela", hatillo: "Hatillo",
    },
    gallery: {
      tag: "◈ Achievements & Competitions ◈",
      title1: "Champions on", title2: "the stage",
      sub: "Our students compete and win at the national level. Puerto Rican pride in every performance.",
      trophies: [
        { icon: "🏆", text: "Grand Champions", sub: "All Dance PR 2026" },
        { icon: "🥇", text: "Multiple Golds",  sub: "National Competitions" },
        { icon: "🎖️", text: "10+ Years",       sub: "Building Champions" },
        { icon: "🇵🇷", text: "Boricua Pride",   sub: "Isabela · Hatillo" },
      ],
    },
    contact: {
      tag: "◈ Contact Us ◈",
      title1: "Ready to", title2: "start?",
      sub: "Take the first step. Your first class is free — no commitment.",
      social: "Social Media",
      fields: { name: "Your name", email: "Your email", phone: "Phone (optional)", classSelect: "Which class interests you?", location: "Location", message: "Tell us about yourself (optional)", submit: "Send message ✦", free: "Your first class is completely free 🎵" },
      sent: { title: "Message sent!", sub: "We'll contact you very soon. Get ready to dance!" },
      locations: ["Isabela", "Hatillo"],
    },
    footer: {
      testimonialsTag: "◈ Testimonials ◈",
      testimonialsTitle1: "What our", testimonialsTitle2: "students say",
      ctaTitle1: "Your first class is", ctaTitle2: "free",
      ctaSub: "No commitment. Just come and feel the difference.",
      ctaBtn: "Book now ✦",
      navLinks: ["Classes", "About", "Gallery", "Schedule", "Contact"],
      copyright: `© ${new Date().getFullYear()} Sky Dance Studio PR · skydancestudio76@gmail.com`,
    },
  },
} as const;

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({ lang: "es", toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang((l) => (l === "es" ? "en" : "es")) }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const { lang, toggle } = useContext(LangContext);
  return { lang, toggle, tx: t[lang] };
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
          SKY DANCE
        </span>

        <div className="flex gap-6 text-sm text-white/40">
          {["Clases", "Nosotros", "Horarios", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-amber-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Sky Dance. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

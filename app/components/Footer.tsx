import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  { name: "María García", quote: "Sky Dance cambió mi vida. Llegué sin saber bailar y ahora compito a nivel nacional.", title: "Alumna de Salsa" },
  { name: "Carlos Ruiz", quote: "Los instructores son increíbles. Se nota la pasión que le ponen a cada clase.", title: "Alumno de Hip Hop" },
  { name: "Sofía Martínez", quote: "El mejor ambiente. Se siente como una familia desde el primer día.", title: "Alumna de Bachata" },
  { name: "Andrés López", quote: "Vine a Zumba para ejercitarme y terminé enamorado del baile. ¡No me arrepiento!", title: "Alumno de Zumba" },
  { name: "Valentina Torres", quote: "Gracias a Sky Dance perdí el miedo a bailar en público. ¡Son los mejores!", title: "Alumna de Reggaeton" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
          Testimonios
        </span>
        <h2 className="text-3xl font-bold text-white mt-2 mb-8">
          Lo que dicen nuestros{" "}
          <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
            estudiantes
          </span>
        </h2>
        <InfiniteMovingCards items={testimonials} direction="left" speed="normal" />
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
        <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
          SKY DANCE
        </span>
        <div className="flex gap-6 text-sm text-white/40">
          {["Clases", "Nosotros", "Horarios", "Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors">
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

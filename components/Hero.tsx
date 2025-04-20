import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-titulo text-6xl md:text-7xl mb-4"
      >
        COVA STUDIO
      </motion.h1>
      <p className="max-w-2xl text-lg md:text-xl mb-6">
        Construyendo soluciones innovadoras en cloud, IA y robótica con seguridad de primer nivel.
      </p>
      <Link href="#projects" className="rounded-full bg-primario px-8 py-3 text-fondo font-semibold shadow-btn hover:brightness-110">
        Ver proyectos
      </Link>
      {/* Botón flotante "Pregúntame" */}
      <Link
        href="#contact"
        className="fixed bottom-6 right-6 rounded-full bg-primario px-6 py-3 font-semibold text-fondo shadow-lg hover:scale-105 transition-transform"
      >
        Pregúntame
      </Link>
    </section>
  );
}

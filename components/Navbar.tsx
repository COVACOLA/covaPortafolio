'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Clientes', href: '#clients' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Login', href: '/login' },
  { label: 'Contacto', href: '#contact' }
];

function NavButton({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href.startsWith('#') && typeof window !== 'undefined' && location.hash === href);
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={`relative inline-block rounded-full px-6 py-2 font-semibold shadow-btn transition-all focus-visible:outline-offset-2 focus-visible:outline-primario ${
          isActive ? 'bg-primario text-white' : 'bg-fondo text-contraste'
        }`}
      >
        {label}
      </Link>
    </motion.div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-contraste py-3 shadow-md">
      <nav className="container mx-auto flex items-center gap-6">
        <Link href="#" className="flex items-center gap-2 text-fondo">
          {/* logo SVG */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0 24 24H0z" />
          </svg>
          <span className="font-titulo text-2xl tracking-widest">COVA</span>
        </Link>
        <ul className="ml-auto flex gap-4">
          {navItems.map((i) => (
            <li key={i.href}>
              <NavButton href={i.href} label={i.label} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

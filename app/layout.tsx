import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'COVA Studio',
  description: 'Portafolio de proyectos cloud, IA, ciberseguridad y robótica'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

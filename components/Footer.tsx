export default function Footer() {
    return (
      <footer className="bg-contraste text-fondo py-10 mt-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-4 text-sm">
          <div>
            <h3 className="font-titulo text-xl mb-4">COVA STUDIO</h3>
            <p>© {new Date().getFullYear()} Cova Studio.</p>
            <p className="mt-2">Sígueme:</p>
            <ul className="flex gap-2 mt-1">
              {/* icons */}
              <li>
                <a href="https://github.com/tuusuario" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">...</svg>
                </a>
              </li>
              {/* add more icons */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Enlaces</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Políticas</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Aviso legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contacto</h4>
            <p>Email: <a href="mailto:contacto@cova.studio" className="hover:underline">contacto@cova.studio</a></p>
            <p className="mt-2">Idiomas: 🇪🇸 / 🇬🇧</p>
          </div>
        </div>
      </footer>
    );
  }
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-mediterraneo-blue text-mediterraneo-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block mb-4 tap-target focus-visible-ring rounded-lg"
              aria-label="Nomad Gear Alicante - Volver al inicio"
            >
              <span className="font-cormorant text-2xl font-bold">Nomad Gear</span>
              <span className="block text-sm text-mediterraneo-terracota">Alicante</span>
            </a>
            <p className="text-mediterraneo-white/70 text-sm leading-relaxed mb-6">
              Alquiler de material premium de camping y trekking en Alicante. Tu próxima aventura empieza aquí.
            </p>

            {/* Redes sociales */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-mediterraneo-white/10 rounded-lg flex items-center justify-center hover:bg-mediterraneo-terracota transition-colors tap-target focus-visible-ring"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-mediterraneo-white/10 rounded-lg flex items-center justify-center hover:bg-mediterraneo-terracota transition-colors tap-target focus-visible-ring"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-cormorant text-lg font-bold mb-4">Enlaces rápidos</h3>
            <nav aria-label="Enlaces del footer">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('#kits')}
                    className="text-mediterraneo-white/70 hover:text-mediterraneo-arena transition-colors text-sm tap-target focus-visible-ring rounded px-1"
                  >
                    Kits de alquiler
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#destinos')}
                    className="text-mediterraneo-white/70 hover:text-mediterraneo-arena transition-colors text-sm tap-target focus-visible-ring rounded px-1"
                  >
                    Destinos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#rutas')}
                    className="text-mediterraneo-white/70 hover:text-mediterraneo-arena transition-colors text-sm tap-target focus-visible-ring rounded px-1"
                  >
                    App Rutas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#como-funciona')}
                    className="text-mediterraneo-white/70 hover:text-mediterraneo-arena transition-colors text-sm tap-target focus-visible-ring rounded px-1"
                  >
                    Cómo funciona
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#faq')}
                    className="text-mediterraneo-white/70 hover:text-mediterraneo-arena transition-colors text-sm tap-target focus-visible-ring rounded px-1"
                  >
                    Preguntas frecuentes
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-cormorant text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.google.com/?q=Calle+San+Francisco+12+Alicante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-mediterraneo-white/70 hover:text-mediterraneo-arena transition-colors text-sm tap-target focus-visible-ring rounded px-1 py-0.5"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Calle San Francisco, 12<br />Alicante centro</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/34600123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mediterraneo-white/70 hover:text-mediterraneo-arena transition-colors text-sm tap-target focus-visible-ring rounded px-1 py-0.5"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span>+34 600 123 456</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@nomadgearalicante.es"
                  className="flex items-center gap-3 text-mediterraneo-white/70 hover:text-mediterraneo-arena transition-colors text-sm tap-target focus-visible-ring rounded px-1 py-0.5"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span>hola@nomadgearalicante.es</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h3 className="font-cormorant text-lg font-bold mb-4">Horario</h3>
            <div className="flex items-start gap-3 text-mediterraneo-white/70 text-sm">
              <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="mb-1">
                  <span className="text-mediterraneo-white">Lunes a sábado</span>
                </p>
                <p>10:00 – 20:00</p>
                <p className="mt-2 text-mediterraneo-white/50">Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-mediterraneo-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-mediterraneo-white/50 text-center sm:text-left">
              © {currentYear} Nomad Gear Alicante. Todos los derechos reservados.
            </p>

            {/* Enlaces legales */}
            <nav aria-label="Enlaces legales">
              <ul className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-mediterraneo-white/50 hover:text-mediterraneo-arena transition-colors tap-target focus-visible-ring rounded px-1"
                  >
                    Aviso legal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-mediterraneo-white/50 hover:text-mediterraneo-arena transition-colors tap-target focus-visible-ring rounded px-1"
                  >
                    Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-mediterraneo-white/50 hover:text-mediterraneo-arena transition-colors tap-target focus-visible-ring rounded px-1"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

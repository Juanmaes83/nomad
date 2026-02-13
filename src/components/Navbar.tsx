import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#kits', label: 'Kits' },
    { href: '#destinos', label: 'Destinos' },
    { href: '#rutas', label: 'Rutas' },
    { href: '#como-funciona', label: 'Cómo funciona' },
    { href: '#faq', label: 'FAQ' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip link para accesibilidad */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-mediterraneo-white/95 backdrop-blur-md shadow-mediterraneo'
            : 'bg-transparent'
        }`}
      >
        {/* Barra superior de confianza */}
        <div className="bg-mediterraneo-blue text-mediterraneo-white py-2 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Recoge en nuestra tienda de Alicante centro
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">Entrega en 24h en Costa Blanca</span>
              <a
                href="https://wa.me/34600123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-mediterraneo-arena transition-colors tap-target"
                aria-label="Contactar por WhatsApp"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Navegación principal */}
        <nav className="px-4 sm:px-6 lg:px-12 py-4" role="navigation" aria-label="Navegación principal">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 tap-target focus-visible-ring rounded-lg"
              aria-label="Nomad Gear Alicante - Inicio"
            >
              <span className="font-cormorant text-xl sm:text-2xl font-bold text-mediterraneo-blue">
                Nomad Gear
              </span>
              <span className="hidden sm:inline text-mediterraneo-terracota text-sm font-medium">
                Alicante
              </span>
            </a>

            {/* Navegación desktop */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-mediterraneo-blue hover:text-mediterraneo-terracota transition-colors text-sm font-medium tap-target focus-visible-ring rounded px-2 py-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA y menú móvil */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/34600123456"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-mediterraneo-terracota text-mediterraneo-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-mediterraneo-terracota/90 transition-colors tap-target focus-visible-ring"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Reservar
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-mediterraneo-blue hover:text-mediterraneo-terracota transition-colors tap-target focus-visible-ring rounded-lg"
                aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Menú móvil */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute top-full left-0 right-0 bg-mediterraneo-white shadow-mediterraneo-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className="px-4 py-6" role="navigation" aria-label="Navegación móvil">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left text-mediterraneo-blue hover:text-mediterraneo-terracota transition-colors text-base font-medium py-2 tap-target focus-visible-ring rounded px-2"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-4 border-t border-mediterraneo-arena">
                <a
                  href="https://wa.me/34600123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-mediterraneo-terracota text-mediterraneo-white px-4 py-3 rounded-lg text-base font-medium hover:bg-mediterraneo-terracota/90 transition-colors tap-target focus-visible-ring"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Reservar por WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

import { useState, useEffect, useRef } from 'react';
import { Mail, Send, Check } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12"
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll bg-mediterraneo-blue rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-mediterraneo-terracota/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-mediterraneo-arena/10 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3" />

          <div className="relative text-center">
            {/* Icono */}
            <div className="w-14 h-14 bg-mediterraneo-white/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-mediterraneo-arena" aria-hidden="true" />
            </div>

            <h2
              id="newsletter-heading"
              className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-mediterraneo-white mb-3"
            >
              No te pierdas ninguna aventura
            </h2>

            <p className="text-mediterraneo-white/70 mb-8 max-w-lg mx-auto">
              Suscríbete y recibe las mejores rutas de Alicante, consejos de equipamiento y ofertas exclusivas.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    disabled={isSubmitted}
                    className="w-full px-4 py-3.5 rounded-lg bg-mediterraneo-white/10 border border-mediterraneo-white/20 text-mediterraneo-white placeholder:text-mediterraneo-white/50 focus:outline-none focus:ring-2 focus:ring-mediterraneo-terracota focus:border-transparent tap-target disabled:opacity-70"
                    aria-label="Correo electrónico para newsletter"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="inline-flex items-center justify-center gap-2 bg-mediterraneo-terracota text-mediterraneo-white px-6 py-3.5 rounded-lg font-medium hover:bg-mediterraneo-terracota/90 transition-colors disabled:opacity-70 tap-target focus-visible-ring"
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" aria-hidden="true" />
                      ¡Suscrito!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      Suscribirme
                    </>
                  )}
                </button>
              </div>
            </form>

            {isSubmitted && (
              <p className="mt-4 text-sm text-mediterraneo-arena">
                ¡Bienvenido a la comunidad! Pronto recibirás nuestras novedades.
              </p>
            )}

            <p className="mt-4 text-xs text-mediterraneo-white/50">
              Puedes darte de baja en cualquier momento. Respetamos tu privacidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

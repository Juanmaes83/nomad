import { useEffect, useRef } from 'react';
import { MousePointer, Calendar, Package, ChevronRight } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Elige tu kit',
    description: 'Selecciona el kit que mejor se adapte a tu aventura entre nuestras opciones para Costa Blanca.',
    icon: <MousePointer className="w-6 h-6" />,
  },
  {
    number: '02',
    title: 'Reserva online',
    description: 'Contáctanos por WhatsApp con las fechas. Te confirmamos disponibilidad al instante.',
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    number: '03',
    title: 'Recibe o recoge',
    description: 'Pasa a recogerlo por nuestra tienda en Alicante centro o te lo llevamos en 24h.',
    icon: <Package className="w-6 h-6" />,
  },
];

export function HowItWorks() {
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

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-transparent to-mediterraneo-arena/20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="how-it-works-heading"
            className="animate-on-scroll font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-mediterraneo-blue mb-4"
          >
            Así de fácil
          </h2>
          <p className="animate-on-scroll text-lg text-mediterraneo-blue/70" style={{ animationDelay: '0.1s' }}>
            Tres pasos simples para equiparte y salir a disfrutar de la naturaleza alicantina.
          </p>
        </div>

        {/* Pasos */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="animate-on-scroll relative"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Conector (solo desktop y no en el último) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-12 left-[60%] w-[80%]"
                  aria-hidden="true"
                >
                  <ChevronRight className="w-6 h-6 text-mediterraneo-arena mx-auto" />
                </div>
              )}

              <div className="bg-mediterraneo-white rounded-2xl p-8 shadow-mediterraneo hover:shadow-mediterraneo-lg transition-shadow h-full">
                {/* Número y icono */}
                <div className="flex items-start justify-between mb-6">
                  <span className="font-cormorant text-5xl font-bold text-mediterraneo-arena/50">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 bg-mediterraneo-blue/10 rounded-xl flex items-center justify-center text-mediterraneo-blue">
                    {step.icon}
                  </div>
                </div>

                {/* Contenido */}
                <h3 className="font-cormorant text-xl font-bold text-mediterraneo-blue mb-3">
                  {step.title}
                </h3>
                <p className="text-mediterraneo-blue/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll text-center mt-12" style={{ animationDelay: '0.5s' }}>
          <a
            href="#kits"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#kits')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-mediterraneo-terracota font-medium hover:underline tap-target focus-visible-ring rounded px-2 py-1"
          >
            Ver kits disponibles
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

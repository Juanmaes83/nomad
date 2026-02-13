import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Dónde puedo recoger el material?',
    answer: 'Puedes recoger el material en nuestra tienda física en Calle San Francisco, 12, en el centro de Alicante. También ofrecemos servicio de entrega a domicilio en toda la Costa Blanca en 24 horas.',
  },
  {
    question: '¿Necesito dejar fianza?',
    answer: 'No, no pedimos fianza. Confiamos en nuestros clientes. Solo necesitamos una foto de tu DNI y una tarjeta de crédito como garantía. El material está asegurado contra daños accidentales.',
  },
  {
    question: '¿Puedo modificar o cancelar mi reserva?',
    answer: 'Sí, puedes modificar las fechas de tu reserva sin coste hasta 48 horas antes. Para cancelaciones con más de 48 horas de antelación, te devolvemos el 100%. Entre 48 y 24 horas, el 50%. Menos de 24 horas no es reembolsable.',
  },
  {
    question: '¿El material está limpio y desinfectado?',
    answer: 'Absolutamente. Cada artículo pasa por un proceso riguroso de limpieza y desinfección después de cada alquiler. Utilizamos productos específicos para material técnico de montaña y camping.',
  },
];

export function FAQ() {
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
      id="faq"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="animate-on-scroll font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-mediterraneo-blue mb-4"
          >
            Preguntas frecuentes
          </h2>
          <p className="animate-on-scroll text-lg text-mediterraneo-blue/70" style={{ animationDelay: '0.1s' }}>
            Todo lo que necesitas saber sobre el alquiler de material.
          </p>
        </div>

        {/* Acordeón nativo */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="animate-on-scroll group bg-mediterraneo-white rounded-xl shadow-mediterraneo overflow-hidden"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer tap-target focus-visible-ring">
                <h3 className="font-medium text-mediterraneo-blue pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className="w-5 h-5 text-mediterraneo-blue/50 flex-shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-5 pb-5">
                <p className="text-mediterraneo-blue/70 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Contacto adicional */}
        <div
          className="animate-on-scroll text-center mt-10"
          style={{ animationDelay: '0.5s' }}
        >
          <p className="text-mediterraneo-blue/70 mb-3">
            ¿Tienes otra pregunta?
          </p>
          <a
            href="https://wa.me/34600123456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-mediterraneo-terracota font-medium hover:underline tap-target focus-visible-ring rounded px-2 py-1"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

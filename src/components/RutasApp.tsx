import { useState } from 'react';
import { Footprints, Users, Smartphone, Bell, Send } from 'lucide-react';
import appCard1 from '../assets/app-card-1.jpg';
import appCard2 from '../assets/app-card-2.jpg';
import appCard3 from '../assets/app-card-3.jpg';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  image: string;
}

const features: Feature[] = [
  {
    icon: <Footprints className="w-6 h-6" />,
    title: 'Rutas por nivel',
    description: 'Encuentra senderos adaptados a tu experiencia.',
    details: 'Cova Tallada (fácil), Aitana (experto), y cientos más.',
    image: appCard1,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Quedadas organizadas',
    description: 'Únete a grupos y conoce otros amantes de la naturaleza.',
    details: 'Próxima: 15 de marzo – Cala del Moraig',
    image: appCard2,
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'App colaborativa',
    description: 'Comparte tus rutas favoritas con la comunidad.',
    details: 'Sube rutas, valora, comenta y descubre nuevos caminos.',
    image: appCard3,
  },
];

export function RutasApp() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInterest = (feature: string) => {
    alert(`¡Gracias por tu interés en "${feature}"! Te avisaremos cuando esté listo.`);
  };

  const handleNotify = (e: React.FormEvent) => {
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
      id="rutas"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-[#FFF9F0] relative overflow-hidden"
      aria-labelledby="rutas-heading"
    >
      {/* Patrón topográfico de fondo */}
      <div
        className="absolute inset-0 pattern-topografico opacity-30"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2C5530]/10 text-[#2C5530] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Bell className="w-4 h-4" />
            <span>Próximamente</span>
          </div>

          <h2
            id="rutas-heading"
            className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3D5B] mb-4"
          >
            App Rutas Alicante
          </h2>

          <p className="text-lg text-[#1E3D5B]/70">
            Descubre senderos, únete a quedadas y comparte experiencias con otros amantes de la naturaleza.
          </p>
        </div>

        {/* Tarjetas de características */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-[#E5D3B0]/30"
            >
              {/* Imagen */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center text-[#1E3D5B]">
                  {feature.icon}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="font-cormorant text-xl font-bold text-[#1E3D5B] mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#1E3D5B]/70 mb-3">
                  {feature.description}
                </p>

                <p className="text-xs text-[#1E3D5B]/50 mb-4">
                  {feature.details}
                </p>

                <button
                  onClick={() => handleInterest(feature.title)}
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#1E3D5B] text-[#1E3D5B] px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1E3D5B] hover:text-white transition-colors"
                >
                  Me interesa
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Formulario de notificación */}
        <div className="max-w-md mx-auto">
          <div className="bg-[#1E3D5B] rounded-2xl p-6 sm:p-8 text-center shadow-xl">
            <h3 className="font-cormorant text-xl font-bold text-white mb-2">
              Sé el primero en probarla
            </h3>
            <p className="text-sm text-white/70 mb-6">
              Déjanos tu email y te notificaremos cuando la app esté disponible.
            </p>

            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#C66B3D] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className="inline-flex items-center justify-center gap-2 bg-[#C66B3D] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#C66B3D]/90 transition-colors disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>¡Listo!</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Notificarme
                  </>
                )}
              </button>
            </form>

            {isSubmitted && (
              <p className="mt-4 text-sm text-[#E5D3B0]">
                ¡Gracias! Te avisaremos muy pronto.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

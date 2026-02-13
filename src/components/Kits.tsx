import { Tent, Mountain, Users, Feather, Check, ArrowRight } from 'lucide-react';
import kitCostaBlanca from '../assets/kit-costa-blanca.jpg';
import kitAitana from '../assets/kit-aitana-trek.jpg';
import kitFamilia from '../assets/kit-familia.jpg';
import kitMinimal from '../assets/kit-minimal.jpg';

interface Kit {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  icon: React.ReactNode;
  image: string;
}

const kits: Kit[] = [
  {
    id: 'escapada-costa-blanca',
    name: 'Escapada Costa Blanca',
    description: 'Todo lo necesario para un fin de semana en la costa alicantina.',
    features: [
      'Tienda 2 personas ultraligera',
      'Sacos de dormir verano',
      'Esterillas autoinflables',
      'Linterna frontal + powerbank',
    ],
    price: 25,
    icon: <Tent className="w-6 h-6" />,
    image: kitCostaBlanca,
  },
  {
    id: 'aitana-trek',
    name: 'Aitana Trek',
    description: 'Equipamiento técnico para rutas de montaña exigentes.',
    features: [
      'Mochila 40L con sistema de ventilación',
      'Bastones de trekking regulables',
      'Botas de montaña (varias tallas)',
      'Chubasquero técnico',
    ],
    price: 35,
    icon: <Mountain className="w-6 h-6" />,
    image: kitAitana,
  },
  {
    id: 'fin-de-semana-familia',
    name: 'Fin de semana en familia',
    description: 'El kit perfecto para acampar con niños en Alicante.',
    features: [
      'Tienda familiar 4 personas',
      'Sacos de dormir para adultos y niños',
      'Mesa y sillas plegables',
      'Nevera portátil + cocina de camping',
    ],
    price: 45,
    icon: <Users className="w-6 h-6" />,
    image: kitFamilia,
  },
  {
    id: 'minimal-ultraligero',
    name: 'Minimal Ultraligero',
    description: 'Para los que buscan viajar ligero sin renunciar a nada.',
    features: [
      'Tienda 1 persona 1.2kg',
      'Saco de plumón ultra-compacto',
      'Esterilla de espuma',
      'Cocina mini + cubiertos titanio',
    ],
    price: 30,
    icon: <Feather className="w-6 h-6" />,
    image: kitMinimal,
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

export function Kits() {
  const handleReserve = (kitName: string) => {
    const message = `Hola, me interesa reservar el kit "${kitName}"`;
    window.open(`https://wa.me/34600123456?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section
      id="kits"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-[#FFF9F0]"
      aria-labelledby="kits-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="kits-heading"
            className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3D5B] mb-4"
          >
            Kits de alquiler
          </h2>
          <p className="text-lg text-[#1E3D5B]/70">
            Elige el kit que mejor se adapte a tu aventura. Todo el material está revisado y listo para usar.
          </p>
        </div>

        {/* Grid de kits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kits.map((kit) => (
            <article
              key={kit.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-[#E5D3B0]/30"
            >
              {/* Imagen del kit */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={kit.image}
                  alt={kit.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center text-[#1E3D5B]">
                  {kit.icon}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-cormorant text-xl font-bold text-[#1E3D5B] mb-2">{kit.name}</h3>
                <p className="text-[#1E3D5B]/70 text-sm mb-4">{kit.description}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {kit.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#1E3D5B]">
                      <Check className="w-4 h-4 text-[#2C5530] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Precio y CTA */}
                <div className="pt-4 border-t border-[#E5D3B0]/50">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-2xl font-bold text-[#1E3D5B]">
                      {formatPrice(kit.price)}
                    </span>
                    <span className="text-sm text-[#1E3D5B]/60">/día</span>
                  </div>

                  <button
                    onClick={() => handleReserve(kit.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C66B3D] text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#C66B3D]/90 transition-colors group/btn"
                    aria-label={`Reservar kit ${kit.name}`}
                  >
                    Reservar
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Nota */}
        <p className="text-center text-sm text-[#1E3D5B]/60 mt-8">
          ¿Necesitas algo específico?{' '}
          <a
            href="https://wa.me/34600123456"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C66B3D] hover:underline"
          >
            Escríbenos por WhatsApp
          </a>{' '}
          y personalizamos tu kit.
        </p>
      </div>
    </section>
  );
}

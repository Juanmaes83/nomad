import { MapPin, Mountain, Waves, TreePine } from 'lucide-react';
import destAitana from '../assets/dest-aitana.jpg';
import destFontRoja from '../assets/dest-font-roja.jpg';
import destSerraGelada from '../assets/dest-serra-gelada.jpg';
import destIfach from '../assets/dest-ifach.jpg';
import destMontgo from '../assets/dest-montgo.jpg';
import destCovaTallada from '../assets/dest-cova-tallada.jpg';
import destMoraig from '../assets/dest-moraig.jpg';
import destSanJuan from '../assets/dest-san-juan.jpg';
import destCampello from '../assets/dest-campello.jpg';

interface Destination {
  name: string;
  type: string;
  description: string;
  difficulty: 'Fácil' | 'Moderado' | 'Experto';
  icon: React.ReactNode;
  image: string;
}

const destinations: Destination[] = [
  {
    name: 'Sierra de Aitana',
    type: 'Montaña',
    description: 'El techo de Alicante con 1.558m. Vistas espectaculares de toda la provincia.',
    difficulty: 'Experto',
    icon: <Mountain className="w-5 h-5" />,
    image: destAitana,
  },
  {
    name: 'Font Roja',
    type: 'Montaña',
    description: 'Parque natural con senderos entre hayedos y el emblemático Montcabrer.',
    difficulty: 'Moderado',
    icon: <TreePine className="w-5 h-5" />,
    image: destFontRoja,
  },
  {
    name: 'Serra Gelada',
    type: 'Costa',
    description: 'Acantilados impresionantes entre Benidorm y Albir. Ruta del faro.',
    difficulty: 'Fácil',
    icon: <Waves className="w-5 h-5" />,
    image: destSerraGelada,
  },
  {
    name: 'Peñón de Ifach',
    type: 'Costa',
    description: 'El símbolo de Calpe. Ascenso corto pero intenso con vistas al Mediterráneo.',
    difficulty: 'Moderado',
    icon: <Mountain className="w-5 h-5" />,
    image: destIfach,
  },
  {
    name: 'Montgó',
    type: 'Montaña',
    description: 'Parque natural de Dénia y Jávea. Cueva de las calaveras y vistas a Ibiza.',
    difficulty: 'Moderado',
    icon: <Mountain className="w-5 h-5" />,
    image: destMontgo,
  },
  {
    name: 'Cova Tallada',
    type: 'Costa',
    description: 'Antigua cantera de piedra convertida en cueva marina accesible desde el agua.',
    difficulty: 'Fácil',
    icon: <Waves className="w-5 h-5" />,
    image: destCovaTallada,
  },
  {
    name: 'Cala del Moraig',
    type: 'Costa',
    description: 'Una de las calas más bonitas de la Costa Blanca. Agua cristalina.',
    difficulty: 'Fácil',
    icon: <Waves className="w-5 h-5" />,
    image: destMoraig,
  },
  {
    name: 'Playa de San Juan',
    type: 'Costa',
    description: '7km de arena dorada perfectos para acampar cerca de la ciudad.',
    difficulty: 'Fácil',
    icon: <Waves className="w-5 h-5" />,
    image: destSanJuan,
  },
  {
    name: 'El Campello',
    type: 'Costa',
    description: 'Playas tranquilas y la torre vigía de la Illeta. Ideal para familias.',
    difficulty: 'Fácil',
    icon: <Waves className="w-5 h-5" />,
    image: destCampello,
  },
];

function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'Fácil':
      return 'bg-[#2C5530]/20 text-[#2C5530]';
    case 'Moderado':
      return 'bg-[#C66B3D]/20 text-[#C66B3D]';
    case 'Experto':
      return 'bg-[#1E3D5B]/20 text-[#1E3D5B]';
    default:
      return 'bg-[#E5D3B0]/50 text-[#1E3D5B]';
  }
}

export function Destinations() {
  return (
    <section
      id="destinos"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-[#FFF9F0]"
      aria-labelledby="destinations-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="destinations-heading"
            className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3D5B] mb-4"
          >
            Destinos en Alicante
          </h2>
          <p className="text-lg text-[#1E3D5B]/70">
            Desde la montaña hasta el mar, descubre los mejores lugares para tu próxima aventura.
          </p>
        </div>

        {/* Grid de destinos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-[#E5D3B0]/30"
            >
              {/* Imagen */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center text-[#1E3D5B]">
                  {destination.icon}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4">
                <h3 className="font-cormorant text-lg font-bold text-[#1E3D5B] mb-2">
                  {destination.name}
                </h3>

                <p className="text-sm text-[#1E3D5B]/70 mb-3 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(destination.difficulty)}`}>
                    {destination.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#1E3D5B]/50">
                    <MapPin className="w-3 h-3" />
                    {destination.type}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Nota */}
        <p className="text-center text-sm text-[#1E3D5B]/60 mt-8">
          ¿Conoces algún rincón secreto?{' '}
          <a
            href="#rutas"
            className="text-[#C66B3D] hover:underline"
          >
            Compártelo en nuestra comunidad
          </a>
        </p>
      </div>
    </section>
  );
}

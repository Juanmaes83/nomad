import { Star, Quote } from 'lucide-react';
import avatar1 from '../assets/avatar-1.jpg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';
import avatar4 from '../assets/avatar-4.jpg';
import avatar5 from '../assets/avatar-5.jpg';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  kit: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'María García',
    location: 'Alicante',
    text: 'Alquilamos el kit para el fin de semana en familia y fue perfecto. Todo estaba impecable y nos dieron consejos muy útiles para acampar en San Juan.',
    rating: 5,
    kit: 'Fin de semana en familia',
    avatar: avatar1,
  },
  {
    name: 'Carlos Ruiz',
    location: 'El Campello',
    text: 'Increíble experiencia subiendo al Aitana con el kit de trekking. Material de primera calidad y el trato excepcional. Repetiré sin duda.',
    rating: 5,
    kit: 'Aitana Trek',
    avatar: avatar2,
  },
  {
    name: 'Laura Martínez',
    location: 'Altea',
    text: 'La opción de que me lo entregaran en casa fue genial. Fui a la Cala del Moraig con todo lo necesario y sin complicaciones.',
    rating: 5,
    kit: 'Escapada Costa Blanca',
    avatar: avatar3,
  },
  {
    name: 'Pedro Sánchez',
    location: 'San Juan',
    text: 'Material ultraligero de verdad. Pesaba menos de lo que esperaba y la tienda se montó en un momento. Ideal para rutas largas.',
    rating: 5,
    kit: 'Minimal Ultraligero',
    avatar: avatar4,
  },
  {
    name: 'Ana López',
    location: 'Villajoyosa',
    text: 'Servicio impecable y muy profesional. Me ayudaron a elegir el kit adecuado para mi nivel y la ruta que tenía planeado.',
    rating: 5,
    kit: 'Aitana Trek',
    avatar: avatar5,
  },
  {
    name: 'David Torres',
    location: 'Alicante',
    text: 'La app de rutas promete mucho. Mientras tanto, el alquiler de material es top. Ya he salido tres veces con ellos.',
    rating: 5,
    kit: 'Escapada Costa Blanca',
    avatar: avatar1,
  },
];

export function Testimonials() {
  return (
    <section
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#E5D3B0]/20 to-[#FFF9F0]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="testimonials-heading"
            className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3D5B] mb-4"
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-[#1E3D5B]/70">
            +1.500 alicantinos ya han disfrutado de nuestra naturaleza con nuestro material.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Icono de cita */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-[#C66B3D]/30" />
              </div>

              {/* Texto */}
              <p className="text-[#1E3D5B]/80 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'text-[#C66B3D] fill-[#C66B3D]'
                        : 'text-[#E5D3B0]'
                    }`}
                  />
                ))}
              </div>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E5D3B0]/30">
                {/* Avatar */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#1E3D5B] text-sm truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#1E3D5B]/60">
                    {testimonial.location} · {testimonial.kit}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

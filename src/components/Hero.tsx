import { ArrowRight, Users, Phone } from 'lucide-react';
import heroImage from '../assets/hero-mountain.jpg';

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center py-16 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-[#1E3D5B]/75" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-2xl">
          {/* Contenido */}
          <div className="space-y-6">
            {/* Badge de confianza */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              <Users className="w-4 h-4" />
              <span>+1.500 alicantinos ya han salido equipados</span>
            </div>

            {/* Título principal */}
            <h1
              id="hero-heading"
              className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Tu próxima escapada empieza en{' '}
              <span className="text-[#E5D3B0]">Alicante</span>.
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed">
              Alquila material premium de camping y trekking. Recoge o recíbelo en 24h.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#kits"
                className="inline-flex items-center justify-center gap-2 bg-[#C66B3D] text-white px-6 py-3.5 rounded-lg text-base font-medium hover:bg-[#C66B3D]/90 transition-colors shadow-lg"
              >
                Ver kits disponibles
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/34600123456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-lg text-base font-medium hover:bg-white/20 transition-colors border border-white/30"
              >
                <Phone className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </div>

            {/* Características */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-2 h-2 bg-[#2C5530] rounded-full" />
                <span>Material premium</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-2 h-2 bg-[#2C5530] rounded-full" />
                <span>Entrega 24h</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-2 h-2 bg-[#2C5530] rounded-full" />
                <span>Sin depósito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

# Nomad Gear Alicante

Web de alquiler de material premium de camping y trekking localizada en Alicante, España.

## 🎨 Paleta de colores Mediterránea

- **white-cálido**: `#FFF9F0` - Fondo principal
- **blue-mediterráneo**: `#1E3D5B` - Texto principal y elementos de marca
- **terracota**: `#C66B3D` - CTAs y acentos
- **arena**: `#E5D3B0` - Fondos secundarios y bordes
- **verde-oliva**: `#2C5530` - Éxito y elementos naturales

## 🏗️ Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.tsx       # Navegación sticky con barra de confianza
│   ├── Hero.tsx         # Sección principal con badge y CTAs
│   ├── Kits.tsx         # 4 kits de alquiler con precios
│   ├── HowItWorks.tsx   # 3 pasos del proceso
│   ├── Destinations.tsx # 9 destinos de Alicante
│   ├── RutasApp.tsx     # Sección de comunidad/app (nueva)
│   ├── Testimonials.tsx # Testimonios de clientes locales
│   ├── FAQ.tsx          # Preguntas frecuentes con acordeón
│   ├── Newsletter.tsx   # Suscripción al newsletter
│   └── Footer.tsx       # Footer completo con datos de contacto
├── App.tsx              # Componente principal
├── App.css              # Estilos específicos
└── index.css            # Estilos globales y tokens CSS
```

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

## 📱 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Accesibilidad completa (skip links, focus-visible, ARIA)
- ✅ Animaciones con Intersection Observer
- ✅ Acordeón nativo CSS para FAQ
- ✅ Paleta de colores mediterránea personalizada
- ✅ Tipografía: Inter (cuerpo) + Cormorant Garamond (títulos)
- ✅ Formato de moneda ES (1.234,56 €)
- ✅ Reduced motion support

## 🖼️ Reemplazo de imágenes

Las imágenes actuales son placeholders. Para reemplazarlas:

1. Añade tus imágenes a la carpeta `public/images/`
2. Actualiza los componentes para usar `<img>` en lugar de los divs placeholder
3. Recomendado: usar imágenes de alta calidad de los destinos de Alicante

## 📞 Contacto

- **Dirección**: Calle San Francisco, 12, Alicante centro
- **WhatsApp**: +34 600 123 456
- **Email**: hola@nomadgearalicante.es
- **Horario**: Lunes a sábado 10:00–20:00

---

© 2026 Nomad Gear Alicante. Todos los derechos reservados.

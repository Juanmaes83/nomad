import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Kits } from './components/Kits';
import { HowItWorks } from './components/HowItWorks';
import { Destinations } from './components/Destinations';
import { RutasApp } from './components/RutasApp';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-mediterraneo-white">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-mediterraneo-blue focus:text-mediterraneo-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Kits />
        <HowItWorks />
        <Destinations />
        <RutasApp />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;

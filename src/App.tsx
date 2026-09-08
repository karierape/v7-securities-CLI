import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceDetail from './components/ServiceDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToServices = () => {
    setSelectedService(null);
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedService) {
    return (
      <>
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          <ServiceDetail serviceId={selectedService} onBack={handleBackToServices} />
        </main>
        <Footer onNavigate={handleNavigate} onServiceClick={handleServiceClick} />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Services onServiceClick={handleServiceClick} showViewAllButton={true} onNavigate={handleNavigate} />
            <About showViewMoreButton={true} onNavigate={handleNavigate} />
            <Coverage showViewMoreButton={true} onNavigate={handleNavigate} />
            <Testimonials />
            <Contact />
          </>
        )}

        {currentPage === 'services' && (
          <>
            <div className="h-20"></div>
            <Services onServiceClick={handleServiceClick} />
          </>
        )}

        {currentPage === 'about' && (
          <>
            <div className="h-20"></div>
            <About />
          </>
        )}

        {currentPage === 'coverage' && (
          <>
            <div className="h-20"></div>
            <Coverage />
          </>
        )}

        {currentPage === 'contact' && (
          <>
            <div className="h-20"></div>
            <Contact />
          </>
        )}
      </main>

      <Footer onNavigate={handleNavigate} onServiceClick={handleServiceClick} />
      <WhatsAppButton />
    </>
  );
}

export default App;

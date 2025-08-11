import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import ImpressiveStats from './components/home/ImpressiveStats';
import AboutHero from './components/about/AboutHero';
import CompanyValues from './components/about/CompanyValues';
import SolutionGrid from './components/services/SolutionGrid';
import ServiceCTA from './components/services/ServiceCTA';
import Zalo from './components/contact/Zalo';
import FeaturedProjects from './components/projects/FeaturedProjects';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ImpressiveStats />
        <AboutHero />
        <CompanyValues />
      
        <Zalo /> 
        <SolutionGrid />
        <FeaturedProjects />
        <ServiceCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
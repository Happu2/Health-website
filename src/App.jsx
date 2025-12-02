import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import BestSellers from './components/BestSellers';
import TrustBadges from './components/TrustBadges';
import Charities from './components/Charities';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import HealthStory from './components/HealthStory';
import SupportSection from './components/SupportSection';

function App() {
  return (
    <div className="bg-white">
      <Header />
        <Hero />
      <Categories />
      <BestSellers />
      <TrustBadges />
      <HealthStory />
      <Charities />
      <Testimonials />
      <SupportSection/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

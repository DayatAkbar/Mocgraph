import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Archives from './components/Archives';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfilePopup from './components/ProfilePopup';

const App: React.FC = () => {
  return (
    <main className="relative bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Header />
      <Hero />
      <Services />
      <Work />
      <Archives />
      <Contact />
      <Footer />
      <ProfilePopup />
    </main>
  );
};

export default App;
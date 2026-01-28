
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Guide from './components/Guide';
import Plan from './components/Plan';
import CTASection from './components/CTASection';
import Success from './components/Success';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#D4E7D0] selection:text-[#11311F]">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Guide />
        <Plan />
        <CTASection />
        <Success />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;

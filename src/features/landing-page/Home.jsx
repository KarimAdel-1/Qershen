import { useRef } from 'react';
import Header from './Header';
import Hero from './Hero';
import LogoTicker from './LogoTicker';
import MutualFundsInfo from './MutualFundsInfo';
import HowItWorks from './HowItWorks';
import FAQs from './FAQs';
import Footer from './Footer';

import Features from './Features';

const Home = () => {
  const mutualFundsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const faqsRef = useRef(null);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  return (
    <main>
      <Header
        mutualFundsRef={mutualFundsRef}
        howItWorksRef={howItWorksRef}
        faqsRef={faqsRef}
        heroRef={heroRef}
        featuresRef={featuresRef}
      />
      <div ref={heroRef} id="hero">
        <Hero mutualFundsRef={mutualFundsRef} />
      </div>
      <div>
        <LogoTicker />
      </div>

      <div id="features" ref={featuresRef}>
        <Features />
      </div>

      <div ref={mutualFundsRef} id="mutual-funds" className="border">
        <MutualFundsInfo />
      </div>
      <div ref={howItWorksRef} id="how-it-works">
        <HowItWorks />
      </div>
      <div ref={faqsRef} id="faqs" className="border">
        <FAQs />
      </div>
      <Footer />
    </main>
  );
};

export default Home;

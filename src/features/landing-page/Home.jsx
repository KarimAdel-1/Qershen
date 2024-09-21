/* eslint-disable no-unused-vars */
import Header from './Header';
import Hero from './Hero';
import LogoTicker from './LogoTicker';
import MutualFundsInfo from './MutualFundsInfo';
import HowItWorks from './HowItWorks';

import FAQs from './FAQs';
import Footer from './Footer';
import Test from './Test';

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <LogoTicker />
      {/* <Test /> */}
      <MutualFundsInfo />

      <HowItWorks />

      {/* <Features /> */}
      <FAQs />
      <Footer />
    </main>
  );
};

export default Home;

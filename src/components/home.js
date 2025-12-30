import React from 'react';
import Hero from './home-components/hero';
import Features from './home-components/features';
import Work from './home-components/work';
import About from './home-components/about';
import FAQ from './home-components/faq';
import Contact from './home-components/contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Work />
      <About />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;

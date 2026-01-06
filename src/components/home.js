import React, { useEffect } from "react";
import Hero from "./home-components/hero";
import Features from "./home-components/features";
import Work from "./home-components/work";
import About from "./home-components/about";
import FAQ from "./home-components/faq";
import Contact from "./home-components/contact";

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="reveal">
        <Hero />
      </div>
      <div className="reveal">
        <Features />
      </div>
      <div className="reveal">
        <Work />
      </div>
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <FAQ />
      </div>
      <div className="reveal">
        <Contact />
      </div>
    </div>
  );
};

export default Home;

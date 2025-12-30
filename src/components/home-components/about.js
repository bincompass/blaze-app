import React, { Component } from 'react';
import homedata from '../../data/home.json';

class AboutIntro extends Component {
  render() {
    let content = homedata.aboutIntro;
    let publicUrl = process.env.PUBLIC_URL;

    return (
      <section id="about-us" className="pt100 pb100">
        <div className="container">
          <div className="about-container">
            <div className="about-left">
              <h2>Who We are</h2>
            </div>
            <div className="about-right bg-primary">
              <p>
                We create digital experience that captive audiences and drive
                measurable business groth for ambitious brands.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutIntro;

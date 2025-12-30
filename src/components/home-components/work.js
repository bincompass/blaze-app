import React, { Component } from 'react';

class Work extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL;

    const projects = [
      {
        title: 'Incompass',
        description:
          'Building a strong market presence from an early startup stage required clear brand positioning, high digital visibility, and effective lead generation in a competitive real estate market.',
        backText:
          'Blaze Media partnered with Incompass from its early stage to build the brand identity and establish a strong digital presence, implementing well-planned, performance-driven real estate marketing strategies.',
      },
      {
        title: 'CCI',
        description:
          "Strengthening CCI's position in the real estate resale market required a clear brand identity, strong digital visibility, and consistent generation of qualified leads in a competitive market.",
        backText:
          'Blaze Media partnered with CCI to build a strong brand identity and establish a solid digital presence, implementing well-planned, performance-driven marketing strategies tailored to the real estate resale market.',
      },
      {
        title: 'ENTURY CAPITAL',
        description:
          'A selection of our impactful projects that drive real resuults and transformations.',
        backText:
          'Blaze Media partnered with [ CAPITAL CENTAR ] to strengthen its position in the real estate resale market by building a clear brand identity and a strong digital presence. Through well-planned, performance-driven marketing strategies, the collaboration delivered increased market visibility, consistent online',
      },
      {
        title: 'AL MASA',
        description:
          "Strengthening AL MASA's position in the real estate resale market required a clear brand identity, strong digital visibility, and consistent generation of qualified leads.",
        backText:
          'Blaze Media developed performance-driven marketing strategies focused on building a strong digital presence, precise audience targeting, and optimized campaigns tailored to the resale real estate market.',
      },
      {
        title: 'JADER Real Estate',
        description:
          'Driving sales within a specific location required high market visibility, precise audience targeting, and effective lead generation in the competitive Sheikh Zayed real estate market.',
        backText:
          'Blaze Media managed performance-driven paid advertising campaigns focused exclusively on the Sheikh Zayed area, utilizing precise targeting, optimized creatives, and continuous campaign optimization.',
      },
      {
        title: 'Architects',
        description:
          'A selection of our impactful projects that drive real resuults and transformations.',
        backText:
          'Blaze Media partnered with [ARCHITECS], an IT company, to manage paid advertising campaigns with precise audience targeting. Through performance-driven marketing strategies, the campaigns achieved strong digital visibility, increased qualified leads, and measurable results in a competitive',
      },
    ];

    return (
      <section
        id="our-work"
        className="pt100 pb100"
        style={{ backgroundColor: 'rgb(48, 48, 48)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
              <div className="section-title text-center">
                <h2 style={{ color: '#ed4425' }}>Our Work</h2>
                <hr className="lines" />
                <p style={{ color: '#ffffff' }}>
                  A selection of projects that demonstrate how we turn strategy
                  into measurable results.
                </p>
              </div>
            </div>
          </div>

          <div className="work-grid">
            {projects.map((project, index) => (
              <div className="work-card" key={index}>
                <div className="work-card-inner">
                  <div className="work-card-front">
                    <img
                      src={
                        publicUrl +
                        '/assets/img/companies/company-' +
                        (index + 1) +
                        (index === 5 ? '.png' : '.jpg')
                      }
                      alt={project.title}
                      className="work-card-image"
                    />
                    <div className="work-card-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </div>
                  <div className="work-card-back">
                    <p>{project.backText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Work;

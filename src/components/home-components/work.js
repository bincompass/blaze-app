import React, { Component } from "react";
import homeData from "../../data/home.json";

class Work extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL;
    const { sectionHeading, projects } = homeData.work;

    return (
      <section
        id="our-portfolio"
        className="pt100 pb100"
        style={{ backgroundColor: "rgb(48, 48, 48)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
              <div className="section-title text-center">
                <h2 style={{ color: "#ed4425" }}>{sectionHeading.title}</h2>
                <hr className="lines" />
                <p style={{ color: "#ffffff" }}>{sectionHeading.desc}</p>
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
                        "/assets/img/companies/company-" +
                        (index + 1) +
                        (index === 5 || index === 2 ? ".png" : ".jpg")
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

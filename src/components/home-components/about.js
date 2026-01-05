import React, { Component } from "react";
import homedata from "../../data/home.json";

class AboutIntro extends Component {
  render() {
    let content = homedata.aboutIntro;

    return (
      <section id="about-us" className="pt100 pb100">
        <div className="container">
          <div className="about-container">
            <div className="about-left">
              <h2>{content.title}</h2>
            </div>
            <div className="about-right bg-primary">
              <p style={{ whiteSpace: "pre-line" }}>{content.desc}</p>
            </div>
          </div>

          <div className="row mt-5">
            {content.cards &&
              content.cards.map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6 mb-4">
                  <div
                    className="about-card p-4 h-100"
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: "20px",
                      border: "1px solid #333",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <h3
                      className="mb-3"
                      style={{
                        color: "#ed4425",
                        fontSize: "2.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "1.4rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default AboutIntro;

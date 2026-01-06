import React, { Component } from "react";
import homedata from "../../data/home.json";

class Features extends Component {
  render() {
    let factsInfo = homedata.features;
    let sectionHeadingInfo = factsInfo.sectionHeading;
    let featureContent = factsInfo.singleFeature;

    return (
      <section
        id="features"
        className="pt100 pb100"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
              <div className="section-title text-center mb60">
                <h2
                  dangerouslySetInnerHTML={{ __html: sectionHeadingInfo.title }}
                  style={{ color: "#ed4425" }}
                ></h2>
                <hr className="lines" />
                <p style={{ color: "#ffffff" }}>{sectionHeadingInfo.desc}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {featureContent.featurePart1.map((element, i) => {
              return (
                <div key={i} className="col-lg-4 col-md-6 mb-4">
                  <div
                    className="service-card"
                    style={{
                      backgroundColor: "#303030",
                      borderRadius: "15px",
                      padding: "30px",
                      height: "100%",
                      border: "1px solid #333",
                      display: "flex",
                      gap: "24px",
                      flexDirection: "column",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "inherit",
                      }}
                    >
                      <img
                        src={element.icon}
                        alt={element.title}
                        style={{
                          width: i === 0 ? "250px" : "200px",
                          height: "65px",
                          objectFit: "contain",
                          flexShrink: 0,
                          background: "transparent",
                          position: "relative",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                      }}
                    >
                      <p
                        className="service-card-text"
                        style={{
                          color: "#cccccc",
                          lineHeight: "1.6",
                          marginBottom: "20px",
                          flex: 1,
                        }}
                      >
                        {element.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Features;

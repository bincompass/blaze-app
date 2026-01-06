import React, { Component } from "react";
import Typed from "react-typed";
import homedata from "../../data/home.json";
import { HashLink as HLink } from "react-router-hash-link";

class Hero extends Component {
  render() {
    let getData = homedata.herov1;

    return (
      <section
        id="home"
        className="hero-section-fullscreen"
        style={{
          backgroundImage: `url(${getData.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        ></div>
        {/* Content container */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="hero-content hero-content-box">
                <h1
                  className="wow fadeInLeft"
                  data-wow-delay=".1s"
                >
                  <span className="hero-title-1">{getData.title}</span>
                  <span className="hero-title-2">{getData.title2}</span>
                  <span className="hero-title-3">
                    {getData.title3}{" "}
                    <Typed
                      strings={getData.titles}
                      typeSpeed={100}
                      backSpeed={50}
                      backDelay={2000}
                      loop
                      style={{ whiteSpace: "pre" }}
                    />
                  </span>
                </h1>
                <p className="hero-description">{getData.desc}</p>
              </div>
              <div className="hero-btn-wrapper">
                <HLink to={`/#contact`} className="primary-btn hero-btn">
                  {getData.button.btn1}
                </HLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;

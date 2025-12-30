import React, { Component } from 'react';
import homedata from '../../data/home.json';

class Hero extends Component {
  render() {
    let getData = homedata.herov1;

    return (
      <section
        id="home"
        className="hero-section-fullscreen"
        style={{
          backgroundImage: `url(${getData.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          }}
        ></div>
        {/* Content container */}
        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div
                className="hero-content"
                style={{
                  padding: '32px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  width: '100%',
                  marginBottom: '30px',
                }}
              >
                <h1 style={{ marginBottom: '25px' }}>
                  <span
                    style={{
                      color: '#ed4425',
                      fontSize: '5rem',
                      fontWeight: 'bold',
                      display: 'block',
                      lineHeight: '1',
                      marginBottom: '10px',
                    }}
                  >
                    {getData.title}
                  </span>
                  <span
                    style={{
                      fontWeight: 'bold',
                      color: '#ffffff',
                      fontSize: '4rem',
                      display: 'block',
                      lineHeight: '1.1',
                      marginBottom: '5px',
                    }}
                  >
                    ATTENTION
                  </span>
                  <span
                    style={{
                      fontWeight: 'normal',
                      color: '#ffffff',
                      fontSize: '3.2rem',
                      display: 'block',
                      lineHeight: '1.1',
                    }}
                  >
                    INTO MEASURABLE GROWTH
                  </span>
                </h1>
                <p
                  style={{
                    color: '#cccccc',
                    fontSize: '1.5rem',
                    lineHeight: '1.7',
                    marginBottom: '0',
                    maxWidth: '90%',
                  }}
                >
                  {getData.desc}
                </p>
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <a
                  href={getData.button.btnurl1}
                  className="primary-btn"
                  style={{
                    height: '40px',
                    borderRadius: '25px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    fontSize: '1.5rem',
                    lineHeight: '40px',
                    fontWeight: '500',
                  }}
                >
                  Let’s Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;

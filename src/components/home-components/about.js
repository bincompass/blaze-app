import React, { Component } from 'react';
import homedata from '../../data/home.json';

class AboutIntro extends Component {
  render() {
    let content = homedata.aboutIntro;
    let publicUrl = process.env.PUBLIC_URL;

    return (
      <section
        id="about-us"
        className="pt100 pb100"
        style={{
          backgroundColor: '#0a0a0a',
          backgroundImage: `url(${publicUrl}${content.bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            zIndex: 1,
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                style={{
                  textAlign: 'center',
                  padding: '60px 40px',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <h2
                  style={{
                    color: '#ed4425',
                    marginBottom: '30px',
                    fontSize: '42px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                  }}
                >
                  {content.title}
                </h2>
                <p
                  style={{
                    color: '#ffffff',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    marginBottom: '0',
                    maxWidth: '800px',
                    margin: '0 auto',
                  }}
                >
                  {content.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutIntro;

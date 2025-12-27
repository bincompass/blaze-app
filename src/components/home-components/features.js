import React, { Component } from 'react';
import homedata from '../../data/home.json';

class Features extends Component {
  render() {
    let factsInfo = homedata.features;
    let sectionHeadingInfo = factsInfo.sectionHeading;
    let featureContent = factsInfo.singleFeature;

    return (
      <section
        id="features"
        className="pt100 pb100"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
              <div className="section-title text-center mb60">
                <h2
                  dangerouslySetInnerHTML={{ __html: sectionHeadingInfo.title }}
                  style={{ color: '#ed4425' }}
                ></h2>
                <hr className="lines" />
                <p style={{ color: '#ffffff' }}>{sectionHeadingInfo.desc}</p>
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
                      backgroundColor: '#303030',
                      borderRadius: '15px',
                      padding: '30px',
                      height: '100%',
                      border: '1px solid #333',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px',
                      }}
                    >
                      <img
                        src={element.icon}
                        alt={element.title}
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'contain',
                          flexShrink: 0,
                          background: 'transparent',
                          position: 'relative',
                          left: element.title === 'Lead Generation' ? '-14px' : '-9px',
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4
                          style={{
                            color: '#ffffff',
                            marginBottom: '0',
                            fontSize: '20px',
                            fontWeight: '600',
                            marginTop: '0',
                          }}
                          dangerouslySetInnerHTML={{
                            __html: element.title.replace(' ', '<br />'),
                          }}
                        ></h4>
                      </div>
                    </div>
                    <p
                      style={{
                        color: '#cccccc',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        textAlign: 'left',
                      }}
                    >
                      {element.desc}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <a
                        href={element.btnUrl}
                        className="primary-btn"
                        style={{
                          height: '35px',
                          borderRadius: '20px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingLeft: '25px',
                          paddingRight: '25px',
                          fontSize: '13px',
                          lineHeight: '35px',
                          fontWeight: '500',
                          textDecoration: 'none',
                          width: 'fit-content',
                        }}
                      >
                        {element.btnText}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            {featureContent.featurePart2.map((element, i) => {
              return (
                <div key={`part2-${i}`} className="col-lg-4 col-md-6 mb-4">
                  <div
                    className="service-card"
                    style={{
                      backgroundColor: '#303030',
                      borderRadius: '15px',
                      padding: '30px',
                      height: '100%',
                      border: '1px solid #333',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px',
                      }}
                    >
                      <img
                        src={element.icon}
                        alt={element.title}
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'contain',
                          flexShrink: 0,
                          background: 'transparent',
                          position: 'relative',
                          left: '-9px',
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4
                          style={{
                            color: '#ffffff',
                            marginBottom: '0',
                            fontSize: '20px',
                            fontWeight: '600',
                            marginTop: '0',
                          }}
                          dangerouslySetInnerHTML={{
                            __html: element.title.replace(' ', '<br />'),
                          }}
                        ></h4>
                      </div>
                    </div>
                    <p
                      style={{
                        color: '#cccccc',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        textAlign: 'left',
                      }}
                    >
                      {element.desc}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <a
                        href={element.btnUrl}
                        className="primary-btn"
                        style={{
                          height: '35px',
                          borderRadius: '20px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingLeft: '25px',
                          paddingRight: '25px',
                          fontSize: '13px',
                          lineHeight: '35px',
                          fontWeight: '500',
                          textDecoration: 'none',
                          width: 'fit-content',
                        }}
                      >
                        {element.btnText}
                      </a>
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

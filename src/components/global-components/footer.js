import React, { Component } from 'react';
import FooterData from '../../data/footerdata';

class Footer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL;

    return (
      <footer
        id="footer-section"
        style={{
          backgroundColor: '#131313',
          padding: '40px 0 20px 0',
        }}
      >
        <div className="container">
          {/* Main footer content */}
          <div className="row" style={{ marginBottom: '30px' }}>
            {/* Left side - Logo and Social Media */}
            <div className="col-lg-6">
              <div
                className="footer-logo"
                style={{
                  marginBottom: '40px',
                  position: 'relative',
                  left: '-10px',
                }}
              >
                <a href="/">
                  <img
                    src={publicUrl + '/assets/img/logo.png'}
                    alt="BLAZE MEDIA"
                    style={{
                      height: '40px',
                      objectFit: 'contain',
                    }}
                  />
                </a>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <span
                  style={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: '500',
                    display: 'block',
                  }}
                >
                  Follow us on
                </span>
              </div>

              <div className="social-icons">
                <ul
                  style={{
                    display: 'flex',
                    margin: '0',
                    padding: '0',
                    listStyle: 'none',
                  }}
                >
                  {FooterData.socialicon.map(function (data, i) {
                    return (
                      <li key={i} style={{ marginRight: '15px' }}>
                        <a
                          href={data.url}
                          style={{
                            display: 'inline-block',
                            width: '40px',
                            height: '40px',
                            backgroundColor: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '8px',
                            color: '#ffffff',
                            textAlign: 'center',
                            lineHeight: '38px',
                            fontSize: '16px',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#ed4425';
                            e.currentTarget.style.borderColor = '#ed4425';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              'transparent';
                            e.currentTarget.style.borderColor =
                              'rgba(255, 255, 255, 0.3)';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                        >
                          <i className={data.icon}></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Right side - Navigation Links */}
            <div className="col-lg-6">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  height: '100%',
                }}
              >
                <div className="footer-nav">
                  <ul
                    style={{
                      listStyle: 'none',
                      margin: '0',
                      padding: '0',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '30px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <li>
                      <a
                        href="#home"
                        style={{
                          color: '#ffffff',
                          fontSize: '16px',
                          textDecoration: 'none',
                          fontWeight: '400',
                          transition: 'color 0.3s ease',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#ed4425';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#ffffff';
                        }}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#features"
                        style={{
                          color: '#ffffff',
                          fontSize: '16px',
                          textDecoration: 'none',
                          fontWeight: '400',
                          transition: 'color 0.3s ease',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#ed4425';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#ffffff';
                        }}
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about"
                        style={{
                          color: '#ffffff',
                          fontSize: '16px',
                          textDecoration: 'none',
                          fontWeight: '400',
                          transition: 'color 0.3s ease',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#ed4425';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#ffffff';
                        }}
                      >
                        Work
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about-us"
                        style={{
                          color: '#ffffff',
                          fontSize: '16px',
                          textDecoration: 'none',
                          fontWeight: '400',
                          transition: 'color 0.3s ease',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#ed4425';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#ffffff';
                        }}
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        style={{
                          color: '#ffffff',
                          fontSize: '16px',
                          textDecoration: 'none',
                          fontWeight: '400',
                          transition: 'color 0.3s ease',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#ed4425';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#ffffff';
                        }}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Border line */}
          <div
            style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              marginBottom: '20px',
            }}
          ></div>

          {/* Copyright section */}
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  textAlign: 'center',
                  color: '#cccccc',
                  fontSize: '14px',
                }}
                dangerouslySetInnerHTML={{ __html: FooterData.copyrighttext }}
              ></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

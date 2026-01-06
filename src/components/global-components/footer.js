import React, { Component } from "react";
import FooterData from "../../data/footerdata";

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
          backgroundColor: "#131313",
          padding: "40px 0 20px 0",
        }}
      >
        <div className="container">
          {/* Main footer content */}
          <div className="row" style={{ marginBottom: "30px" }}>
            {/* Left side - Logo and Social Media */}
            <div
              className="col-12"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                className="footer-logo"
                style={{
                  position: "relative",
                  left: "-10px",
                }}
              >
                <a href="/">
                  <img
                    src={publicUrl + "/assets/img/logo.png"}
                    alt="BLAZE MEDIA"
                    style={{
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                </a>
              </div>

              <div className="social-icons">
                <ul
                  style={{
                    display: "flex",
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                  }}
                >
                  {FooterData.socialicon.map(function (data, i) {
                    return (
                      <li key={i} style={{ marginRight: "15px" }}>
                        <a
                          href={data.url}
                          target="_blank"
                          style={{
                            display: "inline-block",
                            width: "40px",
                            height: "40px",
                            backgroundColor: "transparent",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "8px",
                            color: "#ffffff",
                            textAlign: "center",
                            lineHeight: "38px",
                            fontSize: "16px",
                            transition: "all 0.3s ease",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#ed4425";
                            e.currentTarget.style.borderColor = "#ed4425";
                            e.currentTarget.style.color = "#ffffff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.borderColor =
                              "rgba(255, 255, 255, 0.3)";
                            e.currentTarget.style.color = "#ffffff";
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
          </div>

          {/* Border line */}
          <div
            style={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              marginBottom: "20px",
            }}
          ></div>

          {/* Copyright section */}
          <div className="row">
            <div
              className="col-12"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                color: "#cccccc",
                fontSize: "14px",
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: FooterData.copyrighttext }}
              ></div>
              <div>
                Maintained and powered by{" "}
                <a
                  href="https://architechs.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ed4425",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  architechs
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

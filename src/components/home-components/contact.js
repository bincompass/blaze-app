import React, { Component } from "react";
import homedata from "../../data/home.json";

class Contact extends Component {
  render() {
    let contactInfo = homedata.contact;
    let leftSection = contactInfo.leftSection;
    let formSection = contactInfo.form;

    return (
      <section
        id="contact"
        style={{
          backgroundColor: "rgb(48, 48, 48)",
          padding: "24px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 px-b">
              <div
                style={{
                  padding: "40px 0",
                }}
              >
                <h2
                  className="contact-heading"
                  style={{
                    color: "#ed4425",
                    marginBottom: "0",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    letterSpacing: "2px",
                  }}
                >
                  {leftSection.title}
                </h2>
                <h3
                  className="contact-subtitle"
                  style={{
                    color: "#ffffff",
                    fontWeight: "600",
                    lineHeight: "1.3",
                  }}
                >
                  {leftSection.subtitle}
                </h3>
                <p
                  style={{
                    color: "rgb(204, 204, 204)",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    marginBottom: "0",
                  }}
                >
                  {leftSection.desc}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                style={{
                  backgroundColor: "rgb(19, 19, 19)",
                  border: "none",
                  borderRadius: "15px",
                  padding: "24px",
                }}
              >
                <form
                  id="contact-form"
                  action="https://formspree.io/f/xzdpoage"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label
                        htmlFor="contact-name"
                        style={{
                          color: "#ed4425",
                          fontWeight: "600",
                          marginBottom: "8px",
                          display: "block",
                        }}
                      >
                        Name
                      </label>
                      <input
                        name="name"
                        className="form-control"
                        id="contact-name"
                        type="text"
                        placeholder="Your Name"
                        required
                        minLength="2"
                        maxLength="50"
                        pattern="[a-zA-Z\s]+"
                        title="Please enter a valid name (letters and spaces only)"
                        style={{
                          backgroundColor: "rgb(19, 19, 19)",
                          border: "1px solid #ffffff",
                          borderRadius: "8px",
                          padding: "15px",
                          color: "#ffffff",
                          fontSize: "16px",
                          marginBottom: "20px",
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="contact-email"
                        style={{
                          color: "#ed4425",
                          fontWeight: "600",
                          marginBottom: "8px",
                          display: "block",
                        }}
                      >
                        Email
                      </label>
                      <input
                        name="email"
                        className="form-control"
                        id="contact-email"
                        type="email"
                        placeholder="Your Email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                        style={{
                          backgroundColor: "rgb(19, 19, 19)",
                          border: "1px solid #ffffff",
                          borderRadius: "8px",
                          padding: "15px",
                          color: "#ffffff",
                          fontSize: "16px",
                          marginBottom: "20px",
                        }}
                      />
                    </div>
                    <div className="col-sm-12">
                      <label
                        htmlFor="contact-subject"
                        style={{
                          color: "#ed4425",
                          fontWeight: "600",
                          marginBottom: "8px",
                          display: "block",
                        }}
                      >
                        Subject
                      </label>
                      <input
                        name="subject"
                        className="form-control"
                        id="contact-subject"
                        type="text"
                        placeholder="Subject"
                        required
                        minLength="3"
                        maxLength="100"
                        title="Please enter a subject (3-100 characters)"
                        style={{
                          backgroundColor: "rgb(19, 19, 19)",
                          border: "1px solid #ffffff",
                          borderRadius: "8px",
                          padding: "15px",
                          color: "#ffffff",
                          fontSize: "16px",
                          marginBottom: "20px",
                        }}
                      />
                    </div>
                    <div className="col-sm-12">
                      <label
                        htmlFor="contact-message"
                        style={{
                          color: "#ed4425",
                          fontWeight: "600",
                          marginBottom: "8px",
                          display: "block",
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="contact-message"
                        placeholder="Your Message"
                        required
                        minLength="10"
                        maxLength="1000"
                        rows="5"
                        title="Please enter your message (10-1000 characters)"
                        style={{
                          backgroundColor: "rgb(19, 19, 19)",
                          border: "1px solid #ffffff",
                          borderRadius: "8px",
                          padding: "15px",
                          color: "#ffffff",
                          fontSize: "16px",
                          marginBottom: "30px",
                          resize: "vertical",
                        }}
                      ></textarea>
                    </div>
                    <div className="col-sm-12" style={{ textAlign: "center" }}>
                      <button
                        type="submit"
                        className="primary-btn"
                        style={{
                          width: "100%",
                          padding: "15px 30px",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>{" "}
                        {formSection.submitBtnLabel}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

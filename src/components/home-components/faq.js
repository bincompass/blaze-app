import React, { Component } from 'react';
import homedata from '../../data/home.json';

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0, // First FAQ is open by default
    };
  }

  toggleAccordion = (index, event) => {
    // Prevent the default Bootstrap behavior to manage it ourselves
    event.preventDefault();

    const newActiveIndex = this.state.activeIndex === index ? -1 : index;

    // Handle the collapse/expand with proper transitions
    const collapseElement = document.getElementById(`faqCollapse${index}`);
    if (collapseElement) {
      if (this.state.activeIndex === index) {
        // Currently open, so close it
        collapseElement.classList.remove('show');
        collapseElement.classList.add('collapsing');
        setTimeout(() => {
          collapseElement.classList.remove('collapsing');
        }, 350); // Bootstrap's default transition time
      } else {
        // Currently closed, so open it
        // First close any open accordion
        const currentOpen = document.getElementById(
          `faqCollapse${this.state.activeIndex}`
        );
        if (currentOpen && this.state.activeIndex !== -1) {
          currentOpen.classList.remove('show');
          currentOpen.classList.add('collapsing');
          setTimeout(() => {
            currentOpen.classList.remove('collapsing');
          }, 350);
        }

        // Then open the new one
        collapseElement.classList.add('collapsing');
        setTimeout(() => {
          collapseElement.classList.remove('collapsing');
          collapseElement.classList.add('show');
        }, 10);
      }
    }

    this.setState({
      activeIndex: newActiveIndex,
    });
  };

  render() {
    let getAccordion = homedata.accordion;
    let getSectionHeading = getAccordion.sectionHeading;
    let getAccordionContent = getAccordion.accordionContent;
    let publicUrl = process.env.PUBLIC_URL;

    return (
      <section
        id="faq"
        className="pt100 pb100"
        style={{ backgroundColor: 'rgb(19, 19, 19)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
              <div className="section-title text-center mb60">
                <h2
                  dangerouslySetInnerHTML={{ __html: getSectionHeading.title }}
                  style={{ color: '#ed4425' }}
                ></h2>
                <hr className="lines" />
                <p style={{ color: '#ffffff' }}>{getSectionHeading.desc}</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7 md-m-30px-b">
              <div className="mb30">
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '28px',
                    fontWeight: '600',
                    marginBottom: '20px',
                  }}
                >
                  {getAccordion.title}
                </h3>
              </div>
              <div id="faq-accordion">
                {getAccordionContent.map((element, i) => {
                  let active = 'false',
                    show = '';

                  const isActive = this.state.activeIndex === i;
                  if (isActive) {
                    active = 'true';
                    show = ' show';
                  }
                  return (
                    <div
                      key={i}
                      className="card mb15"
                      style={{
                        border: '1px solid #333',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        backgroundColor: '#181818',
                      }}
                    >
                      <div
                        className="card-header"
                        id={`faqHeading${i}`}
                        style={{
                          backgroundColor: '#181818',
                          borderBottom: '1px solid #333',
                          padding: '0',
                        }}
                      >
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link w-100 d-flex justify-content-between align-items-center collapsed"
                            data-toggle="collapse"
                            data-target={`#faqCollapse${i}`}
                            aria-expanded={active}
                            aria-controls={`faqCollapse${i}`}
                            onClick={(event) => this.toggleAccordion(i, event)}
                            style={{
                              color: '#ffffff',
                              textDecoration: 'none',
                              fontSize: '16px',
                              fontWeight: '600',
                              padding: '20px 25px',
                              border: 'none',
                              borderRadius: '0',
                              textAlign: 'left',
                            }}
                          >
                            <span>{element.title}</span>
                            <i
                              className={`fa fa-chevron-${
                                isActive ? 'up' : 'down'
                              }`}
                              style={{
                                color: '#ed4425',
                                transition: 'transform 0.3s ease',
                              }}
                            ></i>
                          </button>
                        </h5>
                      </div>

                      <div
                        id={`faqCollapse${i}`}
                        className={`collapse${show}`}
                        aria-labelledby={`faqHeading${i}`}
                        data-parent="#faq-accordion"
                        style={{
                          transition: 'height 0.35s ease',
                        }}
                      >
                        <div
                          className="card-body"
                          style={{
                            padding: '20px 25px',
                            backgroundColor: '#0f0f0f',
                            color: '#cccccc',
                            lineHeight: '1.6',
                            borderTop: '1px solid #333',
                          }}
                        >
                          {element.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img
                src={publicUrl + getAccordion.image}
                alt="FAQ"
                style={{
                  height: '350px',
                  objectFit: 'cover',
                  maxWidth: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FAQ;

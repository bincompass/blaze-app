import React, { Component } from 'react';
import homedata from '../../data/home.json';

class Contact extends Component {
    render() {

        let contactInfo = homedata.contact
        let leftSection = contactInfo.leftSection
        let formSection = contactInfo.form
        let publicUrl = process.env.PUBLIC_URL

        return <section id="contact" className="pt100 pb100" style={{
            backgroundColor: 'rgba(10, 10, 10, 0.8)'
        }}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 md-m-50px-b">
                    <div style={{
                        padding: '40px 0'
                    }}>
                        <h2 style={{
                            color: '#ed4425',
                            marginBottom: '20px',
                            fontSize: '42px',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>{leftSection.title}</h2>
                        <h3 style={{
                            color: '#ffffff',
                            marginBottom: '30px',
                            fontSize: '32px',
                            fontWeight: '600',
                            lineHeight: '1.3'
                        }}>{leftSection.subtitle}</h3>
                        <p style={{
                            color: '#cccccc',
                            fontSize: '18px',
                            lineHeight: '1.8',
                            marginBottom: '0'
                        }}>
                            {leftSection.desc}
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '15px',
                        padding: '40px'
                    }}>
                        <h4 style={{
                            color: '#ffffff',
                            marginBottom: '30px',
                            fontSize: '24px',
                            fontWeight: '600',
                            textAlign: 'center'
                        }}>{formSection.title}</h4>
                        <form id="contact-form" method="post" action={`#`}>
                            <div className="message col-lg-12">
                                <p className="email-loading"><img src={`${publicUrl}/assets/img/loading.gif`} alt="loading" />&nbsp;&nbsp;&nbsp;Sending...</p>
                                <p className="email-success"><i className="icon fa fa-check"></i> Your message has successfully been sent.</p>
                                <p className="email-failed"><i className="icon fa fa-times"></i> Something went wrong!</p>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <input 
                                        name="name" 
                                        className="form-control" 
                                        id="contact-name" 
                                        type="text" 
                                        placeholder="Your Name" 
                                        required="" 
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '8px',
                                            padding: '15px',
                                            color: '#ffffff',
                                            fontSize: '16px',
                                            marginBottom: '20px'
                                        }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input 
                                        name="email" 
                                        className="form-control" 
                                        id="contact-email" 
                                        type="email" 
                                        placeholder="Your Email" 
                                        required="" 
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '8px',
                                            padding: '15px',
                                            color: '#ffffff',
                                            fontSize: '16px',
                                            marginBottom: '20px'
                                        }}
                                    />
                                </div>
                                <div className="col-sm-12">
                                    <input 
                                        name="subject" 
                                        className="form-control" 
                                        id="contact-subject" 
                                        type="text" 
                                        placeholder="Subject" 
                                        required="" 
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '8px',
                                            padding: '15px',
                                            color: '#ffffff',
                                            fontSize: '16px',
                                            marginBottom: '20px'
                                        }}
                                    />
                                </div>
                                <div className="col-sm-12">
                                    <textarea 
                                        name="message" 
                                        className="form-control" 
                                        id="contact-message" 
                                        placeholder="Your Message" 
                                        required=""
                                        rows="5"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '8px',
                                            padding: '15px',
                                            color: '#ffffff',
                                            fontSize: '16px',
                                            marginBottom: '30px',
                                            resize: 'vertical'
                                        }}
                                    ></textarea>
                                </div>
                                <div className="col-sm-12" style={{textAlign: 'center'}}>
                                    <button className="primary-btn" style={{
                                        width: '100%',
                                        padding: '15px 30px',
                                        fontSize: '16px',
                                        fontWeight: '600'
                                    }}>
                                        <i className="fa fa-paper-plane" aria-hidden="true"></i> {formSection.submitBtnLabel}
                                    </button>
                                </div>
                            </div>          
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    }
}


export default Contact

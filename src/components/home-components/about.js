import React, { Component } from 'react';
import homedata from '../../data/home.json';

class About extends Component {
    render() {

        let aboutContent = homedata.about
        let sectionHeadingInfo = aboutContent.sectionHeading
        let projectsInfo = aboutContent.projects
        let publicUrl = process.env.PUBLIC_URL
        
        return <section id="about" className="pt100 pb100" style={{backgroundColor: '#131313'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
                    <div className="section-title text-center mb60">
                        <h2 dangerouslySetInnerHTML={{__html: sectionHeadingInfo.title}} style={{color: '#ed4425'}}></h2>
                        <hr className="lines"/>
                        <p style={{color: '#ffffff'}}>{sectionHeadingInfo.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    projectsInfo.map( ( project, i ) => {
                        return(
                            <div key={i} className="col-lg-4 col-md-6 mb-4">
                                <div className="project-card" style={{
                                    backgroundColor: '#413f40',
                                    borderRadius: '15px',
                                    padding: '0',
                                    height: '100%',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    margin: '15px 0'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ed4425';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    const paragraph = e.currentTarget.querySelector('p');
                                    if (paragraph) paragraph.style.color = '#ffffff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#413f40';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    const paragraph = e.currentTarget.querySelector('p');
                                    if (paragraph) paragraph.style.color = '#cccccc';
                                }}>
                                    <div className="project-image" style={{
                                        width: '100%',
                                        height: '200px',
                                        overflow: 'hidden',
                                        borderRadius: '15px 15px 0 0'
                                    }}>
                                        <img 
                                            src={publicUrl + project.image} 
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '15px 15px 0 0'
                                            }}
                                        />
                                    </div>
                                    <div className="project-content" style={{
                                        padding: '25px'
                                    }}>
                                        <h4 style={{
                                            color: '#ffffff',
                                            marginBottom: '15px',
                                            fontSize: '18px',
                                            fontWeight: '600'
                                        }}>{project.title}</h4>
                                        <p style={{
                                            color: '#cccccc',
                                            lineHeight: '1.6',
                                            fontSize: '14px',
                                            marginBottom: '0'
                                        }}>{project.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    </section>
    }
}


export default About

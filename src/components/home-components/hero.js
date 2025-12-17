import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import homedata from '../../data/home.json';
import Typed from 'react-typed';

class Hero extends Component {

    render () {
        let getData = homedata.herov1
        let publicUrl = process.env.PUBLIC_URL

        return (
        <section id="home" className="text-left hero-section-1">
            <Container>
                <Row className="full-height align-items-center">
                    <div className="hero-content col-lg-6 p-100px-t p-50px-b md-p-10px-b">
                        <h1 className="m-30px-b">
                            <span style={{color: '#ed4425'}}>{getData.title}</span><br/>
                            <span style={{fontWeight: 'bold', color: '#ffffff'}}>YOUR BRAND WITH</span><br/>
                            <span style={{fontWeight: 'normal', color: '#ffffff', fontSize: '0.85em'}}>CUTTING-EDGE MARKETING</span>
                        </h1>
                        <p className="m-50px-b md-m-30px-b" style={{color: '#ffffff'}}>
                            {getData.desc}
                        </p>
                    <div>
                </div>
                        <a href={getData.button.btnurl1} className="primary-btn">Read More</a>
                    </div>
                    <div className="hero-image col-lg-6 p-100px-t p-50px-b md-p-10px-t">
                        <img className="img-fluid" src={publicUrl+getData.img} alt={getData.title} />
                    </div>
                </Row>
            </Container>

        </section>
    )
    }
}


export default Hero

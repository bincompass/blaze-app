import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/global-components/navbar';
import Home from './components/home';
import Footer from './components/global-components/footer';
import ScrollToTop from './components/global-components/test';

class Root extends Component {
    render() {
        return(
            <Router>
                <div>
                <Navbar />
                <ScrollToTop />
                <Route exact path="/" component={Home} />
                <Footer />
                </div>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('blazeapp'));

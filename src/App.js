import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import About from './Components/AboutComponent';
import { FEATURES } from './Shared/features';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: FEATURES
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">GrapeVine</NavbarBrand>
                    </div>
                </Navbar>
                <About features={this.state.features} />
            </div>
        );
    }
}

export default App;
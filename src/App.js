import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import About from './Components/AboutComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">GrapeVine</NavbarBrand>
                    </div>
                </Navbar>
                <About />
            </div>
        );
    }
}

export default App;

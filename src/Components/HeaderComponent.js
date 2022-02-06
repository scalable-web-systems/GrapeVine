import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">GrapeVine</NavbarBrand>
                    </div>
                </Navbar>
                <div className="bg-light p-5 rounded-lg">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>GrapeVine</h1>
                                <p>We heard through the grapevine that you needed a new place to socialize. Here, you can meet with old friends, connect with new people, and talk about life!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
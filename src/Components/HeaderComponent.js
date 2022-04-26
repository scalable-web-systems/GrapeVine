// Pre-login constant: contains navigation tools and login/signup modals
// import React: makes use of basic react jsx syntax
// import Component: allows for declaration of react-based classes

import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    // isNavOpen: boolean to determine if the navbar is collapsed
    // isLoginModalOpen: boolean to determine if the login modal is open
    // isSignUpModalOpen: boolean to determine if the signup modal is open
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isLoginModalOpen: false,
            isSignUpModalOpen: false
        };
        // using a bind function allows the state to retain data changes when a function is passed to another component (in this case several)
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    // change the state of navbar toggle when this method is called
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    // change the state of login modal toggle when this method is called
    toggleLoginModal() {
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen
        });
    }

    // change the state of signup modal toggle when this method is called
    toggleSignUpModal() {
        this.setState({
            isSignUpModalOpen: !this.state.isSignUpModalOpen
        });
    }
    // event handler: updates state when login is submitted (also toggles isLoggedIn from MainComponent)
    handleLogin(event) {
        this.toggleLoginModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        this.props.isLoggedIn();
        event.preventDefault();
    }

    // event handler: updates state when signup is submitted
    handleSignUp(event) {
        this.toggleSignUpModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    // render Navbar, Login/SignUp buttons and modals, and logo
    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/grapes.png' height="30" width="41" alt='GrapeVine' /> GrapeVine</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <Nav className="mr-auto" style={{ display: 'flex', justifyContent: 'right' }} navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleLoginModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                            <NavItem>
                                <Button outline onClick={this.toggleSignUpModal}><span className="fa fa-star fa-lg"></span> Sign Up</Button>
                            </NavItem>
                        </Nav>
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
                <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal}>
                    <ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isSignUpModalOpen} toggle={this.toggleSignUpModal}>
                    <ModalHeader toggle={this.toggleSignUpModal}>Sign Up</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignUp}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Sign Up</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;
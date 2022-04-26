// Post-login constant: contains navigation tools and logout modal
// import React: makes use of basic react jsx syntax
// import Component: allows for declaration of react-based classes
import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    // isNavOpen: boolean to determine if the navbar is collapsed
    // isLogoutModalOpen: boolean to determine if the logout modal is open
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isLogoutModalOpen: false
        };

        // using a bind function allows the state to retain data changes when a function is passed to another component (in this case several)
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLogoutModal = this.toggleLogoutModal.bind(this);

        // place holder bind: will be used for joining new groups later on
        this.handleLogin = this.handleLogin.bind(this);
    }

    // change the state of navbar toggle when this method is called
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    // change the state of logout modal toggle when this method is called
    toggleLogoutModal() {
        this.setState({
            isLogoutModalOpen: !this.state.isLogoutModalOpen
        });
    }

    // placeholder event handler: will be used for joining new groups
    handleLogin(event) {
        this.toggleLogoutModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        this.props.isLoggedIn();
        event.preventDefault();
    }

    // render side navbar and logout button
    render() {
        return (
            <div className="navbar-mark">
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <u1 className="nav-item-wrapper">
                                    <NavItem>
                                        <NavLink className="nav-link" to='/main'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/group-1'><img src={this.props.groups.filter((group) => group.id === 0)[0]} /></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/group-2'><span className="fa fa-info fa-lg"></span> Group 2</NavLink>
                                    </NavItem>
                                </u1>
                            </Nav>
                        </Collapse>
                        <Nav className="mr-auto" navbar>
                            <u1 className="nav-item-wrapper">
                                <NavItem>
                                    <Button outline onClick={this.toggleLogoutModal}><span className="fa fa-sign-in fa-lg"></span> Logout</Button>
                                </NavItem>
                            </u1>
                        </Nav>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isLogoutModalOpen} toggle={this.toggleLogoutModal}>
                    <ModalHeader toggle={this.toggleLogoutModal}>Logout</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <Button type="submit" value="submit" color="primary">Logout</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;
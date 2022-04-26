import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, Media } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isLogoutModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLogoutModal = this.toggleLogoutModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleLogoutModal() {
        this.setState({
            isLogoutModalOpen: !this.state.isLogoutModalOpen
        });
    }

    handleLogin(event) {
        this.toggleLogoutModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        this.props.isLoggedIn();
        event.preventDefault();
    }

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
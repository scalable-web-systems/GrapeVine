import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
/*import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';*/

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>Hello</CardTitle>
                    <CardText>This is text</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default Main;
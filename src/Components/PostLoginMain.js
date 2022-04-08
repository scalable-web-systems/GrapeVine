import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Header from './LoginNavComponent';
import { Home } from './LoginHomeComponent';
import { GROUPS } from '../Shared/groups';
/*import Header from './HeaderComponent';
import Footer from './FooterComponent';*/

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: GROUPS
        };
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="col-12 col-md m-1">
                        <Card>
                            <CardBody>
                                <CardTitle>{this.state.groups[0].name}</CardTitle>
                                <CardText>{this.state.groups[0].description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Routes>
                    <Route path='/main' />
                    <Route path="*" element={<Navigate to="/main" />} />
                </Routes>
            </div>

        );
    }
}

export default Main;
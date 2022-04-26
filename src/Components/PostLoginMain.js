import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';
import { Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Header from './LoginNavComponent';
import LoginHome from './LoginHomeComponent';
import Group from './LoginGroupPage';
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
                <Header groups={this.state.groups} />
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
                    <Route path='/main' element={<LoginHome group={this.state.groups.filter((group) => group.id === 0)[0]} />} />
                    <Route path='/group-1' element={<Group />} />
                    <Route path='/group-2' element={<Group />} />
                    <Route path="*" element={<Navigate to="/main" />} />
                </Routes>
            </div>

        );
    }
}

export default Main;
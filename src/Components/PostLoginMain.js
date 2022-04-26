// Focal point of post-login application: controls main workflow of the page rendering depending on user interaction
// import React: makes use of basic react jsx syntax
// import Component: allows for declaration of react-based classes

// import Routes: switch statement for route creation
// import Route: represents a case in the routes switch statement. Each route will link to a different render
// import Navigate: automatically routes to a location regardless of user input
import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { Routes, Route, Navigate } from 'react-router-dom';

// import supporting local files
import Header from './LoginNavComponent';
import LoginHome from './LoginHomeComponent';
import Group from './LoginGroupPage';
import { GROUPS } from '../Shared/groups';

class Main extends Component {
    // groups: state property containing data from the groups list
    constructor(props) {
        super(props);
        this.state = {
            groups: GROUPS
        };
    }

    // render the post-login application
    // keeps header at left by default
    // main route: goes to LoginHomeComponent
    // group-1 route: goes to LoginGroupPage
    // group-2 route: goes to LoginGroupPage
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
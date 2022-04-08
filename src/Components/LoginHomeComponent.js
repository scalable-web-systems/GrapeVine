import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class LoginHome extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return (
            <div className="container">
                <div className="col-12 col-md m-1">
                    <Card>
                        <CardImg src={this.props.group.image} alt={this.props.group.name} />
                        <CardBody>
                            <CardTitle>{this.props.group.name}</CardTitle>
                            <CardText>{this.props.group.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default LoginHome;
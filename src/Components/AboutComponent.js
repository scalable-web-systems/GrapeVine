import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFeature: null
        };
    }

    onFeatureSelect(feature) {
        this.setState({ selectedFeature: feature });
    }

    renderFeature(feature) {
        if (feature != null)
            return (
                <Card>
                    <CardImg top src={feature.image} alt={feature.name} />
                    <CardBody>
                        <CardTitle>{feature.name}</CardTitle>
                        <CardText>{feature.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const featuresPlace = this.props.features.map((feature) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={feature.id}
                        onClick={() => this.onFeatureSelect(feature)}>
                        <CardImg width="10%" src={feature.image} alt={feature.name} />
                        <CardTitle>{feature.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {featuresPlace}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderFeature(this.state.selectedFeature)}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
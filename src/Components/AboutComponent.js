import React from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';

function RenderFeature({ feature, onClick }) {
    return (
        <Card>
            <CardImg width="100%" src={feature.image} alt={feature.name} />
            <CardTitle>{feature.name}</CardTitle>
            <CardText>{feature.description}</CardText>
        </Card>
    );
}

const About = (props) => {

    const featuresPlace = props.features.map((feature) => {
        return (
            <div className="col-12 col-md-5 m-1" key={feature.id}>
                <RenderFeature feature={feature} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {featuresPlace}
            </div>
        </div>
    );
}

export default About;
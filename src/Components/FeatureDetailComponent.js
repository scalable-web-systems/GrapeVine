import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderFeature({ feature }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={feature.image} alt={feature.name} />
                <CardBody>
                    <CardTitle>{feature.name}</CardTitle>
                    <CardText>{feature.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const FeatureDetail = (props) => {
    if (props.feature != null)
        return (
            <div className="container">
                <RenderFeature feature={props.feature} />
            </div>
        );
    else
        return (
            <div></div>
        );
}

export default FeatureDetail;
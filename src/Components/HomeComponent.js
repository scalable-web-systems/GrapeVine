// Default route of pre-login application: contains basic introductory info
// import React: makes use of basic react jsx syntax
// import Card: allows for creation of card-style component
// import CardImg: displays provided image within Card
// import CardText: displays provided text within Card body
// import CardBody: structural division; distinguishes media from main text body of Card
// import CardTitle: displays provided title within Card body
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// uses provided item information (image, name, and description) to create a formatted Card component
function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

// creates component structure to support Card within application
function Home(props) {
    return (
        <div className="container">
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leader} />
            </div>
        </div>
    );
}

export default Home;
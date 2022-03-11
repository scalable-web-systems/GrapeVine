import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardHeader, CardBody, Media, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderFeature({ feature, onClick }) {
    return (
        <Card>
            <CardImg width="100%" src={feature.image} alt={feature.name} />
            <CardTitle>{feature.name}</CardTitle>
            <CardText>{feature.description}</CardText>
        </Card>
    );
}

function RenderLeader({ leader }) {
    return (
        <Media>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <img width="20%" src={leader.image} alt={leader.name} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h1>{leader.name}</h1>
                    <h3>{leader.designation}</h3>
                    <p>{leader.description}</p>
                </div>
            </div>
        </Media>
    )
}

const About = (props) => {

    const featuresPlace = props.features.map((feature) => {
        return (
            <div className="col-12 col-md-5 m-1" key={feature.id}>
                <RenderFeature feature={feature} onClick={props.onClick} />
            </div>
        );
    });

    const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeader leader={leader} />
        );
    });

    /*if (props.featuresLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.featuresErrMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.features != null) {*/
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    {featuresPlace}
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-6">
                        <h2>Our History</h2>
                        <p>Started in 2022, GrapeVine was established as a social media platform based out of Amherst, Massachusetts. With its unique user-friendly layout for microbloggers, it boasts the ability to make and share groups to generate new connections.</p>
                        <p>The platform traces its origin to an independent study started by our CFED, Mr. Vineeth Rao, that featured for the first time the world's best social media design.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">31 Jan. 2022</dd>
                                    <dt className="col-6">Main Owner</dt>
                                    <dd className="col-6">Vineeth Rao</dd>
                                    <dt className="col-6">Last Year's Profit</dt>
                                    <dd className="col-6">$1,250,375</dd>
                                    <dt className="col-6">Employees</dt>
                                    <dd className="col-6">4</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Corporate Leadership</h2>
                    </div>
                    <div className="col-12">
                        <Media list>
                            {leaders}
                        </Media>
                    </div>
                </div>
            </div>
        );
    //}
}

export default About;
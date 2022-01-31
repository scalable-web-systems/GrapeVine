import React, { Component } from 'react';
import { Media } from 'reactstrap';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                {
                    id: 0,
                    name: 'Post On Your Wall',
                    image: 'Assets/Images/prog.png',
                    description: 'Give the world something to talk about with every post on your amazing wall.'
                },
                {
                    id: 1,
                    name: 'Join Groups',
                    image: 'Assets/Images/group.png',
                    description: 'Find like-minded people to interact with and make new friends every day!'
                },
                {
                    id: 2,
                    name: 'Start Vines With Friends',
                    image: 'Assets/Images/grapeVine.jpg',
                    description: 'Start a vine and get people in your groups involved in the fun!'
                },
                {
                    id: 3,
                    name: 'Have Fun!',
                    image: 'Assets/Images/FUN.png',
                    description: 'Our primary goal is to ensure that you are happy with your experience here at GrapeVine.'
                }
            ],
        };
    }

    render() {
        const featuresPlace = this.state.features.map((feature) => {
            return (
                <div key={feature.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={feature.image} alt={feature.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{feature.name}</Media>
                            <p>{feature.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {featuresPlace}
                    </Media>
                </div>
            </div>
        );
    }
}

export default About;
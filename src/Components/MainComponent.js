import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import About from './AboutComponent';
import FeatureDetail from './FeatureDetailComponent';
import { FEATURES } from '../Shared/features';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features: FEATURES,
            selectedFeature: null
        };
    }

    onFeatureSelect(featureId) {
        this.setState({ selectedFeature: featureId });
    }

    render() {
        return (
            <div>
                <Navbar dark style={{ backgroundColor: '#5F11C2' }}>
                    <div className="container">
                        <NavbarBrand href="/">GrapeVine</NavbarBrand>
                    </div>
                </Navbar>
                <About features={this.state.features} onClick={(featureId) => this.onFeatureSelect(featureId)} />
                <FeatureDetail feature={this.state.features.filter((feature) => feature.id === this.state.selectedFeature)[0]} />
            </div>
        );
    }
}

export default Main;
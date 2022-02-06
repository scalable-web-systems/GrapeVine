import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header />
                <About features={this.state.features} onClick={(featureId) => this.onFeatureSelect(featureId)} />
                <FeatureDetail feature={this.state.features.filter((feature) => feature.id === this.state.selectedFeature)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;
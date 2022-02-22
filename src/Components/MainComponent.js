import React, { Component } from 'react';
import { Routes, Route, Navigate, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { FEATURES } from '../Shared/features';
import { LEADERS } from '../Shared/leaders';

const mapStateToProps = state => {
    return {
        features: state.features,
        leaders: state.leaders
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features: FEATURES,
            leaders: LEADERS
        };
    }

    onFeatureSelect(featureId) {
        this.setState({ selectedFeature: featureId });
    }

    render() {
        return (
            <div>
                <Header />
                <Routes>
                    <Route path='/home' element={<Home leader={this.state.leaders.filter((leader) => leader.id === 0)[0]} />} />
                    <Route exact path='/about' element={<About leaders={this.state.leaders} features={this.state.features} onClick={(featureId) => this.onFeatureSelect(featureId)} />} />
                    <Route exact path='/contactus' element={<Contact />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
                {/*<FeatureDetail feature={this.state.features.filter((feature) => feature.id === this.state.selectedFeature)[0]} />*/}
                <Footer />
            </div>
        );
    }
}
const ConnectedComponent = connect(mapStateToProps)(Main)
/*const withRouterComponent = (props) => <Route render={ <ConnectedComponent /> } />
export default withRouterComponent;
export default withRouter(connect(mapStateToProps)(Main));*/
export default Main;
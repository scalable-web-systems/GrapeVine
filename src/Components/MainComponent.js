

import React, { Component } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import PostLoginMain from './PostLoginMain';
import { FEATURES } from '../Shared/features';
import { LEADERS } from '../Shared/leaders';
import { addFeatures, fetchFeatures } from '../Redux/ActionCreators';

const mapStateToProps = state => {
    return {
        features: state.features,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchFeatures: () => { dispatch(fetchFeatures) }
});

export function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child navigate={navigate} location={location} />;
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features: FEATURES,
            leaders: LEADERS,
            isLoggedIn: false
        };
        this.handleLoginSwitch = this.handleLoginSwitch.bind(this);
    }

    onFeatureSelect(featureId) {
        this.setState({ selectedFeature: featureId });
    }

    handleLoginSwitch() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <PostLoginMain />
            );
        } else {
            return (
                <div>
                    <Header isLoggedIn={this.handleLoginSwitch}/>
                    <Routes>
                        <Route path='/home' element={<Home leader={this.state.leaders.filter((leader) => leader.id === 0)[0]} />} />
                        <Route exact path='/about' element={<About leaders={this.state.leaders}
                            features={this.state.features}
                            featuresLoading={this.props.features.isLoading}
                            featuresErrMess={this.props.features.errMess}
                            onClick={(featureId) => this.onFeatureSelect(featureId)} />} />
                        <Route exact path='/contactus' element={<Contact />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </Routes>
                    <Footer />
                </div>
            );
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
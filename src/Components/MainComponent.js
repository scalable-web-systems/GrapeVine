// Focal point of application: controls main workflow of the page rendering depending on user interaction
// import React: makes use of basic react jsx syntax
// import Component: allows for declaration of react-based classes
// import Routes: switch statement for route creation
// import Route: represents a case in the routes switch statement. Each route will link to a different render
// import Navigate: automatically routes to a location regardless of user input
// import useLocation: returns the location object that contains information about the current URL
// import useNavigate: contains the information about a default URL
// import connect: connects a React component to a redux store
import React, { Component } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// import supporting local files
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import PostLoginMain from './PostLoginMain';
import { FEATURES } from '../Shared/features';
import { LEADERS } from '../Shared/leaders';
import { fetchFeatures } from '../Redux/ActionCreators';

// Create a constant containing current state attributes
const mapStateToProps = state => {
    return {
        features: state.features,
        leaders: state.leaders
    }
}

// Create a constant containing the location of the redux store
const mapDispatchToProps = (dispatch) => ({
    fetchFeatures: () => { dispatch(fetchFeatures) }
});

// redacted function from older React versions: connects React component with the React Router
export function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child navigate={navigate} location={location} />;
    }
}

class Main extends Component {
    // features: state property containing data from the features list
    // leaders: state property containing data from the leaders list
    // isLoggedIn: tracks status of user login
    constructor(props) {
        super(props);
        this.state = {
            features: FEATURES,
            leaders: LEADERS,
            isLoggedIn: false
        };
        // using a bind function allows the state to retain data changes when a function is passed to another component
        this.handleLoginSwitch = this.handleLoginSwitch.bind(this);
    }

    // NOT USED: store the id of the feature that has been clicked on
    onFeatureSelect(featureId) {
        this.setState({ selectedFeature: featureId });
    }

    // change the state of login when this method is called
    handleLoginSwitch() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    }

    render() {
        // determine if the user is logged in
        if (this.state.isLoggedIn) {
            // render the post-login application
            return (
                <PostLoginMain />
            );
        } else {
            // render the pre-login application
            // keeps header at top by default (passes in binded login method to handle login cases)
            // home route: goes to HomeComponent
            // about route: goes to AboutComponent
            // contactus route: goes to ContactComponent
            // keeps footer at bottom by default
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

// 1. Use connect to link the state with the redux store
// 2. Use withRouter to connect the entire component with React Routers
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
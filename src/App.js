// Origin of application; used to create single page application
// import React: makes use of basic react jsx syntax
// import Component: allows for declaration of react-based classes
// import BrowserRouter: allows for use of routers within this section
// import Provider: takes the redux store as an attribute, then makes it available to all the connected components
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// import supporting local files
import { ConfigureStore } from './Redux/configureStore';
import './App.css';
import Main from './Components/MainComponent';

// Store the redux config in a constant for attribute use
const store = ConfigureStore();

class App extends Component {
    // Render single page application (MainComponent render appears here)
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Login from './containers/Login/Login';

import './global.css';
class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Login />
            </Fragment>
        )
    }
}

export default hot(module)(App);
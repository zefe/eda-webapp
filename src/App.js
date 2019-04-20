import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';
import Layout from './components/Layout/Layout'

import NewUser from './pages/NewUser/NewUser';
import TeamUsers from './pages/TeamUsers/TeamUsers';

import './global.css';
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/" component={TeamUsers} />
                </Switch>

            </Layout>
        </BrowserRouter>
    )
}
export default hot(module)(App);
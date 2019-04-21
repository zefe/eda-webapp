import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';
import Layout from './components/Layout/Layout'

import NewUser from './pages/NewUser/NewUser';
import EditUser from './pages/EditUser/EditUser';
import TeamUsers from './pages/TeamUsers/TeamUsers';

import NotFound from './pages/NotFound/NotFound';

import './global.css';
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/" component={TeamUsers} />
                    <Route exact path="/user/new" component={NewUser} />
                    <Route exact path="/users/:userId/edit" component={EditUser} />
                    <Route component={NotFound} />

                </Switch>

            </Layout>
        </BrowserRouter>
    )
}
export default hot(module)(App);
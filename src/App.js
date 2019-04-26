import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Layout from './components/Layout/Layout'

import NewUser from './pages/NewUser/NewUser';
import EditUser from './pages/EditUser/EditUser';
import TeamUsers from './pages/TeamUsers/TeamUsers';

import NotFound from './pages/NotFound/NotFound';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Headers/HeaderDashboard';
import Projects from './pages/Projects/Projects';

import './global.css';
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Layout>
                    <Header />
                    <Navigation />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/team" component={TeamUsers} />
                    <Route exact path="/user/new" component={NewUser} />
                    <Route exact path="/users/:userId/edit" component={EditUser} />
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}
export default hot(module)(App);
import React, { Component, Fragment } from 'react';
import HeaderLogin from '../../components/Headers/HeaderLogin';

import './Login.css';


class Login extends Component {
    render() {
        return (
            <Fragment>
                <HeaderLogin />
                <div className="login-wrapper">
                    <div className="login-container">
                        <div className="hero">
                            <h1>For the Exploratory Data Analisis</h1>
                            <h2>Create, collaborate and define the information of your projects for exploratory data analysis.</h2>
                        </div>
                        <div className="form">
                            <h1>Log in</h1>
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="">EMAIL</label>
                                    <input type="text" name="" id="" placeholder="juanita@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">PASSWORD</label>
                                    <input type="text" name="" id="" placeholder="Enter your password" />
                                </div>
                                <div className="form-button">

                                    <button className="btn btn-primary">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login;
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
                            {/* <h1>Exploratory Data Analisis</h1> */}
                            <h1>Create, collaborate and define the information of your projects for exploratory data analysis.</h1>
                        </div>
                        <div className="form">
                            <h1>Sign in to eda</h1>
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="">EMAIL</label>
                                    <input type="text" name="" id="" placeholder="juanita@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">PASSWORD</label>
                                    <input type="text" name="" id="" placeholder="Enter your password" />
                                </div>
                            </form>
                            <button className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login;
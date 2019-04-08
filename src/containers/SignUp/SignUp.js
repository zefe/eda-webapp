import React, { Component, Fragment } from 'react';
import HeaderSignUp from '../../components/Headers/HeaderSignUp';

import '../Login/Login.css';


class Login extends Component {
    render() {
        return (
            <Fragment>
                <HeaderSignUp />
                <div className="login-wrapper">
                    <div className="login-container">
                        <div className="hero">
                            <h1>Create, collaborate and define the information of your projects for exploratory data analysis.</h1>
                        </div>
                        <div className="form">
                            <h1>Create your account</h1>
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="">FIRST NAME</label>
                                    <input type="text" name="" id="" placeholder="Juanita" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">LAST NAME</label>
                                    <input type="text" name="" id="" placeholder="Flores" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">EMAIL</label>
                                    <input type="text" name="" id="" placeholder="juanita@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">PASSWORD</label>
                                    <input type="text" name="" id="" placeholder="Enter your password" />
                                </div>
                            </form>
                            <button className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login;
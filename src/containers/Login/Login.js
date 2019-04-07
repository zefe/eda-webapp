import React, { Component } from 'react';
import Header from '../../components/Login/Header';
import heroForm from '../../images/form.png';

import './Login.css';


class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="login-wrapper">
                    <div className="login-container">
                        <div className="hero">
                            {/* <h1>Exploratory Data Analisis</h1> */}
                            <h1>Create, collaborate and define the information of your projects for exploratory data analysis.</h1>
                        </div>
                        <div className="login-form-container">
                            <h1>Sign in to eda</h1>
                            <div className="form">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="">EMAIL</label>
                                        <input type="text" name="" id="" placeholder="juanita@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">PASSWORD</label>
                                        <input type="text" name="" id="" placeholder="Enter your password" />
                                    </div>
                                </form>
                                <button className="btn btn-primary">Sign Up</button>
                                {/* <p>Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</p> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
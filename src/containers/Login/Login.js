import React, { Component, Fragment } from 'react';
import HeaderLogin from '../../components/Headers/HeaderLogin';

import './Login.css';


class Login extends Component {

    state = {
        email: '',
        password: ''
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
    }
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
                            <form action="" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="">EMAIL</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="juanita@example.com"
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">PASSWORD</label>
                                    <input
                                        type="text"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                    />
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
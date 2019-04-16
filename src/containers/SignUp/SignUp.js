import React, { Component, Fragment } from 'react';
import HeaderSignUp from '../../components/Headers/HeaderSignUp';
import { signUp } from '../../services/api-service';
import '../Login/Login.css';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        signUp(this.state)
            .then(console.log)
            .catch(console.error)
    }

    handleChange(e) {
        e.preventDefault()
        const { target } = event;
        this.setState({ [target.name]: target.value })
    }

    render() {
        return (
            <Fragment>
                <HeaderSignUp />
                <div className="login-wrapper">
                    <div className="login-container">
                        <div className="hero">
                            <h1>For the Exploratory Data Analisis</h1>
                            <h2>Create, collaborate and define the information of your projects for exploratory data analysis.</h2>
                        </div>
                        <div className="form">
                            <h1>Sign Up</h1>
                            <form action="" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="">FIRST NAME</label>
                                    <input type="text" name="firstName" id="firstName" placeholder="Juanita" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">LAST NAME</label>
                                    <input type="text" name="lastName" id="lastName" placeholder="Flores" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">EMAIL</label>
                                    <input type="text" name="email" id="email" placeholder="juanita@example.com" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">PASSWORD</label>
                                    <input type="password" name="password" id="password" placeholder="Enter your password" onChange={this.handleChange} />
                                </div>
                                <div className="form-button" >
                                    <button className="btn btn-primary" >Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SignUp;
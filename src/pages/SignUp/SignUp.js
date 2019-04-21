import React, { Component, Fragment } from 'react';
import HeaderSignUp from '../../components/Headers/HeaderSignUp';
import { signUp } from '../../services/api-service';
import UserForm from '../../components/UserForm/UserForm';
import '../Login/Login.css';


class SignUp extends Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        signUp(this.state.form)
            .then(console.log)
            .catch(console.error)
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = event.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    render() {
        return (
            <div>
                <HeaderSignUp />
                <div className="login-wrapper">
                    <div className="login-container">
                        <div className="hero">
                            <h1>For the Exploratory Data Analisis</h1>
                            <h2>Create, collaborate and define the information of your projects for exploratory data analysis.</h2>
                        </div>
                        <div className="form">
                            <h1>Sign Up2</h1>
                            <UserForm
                                handleChange={this.handleChange}
                                formValues={this.state.form}
                                handleSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;
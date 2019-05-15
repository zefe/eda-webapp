import React, { Component, Fragment } from 'react';
import HeaderSignUp from '../../components/Headers/HeaderSignUp';
import { signUp } from '../../services/api-service';
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import '../Login/Login.css';


class SignUp extends Component {
    state = {
        loading: false,
        errors: {
            email: null,
            incomplete: null
        },
        message: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
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

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ loading: true, error: null })
        signUp(this.state.form)
            .then(response => {
                let message = response.message;
                switch (message) {
                    case 'User data is not valid':
                        this.setState({ errors: { incomplete: message } })
                        break;
                    case 'User exist':
                        this.setState({ errors: { email: message } })
                        break
                    case 'User created':
                        this.setState({})
                        this.setState({
                            message: message,
                            errors: {
                                email: '',
                                incomplete: ''
                            },
                            form: {
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: ''

                            }
                        })
                    default:
                        break
                }

                this.setState({ loading: false });
            })
            .catch(console.error)
    }

    render() {
        return (
            <div>
                <HeaderSignUp />
                {this.state.message && (
                    <div className="notification">
                        <span className="message">{this.state.message} sucess full go to Login</span>
                    </div>
                )}
                <div className="login-wrapper">
                    <div className="login-container">
                        <div className="hero">
                            <h1>For the Exploratory Data Analisis</h1>
                            <h2>Create, collaborate and define the information of your projects for exploratory data analysis.</h2>
                        </div>
                        <div className="form">
                            <h1>Sign Up</h1>
                            <UserForm
                                handleChange={this.handleChange}
                                formValues={this.state.form}
                                handleSubmit={this.handleSubmit}
                                errors={this.state.errors}
                                message={this.state.message}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;
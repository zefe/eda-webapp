import React, { Component, Fragment } from 'react';
import HeaderLogin from '../../components/Headers/HeaderLogin';
import LoginForm from '../../components/LoginForm/LoginForm';
import PageLoading from '../../components/Loading/Loading';
import { authenticateUser } from '../../services/api-service';

import './Login.css';


class Login extends Component {

    state = {
        loading: false,
        error: null,
        form: {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = event.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }
    handleSubmit = event => {
        this.setState({ loading: true, error: null })
        event.preventDefault();
        authenticateUser(this.state.form)
            .then((response) => {
                this.setState({ loading: false })
                console.log(response)
                let message = response.message;
                switch (message) {
                    case 'User not found':
                        this.setState({ message: message })
                        break;
                    case 'Incorrect Password':
                        this.setState({ message: message })
                        break;
                    default:
                        if (response.token !== null || response.token !== undefined) {
                            this.props.history.push('/team')
                        }
                }
            })
            .catch((error) => {
                console.log(error)
                this.setState({ loading: false, error: error })
            })
    }
    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }
        return (
            <Fragment>
                <HeaderLogin />
                {this.state.message && (
                    <div className="notification-login">
                        <span className="message-login">{this.state.message}</span>
                    </div>
                )}
                <div className="login-wrapper">
                    <div className="login-container">
                        <div className="hero">
                            <h1>For the Exploratory Data Analisis</h1>
                            <h2>Create, collaborate and define the information of your projects for exploratory data analysis.</h2>
                        </div>
                        <div className="form">
                            <h1>Log in</h1>
                            <LoginForm
                                handleChange={this.handleChange}
                                formValues={this.state.form}
                                handleSubmit={this.handleSubmit}
                                message={this.state.message}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login;
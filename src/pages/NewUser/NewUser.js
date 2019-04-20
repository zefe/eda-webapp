import React, { Component } from 'react';
import UserForm from '../../components/UserForm/UserForm';
import Header from '../../components/Headers/HeaderDashboard';

import './NewUser.css';

class NewUser extends Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            rol: 'member'
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

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.form)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="form-container">
                    <div className="form-user">
                        <UserForm
                            handleChange={this.handleChange}
                            formValues={this.state.form}
                            handleSubmit={this.handleSubmit}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default NewUser;
import React, { Component } from 'react';
import UserForm from '../../components/UserForm/UserForm';
import Badge from '../../components/Badge/Badge';
import PageLoading from '../../components/Loading/Loading';
import { signUp } from '../../services/api-service';

import './NewUser.css';

class NewUser extends Component {
    state = {
        loading: false,
        error: null,
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null })
        signUp(this.state.form)
            .then(() => {
                this.setState({ loading: false });
                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error);
                this.setState({ loading: false, error: error })
                console.log
            })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     signUp(this.state.form)
    //         .then(console.log)
    //         .catch(console.error)
    // }


    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }
        return (
            <div className="row-user">
                <div className="new-user-conatainer">
                    <div className="badge-content">
                        <Badge
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            email={this.state.form.email}
                            rol={this.state.form.rol}
                        />

                    </div>
                    <div className="new-user-content">
                        <div className="">
                            <UserForm
                                handleChange={this.handleChange}
                                formValues={this.state.form}
                                handleSubmit={this.handleSubmit}
                                error={this.state.form.error}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default NewUser;
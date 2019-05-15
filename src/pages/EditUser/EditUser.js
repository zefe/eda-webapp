import React, { Component } from 'react';
import UserForm from '../../components/UserForm/UserForm';
import Badge from '../../components/Badge/Badge';
import PageLoading from '../../components/Loading/Loading';


import { updateUser, getUser } from '../../services/api-service';

import './EditUser.css';

class EditUser extends Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        this.setState({ loading: true, error: null })
        getUser(this.props.match.params.userId)
            .then(
                (user) => this.setState({
                    loading: false,
                    form: user.data
                })
            )
            .catch(
                (error) => this.setState({
                    loading: false,
                    error: error
                })
            )

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
        let userId = this.props.match.params.userId;
        let data = this.state.form;

        this.setState({ loading: true, error: null })
        updateUser(userId, data)
            .then(() => {
                this.setState({ loading: false });
                this.props.history.push('/team')
            })
            .catch((error) => {
                console.log(error);
                this.setState({ loading: false, error: error })
                console.log
            })
    }


    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }
        return (
            <div className="row-user">
                <div className="edit-user-conatainer">
                    <div className="badge-content"><div className="badge-header">
                        <h1>Edit user information</h1>
                    </div>
                        <Badge
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            email={this.state.form.email}
                            rol={this.state.form.rol}
                            title={"EDIT USER"}
                        />

                    </div>
                    <div className="edit-user-content">
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

export default EditUser;
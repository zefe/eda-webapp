import React, { Component } from 'react';
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm';
import PageLoading from '../../components/Loading/Loading';
//ADD SERVICES HERE
import './NewProject.css';

class NewProject extends Component {
    state = {
        loading: false,
        error: null,
        form: {
            project: ''
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
        // newGraph(this.state.form)
        //     .then((response) => {
        //         console.log(response)
        //         this.setState({ loading: false });
        //         this.props.history.push('/graphs')
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         this.setState({ loading: false, error: error })
        //         console.log
        //     })
    }


    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }
        return (
            <div>
                <div className="team-container">
                    <div className="team-title">

                    </div>
                </div>
                <div className="row-projects">
                    <div className="container-projects">
                        <h1>New project</h1>
                        <NewProjectForm
                            handleChange={this.handleChange}
                            formValues={this.state.form}
                            handleSubmit={this.handleSubmit}
                            error={this.state.form.error}
                        />
                    </div>
                </div>
            </div>

        )
    }
}

export default NewProject;
import React, { Component } from 'react';
import GraphForm from '../../components/GraphForm/GraphForm';
import PageLoading from '../../components/Loading/Loading';
import { newGraph } from '../../services/GraphService';
import './NewGraph.css';

class NewUser extends Component {
    state = {
        loading: false,
        error: null,
        form: {
            title: '',
            description: '',
            path: '',
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
        newGraph(this.state.form)
            .then((response) => {
                console.log(response)
                this.setState({ loading: false });
                this.props.history.push('/graphs')
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
            <div className="graph-container">
                <GraphForm
                    handleChange={this.handleChange}
                    formValues={this.state.form}
                    handleSubmit={this.handleSubmit}
                    error={this.state.form.error}
                />
            </div>
        )
    }
}

export default NewUser;
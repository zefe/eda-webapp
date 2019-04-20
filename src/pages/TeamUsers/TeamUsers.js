import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UsersList from '../../components/UsersList/UsersList';
import { getUsers } from '../../services/api-service';
import './TeamUsers.css';
import Loading from '../../components/Loading/Loading';

class TeamUsers extends Component {
	state = {
		loading: true,
		error: null,
		data: []
	}

	componentDidMount() {
		this.setState({ loading: true, error: null })
		getUsers()
			.then(
				(users) => this.setState({
					loading: false,
					data: users.data
				})
			)
			.catch(
				(error) => this.setState({
					loading: false,
					error: error
				})
			)

	}
	render() {
		if (this.state.loading === true) {
			return <Loading />
		}
		if (this.state.data.length === 0) {
			return (
				<div className="team-container">
					<h2>Table is empty</h2>
				</div>
			)
		}
		return (
			<div>
				<div className="team-container">
					<div className="team-button">
						<Link to="/new/user" className="btn btn-outline-primary">New User</Link>
					</div>
				</div>

				<div className="table-container">
					<div className="list">
						<UsersList users={this.state.data} />
					</div>
				</div>
			</div>
		)
	}
}

export default TeamUsers;
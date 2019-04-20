import React, { Component } from 'react';
import UsersList from '../../components/UsersList/UsersList';
import Header from '../../components/Headers/HeaderDashboard';
import './TeamUsers.css';

class TeamUsers extends Component {
	state = {
		data: [
			{
				id: "1",
				firstName: "Freda",
				lastName: "Grady",
				email: "Leann_Berge@gmail.com",
				jobTitle: "Legacy Brand Director",
				twitter: "FredaGrady22221-7573",
				avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
			},
			{
				id: "2",
				firstName: "Major",
				lastName: "Rodriguez",
				email: "Ilene66@hotmail.com",
				jobTitle: "Human Research Architect",
				twitter: "ajorRodriguez61545",
				avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
			},
			{
				id: "3",
				firstName: "Daphney",
				lastName: "Torphy",
				email: "Ron61@hotmail.com",
				jobTitle: "National Markets Officer",
				twitter: "DaphneyTorphy96105",
				avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
			},
			{
				id: "4",
				firstName: "Daphney",
				lastName: "Torphy",
				email: "Ron61@hotmail.com",
				jobTitle: "National Markets Officer",
				twitter: "DaphneyTorphy96105",
				avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
			},
			{
				id: "5",
				firstName: "Daphney",
				lastName: "Torphy",
				email: "Ron61@hotmail.com",
				jobTitle: "National Markets Officer",
				twitter: "DaphneyTorphy96105",
				avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
			},
			{
				id: "6",
				firstName: "Daphney",
				lastName: "Torphy",
				email: "Ron61@hotmail.com",
				jobTitle: "National Markets Officer",
				twitter: "DaphneyTorphy96105",
				avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
			},
			{
				id: "7",
				firstName: "Daphney",
				lastName: "Torphy",
				email: "Ron61@hotmail.com",
				jobTitle: "National Markets Officer",
				twitter: "DaphneyTorphy96105",
				avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
			}
		]
	}
	render() {
		return (
			<div>
				<Header />
				<div className="team-container">
					<div className="team-button">
						<a href="/team/new" className="btn btn-outline-primary" >
							New User
            			</a>
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
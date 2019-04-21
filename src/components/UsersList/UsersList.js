import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from '../../components/Gravatar/Gravatar';
import PeopleIcon from '../../images/edit-user-icon.js';
import './UsersList.css';

function UsersList(props) {
    return (
        <div className="tabla">
            <table>
                <thead>
                    <tr>
                        <th>USER</th>
                        <th>ROL</th>
                        <th>E-MAIL</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map(user => {
                            return (
                                <tr key={user._id}>
                                    <td><Gravatar className="user-avatar" email={user.email} />{`${user.firstName}  ${user.lastName}`}</td>
                                    <td>{user.rol}</td>
                                    <td>{user.email}</td>
                                    <td><Link to={`/users/${user._id}/edit`} ><PeopleIcon /></Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default UsersList;
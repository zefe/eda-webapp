import React from 'react';
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
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map(user => {
                            return (
                                <tr key={user._id}>
                                    <td>{`${user.firstName}  ${user.lastName}`}</td>
                                    <td>{user.rol}</td>
                                    <td>{user.email}</td>
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
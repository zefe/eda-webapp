import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from '../../components/Gravatar/Gravatar';
import PeopleIcon from '../../images/edit-user-icon.js';
import './UsersList.css';

function UsersList(props) {
    return (
        <div className="card-container wrap">
            {
                props.users.map(user => {
                    return (
                        <div className="card-item">
                            <figure className="card-image">
                                <Gravatar className="user-avatar" email={user.email} />
                                <span className="card-name" >{`${user.firstName}  ${user.lastName}`}</span>
                            </figure>
                            <span className="card-overlay">

                                <Link to={`/users/${user._id}/edit`} >
                                    <span class="card-details"><PeopleIcon />
                                        <span className="card-name" >{`${user.firstName}  ${user.lastName}`}</span>

                                    </span>

                                </Link>
                            </span>
                        </div>
                    )
                })
            }
        </div>

        // <div className="tabla">
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>USER</th>
        //                 <th>ROL</th>
        //                 <th>E-MAIL</th>
        //                 <th>ACTIONS</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 props.users.map(user => {
        //                     return (
        //                         <tr key={user._id}>
        //                             <td><Gravatar className="user-avatar" email={user.email} />{`${user.firstName}  ${user.lastName}`}</td>
        //                             <td>{user.rol}</td>
        //                             <td>{user.email}</td>
        //                             <td><Link to={`/users/${user._id}/edit`} ><PeopleIcon /></Link></td>
        //                         </tr>
        //                     )
        //                 })
        //             }
        //         </tbody>
        //     </table>
        // </div>
    )
}

export default UsersList;
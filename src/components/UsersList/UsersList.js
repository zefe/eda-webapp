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
    )
}

export default UsersList;
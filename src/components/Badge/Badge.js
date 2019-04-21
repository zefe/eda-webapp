import React from 'react';

import './Badge.css';
import Gravatar from '../Gravatar/Gravatar';

function Badge(props) {
    return (
        <div className="badge">

            <div className="badge-section-name">
                <Gravatar className="badge-avatar" email={props.email} />
                <h1>
                    {props.firstName} <br /> {props.lastName}
                </h1>
            </div>

            <div className="badge-section-info">
                <h3>{props.email}</h3>
            </div>
        </div>
    );
}

export default Badge;
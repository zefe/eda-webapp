import React, { Component } from 'react';

import './Badge.css';
import Gravatar from '../Gravatar/Gravatar';

class Badge extends Component {
    render() {
        return (
            <div className="badge">

                <div className="badge-section-name">
                    <Gravatar className="badge-avatar" email={this.props.email} />
                    <h1>
                        {this.props.firstName} <br /> {this.props.lastName}
                    </h1>
                </div>

                <div className="badge-section-info">
                    <h3>{this.props.email}</h3>
                </div>
            </div>
        );
    }
}

export default Badge;
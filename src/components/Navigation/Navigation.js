import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
function Navigation() {
    return (
        <div className="nav-row">
            <div className="nav-container">
                <div className="nav-links">
                    <ul>
                        <li>
                            <NavLink to="/projects" activeClassName="is-selected">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/team" activeClassName="is-selected">Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="/notfound" activeClassName="is-selected">LINK</NavLink>
                        </li>
                        <li>
                            <NavLink to="/notfound" activeClassName="is-selected">LINK</NavLink>
                        </li>
                        <li>
                            <NavLink to="/notfound" activeClassName="is-selected">LINK</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav-logout">
                    <NavLink to="/" activeClassName="is-selected">Log Out</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
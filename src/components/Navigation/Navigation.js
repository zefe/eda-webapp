import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectIcon from '../../images/project-icon';
import TeamIcon from '../../images/team-icon';
import GraphIcon from '../../images/graph-icon';
import SettingsIcon from '../../images/settings-icon';
import LogoutIcon from '../../images/logout-icon';
import './Navigation.css';
function Navigation() {
    return (
        <div className="nav-row">
            <div className="nav-container">
                <div className="nav-links">
                    <ul>
                        <li>
                            <NavLink to="/projects" activeClassName="is-selected" className="elements">< ProjectIcon /><span>Projects</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/team" activeClassName="is-selected" className="elements"><TeamIcon /><span>Team</span> </NavLink>
                        </li>
                        <li>
                            <NavLink to="/graphs" activeClassName="is-selected" className="elements">< GraphIcon /> <span>Graphs</span> </NavLink>
                        </li>
                        <li>
                            <NavLink to="/notfound" activeClassName="is-selected" className="elements"><SettingsIcon /> <span>Settings</span> </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav-logout">
                    <NavLink to="/" activeClassName="is-selected" className="elements"><LogoutIcon /> <span>Log Out</span> </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
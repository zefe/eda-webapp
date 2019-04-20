import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import person from '../../images/person.jpg';
import './HeaderDashboard.css';

function Header(props) {
    return (
        <div className="container-header">
            <div className="header">
                <div className="header-logo">
                    <Link to="/" className="navbar_brand">
                        <img src={logo} alt="logo" />
                        <h1>EDA</h1>
                    </Link>
                </div>
                <div className="header-avatar">
                    <img src={person} alt="" width={40} />
                    <div className="description">
                        <span>Juanita Flores</span>
                        <small>Team de juanita</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;


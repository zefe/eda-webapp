import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

function Header(props) {
    return (
        <div className="container-login-header">
            <div className="login-header">
                <div className="login-header-logo">
                    <img src={logo} alt="logo" />
                    <h1>EDA</h1>
                </div>
                <div className="login-header-button">
                    <span>Have an account?</span>
                    <Link to="/" className="btn btn-outline-primary">Log In</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
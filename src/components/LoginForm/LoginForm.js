import React from 'react';
import './LoginForm.css';

function LoginForm(props) {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="">EMAIL</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="juanita@example.com"
                    onChange={props.handleChange}
                    value={props.formValues.email}
                />
            </div>
            <div className="form-group">
                <label htmlFor="">PASSWORD</label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={props.handleChange}
                    value={props.formValues.password}
                />
            </div>
            <div className="form-button">
                <button className="btn btn-primary">Sign in</button>
            </div>
        </form>
    )
}

export default LoginForm;
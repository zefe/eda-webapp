import React from 'react';
import './UserForm.css';
function UserForm(props) {
    return (
        <div>
            <form action="" onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">FIRST NAME</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Juanita"
                        onChange={props.handleChange}
                        value={props.formValues.firstName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">LAST NAME</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Flores"
                        onChange={props.handleChange}
                        value={props.formValues.lastName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">EMAIL</label>
                    <input type="text"
                        name="email"
                        id="email"
                        placeholder="juanita@example.com"
                        onChange={props.handleChange}
                        value={props.formValues.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="">PASSWORD</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={props.handleChange}
                        value={props.formValues.password} />
                </div>
                {props.error && (
                    <p className="error">{props.error}</p>
                )}
                <div className="form-button" >
                    <button className="btn btn-primary" >Save</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm;
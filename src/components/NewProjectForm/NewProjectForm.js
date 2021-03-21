import React from 'react';
import { Link } from 'react-router-dom';
import './NewProjectForm.css';

function NewProjectForm(props) {
    return (
        <form action="" onSubmit={props.handleSubmit} className="form-background">
            <div className="form-group">
                <label htmlFor="">Project name</label>
                <input
                    type="text"
                    name="project"
                    id="project"
                    placeholder="enter project name"
                    onChange={props.handleChange}
                    value={props.formValues.project}
                    required
                />
            </div>
            <div className="form-button">
                <Link to="/graph/new" className="btn btn-primary">Create</Link>
            </div>
            <div className="form-button">
                <Link to="/" className="btn btn-outline-primary">Cancel</Link>
            </div>
        </form>
    )
}

export default NewProjectForm;
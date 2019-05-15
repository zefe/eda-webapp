import React from 'react';
import './GraphForm.css';

function GraphForm(props) {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="">TITLE</label>
                <input
                    type="title"
                    name="title"
                    id="title"
                    placeholder="add title"
                    onChange={props.handleChange}
                    value={props.formValues.title}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="">DESCRIPTION</label>
                <input
                    type="description"
                    name="description"
                    id="description"
                    placeholder="description"
                    onChange={props.handleChange}
                    value={props.formValues.description}
                    required
                />
            </div>
            <div className="form-group file">
                <label htmlFor="">FILE</label>
                <input
                    type="file"
                    name="file"
                    id="file"
                    placeholder="file"
                    required
                />
            </div>
            <div className="form-button">
                <button className="btn btn-primary">Create</button>
            </div>
        </form>
    )
}

export default GraphForm;
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
function Projects() {
    return (
        <div>
            <div className="team-container">
                <div className="team-title">
                    <h2>Projects</h2>
                </div>
                <div className="team-button">
                    <Link to="/project/new" className="btn btn-outline-primary">New prject</Link>
                </div>
            </div>
            <div className="row-projects">
                <div className="container-projects">
                    <h2>CREATE NEW PROJECT</h2>
                    <button className="btn btn-outline-primary " >Create</button>
                </div>
            </div>
        </div>
    )
}

export default Projects;
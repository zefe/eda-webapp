import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Graphs.css';

class Graphs extends Component {
    render() {
        return (
            <div>
                <div className="graphs-container">
                    <div className="graphs-title">
                        <h2>Graphs</h2>
                    </div>
                    <div className="graphs-button">
                        <Link to="/graph/new" className="btn btn-outline-primary">New Graph</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Graphs;
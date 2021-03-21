import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Graphs.css';

import Graph1 from '../../images/graph1.png';
import Graph2 from '../../images/graph2.png';

class Graphs extends Component {
    render() {
        return (
            <div>
                <div className="graphs-container">
                    <div className="graphs-title">
                        <h2>Graphs</h2>
                    </div>
                    <div className="graphs-button">
                        <Link to="/graph/new" className="btn btn-outline-primary">New file</Link>
                    </div>
                </div>
                <div className="list-graphs-container">
                    <div className="list-content">
                        <div className="card-item-g" >
                            <div className="card-image-g">
                                <Link to="/graph/new" >
                                    <div className="empty-graph">
                                        <p>
                                            NEW FILE
                                    </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="card-item-g" >
                            <div className="card-image-g">
                                <img src={Graph1} width={250} height={250} />
                                <p>TITLE</p>
                                <span className="card-name" >Description </span>
                            </div>
                        </div>
                        <div className="card-item-g" >
                            <div className="card-image-g">
                                <img src={Graph2} width={250} height={250} />
                                <p>TITLE</p>
                                <span className="card-name" >Description </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Graphs;
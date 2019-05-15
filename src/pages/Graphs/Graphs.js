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
                        <Link to="/graph/new" className="btn btn-outline-primary">New Graph</Link>
                    </div>
                </div>
                <div className="table-container">
                    <div className="list">
                        <div className="card-item-g" >
                            <figure className="card-image">
                                <img src={Graph1} alt="" width={200} height={200} />
                                <p>TITLE</p>
                                <span className="card-name" >Description </span>
                            </figure>
                        </div>
                        <div className="card-item-g" >
                            <figure className="card-image">
                                <img src={Graph2} alt="" width={200} height={200} />
                                <p>TITLE</p>
                                <span className="card-name" >Description</span>
                            </figure>
                        </div>
                        <div className="card-item-g" >
                            <figure className="card-image">
                                <img src={Graph1} alt="" width={200} height={200} />
                                <p>TITLE</p>
                                <span className="card-name" >Description </span>
                            </figure>
                        </div>
                        <div className="card-item-g" >
                            <figure className="card-image">
                                <img src={Graph2} alt="" width={200} height={200} />
                                <p>TITLE</p>
                                <span className="card-name" >Description</span>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Graphs;
import React, { Component } from 'react';
import './index.css';
import { NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">Weather</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/racer">Racer</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

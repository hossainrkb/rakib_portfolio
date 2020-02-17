import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
class navtop extends Component {
    render() {
        return (
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active ml-4">
                      <NavLink className="navbar-brand" to="/rakib_portfolio/">
                        <span className="btn btn-sm btn-info">
                          Introduction
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/rakib_portfolio/edu/">
                        <span className="btn btn-sm btn-info">
                          Academic Details
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/rakib_portfolio/exp/">
                        <span className="btn btn-sm btn-info">Experience</span>
                      </NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink
                        className="nav-link"
                        to="/rakib_portfolio/pro_lan/"
                      >
                        <span className="btn btn-sm btn-info">
                          Programming Language
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item active ">
                      <NavLink
                        className="nav-link"
                        to="/rakib_portfolio/frmwrk/"
                      >
                        <span className="btn btn-sm btn-info">
                          Technology & Framework Skills
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item active ">
                      <NavLink className="nav-link" to="/rakib_portfolio/proj/">
                        <span className="btn btn-sm btn-info">Projects</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-md-1"></div>
          </div>
        );
    }
}

export default navtop

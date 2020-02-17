import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
class projects extends Component {
  state = {
    blood: 1,
    showroom: 2,
    library:3,
    uplift:4
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <hr className="btn-warning" />
          <div className="row">
            <div className="col-md-4">
              <div className="card card-info">
                <div className="card-header">Blood Management System</div>
                <div className="card-body">
                  <b>Technology: </b>
                  <span className="btn badge btn-info btn-md ">Laravel</span>
                  <br />
                  <span>Admin Panel, Donor Panel, Public Panel</span>
                  <hr className="btn-info" />
                  Github Link :{" "}
                  <a  target="_blank"  href="https://github.com/hossainrkb/Blood-Finder-Admin-donor-general-public-panel-">
                    Blood Finder
                  </a>
                  <br />
                  <NavLink
                    to={`/rakib_portfolio/pro/details/${this.state.blood}/`}
                  >
                    See some photos of this project
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-info">
                <div className="card-header">
                  Showroom Software ( LG, Electronics etc)
                </div>
                <div className="card-body">
                  <b>Technology: </b>
                  <span className="btn badge btn-info btn-md ">Laravel</span>
                  <span className="btn badge btn-danger btn-md ml-1">
                    React
                  </span>
                  <br />
                  <span>Admin Panel</span>
                  <hr className="btn-info" />
                  Github Link :{" "}
                  <a  target="_blank"  href="https://github.com/hossainrkb/Showroom-Softwate-backend--laravel-frontend--react-">
                    Showroom Software
                  </a>
                  <br />
                  <NavLink
                    to={`/rakib_portfolio/pro/details/${this.state.showroom}/`}
                  >
                    See some photos of this project
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-info">
                <div className="card-header">Library Management System</div>
                <div className="card-body">
                  <b>Technology: </b>
                  <span className="btn badge btn-info btn-md ">Rest API</span>
                  <span className="btn badge btn-danger btn-md ml-1">
                    React
                  </span>
                  <br />
                  <span>Admin Panel</span>
                  <hr className="btn-info" />
                  Github Link :{" "}
                  <a  target="_blank"  href="https://github.com/hossainrkb/library_admin">
                    Library Admin
                  </a>
                  <br />
                  <NavLink
                    to={`/rakib_portfolio/pro/details/${this.state.library}/`}
                  >
                    See some photos of this project
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="card card-info">
                <div className="card-header">Ecommerce Software</div>
                <div className="card-body">
                  <b>Technology: </b>
                  <span className="btn badge btn-info btn-md ">Laravel</span>
                  <br />
                  <span>Admin Panel, User Panel</span>
                  <hr className="btn-info" />
                  Github Link :{" "}
                  <a  target="_blank"  href="https://github.com/hossainrkb/E_commerce_software_Admin_User_Panel_laravel">
                    Ecommerce Software
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-info">
                <div className="card-header">
                  Banking Software (Company name : Uplift BD)
                </div>
                <div className="card-body">
                  <b>Language: </b>
                  <span className="btn badge btn-info btn-md ">Row PHP</span>
                  <br />
                  <span>Agent Panel, User Panel</span>
                  <hr className="btn-info" />
                  Github Link :{" "}
                  <a  target="_blank"  href="https://github.com/hossainrkb/Branch-software-Banking---company-name--upliftbd">
                    uplift BD (agent , user)
                  </a>
                  <br />
                  <NavLink
                    to={`/rakib_portfolio/pro/details/${this.state.uplift}/`}
                  >
                    See some photos of this project
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-info">
                <div className="card-header">
                  Branching Software (Company Name: ebijoy.com)
                </div>
                <div className="card-body">
                  <b>Language: </b>
                  <span className="btn badge btn-info btn-md ">Row PHP</span>
                  <br />
                  <span>Admin Panel</span>
                  <hr className="btn-info" />

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default projects

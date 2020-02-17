import React, { Component } from 'react'

 class Introduction extends Component {
    render() {
        return (
          <div className="row">
            <div className="col-md-12">
              <hr className="btn-warning" />
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-3">
                  <img
                    style={{
                      borderRadius: "50%",
                      border: "5px solid #C6BBE8"
                    }}
                    className=""
                    width="250"
                    height="236"
                    src={require("../project_pf/image.PNG")}
                  />
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="row">
                <div className="col-md-4"></div>
                <div
                  className="col-md-3"
                  style={{
                    fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                    textAlign:"center"
                  }}
                >
                  <h3>I am Rakib Hosen.</h3>
                  <h6>Web Developer (Laravel, React)</h6>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        );
    }
}

export default Introduction

import React, { Component } from "react";

class experience extends Component {
  constructor(){
    super()
   
  }
  render() {
    
     
    return (
      <div className="row">
        <div className="col-md-12">
          <hr className="btn-warning" />
          <div className="row">
            <div className="col-md-12">
              <table className="table text-center">
                <thead>
                  <tr>
                    <td>
                      <b>Company/Institution</b>
                    </td>
                    <td>
                      <b>Position</b>
                    </td>
                    <td>
                      <b>Period</b>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affable Technology</td>
                    <td>Web Developer (PHP)</td>
                    <td>June 2018–May 2019</td>
                  </tr>
                  <tr>
                    <td>Tripovy.com</td>
                    <td>Web Developer (Laravel)</td>
                    <td>November 2019–January 2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default experience;

import React, { Component } from 'react'

 class eductaions extends Component {
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
                          <b>Certification Name</b>
                        </td>
                        <td>
                          <b>Discipline / Major</b>
                        </td>
                        <td>
                          <b>Institution</b>
                        </td>
                        <td>
                          <b>Passing Year</b>
                        </td>
                        <td>
                          <b>CGPA</b>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>B.Sc.</td>
                        <td>CSE</td>
                        <td>International Islamic University Chittagong</td>
                        <td>2019</td>
                        <td>3.53/4.00</td>
                      </tr>
                      <tr>
                        <td>HSC</td>
                        <td>Science</td>
                        <td>BAF Shaheen College</td>
                        <td>2014</td>
                        <td>4.50/5.00</td>
                      </tr>
                      <tr>
                        <td>SSC</td>
                        <td>Science</td>
                        <td>Garib-e-Newaz High School</td>
                        <td>2012</td>
                        <td>4.94/5.00</td>
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

export default eductaions

import React from "react";
import Moment from "react-moment";
import "./stylesheet.css";

function Employees(props) {
    return (
        <div className="container-fluid">
            <div className="row d-flex text-center">
                <div className="col-11">
                    <table className="table table-striped table-responsive-lg employees">
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th onClick={props.nameSort}>Name</th>
                                <th>Phone Number</th>
                                <th>E-mail</th>
                                <th>Date of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.results.map(result => (
                                <tr className="table">
                                    <td> <img src={result.picture.medium} alt="Profile Photo" /></td>
                                    <td>{result.name.first + " " + result.name.last}  </td>
                                    <td>{result.cell}</td>
                                    <td className="email"><a href={result.email}>{result.email}</a></td>
                                    <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>
                                </tr>
                            ))}
                        </tbody>
                    </table >
                </div>
            </div>
        </div>

    )
}

export default Employees

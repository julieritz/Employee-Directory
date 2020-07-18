import React from "react";
import "./stylesheet.css";

function Search(props) {
    return (
        <div className="container-fluid">
            <div className="row d-flex text-center header-box">
                <div className="col-12">
                    <h1>Employee Directory</h1>
                    <p>Click on "Name" heading to sort by name or use the search box to filter your results.</p>
                </div>
                <div className="col-12">
                    <div className="text-center searchBox">
                        <input
                            onChange={props.handleInputChange}
                            value={props.value}
                            id="employees"
                            type="text"
                            name="search"
                            list="employee"
                            className="inputBox"
                            placeholder="Search by name" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
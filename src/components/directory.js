import API from "../apiCall";
import React, { Component } from "react";
import Search from "./Search";
import Employees from "./Employees";
import "./stylesheet.css";

class Directory extends Component {
    state = {
        search: "",
        employees: [],
        filtered: [],
        order: ""
    };

    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            filtered: res.data.results
        })).catch(err => console.log(err))
    }

    handleInputChange = event => {
        const employees = this.state.employees;
        const input = event.target.value;
        const filtered = employees.filter(employee => employee.name.first.toLowerCase().indexOf(input.toLowerCase()) > -1)
        this.setState({
            filtered,
        });
    };

    nameSort = () => {
        const filteredUsers = this.state.filtered;
        if (this.state.order === "ascending") {
            const sortedUsers = filteredUsers.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            console.log(sortedUsers)
            this.setState({
                filtered: sortedUsers,
                order: "descending"
            })
        } else {
            const sortedUsers = filteredUsers.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sortedUsers)
            this.setState({
                filtered: sortedUsers,
                order: "ascending"
            })
        }
    }

    render() {
        return (
            <div>
                <Search
                    employee={this.state.employees}
                    handleInputChange={this.handleInputChange} />
                <Employees results={this.state.filtered}
                    nameSort={this.nameSort}
                />
            </div >
        )
    }
}

export default Directory
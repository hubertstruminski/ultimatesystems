import React from 'react';
import '../css/Employee.css';

class Employee extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.renderEmployeeResult(this.props.name);
    }

    render() {
        return (
            <li className="list-group-item list-item-cursor" onClick={this.onClick}>
                {this.props.name}
            </li>
        );
    }
}

export default Employee;
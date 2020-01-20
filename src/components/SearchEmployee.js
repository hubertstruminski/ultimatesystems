import React from 'react';
import '../css/SearchEmployee.css';

class SearchEmployee extends React.Component {
    constructor() {
        super();

        this.state = {
            companyName: '',
            employee: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="search-employee-container">
                <input 
                    type="text" 
                    placeholder="Nazwa firmy" 
                    value={this.state.companyName}
                    name="companyName"
                    onChange={this.onChange}
                />
                <br />
                <input 
                    type="text" 
                    placeholder="Pracownik" 
                    value={this.state.employee}
                    name="employee"
                    onChange={this.onChange}
                />
                <br />
                <hr className="search-employee-hr" />
            </div>
        );
    }
}

export default SearchEmployee;
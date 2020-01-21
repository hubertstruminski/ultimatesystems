import React from 'react';
import '../css/SearchEmployeeActive.css';

class SearchEmployeeActive extends React.Component {
    constructor() {
        super();

        this.state = {
            companyName: '',
            employeeName: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <>
                <input 
                    type="text" 
                    className="search-active-inputs" 
                    placeholder="Nazwa firmy"
                    value={this.state.companyName}
                    name="companyName"
                    onChange={this.onChange}
                />
                <br />
                <input 
                    type="text" 
                    className="search-active-inputs" 
                    placeholder="Pracownik"
                    value={this.state.employeeName}
                    name="employeeName"
                    onChange={this.onChange}
                />
            </>
        );
    }
}

export default SearchEmployeeActive;
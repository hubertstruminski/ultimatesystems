import React from 'react';
import '../css/SearchEmployeeActive.css';
import Employee from './Employee';

class SearchEmployeeActive extends React.Component {
    constructor() {
        super();

        this.state = {
            companyName: '',
            employeeName: '',
            employees: [
                {id: 1, name: 'Hubert Strumiński', company: 'Ultimate Systems'},
                {id: 2, name: 'Jan Kowalski', company: 'ABB'},
                {id: 3, name: 'Jacek Mosz', company: 'Capgemini'},
                {id: 4, name: 'Aneta Wilk', company: 'Andea Solutions'},
                {id: 5, name: 'Barbara Misiak', company: 'Dassault Systems'},
                {id: 6, name: 'Gabriela Mak', company: 'Relyon'},
                {id: 7, name: 'Norbert Andrysiak', company: 'Grand Parade'},
                {id: 8, name: 'Maria Ola', company: 'Solid MCG'},
                {id: 9, name: 'Otylia Jędryszcz', company: 'Nowodworski Estates'},
                {id: 10, name: 'Maciek Wość', company: 'X-Formation'},
                {id: 11, name: 'Andrzej Kowal', company: 'ABB'},
                {id: 12, name: 'Marysia Koc', company: 'ABB'}
            ],
            results: [],
            isSearched: false
        }
        this.results = [];
        this.onChange = this.onChange.bind(this);
        this.onCompanySearchChange = this.onCompanySearchChange.bind(this);
        this.getEmpployees = this.getEmpployees.bind(this);
        this.renderEmployeesList = this.renderEmployeesList.bind(this);
        this.onEmployeeSearchChange = this.onEmployeeSearchChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onCompanySearchChange(e) {
        this.setState({
            companyName: e.target.value
        }, () => {
            if(this.state.companyName && this.state.companyName.length > 0) {
                let companyName = this.state.companyName;
                this.getEmpployees("company", companyName);
            } else if(!this.state.companyName) {
                this.setState({ results: [] });
            }
        });
    }

    onEmployeeSearchChange(e) {
        this.setState({
            employeeName: e.target.value
        }, () => {
            if(this.state.employeeName && this.state.employeeName.length > 0) {
                let employeeName = this.state.employeeName;
                this.getEmpployees("name", employeeName);
            } else if(!this.state.employeeName) {
                this.setState({ results: [] });
            }
        });
    }

    getEmpployees(property, value) {
        const employees = this.state.employees.map((employee, index) => {
            if(employee[property].includes(value)) {
                return employee;
            }
            return undefined;
        });
        this.setState({ results: employees }, () => {
            this.setState({ isSearched: true });
        });
    }

    renderEmployeesList() {
        return this.state.results.map((result, index) => {
            if(result !== undefined) {
                return (
                    <Employee 
                        name={result.name}
                        company={result.company}
                        renderEmployeeResult={this.props.renderEmployeeResult}
                    />
                );
            }
            return undefined;
        });
    }

    render() {
        let isSearched = this.state.isSearched;
        return (
            <>
                <input 
                    type="text" 
                    className="search-active-inputs" 
                    placeholder="Nazwa firmy"
                    value={this.state.companyName}
                    name="companyName"
                    onChange={this.onCompanySearchChange}
                />
                <br />
                <input 
                    type="text" 
                    className="search-active-inputs" 
                    placeholder="Pracownik"
                    value={this.state.employeeName}
                    name="employeeName"
                    onChange={this.onEmployeeSearchChange}
                />
                <ul className="list-group">
                    { isSearched && this.renderEmployeesList() }
                </ul>
            </>
        );
    }
}

export default SearchEmployeeActive;
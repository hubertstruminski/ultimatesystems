import React from 'react';
import '../css/AddExercise.css';

class AddExercise extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
            name: '',
            pricePln: '',
            priceEur: 0,
            isNameError: false,
            isLetterError: false
        }
        this.errors = [];
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    isNumeric(number) {
        return !isNaN(number);
    }

    onSubmit() {
        this.errors = [];
        if(this.state.name.length < 5 || !this.isNumeric(this.state.pricePln)) {
            if(this.state.name.length < 5) {
                this.setState({ isNameError: true});
                this.errors.push(true);
            }
            if(!this.isNumeric(this.state.pricePln)) {
                this.setState({ isLetterError: true});
                this.errors.push(true);
            }
        }
        
        if(this.errors.length === 0) {
            const task = {
                name: this.state.name,
                pricePln: this.state.pricePln,
                priceEur: Math.round((this.state.pricePln / 4.8282) * 100) / 100
            }
            this.props.addNewTask(task);
        }  
    }

    render() {
        let isNameError = this.state.isNameError;
        let isLetterError = this.state.isLetterError;

        return (
            <div className="add-exercise-container">
                Zadania
                <br />
                <fieldset id="el">
                    <legend>Nazwa zadania</legend>
                    <input 
                        type="text" 
                        value={this.state.name}
                        name="name"
                        onChange={this.onChange}
                    />
                </fieldset>
                { isNameError && <span style={{ color: 'red'}}>Length of name must be minimum 5.</span>}
                <br />
                <input 
                    type="text" 
                    placeholder="Kwota w PLN" 
                    className="price-input"
                    name="pricePln"
                    value={this.state.pricePln}
                    onChange={this.onChange}
                />
                { isLetterError && <span style={{color: 'red'}}>It's not a number.</span>}
                <br />
                <div className="submit-form-add-exercise-container">
                    <div className="currency-div">1 euro = 4.8282</div>
                    <div className="add-exercise-button">
                        <button
                            onClick={this.onSubmit}
                        >
                            Dodaj
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddExercise;
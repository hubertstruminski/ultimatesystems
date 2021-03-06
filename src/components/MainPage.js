import React from 'react';
import '../css/MainPage.css';
import SearchEmployee from './SearchEmployee';
import AddExercise from './AddExercise';
import ExerciseTable from './ExerciseTable';
import SearchEmployeeActive from './SearchEmployeeActive';
import $ from 'jquery';

class MainPage extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: [
                {name: 'Javascript', pricePln: 1750, priceEur: Math.round((1750 / 4.8282) * 100) / 100},
                {name: 'Java', pricePln: 2250, priceEur: Math.round((2250 / 4.8282) * 100) / 100},
                {name: '.NET', pricePln: 3476, priceEur: Math.round((3476 / 4.8282) * 100) / 100},
                {name: 'C', pricePln: 1200, priceEur: Math.round((1200 / 4.8282) * 100) / 100},
            
            ]
        }
        this.addNewTask = this.addNewTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addNewTask(object) {
        this.setState({ tasks: this.state.tasks.concat(object) });
    }

    removeTask(index) {
        this.setState({ tasks: this.state.tasks.filter((item, i) => i !== index)});
    }

    sortUpByName(a, b) {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        return 0;
    }
    
    sortDownByName(a, b) {
        if(a.name < b.name) return 1;
        if(a.name > b.name) return -1;
        return 0;
    }

    sortUpByPricePln(a, b) {
        if(a.pricePln < b.pricePln) return 1;
        if(a.pricePln > b.pricePln) return -1;
        return 0;
    }

    sortDownByPricePln(a, b) {
        if(a.pricePln > b.pricePln) return 1;
        if(a.pricePln < b.pricePln) return -1;
        return 0;
    }

    sortUpByPriceEur(a, b) {
        if(a.priceEur < b.priceEur) return 1;
        if(a.priceEur > b.priceEur) return -1;
        return 0;
    }

    sortDownByPriceEur(a, b) {
        if(a.priceEur > b.priceEur) return 1;
        if(a.priceEur < b.priceEur) return -1;
        return 0;
    }

    renderEmployeeResult(name) {
        $(".search-result-employee-input").text(name);
    }

    render() {
        return (
            <>
                <div className="main-container">
                    <div className="main-page-grid-container">
                        <div className="grid-one-column">
                            <SearchEmployee />
                            <br />
                            <AddExercise 
                                addNewTask={this.addNewTask}
                            />
                        </div>
                        <div className="grid-two-column">
                            <div className="arrow-introduction-container">
                                <i class="fas fa-arrows-alt-h"></i>
                                <i class="fas fa-arrows-alt-h"></i>
                            </div>
                            <div className="search-employees-container">
                                <SearchEmployeeActive 
                                    renderEmployeeResult={this.renderEmployeeResult}
                                />
                            </div>
                            <div className="results-employees-container">
                                <div className="results-one-grid-column">
                                    <i class="fas fa-arrows-alt-h"></i>
                                </div>
                                <div className="results-two-grid-column">
                                    <fieldset id="el2">
                                        <legend>Pracownik</legend>
                                        <div className="search-result-employee-input">
                                            Hubert Strumiński
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ExerciseTable 
                    tasks={this.state.tasks}
                    removeTask={this.removeTask}
                    sortUpByName={this.sortUpByName}
                    sortDownByName={this.sortDownByName}
                    sortUpByPricePln={this.sortUpByPricePln}
                    sortDownByPricePln={this.sortDownByPricePln}
                    sortUpByPriceEur={this.sortUpByPriceEur}
                    sortDownByPriceEur={this.sortDownByPriceEur}
                />
            </>
        );
    }
}

export default MainPage;
import React from 'react';
import '../css/ExerciseTable.css';
import Task from '../components/Task';
import $ from 'jquery';
import NumericConverter from '../util/NumericConverter';

class ExerciseTable extends React.Component {
    constructor() {
        super();

        this.state = {
            onNameUpSort: false,
            onDownNameSort: false,
            onUpPricePlnSort: false,
            onDownPricePlnSort: false,
            onUpPriceEurSort: false,
            onDownPriceEurSort: false
        }
        this.NumericConverter = new NumericConverter();

        this.onUpNameSort = this.onUpNameSort.bind(this);
        this.onDownNameSort = this.onDownNameSort.bind(this);
        this.onUpPricePlnSort = this.onUpPricePlnSort.bind(this);
        this.onDownPricePlnSort = this.onDownPricePlnSort.bind(this);
        this.onUpPriceEurSort = this.onUpPriceEurSort.bind(this);
        this.onDownPriceEurSort = this.onDownPriceEurSort.bind(this);
    }

    renderNewTask() {
        return this.props.tasks.map((task, index) => {
            return (
                <Task 
                    index={index}
                    name={task.name}
                    pricePln={task.pricePln}
                    priceEur={task.priceEur}
                    removeTask={this.props.removeTask}
                />
            );
        });
    }

    onUpNameSort() {
        this.setState({ 
            onNameUpSort: false,
            onDownNameSort: false,
            onUpPricePlnSort: false,
            onDownPricePlnSort: false,
            onUpPriceEurSort: false,
            onDownPriceEurSort: false
        }, 
            () => {
            this.props.tasks.sort(this.props.sortUpByName);
            $("tbody").html("");
            this.setState({ onNameUpSort: true });
        });
    }

    onDownNameSort() {
        this.setState({ 
            onDownNameSort: false,
            onNameUpSort: false,
            onUpPricePlnSort: false,
            onDownPricePlnSort: false,
            onUpPriceEurSort: false,
            onDownPriceEurSort: false
        }, () => {
            this.props.tasks.sort(this.props.sortDownByName);
            $("tbody").html("");
            this.setState({ onDownNameSort: true });
        });
    }

    onUpPricePlnSort() {
        this.setState({ 
            onDownNameSort: false,
            onNameUpSort: false,
            onUpPricePlnSort: false,
            onDownPricePlnSort: false,
            onUpPriceEurSort: false,
            onDownPriceEurSort: false
        }, () => {
            this.props.tasks.sort(this.props.sortUpByPricePln);
            $("tbody").html("");
            this.setState({ onUpPricePlnSort: true });
        });
    }

    onDownPricePlnSort() {
        this.setState({ 
            onDownNameSort: false,
            onNameUpSort: false,
            onUpPricePlnSort: false,
            onDownPricePlnSort: false,
            onUpPriceEurSort: false,
            onDownPriceEurSort: false
        }, () => {
            this.props.tasks.sort(this.props.sortDownByPricePln);
            $("tbody").html("");
            this.setState({ onDownPricePlnSort: true });
        });
    }

    onUpPriceEurSort() {
        this.setState({ 
            onDownNameSort: false,
            onNameUpSort: false,
            onUpPricePlnSort: false,
            onDownPricePlnSort: false,
            onUpPriceEurSort: false,
            onDownPriceEurSort: false
        }, () => {
            this.props.tasks.sort(this.props.sortUpByPriceEur);
            $("tbody").html("");
            this.setState({ onUpPriceEurSort: true });
        });
    }

    onDownPriceEurSort() {
        this.setState({ 
            onDownNameSort: false,
            onNameUpSort: false,
            onUpPricePlnSort: false,
            onDownPricePlnSort: false,
            onUpPriceEurSort: false,
            onDownPriceEurSort: false
        }, () => {
            this.props.tasks.sort(this.props.sortDownByPriceEur);
            $("tbody").html("");
            this.setState({ onDownPriceEurSort: true });
        });
    }

    renderTotalPrice() {
        let pln = 0;
        let euro = 0;
        this.props.tasks.map((task, index) => {
            if(!(task.pricePln instanceof String)) {
                pln += this.NumericConverter.convertToNumber(task.pricePln);
                euro += task.priceEur;
            } else {
                pln += task.pricePln;
                euro += task.priceEur;
            }
        });
        return [pln, euro]
    }

    

    render() {
        let onNameUpSort = this.state.onNameUpSort;
        let onDownNameSort = this.state.onDownNameSort;
        let onUpPricePlnSort = this.state.onUpPricePlnSort;
        let onDownPricePlnSort = this.state.onDownPricePlnSort;
        let onUpPriceEurSort = this.state.onUpPriceEurSort;
        let onDownPriceEurSort = this.state.onDownPriceEurSort;
        const totals = this.renderTotalPrice();
        return (
            <>
                <div className="table-exercise-container">
                    <div className="table-container">
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <div>
                                            <div className="title">Nazwa zadania</div>
                                            <div className="arrows">
                                                <i class="fas fa-sort-up arrow-pointer" onClick={this.onUpNameSort}></i>
                                                <i class="fas fa-sort-down arrow-pointer" onClick={this.onDownNameSort}></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div>
                                            <div className="title">Kwota w PLN</div>
                                            <div className="arrows">
                                                <i class="fas fa-sort-up arrow-pointer" onClick={this.onUpPricePlnSort}></i>
                                                <i class="fas fa-sort-down arrow-pointer" onClick={this.onDownPricePlnSort}></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div>
                                            <div className="title">Kwota w EUR</div>
                                            <div className="arrows">
                                                <i class="fas fa-sort-up arrow-pointer" onClick={this.onUpPriceEurSort}></i>
                                                <i class="fas fa-sort-down arrow-pointer" onClick={this.onDownPriceEurSort}></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div>
                                            <div className="title">Opcje</div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderNewTask()}
                                { onNameUpSort && this.renderNewTask() }
                                { onDownNameSort && this.renderNewTask() }
                                { onUpPricePlnSort && this.renderNewTask() }
                                { onDownPricePlnSort && this.renderNewTask() }
                                { onUpPriceEurSort && this.renderNewTask() }
                                { onDownPriceEurSort && this.renderNewTask() }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="total-container">
                    <div className="total-inside-wrapper">
                        Suma: {totals[0]} PLN ({totals[1]} Euro)
                    </div>
                </div>
            </>
        );
    }
}

export default ExerciseTable;
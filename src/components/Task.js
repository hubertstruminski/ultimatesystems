import React from 'react';

class Task extends React.Component {
    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        this.props.removeTask(this.props.index);
    }

    render() {
        return (
            <tr key={this.props.index}>
                <td>{this.props.name}</td>
                <td>{this.props.pricePln} PLN</td>
                <td>{this.props.priceEur} EUR</td>
                <td 
                    onClick={this.onDelete}
                    style={{ cursor: 'pointer' }}
                >
                    <i class="fas fa-trash trash-container"></i>
                    Usuń
                </td>
            </tr>
        );
    }
}

export default Task;
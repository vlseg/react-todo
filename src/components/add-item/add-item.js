import React, { Component } from 'react'
import './add-item.css'

export default class AddItem extends Component {

    state = {
        textLabel: '',
    };

    onLabelChange = (e) => {
        this.setState ({
            textLabel: e.target.value,
        })
    };

    onSubmit = (e) => {
        if (this.state.textLabel.length > 0) {
            e.preventDefault();
            this.props.addItem(this.state.textLabel);
            this.setState({textLabel: ''})
        } else {
            alert('Введите название...')
        }
    };

    render() {

        return (
            <form className="d-flex add-item" onSubmit={ this.onSubmit }>
                <input
                    type="text"
                    placeholder="добавить здачу в список дел"
                    className="form-control mr-2"
                    value={this.state.textLabel}
                    onChange={ this.onLabelChange }
                ></input>
                <button type="submit" className="btn btn-outline-warning mr-1">
                    <i className="fa fa-plus"/>
                </button>
            </form>
        );
    }
};


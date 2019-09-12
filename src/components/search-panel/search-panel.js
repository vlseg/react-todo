import React, { Component } from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {

    state = {
        textSearch: ''
    }

    searchValue = (e) => {
        this.setState ({
            textSearch: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onDoneItem(this.state.textSearch)
    }

    render() {

        return (

        <form className="form-group row mr-1 search-panel"
            onSubmit={this.onSubmit}
        >
            <div className="input-group">
                <input
                    type="text"
                    placeholder="поиск задачи"
                    onChange={this.searchValue}
                    className="form-control search-input"
                ></input>
            </div>
        </form>
        )
    }
};



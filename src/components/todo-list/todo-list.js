import React, { Component } from 'react'
import './todo-list.css'
import TodoListItem from '../todo-list-item';


export default class TodoList extends Component {

    render () {

        const {todos, search, filter, onSelectItem, onDeleted, onDoneItem} = this.props;

        let todosSearch = todos.filter(item =>
            item.label.toLocaleLowerCase().indexOf(search.toLowerCase()) !== -1
        );
        var todosAllFilter;
        if(filter === 'all') todosAllFilter = todosSearch;
        if(filter === 'active') todosAllFilter = todosSearch.filter(
            item => item.done == false
        );
        if(filter === 'done') todosAllFilter = todosSearch.filter(
            item => item.done == true
        );

        const elements = todosAllFilter.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className="list-group-item">
                    <div className="row justify-content-between">
                        <TodoListItem
                            {...itemProps}
                            onDoneItem = {() => onDoneItem(id)}
                        />
                        <div className="form-group">
                            <button type="button" className="btn btn-outline-warning mr-1"
                                onClick={ () => onDeleted(id) }
                            >
                                <i className="fa fa-trash-o" />
                            </button>
                            <button type="button" className="btn btn-outline-primary"
                                onClick={ () => onSelectItem(id) }
                            >
                                <i className="fa fa-exclamation" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </li>
            );
        });
        return (
            <div>
                <ul className="list-group todo-list">
                    { elements }
                </ul>
            </div>
        );
    }
};

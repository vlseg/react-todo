import React, { Component } from 'react';

import AppHeader from "../app-header";
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from "../todo-list";
import AddItem from "../add-item";

import './app.css'


export default class App extends Component {

    state = {
        todoData: [
            {label: 'Выпить кофе', important: false, id: '1', done: false},
            {label: 'Сделать отличное приложение', important: true, id: '2', done: false},
            {label: 'Позавтракать', important: false, id: '3', done: false}
        ],
        search: '',
        filter: 'all'
    };

    statusItem = (id) => {
        this.setState(({ todoData }) => {
            let newArray = [...todoData];
            newArray.forEach(function (el, num, newArray) {
                if(el.id === id) id = num+1;
            });
            newArray[id - 1].important = newArray[id - 1].important ? false : true
            return {
                todoData: newArray
            }
        })
    };

    doneItem = (id) => {
        this.setState(({ todoData }) => {
            let newArray = [...todoData];
            newArray.forEach(function (el, num, newArray) {
                if (el.id === id) id = num + 1; });
            newArray[id - 1].done = newArray[id - 1].done ? false : true
            return {
                todoData: newArray
            }
        })
    };

    searchItem = (text) => {
        this.setState({
            search: text
        })
    };

    filterItem = (value) => {
        this.setState({
            filter: value
        })
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            let newArray = [...todoData];
            newArray = newArray.filter((el) => el.id !== id)
            return {
                todoData: newArray
            }
        })
    };

    addItem = (label) => {
        this.setState(({ todoData }) => {
            let newArray = [...todoData];
            const idx = todoData.length
            newArray.push({
                label: label,
                important: false,
                id: idx + 1,
                done: false
            });
            return {
                todoData: newArray
            }
        })
    };

    render() {

        const { todoData, search, filter } = this.state;

        return (
            <div className="todo-app">
                <AppHeader
                    todos = { todoData }
                />
                <div className="row">
                    <SearchPanel className="col-sm-9"
                        onDoneItem = {this.searchItem}
                    />
                    <ItemStatusFilter className="col-sm-3"
                        onFilterItem = {this.filterItem}
                    />
                </div>
                <TodoList
                    todos = { todoData }
                    search = { search }
                    filter = { filter }
                    onSelectItem = { this.statusItem }
                    onDeleted = { this.deleteItem }
                    onDoneItem = {this.doneItem}
                />
                <AddItem
                    addItem = { this.addItem }
                />
            </div>
        );
    };
};

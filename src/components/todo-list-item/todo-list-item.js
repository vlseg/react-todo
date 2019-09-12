import React, {Component} from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {

    render() {

        const { done, onDoneItem, label, important=false } = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        let className =  "todo-list-item";
        if(done) {
            className += ' done';
        }

        return (
            <span className={className}
                style={style}
                onClick={onDoneItem}
            >
                { label }
            </span>
        )
    }

}

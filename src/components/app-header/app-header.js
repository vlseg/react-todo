import React, {Component} from 'react'
import './app-header.css'

export default class AppHeader extends Component {

    render() {

        const { todos } = this.props;
        const done = todos.filter(item => item.done).length

        const info = `сделано: ${done}, осталось: ${todos.length - done}`

        return (
            <div className="app-header">
                <div className="row justify-content-between">
                    <h1>Список дел</h1>
                    <h6>{info}</h6>
                </div>
            </div>
        )
    };
}



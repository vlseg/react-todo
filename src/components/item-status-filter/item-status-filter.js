import React, { Component } from 'react'
import './item-status-filter.css'


export default class ItemStatusFilter extends Component {

    render () {

    const { onFilterItem } = this.props;

        return (
                <div className="btn-group item-status-filter mb-4">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => onFilterItem('all')}
                    >Все</button>
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => onFilterItem('active')}
                    >Активные</button>
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => onFilterItem('done')}
                    >Сделанные</button>
                </div>
            );
        }
}


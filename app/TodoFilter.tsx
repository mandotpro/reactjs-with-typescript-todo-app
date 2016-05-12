import * as React from "react";
import {Component} from "react";
import TodoModel from './models/Todo.model';

import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from "./actions/todo.action";

interface IProps {
    onFilter: Function
}

interface IFilters {
    filter: string,
    text: string
}

export class TodoFilter extends Component<IProps, {}> {
    private filters: IFilters[] = [
        {
            filter: FILTER_ALL,
            text: "All"
        },
        {
            filter: FILTER_ACTIVE,
            text: "Active"
        },
        {
            filter: FILTER_COMPLETED,
            text: "Completed"
        }
    ];
    private activeFilter: string = FILTER_ALL;
    
    private _stylesUL = {
        listStyleType: "none",
        padding: 0,
        margin: 0,
    };
    
    private _stylesLI = {
        display: "inline",
        marginLeft: "5px",
        cursor: "pointer"
    }
    
    constructor(props : IProps) {
        super(props);
    }

    render() {
        let activeEl = Object.assign({}, this._stylesLI, { fontWeight: 'bold' })
        return (
            <ul style={this._stylesUL}> {
                    this.filters.map((item, index) => {
                        return <li key={index} onClick={this.props.onFilter.bind(null, item.filter)} data-test-id={item.filter} style={ item.filter == this.activeFilter ? activeEl : this._stylesLI}>{ item.text }</li>
                    })
                }
            </ul>
        )
    }
}
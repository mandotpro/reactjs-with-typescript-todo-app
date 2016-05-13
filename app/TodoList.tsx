import * as React from "react";
import {Component} from "react";
import TodoModel from './models/Todo.model';

import { FILTER_ACTIVE, FILTER_COMPLETED } from "./actions/todo.action";

interface IProps {
    todos: TodoModel[],
    filter: string,
    onClick: Function,
    onDelete: Function
}

export class TodoList extends Component<IProps, {}> {
    constructor(props : IProps) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map( (todo, index) => {
                    let style = {textDecoration: todo.isCompleted ? 'line-through' : 'none', cursor: 'pointer'};
                    let deleteButtonStyle = {'cursor': 'pointer', 'marginLeft': '5px', 'color': 'red'};
                    
                    if( this.props.filter ==  FILTER_ACTIVE && todo.isCompleted){
                        return;
                    } else if(this.props.filter ==  FILTER_COMPLETED && !todo.isCompleted){
                        return;
                    }
                    
                    return (
                        <li key={index}>
                            <span data-test-id={'todoItem-'+index} style={style} onClick={this.props.onClick.bind(null, index)} >{todo.text}</span> 
                            <span data-test-id={'todoDeleteItem-'+index} style={deleteButtonStyle} onClick={this.props.onDelete.bind(null,index)}>X</span>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
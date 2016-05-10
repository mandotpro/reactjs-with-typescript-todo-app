import * as React from "react";
import {Component} from "react";
import TodoModel from './models/Todo.model';

interface IProps {
    todos: TodoModel[],
    onClick: Function
}

export class TodoList extends Component<IProps, {}> {
    constructor(props : IProps) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map( (todo, index) => {
                    let style = {textDecoration: todo.isCompleted ? 'line-through' : 'none'};
                    return <li key={index} style={style} onClick={this.props.onClick.bind(null, index)}>{todo.text}</li>
                })}
            </ul>
        )
    }
}
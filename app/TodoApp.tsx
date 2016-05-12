import * as React from "react";

import { connect } from 'react-redux';

import {TodoList} from './TodoList';
import {TodoFilter} from './TodoFilter';

import { TOGGLE_TODO, ADD_TODO, APPLY_FILTER, DELETE_TODO } from "./actions/todo.action";
import { IState } from "./interfaces/IState";

class TodoApp extends React.Component<any, {}> {
    constructor(props: IState) {
        super(props);
    }

    addTodoHandler() {
      this.props.addTodoHandler(this.refs.todoTextInputRef.value);
      this.refs.todoTextInputRef.value = "";
    }

    render() {
        return (
          <div>
            <input data-test-id="addNewTodoInput" type="text" ref="todoTextInputRef"/>
            <button data-test-id="addNewTodoBtn" onClick={this.addTodoHandler.bind(this)}>Add</button>
            <TodoList filter={this.props.filter} todos={this.props.todos} onClick={this.props.todoClickHandler} onDelete={this.props.deleteTodoHandler} />
            <TodoFilter filter={this.props.filter} onFilter={this.props.filterTodos} />
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    todoClickHandler: (index) => {
      dispatch({
          type: TOGGLE_TODO,
          index
      })
    },
    addTodoHandler: (value) => {
      dispatch({
          type: ADD_TODO,
          value
      })
    },
    deleteTodoHandler: (index) => {
      dispatch({
          type: DELETE_TODO,
          index
      })
    },
    filterTodos: (filter) => {
      dispatch({
          type: APPLY_FILTER,
          filter
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
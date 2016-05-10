import * as React from "react";

import { connect } from 'react-redux';

import {TodoList} from './TodoList';

class TodoApp extends React.Component<any, {}> {
    constructor(props : {}) {
        super(props);
    }

    addTodoHandler() {
      this.props.addTodoHandler(this.refs.todoTextInputRef.value);
      this.refs.todoTextInputRef.value = "";
    }

    render() {
        return (
          <div>
            <input type="text" ref="todoTextInputRef"/>
            <button onClick={this.addTodoHandler.bind(this)}>Add</button>

            <TodoList todos={this.props.todos} onClick={this.props.todoClickHandler}/>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    todoClickHandler: (index) => {
      dispatch({
          type: 'TOGGLE_TODO',
          index
      })
    },
    addTodoHandler: (value) => {
      dispatch({
          type: 'ADD_TODO',
          value
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
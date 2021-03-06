/// <reference path='../typings/main.d.ts'/>
import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import appState from './reducers/index';
import TodoApp from './TodoApp';
import TodoModel from "./models/Todo.model";


let initialState : {todos: TodoModel[]} = {
    todos: []
};

let store = createStore(appState, initialState);

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('root')
);
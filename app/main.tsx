/// <reference path='../typings/main.d.ts'/>
import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import appState from './reducers/index';
import TodoApp from './TodoApp';

let store = createStore(appState);

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('root')
);
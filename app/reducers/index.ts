import { combineReducers } from 'redux';
import TodoModel from '../models/Todo.model';

let initialState:{todos: TodoModel[]} = {
    todos: [
        new TodoModel('Emo', false),
        new TodoModel('Angel', false),
        new TodoModel('Joro', true),
        new TodoModel('Reuf', false)
    ]
};

const appState = ( state=initialState, action ) => {
    switch (action.type) {
        case 'TOGGLE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if(index === action.index) {
                        return new TodoModel(todo.text, !todo.isCompleted);
                    }
                    return todo;
                })
            });
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [...state.todos, new TodoModel(action.value, false)]
            });
        default:
            return state;
    }
};

export default appState
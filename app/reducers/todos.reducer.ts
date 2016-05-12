import { TOGGLE_TODO, ADD_TODO, DELETE_TODO } from "../actions/todo.action";
import TodoModel from '../models/Todo.model';

export const TodosReducer = ( todos = [], action ) => {
    switch (action.type) {
        case TOGGLE_TODO:
                return todos.map((todo, index) => {
                    if(index === action.index) {
                        return new TodoModel(todo.text, !todo.isCompleted);
                    }
                    return todo;
                });
        case ADD_TODO:
            return [...todos, new TodoModel(action.value, false)];
        case DELETE_TODO:
            return [
                ...todos.slice(0, action.index),
                ...todos.slice(action.index+1)
            ];
        default:
            return todos;
    }
};
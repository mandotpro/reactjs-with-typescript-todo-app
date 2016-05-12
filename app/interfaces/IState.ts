import TodoModel from '../models/Todo.model';

export interface IState {
    todos: TodoModel[], 
    todosHolder: TodoModel[], 
    filter: string
}
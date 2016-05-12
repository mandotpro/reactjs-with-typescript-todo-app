import { combineReducers } from 'redux';

import { TodosReducer } from './todos.reducer';
import { FilterReducer } from './filter.reducer';

const appState = combineReducers({
   todos: TodosReducer,
   filter: FilterReducer
});

export default appState
import { APPLY_FILTER, FILTER_ALL } from "../actions/todo.action";

export const FilterReducer = ( state = FILTER_ALL, action ) => {
    switch (action.type) {
        case APPLY_FILTER:
            return action.filter;
        default:
            return state
    }
};
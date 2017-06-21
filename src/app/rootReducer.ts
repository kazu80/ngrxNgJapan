import * as TodoActions from './todoActions';
import {Action, ActionReducer, combineReducers} from '@ngrx/store';

const initialState = [];
const todos        = (state = initialState, action) => {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            return state.concat({
                id       : action.id,
                text     : action.text,
                completed: action.completed
            });

        case TodoActions.TOGGLE_TODO:
            return toggleTodo(state, action);

        default:
            return state;
    }
};

function toggleTodo(state, action) {
    return state.map(todo => {
        if (todo.id !== action.id) {
            return todo;
        }

        return {
            id       : todo.id,
            text     : todo.text,
            completed: !todo.completed
        }
    });
}

export interface Filter {
    currentFilter: string;
}

const currentFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case TodoActions.SET_CURRENT_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export interface Todo {
    text: string;
}

export interface TodosState {
    todos: Todo;
    currentFilter: Filter;
}

const combinedReducer: ActionReducer<TodosState> = combineReducers({
    todos        : todos,
    currentFilter: currentFilter
});

export const rootReducer = (state, action) => combinedReducer(state, action);

export const getTodos         = state$ => state$.select(s => s.todos);
export const getCurrentFilter = state$ => state$.select(s => s.currentFilter);


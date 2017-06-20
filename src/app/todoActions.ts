export const ADD_TODO           = 'ADD_TODO';
export const TOGGLE_TODO        = 'TOGGLE_TODO';
export const REMOVE_TODO        = 'REMOVE_TODO';
export const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';

export class TodoActions {
    addTodo(text) {
        return {
            type: ADD_TODO,
            text: text,
            id  : 1
        };
    };
}
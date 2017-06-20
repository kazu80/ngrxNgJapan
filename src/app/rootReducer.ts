import * as TodoActions from './todoActions';

const initialState = [];
const todos        = (state = initialState, action) => {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            return state.concat({
                text: action.text,
                id  : 1
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

export const rootReducer = {todos: todos};

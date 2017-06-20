import * as TodoActions from './todoActions';

const initialState = [];
const todos        = (state = initialState, action) => {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            return state.concat({
                text: action.text,
                id  : 1
            });

        default:
            return state;
    }
};

export const rootReducer = {todos: todos};

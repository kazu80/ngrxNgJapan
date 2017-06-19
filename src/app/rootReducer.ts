import * as TodoActions from './todoActions';

const initialState = [];
const todo         = (state = initialState, action) => {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            return state.concat({
                text: action.text,
            });

        default:
            return state;
    }
};


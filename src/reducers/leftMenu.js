import * as ActionTypes from '../actions';

const initLeftMenuState = {
    open: true
};

const leftMenu = (state = initLeftMenuState, action) => {
    switch(action.type) {
        case ActionTypes.TOGGLE_LEFT_MENU:
            return {
                ...state,
                open: !state.open
            };
        default:
            return state;
    }
};

export default leftMenu;
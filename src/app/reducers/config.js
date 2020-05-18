import { SET_VERSION, SET_THEME } from '../actions/config';

const initialState = {
    version: null,
    theme: 'light'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_VERSION:
            return {
                ...state,
                version: action.payload.version
            };
        case SET_THEME: {
            return {
                ...state,
                theme: action.payload.theme
            };
        }
        default: return state;
    }
};
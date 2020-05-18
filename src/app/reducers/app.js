import { SHOW_GLOBAL_ERROR } from '../actions/app';

const initialState = {
    showError: false,
    status: null,
    key: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_GLOBAL_ERROR:
            return {
                ...state,
                showError: action.payload.showError,
                status: action.payload.status,
                key: action.payload.key
            };
        default: return state;
    }
};
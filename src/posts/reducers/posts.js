import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE
} from '../actions/posts';

const initialState = {
    fetching: false,
    data: [],
    total: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST: {
            return {
                ...state,
                fetching: true,
                data: []
            };
        }
        case GET_POSTS_SUCCESS: {
            return {
                ...state,
                fetching: false,
                data:action.payload.data
            };
        }
        case GET_POSTS_FAILURE: {
            return {
                ...state,
                fetching: false
            };
        }

        default:
            return state;
    }
};

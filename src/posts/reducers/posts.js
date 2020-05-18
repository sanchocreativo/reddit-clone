import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE
} from '../actions/posts';

const initialState = {
    fetching: false,
    posts: [],
    total: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST: {
            return {
                ...state,
                fetching: true,
                posts: []
            };
        }
        case GET_POSTS_SUCCESS: {
            return {
                ...state,
                fetching: false,
                posts:action.payload.posts
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

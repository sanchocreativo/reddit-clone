import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    SET_POSTS
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
                fetching: true
            };
        }
        case GET_POSTS_SUCCESS: {
            return {
                ...state,
                fetching: false,
                data: action.payload.data,
                total:
                (!action.payload.total || action.payload.total === 0) ? state.total : action.payload.total,
            };
        }
      
        case GET_POSTS_FAILURE: {
            return {
                ...state,
                fetching: false
            };
        }
        case SET_POSTS: {
            return {
                ...state,
                data: action.payload.data,
                total: action.payload.total
            };
        }

        default:
            return state;
    }
};

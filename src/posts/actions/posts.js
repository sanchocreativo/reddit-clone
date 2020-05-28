export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export const SET_POSTS = 'SET_POSTS';


export const getPostsRequest = (filters = {}) => ({
    type: GET_POSTS_REQUEST,
    payload: {
        filters
    }
});

export const getPostsSuccess = (data = [], total) => ({
    type: GET_POSTS_SUCCESS,
    payload: {
        data,
        total
    }
});

export const getPostsFailure = err => ({
    type: GET_POSTS_FAILURE,
    error: err
});

export const setPosts = (data = [], total = 0) => ({
    type: SET_POSTS,
    payload: {
        data,
        total
    }
});


export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';


export const getPostsRequest = (filters = {}) => ({
    type: GET_POSTS_REQUEST,
    payload: {
        filters
    }
});

export const getPostsSuccess = (data = []) => ({
    type: GET_POSTS_SUCCESS,
    payload: {
        data
    }
});

export const getPostsFailure = err => ({
    type: GET_POSTS_FAILURE,
    error: err
});


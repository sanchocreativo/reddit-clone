import {  put, call, takeLatest } from 'redux-saga/effects';
import {
    getPostsSuccess,
    getPostsFailure,
    GET_POSTS_REQUEST
} from '../actions/posts';
import { getPosts } from '../services/posts';
import { showGlobalError } from '../../app/actions/app';

const getPostsWorker = function* ({ payload: { filters } }) {
    try {

        const { data: { posts } } = yield call(getPosts, filters);

        yield put(getPostsSuccess(posts));

    } catch (err) {
        yield put(showGlobalError(true, err));
        yield put(getPostsFailure(err));
    }
};

export default [
    takeLatest(GET_POSTS_REQUEST, getPostsWorker)
];

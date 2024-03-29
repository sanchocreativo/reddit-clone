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
        
        const { data: {data : {children}} } = yield call(getPosts, filters);

        const total = 50;
        yield put(getPostsSuccess(children, total));

    } catch (err) {
        yield put(showGlobalError(true, err));
        yield put(getPostsFailure(err));
    }
};

export default [
    takeLatest(GET_POSTS_REQUEST, getPostsWorker)
];

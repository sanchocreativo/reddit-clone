import { all } from 'redux-saga/effects';
import posts from '../posts/sagas';

export default function* () {
    yield all([
        posts()
    ]);
}

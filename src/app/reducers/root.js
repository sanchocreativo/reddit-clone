import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import app from './app';
import config from './config';
import posts from "../../posts/reducers";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'app',
        'posts',

    ],
    whitelist: [
        'config'
    ]
};

const rootReducer = combineReducers({
    app,
    config,
    posts
});

export default persistReducer(persistConfig, rootReducer);
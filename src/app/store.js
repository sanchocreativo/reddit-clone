import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import persistedRootReducer from './reducers/root';
import rootSaga from './rootSaga';

const sagas = createSagaMiddleware();

const setMiddlewares = () => {
    let middlewares = [sagas];

    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger({ collapsed: true });

        middlewares = [...middlewares, logger];
    }

    return middlewares;
};

const store = createStore(
    persistedRootReducer,
    compose(
        composeWithDevTools(
            applyMiddleware(...setMiddlewares())
        )
    )
);

sagas.run(rootSaga);

export const persistedStore = persistStore(store);

export default store;
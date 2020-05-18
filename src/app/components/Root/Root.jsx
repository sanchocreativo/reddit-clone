import React, { Suspense } from 'react';
import map from 'lodash/map';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../RouteWithSubRoutes/RouteWithSubRoutes';
import store, { persistedStore } from '../../store';
import Body from '../Body';
import Control from '../Control';
import routes from '../../routes';
import Loading from '../Loading';

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
            <HashRouter>
                <Control>
                    <Body>
                        <Suspense fallback={<Loading />}>
                            <Switch>
                                {map(routes, (route, index) => (
                                    <RouteWithSubRoutes key={index} {...route} />
                                ))}
                            </Switch>
                        </Suspense>
                    </Body>
                </Control>
            </HashRouter>
        </PersistGate>
    </Provider>
);
export default Root;
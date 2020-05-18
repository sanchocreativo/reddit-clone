import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import map from 'lodash/map';
import { Switch } from 'react-router-dom';
import { innerRoutes, defaultPath } from '../../routes';
import styles from './entryPoint.module.scss';

const EntryPoint = () => (
    <div className={styles.container}>
        <Switch>
            {map(innerRoutes, (route, i) => (
                <Route
                    key={i}
                    exact={route.exact}
                    path={route.path}
                    render={renderProps => <route.Component {...renderProps} innerRoutes={route.innerRoutes} />}
                />
            ))}
            <Route path="*">
                <Redirect to={defaultPath} />
            </Route>
        </Switch>
    </div>
);

export default memo(EntryPoint);
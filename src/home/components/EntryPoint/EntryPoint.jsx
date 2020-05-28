import React, { memo, Suspense } from 'react';
import RouteWithInnerRoutes from '../../../app/components/RouteWithSubRoutes/RouteWithSubRoutes';
// import SideBar from '../SideBar';
import Loading from '../../../app/components/Loading';
import Header from "../Header"
import map from 'lodash/map';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styles from './entryPoint.module.scss';

import { defaultPath as postsPath } from "../../../posts/routes";

const EntryPoint = withRouter(({
    innerRoutes,
    location
}) => {

    return (

        <div className={styles.grid}>
         
            <div className={styles.main}>

                <Header innerRoutes={innerRoutes} location={location} />

                <div className={styles.wrapper}>
                    <Suspense fallback={<Loading theme />}>
                        <Switch>
                            {map(innerRoutes, (route, index) => {
                                return <RouteWithInnerRoutes key={index} {...route} />;
                            })}
                            <Route path="*">
                                <Redirect to={postsPath} />
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        </div>
    );
});

export default memo(EntryPoint);

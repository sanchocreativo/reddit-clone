import React, { memo } from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = memo(({ Component, exact, path, innerRoutes }) => (
    <Route exact={exact} path={path} render={renderProps => <Component {...renderProps} innerRoutes={innerRoutes} />} />
));

export default RouteWithSubRoutes;
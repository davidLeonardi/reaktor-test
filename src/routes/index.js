import React from 'react';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {createHistory} from 'history';

// containers
import CheckPackagesContainer from '../containers/CheckPackagesContainer';

// pages
import ListPage from '../pages/ListPage';
import PackagePage from '../pages/PackagePage';
import NotFoundPage from '../pages/NotFoundPage';

import * as PATHS from '../constants/routePaths';

// Define routes
export const routes = (
    <Route
        component={CheckPackagesContainer}
        path={PATHS.ROOT}
    >
        <IndexRoute component={ListPage} />

        <Route
            component={ListPage}
            path={PATHS.LANDING}
        />

        <Route
            component={PackagePage}
            path={PATHS.PACKAGE + '(/:packageId)'}
        />

        <Route
            component={NotFoundPage}
            path='**'
        />

    </Route>
);

/**
 * Create a custom history to allow the app to run in a subdirectory
 * The public path is defined in the webpack.config
 * eslint-disable-next-line
 * @see: https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md#user-content-customize-your-history-further
 */
const history = useRouterHistory( createHistory )( {basename: ( typeof __PUBLIC_PATH__ === 'string' ) ? __PUBLIC_PATH__ : __PUBLIC_PATH__.toString()} );

// Define Router app with correct history and defined routes
const RouterApp = ( props ) => (
    <Router
        history={history}
    >
        {routes}
    </Router>
);

export default RouterApp;

import React from 'react';
import { Route, Switch } from "react-router-dom";


const RenderRoutes = ({ routes }) => {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    )
}

export default RenderRoutes;


function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            component={props => <route.component routes={route.routes} />}
        />
    );
}

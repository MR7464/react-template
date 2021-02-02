import React from "react";
import { Route, Switch } from "react-router-dom";
import routesList from "./routes-config";

const routes = routesList.reduce((i, r) => {
  let { routes: childrenRoutes, ...res } = r;
  i = i.concat([{ ...res }]);
  if (childrenRoutes) {
    i = i.concat(childrenRoutes);
  }
  return i;
}, []);

const routesMap = (routes) => {
  return (
    <Switch>
      {routes.map(({ exact = true, path, component: RouteComponent }, k) => {
        return <Route
            key={k}
            exact={exact}
            path={path}
            render={(props) => {
              //TODO: 添加页面的鉴权
              return <RouteComponent {...props} />
            }}
          />
      })}
    </Switch>
  );
};

const Router = () => routesMap(routes);

export default Router;

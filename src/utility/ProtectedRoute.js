import * as React from "react";
import { Redirect, Route } from "react-router";

export const ProtectedRoute = ({ component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  const routeComponent = () =>
    isAuthenticated ? (
      React.createElement(component, rest)
    ) : (
      // <Redirect to={{ pathname: "/auth/login" }} />
      <Redirect to={{ pathname: "/" }} />

    );

  return <Route {...rest} component={routeComponent} />;
};

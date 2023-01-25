import * as React from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { Route } from "react-router";


class NestedRoute extends React.Component{
  render() {
    const { path, routes, isProtected } = this.props;
    return isProtected !== undefined && isProtected === true ? (
      <ProtectedRoute {...this.props} component={this.props.component} />
    ) : (
      <Route
        path={path}
        render={routeProps => {
          return (
            <this.props.component
              {...routeProps} {...this.props}
              routes={routes !== undefined && routes.length > 0 ? routes : []}
            />
          );
        }}
      />
    );
  }
}

export default NestedRoute
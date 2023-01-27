import React from "react";
import { Route } from "react-router-dom";



// var showillustration = "";

function Auth(props) {
  return (
    // <Row>
    //   <Col span={24} xl={8}>
    <>
      {props.routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          render={props => {
            return (
              <route.component  {...props} />
            );
          }}
        />
      ))}
    </>

    //   </Col>
    // </Row>

  );
}

export default Auth;

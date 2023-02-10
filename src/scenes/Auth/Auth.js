import React from "react";
import { Route } from "react-router-dom";
import { message } from "antd";



// var showillustration = "";

function Auth(props) {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    // <Row>
    //   <Col span={24} xl={8}>
    <>
      {contextHolder}

      {props.routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          render={props => {
            return (
              <route.component  {...props} toast={messageApi} />
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

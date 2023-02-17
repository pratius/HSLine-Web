import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { message } from "antd";
import { history } from "Store";



// var showillustration = "";

function Auth(props) {
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token !== null) {
      history.push("/")

    }
  }, [])
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

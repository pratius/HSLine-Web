import fetchIntercept from "fetch-intercept";
import { history } from "../Store";
export const fetchInterceptor = fetchIntercept.register({
  request: function (url, defaultConfig) {
    // eslint-disable-next-line
    const config = defaultConfig || {};
    let wds = window;

    if (true) {
      config.headers = config.headers || {};
      config.headers["Platform"] = "HSLine";

      const token = localStorage.getItem("token");

      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
    }

    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    if (response.status === 401) {
    //   localStorage.clear();
    //   history.push("/");
      // yield put({
      //   type: "SET_TOKEN_EXPIRED",
      //   payload: true,
      // });
    }

    // Modify the reponse object
    return response;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});

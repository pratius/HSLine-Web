import { Auth } from "./";
import Login from "./components/Login";
import Register from "./components/Register";


export default {
  path: "/auth",
  component: Auth,
  strict: true,
  routes: [
    {
      path: "/auth/login",
      component: Login,
      exact: true
    },
    {
      path: "/auth/register",
      component: Register,
      exact: true
    }
  ]
};

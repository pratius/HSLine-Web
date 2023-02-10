import { Auth } from "./";
import LinkSent from "./components/LinkSent";
import Login from "./components/Login";
import ProfileSetup from "./components/ProfileSetup";
import Register from "./components/Register";
import Verify from "./components/Verify";


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
    },
    {
      path: "/auth/verify/:verification_code",
      component: Verify,
      exact: true
    },
    {
      path: "/auth/linksent",
      component: LinkSent,
      exact: true
    },
    {
      path: "/auth/profile/setup",
      component: ProfileSetup,
      exact: true,
      isProtected: true
    }
  ]
};

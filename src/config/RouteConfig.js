
import AboutUs from "scenes/AboubtUs";
import authRoutes from "scenes/Auth/authRoutes";
import Detail from "scenes/Detail";
import Landing from "scenes/Landing";
import maseterLayoutRoutes from "shared/MasterLayout/masterLayoutRoutes";

const childRoutes = [
  authRoutes,
  maseterLayoutRoutes

];

const routes = [
  {
    path: "/",
    component: Landing,
    exact: true,
    isProtected: false,
  },
  {
    path: "/detail",
    component: Detail,
    exact: true,
    isProtected: false,
  },
  {
    path: "/aboutus",
    component: AboutUs,
    exact: true,
    isProtected: false,
  },
  ...childRoutes,

];

export default routes;

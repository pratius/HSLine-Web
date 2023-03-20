
import AboutUs from "scenes/AboubtUs";
import authRoutes from "scenes/Auth/authRoutes";
import ContactUs from "scenes/ContactUs";
import Detail from "scenes/Detail";
import Landing from "scenes/Landing";
import Products from "scenes/Products";
import productRoutes from "scenes/Products/productRoutes";
import Services from "scenes/Services";
import maseterLayoutRoutes from "shared/MasterLayout/masterLayoutRoutes";
import reportRoutes from "scenes/Reporting/reportRoutes";

const childRoutes = [
  authRoutes,
  maseterLayoutRoutes,
  productRoutes,
  reportRoutes

];

const routes = [
  {
    path: "/",
    component: Landing,
    exact: true,
    isProtected: false,
  },
  {
    path: "/detail/:countryCode",
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
  {
    path: "/services",
    component: Services,
    exact: true,
    isProtected: false,
  },
  {
    path: "/contactus",
    component: ContactUs,
    exact: true,
    isProtected: false,
  },
  ...childRoutes,

];

export default routes;

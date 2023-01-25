

import Landing from "scenes/Landing";
import MasterLayout from "./MasterLayout";


let childRoutes = []
export default {
  path: "/app",
  component: MasterLayout,
  exact: true,
  isProtected: true,
  routes: [
    ...childRoutes
  ]
};




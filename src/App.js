import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

// components
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/404";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import User from "./pages/User";
import IntroModal from "./components/UI/IntroModal";
import AboutUs from "./pages/about-us";
import Landing from "./pages/landing";
import Services from "./pages/services";
import ContactUs from "./pages/contactus";
import Career from "./pages/career"

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  // show on mount
  useEffect(() => setShowModal(true), []);

  return (
    <>
      {/* Modal */}
      <IntroModal showModal={showModal} onToggle={toggleShowModal} />

      {/* Dashboard Layout */}

      <DashboardLayout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Landing" />
          </Route>

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/user" component={User} />
          <Route path="/product" component={Products} />
          <Route path="/blog" component={Blog} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/landing" component={Landing} />
          <Route path="/services" component={Services} />
          <Route path="/contactUs" component={ContactUs} />

          <Route path="/Career" component={Career} />

          <Route path="/404" component={ErrorPage} />

          <Route path="*" component={ErrorPage} />
        </Switch>
      </DashboardLayout>
    </>
  );
};

export default App;

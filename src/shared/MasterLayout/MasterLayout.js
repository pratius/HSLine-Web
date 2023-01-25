import React, { useEffect, useState } from "react";
import "./MasterLayout.scss"
import { GuardedRoute } from "react-router-guards";
import { Route } from "react-router";
import Header from "shared/Header";

import Footer from "shared/Footer";
function MasterLayout(props) {


    return (<div className="MasterLayout">
        <Header />

        <Footer />
    </div>
    )
}

export default MasterLayout
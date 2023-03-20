import Header from "shared/Header";

import SideNav from "shared/SideNav";
import { useState } from "react";
import { menuList } from "shared/SideNav/nav.constants";
import ProductLanding from "./components/report-view";
import { Route } from "react-router-dom";
import PageMenu from "shared/PageMenu";
import { Box } from "@mui/material";




export default function Reports(props) {
    const [activeSection, setActiveSection] = useState(0)
    const [drawerWidth, setDrawerWidth] = useState(260)
    return (

        <div className="flex flex-col min-h-screenpt-4 mt-36 sm:mt-16">
            <Header />
            <div className="flex flex-col justify-center " >
                {props.routes.map((route, i) => (
                    <Route
                        key={i}
                        path={route.path}
                        render={props => {
                            return (
                                <route.component  {...props} />
                            );
                        }}
                    />
                ))}
            </div>


        </div>





    )
}

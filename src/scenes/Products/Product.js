import Header from "shared/Header";

import SideNav from "shared/SideNav";
import { useState } from "react";
import { menuList } from "shared/SideNav/nav.constants";
import ProductLanding from "./components/product-landing";
import { Route } from "react-router-dom";
import PageMenu from "shared/PageMenu";
import { Box } from "@mui/material";




export default function Products(props) {
    const [activeSection, setActiveSection] = useState(0)
    return (

        <div className="flex flex-col min-h-screenpt-4 mt-36 sm:mt-16">
            <SideNav menuList={menuList['products']} onChange={setActiveSection} />

            <Header />
            <div className="flex flex-col justify-center sm:ml-64" >
                <Box
                    sx={{ display: { xl: 'none', xs: 'block', sm: 'none' } }}
                >
                    <PageMenu menuList={menuList['products']} onChange={setActiveSection} />

                </Box>
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

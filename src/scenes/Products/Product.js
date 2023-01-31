import Header from "shared/Header";

import SideNav from "shared/SideNav";
import { useState } from "react";
import { menuList } from "shared/SideNav/nav.constants";
import ProductLanding from "./components/product-landing";
import { Route } from "react-router-dom";




export default function Products(props) {
    const [activeSection, setActiveSection] = useState(0)
    console.log("comming here:", props)
    return (
        <div>

            <Header />
            <div>
                <SideNav menuList={menuList['products']} onChange={setActiveSection} />
                <div className="flex flex-col ml-60 pt-4 mt-16">
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


        </div>


    )
}

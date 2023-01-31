import Header from "shared/Header";

import SideNav from "shared/SideNav";
import { useState } from "react";
import { menuList } from "shared/SideNav/nav.constants";
import ProductLanding from "./components/product-landing";




export default function Products() {
    const [activeSection, setActiveSection] = useState(0)

    return (
        <div>

            <Header />
            <div>
                <SideNav menuList={menuList['products']} onChange={setActiveSection} />
                <div className="flex flex-col ml-60 pt-4 mt-16">
                    <ProductLanding />


                </div>
            </div>


        </div>


    )
}

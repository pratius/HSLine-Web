import React from "react";
import "./Header.scss"
import AppLogo from "assets/images/logo.png"
import { SITE_STATIC_DATA } from "helpers/constants"
import { history } from "Store";
import { Button } from "@mui/material";
import SearchBox from "shared/SearchBox";

function Header(props) {


    return (
        <header className="bg-white generic-card-shadow fixed top-0 left-0 right-0 h-16 z-10">
            <div className="max-w-screen-xl mx-auto p-3 ">
                <div className="flex flex-wrap justify-between self-center">
                    <div className="flex">
                        <div className="flex-initial text-center mr-2">
                            <img
                                onClick={() => history.push("/")}
                                style={{
                                    height: 32,
                                }}
                                src={AppLogo}
                                alt="Tito Logo"
                            />


                        </div>
                    </div>
                    <div>
                        <SearchBox />
                    </div>

                    <div className="flex items-center">
                        <div className="flex ">

                            {SITE_STATIC_DATA.primaryMenu.map((menu, index) => (
                                <div className="mx-3 flex items-center cursor-pointer" >
                                    <h6 className="font-sm text-gray-400 ">
                                        {menu.title}
                                    </h6>
                                </div>
                                // <Link
                                //     to={menu.path}
                                //     key={index}
                                //     aria-label={menu.title}
                                //     className={" text-xs font-bold px-4 rounded"}
                                // >
                                //     {menu.title}
                                // </Link>
                            ))}

                        </div>
                        <div className="ml-12">
                            <Button variant="contained" style={{ background: 'black', textTransform: 'none' }} onClick={() => history.push("/auth/login")}>Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
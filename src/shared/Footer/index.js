import React from "react";
import "./Footer.scss"
import { history } from "Store";


function Footer(props) {


    return (
        <div className="bg-gray-800 text-white p-4">
            {/* Top Footer */}
            <div className="max-w-screen-xl mx-auto ">
                <div className="flex flex-wrap self-center justify-between	">
                    <div className="flex flex-wrap">
                        <div className="flex-initial text-center mr-2 sm: pl-0 pb-2">
                            <div className="flex flex-col">
                                <div className="flex">

                                    <img
                                        style={{
                                            height: 36,
                                        }}
                                        src={"https://www.titosoftwares.com/images/logo-white.png"}
                                        alt="HSLine Logo"
                                    />

                                </div>
                                <div className="flex">
                                    <div
                                        style={{ fontSize: 12 }}
                                        className="text-xs text-gray-400 self-center text-center"
                                    >
                                        HSLine Software Inc,  © 2023
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap self-center">
                        <div className="text-xs text-white mr-3">

                            About Us

                        </div>
                        <div className="text-xs text-white mr-3">

                            Contact Us

                        </div>

                        {/* Support */}
                        <div className="text-xs text-white mr-3">

                            Support

                        </div>

                        <div className="text-xs text-white mr-3">

                            Terms

                        </div>

                        <div className="text-xs text-white mr-3">

                            Privacy

                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
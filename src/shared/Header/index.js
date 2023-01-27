import React, { useState } from "react";
import "./Header.scss"
import AppLogo from "assets/images/logo.png"
import { SITE_STATIC_DATA } from "helpers/constants"
import { history } from "Store";
import { Button } from "@mui/material";
import SearchBox from "shared/SearchBox";
import { Select, Space } from "antd";
import Countries from "./countries.json"
import { useDispatch } from "react-redux";
function Header(props) {
    const [selectedCountry, setSelectedCountry] = useState(0)
    const { Option } = Select;
    const dispatch = useDispatch()

    const handleChange = (value) => {
        setSelectedCountry(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
        dispatch({ type: "CHANGE_CURRENT_COUNTRY", payload: { label: Countries[value].name, value: Countries[value].code } })

    };

    return (
        <header className="bg-white generic-card-shadow fixed top-0 left-0 right-0 h-16 z-10">
            <div className="mx-auto p-3 px-8 ">
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
                    <div className="w-96">
                        <SearchBox />
                    </div>

                    <div className="flex items-center">
                        <div className="flex ">
                            <Space wrap>
                                <Select
                                    style={{ width: 180, display: 'flex' }}
                                    bordered={false}
                                    onChange={handleChange}
                                    defaultValue={selectedCountry}


                                >
                                    {Countries.map((country, key) => {
                                        return (

                                            <Option value={key} key={key}>
                                                <div className="flex flex-row items-center ">
                                                    <img src={country.image} className="w-4 mr-3 " />
                                                    <label className="truncate">{country.name}</label>
                                                </div>

                                            </Option>

                                        )
                                    })}
                                </Select>

                            </Space>

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
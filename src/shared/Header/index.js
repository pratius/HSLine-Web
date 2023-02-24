import React, { useEffect, useState } from "react";
import "./Header.scss"
import AppLogo from "assets/images/logo.png"
import { SITE_STATIC_DATA } from "helpers/constants"
import { history } from "Store";
import { Avatar, Button, Dialog, Hidden, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import SearchBox from "shared/SearchBox";
import { Select, Space } from "antd";
import Countries from "./countries.json"
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import MobileMenu from "shared/MobileMenu";
import Settings from "shared/Settings";
import { API_ENDPOINT_PROFILE_INFO_FETCH } from "scenes/Auth/auth.constants";
import { apiGet } from "services/apiServices";
function Header(props) {
    const [selectedCountry, setSelectedCountry] = useState(2)
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [open, setOpen] = React.useState(false);

    const { Option } = Select;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: "CHANGE_CURRENT_COUNTRY", payload: { label: Countries[2].name, value: Countries[2].code } })

        getUserInfo()
        let token = localStorage.getItem("token");
        if (token === null) {
            setLoggedIn(false)
        } else {
            setLoggedIn(true)
        }
    }, [])

    const getUserInfo = async () => {
        let response = await apiGet(API_ENDPOINT_PROFILE_INFO_FETCH);
        dispatch({ type: "UPDATE_USER_INFO", payload: response.data })

    }

    const handleChange = (value) => {
        setSelectedCountry(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
        dispatch({ type: "CHANGE_CURRENT_COUNTRY", payload: { label: Countries[value].name, value: Countries[value].code } })

    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () => {
        localStorage.clear();
        history.push("/");
        window.location.reload()
    }

    const isActiveMenu = (path) => {
        let url = window.location.href;
        if (url.includes(path)) return true
        return false
    }
    return (
        <header className="bg-white generic-card-shadow fixed top-0 left-0 right-0 h-32 sm:h-16 z-10">
            <div className="mx-auto p-3 px-8 ">
                <div className="flex flex-col sm:flex-row justify-between self-center">
                    <div className="flex justify-between sm:justify-start">
                        <div className="flex-initial text-center mr-2 ">
                            <img
                                onClick={() => history.push("/")}
                                style={{
                                    height: 32,
                                }}
                                src={AppLogo}
                                alt="HSLine Logo"
                            />


                        </div>
                        <Box sx={{ display: { xl: 'none', xs: 'block', sm: 'none' } }}>
                            <MobileMenu />
                        </Box>

                    </div>
                    <div className="w-full sm:w-96 mt-6 sm:mt-0">
                        <SearchBox />
                    </div>
                    <Box sx={{ display: { xl: 'block', xs: 'none' } }}>
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
                                    <div onClick={() => history.push(menu.path)} className="mx-3 flex items-center cursor-pointer" >
                                        <h6 className={"font-sm " + (isActiveMenu(menu.path) ? " text-gray-800 font-bold " : "text-gray-400")}>
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
                            {isLoggedIn ?
                                <Box sx={{ flexGrow: 0, marginLeft: '1rem' }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem onClick={() => setOpen(true)}>
                                            <Typography textAlign="center">Settings</Typography>
                                        </MenuItem>

                                        <MenuItem onClick={logout}>
                                            <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>

                                    </Menu>
                                </Box> :
                                <div className="ml-12">
                                    <Button variant="contained" style={{ background: 'black', textTransform: 'none' }} onClick={() => history.push("/auth/login")}>Get Started</Button>
                                </div>}
                        </div>
                    </Box>
                    <Box sx={{ display: { xl: 'none', xs: 'none', sm: 'block' } }}>
                        <MobileMenu />
                    </Box>


                    <Dialog
                        fullWidth={true}
                        maxWidth={"md"}
                        open={open}
                        onClose={handleClose}
                    >
                        <Settings />
                    </Dialog>

                </div>
            </div>
        </header>
    )
}

export default Header
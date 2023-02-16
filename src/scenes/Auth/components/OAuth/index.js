import React, { useEffect, useState } from "react";
import "./OAuth.scss"
import AppLogo from "assets/images/logo.png"
import { useDispatch } from "react-redux";

import { MasterLayout } from "shared/MasterLayout";
import { history } from "Store";
import { apiPost } from "services/apiServices";
import { Button } from "antd";
import { CircularProgress } from "@mui/material";
import { API_ENDPOINT_CONNECT_OAUTH_ACCOUNT } from "scenes/Auth/auth.constants";
function OAuth(props) {
    console.log("auth proivder props:", props)
    const dispatch = useDispatch()

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get('code')

        if (!code) {
            history.push("/auth/login")
        } else {
            handleVerifyCode(code)
        }
    }, [])


    const handleVerifyCode = async (code) => {
        const queryString = window.location.search;
        let provider = queryString.includes("google") ? "google" : "facebook"
        setLoading(true)
        let payload = {
            code: code,
            provider: provider
        }
        let response = await apiPost(API_ENDPOINT_CONNECT_OAUTH_ACCOUNT, payload)
        if (response.status) {
            props.toast.open({
                type: 'success',
                content: response.message,
            });
            localStorage.setItem("token", response.data.accessToken)
            if (response.code === 4001) {
                dispatch({ type: "UPDATE_USER_INFO", payload: { first_name: response.data.userInfo.first_name, last_name: response.data.userInfo.first_name } })
                history.push("/auth/profile/setup")
            } else {
                history.push("/")
            }

        } else {
            props.toast.open({
                type: 'error',
                content: response.message,
            });
            setLoading(false)
        }
    }
    return (
        <div className="OAuth">
            <img src={AppLogo} onClick={() => history.push("/")}
                className="app-logo" alt="appLogo" />
            <div className="login-container" style={{ padding: '4rem 2.6rem' }}>
                <div className={"flex " + (isLoading ? "" : " flex-col items-center")}>
                    {isLoading ?
                        <>
                            <CircularProgress size={34} />
                            <h2 className="ml-4 font-semibold text-3xl text-gray-800">Connecting your account...</h2>
                        </> : <>
                            <h2 className="ml-4 font-semibold text-3xl text-gray-800">Something went wrong please try again</h2>
                            <div className="mt-6">
                                <Button type="primary" size="medium" style={{ width: '100%', background: "black", }} onClick={() => history.push("/auth/login")}  >Login Back</Button>

                            </div></>
                    }


                </div>

            </div>
        </div>
    )
}

export default OAuth
import React, { useEffect, useState } from "react";
import "./Verify.scss"
import AppLogo from "assets/images/logo.png"

import { MasterLayout } from "shared/MasterLayout";
import { history } from "Store";
import { apiPost } from "services/apiServices";
import { Button } from "antd";
import { CircularProgress } from "@mui/material";
function Verify(props) {
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (!props.match.params.verification_code) {
            history.push("/auth/login")
        } else {
            handleVerify()
        }
    }, [])


    const handleVerify = async () => {
        if (!props.match.params.verification_code) return
        setLoading(true)
        let payload = {
            verification_code: props.match.params.verification_code
        }
        let response = await apiPost("http://localhost:3010/auth/verify", payload)
        if (response.status) {
            props.toast.open({
                type: 'success',
                content: response.message,
            });
            localStorage.setItem("token", response.data.accessToken)
            history.push("/auth/profile/setup")
        } else {
            props.toast.open({
                type: 'error',
                content: response.message,
            });
            setLoading(false)
        }
    }
    return (
        <div className="auth-login">
            <img src={AppLogo} onClick={() => history.push("/")}
                className="app-logo" alt="appLogo" />
            <div className="login-container" style={{ padding: '4rem 2.6rem' }}>
                <div className={"flex " + (isLoading ? "" : " flex-col items-center")}>
                    {isLoading ?
                        <>
                            <CircularProgress size={34} />
                            <h2 className="ml-4 font-semibold text-3xl text-gray-800">Verifiying...</h2>
                        </> : <>
                            <h2 className="ml-4 font-semibold text-3xl text-gray-800">Looks like your link has been expire</h2>
                            <div className="mt-6">
                                <Button type="primary" size="medium" style={{ width: '100%', background: "black", }} onClick={() => history.push("/auth/login")}  >Login Back</Button>

                            </div></>
                    }


                </div>

            </div>
        </div>
    )
}

export default Verify
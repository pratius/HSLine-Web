import React, { useState } from "react";
import "./Verify.scss"
import AppLogo from "assets/images/logo.png"

import { MasterLayout } from "shared/MasterLayout";
import { history } from "Store";
import { apiPost } from "services/apiServices";
import { Button, message } from "antd";
import { CircularProgress } from "@mui/material";
function Verify(props) {
    const [messageApi, contextHolder] = message.useMessage();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setLoading] = useState(false)

    const handleNavigate = () => {
        history.push("/auth/register")
    }

    const handleLogin = async () => {
        setLoading(true)
        let payload = {
            email: email,
            password: password
        }
        let response = await apiPost("http://localhost:3010/auth/login", payload)
        if (response.status) {
            localStorage.setItem("token", response.data.accessToken)
            history.push("/")
        } else {
            messageApi.open({
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
            <div className="login-container">
                {contextHolder}
                <div className="flex flex-col items-center">
                    {/* <CircularProgress size={34} />
                    <h2 className="ml-4 font-semibold text-3xl text-gray-800">Verifiying...</h2> */}

                    <h2 className="ml-4 font-semibold text-3xl text-gray-800">Looks like your link has been expire</h2>
                    <div className="mt-6">
                        <Button type="primary" size="medium" style={{ width: '100%', background: "black", }} loading={isLoading} >{isLoading ? "Signing up" : "Resend Verification Link"}</Button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Verify
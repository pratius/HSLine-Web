import React, { useState } from "react";
import "./Login.scss"
import AppLogo from "assets/images/logo.png"
import { useDispatch } from "react-redux";

import { MasterLayout } from "shared/MasterLayout";
import { history } from "Store";
import { apiPost } from "services/apiServices";
import { Button, Input, Space, Typography } from "antd";
function Login(props) {
    const dispatch = useDispatch()

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
            if (response.code === 1003) {
                dispatch({ type: "UPDATE_USER_INFO", payload: { email: email } })
                props.toast.open({
                    type: 'success',
                    content: response.message,
                });
                history.push("/auth/linksent")
            } else {
                localStorage.setItem("token", response.data.accessToken)
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
        <div className="auth-login">
            <img src={AppLogo} onClick={() => history.push("/")}
                className="app-logo" alt="appLogo" />
            <div className="login-container">
                <div className="left-container">
                    <img src={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/78c4af118001599.608076cf95739.jpg"} alt="illustrationAuth" />

                </div>
                <div className="right-container">

                    <div>
                        <h2 className="font-semibold text-xl">Sign in</h2>
                        <h6>Good to see you back!
                        </h6>
                    </div>
                    <div className="forms">
                        <div className="input-element">
                            <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-element">
                            <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="action-buttons">
                            <Button type="primary" size="large" disabled={!email || !password} style={{ width: '100%', background: "black", color: (!email || !password) ? 'gray' : 'white' }} loading={isLoading} onClick={handleLogin}>{isLoading ? "Signing in" : "Sign in"}</Button>

                        </div>
                        <p className="text-center text-gray-600 text-sm my-4">OR</p>
                        <div className="flex justify-center mb-4">
                            <img className="w-7 h-7 mr-4 cursor-pointer hover:scale-110 duration-300" src="https://www.pngitem.com/pimgs/m/107-1071787_google-brand-black-google-logo-vector-hd-png.png" alt="OAuthLogo" />
                            {/* <img className="w-7 h-7 cursor-pointer hover:scale-110 duration-300" src="https://freepngimg.com/download/facebook/141094-logo-circle-facebook-png-free-photo.png" alt="OAuthLogo" /> */}




                        </div>
                        <Typography onClick={handleNavigate}>Don't have an account?</Typography>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
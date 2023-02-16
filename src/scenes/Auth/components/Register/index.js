import React, { useState } from "react";
import "./Register.scss"
import AuthIllustration from "assets/images/illustrations/loginillus.webp"
import AppLogo from "assets/images/logo.png"
import { useDispatch } from "react-redux";

import { history } from "Store";
import { apiPost } from "services/apiServices";
import { Button, Input, Space, Typography } from "antd";
import { useLocation } from "react-router-dom";
import { getGoogleUrl } from "utility/OAuth/getGoogleURL";
import { Link } from "@mui/material";
import { API_ENDPOINT_REGISTER } from "scenes/Auth/auth.constants";
function Register(props) {
    const dispatch = useDispatch()

    const location = useLocation();
    let from = ((location.state)?.from?.pathname) || '/';

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setLoading] = useState(false)

    const handleRegister = async () => {
        setLoading(true)
        let payload = {
            email: email,
            password: password
        }
        let response = await apiPost(API_ENDPOINT_REGISTER, payload)
        if (response.status) {
            props.toast.open({
                type: 'success',
                content: response.message + " redirecting to login page",
            });
            dispatch({ type: "UPDATE_USER_INFO", payload: { email: email } })
            history.push("/auth/linksent")
        } else {
            setLoading(false)
            props.toast.open({
                type: 'error',
                content: response.message,
            });
        }

    };

    const handleNavigate = () => {
        history.push("/auth/login")
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
                        <h2 className="font-semibold text-xl">Sign up</h2>
                        <h6>You'll be up & running in 2 minutes
                        </h6>
                    </div>

                    <div className="forms">
                        <div className="input-element">
                            <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="input-element">
                            <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                            <p className="text-xxs text-gray-700 mt-2" style={{ lineHeight: 1 }}>Password must contain atleast 6 char,mix of upper and lower case letters and numbers</p>
                        </div>

                        <div className="action-buttons">
                            <Button type="primary" size="large" disabled={!email || !password} style={{ width: '100%', background: "black", color: (!email || !password) ? 'gray' : 'white' }} loading={isLoading} onClick={handleRegister}>{isLoading ? "Signing up" : "Sign up"}</Button>

                        </div>
                        <p className="text-center text-gray-600 text-sm my-4">OR</p>
                        <div className="flex justify-center mb-4">
                            <Link href={getGoogleUrl(from)} >
                                {/* {getGoogleUrl(from)} */}
                                <img className="w-7 h-7 mr-4 cursor-pointer hover:scale-110 duration-300" on src="https://www.pngitem.com/pimgs/m/107-1071787_google-brand-black-google-logo-vector-hd-png.png" alt="OAuthLogo" />

                            </Link>






                        </div>
                        <p className="text-xs text-gray-600">
                            By creating an account, you agree to HSLine's <strong className="text-blue-400">Terms of Service</strong> and <strong className="text-blue-400">Privary Policy</strong>
                        </p>


                        <p className="font-semibold text-gray-600 text-xs mt-4 text-right cursor-pointer" onClick={handleNavigate}>already have an account?</p>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register
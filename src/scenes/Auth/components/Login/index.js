import React, { useState } from "react";
import "./Login.scss"
import AppLogo from "assets/images/logo.png"

import { MasterLayout } from "shared/MasterLayout";
import { history } from "Store";
import { apiPost } from "services/apiServices";
import { Button, TextField, Typography } from "@mui/material";
function Login(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setLoading] = useState(false)

    const handleNavigate = () => {
        history.push("/auth/register")
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

                    <h2 className="font-semibold text-xl">Sign in</h2>
                    <div className="forms">
                        <div className="input-element">
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth size="small" />

                        </div>
                        <div className="input-element">
                            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" fullWidth size="small" />
                        </div>

                        <div className="action-buttons">
                            <Button variant="contained" style={{ background: 'black', textTransform: 'none' }} fullWidth>Sign in</Button>

                        </div>

                        <p className="text-center text-gray-600 text-sm my-4">OR</p>
                        <div className="flex justify-center mb-4">
                            <img className="w-7 mr-4 cursor-pointer hover:scale-110 duration-300" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/google_black_logo_icon_147125.png" alt="OAuthLogo" />
                            <img className="w-7  cursor-pointer hover:scale-110 duration-300" src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" alt="OAuthLogo" />



                        </div>



                        <p className="font-semibold text-gray-600 text-xs mt-4 text-right cursor-pointer" onClick={handleNavigate}>Don't have an account?</p>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
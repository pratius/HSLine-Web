import React, { useState } from "react";
import "./Register.scss"
import AuthIllustration from "assets/images/illustrations/loginillus.webp"
import AppLogo from "assets/images/logo.png"

import { history } from "Store";
import { apiPost } from "services/apiServices";
import { Button, Fab, TextField, Typography } from "@mui/material";
function Register(props) {
    const [name, setName] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setLoading] = useState(false)
    const handleRegister = async () => {

    };


    const handleNavigate = () => {
        history.push("/auth/login")
    }
    return (
        <div className="auth-login">
            <img src={AppLogo} className="app-logo" alt="appLogo" />
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
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth size="small" />
                        </div>
                        <div className="input-element">
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth size="small" />
                        </div>
                        <div className="input-element">
                            <TextField id="outlined-basic" label="Passowrd" type="password" variant="outlined" fullWidth size="small" />
                        </div>
                        <div className="action-buttons">
                            <Button variant="contained" style={{ background: 'black', textTransform: 'none' }} fullWidth onClick={handleRegister}>{isLoading ? "Signing up" : "Sign up"}</Button>

                        </div>
                        <p className="text-center text-gray-600 text-sm my-4">OR</p>
                        <div className="flex justify-center mb-4">
                            <img className="w-7 mr-4 cursor-pointer hover:scale-110 duration-300" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/google_black_logo_icon_147125.png" alt="OAuthLogo" />
                            <img className="w-7  cursor-pointer hover:scale-110 duration-300" src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" alt="OAuthLogo" />



                        </div>
                        <p className="text-xs text-gray-600">
                            By creating an account, you agree to Tito's <strong className="text-blue-400">Terms of Service</strong> and <strong className="text-blue-400">Privary Policy</strong>
                        </p>


                        <p className="font-semibold text-gray-600 text-xs mt-4 text-right cursor-pointer" onClick={handleNavigate}>already have an account?</p>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register
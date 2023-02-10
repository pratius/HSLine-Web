import React, { useEffect, useState } from "react";
import "./Verify.scss"
import AppLogo from "assets/images/logo.png"

import { MasterLayout } from "shared/MasterLayout";
import { history } from "Store";
import { apiPost } from "services/apiServices";
import { Button } from "antd";
import { CircularProgress } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { connect } from "react-redux";

function LinkSent(props) {
    const [isLoading, setLoading] = useState(false)
    const [counter, setCounter] = React.useState(0);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    useEffect(() => {
        if (!props.userInfo || !props.userInfo.email) {
            history.push("/auth/login")
        }
    }, [])


    const handleResend = async () => {
        setLoading(true)
        let payload = {
            email: props.userInfo.email,
        }
        let response = await apiPost("http://localhost:3010/auth/resendlink", payload)
        if (response.status) {
            props.toast.open({
                type: 'success',
                content: response.message,
            });
            setCounter(60);
            setLoading(false)

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
                <div className="flex flex-col items-center">
                    {/* <CircularProgress size={34} />
                    <h2 className="ml-4 font-semibold text-3xl text-gray-800">Verifiying...</h2> */}
                    <img src="https://cdn.dribbble.com/users/1040983/screenshots/6626036/sending-mail1-01_4x.png?compress=1&resize=400x300" alt="successMail" />
                    <div className="flex items-center mt-10">
                        <EmailRoundedIcon className="text-gray-800 text-3xl" style={{ fontSize: 34 }} />
                        <h2 className="ml-4 font-semibold text-3xl text-gray-800">We have sent you a verification link on your email </h2>

                    </div>

                    <div className="mt-6">
                        <Button type="primary" size="medium" disabled={counter !== 0} style={{ width: '100%', background: "black", color: counter !== 0 ? 'gray' : 'white' }} loading={isLoading} onClick={handleResend}>{isLoading ? "Sending..." : ("Resend Verification Link " + (counter !== 0 ? " ...in " + counter : ""))}</Button>

                    </div>

                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { userInfo: state.userInfo };
};
export default connect(
    mapStateToProps,
)(LinkSent);


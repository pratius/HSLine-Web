import React, { useEffect, useState } from "react";
import "./ProfileSetup.scss"
import AppLogo from "assets/images/logo.png"
import { connect, useDispatch } from "react-redux";

import { MasterLayout } from "shared/MasterLayout";
import { history } from "Store";
import { apiPost } from "services/apiServices";
import { Button, Input, Select, Space, Typography } from "antd";
import { API_ENDPOINT_PROFILE_CREATE } from "scenes/Auth/auth.constants";
function ProfileSetup(props) {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobile, setMobile] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [companyWebsite, setCompanyWebsite] = useState("")

    const [isLoading, setLoading] = useState(false)

    const handleNavigate = () => {
        history.push("/auth/register")
    }
    useEffect(() => {
        if (props.userInfo) {
            setFirstName(props.userInfo?.first_name || "")
            setLastName(props.userInfo?.last_name || "")

        }
    }, [props.userInfo])

    const handleCreateProfile = async () => {
        setLoading(true)
        let payload = {
            "first_name": firstName,
            "last_name": lastName,
            "mobile": mobile,
            "company": companyName,
            "company_website": companyWebsite,
        }
        let response = await apiPost(API_ENDPOINT_PROFILE_CREATE, payload)
        if (response.status) {
            props.toast.open({
                type: 'success',
                content: response.message,
            });
            history.push("/")
        } else {
            props.toast.open({
                type: 'error',
                content: response.message,
            });
            setLoading(false)
        }
    }
    return (
        <div className="profile-setup">
            <img src={AppLogo} onClick={() => history.push("/")}
                className="app-logo" alt="appLogo" />
            <div className="login-container">
                <div className="left-container">
                    <img src={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/78c4af118001599.608076cf95739.jpg"} alt="illustrationAuth" />

                </div>
                <div className="right-container">

                    <div>
                        <h2 className="font-semibold text-xl">Almost there...</h2>
                        <h6>We wanted to know little more about you
                        </h6>
                    </div>
                    <div className="forms">
                        <div className="input-element">
                            <Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="input-element">
                            <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="input-element">
                            <Input placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        </div>
                        <div className="input-element">
                            <Input placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </div>
                        <div className="input-element">
                            <Input placeholder="Company Website" value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} />
                        </div>
                        {/* <div className="input-element">
                            <Select
                                defaultValue="lucy"
                                style={{ width: '100%', }}
                                onChange={(value) => console.log(value)}
                                options={[
                                    { value: 'jack', label: 'Jack' },
                                    { value: 'lucy', label: 'Lucy' },
                                    { value: 'Yiminghe', label: 'yiminghe' },
                                ]}
                            />
                        </div> */}


                        <div className="action-buttons">
                            <Button type="primary" size="large" disabled={!firstName || !lastName || !mobile || !companyName || !companyWebsite} style={{ width: '100%', background: "black", color: (!firstName || !lastName || !mobile || !companyName || !companyWebsite) ? 'gray' : 'white' }} loading={isLoading} onClick={handleCreateProfile}>{isLoading ? "Creating..." : "Create Profile"}</Button>

                        </div>



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
)(ProfileSetup);


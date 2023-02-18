import React, { useEffect, useState } from "react"

import { Button, Input } from "antd";
import { API_ENDPOINT_PROFILE_UPDATE_USER } from "shared/Settings/settings.constants";
import { apiPost } from "services/apiServices";
function UpdateBasic(props) {
    const [firstName, setFirstName] = useState(props.data?.first_name || "")
    const [lastName, setLastName] = useState(props.data?.last_name || "")
    const [mobile, setMobile] = useState(props.data?.mobile || "")
    const [isLoading, setLoading] = useState(false)


    const handleUpdateUser = async () => {
        setLoading(true)
        let payload = {
            "first_name": firstName,
            "last_name": lastName,
            "mobile": mobile,

        }
        let response = await apiPost(API_ENDPOINT_PROFILE_UPDATE_USER, payload)
        if (response.status) {
            props.toast.open({
                type: 'success',
                content: response.message,
            });
        } else {
            props.toast.open({
                type: 'error',
                content: response.message,
            });
        }
        setLoading(false)

    }

    return (
        <div className="w-full flex  p-4 flex-wrap">

            <div className="flex w-full h-14 mb-5">

                <div className="input-element w-1/2 flex-col">
                    <small className="text-xs mb-2">First Name</small>
                    <Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ height: '2.4rem', width: '95%' }} />
                </div>
                <div className="input-element w-1/2 flex-col">
                    <small className="text-xs mb-2">Last Name</small>
                    <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ height: '2.4rem', width: '95%' }} />
                </div>
            </div>


            <div className="flex w-full h-14 mb-5">
                <div className="input-element w-1/2 flex-col">
                    <small className="text-xs mb-2">Mobile Number</small>
                    <Input placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} style={{ height: '2.4rem', width: '95%' }} />
                </div>
                <div className="input-element w-1/2 flex-col">
                    <small className="text-xs mb-2">Email</small>
                    <Input placeholder="Email" style={{ height: '2.4rem', width: '95%' }} disabled />
                </div>
            </div>
            <div className="flex w-full h-14 mb-5">
                <div className="input-element w-1/2 flex-col">
                    <small className="text-xs mb-2">Country</small>
                    <Input placeholder="Country" style={{ height: '2.4rem', width: '95%' }} disabled />
                </div>

            </div>
            <div className="w-full flex justify-end mt-8">
                <Button type="primary" size="large" style={{ color: 'white', background: 'black' }} loading={isLoading} onClick={handleUpdateUser} >{isLoading ? "Updating..." : "Update"}</Button>

            </div>

        </div>


    )
}

export default UpdateBasic
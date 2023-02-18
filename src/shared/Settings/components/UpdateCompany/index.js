import React, { useState } from "react"

import { Button, Input } from "antd";
import { API_ENDPOINT_PROFILE_UPDATE_COMPANY } from "shared/Settings/settings.constants";
import { apiPost } from "services/apiServices";
function UpdateCompany(props) {
    const [name, setName] = useState(props.data?.company_name || "")
    const [website, setWebsite] = useState(props.data?.company_website || "")
    const [members, setMembers] = useState(props.data?.total_members || "")
    const [isLoading, setLoading] = useState(false)


    const handleUpdateCompany = async () => {
        setLoading(true)
        let payload = {
            "name": name,
            "website": website,
            "total_members": members,

        }
        let response = await apiPost(API_ENDPOINT_PROFILE_UPDATE_COMPANY, payload)
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
                    <small className="text-xs mb-2">Company Name</small>
                    <Input placeholder="Company Name" value={name} onChange={(e) => setName(e.target.value)} style={{ height: '2.4rem', width: '95%' }} />
                </div>
                <div className="input-element w-1/2 flex-col">
                    <small className="text-xs mb-2">Company
                        Website</small>
                    <Input placeholder="Company Website" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ height: '2.4rem', width: '95%' }} />
                </div>
            </div>


            <div className="flex w-full h-14 mb-5">
                <div className="input-element w-1/2 flex-col">
                    <small className="text-xs mb-2">Total Members</small>
                    <Input placeholder="Total Employee" value={members || 0} onChange={(e) => setMembers(e.target.value)} style={{ height: '2.4rem', width: '95%' }} />
                </div>
                <div className="input-element w-1/2 flex-col">
                    <small className="text-xs mb-2">Company
                        Origin</small>
                    <Input placeholder="Country" style={{ height: '2.4rem', width: '95%' }} disabled />
                </div>


            </div>

            <div className="w-full flex justify-end mt-8">
                <Button type="primary" size="large" style={{ color: 'white', background: 'black' }} loading={isLoading} onClick={handleUpdateCompany} >{isLoading ? "Updating..." : "Update"}</Button>

            </div>

        </div>


    )
}

export default UpdateCompany
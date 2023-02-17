import { Button } from "@mui/material"
import React from "react"
import Premium from "assets/images/premium.svg"
export default function EmptyState(props) {
    const isLoggedIn = () => {
        return localStorage.getItem("token") !== null ? true : false
    }
    return (
        <div className={`flex ${props.variant === "horizontal" ? 'flex-col sm:flex-row ' : 'flex-col'} w-full h-full justify-center items-center`}>
            <img src={Premium} className="w-24" alt="EmptyStageImage" />
            <div className="flex flex-col ml-4  items-center sm:items-start mt-6 sm:mt-0 ">
                <h3 className="font-bold text-xl text-gray-800">Premium Analytics</h3>
                <h5 className="text-center text-xs  text-gray-600 mb-4">
                    Subscribe today to HSLine pro and access the latest data

                </h5>

                <Button variant="contained" style={{ backgroundColor: 'black', textTransform: 'none' }}>{isLoggedIn() ? "Update Required Details" : "Sign Up"}</Button>
            </div>

        </div>
    )
}
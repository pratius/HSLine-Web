import { Button } from "@mui/material"
import React from "react"

export default function EmptyState() {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <img src="https://oec.world/images/oec-logo-pro.png" className="w-20" alt="EmptyStageImage" />
            <h5 className="mt-3 text-center w-48 text-gray-600">
                Subscribe today to TITO pro and access the latest data
            </h5>

            <Button variant="contained" className="mt-3" style={{ backgroundColor: 'black', textTransform: 'none' }}>Sign Up</Button>
        </div>
    )
}
import React from "react"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import DirectionsBoatRoundedIcon from '@mui/icons-material/DirectionsBoatRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';

export const menuList = {
    detail: [
        {
            name: "Home",
            key: "home",
            icon: <HomeRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />
        },
        {
            name: "Latest Trend",
            key: "latest_trend",
            icon: <TrendingUpRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />
        },
        {
            name: "Historical Data",
            key: "historical_trend",
            icon: <TravelExploreRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />
        },
        {
            name: "Service Trade",
            key: "historical_trend",
            icon: <DirectionsBoatRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />
        },
        {
            name: "Economic Complexity",
            key: "historical_trend",
            icon: <BarChartRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />
        }
    ]
}
import React from "react"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import DirectionsBoatRoundedIcon from '@mui/icons-material/DirectionsBoatRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
//product page dummy icons
import EmojiNatureRoundedIcon from '@mui/icons-material/EmojiNatureRounded';
import GestureRoundedIcon from '@mui/icons-material/GestureRounded';
import EggAltRoundedIcon from '@mui/icons-material/EggAltRounded';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
export const menuList = {
    detail: [
        {
            name: "Home",
            key: "home",
            icon: <HomeRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />
        },
        // {
        //     name: "Latest Trend",
        //     key: "latest_trend",
        //     icon: <TrendingUpRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />
        // },
        {
            name: "Historical Data",
            key: "historical_trend",
            icon: <TravelExploreRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />
        },
        // {
        //     name: "Service Trade",
        //     key: "historical_trend",
        //     icon: <DirectionsBoatRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />
        // },
        {
            name: "Economic Complexity",
            key: "historical_trend",
            icon: <BarChartRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />
        }
    ],
    products: [
        {
            name: "Fruits",
            key: "fruit",
            icon: <EmojiNatureRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />,
            subMenu: [
                {
                    name: "Fresh Apples",
                    key: "fresh_apple",
                    icon: <ChevronRightRoundedIcon className="text-gray-700 " style={{ fontSize: 18 }} />,

                },
                {
                    name: "Fresh Banana",
                    key: "fresh_apple",
                    icon: <ChevronRightRoundedIcon className="text-gray-700 " style={{ fontSize: 18 }} />,

                },
                {
                    name: "Fresh Kiwis",
                    key: "fresh_kiwis",
                    icon: <ChevronRightRoundedIcon className="text-gray-700 " style={{ fontSize: 18 }} />,

                }
            ]
        },
        {
            name: "Herbs & Spices",
            key: "herb_spice",
            icon: <GestureRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />,
            subMenu: []
        },
        {
            name: "Vegetables",
            key: "vegetables",
            icon: <EggAltRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />,
            subMenu: []

        },
        {
            name: "Meat & Seafood",
            key: "meat_seafood",
            icon: <LunchDiningRoundedIcon className="text-gray-700 " style={{ fontSize: 22 }} />,
            subMenu: []

        },

    ]
}
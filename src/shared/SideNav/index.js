import { Drawer, List, ListItem, ListItemButton } from "@mui/material";

import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import DirectionsBoatRoundedIcon from '@mui/icons-material/DirectionsBoatRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
const drawerWidth = 200;

const menuItems = [
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



export default function SideNav(props) {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block', },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: 64, borderTop: '1px solid #f1f1f1' },
            }}
            open
        >

            <List>
                {menuItems.map((menu, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => props.onChange(index)}>
                            <div className="flex align-center hover:text-gray-900 duration-300">
                                {menu.icon}
                                <h5 className="ml-3 text-sm text-gray-700 hover:text-gray-900 duration-300">{menu.name}</h5>
                            </div>

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>


        </Drawer>



    )
}

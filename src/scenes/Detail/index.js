import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Footer from "shared/Footer";
import Header from "shared/Header";
import ComplexityRanking from "./components/complexity-ranking";
import CountryInfo from "./components/country-info";
import CountryReport from "./components/country-reports";
import EconomicComplexity from "./components/economy-complexity";
import HistoricalData from "./components/historical-data";
import LatestTrends from "./components/latest-trends";
import MarketGrowth from "./components/market-growth";
import ServiceTrade from "./components/service-trade";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';



const drawerWidth = 240;


const drawer = (
    <div>

        <List>
            {['Home', 'Latest Trend', 'Historical Data', 'Service Trade'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

    </div>
);


export default function Detail() {
    return (
        <div>

            <Header />
            <div>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block', },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: 61, borderTop: '1px solid #f1f1f1' },
                    }}
                    open
                >
                    {drawer}

                </Drawer>
                <div className="flex flex-col ml-60 pt-4 mt-16">


                    <CountryInfo />
                    <LatestTrends />
                    <HistoricalData />
                    <MarketGrowth />
                    <ServiceTrade />
                    <EconomicComplexity />
                    <ComplexityRanking />
                    <CountryReport />
                    <Footer />

                </div>
            </div>


        </div>


    )
}

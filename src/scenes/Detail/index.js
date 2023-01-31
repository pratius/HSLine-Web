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

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SideNav from "shared/SideNav";
import { useState } from "react";
import { menuList } from "shared/SideNav/nav.constants";




export default function Detail() {
    const [activeSection, setActiveSection] = useState(0)
    const renderSections = () => {
        switch (activeSection) {
            case 0:
                return <CountryInfo />;
            case 1:
                return <LatestTrends />
            case 2:
                return <HistoricalData />
            case 3:
                return <ServiceTrade />
            case 4:
                return <EconomicComplexity />
            default:
                return <CountryInfo />;


        }
    }
    return (
        <div>

            <Header />
            <div>
                <SideNav menuList={menuList['detail']} onChange={setActiveSection} />
                <div className="flex flex-col ml-60 pt-4 mt-16">
                    {renderSections()}

                    {/* <CountryInfo />
                    <LatestTrends />
                    <HistoricalData />
                    <MarketGrowth />
                    <ServiceTrade />
                    <EconomicComplexity />
                    <ComplexityRanking />
                    <CountryReport />
                    <Footer /> */}

                </div>
            </div>


        </div>


    )
}

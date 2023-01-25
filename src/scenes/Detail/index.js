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




export default function Detail() {
    return (

        <div className="flex flex-col min-h-screen">

            <Header />
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

    )
}

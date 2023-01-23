
import Layout from '@/components/Layout'
import CountryInfo from './components/country-info'
import HistoricalData from './components/historical-data'
import LatestTrends from './components/latest-trends'
import MarketGrowth from './components/market-growth'



export default function Home() {
    return (
        <>
            <Layout>
                <CountryInfo />
                <LatestTrends />
                <HistoricalData />
                <MarketGrowth />
            </Layout>
        </>
    )
}

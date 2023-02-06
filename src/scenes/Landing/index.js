import React from "react"
import Footer from "shared/Footer"
import Header from "shared/Header"
import TradeNews from "./news"
import Blogs from "./blogs"
import CountryReport from "./country-reports"
import EconomyRanking from "./economy-ranking"
import Hero from "./hero-main"
import LandingTradle from "./landing-tradle"
import StartToday from "./start-today"
export default function Landing() {
    return (
        <div className="flex flex-col min-h-screenpt-4 mt-36 sm:mt-16">

            <Header />
            <Hero />
            <TradeNews />
            <StartToday />
            <LandingTradle />
            <EconomyRanking />
            <CountryReport />
            <Blogs />

            <Footer />


        </div>
    )
}

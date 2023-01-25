import React from "react"
import Footer from "shared/Footer"
import Header from "shared/Header"
import Blogs from "./blogs"
import CountryReport from "./country-reports"
import EconomyRanking from "./economy-ranking"
import Hero from "./hero-main"
import LandingTradle from "./landing-tradle"
import StartToday from "./start-today"
export default function Landing() {
    return (
        <div className="flex flex-col min-h-screen">

            <Header />
            <Hero />
            <Blogs />
            <StartToday />
            <LandingTradle />
            <EconomyRanking />
            <CountryReport />
            <Footer />

        </div>
    )
}

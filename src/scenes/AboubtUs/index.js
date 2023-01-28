import React from "react"
import Footer from "shared/Footer"
import Header from "shared/Header"

import About from "./Components/index"
export default function AboutUs() {
    return (
        <div className="flex flex-col min-h-screenpt-4 mt-16">

            <Header />
      
            <About />
          
            <Footer />

        </div>
    )
}

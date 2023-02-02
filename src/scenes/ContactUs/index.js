import React from "react"
import Footer from "shared/Footer"
import Header from "shared/Header"

import Contact from "./Components/index"
export default function ContactUs() {
    return (
        <div className="flex flex-col min-h-screenpt-4 mt-16">

            <Header />
      
            <Contact />
          
            <Footer />

        </div>
    )
}

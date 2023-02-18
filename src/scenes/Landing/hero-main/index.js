import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { apiGet } from 'services/apiServices';


import CountryIndexCard from 'shared/CountryIndexCard';
import { API_ENDPOINT_OPENSTATS_TOP_COUNTRIES } from '../landing.constants';
export default function Hero(offset) {
    const [topCountries, setTopCountries] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        // fetchTopCountries()
    }, [])
    const fetchTopCountries = async () => {
        setLoading(true)
        const response = await apiGet(API_ENDPOINT_OPENSTATS_TOP_COUNTRIES);
        setTopCountries(response.data);
        setLoading(false)

    }
    const countryData = [
        {
            name: "United States",
            flag: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
            type: "profit",
            data: Math.floor(Math.random() * 90 + 10)
        },
        {
            name: "India",
            flag: "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png",
            type: "profit",
            data: Math.floor(Math.random() * 90 + 10)

        },
        {
            name: "Brazil",
            flag: "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png",
            type: "loss",
            data: Math.floor(Math.random() * 90 + 10)

        },
        {
            name: "Japan",
            flag: "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png",
            type: "profit",
            data: Math.floor(Math.random() * 90 + 10)

        }
    ]

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col ">
                    <h1 className="mb-2 tracking-tight leading-8 text-center lg:text-left font-bold text-2xl sm:text-2xl md:text-2xl lg:text-2xl ">
                        INSIGHTS TO PERFORM TRADE WITH OUR WORLD TRADE DATA

                    </h1>
                    <p className="mb-2 text-sm sm:text-sm md:text-sm text-gray-600 text-center lg:text-left">
                        Unlock the Potential of International Trade: Professional Strategies to Increase Profitability
                    </p>
                    <div className="md:flex mt-12">
                        <div className="flex flex-col w-full">
                            <h5 className='font-xl text-gray-400 tracking-widest mb-2'>
                                IMPORTS
                            </h5>
                            <div className='flex flex-col sm:flex-wrap sm:flex-row w-full'>
                                {isLoading ? new Array(4).fill(null).map((item, key) => {
                                    return (
                                        <Skeleton className='rounded w-full  sm:w-2/5 lg:w-64 h-32 p-4  mb-4 sm:mb-0 sm:m-2 sm:mx-3 ' variant="rectangular" />
                                    )
                                }) : (topCountries.importers || []).map((country, key) => {
                                    return (
                                        <CountryIndexCard key={key} data={country} />

                                    )
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="md:flex mt-12">
                        <div className="flex flex-col w-full">
                            <h5 className='font-xl text-gray-400 tracking-widest mb-2'>
                                EXPORTS
                            </h5>
                            <div className='flex flex-col sm:flex-wrap sm:flex-row w-full'>
                                {isLoading ? new Array(4).fill(null).map((item, key) => {
                                    return (
                                        <Skeleton className='rounded w-full  sm:w-2/5 lg:w-64 h-32 p-4  mb-4 sm:mb-0 sm:m-2 sm:mx-3 ' variant="rectangular" />
                                    )
                                }) : (topCountries.exporters || []).map((country, key) => {
                                    return (
                                        <CountryIndexCard key={key} data={country} />

                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

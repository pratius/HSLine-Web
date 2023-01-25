import React from 'react';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Button } from '@mui/material';
import CountryIndexCard from 'shared/CountryIndexCard';
export default function Hero(offset) {
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
                    <div className='flex flex-col items-center  '>
                        <h1 className='text-4xl font-bold text-black-600'>Insigts to perform trade with our world trade data</h1>
                        <Button variant="contained" style={{ background: 'black', textTransform: 'none' }} className="w-40 mt-3"><SearchRoundedIcon /> Explore </Button>
                    </div>
                    <div className="md:flex mt-12">
                        <div className="flex flex-col">
                            <h5 className='font-xl text-gray-400 tracking-widest mb-2'>
                                IMPORTS
                            </h5>
                            <div className='flex flex-wrap'>
                                {countryData.map((country, key) => {
                                    return (
                                        <CountryIndexCard key={key} data={country} />

                                    )
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="md:flex mt-12">
                        <div className="flex flex-col">
                            <h5 className='font-xl text-gray-400 tracking-widest mb-2'>
                                EXPORTS
                            </h5>
                            <div className='flex flex-wrap'>
                                {countryData.reverse().map((country, key) => {
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

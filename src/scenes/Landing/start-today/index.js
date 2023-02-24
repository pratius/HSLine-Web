import React from 'react';

import { Button } from '@mui/material';

export default function StartToday(offset) {

    return (
        <div>
            <div className="relative overflow-hidden">
                <div className=" mx-auto p-6 md:pt-16 sm:p-8">
                    <div className="flex flex-col	 md:flex md:flex-row p-4 justify-between items-center">

                        <div className="pt-4 md:pt-10 lg:pt-0 max-w-sm order-2 sm:order-1">
                            <h1 className="mb-2 tracking-tight leading-8 text-center sm:text-left font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl ">
                                GET MORE WITH HSLINES
                            </h1>
                            <p className="mb-2 text-xs sm:text-sm md:text-sm text-gray-600 text-center sm:text-left">
                                International trade data is invaluable for businesses, economists, and policymakers alike. This data can be used to gain valuable insights into the global economy, understand trading patterns, and develop appropriate strategies. Exploring international trade data with us can help your business identify critical trends, and potential new markets, and gain a competitive advantage. International business data is essential for anyone seeking to succeed in today's global economy.                            </p>
                            <div className="flex mt-5 sm:mt-2  justify-center sm:justify-start">
                                <Button variant="contained" style={{ background: 'black', textTransform: 'none' }}>Explore More</Button>
                            </div>
                        </div>
                        <div className="self-center    md:block  md:mr-10 order-1 sm:order-2">
                            <img
                                className="w-auto h-auto"
                                src={"https://yourrobotrader.com/wp-content/uploads/2022/09/laptop-mockup.webp"}
                                alt="illustration"
                                style={{ width: '30rem' }}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

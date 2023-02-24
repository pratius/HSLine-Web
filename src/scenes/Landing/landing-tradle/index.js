import React from 'react';

import { Button } from '@mui/material';

export default function LandingTradle(offset) {

    return (
        <div>
            <div className="relative overflow-hidden">
                <div className="mx-auto p-6 md:pt-16 sm:p-16">
                    <div className="flex flex-col	 md:flex md:flex-row p-4 justify-between items-center">
                        <div className="self-center   flex w-full sm:w-1/2  md:mr-10  ">
                            <img
                                className="w-auto h-auto"
                                src={"https://cdn.thetradingpit.com/pages/platforms/laptop-screen-atas-trade.png"}
                                alt="illustration"
                                style={{ width: '32rem' }}

                            />
                        </div>
                        <div className="pt-4 md:pt-10 lg:pt-0  w-full sm:w-1/2 ">
                            <h1 className="mb-2 tracking-tight leading-8 text-center sm:text-left font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl ">
                                TAKE A INSIGHTS OF TRADLE WITH HSLINES
                            </h1>
                            <p className="mb-2 text-xs sm:text-sm md:text-sm text-gray-600 text-center sm:text-left">
                                Testing your International Trade knowledge is a critical task for any professional in the field. Doing so, allows you to evaluate your understanding of the complexities of conducting international business and the changing global landscape. It provides the opportunity to develop new skills and remain up-to-date on the latest trade-related developments. Consequently, ensuring that your International Trade knowledge is sound and current is essential for any professional seeking success in the field.                            </p>
                            <div className="mt-5 sm:mt-2 flex justify-center sm:justify-start">
                                <Button variant="contained" style={{ background: 'black', textTransform: 'none' }}>Explore More</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

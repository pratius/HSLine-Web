import React from 'react';

import { Button } from '@mui/material';

export default function StartToday(offset) {

    return (
        <div>
            <div className="relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto p-6 md:pt-16 sm:p-8">
                    <div className="flex flex-col	 md:flex md:flex-row p-4 justify-between items-center">

                        <div className="pt-4 md:pt-10 lg:pt-0 max-w-sm ">
                            <h1 className="mb-2 tracking-tight leading-8 text-center sm:text-left font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl ">
                                Get more with Tito trade data
                            </h1>
                            <p className="mb-2 text-xs sm:text-sm md:text-sm text-gray-600 text-center sm:text-left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className="mt-5 sm:mt-2 sm:flex justify-start">
                                <Button variant="contained" style={{ background: 'black', textTransform: 'none' }}>Learn more</Button>
                            </div>
                        </div>
                        <div className="self-center    md:block  md:mr-10">
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

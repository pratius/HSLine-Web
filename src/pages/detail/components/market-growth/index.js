import PopMenu from '@/components/PopMenu';
import { Button } from '@mui/material';
import React from 'react';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import TreeGraph from '@/components/TreeGraph';
import GeoMap from '@/components/GeoMap';
export default function MarketGrowth(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <h2 className='text-center font-bold text-4xl my-10 text-gray-800'>MARKET GROWTH</h2>
                    <div className='flex flex-row justify-between mt-4'>
                        <div className='flex'>
                            <div className='mr-3'>
                                <PopMenu label="Flow" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                            <div className='mr-3'>
                                <PopMenu label="View" items={["IMPORTS", "EXPORTS"]} />
                            </div>

                        </div>
                        <Button variant="contained" style={{ background: 'black', textTransform: 'none' }}> <LaunchRoundedIcon style={{ fontSize: 20, marginRight: 4 }} /> Explore Visualization</Button>


                    </div>
                    <div className='flex mt-6 mb-4'>
                        <div>
                            <h5 className='text-sm text-gray-700'>FASTEST GROWING EXPORT MARKETS (2019 - 2020)</h5>
                            <h6 className='text-base font-semibold'>
                                Germany <small>( $14.4B )</small>
                            </h6>
                        </div>




                    </div>
                    <div className='flex mt-8 h-80 w-full'>
                        {/* <GeoMap /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

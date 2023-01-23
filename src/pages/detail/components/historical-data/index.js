import PopMenu from '@/components/PopMenu';
import { Button } from '@mui/material';
import React from 'react';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import TreeGraph from '@/components/TreeGraph';
export default function HistoricalData(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <h2 className='text-center font-bold text-4xl my-10 text-gray-800'>HISTORICAL DATA</h2>
                    <div className='flex flex-row justify-between mt-4'>
                        <div className='flex'>
                            <div className='mr-3'>
                                <PopMenu label="Flow" items={["IMPORTS", "EXPORTS"]} />
                            </div>

                            <div className='mr-3'>
                                <PopMenu label="Depth" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                            <div className='mr-3'>
                                <PopMenu label="Value" items={["IMPORTS", "EXPORTS"]} />
                            </div>

                        </div>
                        <Button variant="contained" style={{ background: 'black', textTransform: 'none' }}> <LaunchRoundedIcon style={{ fontSize: 20, marginRight: 4 }} /> Explore Visualization</Button>


                    </div>
                    <div className='flex mt-6 mb-4'>
                        <div>
                            <h5 className='text-sm text-gray-700'>TOP EXPORT (2020)</h5>
                            <h6 className='text-base font-semibold'>
                                Broadcasting Equipment <small>( $88B )</small>
                            </h6>
                        </div>
                        <div className='ml-6'>
                            <h5 className='text-sm text-gray-700'>TOP DESTINATION (2020)</h5>
                            <h6 className='text-base font-semibold'>
                                United States <small>( $99B )</small>
                            </h6>
                        </div>



                    </div>
                    <div className='flex mt-8'>
                        <div className='graphArea w-1/2 h-80'>
                            <h5 className='font-semibold text-sm'>Trend Japan - 2022</h5>
                            <TreeGraph />
                        </div>
                        <div className='graphArea w-1/2 h-80'>
                            <h5 className='font-semibold text-sm'>Trend USA - 2022</h5>
                            <TreeGraph />
                        </div>
                    </div>
                    <div className='flex mt-6'>
                        <div className='graphArea w-1/2 h-80'>
                            <h5 className='font-semibold text-sm'>Trend South Korea - 2022</h5>
                            <TreeGraph />
                        </div>
                        <div className='graphArea w-1/2 h-80'>
                            <h5 className='font-semibold text-sm'>Trend Gotham - 2022</h5>
                            <TreeGraph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

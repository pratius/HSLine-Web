import { Button, Chip } from '@mui/material';
import React from 'react';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import PopMenu from 'shared/PopMenu';
import TreeGraph from 'shared/TreeGraph';
export default function HistoricalData(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <h2 className='text-center font-bold text-4xl my-10 text-gray-800'>HISTORICAL DATA</h2>
                    <div className='flex flex-col lg:flex-row justify-between mt-4'>
                        <div className='flex flex-wrap lg:flex-row mb-6 lg:mb-0'>
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
                    <div className='flex flex-wrap lg:flex-row mt-6 mb-4'>
                        <Chip className='drop-shadow-md mr-2 mb-2 lg:mb-0' color="primary" label={<div className='flex items-center'>
                            <small className='text-xxs'>TOP EXPORT (2020)</small>
                            <small className="text-xs ml-4 font-semibold" > Broadcasting Equipment ($88B)</small>

                        </div>} size="small" />
                        <Chip className='drop-shadow-md mr-2 mb-2 lg:mb-0' color="primary" label={<div className='flex items-center'>
                            <small className='text-xxs'>TOP DESTINATION (2020)</small>
                            <small className="text-xs ml-4 font-semibold" > United States ($99B)</small>

                        </div>} size="small" />
                    </div>
                    <div className='flex mt-8'>
                        <div className='graphArea w-full h-80'>
                            <h5 className='font-semibold text-sm'>Trend Japan - 2022</h5>
                            <TreeGraph />
                        </div>

                    </div>
                    <div className='flex mt-8'>
                        <div className='graphArea w-full h-80'>
                            <h5 className='font-semibold text-sm'>Trend Japan - 2022</h5>
                            <TreeGraph />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

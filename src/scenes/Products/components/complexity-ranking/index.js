import { Button, Chip } from '@mui/material';
import React from 'react';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import PopMenu from 'shared/PopMenu';
import GeoMap from 'shared/GeoMap';
import BarGraph from 'shared/BarGraph';
import LineGraph from 'shared/LineGraph';

export default function ComplexityRanking(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <h2 className='text-center font-bold text-4xl my-10 text-gray-800'>ECONOMIC COMPLEXITY RANKINGS</h2>
                    <div className='flex flex-row justify-between mt-4'>
                        <div className='flex'>
                            <div className='mr-3'>
                                <PopMenu label="Export Year" items={["2020", "EXPORTS"]} />
                            </div>
                            <div className='mr-3'>
                                <PopMenu label="Import Year" items={["2020", "EXPORTS"]} />
                            </div>

                        </div>
                        <Button variant="contained" style={{ background: 'black', textTransform: 'none' }}> <LaunchRoundedIcon style={{ fontSize: 20, marginRight: 4 }} /> Explore Visualization</Button>


                    </div>
                    <div className='flex mt-6 mb-4'>

                        <Chip className='drop-shadow-md mr-2 ' color="primary" label={<div className='flex'>
                            <small className=''>USA EXPORTS SERVICES (2020)</small>
                            <small className="text-xs ml-4 font-semibold" >$208B
                            </small>

                        </div>} size="small" />
                        <Chip className='drop-shadow-md mr-2 ' color="primary" label={<div className='flex'>
                            <small className=''>USA IMPORTS SERVICES (2020)</small>
                            <small className="text-xs ml-4 font-semibold" >$198B
                            </small>

                        </div>} size="small" />
                    </div>
                    <div className='flex mt-8 h-96 w-full  flex-col'>
                        <h3 className='font-semibold text-lg'>Service Exports (2020)
                        </h3>
                        <LineGraph />
                    </div>

                </div>
            </div>
        </div>
    )
}

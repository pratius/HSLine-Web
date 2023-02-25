import { Button, Chip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import PopMenu from 'shared/PopMenu';
import GeoMap from 'shared/GeoMap';
import EmptyState from 'shared/EmptyState';
import { apiGet } from 'services/apiServices';
import { API_ENDPOINT_PRO_STATS_ECONOMIC_COMPLEXITY } from 'scenes/Detail/detail.constants';

export default function EconomicComplexity(offset) {
    const [complexityData, setComplexityData] = useState([])


    useEffect(() => {
        fetchECI()
    }, [])
    const fetchECI = async () => {
        try {
            let response = await apiGet(API_ENDPOINT_PRO_STATS_ECONOMIC_COMPLEXITY)
            setComplexityData(response.data)
        } catch (e) {

        }

    }

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <h2 className='text-center font-bold text-4xl my-10 text-gray-800'>ECONOMIC COMPLEXITY
                    </h2>
                    <div className='flex flex-col lg:flex-row justify-between mt-4'>
                        <div className='flex mb-6 lg:mb-0'>
                            <div className='mr-3'>
                                <PopMenu label="Flow" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                            <div className='mr-3'>
                                <PopMenu label="View" items={["IMPORTS", "EXPORTS"]} />
                            </div>

                        </div>
                        <Button variant="contained" style={{ background: 'black', textTransform: 'none' }}> <LaunchRoundedIcon style={{ fontSize: 20, marginRight: 4 }} /> Explore Subnational Data</Button>


                    </div>
                    {/* <div className='flex flex-wrap lg:flex-row mt-6 mb-4'>

                        <Chip className='drop-shadow-md mr-2 mb-2 lg:mb-0 ' color="primary" label={<div className='flex items-center'>
                            <small className='text-xxs'>FASTEST GROWING EXPORT MARKETS (2019 - 2020)</small>
                            <small className="text-xs ml-4 font-semibold" >Germany ($14.3B)</small>

                        </div>} size="small" />
                    </div> */}
                    <div className='flex mt-8 h-96 w-full'>
                        {/* <div className='graphArea w-full h-80 bg-neutral-200 mx-2 rounded'>
                            <EmptyState variant="horizontal" />
                        </div> */}

                        <div className='graphArea w-full h-80 mx-2 rounded'>
                            <GeoMap variant="horizontal" data={complexityData} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

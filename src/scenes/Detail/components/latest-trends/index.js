import { Button, Chip, Divider, Typography } from '@mui/material';
import React from 'react';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import PopMenu from 'shared/PopMenu';
import EmptyState from 'shared/EmptyState';
export default function LatestTrends(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <h2 className='text-center font-bold text-4xl my-10 text-gray-800'>LATEST TRENDS</h2>
                    <div className='flex flex-row justify-between mt-4'>
                        <div className='flex'>
                            <div className='mr-3'>
                                <PopMenu label="Flow" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                            <div className='mr-3'>
                                <PopMenu label="Time Scale" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                            <div className='mr-3'>
                                <PopMenu label="Depth" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                            <div className='mr-3'>
                                <PopMenu label="Value" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                            <div className='mr-3'>
                                <PopMenu label="Type" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                        </div>
                        <Button variant="contained" style={{ background: 'black', textTransform: 'none' }}> <DownloadRoundedIcon style={{ fontSize: 20, marginRight: 4 }} /> Bulk Download</Button>


                    </div>
                    <div className='flex mt-6 mb-4'>
                        <Chip className='drop-shadow-md mr-2 ' color="primary" label={<div className='flex'>
                            <small className=''>EXPORT GROWTH (2022-2023)</small>
                            <small className="text-xs ml-4 font-semibold" >33% (-1.4%)</small>

                        </div>} size="small" />

                        <Chip className='drop-shadow-md mr-2 ' color="primary" label={<div className='flex'>
                            <small className=''>IMPORT GROWTH (2022-2023)</small>
                            <small className="text-xs ml-4 font-semibold" > 67% (-1.2%)</small>

                        </div>} size="small" />

                        <Chip className='drop-shadow-md mr-2 ' color="primary" label={<div className='flex'>
                            <small className=''>MAIN EXPORTER</small>
                            <small className="text-xs ml-4 font-semibold" >Guangdong Province ($78.4B)</small>

                        </div>} size="small" />

                        <Chip className='drop-shadow-md mr-2 ' color="primary" label={<div className='flex'>
                            <small className=''>MAIN DESTINATION</small>
                            <small className="text-xs ml-4 font-semibold" >USA ($66.4B )</small>

                        </div>} size="small" />


                    </div>
                    <div className='flex mt-8'>
                        <div className='graphArea w-full h-80 bg-neutral-200 mx-2 rounded'>
                            <EmptyState variant="horizontal" />
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}
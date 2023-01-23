import PopMenu from '@/components/PopMenu';
import { Button } from '@mui/material';
import React from 'react';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import TreeGraph from '@/components/TreeGraph';
import EmptyState from '@/components/EmptyState';
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
                        <div>
                            <h5 className='text-sm text-gray-700'>EXPORT GROWTH (2022-2023)</h5>
                            <h6 className='text-base font-semibold'>
                                56% <small>(-2.4%)</small>
                            </h6>
                        </div>
                        <div className='ml-6'>
                            <h5 className='text-sm text-gray-700'>IMPORT GROWTH (2022-2023)</h5>
                            <h6 className='text-base font-semibold'>
                                67% <small>(-1.2%)</small>
                            </h6>
                        </div>
                        <div className='ml-6'>
                            <h5 className='text-sm text-gray-700'>MAIN EXPORTER</h5>
                            <h6 className='text-base font-semibold'>
                                Guangdong Province <small>( $78.4B )</small>
                            </h6>
                        </div>
                        <div className='ml-6'>
                            <h5 className='text-sm text-gray-700'>MAIN DESTINATION</h5>
                            <h6 className='text-base font-semibold'>
                                USA <small>( $66.4B )</small>
                            </h6>
                        </div>


                    </div>
                    <div className='flex mt-8'>
                        <div className='graphArea w-1/2 h-80 bg-slate-200 mx-2 rounded'>
                            <EmptyState />
                        </div>
                        <div className='graphArea w-1/2 h-80 bg-slate-200 mx-2 rounded'>
                            <EmptyState />

                        </div>
                    </div>
                    <div className='flex mt-6'>
                        <div className='graphArea w-1/2 h-80 bg-slate-200 mx-2 rounded'>
                            <EmptyState />

                        </div>
                        <div className='graphArea w-1/2 h-80 bg-slate-200 mx-2 rounded'>
                            {/* <h5 className='font-semibold text-sm'>Trend Gotham - 2022</h5>
                            <TreeGraph /> */}
                            <EmptyState />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

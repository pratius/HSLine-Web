import { Button, Chip } from '@mui/material';
import React from 'react';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import PopMenu from 'shared/PopMenu';
import TreeGraph from 'shared/TreeGraph';
export default function ImportExports(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className=" mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <h2 className='text-xl text-center font-bold sm:text-4xl my-10 text-gray-800'>HISTORICAL (IMPORTS & EXPORTS)</h2>
                    <div className='flex flex-col lg:flex-row justify-between mt-4'>
                        <div className='flex flex-wrap lg:flex-row mb-6 lg:mb-0'>
                            <div className='mr-3'>
                                <PopMenu label="Year" items={["2023", "2022"]} />
                            </div>


                        </div>
                        {/* <Button variant="contained" style={{ background: 'black', textTransform: 'none' }}> <LaunchRoundedIcon style={{ fontSize: 20, marginRight: 4 }} /> Explore Visualization</Button> */}


                    </div>

                    <div className='flex mt-8'>
                        <div className='graphArea w-full h-80'>
                            <h5 className='font-semibold text-lg text-center'>Total - $4.3B</h5>
                            <TreeGraph />
                        </div>

                    </div>
                    <div className='flex mt-8'>
                        <div className='graphArea w-full h-80'>
                            <h5 className='font-semibold text-lg text-center'>Total - $4.3M</h5>
                            <TreeGraph />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

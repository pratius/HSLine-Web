import React from 'react';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { Chip, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
export default function CountryInfo(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <div className='flex flex-row items-center '>
                        <img className='w-20' src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png" alt=" countryFlag" />
                        <h1 className='ml-3 text-5xl font-bold text-gray-800'>United States</h1>

                    </div>
                    <div className='flex flex-row mt-8 justify-between '>
                        <div className='flex flex-col items-center cursor-pointer hover:bg-slate-200 p-3 rounded duration-300	'>
                            <h5 className='text-gray-600 font-semibold'>2020</h5>
                            <h3 className='text-gray-700 text-center font-semibold text-sm'>ECONOMIC <br /> COMPLEXITY</h3>
                            <h1 className='text-gray-800 font-bold text-2xl mt-2'>0.96</h1>
                            <small className='text-gray-800 font-semibold'>Rank 23 of 108</small>
                        </div>

                        <div className='flex flex-col items-center cursor-pointer hover:bg-slate-200 p-3 rounded duration-300	'>
                            <h5 className='text-gray-600 font-semibold'>2020</h5>
                            <h3 className='text-gray-700 text-center font-semibold text-sm'>PRODUCT <br /> EXPORTS | IMPORTS</h3>
                            <h1 className='text-gray-800 font-bold text-2xl mt-2'>$2.1T | $1.2T</h1>
                            <small className='text-gray-800 font-semibold'>Rank 23 of 108 | Rank of 1 of 102</small>
                        </div>



                        <div className='flex flex-col items-center cursor-pointer hover:bg-slate-200 p-3 rounded duration-300	'>
                            <h5 className='text-gray-600 font-semibold'>2020</h5>
                            <h3 className='text-gray-700 text-center font-semibold text-sm'>PER CAPITA  PRODUCT <br /> EXPORTS | IMPORTS</h3>
                            <h1 className='text-gray-800 font-bold text-2xl mt-2'>$1.1T | $1.2K</h1>
                            <small className='text-gray-800 font-semibold'>Rank 23 of 108 | Rank of 1 of 102</small>
                        </div>

                        <div className='flex flex-col items-center cursor-pointer hover:bg-slate-200 p-3 rounded duration-300	'>
                            <h5 className='text-gray-600 font-semibold'>2020</h5>
                            <h3 className='text-gray-700 text-center font-semibold text-sm'>SERVICE <br /> EXPORTS | IMPORTS</h3>
                            <h1 className='text-gray-800 font-bold text-2xl mt-2'>$1.1B | $1.2B</h1>
                            <small className='text-gray-800 font-semibold'>Rank 23 of 108 | Rank of 1 of 102</small>
                        </div>

                    </div>
                    <div className='flex flex-row mt-10 justify-center'>
                        <div className='generic-card-shadow px-2 py-2 flex flex-row items-center justify-center rounded cursor-pointer hover:drop-shadow-xl duration-300 mx-3'>
                            <TrendingUpRoundedIcon style={{ marginRight: 4, fontSize: 22 }} className="text-gray-800" />
                            <h6 className='text-sm font-semibold text-gray-800'>LATEST TRENDS</h6>
                        </div>

                        <div className='generic-card-shadow px-2 py-2 flex flex-row items-center justify-center rounded cursor-pointer hover:drop-shadow-xl duration-300 mx-3'>
                            <HistoryRoundedIcon style={{ marginRight: 4, fontSize: 22 }} className="text-gray-800" />
                            <h6 className='text-sm font-semibold text-gray-800'>HISTORICAL DATA</h6>
                        </div>

                        <div className='generic-card-shadow px-2 py-2 flex flex-row items-center justify-center rounded cursor-pointer hover:drop-shadow-xl duration-300 mx-3'>
                            <ConnectWithoutContactRoundedIcon style={{ marginRight: 4, fontSize: 22 }} className="text-gray-800" />
                            <h6 className='text-sm font-semibold text-gray-800'>SERVICE TRADE</h6>
                        </div>
                        <div className='generic-card-shadow px-2 py-2 flex flex-row items-center justify-center rounded cursor-pointer hover:drop-shadow-xl duration-300 mx-3'>
                            <LanguageRoundedIcon style={{ marginRight: 4, fontSize: 22 }} className="text-gray-800" />
                            <h6 className='text-sm font-semibold text-gray-800'>ECONOMIC COMPLEXITY</h6>
                        </div>

                    </div>
                    <div className='flex flex-col mt-10'>
                        <h4 className='text-sm text-gray-800 font-semibold'>OVERVIEW</h4>
                        <p className='text-left  text-gray-600'>
                            In 2020, China was the number 2 economy in the world in terms of GDP (current US$), the number 1 in total exports, the number 2 in total imports, the number 77 economy in terms of GDP per capita (current US$) and the number 28 most complex economy according to the Economic Complexity Index (ECI).
                            <br />In 2020, China was the world's biggest exporter of Broadcasting Equipment ($223B), Computers ($156B), Office Machine Parts ($86.8B), Other Cloth Articles ($60.7B), and Telephones ($51B)
                        </p>

                    </div>
                    <div className='flex flex-col mt-4'>
                        <h4 className='text-sm text-gray-800 font-semibold tracking-widest'>EXPORTS</h4>
                        <div className='flex flex-row mt-2'>
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - Japan"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - India"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - Pakistan"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - USA"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - Kazakstan"} size="small" />

                        </div>

                    </div>

                    <div className='flex flex-col mt-4'>
                        <h4 className='text-sm text-gray-800 font-semibold tracking-widest'>IMPORTS</h4>
                        <div className='flex flex-row mt-2'>
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - USA"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - Kazakstan"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - Japan"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - India"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - Pakistan"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - Kazakstan"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - Japan"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - India"} size="small" />
                            <Chip className='drop-shadow-md mr-2' color="primary" label={"$1.3B - Pakistan"} size="small" />
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

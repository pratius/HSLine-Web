import React, { useEffect, useState } from 'react';
import StackedLineChartRoundedIcon from '@mui/icons-material/StackedLineChartRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import "./report_view.scss"
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import PopMenu from 'shared/PopMenu';
import GeoMap from 'shared/GeoMap';
import SearchBox from 'shared/SearchBox';
export default function ReportView(offset) {
    const [alignment, setAlignment] = React.useState('product');
    const [queryType, setQueryType] = useState("product")
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
        setQueryType(newAlignment)
    };
    return (
        <div className='relative ReportView'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">

                    <div className='report-graph-type flex flex-row '>
                        <div className=' graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300'>
                            <StackedLineChartRoundedIcon className='text-gray-800' />
                            <h4 className='text-lg font-semibold text-gray-800'>STACKED </h4>
                        </div>

                        <div className='graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300'>
                            <TimelineRoundedIcon className='text-gray-800 ' />
                            <h4 className='text-lg font-semibold text-gray-800'>LINE </h4>
                        </div>

                        <div className='graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300'>
                            <TableChartRoundedIcon className='text-gray-800' />
                            <h4 className='text-lg font-semibold text-gray-800'>TREE MAP </h4>
                        </div>

                        <div className='graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300'>
                            <BubbleChartRoundedIcon className='text-gray-800' />
                            <h4 className='text-lg font-semibold text-gray-800'>RING </h4>
                        </div>

                        <div className='graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300'>
                            <LanguageRoundedIcon className='text-gray-800' />
                            <h4 className='text-lg font-semibold text-gray-800'>GEO MAP </h4>
                        </div>

                        <div className='graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300'>
                            <AccountTreeRoundedIcon className='text-gray-800' />
                            <h4 className='text-lg font-semibold text-gray-800'>NETWORK </h4>
                        </div>

                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col mt-6 '>
                            <h2 className='mb-2 font-semibold text-gray-700'>Select Trade Flow</h2>

                            <div className='mr-3 mb-3 lg:mb-0'>
                                <PopMenu label="Flow" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                        </div>

                        <div className='query-type mt-6 ml-10'>
                            <h2 className='mb-2 font-semibold text-gray-700'>Select Report Query Type</h2>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                                size='small'
                            >
                                <ToggleButton value="country">Country</ToggleButton>
                                <ToggleButton value="product">Product</ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                    </div>
                    <div className='flex flex-row mt-8 mb-12'>
                        <div className="w-full sm:w-96 mt-6 sm:mt-0">
                            <SearchBox type={queryType === "product" ? "product" : "country"} placeholder={queryType === "product" ? "Search product" : "Search country"} />
                        </div>
                        <div className="w-full sm:w-96 mt-6 sm:mt-0 ml-16">
                            <SearchBox type={queryType === "product" ? "product" : "country"} placeholder={queryType === "product" ? "Search country" : "Search Partner Country"} />
                        </div>

                        <div className='ml-12'>
                            <Button variant="contained" style={{ background: 'black', textTransform: 'none' }}> Generate Report</Button>

                        </div>
                    </div>


                    <div className='flex mt-12 h-96 w-full flex-col'>
                        <h2 className='mb-2 font-semibold text-2xl text-center text-gray-700 mb-6'>What does Nicaragua export? (2013-2020)</h2>

                        <GeoMap />
                    </div>



                </div>
            </div>
        </div>
    )
}

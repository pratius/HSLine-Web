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
import LineChart from 'shared/LineChart';
import TreeGraph from 'shared/TreeGraph';
export default function ReportView(offset) {
    const [alignment, setAlignment] = React.useState('product');
    const [queryType, setQueryType] = useState("product")
    const [graphType, setGraphType] = useState("stacked")
    const [tradeType, setTradeType] = useState("imports")
    const handleChange = (
        event,
        newAlignment,
    ) => {
        setAlignment(newAlignment);
        setQueryType(newAlignment)
    };

    const data = [
        {
            "id": "japan",
            "color": "hsl(96, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 237
                },
                {
                    "x": "helicopter",
                    "y": 160
                },
                {
                    "x": "boat",
                    "y": 283
                },
                {
                    "x": "train",
                    "y": 120
                },
                {
                    "x": "subway",
                    "y": 173
                },
                {
                    "x": "bus",
                    "y": 113
                },
                {
                    "x": "car",
                    "y": 87
                },
                {
                    "x": "moto",
                    "y": 160
                },
                {
                    "x": "bicycle",
                    "y": 194
                },
                {
                    "x": "horse",
                    "y": 275
                },
                {
                    "x": "skateboard",
                    "y": 209
                },
                {
                    "x": "others",
                    "y": 178
                }
            ]
        },

    ]

    const renderChart = () => {
        switch (graphType) {
            case "stacked":
                return <LineChart data={data} />
            case "line":
                return <LineChart data={data} />
            case "tree":
                return <TreeGraph />
            case "geomap":
                return <GeoMap />
            default:
                return <LineChart />

        }
    }
    return (
        <div className='relative ReportView'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">

                    <div className='report-graph-type flex flex-row md:flex-wrap overflow-x-auto sm:overflow-hidden	  '>
                        <div className={'mb-6 mb-6 graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300 ' + (graphType === "stacked" ? " active-card" : "")}
                            onClick={() => setGraphType("stacked")}  >
                            <StackedLineChartRoundedIcon className='text-gray-800' />
                            <h4 className='text-lg font-semibold text-gray-800'>STACKED </h4>
                        </div>

                        <div className={'mb-6 mb-6 graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300 ' + (graphType === "line" ? " active-card" : "")}
                            onClick={() => setGraphType("line")}  >
                            <TimelineRoundedIcon className='text-gray-800 ' />
                            <h4 className='text-lg font-semibold text-gray-800'>LINE </h4>
                        </div>

                        <div className={'mb-6 mb-6 graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300 ' + (graphType === "tree" ? " active-card" : "")}
                            onClick={() => setGraphType("tree")}  >
                            <TableChartRoundedIcon className='text-gray-800' />
                            <h4 className='text-lg font-semibold text-gray-800'>TREE MAP </h4>
                        </div>



                        <div className={'mb-6 mb-6 graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300 ' + (graphType === "geomap" ? " active-card" : "")}
                            onClick={() => setGraphType("geomap")}  >
                            <LanguageRoundedIcon className='text-gray-800' />
                            <h4 className='text-lg font-semibold text-gray-800'>GEO MAP </h4>
                        </div>



                    </div>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center'>
                        <div className='flex flex-col mt-6 '>
                            <h2 className='mb-2 font-semibold text-gray-700'>Select Trade Flow</h2>

                            <div className='mr-3 mb-3 lg:mb-0'>
                                <PopMenu label="Flow" value={tradeType} items={["IMPORTS", "EXPORTS"]} onSelect={(item) => setTradeType(item.toLowerCase())} />
                            </div>
                        </div>

                        <div className='query-type mt-6 sm:ml-10'>
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
                    <div className='flex flex-col  mt-8 mb-12 lg:flex-row'>
                        <div className="w-full sm:w-96 mt-6 sm:mt-0 ">
                            <SearchBox type={queryType === "product" ? "product" : "country"} placeholder={queryType === "product" ? "Search product" : "Search country"} selectOnly />
                        </div>
                        <div className="w-full sm:w-96 mt-6 ml-0 md:ml-0 lg:ml-16 lg:mt-0 ">
                            <SearchBox type={"country"} placeholder={queryType === "product" ? "Search country" : "Search Partner Country"} selectOnly />
                        </div>

                        <div className='ml-0 lg:ml-12 mt-5 lg:mt-0'>
                            <Button variant="contained" style={{ background: 'black', textTransform: 'none' }} fullWidth> Generate Report</Button>

                        </div>
                    </div>


                    <div className='flex mt-8 h-96 w-full flex-col'>
                        <h2 className='mb-2 font-semibold text-2xl text-center text-gray-700 mb-6'>What does Nicaragua {tradeType.toLocaleLowerCase()}? (2013-2020)</h2>

                        {renderChart()}
                    </div>



                </div>
            </div>
        </div>
    )
}

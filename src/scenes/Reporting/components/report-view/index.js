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
import { apiPost } from 'services/apiServices';
import { API_ENDPOINT_REPORTS_BUILD_VISUALIZATION } from 'scenes/Reporting/reports.constants';
export default function ReportView(offset) {
    const [alignment, setAlignment] = React.useState('product');
    const [queryType, setQueryType] = useState("product")
    const [graphType, setGraphType] = useState("tree")
    const [tradeType, setTradeType] = useState("imports")
    const [listOne, setListOne] = useState([])
    const [listTwo, setListTwo] = useState([])
    const [visData, setVisData] = useState([])
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
        {
            "id": "france",
            "color": "hsl(247, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 201
                },
                {
                    "x": "helicopter",
                    "y": 62
                },
                {
                    "x": "boat",
                    "y": 114
                },
                {
                    "x": "train",
                    "y": 147
                },
                {
                    "x": "subway",
                    "y": 168
                },
                {
                    "x": "bus",
                    "y": 299
                },
                {
                    "x": "car",
                    "y": 139
                },
                {
                    "x": "moto",
                    "y": 236
                },
                {
                    "x": "bicycle",
                    "y": 39
                },
                {
                    "x": "horse",
                    "y": 228
                },
                {
                    "x": "skateboard",
                    "y": 18
                },
                {
                    "x": "others",
                    "y": 47
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(128, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 17
                },
                {
                    "x": "helicopter",
                    "y": 44
                },
                {
                    "x": "boat",
                    "y": 245
                },
                {
                    "x": "train",
                    "y": 55
                },
                {
                    "x": "subway",
                    "y": 90
                },
                {
                    "x": "bus",
                    "y": 167
                },
                {
                    "x": "car",
                    "y": 76
                },
                {
                    "x": "moto",
                    "y": 232
                },
                {
                    "x": "bicycle",
                    "y": 135
                },
                {
                    "x": "horse",
                    "y": 294
                },
                {
                    "x": "skateboard",
                    "y": 228
                },
                {
                    "x": "others",
                    "y": 280
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(69, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 40
                },
                {
                    "x": "helicopter",
                    "y": 278
                },
                {
                    "x": "boat",
                    "y": 6
                },
                {
                    "x": "train",
                    "y": 115
                },
                {
                    "x": "subway",
                    "y": 41
                },
                {
                    "x": "bus",
                    "y": 215
                },
                {
                    "x": "car",
                    "y": 149
                },
                {
                    "x": "moto",
                    "y": 252
                },
                {
                    "x": "bicycle",
                    "y": 69
                },
                {
                    "x": "horse",
                    "y": 34
                },
                {
                    "x": "skateboard",
                    "y": 106
                },
                {
                    "x": "others",
                    "y": 177
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(305, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 156
                },
                {
                    "x": "helicopter",
                    "y": 18
                },
                {
                    "x": "boat",
                    "y": 273
                },
                {
                    "x": "train",
                    "y": 95
                },
                {
                    "x": "subway",
                    "y": 280
                },
                {
                    "x": "bus",
                    "y": 129
                },
                {
                    "x": "car",
                    "y": 236
                },
                {
                    "x": "moto",
                    "y": 65
                },
                {
                    "x": "bicycle",
                    "y": 29
                },
                {
                    "x": "horse",
                    "y": 29
                },
                {
                    "x": "skateboard",
                    "y": 16
                },
                {
                    "x": "others",
                    "y": 141
                }
            ]
        }
    ]

    useEffect(() => {
        setListOne([])
        setListTwo([])
    }, [queryType])
    const buildVisualize = async () => {
        let payload = {
            "flow_type": tradeType,
            "query_type": queryType,
            "countries": listOne.map(item => item.value),
            "products": listOne.map(item => item.value),
            "partners": listTwo.map(item => item.value),
            "graph_type": graphType
        }

        const response = await apiPost(API_ENDPOINT_REPORTS_BUILD_VISUALIZATION, payload)
        if (response.status) {
            setVisData(response.data)

        }
    }

    const renderChart = (graphData) => {
        console.log("visData:", visData)
        switch (graphType) {
            case "stacked":
                return <LineChart data={data} />
            case "line":
                return <LineChart data={[data[0]]} />
            case "tree":
                return <TreeGraph data={graphData} />
            case "geomap":
                return <GeoMap data={graphData} />
            default:
                return <LineChart />

        }
    }

    const titleFormatter = () => {
        let title = ""
        if (listOne.length == 0 && listTwo.length === 0) return title
        if (queryType == "country" && listTwo.length === 0)
            title = title + " where does"

        if (queryType == "product" && listTwo.length === 0)
            title = title + " which countries "
        if (queryType == "product" && listTwo.length > 0)
            title = title + " where does "


        if (listTwo.length > 0 && queryType == "product") {
            for (let idx in listTwo) {
                title = title + " " + listTwo[idx].label + (listTwo[idx + 1] !== undefined ? " and " : "")
            }

            if (tradeType === "exports")
                title = title + " Exports from"
            if (tradeType === "imports")
                title = title + " Imports"

        } else if (listTwo.length === 0 && queryType == "product") {
            if (tradeType === "exports")
                title = title + " Exports from"
            if (tradeType === "imports")
                title = title + " Imports"
        }




        if (queryType == "country" && listTwo.length > 0)
            title = title + " what does"
        if (listOne.length > 0) {
            for (let idx in listOne) {
                title = title + " " + listOne[idx].label + (listOne[idx + 1] !== undefined ? " and " : ",")
            }
        }


        if (queryType === "country") {
            if (tradeType === "exports")
                title = title + " Exports"
            if (tradeType === "imports")
                title = title + " Imports"
        }


        if (listTwo.length > 0 && queryType === "country") {
            title = title + (tradeType === "imports" ? " from" : " to")
            for (let idx in listTwo) {
                title = title + " " + listTwo[idx].label + (listTwo[idx + 1] !== undefined ? " and " : "")
            }
        } else {
            title = title + (tradeType === "imports" ? " from" : "")
        }

        return title
    }
    console.log("listone list:", listOne)
    return (
        <div className='relative ReportView'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">

                    <div className='report-graph-type flex flex-row md:flex-wrap overflow-x-auto sm:overflow-hidden	  '>
                        {/* <div className={'mb-6 mb-6 graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300 ' + (graphType === "stacked" ? " active-card" : "")}
                            onClick={() => setGraphType("stacked")}  >
                            <StackedLineChartRoundedIcon className='text-gray-800' />
                            <h4 className='text-lg font-semibold text-gray-800'>STACKED </h4>
                        </div>

                        <div className={'mb-6 mb-6 graph-type-card w-40 h-12 rounded drop-shadow-md bg-white p-2 flex items-center justify-center mr-6 cursor-pointer hover:bg-slate-900 duration-300 ' + (graphType === "line" ? " active-card" : "")}
                            onClick={() => setGraphType("line")}  >
                            <TimelineRoundedIcon className='text-gray-800 ' />
                            <h4 className='text-lg font-semibold text-gray-800'>LINE </h4>
                        </div> */}

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


                        <div className='query-type mt-6 '>
                            <h2 className='mb-2 font-semibold text-gray-700'>Select Report Type</h2>
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

                        <div className='flex flex-col mt-6 sm:ml-10'>
                            <h2 className='mb-2 font-semibold text-gray-700'>Select Query Flow</h2>

                            <div className='mr-3 mb-3 lg:mb-0'>
                                <PopMenu label="Flow" value={tradeType} items={["IMPORTS", "EXPORTS"]} onSelect={(item) => setTradeType(item.toLowerCase())} />
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col  mt-8 mb-12 lg:flex-row'>

                        <div className="w-full sm:w-96 mt-6 sm:mt-0 ">
                            <SearchBox clearEntry={queryType} type={queryType === "product" ? "product" : "country"} placeholder={queryType === "product" ? "Search product" : "Search country"} selectOnly onSelect={(items) => setListOne([...items])} />
                        </div>
                        {graphType === "geomap" && queryType !== "product" ? null :
                            <div className="w-full sm:w-96 mt-6 ml-0 md:ml-0 lg:ml-16 lg:mt-0 ">
                                <SearchBox clearEntry={queryType} type={"country"} placeholder={queryType === "product" ? "Search country" : "Search Partner Country"} selectOnly onSelect={(items) => setListTwo([...items])} />
                            </div>}

                        <div className='ml-0 lg:ml-12 mt-5 lg:mt-0'>
                            <Button variant="contained" style={{ background: 'black', textTransform: 'none' }} onClick={buildVisualize} fullWidth> Generate Report</Button>

                        </div>
                    </div>


                    <div className='flex mt-8 h-96 w-full flex-col'>
                        <h2 className='mb-2 font-semibold text-2xl text-center text-gray-700 mb-6'>{titleFormatter()}</h2>

                        {renderChart(visData)}
                    </div>



                </div>
            </div>
        </div>
    )
}

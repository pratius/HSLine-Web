import { Button, Chip, Divider, Typography } from '@mui/material';
import React from 'react';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import PopMenu from 'shared/PopMenu';
import EmptyState from 'shared/EmptyState';
import { connect, useDispatch } from 'react-redux';
import BarGraph from 'shared/BarGraph';
function LatestTrends(props) {
    const dispatch = useDispatch()

    const handleSettingsOpen = () => {
        dispatch({ type: "SET_SETTING_DIALOG_OPEN", payload: true })

    }

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <h2 className='text-center font-bold text-4xl my-10 text-gray-800'>LATEST TRENDS</h2>
                    <div className='flex flex-col lg:flex-row justify-between mt-4'>
                        <div className='flex flex-wrap lg:flex-row  mb-6 lg:mb-0'>
                            <div className='mr-3 mb-3 lg:mb-0'>
                                <PopMenu label="Flow" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                            <div className='mr-3 mb-3 lg:mb-0'>
                                <PopMenu label="Time Scale" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                            <div className='mr-3 mb-3 lg:mb-0'>
                                <PopMenu label="Depth" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                            <div className='mr-3 mb-3 lg:mb-0'>
                                <PopMenu label="Value" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                            <div className='mr-3 mb-3 lg:mb-0'>
                                <PopMenu label="Type" items={["IMPORTS", "EXPORTS"]} />
                            </div>
                        </div>
                        <Button variant="contained" style={{ background: 'black', textTransform: 'none' }}> <DownloadRoundedIcon style={{ fontSize: 20, marginRight: 4 }} /> Bulk Download</Button>


                    </div>
                    <div className='flex flex-wrap sm:flex-row mt-6 mb-4'>
                        <Chip className='drop-shadow-md mr-2 mb-2 lg:mb-0 ' color="primary" label={<div className='flex items-center'>
                            <small className='text-xs'>EXPORT GROWTH (2022-2023)</small>
                            <small className="text-sm ml-4 font-semibold" >33% (-1.4%)</small>

                        </div>} size="small" />

                        <Chip className='drop-shadow-md mr-2 mb-2 lg:mb-0 ' color="primary" label={<div className='flex items-center'>
                            <small className='text-xs'>IMPORT GROWTH (2022-2023)</small>
                            <small className="text-sm ml-4 font-semibold" > 67% (-1.2%)</small>

                        </div>} size="small" />

                        <Chip className='drop-shadow-md mr-2 mb-2 lg:mb-0 ' color="primary" label={<div className='flex items-center'>
                            <small className='text-xs'>MAIN EXPORTER</small>
                            <small className="text-sm ml-4 font-semibold" >Guangdong Province ($78.4B)</small>

                        </div>} size="small" />

                        <Chip className='drop-shadow-md mr-2 mb-2 lg:mb-0 ' color="primary" label={<div className='flex items-center'>
                            <small className='text-xs'>MAIN DESTINATION</small>
                            <small className="text-sm ml-4 font-semibold" >USA ($66.4B )</small>

                        </div>} size="small" />


                    </div>
                    <div className='flex mt-8'>
                        <div className='graphArea w-full h-80 bg-neutral-200 mx-2 rounded'>
                            {props.userInfo.total_members !== null ?
                                <BarGraph /> :
                                <EmptyState variant="horizontal" onSetup={handleSettingsOpen} />}
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

const mapStateToProps = state => {
    return { userInfo: state.userInfo };
};
export default connect(
    mapStateToProps,
)(LatestTrends);

import { Button, Chip } from '@mui/material';
import React from 'react';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import PopMenu from 'shared/PopMenu';
import GeoMap from 'shared/GeoMap';

export default function PriceIndexGeo(offset) {

    return (
        <div className='mt-8'>
            <h2 className='text-left font-bold text-xl text-gray-800'>Price Index Change</h2>
            <div className='flex mt-8 h-96 w-full'>
                {/* <GeoMap /> */}
            </div>
        </div>

    )
}

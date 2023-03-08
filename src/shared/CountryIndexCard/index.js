import { compact } from 'lodash';
import React from 'react';
import { FormattedNumber } from 'react-intl';
import { history } from "Store";
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
export default function CountryIndexCard(props) {
    const textColor = {
        loss: "#EE5253",
        profit: "#10AC84"
    }

    return (
        <div onClick={() => history.push("/detail")} className='generic-card-shadow rounded w-full  sm:w-2/5 lg:w-64 h-32 p-4 flex flex-col justify-between mb-4 sm:mb-0 sm:m-2 sm:mx-3 cursor-pointer hover:scale-110 duration-300' style={{ background: 'white' }}>
            <div className='flex items-center'>
                <img className='w-6 h-4 object-cover' src={`https://www.countryflags.com/wp-content/uploads/${props.data.Country_name.replaceAll(" ", "-").toLowerCase()}-flag-png-large.png`} alt="countryFlag" />

                <h5 className='ml-2 font-semibold text-gray-700'>{props.data.Country_name}</h5>

            </div>
            <h1 className='font-bold text-4xl my-2' style={{ color: '#202123' }} suppressHydrationWarning>
                <FormattedNumber value={props.data.marketValue} style="currency"
                    currency={"USD"} notation={"compact"} />
            </h1>
            <h6 className='text-right font-semibold' style={{ color: props.data.eci_value > 0 ? "#10AC84" : "#EE5253" }} suppressHydrationWarning>
                {props.data.eci_value > 0 ? <ArrowDropUpRoundedIcon style={{ color: "#10AC84" }} /> : <ArrowDropDownRoundedIcon style={{ color: "#EE5253" }} />}{props.data.eci_value.toFixed(2).replaceAll("-", '')}%
            </h6>
        </div>
    )
}

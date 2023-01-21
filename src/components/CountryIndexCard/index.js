import Link from 'next/link';
import React from 'react';

export default function CountryIndexCard(props) {
    console.log("props:", props)
    const textColor = {
        loss: "#EE5253",
        profit: "#10AC84"
    }

    return (
        <Link href="/detail">
            <div className='generic-card-shadow rounded w-64 h-32 p-4 flex flex-col justify-between m-2 mx-3 cursor-pointer hover:scale-110 duration-300' style={{ background: 'white' }}>
                <div className='flex items-center'>
                    <img className='w-6 h-4 object-cover	' src={props.data.flag} alt="countryFlag" />

                    <h5 className='ml-2 font-semibold text-gray-700'>{props.data.name}</h5>

                </div>
                <h1 className='font-bold text-4xl my-2' style={{ color: '#202123' }}>
                    ${Math.floor(Math.random() * 90 + 10)}B
                </h1>
                <h6 className='text-right font-semibold' style={{ color: textColor[props.data.type] }}>
                    +{Math.floor(Math.random() * 90 + 10)}.3% YoY
                </h6>
            </div>
        </Link>
    )
}

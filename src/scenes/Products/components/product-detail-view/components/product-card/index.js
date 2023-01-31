import React from 'react';

export default function ProductCard(props) {
    const textColor = {
        loss: "#EE5253",
        profit: "#10AC84"
    }

    return (
        <div className='flex flex-col m-3 cursor-pointer hover:scale-105 duration-300' >
            <div className='card-shadow-light  w-32 h-32 rounded flex items-center justify-center   ' style={{ background: 'white' }}>
                <img src={props.data.image} alt="postImage" className='rounded w-full h-full object-contain' />
            </div>
            <h3 className='mt-2 font-semibold text-gray-800 text-sm'>
                {props.data.name}
            </h3>

        </div>
    )
}

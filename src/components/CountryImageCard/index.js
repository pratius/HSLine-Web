import React from 'react';

export default function CountryImageCard(props) {


    return (
        <div className='relative rounded w-64 h-32 flex flex-col justify-between m-2 cursor-pointer hover:scale-110 duration-300 mx-3' style={{ background: 'white' }}>
            <img src={props.data.image} alt="postImage" className='rounded relative w-full h-full object-cover	opacity-80	' />
            <h3 className='text-9xl font-bold text-center text-white font-semibold text-gray-800 absolute bottom-0 left-0 top-0 right-0'>{props.data.label}</h3>

        </div>
    )
}

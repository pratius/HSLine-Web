import React from 'react';

export default function CountryImageCard(props) {


    return (
        <div className='relative rounded w-full sm:w-64 h-32 flex flex-col justify-between sm:m-2 cursor-pointer hover:scale-110 duration-300 sm:mx-3 mb-6 sm:mb-0' style={{ background: 'white' }}>
            <img src={props.data.image} alt="postImage" className='rounded relative w-full h-full object-cover	opacity-80	' />
            <h3 className='text-9xl sm:text-7xl lg:text-9xl font-bold text-center text-white font-semibold text-gray-800 absolute bottom-0 left-0 top-0 right-0 items-center flex justify-center'>{props.data.label}</h3>

        </div>
    )
}

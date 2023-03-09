import React from 'react';

export default function ProductBanner(props) {
    const textColor = {
        loss: "#EE5253",
        profit: "#10AC84"
    }

    return (
        <div className='rounded w-full h-48  flex flex-col justify-between sm:m-2 cursor-pointer relative' style={{ background: 'white' }}>
            <img src={props.data.cover_image} alt="postImage" className='rounded  w-full h-full object-cover	' />
            <div className='absolute bottom-0 left-0 w-48 h-12 rounded-r-lg  flex flex-col justify-between  mb-4 p-1 px-3' style={{ background: 'white' }}>
                <h3 className='text-xl font-semibold text-gray-800 ml-3' style={{ lineHeight: 1 }}>{props.data.category_name}</h3>
                <p className='text-sm text-gray-500  ml-3' style={{ whiteSpace: 'normal' }}>
                    {props.data.totalProduct}
                </p>
            </div>
        </div>
    )
}

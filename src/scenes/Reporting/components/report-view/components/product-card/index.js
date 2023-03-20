import React from 'react';
import { history } from "Store";

export default function ProductCard(props) {
    const textColor = {
        loss: "#EE5253",
        profit: "#10AC84"
    }

    return (
        <div onClick={() => history.push("/product/detail/" + props.data.id)} className='flex flex-col m-3 cursor-pointer hover:scale-105 duration-300' >
            <div className='card-shadow-light w-36 lg:w-32 h-32 rounded flex items-center justify-center   ' style={{ background: 'white' }}>
                <img src={props.data.image} alt="postImage" className='rounded w-full h-full object-cover' />
            </div>
            <h3 className='mt-2 font-semibold text-gray-800 text-sm text-ellipsis overflow-hidden truncate w-36 lg:w-32'>
                {props.data.product_name}
            </h3>

        </div>
    )
}

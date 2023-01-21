import React from 'react';

export default function BlogPost(props) {
    console.log("props:", props)
    const textColor = {
        loss: "#EE5253",
        profit: "#10AC84"
    }

    return (
        <div className='rounded w-full h-64  flex flex-col justify-between m-2 cursor-pointer relative' style={{ background: 'white' }}>
            <img src={props.data.postImage} alt="postImage" className='rounded  w-full h-full object-cover	' />
            <div className='absolute bottom-0 left-0 w-64 h-24 rounded-r-lg  flex flex-col justify-between  mb-4 p-2 px-3' style={{ background: 'white' }}>
                <h3 className='text-base font-semibold text-gray-800'>{props.data.title}</h3>
                <p className='text-xs text-gray-400 truncate h-12 mb-1' style={{ whiteSpace: 'normal' }}>
                    {props.data.content}
                </p>
            </div>
        </div>
    )
}

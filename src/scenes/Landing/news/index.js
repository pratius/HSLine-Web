import React, { useEffect, useState } from 'react';

import Carousel from 'react-grid-carousel'
import { apiGet } from 'services/apiServices';
import BlogPost from 'shared/BlogPost';
import { API_ENDPOINT_COMMON_FETCH_BLOGS } from '../landing.constants';

export default function TradeNews(offset) {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetchNews()
    }, [])
    const fetchNews = async () => {
        const response = await apiGet(API_ENDPOINT_COMMON_FETCH_BLOGS)
        setNews(response.data)
    }


    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className=" mx-auto p-6 md:pt-12 sm:p-16 h-full flex flex-col ">
                    <h5 className='text-center sm:text-left font-xl text-gray-400 tracking-widest mb-2'>
                        TRADE NEWS
                    </h5>
                    <Carousel className='w-full h-72' cols={2} rows={1} gap={50} loop>
                        {
                            news.map((item, i) => {
                                return (
                                    <Carousel.Item className="w-96">
                                        <BlogPost key={i} data={item} />
                                    </Carousel.Item>
                                )
                            })
                        }

                    </Carousel>


                </div>
            </div>
        </div>
    )
}

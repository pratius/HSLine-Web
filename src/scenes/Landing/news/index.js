import React from 'react';

import Carousel from 'react-grid-carousel'
import BlogPost from 'shared/BlogPost';

export default function TradeNews(offset) {
    const blogData = [
        {
            title: "Making Right Trade",
            postImage: "https://t3.ftcdn.net/jpg/02/72/44/04/360_F_272440438_G7E8bDX8gXsvSSZzL7KYvMK8M1nbFB9L.jpg",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "Most Trustable Insights",
            postImage: "https://www.tickertape.in/blog/wp-content/uploads/2022/02/TT-17-Feb-Should-you-quit-job.jpg",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "Start your journey",
            postImage: "https://media.warriortrading.com/2019/09/blog_high_probability_breakout_trades.jpg",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },

        {
            title: "How to start",
            postImage: "https://miro.medium.com/max/1400/1*Hc6hn3Bgl4LBg_DSSi2rZQ.jpeg",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ]

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className=" mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col ">
                    <h5 className='text-center sm:text-left font-xl text-gray-400 tracking-widest mb-2'>
                        TRADE NEWS
                    </h5>
                    <Carousel className='w-full h-72' cols={2} rows={1} gap={50} loop>
                        {
                            blogData.map((item, i) => {
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

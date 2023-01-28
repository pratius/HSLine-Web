import React from 'react';

import { Button } from '@mui/material';

export default function About(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}



            <div className="relative overflow-hidden hero-black" >

                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col ">
                    <img
                        className="w-auto h-auto"
                        src={"https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_23-2149215736.jpg?w=2000&t=st=1674901182~exp=1674901782~hmac=af9c30cf96a9f1486c0ddeca412d1688dc5630d220ce8cec6283ecae4812cf67"}
                        alt="illustration"
                        style={{ height: '20rem' }}

                    />
                    <br />
                    <h1 className="mb-2 tracking-tight leading-8 text-center sm:text-left font-bold text-2xl sm:text-2xl md:text-2xl lg:text-2xl ">
                        GET TO KNOW US
                    </h1>
                    <p className="mb-2 text-xs sm:text-sm md:text-sm text-gray-600 text-center sm:text-left">
                        HSLines Consulting Services is a leading global consulting firm that provides high-quality, cost-effective solutions to businesses and organizations around the world. Founded in 2022, HSLines Consulting Services has grown to become one of the largest and most respected consultancies in the world.
                        The core of our success is our team of highly skilled and experienced professionals who are passionate about helping our clients achieve their desired objectives. Our team consists of experienced consultants from Trade background, who bring a wealth of knowledge and expertise to each project.
                        Our consultants are also backed by a network of industry specialists and advisors to ensure that our clients receive the most comprehensive and highest quality of service.
                        Our team uses a range of methods, including research and analysis, project management, and strategic planning, to help our clients make informed decisions and reach their goals.
                        We also offer specialized services to ensure that our clients receive the most comprehensive and tailored service possible.
                        We take pride in our commitment to our clients and our commitment to delivering the most effective services.
                        We strive to create long-term, mutually beneficial relationships with our clients and to help them achieve their business objectives. We also work closely with our clients to build on their success and to help them grow and reach their full potential.
                    </p>
                    <br />
                    <h1 className="mb-2 tracking-tight leading-8 text-center sm:text-left font-bold text-2xl sm:text-2xl md:text-2xl lg:text-2xl ">
                        ABOUT THE WEBSITE (Platform)
                    </h1>
                    <p className="mb-2 text-xs sm:text-sm md:text-sm text-gray-600 text-center sm:text-left">
                        HSLines is an online global platform, dedicated to providing tailored solutions to the world's most complex international trade challenges.
                        We strive to provide our users with the best service possible. We are committed to delivering quality trade data based on our extensive knowledge and experience in international trade. Our focus is on helping our users make sound decisions and to be competitive in the ever-changing global market.
                        We are obsessed with staying up to date on the latest trends and regulations in international trade law and can provide expert advice on all aspects of international trade, including trade agreements, tariffs, customs regulations, product safety, and more. Our team is prepared to help our users navigate the complex world of international trade through our comprehensive range of services.

                    </p>

                </div>
            </div>
        </div>
    )
}

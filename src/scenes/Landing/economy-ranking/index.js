import React from 'react';

import USA from "assets/images/countries/usa.png"
import Spain from "assets/images/countries/spain.png"
import Brazil from "assets/images/countries/brazil.png"
import Sweden from "assets/images/countries/sweden.png"
import Japan from "assets/images/countries/japan.png"
import Mexico from "assets/images/countries/mexico.png"

export default function EconomyRanking(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col ">
                    <h1 className="mb-2 tracking-tight leading-8 text-center sm:text-left font-bold text-2xl sm:text-2xl md:text-2xl lg:text-2xl ">
                        Economic Complexity Rankings

                    </h1>
                    <p className="mb-2 text-xs sm:text-sm md:text-sm text-gray-600 text-center sm:text-left">
                    As a professional, it is important to be aware of which countries and regions are expected to experience growth in international trade in the future. Our website provides the information you need to make informed decisions about which markets to target. Through careful research and analysis, we can accurately predict which countries and regions are predicted to experience growth in the near future. By taking advantage of this valuable resource, you can ensure your company remains competitive in the global marketplace.
                     </p>
                    <div className='flex flex-row items-center justify-between mt-4'>
                        <div className="flex flex-col items-center cursor-pointer">
                            <img src={USA} alt="countryMap" className='w-72 h-72 object-contain hover:scale-90 duration-300' />
                            <h5 className='text-xl text-gray-800 mt-3'>
                                United States
                            </h5>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer ">
                            <img src={Mexico} alt="countryMap" className='w-72 h-72 object-contain hover:scale-90 duration-300' />
                            <h5 className='text-xl text-gray-800 mt-3'>
                                Mexico
                            </h5>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer">
                            <img src={Japan} alt="countryMap" className='w-72 h-72 object-contain hover:scale-90 duration-300' />
                            <h5 className='text-xl text-gray-800 mt-3'>
                                Japan
                            </h5>
                        </div>
                    </div>

                    <div className='flex flex-row items-center justify-between mt-12 '>
                        <div className="flex flex-col items-center cursor-pointer ">
                            <img src={Sweden} alt="countryMap" className='w-72 h-72 object-contain hover:scale-90 duration-300' />
                            <h5 className='text-xl text-gray-800 mt-3'>
                                Sweden
                            </h5>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer">
                            <img src={Spain} alt="countryMap" className='w-72 h-72 object-contain hover:scale-90 duration-300' />
                            <h5 className='text-xl text-gray-800 mt-3'>
                                Spain
                            </h5>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer">
                            <img src={Brazil} alt="countryMap" className=' w-72 h-72 object-contain hover:scale-90 duration-300' />
                            <h5 className='text-xl text-gray-800 mt-3'>
                                Brazil
                            </h5>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

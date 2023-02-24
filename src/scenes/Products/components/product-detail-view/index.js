import { Button, Chip } from '@mui/material';
import React from 'react';
import LineGraph from 'shared/LineGraph';
import PopMenu from 'shared/PopMenu';
import PriceIndexGeo from './components/market-growth';
import ProductCard from './components/product-card';
import ProductCategory from './components/product-cateogory';


export default function ProductDetail(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <div className='flex flex-row items-center '>
                        <img className='w-14 sm:w-20' src={"https://www.freeiconspng.com/uploads/download-apples-png-image-red-apple-fruit-10.png"} alt=" countryFlag" />
                        <h1 className='ml-3 text-3xl sm:text-5xl font-bold text-gray-800'>Fresh Apple</h1>
                        <div className='ml-8'>
                            <PopMenu label="Global" items={["2020", "EXPORTS"]} />

                        </div>
                    </div>
                    <div className='flex flex-col mt-4 sm:mt-3'>
                        <p className='text-left text-xs sm:text-base  text-gray-600'>
                            In 2020, China was the number 2 economy in the world in terms of GDP (current US$), the number 1 in total exports, the number 2 in total imports, the number 77 economy in terms of GDP per capita (current US$) and the number 28 most complex economy according to the Economic Complexity Index (ECI).
                            <br />In 2020, China was the world's biggest exporter of Broadcasting Equipment ($223B), Computers ($156B), Office Machine Parts ($86.8B), Other Cloth Articles ($60.7B), and Telephones ($51B)
                        </p>

                    </div>
                    <div className='flex flex-wrap sm:flex-row mt-8 '>
                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 mb-4 sm:mb-0'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>TOP EXPORTER</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>Brazil</h1>
                        </div>

                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 mb-4 sm:mb-0'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>TOP IMPORTER</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>USA</h1>
                        </div>

                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 mb-4 sm:mb-0'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>EXPORT VALUE</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>$89B</h1>
                        </div>
                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 mb-4 sm:mb-0'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>IMPORT VALUE</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>$109B</h1>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h4 className='font-semibold text-gray-700 mb-4 sm:mb-0'>News & Insights of Fresh Apple</h4>
                        <div className='flex flex-col sm:flex-row mt-3'>
                            <div className='flex flex-col w-full sm:w-64 cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 justify-between mb-4 sm:mb-0'>
                                <h5 className='text-gray-600 font-semibold text-xs'>LOCAL NEWS</h5>
                                <h1 className='text-gray-800 font-semibold text-sm mt-2'>Wheat quotes in the US and Europe retreated down after 2 days</h1>
                                <h5 className='text-gray-600 font-semibold text-xs mt-3'>Aljazeera - 9 Aug 2023</h5>

                            </div>

                            <div className='flex flex-col w-full sm:w-64 cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 justify-between mb-4 sm:mb-0'>
                                <h5 className='text-gray-600 font-semibold text-xs'>LOCAL NEWS</h5>
                                <h1 className='text-gray-800 font-semibold text-sm mt-2'>Brazil will remain the leader in the apple export </h1>
                                <h5 className='text-gray-600 font-semibold text-xs mt-3'>Aaj Tak - 12 Sep 2023</h5>

                            </div>

                            <div className='flex flex-col w-full sm:w-64 cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 justify-between mb-4 sm:mb-0'>
                                <h5 className='text-gray-600 font-semibold text-xs'>LOCAL NEWS</h5>
                                <h1 className='text-gray-800 font-semibold text-sm mt-2'>Wheat quotes in the US and Europe retreated down after two days of growth</h1>
                                <h5 className='text-gray-600 font-semibold text-xs mt-3'>Aljazeera - 9 Aug 2023</h5>

                            </div>
                            <div className='flex flex-col w-full sm:w-64 cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 justify-between mb-4 sm:mb-0'>
                                <h5 className='text-gray-600 font-semibold text-xs'>LOCAL NEWS</h5>
                                <h1 className='text-gray-800 font-semibold text-sm mt-2'>Wheat quotes in the US and Europe retreated down after 2 days</h1>
                                <h5 className='text-gray-600 font-semibold text-xs mt-3'>CNN - 11 Mar 2023</h5>

                            </div>


                        </div>
                    </div>

                    <PriceIndexGeo />

                    <div className='flex mt-8 h-96 w-full  flex-col'>
                        <div className='flex items-centr'>
                            <h3 className='font-semibold text-lg mb-2'>Top 10 Exporter (2023)
                            </h3>
                            <div className='ml-8'>
                                <PopMenu label="2023" items={["2020", "EXPORTS"]} />
                            </div>
                        </div>
                        <LineGraph />
                    </div>
                    <div className='flex mt-16 h-96 w-full  flex-col'>
                        <div className='flex items-centr'>
                            <h3 className='font-semibold text-lg mb-2'>Top 10 Importer (2023)
                            </h3>
                            <div className='ml-8'>
                                <PopMenu label="2023" items={["2020", "EXPORTS"]} />
                            </div>
                        </div>
                        <LineGraph />
                    </div>




                </div>
            </div>
        </div>
    )
}

import { Button, Chip } from '@mui/material';
import React from 'react';
import PopMenu from 'shared/PopMenu';
import ProductCard from './components/product-card';
import ProductCategory from './components/product-cateogory';


export default function ProductDetail(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <div className='flex flex-row items-center '>
                        <img className='w-20' src={"https://www.freeiconspng.com/uploads/download-apples-png-image-red-apple-fruit-10.png"} alt=" countryFlag" />
                        <h1 className='ml-3 text-5xl font-bold text-gray-800'>Fresh Apple</h1>
                        <div className='ml-8'>
                            <PopMenu label="Global" items={["2020", "EXPORTS"]} />

                        </div>
                    </div>
                    <div className='flex flex-col mt-3'>
                        <p className='text-left  text-gray-600'>
                            In 2020, China was the number 2 economy in the world in terms of GDP (current US$), the number 1 in total exports, the number 2 in total imports, the number 77 economy in terms of GDP per capita (current US$) and the number 28 most complex economy according to the Economic Complexity Index (ECI).
                            <br />In 2020, China was the world's biggest exporter of Broadcasting Equipment ($223B), Computers ($156B), Office Machine Parts ($86.8B), Other Cloth Articles ($60.7B), and Telephones ($51B)
                        </p>

                    </div>
                    <div className='flex flex-row mt-8 '>
                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>TOP EXPORTER</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>Brazil</h1>
                        </div>

                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>TOP IMPORTER</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>USA</h1>
                        </div>

                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>EXPORT VALUE</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>$89B</h1>
                        </div>
                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>IMPORT VALUE</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>$109B</h1>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

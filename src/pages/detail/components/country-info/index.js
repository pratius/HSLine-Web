import React from 'react';


export default function CountryInfo(offset) {

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <div className='flex flex-row items-center '>
                        <img className='w-20' src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png" alt=" countryFlag" />
                        <h1 className='ml-3 text-5xl font-bold text-gray-800'>United States</h1>

                    </div>
                    <div className='flex flex-row mt-8 justify-between'>
                        <div className='flex flex-col items-center'>
                            <h5 className='text-gray-600 font-semibold'>2020</h5>
                            <h3 className='text-gray-800 '>Economic Complexity</h3>
                            <h1 className='text-gray-800 font-bold text-2xl'>0.96</h1>
                            <small className='text-gray-800 font-semibold'>Rank 23 of 108</small>
                        </div>

                        <div className='flex flex-col items-center'>
                            <h5 className='text-gray-600 font-semibold'>2020</h5>
                            <h3 className='text-gray-800 '>Economic Complexity</h3>
                            <h1 className='text-gray-800 font-bold text-2xl'>0.96</h1>
                            <small className='text-gray-800 font-semibold'>Rank 23 of 108</small>
                        </div>

                        <div className='flex flex-col items-center'>
                            <h5 className='text-gray-600 font-semibold'>2020</h5>
                            <h3 className='text-gray-800 '>Economic Complexity</h3>
                            <h1 className='text-gray-800 font-bold text-2xl'>0.96</h1>
                            <small className='text-gray-800 font-semibold'>Rank 23 of 108</small>
                        </div>

                        <div className='flex flex-col items-center'>
                            <h5 className='text-gray-600 font-semibold'>2020</h5>
                            <h3 className='text-gray-800 '>Economic Complexity</h3>
                            <h1 className='text-gray-800 font-bold text-2xl'>0.96</h1>
                            <small className='text-gray-800 font-semibold'>Rank 23 of 108</small>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

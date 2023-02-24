import React from "react"
import Footer from "shared/Footer"
import Header from "shared/Header"
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import LeakAddRoundedIcon from '@mui/icons-material/LeakAddRounded';
export default function Services() {
    return (
        <div className="flex flex-col min-h-screenpt-4 mt-16">

            <Header />

            <div className='relative'>
                <div className="relative overflow-hidden hero-black" >

                    <div className="mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col ">
                        <h1 className="mb-2 tracking-tight leading-8 text-center font-bold text-2xl sm:text-2xl md:text-2xl lg:text-5xl text-gray-800 ">
                            Our Services
                        </h1>
                        <p className="mb-2 text-xs sm:text-sm md:text-base text-gray-700 text-center ">
                            Unveiling the Results of HSLines's Team Research on International Trade: An In-Depth Look at Global Economic Dynamics.
                        </p>
                        <br />

                        <div className="flex flex-row justify-between mt-16">

                            <div className="flex flex-col items-center w-64 h-96  ">
                                <div className="w-24 h-24 card-shadow-light mb-4 rounded flex items-center justify-center">
                                    <SettingsRoundedIcon style={{ fontSize: 46 }} className="text-gray-600" />
                                </div>
                                <h5 className="mb-3 font-semibold text-gray-800 text-lg">Some Service</h5>
                                <p className="text-xs text-gray-600">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>

                            <div className="flex flex-col items-center w-64 h-96  ">
                                <div className="w-24 h-24 card-shadow-light mb-4 rounded flex items-center justify-center">
                                    <MedicalServicesRoundedIcon style={{ fontSize: 46 }} className="text-gray-600" />
                                </div>
                                <h5 className="mb-3 font-semibold text-gray-800 text-lg">Some Service</h5>
                                <p className="text-xs text-gray-600">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>

                            <div className="flex flex-col items-center w-64 h-96  ">
                                <div className="w-24 h-24 card-shadow-light mb-4 rounded flex items-center justify-center">
                                    <LeakAddRoundedIcon style={{ fontSize: 46 }} className="text-gray-600" />
                                </div>
                                <h5 className="mb-3 font-semibold text-gray-800 text-lg">Some Service</h5>
                                <p className="text-xs text-gray-600">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>


                        </div>

                        <div className="flex flex-row justify-between mt-16">

                            <div className="flex flex-col items-center w-64 h-96  ">
                                <div className="w-24 h-24 card-shadow-light mb-4 rounded flex items-center justify-center">
                                    <SettingsRoundedIcon style={{ fontSize: 46 }} className="text-gray-600" />
                                </div>
                                <h5 className="mb-3 font-semibold text-gray-800 text-lg">Some Service</h5>
                                <p className="text-xs text-gray-600">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>

                            <div className="flex flex-col items-center w-64 h-96  ">
                                <div className="w-24 h-24 card-shadow-light mb-4 rounded flex items-center justify-center">
                                    <MedicalServicesRoundedIcon style={{ fontSize: 46 }} className="text-gray-600" />
                                </div>
                                <h5 className="mb-3 font-semibold text-gray-800 text-lg">Some Service</h5>
                                <p className="text-xs text-gray-600">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>

                            <div className="flex flex-col items-center w-64 h-96  ">
                                <div className="w-24 h-24 card-shadow-light mb-4 rounded flex items-center justify-center">
                                    <LeakAddRoundedIcon style={{ fontSize: 46 }} className="text-gray-600" />
                                </div>
                                <h5 className="mb-3 font-semibold text-gray-800 text-lg">Some Service</h5>
                                <p className="text-xs text-gray-600">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

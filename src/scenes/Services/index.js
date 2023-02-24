import React from "react"
import Footer from "shared/Footer"
import Header from "shared/Header"
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import LeakAddRoundedIcon from '@mui/icons-material/LeakAddRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import FolderCopyRoundedIcon from '@mui/icons-material/FolderCopyRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
export default function Services() {
    return (
        <div className="flex flex-col min-h-screenpt-4 mt-16">

            <Header />

            <div className='relative'>
                <div className="relative overflow-hidden hero-black" >

                    <div className="mx-auto p-6 md:pt-12 sm:p-16 h-full flex flex-col ">
                        <div className="flex w-full justify-center">
                            <img src="https://www.pngmart.com/files/22/Illustration-Art-PNG-Isolated-Photos.png" style={{ width: '26rem' }} />
                        </div>
                        <h1 className="mb-2 tracking-tight leading-8 text-center font-bold text-2xl sm:text-2xl md:text-2xl lg:text-5xl text-gray-800 ">
                            Our Services
                        </h1>
                        <p className="mb-2 text-xs sm:text-sm md:text-base text-gray-700 text-center ">
                            Unveiling the Results of HSLines's Team Research on International Trade: An In-Depth Look at Global Economic Dynamics.
                        </p>
                        <br />

                        {/* <div className="flex flex-row justify-between mt-16">
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


                        </div> */}

                        <div className="flex flex-row justify-between mt-16">

                            <div className="flex flex-col items-center w-64 h-96  ">
                                <div className="w-24 h-24 card-shadow-light mb-4 rounded flex items-center justify-center">
                                    <TipsAndUpdatesRoundedIcon style={{ fontSize: 46 }} className="text-gray-600" />
                                </div>
                                <h5 className="mb-3 font-semibold text-gray-800 text-lg">Data collection and processing
                                </h5>
                                <p className="text-xs text-gray-600">
                                    Companies can help organizations collect and process large sets of data from various sources, such as customer surveys, social media, and web analytics.
                                </p>
                            </div>

                            <div className="flex flex-col items-center w-64 h-96  ">
                                <div className="w-24 h-24 card-shadow-light mb-4 rounded flex items-center justify-center">
                                    <FolderCopyRoundedIcon style={{ fontSize: 46 }} className="text-gray-600" />
                                </div>
                                <h5 className="mb-3 font-semibold text-gray-800 text-lg">Data analysis
                                </h5>
                                <p className="text-xs text-gray-600">
                                    Companies can use various analytical techniques, such as statistical analysis and machine learning, to extract insights from data and inform business decisions.


                                </p>
                            </div>

                            <div className="flex flex-col items-center w-64 h-96  ">
                                <div className="w-24 h-24 card-shadow-light mb-4 rounded flex items-center justify-center">
                                    <DashboardCustomizeRoundedIcon style={{ fontSize: 46 }} className="text-gray-600" />
                                </div>
                                <h5 className="mb-3 font-semibold text-gray-800 text-lg">Dashboard and reporting
                                </h5>
                                <p className="text-xs text-gray-600">
                                    Companies can help organizations create customized dashboards and reports that provide real-time visibility into key performance indicators (KPIs) and other important metrics.


                                </p>
                            </div>

                            <div className="flex flex-col items-center w-64 h-96  ">
                                <div className="w-24 h-24 card-shadow-light mb-4 rounded flex items-center justify-center">
                                    <SupportAgentRoundedIcon style={{ fontSize: 46 }} className="text-gray-600" />
                                </div>
                                <h5 className="mb-3 font-semibold text-gray-800 text-lg">Consulting</h5>
                                <p className="text-xs text-gray-600">
                                    Companies can provide expert guidance and advice on data-related issues, such as data governance and privacy compliance.
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

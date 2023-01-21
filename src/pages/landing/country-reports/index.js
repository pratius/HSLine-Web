import CountryImageCard from '@/components/CountryImageCard';
import React from 'react';


export default function CountryReport(offset) {
    const countryData = [
        {
            image: "https://s30876.pcdn.co/wp-content/uploads/United-States-of-America-e1634206443401-1170x630.jpg.optimal.jpg",
            label: "USA"
        },
        {
            image: "https://media.istockphoto.com/id/476653220/photo/ghent.jpg?s=612x612&w=0&k=20&c=a2Adwd1lH4Vd27MB82cMHzb59gBNxQtccX8aFtTdoNg=",
            label: "BEL"
        },
        {
            image: "https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Japan.jpg?h=fcdfd899&itok=eL0Jj4cw",
            label: "JPN"
        },
        {
            image: "https://youthincmag.com/wp-content/uploads/2019/10/Spain-Travel-Tipsy.jpg",
            label: "SPN"
        }
    ]
    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col ">
                    <h1 className="mb-2 tracking-tight leading-8 text-center sm:text-left font-bold text-2xl sm:text-2xl md:text-2xl lg:text-2xl ">
                        Economic Complexity Rankings

                    </h1>

                    <div className='flex flex-row '>
                        {countryData.map((item, key) => {
                            return <CountryImageCard key={key} data={item} />
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

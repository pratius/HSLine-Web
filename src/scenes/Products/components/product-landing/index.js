import React from 'react';
import ProductCard from './components/product-card';
import ProductCategory from './components/product-cateogory';


export default function ProductLanding(offset) {
    const productList = [
        {
            image: "https://img.freepik.com/free-photo/bananas_1339-1187.jpg?w=1380&t=st=1675163662~exp=1675164262~hmac=ca462195560cfc76405d47b5bdf5b30c2c2cbee56fab64eaf393daafe1e1760a",
            name: "Fresh Banana"
        }
        ,
        {
            image: "https://img.freepik.com/premium-photo/white-rice-thai-jasmine-rice-wooden-bowl-white-background_627142-182.jpg?w=1060",
            name: "White Rice"
        },
        {
            image: "https://img.freepik.com/free-photo/fillet-tasty-salmon-close-up_1203-1888.jpg?w=1380&t=st=1675164163~exp=1675164763~hmac=7f33236aab81e4e84209f695743eef5120cfca57fafc2aa02a467eee52d25241",
            name: "Salmon"
        },
        {
            image: "https://img.freepik.com/premium-photo/barbecue-dry-aged-wagyu-porterhouse-steak-grilled-medium-rare-beef-steak-with-spices-served-old-meat-butcher-vertical-image-top-view-place-text_114941-7084.jpg?w=740",
            name: "Wagyu Japanese"
        },
        {
            image: "https://img.freepik.com/free-photo/two-red-apples-isolated-white_114579-73124.jpg?w=1380&t=st=1675164312~exp=1675164912~hmac=fe27eff069f57e91845c2760c949aa7efadb1e32ee4b82479a5d3c41dac00a0c",
            name: "Fresh Apple"
        },

        {
            image: "https://img.freepik.com/premium-photo/coriander-seeds-fresh-coriander-powdered-coriander-isolated-white-surface_136354-6301.jpg?w=1380",
            name: "Coriander India"
        },

        {
            image: "https://img.freepik.com/free-photo/five-spice-ingredient_1339-271.jpg?w=1380&t=st=1675164397~exp=1675164997~hmac=9f4e02f30dcdbf2d94efcc280bcb03a44ba3656971fa5635a542de9af71ccb8c",
            name: "Whole Spice India"
        },
        {
            image: "https://img.freepik.com/premium-photo/olive-oil-saucer-with-leaves-yellow-olives_23-2148349324.jpg?w=1380",
            name: "Italian Olive Oil"
        },
        { "image": "https://img.freepik.com/premium-photo/white-rice-thai-jasmine-rice-wooden-bowl-white-background_627142-182.jpg?w=1060", "name": "White Rice" }, { "image": "https://img.freepik.com/premium-photo/olive-oil-saucer-with-leaves-yellow-olives_23-2148349324.jpg?w=1380", "name": "Italian Olive Oil" }, { "image": "https://img.freepik.com/free-photo/two-red-apples-isolated-white_114579-73124.jpg?w=1380&t=st=1675164312~exp=1675164912~hmac=fe27eff069f57e91845c2760c949aa7efadb1e32ee4b82479a5d3c41dac00a0c", "name": "Fresh Apple" }, { "image": "https://img.freepik.com/free-photo/bananas_1339-1187.jpg?w=1380&t=st=1675163662~exp=1675164262~hmac=ca462195560cfc76405d47b5bdf5b30c2c2cbee56fab64eaf393daafe1e1760a", "name": "Fresh Banana" }, { "image": "https://img.freepik.com/premium-photo/coriander-seeds-fresh-coriander-powdered-coriander-isolated-white-surface_136354-6301.jpg?w=1380", "name": "Coriander India" }, { "image": "https://img.freepik.com/free-photo/fillet-tasty-salmon-close-up_1203-1888.jpg?w=1380&t=st=1675164163~exp=1675164763~hmac=7f33236aab81e4e84209f695743eef5120cfca57fafc2aa02a467eee52d25241", "name": "Salmon" }, { "image": "https://img.freepik.com/free-photo/five-spice-ingredient_1339-271.jpg?w=1380&t=st=1675164397~exp=1675164997~hmac=9f4e02f30dcdbf2d94efcc280bcb03a44ba3656971fa5635a542de9af71ccb8c", "name": "Whole Spice India" }, { "image": "https://img.freepik.com/premium-photo/barbecue-dry-aged-wagyu-porterhouse-steak-grilled-medium-rare-beef-steak-with-spices-served-old-meat-butcher-vertical-image-top-view-place-text_114941-7084.jpg?w=740", "name": "Wagyu Japanese" }



    ]

    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="max-w-screen-xl mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <div className='mb-12'>
                        <h3 className='font-semibold text-large text-gray-800 mb-4'>Category</h3>
                        <ProductCategory />
                    </div>

                    <div className=''>
                        <h3 className='font-semibold text-large text-gray-800 mb-4'>Top Trends</h3>
                        <div className='flex flex-wrap'>
                            {productList.map((product, key) => {
                                return (
                                    <ProductCard data={product} key={key} />
                                )
                            })}
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import { API_ENDPOINT_PRODUCT_FETCH_TOP_TREND_PRODUCTS } from 'scenes/Products/products.constants';
import { apiGet } from 'services/apiServices';
import ProductCard from './components/product-card';
import ProductCategory from './components/product-cateogory';


export default function ProductLanding(offset) {
    const [trendingProducts, setTrendingProducts] = useState([])
    const fetchTopProducts = async () => {
        const response = await apiGet(API_ENDPOINT_PRODUCT_FETCH_TOP_TREND_PRODUCTS)
        setTrendingProducts(response.data)
    }
    useEffect(() => {
        fetchTopProducts()
    }, [])


    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <div className='mb-12'>
                        <h3 className='font-semibold text-large text-gray-800 mb-4'>Hot Categories</h3>
                        <ProductCategory />
                    </div>

                    <div className=''>
                        <h3 className='font-semibold text-large text-gray-800 mb-4'>Trending Products</h3>
                        <div className='flex flex-wrap'>
                            {trendingProducts.map((product, key) => {
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

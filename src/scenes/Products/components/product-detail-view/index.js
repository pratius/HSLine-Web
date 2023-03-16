import { Button, Chip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { API_ENDPOINT_PRODUCT_FETCH_PRODUCT_GIST, API_ENDPOINT_PRODUCT_FETCH_PRODUCT_INFO } from 'scenes/Products/products.constants';
import { apiGet, apiPost } from 'services/apiServices';
import LineGraph from 'shared/LineGraph';
import PopMenu from 'shared/PopMenu';
import { history } from 'Store';
import ImportExports from './components/import-exports';
import PriceIndexGeo from './components/market-growth';
import ProductCard from './components/product-card';
import ProductCategory from './components/product-cateogory';
import moment from "moment"

export default function ProductDetail(props) {
    const productId = props.match.params.productId;
    const [productInfo, setProductInfo] = useState(null)
    const [productGist, setProductGist] = useState(null)
    const [productNews, setProductNews] = useState([])
    const fetchProductInfo = async () => {
        const response = await apiPost(API_ENDPOINT_PRODUCT_FETCH_PRODUCT_INFO, { productId: productId })
        setProductInfo(response.data)
    }

    const fetchProductGist = async () => {
        const response = await apiPost(API_ENDPOINT_PRODUCT_FETCH_PRODUCT_GIST, { productId: productId })
        setProductGist(response.data)
    }
    useEffect(() => {
        if (!productId) history.push("product/category");
        fetchProductInfo()
        fetchProductGist()
    }, [productId])

    useEffect(() => {
        fetchProductNews()

    }, [productInfo])

    const fetchProductNews = async () => {
        const response = await apiGet(`https://api.newscatcherapi.com/v2/search?q=${productInfo.category_name || "trading" + " trading news"}&lang=en&page_size=4`, { 'x-api-key': "4jHMB0vJTj1gOTAkQ3iLgXYl_HjnSnIReZSIVIJSNjg" })
        setProductNews(response.articles)
    }
    return (
        <div className='relative'>
            {/* <img src={backImageLine} className="absolute top-0 left-0 " style={{zIndex:1}}/> */}

            <div className="relative overflow-hidden hero-black" >
                <div className="mx-auto p-6 md:pt-12 sm:p-8 h-full flex flex-col">
                    <div className='flex flex-col sm:flex-row sm:items-center '>
                        <img className='w-32 h-32 sm:w-32 sm:h-32 object-cover' src={productInfo && productInfo.image} alt=" countryFlag" />
                        <h1 className='ml-3 mt-4 text-3xl sm:text-5xl font-bold text-gray-800'>{productInfo && productInfo.product_name}</h1>
                        <div className='ml-8 mt-4'>
                            <PopMenu label="Global" items={["2020", "EXPORTS"]} />

                        </div>
                    </div>
                    <div className='flex flex-col mt-4 sm:mt-3'>
                        <p className='text-left text-xs sm:text-base  text-gray-600'>
                            {productInfo && productInfo.overview}
                        </p>

                    </div>
                    <div className='flex flex-wrap sm:flex-row mt-8 '>
                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 mb-4 sm:mb-0'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>TOP EXPORTER</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>{productGist && productGist.topExporter && productGist.topExporter.Country_name}</h1>
                        </div>

                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 mb-4 sm:mb-0'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>TOP IMPORTER</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>{productGist && productGist.topImporter && productGist.topImporter.Country_name}</h1>
                        </div>

                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 mb-4 sm:mb-0'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>EXPORT VALUE</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>${productGist && productGist.topExporter && productGist.topExporter.total_value}</h1>
                        </div>
                        <div className='flex flex-col  cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 mb-4 sm:mb-0'>
                            <h5 className='text-gray-600 font-semibold text-xs'>2020</h5>
                            <h3 className='text-gray-800 font-semibold text-xs'>IMPORT VALUE</h3>
                            <h1 className='text-gray-800 font-bold text-xl mt-2'>${productGist && productGist.topImporter && productGist.topImporter.total_value}</h1>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h4 className='font-semibold text-gray-700 mb-4 sm:mb-0'>News & Insights of {productInfo && productInfo.category_name}</h4>
                        <div className='flex flex-col sm:flex-row mt-3'>
                            {productNews.filter((_, idx) => (idx < 5)).map((news, key) => {
                                return (
                                    <div key={key} className='flex flex-col w-full sm:w-64 cursor-pointer hover:bg-slate-200 p-3 rounded duration-30 bg-white mr-4 justify-between mb-4 sm:mb-0'>
                                        <h5 className='text-gray-600 font-semibold text-xs'>{news.author}</h5>
                                        <h1 className='text-gray-800 font-semibold text-sm mt-2'>{news.title}</h1>
                                        <h5 className='text-gray-600 font-semibold text-xs mt-3'>{news.rights} - {moment(news.published_date).format("DD MM YYYY")}</h5>

                                    </div>

                                )
                            })}




                        </div>
                    </div>

                    <ImportExports />

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

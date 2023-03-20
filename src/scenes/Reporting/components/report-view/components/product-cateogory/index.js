import React, { useEffect, useState } from 'react';

import Carousel from 'react-grid-carousel'
import { API_ENDPOINT_PRODUCT_FETCH_TOP_CATEGORY } from 'scenes/Products/products.constants';
import { apiGet } from 'services/apiServices';
import ProductBanner from './ProducBanner';

export default function ProductCategory(offset) {
    const [topCategories, setTopCategories] = useState([])

    const fetchTopCategories = async () => {
        const response = await apiGet(API_ENDPOINT_PRODUCT_FETCH_TOP_CATEGORY)
        setTopCategories(response.data)
    }
    useEffect(() => {
        fetchTopCategories()
    }, [])


    return (


        <Carousel className='w-full h-72' cols={3} rows={1} gap={50} loop responsiveLayout={[
            {
                breakpoint: 900,
                cols: 1,
                rows: 1,
                gap: 10,
                loop: true,
            }
        ]}>
            {
                topCategories.map((item, i) => {
                    return (
                        <Carousel.Item className="w-full sm:w-72">
                            <ProductBanner key={i} data={item} />
                        </Carousel.Item>
                    )
                })
            }

        </Carousel>

    )
}

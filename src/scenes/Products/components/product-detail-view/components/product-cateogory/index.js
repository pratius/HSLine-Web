import React from 'react';

import Carousel from 'react-grid-carousel'
import ProductBanner from './ProducBanner';

export default function ProductCategory(offset) {
    const blogData = [
        {
            title: "Fruits",
            postImage: "https://t4.ftcdn.net/jpg/00/78/09/77/360_F_78097722_DS0SKdmNCZLfefL1CP63kSbMzjjjv9Xy.jpg",
            content: "123 products"
        },
        {
            title: "Seafood",
            postImage: "https://img.freepik.com/premium-photo/fresh-fish-seafood-healthy-food-flounder-lobster-squid-tuna-fish_187166-51351.jpg?w=1380",
            content: "98 products"
        },
        {
            title: "Meat",
            postImage: "https://img.freepik.com/free-photo/side-view-red-meat-wooden-tray-garlic-green-ketchup-chopped-pepper-oil-bottle-lemon-dark-background_140725-140931.jpg?w=1380&t=st=1675163315~exp=1675163915~hmac=50a50400eb55e8f2ba627894ce86da4b618a594c26839791f5a4dea43ad16c25",
            content: "79 products"
        },

        {
            title: "Rice & Pulses",
            postImage: "https://img.freepik.com/free-photo/sack-rice-seed-with-white-rice-small-wooden-spoon-rice-plant_1150-35745.jpg?w=1380&t=st=1675163352~exp=1675163952~hmac=96ef9e205419a5f4ff2de4c706aac452ce255aa888c12542aa6176b972476fc3",
            content: "121 products"
        },
        {
            title: "Vegetables",
            postImage: "https://img.freepik.com/free-photo/top-view-fresh-vegetables-with-greens-dark-blue-background-salad-snack-vegetable-food_140725-40264.jpg?w=1380&t=st=1675163427~exp=1675164027~hmac=a73e1be7d13f7e3c6f003cd39d8e4f60639997deb80c9a8f1bf967356341ff34",
            content: "121 products"
        },
        {
            title: "Rice & Pulses",
            postImage: "https://img.freepik.com/free-photo/sack-rice-seed-with-white-rice-small-wooden-spoon-rice-plant_1150-35745.jpg?w=1380&t=st=1675163352~exp=1675163952~hmac=96ef9e205419a5f4ff2de4c706aac452ce255aa888c12542aa6176b972476fc3",
            content: "121 products"
        },
    ]

    return (


        <Carousel className='w-full h-72' cols={3} rows={1} gap={50} loop>
            {
                blogData.map((item, i) => {
                    return (
                        <Carousel.Item className="w-72">
                            <ProductBanner key={i} data={item} />
                        </Carousel.Item>
                    )
                })
            }

        </Carousel>

    )
}

import React from 'react';
import { CardStyle10,CardStyle9 ,CardStyle7,Pagination,SearchForm, CardStyle11} from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img:"./assets/images/about-us/04.png",
                    linkname:  "HTML",
                    time: "September 26, 2019 ",
                    title: "Build Construction",
                    desc: "“They bring to you a host of beautifully created infographics that contain the latest digital marketing ",
                },
                {
                    img:"./assets/images/about-us/04.png",
                    linkname:  "Design",
                    time: "September 26, 2019 ",
                    title: "Life Lack Meaning",
                    desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
                },
                {
                    img:"./assets/images/about-us/04.png",
                    linkname:  "HTML",
                    time: "September 26, 2019 ",
                    title: "Construction industry",
                    desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing",
                },
                {
                    img:"./assets/images/about-us/04.png",
                    linkname:  "CSS",
                    time: "September 26, 2019 ",
                    title: "Content Marketing",
                    desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
                },
               
            ],
            cardData1: [
                {
                    img:  './assets/images/testimonials/3.jpg',
                    name: "Mark McManus",
                    position: "COO",
                    desc: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” ",
                },
                {
                    img:  './assets/images/testimonials/2.jpg',
                    name: "Jack White",
                    position: "CEO",
                    desc: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” ",
                },
                {
                    img:  './assets/images/testimonials/3.jpg',
                    name: "Jack McManus",
                    position: "CTO",
                    desc: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” ",
                }
               
            ],
            categories: [
                    {
                        link: "CSS",
                        count: "2",
                        liClass :"cat-item cat-item-3"
                    },
                    {
                        link: "Design",
                        count: "2",
                        liClass :"cat-item cat-item-2"
                    },
                    {
                        link: "HTML",
                        count: "2",
                        liClass :"cat-item cat-item-4"
                    },
                    {
                        link: "Uncategorized",
                        count: "1",
                        liClass :"cat-item cat-item-1"
                    },
               
            ]
        }
       
    }
    render() {
        const cardData  = this.state.cardData;
        const cards = this.state.cardData1;
        const category =this.state.categories;
        return (
            <>
              <section>
                    <div className="container">
                            <div className="row flex-row-reverse">
                                <div className="col-lg-8 col-sm-12">
                                    <div  className="row ">
                                        { cardData.map((item, index) => ( 
                                            <CardStyle7
                                                key={index}
                                                img={item.img}
                                                linkname={item.linkname}
                                                time={item.time}
                                                desc ={item.desc}
                                                title ={item.title}
                                                mainclass= {"item"}
                                                colClass={"col-md-6 wow fadeInUp"}
                                            />
                                        )) }
                                    </div>
                                   <Pagination />
                                </div>

                                <div className="col-lg-4 col-sm-12 sidebar-service-right mt-5 mt-lg-0">
                                    <SearchForm
                                        className = {"search-form"}
                                    />
                                    <div className="testimonial-widget-menu widget wow fadeInRight">
                                        <div className="owl-carousel" data-dots="true" data-nav="false" data-autoplay="true" data-loop="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="30">
                                            { cards.map((item, index) => ( 
                                                <CardStyle10
                                                    key={index}
                                                    desc={item.desc}
                                                    img ={item.img}
                                                    name ={item.name}
                                                    position={item.position}
                                                    className = {"post-img"}
                                                />
                                            )) }
                                        </div>
                                    </div>
                                    <div className="iq-widget-menu widget wow fadeInRight">
                                          <h2 className="widget-title">Recent Post</h2>
                                            <div className="list-inline iq-widget-menu">
                                                <ul className="iq-post">
                                                    { cardData.map((item, index) => (
                                                            <CardStyle9
                                                                key={index}
                                                                img= {item.img}
                                                                time= {item.time}
                                                                title ={item.title}
                                                            />
                                            
                                                    )) }
                                                </ul>
                                            </div>
                                    </div>

                                    <div id="categories-4" className="widget widget_categories wow fadeInRight">
                                         <h2 className="widget-title"> Categories</h2>
                                            { category.map((item, index) => (
                                                    <CardStyle11
                                                        key={index}
                                                        link={item.link}
                                                        count ={item.count}
                                                        liClass={item.liClass}
                                                        spanClass= {"post_count"}
                                                    />
                                            
                                            )) }
                                     </div>
                                </div>

                            </div>
                            
                    </div>
              </section>
            </>
        );
    }
}

export default Index;
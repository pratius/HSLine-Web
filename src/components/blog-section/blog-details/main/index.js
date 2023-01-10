import React from 'react';
import { CardStyle10,CardStyle9 ,CardStyle7,ReplyForm,SearchForm, CardStyle11} from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                
                {
                    img:"./assets/images/about-us/04.png",
                    linkname:  "Design",
                    time: "September 26, 2019 ",
                    title: "Life Lack Meaning",
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
                            <div className="row">
                                <div className="col-lg-8 col-sm-12">
                                    
                                        { cardData.map((item, index) => ( 
                                            <CardStyle7
                                                key={index}
                                                img={item.img}
                                                linkname={item.linkname}
                                                time={item.time}
                                                desc ={item.desc}
                                                title ={item.title}
                                                mainclass= {"item"}
                                                colClass={"col-md-12 wow fadeInUp"}
                                            >
                                                <blockquote className="quote-style">
                                                    <p>Sed vehicula odio sed velit volutpat aliquet. Sed dignissim enim et venenatis.<br /> &#8211; maxin belly</p>
                                                </blockquote>
                                                <ul>
                                                    <li>Incidunt vitae quae facere</li>
                                                    <li>Lorem ipsum dolor sit amet</li>
                                                    <li>Incidunt vitae quae facere</li>
                                                    <li>Tenetur laborum rutrum</li>
                                                </ul>
                                                <h4 className="mb-2">The rutrum ullamcorper mattis</h4>
                                                <p>Content is an essential aspect of any digital marketing campaign. The Content Marketing Institute offers some of the best advice around in terms of how content can help your brand. From industry trends to best practices, their posts offer helpful advice on how to create the best strategies for your business and how your content marketing should play a role in the &#8220;bigger picture.</p>
                                                <h4 className="mb-2">The stand Lorem Ipsum passage</h4>
                                                <p>Curabitur pulvinar mi in lacinia convallis. Nulla sagittis urna hendrerit metus maximus luctus. Phasellus ac condimentum lacus. Mauris efficitur ultrices augue ut interdum. Aliquam placerat finibus ultrices. Nam pretium fermentum ante, porta luctus eros sodales et. Ut sollicitudin semper elit, vel efficitur justo ultrices quis. Etiam vel tortor rhoncus, malesuada ligula tempus, pulvinar nisi. Cras mi odio, efficitur pharetra lacinia vel, cursus at dolor.</p>
                                                <div className="row ">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-5 mt-3"><img src="./assets/images/about-us/02.png" alt="images" /></div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-5 mt-3"><img src="./assets/images/about-us/03.png" alt="images" /></div>
                                                </div>
                                                <h4 className="mb-2">Pellentesque ultriciesdictum</h4>
                                                <p>Nullam commodo sem id mollis pretium. Duis sed aliquam quam, rutrum placerat massa. Etiam nec hendrerit purus, ut laoreet libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec bibendum cursus mi, in dignissim enim posuere quis. Integer sollicitudin libero quam, id eleifend arcu malesuada vel. Cras justo tortor, mollis eget dapibus in, egestas sed enim. Donec bibendum neque lorem, eget commodo nulla finibus sed. Aliquam erat volutpat. Nullam sed euismod libero, lobortis rutrum urna. Donec et urna tellus.</p>
                                                <h4 className="mb-2">Integer sollicitudin libero quam</h4>
                                                <p className="">This live blog allowed people, who may not have been able to make it to the actual event, stay informed and become a part of the discussion even though they were not in attendance. Their blog lets you interact with various industry leaders, while providing their audience with content that is engaging and educational.</p>
                                            </CardStyle7>
                                        )) }
                                            <ReplyForm />
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
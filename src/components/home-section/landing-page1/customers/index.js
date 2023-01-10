import React from 'react';

import { SectionTitle,Carousel } from '../../../xamin';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData1: [
                {
                    img:  './assets/images/partners/white-1.png',
                   
                },
                {
                    img:  './assets/images/partners/white-2.png',
                    
                },
                {
                    img:  './assets/images/partners/white-3.png',
                    
                },
                {
                    img:  './assets/images/partners/white-4.png',
                    
                },
                {
                    img:  './assets/images/partners/white-1.png',
                    
                },
                {
                    img:  './assets/images/partners/white-2.png',
                    
                },
               
            ],
            cardData2: [
                {
                    img:  './assets/images/partners/white-2.png',
                   
                },
                {
                    img:  './assets/images/partners/white-1.png',
                    
                },
                {
                    img:  './assets/images/partners/white-4.png',
                    
                },
                {
                    img:  './assets/images/partners/white-1.png',
                    
                },
                {
                    img:  './assets/images/partners/white-2.png',
                    
                },
                {
                    img:  './assets/images/partners/white-3.png',
                    
                },
               
            ]
        }

    }

    render() {

        return (
            <>
                <section className="xamin-blue-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 wow fadeInUp">
                                <SectionTitle
                                        link="CUSTOMERS"
                                        title="Discover customer successful stories"
                                        className = "title-box wow fadeInUp text-white text-center"
                                        spanclass="title-design sub-title"
                                />
                                  <div className=" text-center mb-5 pb-4 ">
                                     <a href="clients.html" className="button white-btn button-icon"> <span className="btn-effect"> View Customer Stories</span> </a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-12 wow fadeInUp">
                                <div className="owl-carousel client-logo owl-loaded owl-drag" data-dots="false" data-nav="false" data-items="6" data-items-laptop="4" data-items-tab="3" data-items-mobile="2" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                                        { this.state.cardData1.map((item, index) => (
                                                <Carousel
                                                    key={index}
                                                    img ={item.img}
                                                    imgClass ="img-fluid rounded-circle"
                                                />
                                        )) }
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 offset-lg-2 col-lg-8 wow fadeInUp">
                                <div className="owl-carousel client-logo owl-loaded owl-drag" data-dots="false" data-nav="false" data-items="4" data-items-laptop="4" data-items-tab="3" data-items-mobile="2" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                                { this.state.cardData2.map((item, index) => (
                                                <Carousel
                                                    key={index}
                                                    img ={item.img}
                                                    imgClass ="img-fluid rounded-circle"
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
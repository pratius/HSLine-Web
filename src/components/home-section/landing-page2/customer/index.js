import React from 'react';

import { SectionTitle,SectionStyle3 } from '../../../xamin';

const Carousel1 = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
                <div  key={index} className="item">
                    <div className="clients-box hover-effct">
                        <img alt="#" className="img-fluid client-img" src={card.img} />
                    </div>
                </div>
    ));
};
class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData1: [
                {
                    img:  './assets/images/partners/1.png',
                   
                },
                {
                    img:  './assets/images/partners/2.png',
                    
                },
                {
                    img:  './assets/images/partners/3.png',
                    
                },
                {
                    img:  './assets/images/partners/4.png',
                    
                },
                {
                    img:  './assets/images/partners/1.png',
                    
                },
                {
                    img:  './assets/images/partners/2.png',
                    
                },
               
            ]
        }

    }

    render() {

        return (
            <>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 wow fadeInUp">
                                <SectionTitle
                                        link="TRUSTED"
                                        title="Our Customers Get Results"
                                        className = "title-box wow fadeInUp text-center"
                                        spanclass="title-design text-primary sub-title"
                                />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-12 wow fadeInUp">
                                <div className="owl-carousel client-logo owl-loaded owl-drag" data-dots="false" data-nav="false" data-items="6" data-items-laptop="4" data-items-tab="3" data-items-mobile="2" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                                     <Carousel1 cardList={this.state.cardData1} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 offset-lg-2 col-lg-8 wow fadeInUp">
                                <div className="owl-carousel client-logo owl-loaded owl-drag" data-dots="false" data-nav="false" data-items="4" data-items-laptop="4" data-items-tab="3" data-items-mobile="2" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                                        <Carousel1 cardList={this.state.cardData1} />
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
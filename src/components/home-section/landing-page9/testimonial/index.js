import React from 'react';

import { SectionTitle,SectionStyle3, CardStyle13 } from '../../../xamin';


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {
                    images:  './assets/images/testimonials/3.jpg',
                    name: "Mark McManus",
                    position: "COO",
                    description: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” ",
                },
                {
                    images:  './assets/images/testimonials/2.jpg',
                    name: "Jack White",
                    position: "CEO",
                    description: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” ",
                },
                {
                    images:  './assets/images/testimonials/3.jpg',
                    name: "Jack McManus",
                    position: "CTO",
                    description: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” ",
                }
               
            ]
        }

    }

    render() {
        let { cardData } = this.state;
        return (
            <>
                <SectionStyle3 id="our-service" >
                <div className="row">
                     <div className="col-sm-12 wow fadeInUp">
                        <SectionTitle
                                link="TESTIMONIALS"
                                className = "title-box wow fadeInUp text-center"
                                title="100+ Companies are Using Xamin"
                                spanclass="title-design"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12  wow fadeInUp">
                    <div className="owl-carousel testimonial-style owl-loaded owl-drag" data-dots="true" data-nav="true" data-autoplay="true" data-loop="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="30">
                                {
                                    cardData.map((card, index) => (
                                        <CardStyle13
                                            key={index}
                                            image={card.images}
                                            title={card.name}
                                            subTitle={card.position}
                                            description={card.description}
                                        />
                                    ))
                                }
                            </div>
                    </div>
               </div>

                </SectionStyle3>
            </>
        );
    }

}

export default Index;
import React from 'react';

import { SectionTitle,SectionStyle3 } from '../../../xamin';

const Cards = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
                <div  key={index} className="item text-center">
                    <div className="iq-testimonial">
                            <div className="testimonial-info">
                                <img alt="#" className="img-fluid rounded-circle" src={card.img} />
                                <div className="testimonial-name">
                                    <h5>{card.name}</h5>
                                    <span className="sub-title">{card.position}</span>
                                </div>
                            </div>
                            <p>{card.desc} </p>
                        </div>
                </div>
    ));
};

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [
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
               
            ]
        }

    }

    render() {

        return (
            <>
                <SectionStyle3 id="our-service" >
                <div className="row">
                     <div className="col-sm-12 wow fadeInUp">
                        <SectionTitle
                                link="Testimonials"
                                className = "title-box wow fadeInUp text-center"
                                title="100+ Companies are Using Xamin"
                                spanclass="title-design"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12  wow fadeInUp">
                            <div className="owl-carousel testimonial-style owl-loaded owl-drag" data-dots="true" data-nav="true" data-autoplay="false" data-loop="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="30">
                                    <Cards cardList={this.state.cardData} />
                            </div>
                    </div>
               </div>

                </SectionStyle3>
            </>
        );
    }

}

export default Index;
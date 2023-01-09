import React from 'react';

import {WaveBox, SectionTitle, CardStyle8} from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cards:[
                {
                    image:"./assets/images/services/01.png",
                    title:"Data for all people",
                    description:"There are many variations of passages of Lorem Ipsum available."
                },
                {
                    image:"./assets/images/services/02.png",
                    title:"A new breed of AI",
                    description:"There are many variations of passages of Lorem Ipsum available."
                },
                {
                    image:"./assets/images/services/03.png",
                    title:"Analytics business",
                    description:"There are many variations of passages of Lorem Ipsum available."
                }
            ]
        }
    }

    render() {
        let { cards } = this.state;

        return (
            <>
               <section>
                    <div className="container">
                        <div className="row xamin-bg">
                            <div className="col-sm-12 offset-md-1 offset-lg-1 col-md-10 col-lg-10 wow fadeInUp text-center">
                                <SectionTitle
                                    className="title-box text-center"
                                    spanclass="title-design"
                                    link="our Services"
                                    title="We Provide Useful Services"
                                />
                                <div className="scroll-effect">
                                    <img src="./assets/images/about-us/09.jpg" className="img-fluid img-one" alt="#" />
                                    <div className="main-video">
                                        <div className="video-img">
                                            <WaveBox />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>
                <section className="pt-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            {
                                cards.map((card,index) => (
                                    <div key={index} className="col-lg-4">
                                        <CardStyle8
                                            image={card.image}
                                            title={card.title}
                                            description={card.description}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Index;

import React from 'react';

import { SectionTitle,ProgressBar} from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            progressBar:[
                {
                    title:"Big Data Services",
                    percentage:"70",
                },
                {
                    title:"Data Science Consulting",
                    percentage:"50",
                },
                {
                    title:"Data Analytics Consulting",
                    percentage:"80",
                }
            ]
        };
    }

    render() {
     
        return (
            <>
                <section id="about-works" className="iq-bg-over">
                    <div className="container">
                        <div className="row iq-how-it-works">
                            <div className="col-lg-5 col-md-12 mb-0 fadeInUp wow column   align-items-center">
                                <SectionTitle
                                    link ="How We Work"
                                    title="See Xamin In Action"
                                    subTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact.
                                    "
                                    className = "title-box wow fadeInUp text-left"
                                    spanclass="title-design"
                                />
                                <div className="iq-services-box wow fadeInUp text-left">
                                    {
                                        this.state.progressBar.map((item,index) => (
                                            <ProgressBar
                                                key={index}
                                                className ="services-content wow fadeInUp"
                                                heading={item.title}
                                                percentage={item.percentage}

                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="fadeInUp col-lg-7  col-md-12 ">
                                <img className="single_image-img attachment-full" src="./assets/images/about-us/06.png" alt="drive01" />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Index;

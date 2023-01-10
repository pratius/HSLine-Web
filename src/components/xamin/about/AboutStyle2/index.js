import React from 'react';
import { SectionTitle, ProgressBarStyle2 } from '../../../xamin';

const Index = (props) => {

    return (
        <>
            <section className={props.className}>
                 <div className="container">
                    <div className="row row-fluid row-has-fill iq-how-it-works">
                        <div className="iq-mb-30 fadeInUp wow col-sm-12 col-lg-5 col-md-12 align-items-center">
                          < SectionTitle
                                    link ="About us"
                                    title="Human Behaviour, Data Science"
                                    subTitle="It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.
                                    "
                                    className = "title-box wow fadeInUp text-left"
                                    spanclass="title-design"
                                    />
                            <div className="services-content wow fadeInUp progress-style text-left">
                                    <ProgressBarStyle2
                                        percentage="50"
                                        heading= "Big Data Services"
                                    />
                                     <ProgressBarStyle2
                                        percentage="90"
                                        heading= "Big Data Services"
                                    />
                                     <ProgressBarStyle2
                                        percentage="60"
                                        heading= "Big Data Services"
                                    />
                            </div>
                        </div>
                       {props.children}
                    </div>
                 </div>
            </section>
        </>
    );
};

export default Index;
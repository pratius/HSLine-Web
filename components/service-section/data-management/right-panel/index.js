import React from 'react';
import { BannerStyle1, CheckboxList } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            owlImages:[
                "./assets/images/about-us/03.png",
                "./assets/images/about-us/04.png",
                "./assets/images/about-us/05.png",
            ],
            checklist:[
                'Advance Advisory Team',
                'Professional Consulting Services',
                '24/7 Support Help Center',
                'Customer Service & Operations',
                'There are many variations of passages.'
            ]
        }
    }
    render() {
        let { owlImages, checklist } = this.state;
        return (
            <>
                <div className="row iq-pb-45">
                    <div className="col-sm-12">
                        <div className="row fadeInUp wow">
                            <div className="col-sm-12">
                                <div className="owl-carousel" data-dots="true" data-nav="false" data-items="1"
                                     data-items-laptop="1" data-items-tab="1" data-items-mobile="1"
                                     data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                                    { owlImages.map((item,index) => (
                                        <div key={'dm1-'+index} className="consulting-img  text-left">
                                            <img src={item} alt="slider" />
                                        </div>
                                    )) }
                                </div>
                            </div>
                        </div>
                        <div className="mb-0 fadeInUp wow">
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.
                            </p>
                            <p>
                                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row iq-pb-45">
                    <div className="col-sm-12 col-md-6 fadeInUp wow">
                        <h4 className="mb-4">Advanced Analytics Strategies</h4>
                        <div className="service-chart">
                            <canvas id="data-analytics-pie-chart"></canvas>
                        </div>
                        <ul id="js-legend" className="chart-legend"></ul>
                    </div>
                    <div className="col-sm-12 col-md-6 mt-5 mt-lg-0 mt-md-0 fadeInUp wow">
                        <h4 className="mb-4">Advanced Analytics Strategies</h4>
                        <CheckboxList items={checklist} text={"text-left"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 fadeInUp wow">
                        <h3 className="mb-3">Advanced Analytics Strategies</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden .
                        </p>
                        <h3 className="mb-3">Software Product Development</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden .
                        </p>
                        <div className="row">
                            <div className="col-sm-6 fadeInUp wow">
                                <CheckboxList items={checklist} text="text-left mb-2 mb-lg-0 mb-md-0 "/>
                            </div>
                            <div className="col-sm-6 fadeInUp wow">
                                <CheckboxList items={checklist} text={"text-left"} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;
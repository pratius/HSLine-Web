import React from 'react';
import { BannerStyle1, CheckboxList } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            owlImages:[
                "./assets/images/about-us/04.png",
                "./assets/images/about-us/05.png",
                "./assets/images/about-us/06.png",
            ],
            checklist:[
                'Predictive maintenance',
                'Operational intelligence',
                'Enhanced product quality',
                'customer experience',
                'Sales effectiveness'
            ]
        }
    }
    render() {
        let { owlImages, checklist } = this.state;
        return (
            <>
             <h3 className="text-left mb-2">Our Services</h3>
                    <div className="row">
                        <div className="col-md-6">
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything hidden in the middle of text.</p>
                        </div>
                        <div className="col-md-6">
                           <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p>
                        </div>
                     </div>
                    <div className="row iq-pb-45">
                        <div className="col-sm-12">
                            <div className="owl-carousel" data-dots="true" data-nav="false" data-items="1"
                                data-items-laptop="1" data-items-tab="1" data-items-mobile="1"
                                data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                                { owlImages.map((item,index) => (
                                    <div key={'dsc1-'+index} className="consulting-img  text-left">
                                        <img src={item} alt="slider" />
                                    </div>
                                )) }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                           <h3 className="text-left mb-2">Improved production efficiency</h3>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden .</p>
                        </div>
                     </div>
                     <div className="row iq-pb-45">
                        <div className="col-md-6">
                           <div className="wrapper">
                              <div className="service-chart">
                                 <canvas id="data-science-chart" width="216" height="216"></canvas>
                              </div>
                              <ul id="js-legend" className="chart-legend"></ul>
                           </div>
                        </div>
                        <div className="col-md-6 iq-sm-mt-30">
                           <div className="text-left  ">
                              <ul className="iq-list">
                                 <CheckboxList items={checklist} text={"text-left"} />
                              </ul>
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-sm-12">
                           <h3 className="text-left mb-2">Customer behavior</h3>
                           <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.</p>
                        </div>
                     </div>
            
            </>
        );
    }
}

export default Index;
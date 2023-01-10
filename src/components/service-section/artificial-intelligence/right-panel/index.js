import React from 'react';
import { BannerStyle1, CheckboxList } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            owlImages:[
                "./assets/images/about-us/04.png",
                "./assets/images/about-us/03.png",
            ],
            checklist:[
                'Advance Advisory Team',
                'Professional Consulting Services',
                '24/7 Support Help Center',
                'Customer Service & Operations',
                'There are many variations of passages.'
            ],
            checklist1:[
                'Efficiently manage and govern ongoing operations of analytics processes',
                'Access on-demand data scientists to quickly scale your analytics team',
                'Rapid time to insight',
                'Lower operating cost and business risk'
            ]
        }
    }
    render() {
        let { owlImages, checklist ,checklist1} = this.state;
        return (
            <>
              
                      <div className="row iq-pb-45">
                        <div className="col-sm-12 col-lg-6 col-md-6">
                           <div className="services-finance-img text-center">
                              <img width="400" height="400" src="./assets/images/about-us/05.png" className="attachment-full" alt=""  />
                           </div>
                        </div>
                        <div className="mt-5 mt-lg-0 mt-md-0 col-sm-12 col-lg-6 col-md-6">
                           <h3 className="text-left">Our Services</h3>
                           <div className="mb-3">
                              <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                           </div>
                           <div className="text-left ">
                              <ul className="iq-list">
                                 <CheckboxList items={checklist1} text={"text-left"} />
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-sm-12">
                           <div className="no-margin">
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.</p>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-sm-12">
                           <div className="">
                              <canvas id="artificial-intelligence" ></canvas>
                           </div>
                           <ul id="js-legend" className="chart-legend"></ul>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-sm-12">
                           <h2>Transition</h2>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#8217;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#8217;t anything embarrassing hidden in the middle of text.</p>
                           <div className="row">
                              <div className="col-sm-6">
                                 <div className="text-left mb-2 mb-lg-0 mb-md-0 ">
                                    <ul className="iq-list">
                                        <CheckboxList items={checklist} text={"text-left"} />
                                    </ul>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="text-left">
                                    <ul className="iq-list">
                                        <CheckboxList items={checklist} text={"text-left"} />
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                        
            </>
        );
    }
}

export default Index;
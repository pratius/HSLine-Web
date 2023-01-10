import React from 'react';
import { BannerStyle1, CheckboxList, SectionTitle,PricingCard1 } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            checklist:[
                 'Mobile SDK',
                'Live Chat and ',
                '6000 + Intigrations',
                'Email, Chat and Social',
                'Basic Help Center'
            ],
            priceCard:[
                {
                    price:"29$",
                    heading: "Starter",
                    subheading:"Feedback System",
                },
                {
                    price:"49$",
                    heading: "Growth",
                    subheading:"Feedback System",
                },
                {
                    price:"99$",
                    heading: "Enterprise",
                    subheading:"Feedback System",
                },
            ],
        }
    }
    render() {
        let { checklist ,priceCard} = this.state;
        return (
            <>     
                  <section className="pt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        link ="PRICING"
                                        title="Simple and Transparent Pricing"
                                        className = "title-box wow fadeInUp text-center"
                                        spanclass="title-design"
                                    />
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                { priceCard.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 text-center">
                                        <PricingCard1 
                                             price={item.price}
                                             heading= {item.heading}
                                             subheading={item.subheading}
                                             
                                        >
                                               <ul className="pricing-list">
                                            <li>Live Chat and email</li>
                                            <li>Mobile SDK</li>
                                            <li>6000 + Intigrations</li>
                                            <li className="pricing-features-item disable">
                                                Email, Chat and Social
                                            </li>
                                            <li className="pricing-features-item disable">
                                                Basic Help Center
                                            </li>
                                        </ul>
                                        </PricingCard1>
                                    </div>
                                )) }
                            </div>
                        </div>
                  </section>          
            </>
        );
    }
}

export default Index;
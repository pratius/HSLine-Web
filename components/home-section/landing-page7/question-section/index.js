import React from 'react';
import { BannerStyle1, CheckboxList, SectionTitle,PricingCard1 } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: [
                {
                    title:"How does your pricing work?",
                    text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, It is a long established",
                    class:"iq-active"
                
                },
                {
                    title:"How does your pricing work?",
                    text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, It is a long established",
                    class:" "

                },
                {
                    title:"How does your pricing work?",
                    text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, It is a long established",
                    class:" "
                },
                
         
        ]
        }
    }
    render() {
        let { value} = this.state;
        return (
            <>     
                  <section className="pt-0">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-6 col-md-12">
                                 <SectionTitle
                                        link ="STILL HAVE QUESTIONS?"
                                        title="Relax because we always will be here for you"
                                        className = "title-box wow fadeInUp text-center"
                                        spanclassName="title-design"
                                        img = "./assets/images/fancybox/7-9.png"
                                    />
                              </div>

                              <div className="col-lg-6 col-md-12">
                                  <div className="iq-faq">
                                    { value.map((item, index) => (
                                            <div key ={index} className={"iq-block " + item.class}>
                                                <a  className="iq-title" >{item.title}</a>
                                                <div className="iq-details " >
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        )) }
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
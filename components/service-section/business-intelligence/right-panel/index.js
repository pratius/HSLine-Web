import React from 'react';
import { CardStyle14, CheckboxList } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            owlImages:[
                "./assets/images/about-us/03.png",
                "./assets/images/about-us/04.png",
                "./assets/images/about-us/05.png",
            ],
            cardData:[
              {
                icon :"./assets/images/fancybox/bi-1.png",
                title:"BI Consulting",
                desc :"It is a long established fact that a reader will be distracted"
              },
              {
                icon :"./assets/images/fancybox/bi-2.png",
                title:"BI Implementation",
                desc :"It is a long established fact that a reader will be distracted"
              },
              {
                icon :"./assets/images/fancybox/bi-3.png",
                title:"Data Warehouse",
                desc :"It is a long established fact that a reader will be distracted"
              },
              {
                icon :"./assets/images/fancybox/6-1.png",
                title:"BI Solutions",
                desc :"It is a long established fact that a reader will be distracted"
              },
            ],
            checklist:[
                'Contrary to popular belief, Lorem Ipsum is not simply random text',
                'There are many variations of passages of Lorem Ipsum available',
                'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
                'All the Lorem Ipsum generators on the Internet tend to repeat.',
                'Simply dummy text of the Lorem Ipsum is printing and type setting industry'
            ]
        }
    }
    render() {
        let { cardData, checklist ,owlImages} = this.state;
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
                    <div className="col-md-12">
                        <div className="owl-carousel owl-loaded owl-drag" data-dots="true" data-nav="false" data-items="2" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                        { owlImages.map((item,index) => (
                            <div key={'bi2-'+index} className="consulting-img  text-left">
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

                <div className="row">
                    { cardData.map((item, index) => (
                        <CardStyle14
                            key={'bi1-'+index}
                            image={item.icon}
                            title={item.title} 
                            desc={item.desc} 
                            mainClass={"service-box my-3 wow fadeInUp  text-left"}
                       />       
                    )) }
                   
                </div>

                <div className="row">
                        <div className="col-sm-12">
                           <h3 className="text-left mb-2">Challenges We Solve</h3>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.</p>
                           <div className="text-left  ">
                              <ul className="iq-list">
                                    <CheckboxList text={"text-left"} items={this.state.checklist} />
                              </ul>
                           </div>
                        </div>
                     </div>
            
            </>
        );
    }
}

export default Index;
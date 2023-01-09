import React from 'react';
import { SectionTitle,CardStyle18 } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: [
               {    
                    title:"Google Analytics",
                    text:"There are many variations of passages of Lorem Ipsum available, in",
                    fancy_img :"./assets/images/fancybox/7-5.png"
               },
               {    
                title:"Marketing Tracking",
                text:"There are many variations of passages of Lorem Ipsum available, in",
                fancy_img :"./assets/images/fancybox/7-6.png"
                },
                {    
                    title:"Services and Solutions",
                    text:"There are many variations of passages of Lorem Ipsum available, in",
                    fancy_img :"./assets/images/fancybox/7-7.png"
               },
               {    
                title:"Conversion Optimization",
                text:"There are many variations of passages of Lorem Ipsum available, in",
                fancy_img :"./assets/images/fancybox/7-8.png"
            },

         
        ]
        }
    }
    render() {
        let { value} = this.state;
        return (
            <>     
                  <section>
                      <div className="container">
                          <div className="row">
                              <div className="col-sm-12 wow fadeInUp">
                                <SectionTitle
                                        link ="OUR SERVICES"
                                        title="Marketing Analytics Services"
                                        className = "title-box wow fadeInUp  text-center"
                                        spanclass="title-design"
                                    />
                              </div>

                          </div>

                          <div className="row">
                          { value.map((item, index) => (
                                    <div key ={index} className="col-lg-6 col-md-6 col-sm-12">
                                       <CardStyle18 
                                            title={item.title}
                                            text={item.text}
                                            fancy_img ={item.fancy_img}
                                       />
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
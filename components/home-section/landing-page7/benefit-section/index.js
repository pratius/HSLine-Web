import React from 'react';
import { SectionTitle,CardStyle18 } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: [
               {    
                    title:"Predictive insights",
                    text:"There are many variations of passages of Lorem Ipsum available, in",
                    fancy_img :"./assets/images/fancybox/7-5.png"
               },
               {    
                title:"Smarter Workforce",
                text:"There are many variations of passages of Lorem Ipsum available, in",
                fancy_img :"./assets/images/fancybox/7-6.png"
                },
                {    
                    title:"Proficiency",
                    text:"There are many variations of passages of Lorem Ipsum available, in",
                    fancy_img :"./assets/images/fancybox/7-7.png"
               },
               {    
                title:"Consistent accuracy",
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
                                        link ="BENEFITS"
                                        title="Benefits With Us"
                                        className = "title-box wow fadeInUp text-center"
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
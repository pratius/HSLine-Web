import React from 'react';

import { CardStyle19, SectionTitle} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: [
                {    
                     title:"Predictive insights",
                     text:"There are many variations of passages of Lorem Ipsum available, in",
                     img :"./assets/images/fancybox/7-1.png",
                     mainClass:"right"
                },
                {    
                    title:"Smarter Workforce",
                    text:"There are many variations of passages of Lorem Ipsum available, in",
                    img :"./assets/images/fancybox/7-2.png",
                    mainClass:"right"
                 },
                 {    
                     title:"Proficiency",
                     text:"There are many variations of passages of Lorem Ipsum available, in",
                     img :"./assets/images/fancybox/7-3.png",
                     mainClass:"right"
                },
                {    
                    title:"Consistent accuracy",
                    text:"There are many variations of passages of Lorem Ipsum available, in",
                    img :"./assets/images/fancybox/7-4.png",
                    mainClass:""
             },
         ]
        }
    }

    render() {
        let { value } = this.state;
        return (
            <>
                <section className="xamin-custom-bg">
                
                    <div className="container">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 wow fadeInUp">
                                    <SectionTitle
                                        link ="WORK"
                                        title="How it works"
                                        className = "title-box wow fadeInUp text-center"
                                        spanclass="title-design"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                 { value.map((item, index) => (
                                    <div key ={index} className="col-lg-3 col-md-3 col-sm-12">
                                       <CardStyle19
                                            title={item.title}
                                            text={item.text}
                                            img ={item.img}
                                            mainClass ={item.mainClass}
                                       />
                                    </div>
                                )) }
                            </div>

                        </div>
                    </div>
                    </section>

                

                

              
            </>
        );
    }
}

export default Index;

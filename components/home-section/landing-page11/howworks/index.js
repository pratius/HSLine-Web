import React from 'react';

import { SectionTitle, CardStyle1,BackgroundImage } from '../../../xamin';
import rightJump from "../../../../public/assets/images/26.png";

class Index extends React.Component {
    constructor(props) {
        super(props);
       this.state ={
           items:[
               {
                   media: "./assets/images/services/01.png",
                   title: "Reporting on the pas",
                   text :"it is a long established fact that a reader will be distracted by the of readable",
                   class:"xamin-process xamin-circle right wow fadeInUp  text-center"

               },
               {
                    media: "./assets/images/services/02.png",
                    title: "Predicting future",
                    text :"it is a long established fact that a reader will be distracted by the of readable",
                    class:"xamin-process xamin-circle right wow fadeInUp  text-center"

                },
                {
                    media: "./assets/images/services/03.png",
                    title: "Analyzing the present",
                    text :"it is a long established fact that a reader will be distracted by the of readable",
                    class:"xamin-process xamin-circle  wow fadeInUp  text-center"

                }
           ]
       }
    }

    render() {
        const {items } = this.state;
        return (
            <>
               <section className="xamin-custom-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <SectionTitle
                                    link="PROCESS"
                                    title="What you can do with marketing analytics"
                                    className = "title-box wow fadeInUp text-center"
                                    spanclass="title-design"
                                />
                            </div>
                        </div>
                            <div className="row">
                                {
                                    items.map((item,index) => (
                                        <div key={index}  className="col-md-4 col-sm-6">
                                            <div className={item.class}>
                                                <BackgroundImage
                                                    className="right-jump-bg"
                                                    bgImage={rightJump}
                                                />
                                                <CardStyle1
                                                    media={item.media}
                                                    title ={item.title}
                                                    text= {item.text}
                                                    imgClass="circle-effect"
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                </section>
              
            </>
        );
    }
}

export default Index;

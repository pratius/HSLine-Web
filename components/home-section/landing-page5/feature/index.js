import React from 'react';

import { SectionTitle,PartnerCardStyle } from '../../../xamin';




class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {
                    img:  './assets/images/services/01.png',
                    heading:"Embeded",
                    text:"It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."
                   
                },
                {
                    img:  './assets/images/services/02.png',
                    heading:"Embeded",
                    text:"It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."
                    
                },
                {
                    img:  './assets/images/services/03.png',
                    heading:"Embeded",
                    text:"It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."
                },
               
              
            ],
            cardData1: [
                {
                    img:  './assets/images/services/04.png',
                    heading:"MashUp",
                    text:"It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."
                   
                },
                {
                    img:  './assets/images/services/05.png',
                    heading:"Impact",
                    text:"It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."
                    
                },
                {
                    img:  './assets/images/services/06.png',
                    heading:"Control",
                    text:"It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."
                },
               
              
            ],
           
        }

    }

    render() {
        const list =this.state.cardData;
      
        return (
            <>  
                <section className="iq-bg-over">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <SectionTitle
                                    className={"title-box wow fadeInUp text-center"}
                                    spanclass={"title-design"}
                                    link={"FEATURES"}
                                    title={"Everything You Need  to Build Powerful Analytic Apps"}
                                />
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                { list.map((item, index) => (
                                    <PartnerCardStyle 
                                    key={index}
                                        img ={item.img}
                                        heading ={item.heading}
                                        text ={item.text}
                                        mainClass="xamin-analytics text-left"
                                        imgClass="analytics-icon"
                                        detailClass="analytics-detail"
                                        key={index}
                                      
                                    />
                            )) }
                            </div>

                            <div className="col-md-6">
                                { this.state.cardData1.map((item, index) => (
                                    <PartnerCardStyle 
                                    key={index+1}
                                        img ={item.img}
                                        heading ={item.heading}
                                        text ={item.text}
                                        mainClass="xamin-analytics text-left"
                                        imgClass="analytics-icon"
                                        detailClass="analytics-detail"
                                        key={'list-'+index}
                                    />
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
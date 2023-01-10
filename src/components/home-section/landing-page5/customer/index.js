import React from 'react';

import { SectionTitle,PartnerCardStyle } from '../../../xamin';




class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {
                    img:  './assets/images/partners/1.png',
                    heading:"Onduo by Google",
                    text:"Defined brand style guide and created narrative illustrations."
                   
                },
                {
                    img:  './assets/images/partners/3.png',
                    heading:"Titan Eye Plus",
                    text:"Defined brand style guide and created narrative illustrations."
                    
                },
                {
                    img:  './assets/images/partners/4.png',
                    heading:"DHL",
                    text:"Defined brand style guide and created narrative illustrations."
                },
                {
                    img:  './assets/images/partners/2.png',
                    heading:"Cake Browser",
                    text:"Defined brand style guide and created narrative illustrations."
                    
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
                                    link={"PARTNER"}
                                    title={"A trusted, proven leader."}
                                />
                            </div>

                        </div>
                        <div className="row">
                         { list.map((item, index) => (
                            <div key={index} className="col-md-3">
                                <PartnerCardStyle 
                                    img ={item.img}
                                    heading ={item.heading}
                                    text ={item.text}
                                    mainClass="xamin-client text-center"
                                    imgClass="client-icon"
                                    detailClass ="client-detail"
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
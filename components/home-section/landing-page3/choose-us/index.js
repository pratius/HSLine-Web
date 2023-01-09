import React from 'react';

import { SectionTitle, CardStyle4 } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
       this.state ={
           cards :[
               {
                   image:"./assets/images/services/01.png",
                   title:"Perfect Event",
                   description:"big data through robust that solutions the power."
               },
               {
                   image:"./assets/images/services/02.png",
                   title:"Organization",
                   description:"big data through robust that solutions the power."
               },
               {
                   image:"./assets/images/services/03.png",
                   title:"Innovation",
                   description:"big data through robust that solutions the power."
               },
               {
                   image:"./assets/images/services/04.png",
                   title:"Perfect Event",
                   description:"big data through robust that solutions the power."
               },
           ]
       }
    }

    render() {
        const { cards } = this.state;

        return (
            <>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 pr-3">
                                <SectionTitle
                                    className="title-box wow fadeInUp mb-0 text-center text-lg-left border-right "
                                    spanclass="title-design"
                                    link="Why Choose Us"
                                    title={(<>Why Choose <br className="d-none d-lg-block" />People Xamin</>)}
                                />
                            </div>
                            <div className="col-lg-8 align-self-center">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            {
                                cards.map((item,index) => (
                                    <div key={index} className="col-lg-3 col-sm-12">
                                        <CardStyle4
                                            textClass="center"
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                        />
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

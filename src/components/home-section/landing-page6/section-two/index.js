import React from 'react';
import Link from "next/link";

import { CardStyle3 } from '../../../xamin';



class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img:"./assets/images/fancybox/4.png",
                    value:"455",
                    text:"Managed Analytics as a global business"
                },
                {
                    img:"./assets/images/fancybox/3.png",
                    value:"32",
                    text:" Data Management in the telecoms"
                },
                {
                    img:"./assets/images/fancybox/2.png",
                    value:"1254",
                    text:"Managed Analytics in business"
                },
                {
                    img:"./assets/images/fancybox/1.png",
                    value:"563",
                    text:"Project complete in timeline."
                },
               
            ]
        }
    }

    render() {
        const list = this.state.cardData;
        return (
            <>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            { list.map((item, index) => (
                                <div key={index} className="col-lg-3 col-md-3 col-sm-6">
                                    <CardStyle3 
                                        mainClass="iq-timer style3 text-left"
                                        img={item.img}
                                    >
                                    <span className="timer dark-text" data-to={item.value} data-speed="5000">{item.value}</span>
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                    <p className="dark-text">{item.text}</p>
                                    </CardStyle3>
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
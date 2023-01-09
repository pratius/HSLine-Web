import React from 'react';

import { CardStyle3} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           cardData:[
                {
                    img:"./assets/images/facybox/5-1.png",
                    value:50,
                    heading:"Tranding Volumn"
                },
                {
                    img:"./assets/images/facybox/5-2.png",
                    value:50,
                    heading:"Tranding Volumn"
                },

                {
                    img:"./assets/images/facybox/5-3.png",
                    value:50,
                    heading:"Tranding Volumn"
                },
                {
                    img:"./assets/images/facybox/5-4.png",
                    value:50,
                    heading:"Tranding Volumn"
                },
           ],
            checkList:[
                "Social Sharing",
                "Boost SEO ranking",
                "Marketing",
                "Retention",
                "Visual Reviews",
                "Reviews Generation"
            ],
        }
    }

    render() {
        let { cardData,checkList } = this.state;
        return (
            <>
                <section className="pt-0">
                  <div className="container">
                      <div className="row">
                      { cardData.map((item, index) => (
                              <div key={index} className="col-md-3 col-sm-6">
                                    <CardStyle3
                                        img ={item.img}
                                        value={item.value}
                                        heading={item.heading}
                                        mainClass="iq-timer style2 mb-5  mb-md-0 mb-lg-0   text-center"
                                    >
                                    <span className="timer dark-timer" data-to="50" data-speed="2000">{item.value}</span>
                                    <span className="timer_postfix dark-timer">M+</span><i className="fa fa-percent" aria-hidden="true"></i>
                                    <p className="dark-timer">{item.heading}</p>
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

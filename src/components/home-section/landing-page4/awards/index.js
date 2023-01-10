import React from 'react';

import { SectionTitle,SectionStyle3 } from '../../../xamin';

const Cards = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
        <div key={index}  className="col-md-3">
            <div className="xamin-award wow fadeInUp  text-center">
                <div className="award-img"> <img src={card.img}/> </div>
                <h5 className="mt-3">{card.desc}</h5>
             </div>
        </div>
           
    ));
};

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {
                    img:  './assets/images/awards/1.png',
                    desc: "Microsoft Partner of the Year Award",
                },
                {
                    img:  './assets/images/awards/2.png',
                    desc: "Global Sourcing Awards 2018 Finalist",
                },
                {
                    img:  './assets/images/awards/4.png',
                    desc: "Gold Winner of 2013 Horizon Awards",
                },  
                {
                    img:  './assets/images/awards/3.png',
                    desc: "European Software Testing Awards Finalist",
                },
                {
                    img:  './assets/images/awards/5.png',
                    desc: "Microsoft Partner of the Year Award",
                },
                {
                    img:  './assets/images/awards/3.png',
                    desc: "Global Sourcing Awards 2018 Finalist",
                },
                {
                    img:  './assets/images/awards/2.png',
                    desc: "Gold Winner of 2013 Horizon Awards",
                }
               
            ]
        }

    }

    render() {

        return (
            <>
                <SectionStyle3 >
                <div className="row">
                     <div className="col-sm-12 wow fadeInUp">
                        <SectionTitle
                                link="AWARDS"
                                className = "title-box wow fadeInUp text-center"
                                title="Awards & Accreditations"
                                subTitle="It is a long established fact that a reader will be distracted by the readable"
                                spanclass="title-design"
                        />
                    </div>
                </div>
                <div className="row wow fadeInUp justify-content-center">
                        <Cards cardList={this.state.cardData} />
               </div>

                </SectionStyle3>
            </>
        );
    }

}

export default Index;
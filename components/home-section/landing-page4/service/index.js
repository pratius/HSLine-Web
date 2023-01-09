import React from 'react';

import { SectionTitle, BackgroundImage, WaveBox} from '../../../xamin';

const Cards = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
        <div key={index}  className="iq-timer style1text-left float-left    text-left">
            <div className="timer-details">
                    <span className="timer" data-to={card.value} data-speed="5000">{card.value}</span>
                    <i className={card.icon} aria-hidden="true" style={{color: "#c0bbb7"}}></i>
                    <p> {card.text}.</p>
             </div>
        </div>
           
    ));
};

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            checkList:[
                'Advance Advisory Team',
                'Professional Consulting Services',
                '24/7 Support Help Center',
                'Customer Service &amp; Operations'
            ],
            cardData:[
                {
                    value :50,
                    icon:"fa fa-plus",
                    text:"customer Buildwe love to developed as you think for business"
                },
                {
                    value :10,
                    icon:"fa fa-percent",
                    text:"customer Satisfaction we believe as you believe in your business"
                }
            ],
        }
    }

    render() {
        let { checkList } = this.state;
        return (
            <>
                     <BackgroundImage
                        className="bg-img"
                        bgImage="./assets/images/bg_home4.jpg"
                    >
                <section className="bg-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6   wow fadeInUp align-self-center">
                                <div className="iq-video-relative">
                                    <div className="scroll-effect">
                                        <div className="main-video">
                                            <div className="video-img">
                                                <WaveBox />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                 <SectionTitle
                                   className="title-box wow fadeInUp text-white  text-left"
                                   spanclass="title-design"
                                   title="Transform Your Business Faster Using Data Science and Analysis"
                                   subTitle ="we keep on working till to make customer satisfaction"
                                />
                                <Cards cardList={this.state.cardData} />
                            </div>
                        </div>
                    </div>
                </section>
                    </BackgroundImage>
            </>
        );
    }
}

export default Index;

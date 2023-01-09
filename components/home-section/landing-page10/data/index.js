import React from 'react';
import bg_image from '../../../../public/assets/images/bg/xamin-d10-06.png';
import { BackgroundImage } from '../../../xamin';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img:"fa fa-database",
                    title: "Infographics",
                    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img:"fa fa-database",
                    title: "Social media visuals",
                    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img:"fa fa-database",
                    title: "Dashboards",
                    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img:"fa fa-database",
                    title: "Maps",
                    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
            ]
        }
    }

    render() {
        const cardData  = this.state.cardData;
        return (
            <>
                <section className="pt-0">
                    <BackgroundImage
                        className="vc_custom_1576062736855"
                        bgImage={bg_image}
                    >
                        <div className="container">
                            <div className="row pl-3 pl-md-0 pr-3 pr-md-0 pb-lg-0 ">
                                <div className="col-md-6">
                                    <h2 className="text-white text-left vc_custom_heading pl-lg-5">The simple way to make your data dazzle</h2>
                                    <div className="text-white mt-3 pl-lg-5">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted many desktop.</p>
                                    </div>
                                    <div className="iq-get-data-left">
                                        <img src="./assets/images/visual/03.png" className="floating-image-left" width="951" height="587" />
                                    </div>
                                </div>
                                <div className="col-md-6 pr-5">
                                    {
                                        cardData.map((card,index)=>(
                                            <div key={index} className="fancybox-visualization-service wow fadeInUp  text-left">
                                                <div className="icon-bg">
                                                    <i aria-hidden="true" className={"text-white bg-dark-blue "+card.img}></i>
                                                </div>
                                                <div className="service-detail align-self-center">
                                                    <h5 className="mb-2 text-white">{card.title}</h5>
                                                    <p className="text-white">{card.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </BackgroundImage>
                </section>
            </>
        );
    }

}

export default Index;
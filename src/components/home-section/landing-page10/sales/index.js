import React from 'react';
import { SectionTitle } from '../../../xamin';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img:"fa fa-database",
                    title: "Data Visualization Practices to Improve",
                    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    img:"fa fa-database",
                    title: "Data Visualization Practices to Improve",
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
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 pr-lg-5">
                                <SectionTitle
                                    className="title-box wow fadeInUp  text-left"
                                    title="Get tips & tricks on how to skyrocket your sales."
                                    subTitle="Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!"
                                />
                                {
                                    cardData.map((card,index)=> (
                                        <div key={'sales-'+index} className="fancybox-visualization-service wow fadeInUp  text-left">
                                            <div className="icon-bg">
                                                <i aria-hidden="true" className={card.img}></i>
                                            </div>
                                            <div className="service-detail align-self-center">
                                                <h5 className="mb-2 text-primary">{card.title}</h5>
                                                <p>{card.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-md-6">
                                <div className="iq-get-data-right">
                                    <img src="./assets/images/visual/02.png" width="766" height="525"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

}

export default Index;
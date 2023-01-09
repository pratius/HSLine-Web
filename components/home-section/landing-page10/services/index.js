import React from 'react';
import { CardStyle4 } from '../../../xamin';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img:"fa fa-calendar",
                    title: "Data Visualization",
                    description:'Established fact that a reader will be distracted readable looking layout.'
                },
                {
                    img:"fa fa-bar-chart",
                    title: "Organization",
                    description:'Reader will be distracted by the readable content when looking.'
                },
                {
                    img:"fa fa-trophy",
                    title: "Innovation",
                    description:'Distracted by the readable content of a page when layout.'
                },
                {
                    img:"fa fa-etsy",
                    title: "Perfect Event",
                    description:'Fact that a reader will be distracted page when looking at its layout.'
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
                            {
                                cardData.map((card,index) => (
                                    <div key={index} className="col-md-3 col-sm-6">
                                        <CardStyle4
                                            textClass="left"
                                            icon={card.img}
                                            title={card.title}
                                            description={card.description}
                                            titleTag={"h5"}
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
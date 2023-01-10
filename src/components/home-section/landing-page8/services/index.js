import React from 'react';

import { SectionTitle,CardStyle15 } from '../../../xamin';


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {
                    images:  "./assets/images/services/02.png",
                    name: "Big Data Consulting",
                    description: "Many variation established fact reader will be distracted by the of readable content . ",
                },
                {
                    images:  "./assets/images/services/03.png",
                    name: "Machine Learning",
                    description: "Many variation established fact reader will be distracted by the of readable content . ",
                },
                {
                    images:  "./assets/images/services/04.png",
                    name: "Computer Vision",
                    description: "Many variation established fact reader will be distracted by the of readable content . ",
                },
                {
                    images:  "./assets/images/services/04.png",
                    name: "Data Analytics",
                    description: "Established fact that a reader will be distracted by passages the of readable content . ",
                },
                {
                    images:  "./assets/images/services/02.png",
                    name: "Internet Of Things",
                    description: "It is a long established fact that a reader will be distracted by the of readable content . ",
                },
                {
                    images:  "./assets/images/services/04.png",
                    name: " Artificial Intelligence",
                    description: "Contrary to established fact that a reader will be distracted by the of readable content . ",
                },
               
            ]
        }

    }

    render() {
        let { cardData } = this.state;
        return (
            <>
              <section className="pt-0">
                  <div className="container">

                
                <div className="row">
                     <div className="col-sm-12 wow fadeInUp">
                        <SectionTitle
                                link="OUR SERVICES"
                                className = "title-box wow fadeInUp text-center"
                                title="Chosen Usage Examples"
                                spanclass="title-design"
                        />
                    </div>
                </div>
                <div className="row">
                   
                            {
                                cardData.map((card, index) => (
                                    <CardStyle15
                                        key={index}
                                        images={card.images}
                                        name={card.name}
                                        description={card.description}
                                        className= {"servicebox-userbehavior wow fadeInUp  text-left"}
                                    />
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
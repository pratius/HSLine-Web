import React from 'react';
import { SectionLeftImage, CardStyle8 } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cards:[
                {
                    image:"./assets/images/services/01.png",
                    title:"Perfect Event",
                    description:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter."
                },
                {
                    image:"./assets/images/services/02.png",
                    title:"Organization",
                    description:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter."
                }
            ]
        }
    }
    render() {
        let { cards } = this.state;
        return (
            <>
                <SectionLeftImage
                    image="./assets/images/about-us/01.png"
                    mainTitle={"About Xamin"}
                    mainSubTitle={"Why Choose People Xamin"}
                >
                    {
                        cards.map((card,index) => (
                            <CardStyle8
                                image={card.image}
                                title={card.title}
                                description={card.description}
                            />
                        ))
                    }
                </SectionLeftImage>
            </>
        );
    }
}

export default Index;
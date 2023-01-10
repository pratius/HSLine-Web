import React from 'react';

import { AboutStyle, SectionTitle, CheckboxList, CardStyle17} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cardData:[
                {
                    img:"./assets/images/services/10.png",
                    text:"It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the",
                    title:"Individual Analys",
                },
                {
                    img:"./assets/images/services/11.png",
                    text:"It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the",
                    title:"Individual Analys",
                },
                {
                    img:"./assets/images/services/12.png",
                    text:"It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the",
                    title:"Individual Analys",
                },
            ]
        }
    }

    render() {
        let { cardData } = this.state;
        return (
            <>
                <section>
                    <div className="container">
                        <div className="row">
                        { cardData.map((item, index) => (
                              <div key={index} className="col-lg-4 col-md-4 col-sm-6 wow fadeInUp align-items-center">
                                    <CardStyle17 media={item.media}
                                        img ={item.img}
                                        text={item.text}
                                        title={item.title}
                                    />
                                   
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

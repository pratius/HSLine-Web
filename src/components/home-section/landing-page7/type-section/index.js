import React from 'react';
import { SectionTitle,CardStyle18, CheckboxList } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            list: [
             {
                 img:"./assets/images/services/03.png",
                 title:"Fine-grained Analysis",
                 text:"All types of consulting service It is a long established fact ."
             },
             {
                img:"./assets/images/services/15.png",
                title:"Emotion detection",
                text:"All types of consulting service It is a long established fact ."
            },
            {
                img:"./assets/images/services/03.png",
                title:"Multilingual analysis",
                text:"All types of consulting service It is a long established fact ."
            },
         
        ],
        items:[
            'Positive',
            'Neutral',
            'Negative',
        ],
        }
    }
    render() {
        let { list, items} = this.state;
        return (
            <>     
            <section className="xamin-custom-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <SectionTitle
                                    title="Types of Sentiment Analysis"
                                    subTitle ="It is a long established fact that a reader will be distracted by the<br>
                                    readable content of a page when "
                                    className = "title-box wow fadeInUp  text-left"
                                    spanclass="title-design"
                            />
                        </div>
                        { list.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-3 col-sm-12">
                                <div className="service-box style2 wow fadeInUp  text-left">
                                <img className="fancy-list-img" src={item.img} alt="fancy-list" />
                                    <div className="service-detail align-self-center">
                                        <h5 className="mb-2">{item.title}</h5>
                                        <p>{item.text}</p>
                                        <CheckboxList  text={"text-left"} items={items} />
                                    </div>
                                </div>
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
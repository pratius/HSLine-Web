import React from 'react';

import { CardStyle2, SectionTitle, CheckboxList} from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    media: './assets/images/services/01.png',
                    title: 'Data Analytics',
                    description: 'It is a long established fact that a reader will be distracted by the of readable content .'
                },
                {
                    media: './assets/images/services/02.png',
                    title: 'Managed Analytics',
                    description: 'It is a long established fact that a reader will be distracted by the of readable content .'
                },
                {
                    media: './assets/images/services/03.png',
                    title: 'Big Data Services',
                    description: 'It is a long established fact that a reader will be distracted by the of readable content .'
                },
                {
                    media: './assets/images/services/04.png',
                    title: 'Data Science',
                    description: 'It is a long established fact that a reader will be distracted by the of readable content .'
                },
                {
                    media: './assets/images/services/05.png',
                    title: 'Business Intelligence',
                    description: 'It is a long established fact that a reader will be distracted by the of readable content .'
                },
                {
                    media: './assets/images/services/06.png',
                    title: 'Data Visualization',
                    description: 'It is a long established fact that a reader will be distracted by the of readable content .'
                }
            ],
            checkList:[
                'Advance Advisory Team',
                'Professional Consulting Services',
                'Advance Advisory Team',
            ]
        }
    }

    render() {
        const { list,checkList } = this.state;
        return (
            <>
               <section className="aboutus-two-service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle 
                                    link="our Services"
                                    title="We Provide Useful Services"
                                    className ="title-box wow fadeInUp text-center"
                                    spanclass="title-design"
                                />
                            </div>
                        </div>
                        <div className="row">
                            { list.map((item, index) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <CardStyle2 media={item.media} >
                                            <h4 className="mb-2">{item.title}</h4>
                                            <p> {item.description} </p>
                                            <CheckboxList text={"text-left"} items={checkList} />
                                    </CardStyle2>
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

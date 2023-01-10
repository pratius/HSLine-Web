import React from 'react';
import { CardStyle8, CheckboxList, SectionTitle } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cards:[
                {
                    image:"./assets/images/services/01.png",
                    title:'Data Analytics',
                    description:'It is a long established fact that a reader will be distracted by the of readable content.',
                    checklist:[
                        'Advance Advisory Team',
                        'Professional Consulting Services',
                        'Advance Advisory Team'
                    ]
                },
                {
                    image:"./assets/images/services/02.png",
                    title:'Managed Analytics',
                    description:'It is a long established fact that a reader will be distracted by the of readable content.',
                    checklist:[
                        'Advance Advisory Team',
                        'Professional Consulting Services',
                        'Advance Advisory Team'
                    ]
                },
                {
                    image:"./assets/images/services/03.png",
                    title:'Big Data Services',
                    description:'It is a long established fact that a reader will be distracted by the of readable content.',
                    checklist:[
                        'Advance Advisory Team',
                        'Professional Consulting Services',
                        'Advance Advisory Team'
                    ]
                },
                {
                    image:"./assets/images/services/01.png",
                    title:'Data Science',
                    description:'It is a long established fact that a reader will be distracted by the of readable content.',
                    checklist:[
                        'Advance Advisory Team',
                        'Professional Consulting Services',
                        'Advance Advisory Team'
                    ]
                },
                {
                    image:"./assets/images/services/02.png",
                    title:'Business Intelligence',
                    description:'It is a long established fact that a reader will be distracted by the of readable content.',
                    checklist:[
                        'Advance Advisory Team',
                        'Professional Consulting Services',
                        'Advance Advisory Team'
                    ]
                },
                {
                    image:"./assets/images/services/03.png",
                    title:'Data Visualization',
                    description:'It is a long established fact that a reader will be distracted by the of readable content.',
                    checklist:[
                        'Advance Advisory Team',
                        'Professional Consulting Services',
                        'Advance Advisory Team'
                    ]
                },
            ]
        }
    }
    render() {
        let { cards } = this.state;
        return (
            <>
               <section>
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-12">
                               <SectionTitle
                                   className="title-box text-center"
                                   spanclass="title-design"
                                   link="our Services"
                                   title="We Provide Useful Services"
                               />
                           </div>
                           {
                               cards.map((item,index) => (
                                   <div key={'s1'+index} className={"col-lg-4 col-md-6"}>
                                       <CardStyle8
                                           image={item.image}
                                           title={item.title}
                                           description={item.description}
                                           className="text-left"
                                       >
                                            <CheckboxList text="text-center text-md-left" items={item.checklist} />
                                       </CardStyle8>
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
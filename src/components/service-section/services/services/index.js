import React from 'react';
import { CardStyle6, CheckboxList } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cards:[
                {
                    image:"./assets/images/services/01.png",
                    title:'Big Data Consulting',
                    description:'All your big data through robust solutions that empower data collection, storage, processing and analysis.',
                    checklist:[
                        'Advance Advisory Team',
                        'Professional Consulting Services',
                        'Advance Advisory Team'
                    ]
                },
                {
                    image:"./assets/images/services/02.png",
                    title:'Big Data Consulting',
                    description:'All your big data through robust solutions that empower data collection, storage, processing and analysis.',
                    checklist:[
                        'Advance Advisory Team',
                        'Professional Consulting Services',
                        'Advance Advisory Team'
                    ]
                },
                {
                    image:"./assets/images/services/03.png",
                    title:'Big Data Consulting',
                    description:'All your big data through robust solutions that empower data collection, storage, processing and analysis.',
                    checklist:[
                        'Advance Advisory Team',
                        'Professional Consulting Services',
                        'Advance Advisory Team'
                    ]
                },
                {
                    image:"./assets/images/services/01.png",
                    title:'Big Data Consulting',
                    description:'All your big data through robust solutions that empower data collection, storage, processing and analysis.',
                    checklist:[
                        'Advance Advisory Team',
                        'Professional Consulting Services',
                        'Advance Advisory Team'
                    ]
                },
                {
                    image:"./assets/images/services/02.png",
                    title:'Big Data Consulting',
                    description:'All your big data through robust solutions that empower data collection, storage, processing and analysis.',
                    checklist:[
                        'Advance Advisory Team',
                        'Professional Consulting Services',
                        'Advance Advisory Team'
                    ]
                },
                {
                    image:"./assets/images/services/03.png",
                    title:'Big Data Consulting',
                    description:'All your big data through robust solutions that empower data collection, storage, processing and analysis.',
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
               <section className="pb-0">
                   <div className="container">
                       <div className="row">
                           {
                               cards.map((item,index) => (
                                   <div className={"col-lg-4 col-md-6"}>
                                       <CardStyle6
                                           image={item.image}
                                           title={item.title}
                                           description={item.description}
                                       >
                                            <div className="text-left">
                                                <CheckboxList items={item.checklist} />
                                            </div>
                                       </CardStyle6>
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
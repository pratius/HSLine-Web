import React from 'react';

import { Accordion,CheckboxList} from '../../xamin';


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    title:  "Finance advisor-2 Posts",
                    subtitle:"Job Descriptions",
                    subtitle2:"Qualifications",
                    
                },
                {
                    title:  "Marketing Manager-1 Posts",
                    subtitle:"Job Descriptions",
                    subtitle2:"Qualifications",
                   
                },
                {
                    title:  "Health and Medical Expert -1 Posts",
                    subtitle:"Job Descriptions",
                    subtitle2:"Qualifications",
                   
                },
                
               
            ],
            checklist: [
                "Advance Advisory Team",
                "Professional Consulting Services",
                "24/7 Support Help Center",
                "Customer Service &amp; Operations",
                
            ]
        }
    }
    render() {
        return (
            <>
                <section>
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <div className="iq-accordion career-style">
                                { this.state.cardData.map((item, index) => (
                                            <Accordion
                                                key={index}
                                                title ={item.title}
                                                subtitle ={item.subtitle}
                                                subtitle2 = {item.subtitle2}
                                            >
                                            <CheckboxList items={this.state.checklist} />
                                            </Accordion>
                                )) }
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

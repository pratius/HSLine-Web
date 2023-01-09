import React from 'react';

import { SectionRightImage, CheckboxList, CardStyle4 } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
       this.state ={
           items:[
               'Advance Advisory Team',
               'Professional Consulting Services',
               '24/7 Support Help Center',
               'Customer Service &amp; Operations'
           ],
           cards :[
               {
                   title:"Data for all people",
                   description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
               },
               {
                   title:"A new breed of AI",
                   description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
               },
               {
                   title:"Analytics business",
                   description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
               },
           ]
       }
    }

    render() {
        const {items,cards } = this.state;

        return (
            <>
                <SectionRightImage
                    title={"About Us"}
                    subTitle={"Human Behaviour, Data Science"}
                    description={"It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."}
                    image={"./assets/images/about-us/06.png"}
                >
                    <CheckboxList
                        text={"text-left"}
                        items={items} />
                </SectionRightImage>
                <section  className="pt-0">
                    <div className="container">
                        <div className="row">
                            { cards.map((item,index) => (
                                <div key={'i1-'+index} className="col-lg-4 col-sm-12">
                                    <CardStyle4
                                        textClass="left"
                                        title={item.title}
                                        description={item.description}
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

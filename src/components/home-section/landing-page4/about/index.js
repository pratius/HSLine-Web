import React from 'react';

import { SectionTitle, CheckboxList} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            checkList:[
                'Advance Advisory Team',
                'Professional Consulting Services',
                '24/7 Support Help Center',
                'Customer Service &amp; Operations'
            ]
        }
    }

    render() {
        let { checkList } = this.state;
        return (
            <>
                <section>
                    <div className="container">
                        <div className="row">
                           <div  className="col-lg-6 wow fadeInUp align-items-center">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp text-left"}
                                    spanclass={"title-design"}
                                    link={"About us"}
                                    title={"Human Behaviour, Data Science"}
                                    subTitle ={"It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."}
                                />
                                  <CheckboxList text={"text-left"} items={checkList} />
                                  <div className=" text-left mt-5 ">
                                    <a className="button button-icon" href="#"> <span className="btn-effect"> Read More</span> </a>
                                 </div>
                           </div>
                            <div className="col-lg-6  wow fadeInUp ">
                                 <img  src="./assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />
                            </div>
                        </div>
                        <div className="row mt-5">
                             <div className="col-lg-6  wow fadeInUp ">
                                 <img  src="./assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />
                            </div>
                            <div  className="col-lg-6 wow fadeInUp align-items-center">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp text-left"}
                                    spanclass={"title-design"}
                                    link={"About us"}
                                    title={"Focused on Actionable Insights"}
                                    subTitle ={"It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."}
                                />
                                  <CheckboxList text={"text-left"} items={checkList} />
                                  <div className=" text-left mt-5 ">
                                    <a className="button button-icon" href="#"> <span className="btn-effect"> Read More</span> </a>
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

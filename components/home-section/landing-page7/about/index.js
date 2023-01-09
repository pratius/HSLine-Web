import React from 'react';

import { AboutStyle, SectionTitle, CheckboxList} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            checkList:[
                'Polarity: if the speaker express a positive or negative opinion,',
                'Subject: the thing that is being talked about',
                'Opinion holder: the person, or entity that expresses the opinion.',
            ]
        }
    }

    render() {
        let { checkList } = this.state;
        return (
            <>
                <section className="position-relative">
                
                     <img src ="./assets/images/about-us/06.png" className="about-box-img" />
                    <div className="container">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-6"> </div>
                                <div className="col-lg-6 wow fadeInUp align-items-center">
                                    <SectionTitle
                                        link ="About us"
                                        title="What is Sentiment Analysis?"
                                        subTitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
                                        className = "title-box wow fadeInUp text-left"
                                        spanclass="title-design"
                                    />
                                     <CheckboxList text={"text-left"} items={checkList} />
                                     <div className=" text-left mt-5 ">
                                          <a className="button button-icon" href="about-us.html"> <span className="btn-effect"> View Details</span> </a>
                                    </div>
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

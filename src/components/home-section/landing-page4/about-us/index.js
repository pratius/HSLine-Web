import React from 'react';
import Link from "next/link";

import { SectionStyle1, SectionTitle, CheckboxList} from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            checklist: [
                "Advance Advisory Team",
                "Professional Consulting Services",
                "24/7 Support Help Center",
                "Customer Service &amp; Operations",
            ]
        };
    }

    render() {
     
        return (
            <>
                    <section className="position-relative overflow-hidden">
                         <img src="./assets/images/about-us/11.png" className="about-right-box-img" alt="" />
                         <div className="container">
    
                        <div className="row">
                            <div className="col-lg-6 wow fadeInUp align-items-center">
                                <SectionTitle
                                    className={"title-box wow fadeInUp text-left"}
                                    spanclass={"title-design"}
                                    link={"LETS GET STARTED"}
                                    title={"Are you ready for a better, more productive business?"}
                                    subTitle={"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}
                                />
                                <div className=" text-left mt-5 ">
                                    <a className="button button-icon" href="about-us.html"> <span className="btn-effect"> Get Started Project</span> </a>
                                </div>
                            </div>
                            <div className="col-lg-6"> </div>
                        </div>
                    </div>
                    </section>   
            </>
        );
    }
}

export default Index;

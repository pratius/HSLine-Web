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
                <SectionStyle1 rowReverse={true}>
                    <img className="about-box-img" src="./assets/images/about-us/02.png"  alt="drive01" />
                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-6 wow fadeInUp align-items-center">
                        <div  className="title-box wow fadeInUp text-left">
                                <SectionTitle
                                    link ="About us"
                                    title="Focused on Actionable Insights"
                                    subTitle="It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."
                                    className = "title-box wow fadeInUp text-left"
                                    spanclass="title-design"
                                    />
                        </div>
                        
                        <CheckboxList text={"text-left"} items={this.state.checklist} />

                        <div className=" text-left mt-5 ">
                            <Link href="/about-us-1">
                                <a className="button button-icon" > <span className="btn-effect"> Read More</span> </a>
                            </Link>
                        </div>
                    </div>
                </SectionStyle1>     
            </>
        );
    }
}

export default Index;

import React from 'react';
import Link from "next/link";
import { SectionTitle } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section className="position-relative overflow-hidden pt-0">
                    <img src="./assets/images/about-us/08.png" className="about-right-box-img" alt="" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 wow fadeInUp align-items-center">
                                    <SectionTitle
                                        className="title-box wow fadeInUp text-left"
                                        link="LETS GET STARTED"
                                        spanclass="title-design"
                                        title="Are you ready for a better, more productive business?"
                                        subTitle="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                    />
                                    <div className=" text-left mt-5 ">
                                        <Link  href="/about-us-1">
                                        <a className="button button-icon">
                                            <span className="btn-effect"> Read More</span> </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6"></div>
                            </div>
                        </div>
                </section>
            </>
        );
    }
}

export default Index;

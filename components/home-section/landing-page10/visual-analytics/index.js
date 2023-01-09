import React from 'react';
import {SectionTitle} from "../../../xamin";

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section className="pt-0">
                    <div className="container">
                        <div className="row row-eq-height">
                            <div className="col-lg-4 pr-3">
                                <SectionTitle
                                    className="title-box wow fadeInUp mb-0 text-center text-lg-left border-right "
                                    spanclass="title-design"
                                    title="Unleash the Power of Visual Analytics"
                                />
                            </div>
                            <div className="col-lg-8 align-self-center">
                                <p>There are many variations of passages fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.The readable content of a page when looking Lorem Ipsum at its layout</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

}

export default Index;
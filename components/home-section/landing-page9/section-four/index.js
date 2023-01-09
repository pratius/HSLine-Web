import React from 'react';

import {  SectionTitle, AdressSection} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[
                {
                    heading:"Data Science with Python",
                    text:"Many variations of passages fact that a reader will be distracted content of a page when looking at its layout"
                },
                {
                    heading:"Machine Learning",
                    text:"Contrary to popular established fact that a reader will be distracted by the readable content of a page when looking."
                },
                {
                    heading:"Data Science Capstone",
                    text:"Many variations of passages fact that a reader will be distracted content of a page when looking at its layout.."
                },
            ]
        }
    }

    render() {
        let list = this.state.data;
        return (
            <>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                        { list.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-4 col-sm-12">
                                <div className="servicebox-datascience wow fadeInUp  text-left">
                                    <div className="service-box-detail">
                                        <h2 className="data-title">{item.heading}</h2>
                                        <p>{item.text}</p>
                                        <a className="link-btn" href="#">
                                            <span className="btn-effect"> Read more <i className="fa fa-angle-right"></i></span>
                                        </a>
                                    </div>
                                </div>
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

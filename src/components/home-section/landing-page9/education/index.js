import React from 'react';

import {  SectionTitle, AdressSection} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[
                {
                    heading:"B.S Computer Science",
                    text:"University of Altoona",
                    span:"2007-2010",
                    subtitle:"GPA",
                    point:"4.50/5.00",
                    img:"./assets/images/fancybox/9-1.png"
                },
                {
                    heading:"M.S Computer Application",
                    text:"University of Data Science Altoona",
                    span:"2006-2007",
                    subtitle:"GPA",
                    point:"3.50/4.0",
                    img:"./assets/images/fancybox/9-1.png"
                },
                {
                    heading:"BSc in Mathematics and Statistics",
                    text:"University of Data Science Altoona",
                    span:"2006-2007",
                    subtitle:"GPA",
                    point:"3.50/4.0",
                    img:"./assets/images/fancybox/9-1.png"
                },
                {
                    heading:"B.S Computer Science",
                    text:"University of Altoona",
                    span:"2006-2007",
                    subtitle:"GPA",
                    point:"4.50/4.0",
                    img:"./assets/images/fancybox/9-1.png"
                },
                {
                    heading:"M.S Computer Application",
                    text:"University of Data Science Altoona",
                    span:"2006-2007",
                    subtitle:"GPA",
                    point:"3.50/4.0",
                    img:"./assets/images/fancybox/9-1.png"
                },
                {
                    heading:"BSc in Mathematics and Statistics",
                    text:"University of Data Altoona",
                    span:"2006-2007",
                    subtitle:"GPA",
                    point:"3.50/4.0",
                    img:"./assets/images/fancybox/9-1.png"
                },
                {
                    heading:"B.S Computer Science",
                    text:"University of Altoona",
                    span:"2006-2007",
                    subtitle:"GPA",
                    point:"4.50/4.0",
                    img:"./assets/images/fancybox/9-1.png"
                },
            ]
        }
    }

    render() {
        const list=this.state.data;
        return (
            <>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <SectionTitle
                                    className={"title-box wow fadeInUp text-center"}
                                    spanclass={"title-design"}
                                    title={"Education"}
                                   
                                />
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="data-science">
                                    <div className="owl-carousel testimonial-style owl-loaded owl-drag" data-dots="false" data-nav="false" data-autoplay="false" data-loop="true" data-items="2" data-items-laptop="2" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" >
                                    { list.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="iq-boxslider-detail">
                                            <div className="boxslider-content">
                                             <div className="box-detail">
                                                    <img className="arrow-img" src={item.img} />
                                                    <h5 className="title">{item.heading}</h5>
                                                    <p>{this.props.text}</p>
                                                    <span className="fa fa-calendar"></span><a href="#">{item.span}</a>
                                            </div>
                                            </div>
                                            <div className="box-gpa">
                                                <h6>{item.subtitle}</h6>
                                                <span>{item.point}</span>
                                            </div>
                                        </div>
                                    </div>
                                )) }

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

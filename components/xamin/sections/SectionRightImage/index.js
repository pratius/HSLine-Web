import React from 'react';

const Index = (props) => {

    return (
        <>
            <section id="how-it-works" className={props.class}>
                <div className="container">
                    <div className="row iq-how-it-works">
                        <div className="col-lg-6 col-md-12 mb-0 fadeInUp wow align-items-center">
                            <div className="title-box wow fadeInUp text-left">
                                <span className="title-design">{props.title}</span>
                                <h2>{props.subTitle}</h2>
                                <p>{props.description}</p>
                            </div>
                            {props.children}
                        </div>
                        <div className="fadeInUp col-lg-6  col-md-12  ">
                            <img width="1260" height="954" src={props.image} className="single_image-img attachment-full" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
import React from 'react';
import {SectionTitle} from "../../index";

const Index = (props) => {

    return (
        <>
            <section className={props.sectionClass}>
                <div className="container">
                    <div className="row ">
                        {props.mainTitle || props.mainSubTitle ||props.mainDescription ? (<div className="col-sm-12">
                                <SectionTitle
                                    className={"title-box wow fadeInUp text-center"}
                                    spanclass={"title-design"}
                                    link={props.mainTitle}
                                    title={props.mainSubTitle}
                                    subTitle={props.mainDescription}
                                />
                            </div>) : ''
                        }
                        <div className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow">
                            <img alt=""
                                 className="single_image-img attachment-full"
                                 height="954"
                                 src={props.image}
                                 width="1260" />
                        </div>
                        <div className="iq-mb-30 fadeInUp col-sm-12 col-lg-6 col-md-6 wow align-items-center">
                            {props.title || props.subTitle ||props.description ? (<div className="title-box wow fadeInUp text-left">
                                    <span className="title-design">{props.title}</span>
                                    <h2>{props.subTitle}</h2>
                                    <p>{props.description}</p>
                                </div>) : ''
                            }
                            {props.children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
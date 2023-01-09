import React from 'react';
import $ from 'jquery';

import Link from "next/link";
import { SectionTitle, CheckboxList } from '../../../xamin'

const tabActive = (id) => {
    $('.tab-content').find('.active').removeClass('active');
    $('.nav-item').find('.active1').removeClass('active1');
    $('#' + id).addClass('active');
};

const List = (props) => {
    const listItems = props.tabs;
    const list = listItems.map((item, index) => (
        <li key={index} className="nav-item">
            <span className="line"></span>
            <a
                id={item.id}
                className={ item.active ? "nav-link show active " : "nav-link"}
                data-toggle="pill"
                href={'#' + item.href}
                role="tab"
                aria-controls={item.href}
                onClick={() => { tabActive(item.href) }}
            >
                <img src={item.img} alt="tab-image" className="img-fluid" />
                <h6 className="tab-title">{item.title}</h6>
                <span className="dot"></span>
            </a>
        </li>
    ));

    return (
        <>
            <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
                { list }
            </ul>
        </>
    );
};


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    img:  "./assets/images/usage/5.png",
                    title:"Collect Data",
                    href: 'tab-collect-data',
                    active: true,
                   
                },
                {
                    img:  "./assets/images/usage/4.png",
                    title:"IdentifyTrends",
                    href: 'tab-identifytrends',
                    active: false,
                   
                },
                {
                    img:  "./assets/images/usage/3.png",
                    title:"Understand",
                    href: 'tab-understand',
                    active: false,
                   
                },
                {
                    img:  "./assets/images/usage/2.png",
                    title:"Goals &amp; Hypotheses",
                    href: 'tab-goals-hypotheses',
                    active: false,
                   
                },
                {
                    img:  "./assets/images/usage/1.png",
                    title:"Take Action",
                    href: 'tab-take-action',
                    active: false,
                   
                },
            ],
            tabcollectdata_checkList:[
                "Boost Seo ranking",
                "Marketing",
                "Social Sharing",
            ],
            image:[
                "./assets/images/about-us/13.png"
            ]
           
        }

    }

    render() {
        const { tabs,image } = this.state;
        return (
            <>
               <section className="pt-0">
                 <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                                <SectionTitle
                                        link="WHERE TO USE"
                                        title="Chosen Usage Examples"
                                        className = "title-box wow fadeInUp  text-center"
                                        spanclass="title-design"
                                />
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="custom-tab-userbehavior text-left mt-md-5">
                                    <List tabs={tabs} />
                                    <div className="tab-content">
                                            <div id="tab-collect-data" className="tab-pane fade active show">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <SectionTitle 
                                                            link="01"
                                                            title="Collect Accurate Data"
                                                            className = "title-box wow fadeInUp text-left"
                                                            spanclass="title-design"
                                                            subTitle ="Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!"

                                                        />
                                                        <div className="text-left">
                                                            <ul>
                                                                 <CheckboxList text={"text-left"} items={this.state.tabcollectdata_checkList} />
                                                            </ul>
                                                        </div>
                                                        <div className=" text-left mt-5 ">
                                                              <a className="button button-icon" href="#"><span className="btn-effect"> View Details</span></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mt-5 mt-md-0">         
                                                        <img width="562" height="532" src= "./assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            <div id="tab-identifytrends" className="tab-pane fade">
                                                <div className="row">
                                                     <div className="col-md-6">         
                                                        <img width="562" height="532" src= "./assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <SectionTitle 
                                                            link="02"
                                                            title="Collect Accurate Data"
                                                            className = "title-box wow fadeInUp text-left"
                                                            spanclass="title-design"
                                                            subTitle ="Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!"

                                                        />
                                                        <div className="text-left">
                                                            <ul>
                                                                 <CheckboxList text={"text-left"} items={this.state.tabcollectdata_checkList} />
                                                            </ul>
                                                        </div>
                                                        <div className=" text-left mt-5 ">
                                                              <a className="button button-icon" href="#"><span className="btn-effect"> View Details</span></a>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                            <div id="tab-understand" className="tab-pane fade">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <SectionTitle 
                                                            link="03"
                                                            title="Collect Accurate Data"
                                                            className = "title-box wow fadeInUp text-left"
                                                            spanclass="title-design"
                                                            subTitle ="Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!"

                                                        />
                                                        <div className="text-left">
                                                            <ul>
                                                                 <CheckboxList text={"text-left"} items={this.state.tabcollectdata_checkList} />
                                                            </ul>
                                                        </div>
                                                        <div className=" text-left mt-5 ">
                                                              <a className="button button-icon" href="#"><span className="btn-effect"> View Details</span></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mt-5 mt-md-0">         
                                                        <img width="562" height="532" src= "./assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="tab-goals-hypotheses" className="tab-pane fade">
                                                <div className="row">
                                                        <div className="col-md-6">         
                                                            <img width="562" height="532" src="./assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <SectionTitle 
                                                                link="04"
                                                                title="Collect Accurate Data"
                                                                className = "title-box wow fadeInUp text-left"
                                                                spanclass="title-design"
                                                                subTitle ="Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!"

                                                            />
                                                            <div className="text-left">
                                                                <ul>
                                                                    <CheckboxList text={"text-left"} items={this.state.tabcollectdata_checkList} />
                                                                </ul>
                                                            </div>
                                                            <div className=" text-left mt-5 ">
                                                                <a className="button button-icon" href="#"><span className="btn-effect"> View Details</span></a>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                            </div>

                                            <div id="tab-take-action" className="tab-pane fade">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <SectionTitle 
                                                            link="05"
                                                            title="Collect Accurate Data"
                                                            className = "title-box wow fadeInUp text-left"
                                                            spanclass="title-design"
                                                            subTitle ="Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!"

                                                        />
                                                        <div className="text-left">
                                                            <ul>
                                                                 <CheckboxList text={"text-left"} items={this.state.tabcollectdata_checkList} />
                                                            </ul>
                                                        </div>
                                                        <div className=" text-left mt-5 ">
                                                              <a className="button button-icon" href="#"><span className="btn-effect"> View Details</span></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mt-5 mt-md-0">         
                                                        <img width="562" height="532" src= "./assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </>
        );
    }

}

export default Index;
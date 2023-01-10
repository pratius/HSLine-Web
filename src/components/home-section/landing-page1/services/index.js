import React from 'react';
import $ from 'jquery';
import Link from "next/link";
import { SectionTitle, CheckboxList } from '../../../xamin';

const tabActive = (id) => {
    $('.tab-content').find('.active').removeClass('active');
    $('.nav-item').find('.active1').removeClass('active1');
    $('#' + id).addClass('active');
};

const List = (props) => {
    const listItems = props.tabs;
    const list = listItems.map((item, index) => (
        <li key={index} className="nav-item">
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
                <h5 className="tab-title">{item.title}</h5>
            </a>
        </li>
    ));

    return (
        <>
            <ul className="nav nav-pills mb-5 text-center" id="pills-tab" role="tablist">
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
                        id: 'big-data',
                        href: 'tab-big-data',
                        title: 'Big Data',
                        active: true,
                        img: './assets/images/services/03.png'
                    },
                    {
                        id: 'machine-learning',
                        href: 'tab-machine-learning',
                        title: 'Machine Learning',
                        active: false,
                        img: './assets/images/services/02.png'
                    },
                    {
                        id: 'analytical-ai',
                        href: 'tab-analytical-ai',
                        title: 'Analytical AI',
                        active: false,
                        img: './assets/images/services/01.png'
                    },
                    {
                        id: 'computer-vision',
                        href: 'tab-computer-vision',
                        title: 'Computer Vision',
                        active: false,
                        img: './assets/images/services/04.png'
                    },
                
                ],
                checklist:[
                    "Advance Advisory Team",
                    "Simply dummy text of the",
                    "Simply dummy text of the",
                    "Advance Advisory Team",
                ],
            checklist1:[
                 [
                     "Advance Advisory Team",
                     "Simply dummy text of the",
                 ],
                [
                    "Professional Consulting Services",
                    "It is a long established fact.",
                ],
                [
                    "24/7 Support Help Center",
                    "will be distracted by the of readable",
                ]
            ]
            }
    }

    render() {
        const { tabs,checklist,checklist1 } = this.state;
        return (
            <>
                <section className="pt-0" id="service">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 wow fadeInUp">
                                    <SectionTitle 
                                          link="our Services"
                                          title="Explore Our Data Services"
                                          className = "title-box wow fadeInUp text-center"
                                          spanclass="title-design"
                                    />
                                    <div className="custom-tab">
                                        <List tabs={tabs} />
                                        <div className="show_content">
                                            <div id="tab-big-data" className="tab-pane fade active show">
                                                <div className="row pl-lg-5 pr-lg-5">
                                                    <div className="col-sm-12">
                                                        <h4 className="custom_heading mb-2">Choose Your Software Development Service by Category </h4>
                                                        <div className="text-left mb-3">
                                                            <p>Tame your big data through robust solutions that empower data collection, storage, processing and analysis.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row pl-lg-5 pr-lg-5">
                                                    {
                                                        checklist1.map((items,index) => (
                                                            <div key={index} className="col-sm-4">
                                                                <CheckboxList items={items} text={"text-left"} />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className="row pl-lg-5 pr-lg-5">
                                                    <div className="col-sm-12">
                                                        <div className=" text-left mt-4 ">
                                                            <Link href="/services">
                                                                <a className="button button-icon" ><span className="btn-effect"> View all Services</span></a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tab-machine-learning" className="tab-pane fade">
                                                <div className="row pl-lg-5 pr-lg-5">
                                                    <div className="col-sm-6">
                                                        <h4 className="custom_heading mb-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h4>
                                                        <div className="text-left no-margin">
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. </p>
                                                        </div>
                                                        <div className=" text-left mt-4 mb-lg-0 mb-md-0 mb-4 ">
                                                            <Link href="/services">
                                                                <a className="button button-icon" ><span className="btn-effect"> Read More</span></a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h4 className="custom_heading mb-3">Dignissimos ducimus qui blanditiis</h4>
                                                        <CheckboxList items={checklist} text={"text-left"} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tab-analytical-ai" className="tab-pane fade">
                                                <div className="row pl-lg-5 pr-lg-5">
                                                    <div className="col-sm-12">
                                                        <h4 className="custom_heading mb-2">Choose Your Software Development Service by Category </h4>
                                                        <div className="text-left mb-3">
                                                            <p>Tame your big data through robust solutions that empower data collection, storage, processing and analysis.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row pl-lg-5 pr-lg-5">
                                                    {
                                                        checklist1.map((items,index) => (
                                                            <div key={index} className="col-sm-4">
                                                                <CheckboxList items={items} text={"text-left"} />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className="row pl-lg-5 pr-lg-5">
                                                    <div className="col-sm-12">
                                                        <div className=" text-left mt-4 ">
                                                            <Link href="/services"><a className="button button-icon" ><span className="btn-effect"> View all Services</span></a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tab-computer-vision" className="tab-pane fade">
                                                <div className="row pl-lg-5 pr-lg-5">
                                                    <div className="col-sm-6">
                                                        <h4 className="custom_heading mb-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h4>
                                                        <div className="text-left no-margin">
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. </p>
                                                        </div>
                                                        <div className=" text-left mt-4 mb-lg-0 mb-md-0 mb-4 "> <a className="button button-icon" href="/services"><span className="btn-effect"> Read More</span></a></div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h4 className="custom_heading mb-3">Dignissimos ducimus qui blanditiis</h4>
                                                        <CheckboxList items={checklist} text={"text-left"} />
                                                    </div>
                                                </div>
                                            </div>
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
import React from 'react';
import $ from 'jquery';


import { SectionTitle } from '../../../xamin';


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
                aria-selected="true"
                onClick={() => { tabActive(item.href) }}
            >
                <div className="media">
                    <img src={item.img} alt="tab-image" className="img-fluid" />
                    <div className="media-body">
                        <h5 className="mb-2 active-title">{item.title}</h5>
                        <p className="mb-0">{item.text}</p>
                    </div>
                </div>
               
            </a>
        </li>
    ));

    return (
        <>
            <ul  className="nav nav-pills nav-pills-style-3 mb-5" id="myTab" role="tablist" aria-orientation="vertical">
                { list }
            </ul>
        </>
    );
};

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    id: 'software-development',
                    href: 'tab-software-development',
                    active: true,
                    title:"Software Development",
                    img:"./assets/images/services/6-1.png",
                    text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                },
                {
                    id: 'application-services',
                    href: 'tab-application-services',
                    active: false,
                    title:"Application Services",
                    img:"./assets/images/services/6-2.png",
                    text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

                },
                {
                    id: 'data-analytics',
                    href: 'tab-data-analytics',
                    active: false,
                    title:"Data Analytics",
                    img:"./assets/images/services/6-3.png",
                    text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                },
                {
                    id: 'help-desk-services',
                    href: 'tab-help-desk-services',
                    active: false,
                    title:"Help Desk Services",
                    img:"./assets/images/services/6-4.png",
                    text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

                },
               
            ]
        }
    }

    render() {
        const tabs = this.state.cardData;
        return (
            <>
               <section className="pt-0">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-12">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp text-center"}
                                    spanclass={"title-design"}
                                    link={"OUR SERVICES"}
                                    title={"We Provide Useful Services"}
                                />

                           </div>

                       </div>

                       <div className="row custom-tab verticaltab3">
                        <div className="col-md-6">
                            <div className="col-lg-12 col-md-12">
                                <List tabs={tabs} />
                            </div>
                        </div>
                        <div className="col-md-6 tab-content">
                            <div id="tab-software-development" className="tab-pane fade active show">
                                <div className="xamin-right-img-wm">
                                    <img width="863" height="528" src="./assets/images/services/13.png" className="attachment-full"  sizes="100vw" />
                                </div>
                        </div>
                        <div id="tab-application-services" className="tab-pane fade">
                            <div className=" xamin-right-img-wm">
                                    <img width="863" height="528" src="./assets/images/services/14.png" className="attachment-full"  sizes="100vw" />
                            </div>
                        </div>
                        <div id="tab-data-analytics" className="tab-pane fade">
                            <div className=" xamin-right-img-wm">
                                    <img width="863" height="528" src="./assets/images/services/13.png" className="attachment-full"  sizes="100vw" />
                            </div>
                        </div>
                        <div id="tab-help-desk-services" className="tab-pane fade">
                            <div className=" xamin-right-img-wm">
                                    <img width="863" height="528" src="./assets/images/services/14.png" className="attachment-full"  sizes="100vw" />
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
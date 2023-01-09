import React from 'react';
import $ from 'jquery';

import { SectionTitle,PartnerCardStyle, TabContent } from '../../../xamin';

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
                <h6 className="tab-title">{item.title}</h6>
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
                    id: 'one-platform',
                    href: 'tab-one-platform',
                    title: 'One Platform',
                    active: true,
                },
                {
                    id: 'time-value',
                    href: 'tab-time-value',
                    title: 'Time value',
                    active: false,
                },
                {
                    id: 'smart-work',
                    href: 'tab-smart-work',
                    title: 'Smart work',
                    active: false,
                },
            ],
           
        }

    }

    render() {
        const { tabs } = this.state;
        return (
            <>
              <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                                <SectionTitle
                                    className={"title-box wow fadeInUp  text-left"}
                                    spanclass={"title-design"}
                                    link={"Solutions"}
                                    title={"Secure and governed. A single source of truth for all."}
                                />
                            <div className="custom-tab text-left">
                                    <List tabs={tabs} />
                            </div>
                            <div className="tab-content">
                                <div id="tab-one-platform" className="tab-pane fade active show">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <TabContent
                                                text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "
                                                buttonname="Read More"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div id="tab-time-value" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <TabContent
                                                text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less."
                                                buttonname="Read More"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div id="tab-smart-work" className="tab-pane fade ">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <TabContent
                                                text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using .
                                                The point of using Lorem Ipsum is that it has a more-or-less."
                                                buttonname="Read More"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src="./assets/images/about-us/18.png" alt="fancybox" />
                        </div>
                    </div>

                </div>
              </section>
            </>
        );
    }

}

export default Index;
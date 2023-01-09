import React from 'react';
import $ from 'jquery';

import { SectionTitle, TabContent } from '../../../xamin';
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
                data-toggle="tab"
                href={'#' + item.href}
                role="tab"
                aria-selected="true"
                onClick={() => { tabActive(item.href) }}
            >
                <h6 className="tab-title">{item.title}</h6>
               
            </a>
        </li>
    ));

    return (
        <>
            <ul  className="nav nav-pills mb-5" id="myTab" role="tablist" aria-orientation="vertical">
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
                    id: 'about-us',
                    href: 'tab-about-us',
                    active: true,
                    title:"About Us"
                },
                {
                    id: 'our-vision',
                    href: 'tab-our-vision',
                    active: false,
                    title:"Our Vision"
                },
                {
                    id: 'our-mission',
                    href: 'tab-our-mission',
                    active: false,
                    title:"Our Mission"
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
                          <div className="col-lg-6 wow fadeInUp align-items-center">
                              <div className="row">
                                  <div className="col-md-12">
                                    <SectionTitle
                                        className={"title-box wow fadeInUp text-center"}
                                        spanclass={"title-design"}
                                        link={"ABOUT US OUR COMPANY"}
                                        title={"What is Predictive Analytics?"}
                                    />  
                                  </div>

                              </div>

                              <div className="row custom-tab verticaltab2 text-left">
                                  <div className="col-lg-4 col-md-12">
                                      <List tabs={tabs} />
                                  </div>
                                    <div className="col-lg-8 col-md-12 tab-content">
                                        <div id="tab-about-us" className="tab-pane fade active show">
                                            <TabContent
                                                text ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy."
                                                buttonname="View Details"
                                            />
                                        </div>
                                        <div id="tab-our-vision" className="tab-pane fade">
                                            <TabContent
                                                text ="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. rem ipsum’ will uncover many web sites still in their infancy."
                                                buttonname="View Details"
                                            />
                                        </div>
                                        <div id="tab-our-mission" className="tab-pane fade">
                                         <TabContent
                                                text ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop publishing packages and web page editors now use
                                                Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy."
                                                buttonname="View Details"
                                            />
                                        </div>

                                    </div>
                              </div>

                          </div>

                          <div className="col-lg-6  wow fadeInUp xamin-right-img">
                             <img src="./assets/images/about-us/16.png" alt="about" />
                         </div>
                      </div>

                  </div>

              </section>
            </>
        );
    }

}

export default Index;
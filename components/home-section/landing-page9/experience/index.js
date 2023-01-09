import React from 'react';

import {  SectionTitle, AdressSection} from '../../../xamin';
const Cards = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
        <div key={index}  className={"timeline-article " +card.mainclass}>
            <div className="meta-date"></div>
            <div className="content-box">
                <div className="iqtml-top-box">
                    <div className="data1">
                        <h4 className="title">{card.title}</h4>
                        <h6 className="primary-color">{card.subtitle}</h6>
                    </div>
                    <div className="data2">
                        <span><i className="fa fa-calendar"></i>2006-2007</span>
                        <span><i className="fa fa-map-marker"></i>Paris, france</span>
                    </div>
                </div>
                <ul className="iq-contant">
                    <li>Learn a group of 5 people</li>
                </ul>
                <ul className="iq-contant">
                    <li> Passages of Lorem Ipsum available.</li>
                </ul>
                <ul className="iq-contant">
                    <li>Easy to Customize List passages of  available.</li>
                </ul>
        </div>
        </div>
           
    ));
};

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           data:[
               {
                   mainclass:"content-right-container",
                   title:"Data Scientist",
                   subtitle:"Keeping Group"
               },
               {
                    mainclass:"content-left-container",
                    title:"Data Intelligence",
                    subtitle:"Keeping Group"
                },
                {
                    mainclass:"content-right-container",
                    title:"Data Analytics",
                    subtitle:"Keeping Group"
                },
                {
                    mainclass:"content-left-container",
                    title:"Data Scientist",
                    subtitle:"Big Data Services"
                }
           ]
        }
    }

    render() {
        return (
            <>
                  <section className="pt-0">
                     <div className="container">
                        <div className="row ">
                            <div className="col-md-12">
                            <SectionTitle
                                        className={"title-box wow fadeInUp text-center"}
                                        spanclass={"title-design"}
                                        link={"PROCESS"}
                                        title={"Experience"}
                                    
                                    />
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                           <div className="main-timeline-section ">
                              <div className="conference-center-line"></div>
                              <div className="conference-timeline-content">
                                  <Cards cardList={this.state.data} />
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

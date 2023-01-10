import React from 'react';
import { Carousel2, CheckboxList } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            owlData:[
                {
                    img:"./assets/images/about-us/03.png",
                    text : "It is a long established",
                    title :"Apache Hadoop",
                },
                {
                    img:"./assets/images/about-us/04.png",
                    text : "It is a long established",
                    title :"Apache Spark",
                },
                {
                    img:"./assets/images/about-us/05.png",
                    text : "It is a long established",
                    title :"Apache Cassandra",
                },
                {
                    img:"./assets/images/about-us/04.png",
                    text : "It is a long established",
                    title :"Big Data Consulting",
                },
            ],
            checklist:[
                'Simply dummy text of the Lorem Ipsum',
                'There are many variations of passages',
                'Contrary to popular belief, Lorem',
                'It is a long established fact that a reader',
                'All the Lorem Ipsum generators.'
            ]
        }
    }
    render() {
        let { owlData, checklist } = this.state;
        return (
            <>
                  <h3 className="text-left mb-2">Big Data Consulting</h3>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. It uses a dictionary of over 200 Latin words.</p>
                  <p className="mb-5">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                    <div className="row iq-pb-45">
                        <div className="owl-carousel owl-services owl-loaded owl-drag"
                                data-dots="false"
                                data-nav="false"
                                data-items="2"
                                data-items-laptop="1"
                                data-items-tab="1"
                                data-items-mobile="1"
                                data-items-mobile-sm="1"
                                data-autoplay="true"
                                data-loop="true"
                                data-margin="15"
                        >
                                     { this.state.owlData.map((item, index) => (
                                                <Carousel2
                                                    key={'bds1-'+index}
                                                    img ={item.img}
                                                    title ={item.title}
                                                    text = {item.text}
                                                    mainClass ="Consulting-box service-slider  text-left"
                                                >
                                                    <a href=""><i aria-hidden="true" className="fa fa-plus"></i></a>
                                                </Carousel2>
                                        )) }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                           <h3 className="text-left mb-2">Big Data Implementation</h3>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden .</p>
                           <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                        </div>
                     </div>
                     <div className="row iq-pb-45">
                        <div className="col-md-6">
                           <h4 className="text-left mb-4">Big data support</h4>
                           <div className="text-left  ">
                              <ul className="iq-list">
                                <CheckboxList items={checklist} text={"text-left"} />
                              </ul>
                           </div>
                        </div>
                        <div className="col-md-6 iq-sm-mt-30">
                           <h4 className="text-left mb-4">Big data managed</h4>
                           <div className="wrapper">
                              <div className="service-chart">
                                 <canvas id="big-data-service" width="216" height="216"></canvas>
                              </div>
                              <ul id="js-legend" className="chart-legend"></ul>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-sm-12">
                           <h3 className="text-left mb-2">Data Implementation</h3>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.</p>
                           <p className="mb-0">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                        </div>
                     </div>
           </>
        );
    }
}

export default Index;
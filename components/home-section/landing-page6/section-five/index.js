import React from 'react';
import $ from 'jquery';

import { SectionTitle, BackgroundImage } from '../../../xamin';


const List = (props) => {
    const listItems = props.tabs;
    const list = listItems.map((item, index) => (
       <li className="list-inline-item  " key={'list-inline-'+index}>
            <div className="feature-info">
                <div className="feature-img">
                    <img className="img-fluid client-img" src={item.img} alt="image0" />
                </div>
                <h6>{item.title}</h6>
            </div>

       </li>
    ));

    return (
        <>
            <ul  className="list-inline mb-0">
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
                   img:"./assets/images/fancybox/6-5.png",
                   title:"Business performance"
                },
                {
                    img:"./assets/images/fancybox/6-6.png",
                    title:"Predict behavior"
                },
                {
                    img:"./assets/images/fancybox/6-5.png",
                    title:"Drive strategic"
                },
                {
                    img:"./assets/images/fancybox/6-6.png",
                    title:"Business performance"
                },
                {
                    img:"./assets/images/fancybox/6-7.png",
                    title:"Understand customers"
                },
                {
                    img:"./assets/images/fancybox/6-8.png",
                    title:"Predict behavior"
                },
                {
                    img:"./assets/images/fancybox/6-6.png",
                    title:"Identify trends"
                },
                {
                    img:"./assets/images/fancybox/6-7.png",
                    title:"insights into data"
                },
               
            ]
        }
    }

    render() {
        const tabs = this.state.cardData;
        var bg= "./assets/images/circle.png"
        return (
            <>
              <BackgroundImage
                    className="iq-feture-bg"
                    bgImage="./assets/images/feature.png"
              >
              <section className="iq-feture-bg">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-md-6">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp pr-lg-5 text-left"}
                                    spanclass={"title-design"}
                                    title={"What can you do with predictive analytics"}
                                    subTitle={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."}
                                />
                          </div>
                          <div className="col-md-6">
                            <div className="xamin-feature-circle wow zoomIn postion-relative">
                                <div className="xamin-img">
                                    <List tabs={tabs} />
                                <div className="dot-circle">
                                    <div className="effect-circle" style={{background: "url("+bg+")"}}></div>
                                </div>
                                <div className="main-circle">
                                    <div className="circle-bg">
                                        <img src="./assets/images/fancybox/6-9.png" alt="image" />
                                    </div>
                                </div>
                                </div>
                            </div>
                          </div>
                      </div>

                  </div>
              </section>
                  </BackgroundImage>
            </>
        );
    }

}

export default Index;
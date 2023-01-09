import React from 'react';

import {  SectionTitle, AdressSection} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           
            checkList:[
                {
                    icon:"fa fa-home mr-2",
                    heading:"Location",
                    text:"1234 North Avenue Luke Lane, South Bend, IN 360001",
                    class:"list-inline"
                },
                {
                    icon:"fa fa-phone mr-2",
                    heading:"Phone",
                    text:"+0123456789",
                    class:"list-inline",
                },
                {
                    icon:"fa fa-envelope mr-2",
                    heading:"Email",
                    text:"support@iqnonicthemes.com",
                    class:"list-inline"
                },
                {
                    icon:"fa fa-address-book-o",
                    heading: "Age",
                    text:" 31 Years",
                    class:"list-inline"
                },

              
            ],
        }
    }

    render() {
        const list = this.state.checkList;
        return (
            <>
              <section>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-5 col-md-5 col-sm-12">
                              <img width="537" height="750" src="./assets/images/about-us/19.png" className="attachment-full" alt="about-us"  sizes="100vw" />
                          </div>
                          <div className="col-lg-7 col-md-7 col-sm-12">
                                <SectionTitle
                                    className={"title-box wow fadeInUp text-left"}
                                    spanclass={"title-design"}
                                    link={"ABOUT ME"}
                                    title={"I'm Professional Data Scientist having 10 Years Of Experience"}
                                    subTitle={"Consectetur fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"}
                                />
                                <ul className="iq-address">
                                    
                                { list.map((item, index) => (
                                    <AdressSection 
                                        key={'about-'+index}
                                    icon ={item.icon}
                                    heading ={item.heading}
                                    text ={ item.text}
                                    className={item.class}
                                    />

                                 )) }
                                </ul>
                                <div className=" text-left  "><a className="button blue-btn button-icon" href="#"><span className="btn-effect"> Download CV</span></a></div>
                          </div>
                      </div>

                  </div>
              </section>
            </>
        );
    }
}

export default Index;

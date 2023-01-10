import React from 'react';

import { SectionTitle,ScrollTop,CardStyle7 } from '../../../xamin';


class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img:"./assets/images/about-us/04.png",
                    linkname:  "HTML",
                    time: "September 26, 2019 ",
                    title: "Build Construction",
                    desc: "“They bring to you a host of beautifully created infographics that contain the latest digital marketing ",
                },
                {
                    img:"./assets/images/about-us/04.png",
                    linkname:  "Design",
                    time: "September 26, 2019 ",
                    title: "Life Lack Meaning",
                    desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
                },
                {
                    img:"./assets/images/about-us/04.png",
                    linkname:  "HTML",
                    time: "September 26, 2019 ",
                    title: "Construction industry",
                    desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing",
                },
                {
                    img:"./assets/images/about-us/04.png",
                    linkname:  "CSS",
                    time: "September 26, 2019 ",
                    title: "Content Marketing",
                    desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing.",
                },
               
            ]
        }
    }

    render() {
        const cardData  = this.state.cardData;
        return (
            <>
                <section className="pt-0" id="blog">
                    <div className="container">
                        <div className="row layer-fly-one">
                            <div className="col-md-12">
                                <SectionTitle
                                        link="BLOG"
                                        className = "title-box wow fadeInUp title-shadow  text-center"
                                        title="Recent Blog"
                                        spanclass="title-design"
                                />
                                <div className="xamin-recentblog v1">
                                    <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-items="3" data-items-laptop="3" data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1" data-autoplay="true" data-loop="true">
                                        { cardData.map((item, index) => ( 
                                                <CardStyle7
                                                    key={index}
                                                    img={item.img}
                                                    linkname={item.linkname}
                                                    time={item.time}
                                                    desc ={item.desc}
                                                    title ={item.title}
                                                    mainclass= {"item"}
                                                    blogBoxClass ={" mb-0"}
                                                    imgClass={"clearfix"}
                                                />
                                            )) }
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
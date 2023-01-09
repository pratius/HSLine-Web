import React from 'react';
import { CardStyle7 ,Pagination } from '../../../xamin';



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
               
            ],
        }
       
    }
    render() {
        const cardData  = this.state.cardData;
        return (
            <>
              <section>
                <div className="container">
                    <div className="row">
                            { cardData.map((item, index) => ( 
                                     <CardStyle7
                                         key={index}
                                        img={item.img}
                                        tag={item.tag}
                                        linkname={item.linkname}
                                        time={item.time}
                                        desc ={item.desc}
                                        title ={item.title}
                                        colClass = {"col-md-6 wow fadeInUp"}
                                    />
                                    
                                 )) }
                    </div>
                        <Pagination />
                </div>

              </section>
            </>
        );
    }
}

export default Index;
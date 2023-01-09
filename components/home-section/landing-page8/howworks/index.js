import React from 'react';

import { SectionTitle,SectionStyle3 } from '../../../xamin';


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items:[
                {
                    media: "./assets/images/services/07.png",
                    title: "User Behavior",
                    text :"There are established fact that a reader will be distracted by the readable content of a page when looking at its layout."

                },
                {
                    media: "./assets/images/services/08.png",
                    title: "Apply Algorithm",
                    text :"Contrary to popular fact that a reader will be distracted by the readable when looking at its layout content of a page."
                },
                {
                    media: "./assets/images/services/09.png",
                    title: "Apply Algoritham",
                    text :"Many variations established fact reader will be distracted by the readable content of a page when at its layout looking."
                }
            ]
        }

    }

    render() {
        let { items } = this.state;
        return (
            <>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    className={"title-box wow fadeInUp text-center"}
                                    spanclass={"title-design"}
                                    link={"HOW WE WORK"}
                                    title={"How Does Xamin Works"}
                                />
                            </div>
                        </div>

                        <div className="row">
                            {
                                    items.map((item,index) => (
                                        <div key={index} className="col-lg-4">
                                            <div className="consult-services wow fadeInUp large  text-center">
                                                <CardStyle1
                                                    media={item.media}
                                                    title={item.title}
                                                    text={item.text}
                                                    imgClass="circle-effect"
                                                />
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </section>
            </>
        );
    }

}

export default Index;
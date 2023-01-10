import React from 'react';

import { SectionTitle, CardStyle5 } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
       this.state ={
           cards :[
               {
                   image:"./assets/images/about-us/01.png",
                   title:"2012 - 2013",
                   description:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages."
               },
               {
                   image:"./assets/images/about-us/07.png",
                   title:"2013 - 2014",
                   description:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages."
               },
               {
                   image:"./assets/images/about-us/03.png",
                   title:"2014 - 2016",
                   description:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages."
               },
               {
                   image:"./assets/images/about-us/02.png",
                   title:"2016 - 2019",
                   description:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages."
               },
           ]
       }
    }

    render() {
        const { cards } = this.state;

        return (
            <>
                <section className="pt-0">
                    <div className="container">
                        <div className="row xamin-bg">
                            <div className="col-sm-12">
                                <SectionTitle
                                    className={"title-box wow fadeInUp text-center"}
                                    spanclass={"title-design"}
                                    link={"Our History"}
                                    title={"Xamin Company History"}
                                />
                            </div>
                            {
                                cards.map((item,index) => (
                                    <div key={'h1-'+index} className={ this.state.cards.length-1== index ? "col-sm-12" : "col-sm-12 mb-5"}>
                                        <div className={index%2==0 ? "bg-gray" : "border"}>
                                            <CardStyle5
                                                image={item.image}
                                                title={item.title}
                                                description={item.description}
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

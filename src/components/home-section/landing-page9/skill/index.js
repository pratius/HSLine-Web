import React from 'react';

import {  SectionTitle, AdressSection} from '../../../xamin';
const Cards = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
        <div key={index}  className="iq-services-box wow fadeInUp text-left">
            <div className="services-content">
                    <h6>{card.hedaing}</h6>
                    <span className="progress-value">{card.value}</span>
                    <div className="iq-progress-bar"> <span className="position-relative" data-percent="60"></span> </div>
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

                   hedaing:"Data Science Capstone",
                   value:"60%"  
               },
               {

                    hedaing:"Python",
                    value:"70%"  
                },
                {

                    hedaing:"Machine Learning",
                    value:"80%"  
                }
           ],
           data1:[
            {

                hedaing:"SQL",
                value:"80%"  
            },
            {

                 hedaing:"Tableau",
                 value:"65%"  
             },
             {

                 hedaing:"java",
                 value:"70%"  
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
                                    title={"Skills"}
                                />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-5 col-md-5">
                             <Cards cardList={this.state.data} />
                        </div>
                        <div className="col-sm-12 col-lg-5 col-md-5 offset-md-2">
                            <Cards cardList={this.state.data1} />
                        </div>


                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default Index;

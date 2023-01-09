import React from 'react';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img:"fa fa-line-chart",
                    counter: 50,
                    title: "Trading Volume(USD)",
                },
                {
                    img:"fa fa-exchange",
                    counter: 20,
                    title: "Data Transactions",
                },
                {
                    img:"fa fa-users",
                    counter: 10,
                    title: " Our Happy Users",
                },
                {
                    img:"fa fa-book",
                    counter: 200,
                    title: "Custom Portfolios Created",
                },

               
            ]
        }
    }

    render() {
        const cardData  = this.state.cardData;
        return (
            <>
                <section className="pt-5">
                    <div className="container">
                        <div className="row">
                            {
                                cardData.map((card,index)=>(
                                    <div key={index} className="col-md-3 col-sm-6">
                                        <div className="iq-timer style1 text-center">
                                            <i aria-hidden="true" className={card.img}></i>
                                            <div className="timer-details">
                                                <span className="timer text-dark" data-to={card.counter} data-speed="5000">{card.counter}</span>
                                                <i className="fa fa-plus text-dark" aria-hidden="true"></i>
                                                <p className=" text-dark"> {card.title}</p>
                                            </div>
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
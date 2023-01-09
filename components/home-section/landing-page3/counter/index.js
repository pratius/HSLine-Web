import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    value: 1520,
                    icon: 'fa fa-smile-o',
                    text: ' Happy Clients'
                },
                {
                    value: 2000,
                    icon: 'fa fa-handshake-o',
                    text: ' Completed Projects'
                },
                {
                    value: 150,
                    icon: 'fa fa-user-circle-o',
                    text: ' Team Members'
                },
                {
                    value: 750,
                    icon: 'fa fa-check-circle-o',
                    text: ' Questions Answered'
                },
            ]
        }
    }

    render() {
        const list = this.state.list;

        return (
            <>
               <div className="iq-ptb-100">
                    <div className="container">
                        <div className="row">
                        { list.map((item, index) => (
                            <div key={index} className="col-md-3 col-sm-6">
                                <div className="iq-timer style2 mb-5  mb-md-0 mb-lg-0 text-center">
                                    <div className="iq-icon">
                                        <i aria-hidden="true" className={item.icon}></i>
                                    </div>
                                    <div className="timer-details">
                                        <span className="timer dark-timer" data-to={item.value} data-speed="20">{item.value}</span>
                                        <span className="timer_postfix dark-timer">M</span>
                                        <i className="fa fa-percent" aria-hidden="true"></i>
                                        <p className="dark-timer">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        )) }
                        </div>
                    </div>
               </div>

              
            </>
        );
    }
}

export default Index;

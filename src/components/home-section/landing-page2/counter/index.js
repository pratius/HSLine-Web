import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    value: 820,
                    icon: 'fa fa-plus',
                    text: 'Data Analytics'
                },
                {
                    value: 150,
                    icon: 'fa fa-plus',
                    text: 'Data Management'
                },
                {
                    value: 30,
                    icon: 'fa fa-plus',
                    text: 'Managed Analytics'
                },
                {
                    value: 100,
                    icon: 'fa fa-plus',
                    text: 'Big Data'
                },
            ]
        }
    }

    render() {
        const list = this.state.list;

        return (
            <>
               <div className="xamin-blue-bg py-5">
                    <div className="container">
                        <div className="row">
                        { list.map((item, index) => (
                            <div key={index} className="col-md-3 mb-3 mb-md-0">
                                <div className="iq-timer style1 text-center">
                                    <div className="timer-details">
                                        <span className="timer" data-to={item.value} data-speed="30">{item.value}</span>
                                        <i className={item.icon} aria-hidden="true"></i>
                                        <p> {item.text}</p>
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

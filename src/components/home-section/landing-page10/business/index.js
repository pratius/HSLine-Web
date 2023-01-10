import React from 'react';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section className="xamin-blue-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="rmb-30 col-md-8">
                                        <h2 className="vc_custom_heading vc_custom_1573620026850 text-white text-center text-md-left">Ready
                                            to see how Xamin can transform your business?</h2>
                                    </div>
                                    <div className="col-md-4">
                                        <div className=" text-center text-md-right ">
                                            <a className="button white-btn button-icon" href="#">
                                                <span className="btn-effect"> Request A demo</span>
                                            </a>
                                        </div>
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
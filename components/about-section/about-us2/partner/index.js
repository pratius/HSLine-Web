import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            partners:[
                "./assets/images/partners/1.png",
                "./assets/images/partners/2.png",
                "./assets/images/partners/3.png",
                "./assets/images/partners/4.png",
                "./assets/images/partners/5.png",
                "./assets/images/partners/1.png"
            ],
        }
    }

    render() {
        const { partners } = this.state;

        return (
            <>
                <div className="iq-ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 wow fadeInUp">
                                <div className="owl-carousel client-logo owl-loaded owl-drag" data-dots="false"
                                     data-nav="false" data-items="6" data-items-laptop="4" data-items-tab="3"
                                     data-items-mobile="2" data-items-mobile-sm="1" data-autoplay="true"
                                     data-loop="true" data-margin="30">
                                    { partners.map((item,index) => (
                                        <div key={'p1'+index} className="item">
                                            <div className="clients-box hover-effct">
                                                <img className="img-fluid client-img"
                                                     src={item}
                                                     alt="client-image" />
                                            </div>
                                        </div>
                                    )) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;

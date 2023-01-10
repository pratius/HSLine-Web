import React from 'react';

import { AboutStyle2, SectionTitle} from '../../../xamin';

const TecBox = (props) => {
    return (
        <div className="tec_box">
            <div className="tec_icons clerfix">
                {
                    props.items.map((item,index) => (
                        <div key={index} className={item.className}>
                            <div className="tec_icon">
                                <img src={item.image} alt="tecbox" />
                            </div>
                        </div>
                    ))
                }
                <h5>{props.title}</h5>
            </div>
        </div>
    );
}

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            tecIcon:[
                {
                    className:'img_icon_one',
                    image:"./assets/images/services/services-small-1.png"
                },
                {
                    className:'img_icon_two',
                    image:"./assets/images/services/services-small-2.png"
                },
                {
                    className:'img_icon_three',
                    image:"./assets/images/services/services-small-3.png"
                }
            ]
        }
    }

    render() {
        let { tecIcon } = this.state;
        return (
            <>
                <AboutStyle2 img={"./assets/images/about-us/03.png"} className={"iq-bg-over"}>
                     <div className="col-sm-12 offset-lg-1 col-lg-6 col-md-12">
                         <div className="row">
                            <div className="first-tec col-sm-6 col-lg-6">
                                <TecBox title={"Big Data Services"} items={tecIcon} />
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <TecBox title={"Business Intelligence"} items={tecIcon} />
                                <TecBox title={"Data Visualization"} items={tecIcon} />
                            </div>
                         </div>
                     </div>
                    
                </AboutStyle2>
              
            </>
        );
    }
}

export default Index;

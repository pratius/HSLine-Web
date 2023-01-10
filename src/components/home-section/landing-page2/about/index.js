import React from 'react';

import { AboutStyle, SectionTitle, CheckboxList} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            checkList:[
                'Advance Advisory Team',
                'Professional Consulting Services',
                '24/7 Support Help Center',
                'Customer Service &amp; Operations'
            ]
        }
    }

    render() {
        let { checkList } = this.state;
        return (
            <>
                <AboutStyle img={"./assets/images/about-us/03.png"} className={"pt-0"}>
                    <div className=" fadeInUp  col-sm-12 col-lg-6 col-md-6 wow align-items-center">
                        <SectionTitle
                            link ="About us"
                            title="Human Behaviour, Data Science"
                            subTitle="It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."
                            className = "title-box wow fadeInUp text-left"
                            spanclass="title-design"
                        />
                        <CheckboxList text={"text-left"} items={checkList} />
                        <div className=" text-left mt-5">
                            <a className="button button-icon" href="/about-us-1">
                            <span className="btn-effect"> Read More</span>
                            </a>
                        </div>
                    </div>
                    
                </AboutStyle>

                

                

              
            </>
        );
    }
}

export default Index;

import React from 'react';

import { SectionRightImage, SectionLeftImage, CheckboxList} from '../../../xamin';

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
                  <SectionRightImage
                      className="iq-bg-over pb-5"
                      title="About us"
                      subTitle="Human Behaviour, Data Science"
                      description="It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."
                      image="./assets/images/about-us/03.png"
                  >
                      <CheckboxList text={"text-left"} items={checkList} />
                  </SectionRightImage>
                <SectionLeftImage
                    sectionClass="iq-bg-over pt-0"
                    title="About us"
                    subTitle="Human Behaviour, Data Science"
                    description="It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout."
                    image="./assets/images/about-us/05.png"
                >
                    <CheckboxList text={"text-left"} items={checkList} />
                </SectionLeftImage>
            </>
        );
    }
}

export default Index;

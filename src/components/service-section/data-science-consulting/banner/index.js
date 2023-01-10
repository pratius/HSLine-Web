import React from 'react';
import { BannerStyle1 } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumb:[
                {
                    title:'Home',
                    href:'/landing-page1',
                    active:false
                },
                {
                    title:'Data Science Consulting',
                    href:'#',
                    active:true
                }
            ]
        }
    }
    render() {
        return (
            <>
                <BannerStyle1
                    title={"Data Science Consulting"}
                    breadcrumb={this.state.breadcrumb}
                    image={'./assets/images/about-us/07.png'}
                />
            </>
        );
    }
}

export default Index;
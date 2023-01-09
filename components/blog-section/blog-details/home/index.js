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
                    title:'Design',
                    href:'/landing-page1',
                    active:false
                },
                {
                    title:'Construction industry',
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
                    title={"Construction industry"}
                    breadcrumb={this.state.breadcrumb}
                    image={'./assets/images/about-us/04.png'}
                />
            </>
        );
    }
}

export default Index;
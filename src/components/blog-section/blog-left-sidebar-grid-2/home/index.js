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
                    title:'Left Sidebar Grid 2',
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
                    title={"Left Sidebar Grid 2"}
                    breadcrumb={this.state.breadcrumb}
                    image={'./assets/images/about-us/04.png'}
                />
            </>
        );
    }
}

export default Index;
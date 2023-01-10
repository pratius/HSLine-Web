import React from 'react';
import $ from 'jquery';
import { SectionTitle, CardStyle1,PortfolioItem } from '../../../xamin';
import { Item } from '../../../../constants/portfolio-item';



const tabActive = (id) => {
    $('.tab-content').find('.active').removeClass('active');
    $('.nav-item').find('.active1').removeClass('active1');
    $('#' + id).addClass('active');
};

const List = (props) => {
    const listItems = props.tabs;
    const list = listItems.map((item, index) => (
        <li key={index}>
            <a
                id={item.id}
                className={ item.active ? "nav-link show active " : "nav-link"}
                data-toggle="tab"
                href={'#' + item.href}
                role="tab"
                aria-selected="true"
                onClick={() => { tabActive(item.href) }}
            >
                {item.title}
               <span className="post_no">{item.count}</span>
            </a>
        </li>
    ));

    return (
        <>
            <ul  className="nav  justify-content-center" id="myTab" role="tablist">
                { list }
            </ul>
        </>
    );
};

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        tabs: [
            {
                id: 'all-tab',
                href: 'all',
                title: 'All',
                active: true,
                count:8,
            },
            {
                id: 'design-tab',
                href: 'design',
                title: 'Design',
                active: false,
                count:4
            },
            {
                id: 'html-tab',
                href: 'html',
                title: 'HTML',
                active: false,
                count:1
            },
            {
                id: 'photography-tab',
                href: 'photography',
                title: 'Photography',
                active: false,
                count:3
            },
            {
                id: 'video-tab',
                href: 'video',
                title: 'Video',
                active: false,
                count:2
            },

          
        ],
        item:Item
    }
    }


    render() {
        const { tabs, item } = this.state;
        return (
            <>
               <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <SectionTitle
                                    link="OUR PROJECTS"
                                    title="Projects in Different Domain of Industry"
                                    className = "title-box wow fadeInUp text-center"
                                    spanclass="title-design"
                                />
                            </div>
                            
                            <div className="col-md-12">
                                <div id="features" className="iq-amazing-tab wow fadeInUp" data-wow-delay="1s">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <List tabs={tabs} />
                                        </div>
                                    </div>
                                    <div className="tab-content ">
                                        { tabs.map((tab,index) => (
                                            <div key={index} className={tab.active ? "tab-pane show active " : "tab-pane"} id={tab.href}>
                                                <div className="row flex-row-reverse">
                                                    <div className="col-lg-12 text-left align-self-center">
                                                        <div className="owl-carousel owl-loaded owl-drag"
                                                             data-dots="false" data-nav="false" data-items="3"
                                                             data-items-laptop="3" data-items-tab="2"
                                                             data-items-mobile="1" data-items-mobile-sm="1"
                                                             data-autoplay="false" data-loop="true" data-margin="30">
                                                            <PortfolioItem filterdata={tab.href} /> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )) }

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

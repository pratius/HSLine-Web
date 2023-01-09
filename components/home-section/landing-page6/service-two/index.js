import React from 'react';
import $ from 'jquery';

import { CardStyle1} from '../../../xamin';

import { SectionTitle } from '../../../xamin';


const tabActive = (id) => {
    $('.tab-content').find('.active').removeClass('active');
    $('.nav-item').find('.active1').removeClass('active1');
    $('#' + id).addClass('active');
};

const List = (props) => {
    const listItems = props.tabs;
    const list = listItems.map((item, index) => (
        <li key={index} className="nav-item">
            <a
                id={item.id}
                className={ item.active ? "nav-link show active " : "nav-link"}
                data-toggle="pill"
                href={'#' + item.href}
                role="tab"
                aria-selected="true"
                onClick={() => { tabActive(item.href) }}
            >
                <div className="media">
                    <img src={item.img} alt="tab-image" className="img-fluid" />
                    <div className="media-body">
                        <h5 className="mb-2 active-title">{item.title}</h5>
                        <p className="mb-0">{item.text}</p>
                    </div>
                </div>
               
            </a>
        </li>
    ));

    return (
        <>
            <ul  className="nav nav-pills nav-pills-style-3 mb-5" id="myTab" role="tablist" aria-orientation="vertical">
                { list }
            </ul>
        </>
    );
};

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items:[
                {
                    media: "./assets/images/fancybox/6-1.png",
                    title: "Data & Analysis",
                    text :"It is a long established fact that a fre ader will be distracted by the "

                },
                {
                    media: "./assets/images/fancybox/6-2.png",
                    title: "Analysis & Digital Reporting",
                    text :"it is a long established fact that a reader will be distracted by the of readable"
                },
                {
                    media: "./assets/images/fancybox/6-3.png",
                    title: "Custom Search and Filtering",
                    text :"it is a long established fact that a reader will be distracted by the of readable"
                },
            
                {
                    media: "./assets/images/fancybox/6-4.png",
                    title: "Product Listing",
                    text :"it is a long established fact that a reader will be distracted by the of readable"
                }
            ]
        }
    }

    render() {
        const tabs = this.state.cardData;
        const items =this.state.items;
        return (
            <>
               <section className="pt-0">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-12">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp text-center"}
                                    spanclass={"title-design"}
                                    link={"OUR SERVICES"}
                                    title={"We Provide Useful Services"}
                                />
                           </div>
                       </div>
                       <div className="row">
                            {
                            items.map((item,index) => (
                                <div key={index} className="col-md-3 col-sm-6">
                                    <div className="consult-services xamin-square right wow fadeInUp  text-left">
                                        <CardStyle1
                                            media={item.media}
                                            title={item.title}
                                            text={item.text}
                                            imgClass="square-effect bg"
                                        />
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>

                </section>
                </>
        );
    }

}

export default Index;
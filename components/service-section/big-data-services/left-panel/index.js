
import React from 'react';
import Link from "next/link";
import { CardStyle10} from '../../../xamin';
import { servicesMenu } from '../../../../constants/menu';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            active : '/big-data-services',
            testimonial: [
                {
                    img:  './assets/images/testimonials/1.jpg',
                    name: "Mark McManus",
                    position: "COO",
                    desc: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” ",
                },
                {
                    img:  './assets/images/testimonials/2.jpg',
                    name: "Jack White",
                    position: "CEO",
                    desc: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” ",
                },
                {
                    img:  './assets/images/testimonials/3.jpg',
                    name: "Jack McManus",
                    position: "CTO",
                    desc: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” ",
                }

            ],
        }
    }
    render() {
        let { active,testimonial } = this.state;
        return (
            <>
                <div className="nav flex-column nav-pills mb-5 widget widget_nav_menu fadeInLeft wow">
                    { servicesMenu.map((menuItem,index) => (
                        <Link key={index} href={menuItem.href}>
                            <a className={"nav-link "+(active==menuItem.href ? "current-menu-item" : '')} >{menuItem.title}</a>
                        </Link>
                    )) }
                </div>
                <div className="testimonial-widget-menu widget wow fadeInLeft">
                    <div className="owl-carousel" data-dots="true" data-nav="false" data-autoplay="true"
                         data-loop="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1"
                         data-items-mobile-sm="1" data-margin="30">
                        {testimonial.map((item, index) => (
                            <CardStyle10 key={index}
                                desc={item.desc}
                                img={item.img}
                                name={item.name}
                                position={item.position}
                                className={"post-img"}
                            />
                        ))}
                    </div>
                </div>
                <div className="widget get-file fadeInLeft wow">
                    <h2 className="widget-title">Downloads</h2>
                    <a href="./assets/pdf/sample.pdf">
                        <ul className="list-inline download-item">
                            <li className="list-inline-item">
                                <i className="fa fa-file-pdf-o"></i>
                                <span className="ml-3">PDF download</span>
                            </li>
                        </ul>
                    </a>
                </div>
                <div className="widget get-file mb-5 fadeInLeft wow">
                    <a href="./assets/pdf/sample.pdf">
                        <ul className="list-inline download-item">
                            <li className="list-inline-item">
                                <i className="fa fa-file-pdf-o"></i>
                                <span className="ml-3">Company White Paper</span>
                            </li>
                        </ul>
                    </a>
                </div>
            </>
        );
    }
}

export default Index;
import React from 'react';
import Link from "next/link";

import { FooterMain, FooterLogo, FooterAddress, FooterLinks,SubScriber } from '../../../xamin';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            footerText: [
                {
                    icon: true,
                    iconClass: 'fa fa-phone',
                    text: '+0123456789'
                },
                {
                    icon: true,
                    iconClass: 'fa fa-envelope',
                    text: 'support@iqnonicthemes.com'
                },
                {
                    icon: true,
                    iconClass: 'fa fa-home',
                    text: '1234 North Avenue Luke Lane, South Bend, IN 360001'
                }
            ],
            footerHome: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'Home'
                        },
                        {
                            href: '#',
                            title: 'About Us'
                        },
                        
                        {
                            href: '#',
                            title: 'Service'
                        },
                        {
                            href: '#',
                            title: 'Careers'
                        },
                        {
                            href: '#',
                            title: 'Contact Us'
                        }, 
                    ]
                },
                
            ],
            footerAbout: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'Home'
                        },
                        {
                            href: '#',
                            title: 'Blog'
                        },
                        {
                            href: '#',
                            title: 'Careers'
                        },
                        {
                            href: '#',
                            title: 'Clients'
                        }, 
                        {
                            href: '#',
                            title: 'Service'
                        }
                    ]
                },
                
            ],
        }

    }

    render() {
        const { footerText, footerHome, footerAbout } = this.state;
        return (
            <>
                <FooterMain className={"footer-one iq-bg-dark iq-over-dark-90"}>
                    <div className="container">
                            <div className="footer-top">
                                 {/* <SubScriber /> */}
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 ">
                                        <FooterLogo
                                            sectionImage={ './assets/images/logo.png' }
                                            sectionText={"It is a long established fact that a reader will be distracted by the readable content."}
                                            
                                        />
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0">
                                        <FooterLinks title={"Menu"} content={footerHome}  />
                                    </div>
                                

                                    {/* <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4">
                                        <FooterLinks title={"About us"} content={footerAbout}  />
                                    </div> */}

                                    <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                                        <FooterAddress  addressContent={footerText} addressTitle={"Contact Us"} />
                                    </div>
                                </div>
                    </div>
                    </div>
                    <footer>
                        <div className="copyright-footer">
                                <div className="pt-3 pb-3">
                                    <div className="row flex-row-reverse justify-content-between">
                                        <div className="col-lg-12 col-md-12 text-lg-center text-md-center text-center"> <span className="copyright">Copyright 2022 <Link href="/landing-page1"><a>HSLine</a></Link> All Rights Reserved.</span> </div>
                                    </div>
                                </div>
                            </div>
                    </footer>
                </FooterMain>
               
            </>
        );
    }

}

export default Index;
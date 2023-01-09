import React from 'react'
import Head from 'next/head';


// Import asset...
import logoImg from '../public/assets/images/logo.png';
// Import for custom styles...
import '../public/style.css';
// Import for the custom plugins...
import { index } from '../config/plugins';


// Import for the Xamin components...
import {HeaderStyle,Loader,ScrollTop} from '../components/xamin';


//Components
import RevolutionSlider from "../components/home-section/landing-page6/revslider";
import Footer from "../components/home-section/landing-page6/footer";
import SectionTwo from "../components/home-section/landing-page6/section-two";
import SectionThree from "../components/home-section/landing-page6/section-three";
import ServiceSection from "../components/home-section/landing-page6/service-section";
import SectionFive from "../components/home-section/landing-page6/section-five";
import ServiceTwo from "../components/home-section/landing-page6/service-two";
import Case from "../components/home-section/landing-page6/casestudies-section";
import Partner from "../components/home-section/landing-page6/partner";
import Testimonial from "../components/home-section/landing-page6/testimonial";
import Blog from "../components/home-section/landing-page6/blog";
import Contact from "../components/home-section/landing-page6/contactus";



class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-home','/']
        };
    }

    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 2000);

    }

    render() {
        return (
            <>
                <Head>
                    <title>HSLine - Global Sourcing Hub of Food & Agriculture</title>
                    <meta name="keywords" content="HTML5 Template" />
                    <meta name="description" content="Xamin - Data Science &amp; Analytics HTML5 Template" />
                    <meta name="author" content="http://iqonic.design/" />

                    <link rel="shortcut icon" href="./assets/images/favicon.ico" />
                </Head>

                {/* Loader section */}
                <Loader />

                {/* header section*/}

                <HeaderStyle
                    className={"style-one"}
                    logoImg={logoImg}
                    buttonSection={(<div className="blue-btn button"> <a href="#">Get Started</a> </div>)}
                    activeMenu ={this.state.activeMenu}
                />
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
                <RevolutionSlider />

                <div className="main-content">
                    {/* <SectionTwo /> */}
                    <SectionThree />
                    {/* <ServiceSection/> */}
                    {/* <SectionFive /> */}
                    <ServiceTwo />
                    {/* <Case />
                    <Partner /> */}
                    {/* <Testimonial/>
                    <Blog /> */}
                    <Contact />
                </div>
                <Footer/>
                <ScrollTop />

            </>
        );
    }
}

export default Index;

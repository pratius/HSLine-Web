import React from 'react'
import Head from 'next/head';


// Import asset...
import logoImg from '../../public/assets/images/logo.png';
// Import for custom styles...
import '../../public/style.css';
// Import for the custom plugins...
import { index } from '../../config/plugins';


// Import for the Xamin components...
import {HeaderStyle,Loader,ScrollTop} from '../../components/xamin';


//Components
import Banner from '../../components/about-section/about-us1/banner';
import AboutUs from '../../components/about-section/about-us1/about-us';
import History from '../../components/about-section/about-us1/History';
import Footer from '../../components/about-section/about-us1/footer';



class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-about','/about-us']
        };
    }

    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 500);

    }

    render() {
        return (
            <>
                {/* Heading section */}
                <Head>
                    <title>HSLine - Data Science &amp; Analytics ReactJs Template</title>
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

                <Banner />

                <div className="main-content">
                    {/*  About Us  */}
                    <AboutUs />
                    <History />
                    {/* <Team /> */}
                </div>


                <ScrollTop />
                <Footer />
                
            </>
        );
    }
}

export default Index;

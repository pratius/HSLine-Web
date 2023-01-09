import React from 'react'
import Head from 'next/head';


// Import asset...
import logoImg from '../../public/assets/images/logo.png';
// Import for custom styles...
import '../../public/style.css';
// Import for the custom plugins...
import { index } from '../../config/plugins';


// Import for the Xamin components...
import {HeaderStyle,Loader,BannerStyle1} from '../../components/xamin';

import Footer from '../../components/pages-section/footer';
import Home from '../../components/pages-section/contactus/home';
import Main from '../../components/pages-section/contactus/main';
import Bussiness from '../../components/pages-section/contactus/bussiness';


//Components

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#contact','/contactus'],
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
                    <title>Xamin - Data Science &amp; Analytics ReactJs Template</title>
                    <meta name="keywords" content="HTML5 Template" />
                    <meta name="description" content="Xamin - Data Science &amp; Analytics HTML5 Template" />
                    <meta name="author" content="http://iqonic.design/" />

                    <link rel="shortcut icon" href="./assets/images/favicon.ico" />
                </Head>

                {/* Loader section */}
                <Loader />

                <HeaderStyle
                    className={"style-one"}
                    activeMenu ={this.state.activeMenu}
                    logoImg={logoImg}
                    buttonSection={(<div className="blue-btn button"> <a href="#">Get Started</a> </div>)}
                />
                < Home />
                <div className="main-content">
                    <Main />
                    <Bussiness />
                </div>
                <Footer />
            </>
        );
    }
}

export default Index;

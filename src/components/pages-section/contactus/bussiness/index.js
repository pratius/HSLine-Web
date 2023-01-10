import React from 'react';
import { ContactUs, SocialIcon} from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
              <section className="pt-0">
                    <div className="container">
                        <div className="row  align-items-center">
                            <div className="col-sm-6">
                                <h2 className="text-left mb-4">Let's talk about for your <br /> business</h2>
                                <div className="response-output "></div>
                                <form action="#" method="post" className="">
                                    <div className="contact-form">
                                         <ContactUs />
                                   </div>
                                 </form>
                            </div>
                            <div className="mt-5 col-sm-6 offset-lg-1 col-lg-5 offset-md-1 col-md-5">
                                <div className="wrapper">
                                   <SocialIcon
                                        icon={"fa fa-phone"}
                                        title={"Phone support"}>
                                        <ul className="list-inline mb-0">
                                            <li> <a href="tel:+0123456789"> +0123456789</a> </li>
                                            <li> <a href="tel:+0123456789"> +0123456789</a> </li>
                                        </ul>
                                    </SocialIcon>
                                    <SocialIcon
                                        icon={"fa fa-envelope-o"}
                                        title={"Email us"}>
                                        <ul className="list-inline mb-0">
                                            <li><a href="mailto:support@iqnonicthemes.com"> support@iqnonicthemes.com</a></li>
                                            <li><a href="mailto:support@iqnonicthemes.com"> support@iqnonicthemes.com</a></li>
                                        </ul>
                                    </SocialIcon>
                                    <SocialIcon
                                            icon={"fa fa-share-alt"}
                                            title={"Social media"}>
                                            <ul>
                                                <li className="d-inline"><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                <li className="d-inline"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li className="d-inline"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                    </SocialIcon>
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
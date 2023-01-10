import React from 'react';

import { AboutStyle, SectionTitle, CheckboxList, ContactUs} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: [
                {
                   icon:"fa fa-phone",
                   title:"Phone support",
                   link1:"+0123456789",
                   link2:"+0123456789"

                },
                {
                    icon:"fa fa-map-marker",
                    title:"Email us",
                    link1:"+support@iqnonicthemes.com",
                    link2:"support@iqnonicthemes.com<"
                },
                
                
           
        ]
        }
    }

    render() {
        const data =this.state.value;

        return (
            <>
                <section className="xamin-primary-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <form method="post" noValidate="noValidate">
                                    <div className="predict-form  consultab-contact contact-form">
                                        <div>
                                            <h4 className="title mb-4 text-center">Talk With Our Expert</h4>
                                        </div>
                                        <div className=""> <input type="text" name="your-name" className="form-control text " placeholder="Your Name" /> </div>
                                        <div className=""> <input type="text" name="your-email" className="form-control text " placeholder="Your Email" /> </div>
                                        <div className=""> <textarea name="your-message" cols="40" rows="5" className="form-control textarea " placeholder="Your Message" ></textarea> </div>
                                        <div> <button id="submit-4" name="submit" type="submit" value="Send" className="button d-block w-100">Send Message</button> </div>
                                    </div>
                                </form>
                            </div>

                            <div  className="col-lg-6 col-md-6 col-sm-12">
                                { data.map((item, index) => (
                                    <div key={index} className="contact-box d-flex  text- text-white ">
                                            <i aria-hidden="true" className={item.icon}></i> 
                                            <div className="service-detail">
                                                <h2 className="mb-2  text-white " >{item.title}</h2>
                                                <ul className="list-inline mb-0">
                                                <li><a href="tel:+0123456789"> {item.link1}</a> </li>
                                                <li><a href="tel:+0123456789">{item.link2}</a></li>
                                                </ul>
                                            </div>
                                    </div>
                                )) }
                            </div>
                        </div>

                    </div>


                </section>
            </>
        );
    }
}

export default Index;

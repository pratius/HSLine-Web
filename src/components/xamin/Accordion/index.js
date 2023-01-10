import React from 'react';

const Index = (props) => {

    return (
        <>
                        <div className="iq-accordion-block">
                              <div className="active-faq clearfix">
                                 <div className="container">
                                    <div className="row align-items-center">
                                       <div className="col-md-9 col-sm-12 "> <a href="#" className="accordion-title"><span>{props.title}</span></a> </div>
                                       <div className="col-md-3 col-sm-12 text-center text-lg-right text-md-right"> <a className="button" href="#">Apply Now</a> </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-details">
                                 <div className="container">
                                    <div className="row mt-4">
                                       <div className="col-lg-6 mb-4 mb-lg-0">
                                          <h4 className="mb-3">{props.subtitle}</h4>
                                          <ul className="iq-list">
                                             <li><i className="fa fa-check-square-o"></i><span>It is a long established fact that a reader will be distracted.</span></li>
                                             <li><i className="fa fa-check-square-o"></i><span>The point of using Lorem Ipsum is that.</span></li>
                                             <li><i className="fa fa-check-square-o"></i><span>Many desktop publishing packages and web page.</span></li>
                                             <li><i className="fa fa-check-square-o"></i><span>There are many variations of passages.</span></li>
                                             <li><i className="fa fa-check-square-o"></i><span>All the Lorem Ipsum generators on the Internet.</span></li>
                                             <li><i className="fa fa-check-square-o"></i><span> It uses a dictionary of over 200 Latin words.</span></li>
                                          </ul>
                                       </div>
                                       <div className="col-lg-6">
                                          <h4 className="mb-3">{props.subtitle2}</h4>
                                          <ul className="iq-list">
                                             <li><i className="fa fa-check-square-o"></i><span>Advance Advisory Team</span></li>
                                             <li><i className="fa fa-check-square-o"></i><span>Professional Consulting Services</span></li>
                                             <li><i className="fa fa-check-square-o"></i><span>24/7 Support Help Center</span></li>
                                             <li><i className="fa fa-check-square-o"></i><span>Advance Advisory Team</span></li>
                                             <li><i className="fa fa-check-square-o"></i><span>Professional Consulting Services</span></li>
                                             <li><i className="fa fa-check-square-o"></i><span>24/7 Support Help Center</span></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
        </>
    );
};

export default Index;
import React from 'react';

const Index = (props) => {
    return (
        <>
                    <div className="contact-box d-flex">
                        <i aria-hidden="true" className={props.icon}></i>
                           <div className="service-detail">
                              <h4 className="mb-2">{props.title}</h4>
                                 {props.children}
                           </div>
                    </div>
        </>
    );
}

export default Index;

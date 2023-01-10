import React from 'react';

const Index = (props) => {

    return (
        <>
                 <div className="col-sm-4">
                     <div className="consult-services wow fadeInUp contact-detail text-center">
                        <div className="circle-effect"> <i aria-hidden="true" className="fa fa-map-marker"></i> </div>
                        <h4 className="mb-2">{props.location}</h4>
                        <p className="mb-0">{props.text}</p>
                     </div>
                  </div>
        </>
    );
};

export default Index;

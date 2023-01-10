import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="iq-pricing ">
                <div className="priceing-title ">
                    <h2>{props.price}<span>/Month</span></h2>
                    <p className="mb-0"></p>
                </div>
                <div className="priceing-description ">
                    <h4 className="title mb-3">{props.heading}</h4>
                    <h5 className="subtitle mb-3">{props.subheading}</h5>
                         {props.children}
                </div>
                </div>
        </>
    );
};
export default Index;
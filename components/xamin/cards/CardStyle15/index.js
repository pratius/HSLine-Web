import React from 'react';

const Index = (props) => {

    return (
        <>
        <div className="col-lg-4 col-md-6 ">
            <div className={props.className}>
                <div className="service-box-icon">
                    <img src={props.images} alt="fancybox" />
                </div>
                <div className="service-box-detail">
                    <h4 className="mb-2">{props.name}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Index;

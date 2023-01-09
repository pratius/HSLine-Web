import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="service-box d-inherit p-4 my-3 wow fadeInUp text-left">
                <img src={props.image} alt="fancybox" />
                <div className="service-detail align-self-center">
                    <h4 className="mb-2">{props.title}</h4>
                </div>
                <div className="mb-3">
                    <p>{props.description}</p>
                </div>
                {props.children}
            </div>
        </>
    );
};

export default Index;
import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className={"service-box p-4 my-4 wow fadeInUp "+(props.className ? props.className : 'text-center text-md-left ')}>
                <img src={props.image} alt="fancybox" width="550" height="360"/>
                    <div className="service-detail align-self-center">
                        <h5 className="mb-2">{props.title}</h5>
                        <p>{props.description}</p>
                        {props.children}
                    </div>
            </div>
        </>
    );
};

export default Index;
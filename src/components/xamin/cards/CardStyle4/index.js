import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className={"xamin-services  mb-0 wow fadeInUp text-"+props.textClass}>
                <div className="services-detail">
                    { props.icon ? (<div> <i aria-hidden="true" className={props.icon}></i> </div>) : '' }
                    { props.image ? (<img src={props.image} alt="img"/>) : ''}
                    {props.titleTag=='h5' ? (<h5 className="mb-1">{props.title}</h5>) : (<h4 className="mb-1">{props.title}</h4>)}
                    <p className="mb-0">{props.description}</p>
                </div>
            </div>
        </>
    );
};

export default Index;
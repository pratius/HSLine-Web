import React from 'react';

const Index = (props) => {

    return (
        <>
               <div className="col-md-6">
                    <div className={props.mainClass}>
                        {props.icon ? (<i aria-hidden="true" className={props.icon}></i>) : ''}
                        {props.image ? (<img src={props.image} alt="fancy" />) : ''}
                        <div className="service-detail align-self-center">
                            <h4 className="mb-2">{props.title}</h4>
                            <p>{props.desc}</p>
                        </div>
                    </div>
               </div>
        </>
    );
};

export default Index;

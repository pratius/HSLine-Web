import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className={props.mainClass}>
                <div className="iq-img">
                    <img src={props.img} alt="fancybox" /> 
                </div>
                <div className="timer-details ">
                    {props.children}
                </div>
            </div>

        </>
    );
};

export default Index;
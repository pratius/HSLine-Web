import React from 'react';

const Index = (props) => {
    return (
        <>
            <div className={props.className} >
                <h6>{props.heading}</h6>
                <span className="progress-value">{props.percentage}%</span>
                <div className="iq-progress-bar">
                    <span className="position-relative" data-percent={props.percentage}> </span>
                </div>
            </div>
        </>
    );
}

export default Index;

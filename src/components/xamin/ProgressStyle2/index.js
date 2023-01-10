import React from 'react';

const Index = (props) => {
    return (
        <>
            <div className="progress-content" >
                <div className="progress-value">{props.percentage}%</div>
                <div className="progress-title">
                    <div className="progress-main">
                         <h6>{props.heading}</h6>
                    </div>
                    <div className="iq-progress-bar">
                        <span className="position-relative" data-percent={props.percentage}></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

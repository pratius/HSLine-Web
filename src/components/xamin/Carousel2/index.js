import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className={props.mainClass}>
                    <img src={props.img} alt="slider" />
                    <div className="details-box clearfix">
                        <div className="consult-details">
                            <h5>{props.title}</h5>
                                <p className="mb-0">{props.text}</p>
                        </div>
                       {props.children}
                    </div>
                </div>
        </>
    );
};

export default Index;
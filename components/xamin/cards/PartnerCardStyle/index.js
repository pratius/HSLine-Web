import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className={props.mainClass + " wow fadeInUp"} style={{visibility: "visible", animationName: "fadeInUp"}}>
                <div className={props.imgClass}>
                    <img src={props.img} alt="fancybox" />
                </div>
                <div className={props.detailClass}>
                    <h6 className="mb-1">{props.heading}</h6>
                    <p className="mb-0">{props.text}</p>
                </div>
            </div> 
        </>
    );
};

export default Index;

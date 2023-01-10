import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="item text-center">
                <div className="iq-testimonial">
                    <div className="testimonial-info">
                        <img alt="#" className="img-fluid rounded-circle" src={props.image} />
                        <div className="testimonial-name">
                            <h5>{props.title}</h5>
                            <span className="sub-title">{props.subTitle}</span>
                        </div>
                    </div>
                    <p>{props.description} </p>
                </div>
            </div>
        </>
    );
};

export default Index;

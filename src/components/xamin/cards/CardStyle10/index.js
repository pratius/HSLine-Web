import React from 'react';

const Index = (props) => {

    return (
        <>
               <div className="testimonial-info">
                    <p>{props.desc}</p>
                    <div className={props.className}>
                        <img alt="#" className="img-fluid rounded-circle" src={props.img} />
                            <div className="testimonial-name">
                                <h5>{props.name}</h5>
                                <span className="sub-title">{props.position}</span>
                            </div>
                    </div>
                </div>
        </>
    );
};

export default Index;

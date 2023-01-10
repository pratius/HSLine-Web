import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="xamin-history row row-eq-height align-items-center wow fadeInUp ">
                <div className="col-sm-4 col-lg-2 col-md-2">
                    <img alt="" className="attachment-full" height="360" src={props.image} width="550" />
                </div>
                <div className="text-lg-center text-left col-sm-12 col-lg-2 col-md-3">
                    <h4 className="pt-3 pb-1 pt-lg-0 pb-lg-0">{props.title}</h4>
                </div>
                <div className="col-sm-12 col-lg-8 col-md-7">
                    <p className="mb-0">{props.description}</p>
                </div>
            </div>
        </>
    );
};

export default Index;
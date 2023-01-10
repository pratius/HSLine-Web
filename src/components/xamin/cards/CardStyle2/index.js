import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="service-box d-inherit p-4 my-3 wow fadeInUp text-left">
                <img src={ props.media } className="fancy-list-img" alt="#" />
                <div className="service-detail align-self-center">
                    { props.children }
                </div>
            </div>

        </>
    );
};

export default Index;
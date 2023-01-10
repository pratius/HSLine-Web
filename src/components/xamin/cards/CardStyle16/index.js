import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="col-lg col-md-6 ">
                <div className="fancybox-userbehavior wow fadeInUp  text-left">
                    <h6 className="mb-2">{props.title}</h6>
                    <div className="analytics-icon"> <img aria-hidden="true" src={props.icon}></img> </div>
                </div>
            </div>
</>
    );
};

export default Index;

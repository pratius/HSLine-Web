import React from 'react';

const Index = (props) => {

    return (
        <>
            
            <div className="fancy_service style2 wow fadeInUp  text-left">
                    <div className="bg_img"> 
                        <img className="bg_img-img" src="./assets/images/fancybox/bg-7-2.png" alt="fancybox" />
                    </div>
                    <div className="fancy_block">
                        <div className="fancy-info">
                            <h4 className="mt-4 mb-3 title">{props.title}</h4>
                            <p className="text-dark">{props.text}</p>
                            <a className="button blue-btn" href="#"><span className="btn-effect"> Find Out More</span></a>
                        </div>
                        <div className="fancy_img">
                            <img src={props.fancy_img} alt="fancybox" />
                        </div>
                    </div>
                </div>
            
        </>
    );
};

export default Index;

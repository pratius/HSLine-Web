import React from 'react';

const Index = (props) => {

    return (
        <>
                <div className={"consult-services  xamin-square wow fadeInUp  text-left" +props.mainClass} >
                { props.mainClass ? (<div className="arrow_img">
                         <img className="arrow-img" src="./assets/images/fancybox/arrow-7.png" alt="fancybox"/>
                     </div>) : ''}
                     
                <div className="square-effect bg">
                    <img src={props.img} alt="fancybox" />
                        <div className="arrowbg_img">
                            <img src="./assets/images/fancybox/bg-7-1.png" alt="fancybox" />
                         </div>
                </div>
                <h5 className="mb-2">{props.title}</h5>
                <p className="mb-0">{props.text}</p>
                </div>
        </>
    );
};

export default Index;

import React from 'react';

const Index = (props) => {

    return (
        <>
                <li className={props.class}>
                    <a>
                        <i className= {props.icon}></i>
                        <span className="header"> {props.heading}</span>
                        <span className="content">:{props.text}</span>
                    </a>
                </li>
        </>
    );
};

export default Index;
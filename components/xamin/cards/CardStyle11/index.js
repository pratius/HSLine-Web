import React from 'react';

const Index = (props) => {

    return (
        <>
               <ul>
                    <li className={props.liClass}>
                        <a href="#">{props.link}</a>
                        <span className={props.spanClass}> {props.count} </span>
                    </li>
               </ul>
        </>
    );
};

export default Index;

import React from 'react';

const Index = (props) => {
    let list=props.items;
    return (
        <>
            <div className={props.text}>
                <ul className={"iq-list "+(props.className ? props.className : '') }>
                    {list.map((item,index) => (
                        <li key={index}><i className="fa fa-check-square-o"></i> <span>{item}</span></li>
                    ))}
                </ul>
            </div>
        </>
    );
};
export default Index;
import React from 'react';

const Index = (props) => {
    return (
        <>
                <p>{props.text}</p>
                <div className=" text-left  ">
                    <a className="button button-icon" href="#">
                        <span className="btn-effect"> {props.buttonname}</span>
                    </a>
                </div>
        </>
    );
}

export default Index;

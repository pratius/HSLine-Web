import React from 'react';

const Index = (props) => {

    return (
        <>
                    <div className= {props.imgClass}>
                        <img src= {props.media} alt="card" />
                    </div>
                    <h5 className="mb-2">{ props.title }</h5>
                    <p className="mb-0">{ props.text }</p>
        </>
    );
};
export default Index;
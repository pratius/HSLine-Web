import React from 'react';

const Index = (props) => {

    return (
        <>
             <section className={"position-relative "+props.className} id="how-it-works">
                <div className="container">
                    <div className= "row" >
                        { props.children }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
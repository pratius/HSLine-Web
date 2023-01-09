import React from 'react';

const Index = (props) => {

    return (
        <>
          <section className="xamin-custom-bg">
                <div className="container">
                        { props.children }
                </div>
            </section>
        </>
    );
};

export default Index;
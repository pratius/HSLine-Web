import React from 'react';

const Index = (prop) => {
    return (
        <div className={prop.className} style={{backgroundImage: `url(` + prop.bgImage + `)`}}>
            {prop.children}
        </div>
    );
};

export default Index;
import React from 'react';

const Index = (props) => {

    return (
        <>
            
                <div className="container">
                    <div className="row iq-how-it-works">
                        { props.children }
                        <div className="iq-objectsnew">
                            <span className="iq-objects-02" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-100px);">
                                <img src="./assets/images/drive/03.png" className="img-fluid" alt="drive02" />
                            </span>
                            <span className="iq-objects-03" data-bottom="transform:translatex(50px)"
                                  data-top="transform:translatex(-100px);">
                                <img src="./assets/images/drive/04.png" className="img-fluid" alt="drive02" />
                            </span>
                            <span className="iq-objects-04 iq-fadebounce">
                                <span className="iq-round" />
                            </span>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Index;
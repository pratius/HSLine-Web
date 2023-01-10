import React from 'react';

const Index = (props) => {

    return (
        <>
            <section className={props.className}>
                 <div className="container">
                    <div className="row iq-how-it-works">
                        <div className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow">
                             <img alt="" className="single_image-img attachment-full" height="954"  src={props.img} width="1260" />
                        </div>
                            {props.children}
                       
                    </div>
                 </div>
            </section>
        </>
    );
};

export default Index;
import React from 'react';
import Link from "next/link";

const Index = (props) => {
    let items=props.breadcrumb;
    return (
        <>
            <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 text-left align-self-center">
                            <nav aria-label="breadcrumb" className="text-left">
                                <h2 className="title">{props.title}</h2>
                                <ol className="breadcrumb main-bg">
                                    { items.map((item,index) => (
                                        <li key={index} className={"breadcrumb-item "+(item.active ? "active" : '')}><Link  href={item.href}><a>{item.title}</a></Link></li>
                                    )) }
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight">
                            <img alt="banner"
                                 className="img-fluid float-right"
                                 src={props.image} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
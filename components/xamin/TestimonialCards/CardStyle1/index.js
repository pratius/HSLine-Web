import React from 'react';
import Link from "next/link";

const Index = (props) => {

    return (
        <>
            <div className="iq-team">
                <div className="iq-team-img">
                    <img src={props.image} className="img-fluid" alt="#1" />
                </div>
                <div className="iq-share">
                    <div className="slideouticons">
                        <label className="mainlabel"><i className="fa fa-share-alt"></i></label>
                        <div className="iconswrapper">
                            <ul>
                                { props.share.map((item,index) => (
                                    <li><Link href={item.link}><a ><i className={item.className}></i></a></Link></li>
                                )) }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="iq-team-info text-center">
                    <a> <h5>{props.title}</h5> </a>
                    <span>{props.subtitle}</span>
                </div>
            </div>
        </>
    );
};
export default Index;
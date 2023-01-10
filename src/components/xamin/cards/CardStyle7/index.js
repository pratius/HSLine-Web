import React from 'react';
import Link from "next/link";

const Index = (props) => {

    return (
        <>
                <div className={props.colClass}>
                    <div className={props.mainclass}>
                            <div className={"iq-blog-box "+props.blogBoxClass}>
                                <div className="iq-blog-image">
                                        <img alt="#"  src={props.img} />
                                        <ul className="iq-blogtag"><li><a href="#">{props.linkname}</a></li></ul>
                                </div>
                                <div className="iq-blog-detail">
                                    <div className="iq-blog-meta">
                                        <ul><li className="list-inline-item"> <a><time className="entry-date published updated" >{props.time}</time></a></li></ul>
                                    </div>
                                    <div className ="blog-title"><a href="#"><h4 className="entry-title">{props.title}</h4></a></div>
                                    <div className="blog-content"> 
                                        <p>{props.desc}</p>
                                        {props.children}
                                    </div>
                                    <div className="blog-button"><Link href="/blog-details"><a className="button-link" >Read More<i className="fa fa-angle-right" aria-hidden="true"></i></a></Link></div>

                                </div>
                            </div>
                    </div>
            </div>
        </>
    );
};

export default Index;
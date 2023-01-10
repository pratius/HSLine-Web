import React from 'react';
import Link from "next/link";

const Index = (props) => {

    return (
        <>
                <li>
                    <div className={"post-img"}>
                        <img width="150" height="150" src={props.img} alt="" />
                        <div className="post-blog">
                            <div className="blog-box">
                                <ul className="list-inline">
                                    <li className="list-inline-item  mr-3"><Link href="/blog-details"><a > <i className="fa fa-calendar mr-2" aria-hidden="true"></i>{props.time}</a></Link> </li>
                                </ul>
                                <Link href="/blog-details">
                                <a className="new-link" >
                                    <h5>{props.title}</h5>
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
        </>
    );
};

export default Index;

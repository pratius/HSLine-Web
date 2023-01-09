import React from 'react';

const Index = (props) => {

    return (
        <>
                <p className="footer-logo"><img alt="img" src={ props.sectionImage } width="160" /></p>
                <p className="footer-logo">{props.sectionText}</p>
                <ul className="info-share d-inline list-inline">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
        </>
    );
};

export default Index;
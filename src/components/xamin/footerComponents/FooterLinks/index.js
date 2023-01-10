import React from 'react';


const MainList = (props) => {
    const content = props.content;
    return content.map((item, index) => (
        <div key={index} className="menu-footer-menu-container">
            <List section={item.section} />
        </div>
    ));
};

const List = (props) => {
    const content = props.section;
    const list = content.map((list, index) => (
        <li className="menu-item" key={index}>
            <a href={ list.href }>{ list.title }</a>
        </li>
    ));
    return (
        <>
            <ul className="menu">
                { list }
            </ul>
        </>
    );
};

const Index = (props) => {

    return (
        <>
            <h4 className="footer-title">{props.title}</h4>
                <MainList content={props.content} />
        </>
    );
};

export default Index;
import React from 'react';
import Link from 'next/link';
import $ from 'jquery';
import {topMenuBarItems} from "../../../constants/menu";

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
};

const SingleMenu = (props) => {
    let activeMenuItem = '';
    if((typeof props.active) =="object"){
        for(let i=0;i<props.active.length;i++){
            if(props.active[i]==props.href){
                activeMenuItem="current-menu-item";
                break;
            }
        }
    }
    if(props.hasOwnProperty('submenu')){
        let submenu = [];
        for (let i = 0; i < props.submenu.length; i++) {
            if(props.submenu[i].submenu){
                submenu.push(<SingleMenu active={props.active} href={props.submenu[i].href} key={i} title={props.submenu[i].title} submenu={props.submenu[i].submenu}/>);
            }else{
                submenu.push(<SingleMenu active={props.active} href={props.submenu[i].href} key={i} title={props.submenu[i].title}/>);
            }
        }
        return(
            <li className={"menu-item "+ activeMenuItem}>
                <Link href={props.href}><a className="isubmenu">{props.title}</a></Link>
                <i className="fa fa-angle-down toggledrop"></i>
                <ul className="sub-menu">
                    {submenu}
                </ul>
            </li>
        );
    }else{
        return (<li className={"menu-item "+ activeMenuItem} >
            <Link href={props.href} ><a>{props.title}</a></Link>
        </li>);
    }
}

class TopMenuBar extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let headMenu = this.props.headMenuItems;
        let menu =[];
        for(let i=0;i<headMenu.length;i++){
            if(headMenu[i].submenu){
                menu.push(<SingleMenu active={this.props.active} href={headMenu[i].href} key={i} title={headMenu[i].title} submenu={headMenu[i].submenu}/>);
            }else{
                menu.push(<SingleMenu active={this.props.active} href={headMenu[i].href} key={i} title={headMenu[i].title}/>);
            }
        }
        return (
            <ul id="top-menu" className="navbar-nav ml-auto">
                {menu}
            </ul>);
    }
}

const HeaderStyle1 = (props) => {
    return (
        <>
            <header id="main-header" className={ props.className}>
                    <div className="container-fluid sub-header">
                        <div className="row">
                            <div className="col-auto">
                                <div className="number-info">
                                        <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="mailto:support@iqnonicthemes.com"> <i className="fa fa-envelope"></i>support@iqnonicthemes.com</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="tel:+0123456789"> <i className="fa fa-phone"></i>+0123456789</a>
                                        </li>
                                        </ul>
                                </div>
                            </div>
                            <div className="col-auto ml-auto sub-main">
                        <div className="social-icone">
                            <ul className="list-inline">
                                <li className="d-inline">
                                    <a href="#"> <i className="fa fa-facebook-f"></i> </a>
                                </li>
                                <li className="d-inline">
                                    <a href="#"> <i className="fa fa-twitter"></i> </a>
                                </li>
                                <li className="d-inline">
                                    <a href="#"> <i className="fa fa-instagram"></i> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                        </div>
                    </div>
                <div className="container-fluid main-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                
                                <a className="navbar-brand" href="#">
                                    <img className="img-fluid logo" id={ props.styledLogo !== undefined && props.styledLogo ? 'logo_img' : 'new_image' } src={ props.logoImg } alt="#" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="ion-navicon" />
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="menu-main-menu-container">
                                        <TopMenuBar active={props.activeMenu} headMenuItems={topMenuBarItems} />
                                    </div>
                                   
                                </div>
                                
                                <div className="sub-main">
                                    <nav aria-label="breadcrumb">
                                        { props.buttonSection }
                                    </nav>
                                 </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderStyle1;

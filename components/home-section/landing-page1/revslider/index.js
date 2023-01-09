import React from 'react';
import {RevSlider} from "../../../xamin";
import { initRevSlider1 } from '../../../../config/plugins'
class Index extends React.Component{

    componentDidMount () {
        initRevSlider1()
    }

    render() {
        return(
            <>
                <div>
                    <RevSlider
                        revId={"rev_slider_0_1"}
                    >
                        <rs-slide data-key="rs-6" data-title="Slide"
                                  data-anim="ei:d,d,d,d,d,d,d,d,d;eo:d,d,d,d,d,d,d,d,d;s:1000ms,d,d,d,d,d,d,d,d;r:0,0,0,0,0,0,0,0,0;t:fade,grayscale,blurlight,blurstrong,fade,crossfade,fadethroughlight,fadethroughdark,fadethroughtransparent;sl:d,d,d,d,d,d,d,d,d;"
                                  data-firstanim="t:fade;sl:12;">
                            <img src='./assets/revslider/assets/dummy.png' alt="images" title="01" width="1600" height="758"
                                 data-lazyload='./assets/revslider/assets/01-2.jpg' data-parallax="2" className="rev-slidebg" data-no-retina />

                            <h2
                                id="slider-4-slide-6-layer-1"
                                className="rs-layer"
                                data-type="text"
                                data-color="#313e5b"
                                data-rsp_ch="on"
                                data-xy="x:l,l,l,c;xo:95px,20px,37px,0;yo:221px,141px,40px,46px;"
                                data-text="s:48,48,50,42;l:65,65,70,55;fw:700;a:inherit,inherit,inherit,center;"
                                data-frame_0="y:-50;"
                                data-frame_1="st:600;sp:1000;sR:600;"
                                data-frame_999="o:0;tp:600;st:w;sR:7400;"
                                style={{zIndex:9,fontFamily:"Lato",textTransform:"capitalize"}}
                            >Applying Data Science<br /> & Analytics To Life
                            </h2>
                            <p
                                id="slider-4-slide-6-layer-3"
                                className="rs-layer"
                                data-type="text"
                                data-color="#525f81"
                                data-rsp_ch="on"
                                data-xy="x:l,l,l,c;xo:95px,15px,40px,0;y:m;yo:94px,15px,-180px,-102px;"
                                data-text="s:16,16,18,20;l:30;a:inherit,inherit,inherit,center;"
                                data-frame_0="y:-50;"
                                data-frame_1="st:900;sp:1000;sR:900;"
                                data-frame_999="o:0;tp:600;st:w;sR:7100;"
                                style={{zIndex:10,fontFamily:"Karla"}}
                            >It is a long established fact that a reader will be <br /> distracted by the readable content.
                            </p>
                            <a
                                id="slider-4-slide-6-layer-4"
                                className="rs-layer button rev-btn"
                                href='#' target="_self" rel="nofollow"
                                data-type="button"
                                data-xy="xo:95px,15px,40px,60px;y:m;yo:184px,95px,-90px,0;"
                                data-text="s:16,18,20,22;l:24;a:inherit,inherit,inherit,center;"
                                data-wrpcls="blue-btn"
                                data-padding="t:15;r:30;b:15;l:30;"
                                data-border="bor:90px,90px,90px,90px;"
                                data-frame_0="y:-50;"
                                data-frame_1="st:1350;sp:500;sR:1350;"
                                data-frame_999="o:0;tp:600;st:w;sR:7150;"
                                data-frame_hover="skX:0px;skY:0px;c:#fff;bgc:#313e5b;boc:#000;bor:90px,90px,90px,90px;bos:solid;oX:50;oY:50;sp:0;"
                                style={{zIndex:12,backgroundColor:"#437eeb",fontFamily:"Karla",cursor:"pointer",outline:"none",boxShadow:"none",boxSizing:"border-box"}}
                            >About Us
                            </a>
                            <a
                                id="slider-4-slide-6-layer-5"
                                className="rs-layer button blue-btn rev-btn"
                                href='#' target="_self" rel="nofollow"
                                data-type="button"
                                data-xy="x:l,l,l,r;xo:241px,161px,196px,60px;y:m;yo:184px,96px,-90px,0;"
                                data-text="s:16,18,20,22;l:24;a:inherit;"
                                data-padding="t:15;r:30;b:15;l:30;"
                                data-border="bor:90px,90px,90px,90px;"
                                data-frame_0="y:-50;"
                                data-frame_1="st:1350;sp:500;sR:1350;"
                                data-frame_999="x:0;y:0;z:0;sX:1;sY:1;o:1;rX:0;rY:0;rZ:0;skX:0;skY:0;st:w;sp:1000;sR:7150;"
                                data-frame_hover="skX:0px;skY:0px;c:#fff;bgc:#437eeb;boc:#000;bor:90px,90px,90px,90px;bos:solid;oX:50;oY:50;sp:0;"
                                style={{zIndex:11,backgroundColor:"#313e5b",fontFamily:"Karla",cursor:"pointer",outline:"none",boxShadow:"none",boxSizing:"border-box"}}
                            >Contact Us
                            </a>
                            <rs-layer
                                id="slider-4-slide-6-layer-11"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:865px,646px,230px,110px;yo:123px,47px,333px,333px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:494px,361px,338px,234px;h:494px,361px,338px,234px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:1610;sp:1000;sR:1610;"
                                data-frame_999="o:0;st:w;sR:6390;"
                                style={{zIndex:24,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="445" height="445"
                                  data-lazyload='./assets/revslider/assets/01-4.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-12"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:955px,698px,149px,212px;yo:-134px,-135px,275px,335px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:824px,602px,450px,281px;h:818px,598px,447px,279px;"
                                data-frame_1="e:Power4.easeInOut;sp:1500;"
                                data-frame_999="o:0;st:w;sR:7500;"
                                style={{zIndex:8,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="824" height="818"
                                  data-lazyload='./assets/revslider/assets/10-2.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-13"
                                className="rs-pxl-1"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:874px,639px,197px,73px;yo:469px,306px,607px,505px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:129px,94px,93px,58px;h:86px,62px,62px,38px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:2980;sp:1000;sR:2980;"
                                data-frame_999="o:0;st:w;sR:5020;"
                                style={{zIndex:14,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="300" height="200"
                                  data-lazyload='./assets/revslider/assets/03-5.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-14"
                                className="rs-pxl-1"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:842px,615px,181px,58px;yo:463px,301px,600px,496px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:77px,56px,59px,44px;h:51px,37px,39px,29px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:2970;sp:1000;sR:2970;"
                                data-frame_999="o:0;st:8900;sR:5030;"
                                style={{zIndex:16,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="300" height="200"
                                  data-lazyload='./assets/revslider/assets/03-5.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-15"
                                className="rs-pxl-1"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:933px,682px,230px,112px;yo:497px,341px,634px,472px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:77px,56px,71px,44px;h:51px,37px,47px,29px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:2980;sp:1000;sR:2980;"
                                data-frame_999="o:0;st:w;sR:5020;"
                                style={{zIndex:15,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="300" height="200"
                                  data-lazyload='./assets/revslider/assets/03-5.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-16"
                                className="rs-pxl-2"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="x:r;xo:294px,212px,397px,263px;y:b;yo:-8px,173px,80px,12px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:110px,80px,81px,63px;h:73px,53px,54px,42px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:3020;sp:1000;sR:3020;"
                                data-frame_999="o:0;st:w;sR:4980;"
                                data-tloop="u:true;"
                                data-loop_0="xR:10px;yR:10px;"
                                data-loop_999="xR:10px;yR:10px;crd:t;sp:3000;"
                                style={{zIndex:17,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="img" width="300" height="200"
                                  data-lazyload='./assets/revslider/assets/08-3.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-18"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:1099px,803px,424px,283px;yo:521px,358px,686px,503px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:155px,113px,84px,52px;h:103px,75px,56px,34px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:3130;sp:1000;sR:3130;"
                                data-frame_999="o:0;st:w;sR:4870;"
                                style={{zIndex:18,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="300" height="200"
                                  data-lazyload='./assets/revslider/assets/07-4.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-19"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:1172px,874px,456px,72px;yo:456px,296px,558px,481px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:195px,142px,156px,117px;h:130px,95px,104px,78px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:3270;sp:1000;sR:3270;"
                                data-frame_999="o:0;st:w;sR:4730;"
                                style={{zIndex:19,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="300" height="200"
                                  data-lazyload='./assets/revslider/assets/05-4.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-20"
                                className="rs-pxl-3"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:924px,932px,193px,310px;yo:180px,222px,377px,426px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:154px,112px,119px,92px;h:103px,75px,79px,61px;"
                                data-frame_0="y:-50,-36,-26,-16;"
                                data-frame_1="st:3960;sp:1000;sR:3960;"
                                data-frame_999="o:0;st:w;sR:4040;"
                                data-tloop="u:true;"
                                data-loop_999="sX:0.8;sY:0.8;sp:2000;e:Power0.easeInOut;yys:t;yyf:t;"
                                style={{zIndex:26,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="300" height="200"
                                  data-lazyload='./assets/revslider/assets/06-6.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-21"
                                className="rs-pxl-1"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:765px,559px,128px,42px;yo:323px,199px,434px,444px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:156px,114px,116px,72px;h:104px,76px,77px,48px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:3380;sp:1000;sR:3380;"
                                data-frame_999="o:0;st:w;sR:4620;"
                                style={{zIndex:20,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="img" width="300" height="200"
                                  data-lazyload='./assets/revslider/assets/04-5.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-22"
                                className="rs-pxl-3"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:886px,648px,363px,237px;yo:267px,158px,631px,530px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:123px,89px,90px,66px;h:82px,59px,60px,44px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:3720;sp:1000;sR:3720;"
                                data-frame_999="o:0;st:w;sR:4280;"
                                data-tloop="u:true;"
                                data-loop_0="y:-10;"
                                data-loop_999="y:10;crd:t;sp:5000;e:Sine.easeInOut;yym:t;"
                                style={{zIndex:22,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="300" height="200"
                                  data-lazyload='./assets/revslider/assets/09-3.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-23"
                                className="rs-pxl-1"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:1220px,892px,458px,124px;yo:264px,156px,446px,417px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:129px,94px,70px,43px;h:86px,62px,46px,28px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:3480;sp:1000;sR:3480;"
                                data-frame_999="o:0;st:w;sR:4520;"
                                style={{zIndex:21,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="300" height="200"
                                  data-lazyload='./assets/revslider/assets/03-5.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-24"
                                className="rs-pxl-1"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:1279px,935px,491px,136px;yo:312px,191px,473px,398px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:77px,56px,41px,57px;h:51px,37px,27px,38px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:2280;sp:1000;sR:2280;"
                                data-frame_999="o:0;st:w;sR:5720;"
                                style={{zIndex:13,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="300" height="200"
                                  data-lazyload='./assets/revslider/assets/03-5.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-25"
                                className="rs-pxl-2"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:1111px,923px,452px,271px;yo:130px,85px,308px,338px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:151px,110px,112px,77px;h:151px,110px,112px,77px;"
                                data-frame_0="y:top;"
                                data-frame_1="st:4080;sp:1000;sR:4080;"
                                data-frame_999="o:0;st:w;sR:3920;"
                                data-tloop="u:true;"
                                data-loop_0="y:-10;"
                                data-loop_999="y:10;sp:6000;e:Sine.easeInOut;yym:t;"
                                style={{zIndex:23,fontFamily:"Roboto"}}
                            ><img src='./assets/revslider/assets/dummy.png' alt="images" width="200" height="200"
                                  data-lazyload='./assets/revslider/assets/02.png' data-no-retina />
                            </rs-layer>
                            <rs-layer
                                id="slider-4-slide-6-layer-26"
                                data-type="image"
                                data-rsp_ch="on"
                                data-xy="xo:1077px,806px,369px,207px;yo:245px,139px,417px,388px;"
                                data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                                data-dim="w:120px,87px,96px,69px;h:118px,86px,94px,68px;"
                                data-frame_0="x:175%;o:1;"
                                data-frame_0_mask="u:t;x:-100%;"
                                data-frame_1="e:Power3.easeOut;st:4610;sp:1000;sR:4610;"
                                data-frame_1_mask="u:t;"
                                data-frame_999="o:0;st:w;sR:3390;"
                                style={{zIndex:25,fontFamily:"Roboto"}}
                            >
                                <img src='./assets/revslider/assets/dummy.png' alt="images" width="172" height="169"
                                     data-lazyload='./assets/revslider/assets/11.png' data-no-retina />
                            </rs-layer>
                        </rs-slide>
                    </RevSlider>
                </div>
            </>
        );
    }
}

export default Index;
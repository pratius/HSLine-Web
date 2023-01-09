import React from 'react';
import {RevSlider} from "../../../xamin";
import { initRevSlider6 } from '../../../../config/plugins'
class Index extends React.Component{
   componentDidMount() {
      initRevSlider6()
   }
    render() {
        return(
            <>
                <div className="iq-banner">
                    <RevSlider
                        revId={"rev_slider_6_1"}
                    >
                         <rs-slide data-key="rs-2" data-title="Slide" data-anim="ei:d,d,d,d,d,d,d,d,d;eo:d,d,d,d,d,d,d,d,d;s:1000ms,d,d,d,d,d,d,d,d;r:0,0,0,0,0,0,0,0,0;t:fade,grayscale,blurlight,blurstrong,fade,crossfade,fadethroughlight,fadethroughdark,fadethroughtransparent;sl:d,d,d,d,d,d,d,d,d;" data-firstanim="t:fade;sl:12;">
                     <img src="./assets/revslider/assets_slider7/dummy.png" title="demo6_revolution_bg" width="1600" height="828" data-lazyload="./assets/revslider/assets_slider7/demo6_revolution_bg.png" data-bg="f:100% 100%;" data-parallax="2" className="rev-slidebg" data-no-retina />
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-5" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:594px,433px,326px,203px;y:m;yo:-50px,12px,19px,4px;"
                        data-text="w:normal;s:16,11,8,16;l:25,18,13,20;fw:700;a:center;"
                        data-dim="w:45px,32px,23px,30px;h:45px,32px,23px,30px;"
                        data-padding="t:10,7,5,3;b:10,7,5,3;"
                        data-border="bos:solid;boc:#d4d4d4;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2000;sp:1000;sR:2000;"
                        data-frame_999="o:0;st:w;sR:6000;"
                        style={{zIndex:20,backgroundColor:"#ffffff",fontFamily:"Lato"}}
                        >2 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-6" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:591px,434px,325px,202px;y:m;yo:-250px,-125px,-79px,-89px;"
                        data-text="w:normal;s:16,11,8,16;l:25,18,13,20;fw:700;a:center;"
                        data-dim="w:45px,32px,23px,30px;h:45px,32px,23px,30px;"
                        data-padding="t:10,7,5,3;b:10,7,5,3;"
                        data-border="bos:solid;boc:#d4d4d4;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2000;sp:1000;sR:2000;"
                        data-frame_999="o:0;st:w;sR:6000;"
                        style={{zIndex:19,backgroundColor:"#ffffff",fontFamily:"Lato"}}
                        >3 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-7" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:593px,434px,326px,201px;y:m;yo:150px,162px,132px,99px;"
                        data-text="w:normal;s:16,11,8,16;l:25,18,13,20;fw:700;a:center;"
                        data-dim="w:45px,32px,23px,30px;h:45px,32px,23px,30px;"
                        data-padding="t:10,7,5,3;b:10,7,5,3;"
                        data-border="bos:solid;boc:#d4d4d4;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;"
                        data-frame_0="x:0,0,0,0px;y:0,0,0,0px;sX:0.8;sY:0.8;"
                        data-frame_1="x:0,0,0,0px;y:0,0,0,0px;e:Power4.easeOut;st:2000;sp:1000;sR:2000;"
                        data-frame_999="o:0;st:w;sR:6000;"
                        style={{zIndex:17,backgroundColor:"#ffffff",fontFamily:"Lato"}}
                        >1 
                     </rs-layer>
                    
                     {/* <rs-layer
                        id="slider-2-slide-2-layer-8" 
                        data-type="text"
                        data-color="#566384"
                        data-rsp_ch="on"
                        data-xy="x:r;xo:-50px,13px,10px,6px;y:b;yo:125px,92px,52px,32px;"
                        data-text="w:normal;s:16,16,16,9;l:25,18,13,8;fw:700;a:right;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2000;sp:1000;sR:2000;"
                        data-frame_999="o:0;st:w;sR:6000;"
                        style={{zIndex:22,fontFamily:"Lato"}}
                        >Low 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-9" 
                        data-type="text"
                        data-color="#566384"
                        data-rsp_ch="on"
                        data-xy="x:r;xo:-50px,13px,9px,5px;yo:90px,74px,55px,34px;"
                        data-text="w:normal;s:16,16,16,9;l:25,18,13,8;fw:700;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2000;sp:1000;sR:2000;"
                        data-frame_999="o:0;st:w;sR:6000;"
                        style={{zIndex:23,fontFamily:"Lato"}}
                        >High 
                     </rs-layer> */}
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-10" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:69px,50px,37px,23px;yo:466px,340px,254px,158px;"
                        data-text="w:normal;s:20,16,14,16;l:25,18,13,20;fw:700;"
                        data-dim="w:314px,229px,171px,106px;"
                        data-frame_1="e:Power4.easeInOut;st:900;sp:1200;sR:900;"
                        data-frame_1_sfx="se:blocktoright;"
                        data-frame_999="o:0;st:w;sR:6900;"
                        style={{zIndex:9,fontFamily:"Karla"}}
                        >Top Drivers For Analytics 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-11" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:69px,50px,37px,20px;yo:545px,398px,298px,211px;"
                        data-text="w:normal;s:20,16,14,14;l:25,18,13,20;fw:700;"
                        data-frame_0="x:0,0,0,0px;y:0,0,0,0px;"
                        data-frame_1="x:0,0,0,0px;y:0,0,0,0px;e:Power4.easeInOut;st:1200;sp:1200;sR:1200;"
                        data-frame_1_sfx="se:blocktoright;"
                        data-frame_999="o:0;st:w;sR:6600;"
                        style={{zIndex:10,fontFamily:"Karla"}}
                        >01. Intelligence & Data
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-12" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:69px,50px,37px,19px;yo:580px,424px,317px,262px;"
                        data-text="w:normal;s:18,14,12,12;l:25,18,13,20;fw:700;"
                        data-frame_1="e:Power4.easeInOut;st:1500;sp:1000;sR:1500;"
                        data-frame_1_sfx="se:blocktoright;"
                        data-frame_999="o:0;st:w;sR:6500;"
                        style={{zIndex:11,fontFamily:"Karla"}}
                        >Lorem ipsum dolor sit amet, consectetur <br />adipiscingelit, sed do eiusmod tempor 
                     </rs-layer>
                    
                     {/* <rs-layer
                        id="slider-2-slide-2-layer-13" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:69px,50px,27px,26px;y:b;yo:86px,62px,15px,18px;"
                        data-text="w:normal;s:16,16,16,12;l:25,18,13,8;fw:700;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2000;sp:1000;"
                        data-frame_999="o:0;st:w;sR:6700;"
                        style={{zIndex:24,fontFamily:"Lato"}}
                        >Instagram  
                     </rs-layer> */}
                    
                     {/* <rs-layer
                        id="slider-2-slide-2-layer-14" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:150px,140px,113px,88px;y:b;yo:86px,62px,16px,17px;"
                        data-text="w:normal;s:16,16,16,12;l:25,18,13,8;fw:700;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2000;sp:1000;"
                        data-frame_999="o:0;st:w;sR:6700;"
                        style={{zIndex:25,fontFamily:"Lato"}}
                        >Facebook 
                     </rs-layer>
                     */}
                     <rs-layer
                        id="slider-2-slide-2-layer-15" 
                        data-type="image"
                        data-rsp_ch="on"
                        data-xy="xo:471px,344px,257px,172px;yo:487px,356px,266px,159px;"
                        data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                        data-dim="w:56px,40px,29px,18px;h:437px,319px,238px,148px;"
                        data-vbility="t,t,t,f"
                        data-frame_1="e:Power4.easeInOut;st:2800;sp:1200;sR:2800;"
                        data-frame_1_sfx="se:blocktobottom;"
                        data-frame_999="o:0;st:w;sR:5000;"
                        style={{zIndex:26,fontFamily:"Roboto"}}
                        ><img src="./assets/revslider/assets_slider7/dummy.png" width="56" height="437" data-lazyload="./assets/revslider/assets_slider7/demo6_revolution_03.png" data-no-retina /> 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-16" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:473px,345px,258px,171px;yo:489px,357px,267px,161px;"
                        data-text="w:normal;s:16,11,8,4;l:32,23,17,10;a:center;"
                        data-dim="w:56px,40px,29px,18px;h:56px,40px,29px,18px;"
                        data-vbility="t,t,t,f"
                        data-padding="t:10,7,5,3;r:10,7,5,3;b:10,7,5,3;l:10,7,5,3;"
                        data-border="bos:solid;boc:#68deef;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;"
                        data-frame_0="sX:0.9;sY:0.9;"
                        data-frame_1="st:2850;sp:1000;sR:2850;"
                        data-frame_999="o:0;st:w;sR:5150;"
                        style={{zIndex:27,fontFamily:"Lato"}}
                        ><a href="#" className="iq-video popup-youtube"><i className="fa fa-play"></i></a> 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-17" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:415px,303px,226px,153px;yo:708px,517px,387px,251px;"
                        data-text="w:normal;s:18,13,12,7;l:25,18,13,8;ls:2px,1px,0px,0px;fw:700;"
                        data-vbility="t,t,t,f"
                        data-btrans="rZ:-90;"
                        data-frame_0="sX:0.9;sY:0.9;"
                        data-frame_1="e:Power2.easeInOut;st:2900;sp:1000;sR:2900;"
                        data-frame_999="o:0;st:w;sR:5100;"
                        style={{zIndex:28,fontFamily:"Lato"}}
                        >Watch Our Video 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-18" 
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="xo:616px,447px,334px,214px;yo:600px,511px,382px,299px;"
                        data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                        data-dim="w:200px,146px,109px,68px;h:2px,2px,1px,1px;"
                        data-frame_0="x:-50,-36,-26,-16;"
                        data-frame_1="st:2200;sp:1000;sR:2200;"
                        data-frame_999="o:0;st:w;sR:5800;"
                        style={{zIndex:15,backgroundColor:"#4c5871",fontFamily:"Roboto"}}
                        > 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-19" 
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="xo:611px,443px,331px,215px;yo:404px,363px,271px,205px;"
                        data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                        data-dim="w:450px,329px,246px,153px;h:2px,1px,1px,1px;"
                        data-frame_0="x:-50,-36,-26,-16;"
                        data-frame_1="st:2400;sp:1000;sR:2400;"
                        data-frame_999="o:0;st:w;sR:5600;"
                        style={{zIndex:18,backgroundColor:"#adb2bd",fontFamily:"Roboto"}}
                        > 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-20" 
                        data-type="shape"
                        data-rsp_ch="on"
                        data-xy="xo:614px,447px,334px,227px;yo:202px,227px,170px,113px;"
                        data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                        data-dim="w:631px,461px,345px,215px;h:2px,1px,1px,1px;"
                        data-frame_0="x:-50,-36,-26,-16;"
                        data-frame_1="st:2550;sp:1000;sR:2550;"
                        data-frame_999="o:0;st:w;sR:5450;"
                        style={{zIndex:16,backgroundColor:"#687187",fontFamily:"Roboto"}}
                        > 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-21" 
                        className="rs-pxl-1"
                        data-type="image"
                        data-rsp_ch="on"
                        data-xy="xo:783px,561px,420px,272px;yo:507px,422px,316px,251px;"
                        data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                        data-dim="w:219px,160px,119px,90px;h:220px,160px,119px,90px;"
                        data-frame_0="x:-50,-36,-26,-16;"
                        data-frame_1="st:2300;sp:1000;sR:2300;"
                        data-frame_999="o:0;st:w;sR:5700;"
                        data-loop_999="rZ:360;sp:20000;"
                        style={{zIndex:29,fontFamily:"Roboto"}}
                        ><img src="./assets/revslider/assets_slider7/dummy.png" width="219" height="220" data-lazyload="./assets/revslider/assets_slider7/demo6_revolution_04.png" data-no-retina /> 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-22" 
                        className="rs-pxl-1"
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:837px,604px,441px,284px;yo:586px,479px,361px,285px;"
                        data-text="w:normal;s:24,17,16,14;l:25,18,13,8;fw:900;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2300;sp:1000;sR:2300;"
                        data-frame_999="o:0;st:w;sR:5700;"
                        style={{zIndex:30,fontFamily:"Lato"}}
                        >Reporting 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-23" 
                        className="rs-pxl-1"
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:874px,628px,459px,304px;yo:621px,501px,382px,299px;"
                        data-text="w:normal;s:16,11,14,12;l:25,18,13,8;fw:700;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2300;sp:1000;sR:2300;"
                        data-frame_999="o:0;st:w;sR:5700;"
                        style={{zIndex:31,fontFamily:"Lato"}}
                        >What? 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-24" 
                        className="rs-pxl-2"
                        data-type="image"
                        data-rsp_ch="on"
                        data-xy="xo:968px,677px,507px,315px;yo:287px,280px,209px,161px;"
                        data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                        data-dim="w:238px,174px,130px,87px;h:238px,174px,130px,87px;"
                        data-frame_0="x:-50,-36,-26,-16;"
                        data-frame_1="st:2400;sp:1000;sR:2400;"
                        data-frame_999="o:0;st:w;sR:5600;"
                        data-tloop="u:true;"
                        data-loop_999="rZ:360;sp:20000;"
                        style={{zIndex:32,fontFamily:"Roboto"}}
                        >
                           <img src="./assets/revslider/assets_slider7/dummy.png" width="238" height="238" data-lazyload="./assets/revslider/assets_slider7/demo6_revolution_05.png" data-no-retina /> 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-25" 
                        className="rs-pxl-2"
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:1046px,732px,540px,331px;yo:377px,353px,261px,197px;"
                        data-text="w:normal;s:24,17,16,14;l:25,18,13,8;fw:900;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2400;sp:1000;sR:2400;"
                        data-frame_999="o:0;st:w;sR:5600;"
                        style={{zIndex:33,fontFamily:"Lato"}}
                        >Analysis 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-26" 
                        className="rs-pxl-2"
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:1070px,750px,557px,345px;yo:412px,377px,280px,213px;"
                        data-text="w:normal;s:16,11,14,12;l:25,18,13,8;fw:700;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2400;sp:1000;sR:2400;"
                        data-frame_999="o:0;st:w;sR:5600;"
                        style={{zIndex:34,fontFamily:"Lato"}}
                        >Why? 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-27" 
                        className="rs-pxl-3"
                        data-type="image"
                        data-rsp_ch="on"
                        data-xy="xo:1135px,796px,596px,346px;yo:70px,129px,96px,55px;"
                        data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                        data-dim="w:251px,183px,137px,109px;h:251px,183px,137px,109px;"
                        data-frame_0="x:-50,-36,-26,-16;"
                        data-frame_1="st:2550;sp:1000;sR:2550;"
                        data-frame_999="o:0;st:w;sR:5450;"
                        data-loop_999="rZ:360deg;sp:20000;"
                        style={{zIndex:35,fontFamily:"Roboto"}}
                        ><img src="./assets/revslider/assets_slider7/dummy.png" width="251" height="251" data-lazyload="./assets/revslider/assets_slider7/demo6_revolution_06.png" data-no-retina /> 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-28" 
                        className="rs-pxl-3"
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:1207px,851px,627px,368px;yo:176px,200px,147px,102px;"
                        data-text="w:normal;s:24,17,16,14;l:25,18,13,8;fw:900;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2550;sp:1000;sR:2550;"
                        data-frame_999="o:0;st:w;sR:5450;"
                        style={{zIndex:36,fontFamily:"Lato"}}
                        >Intelligence 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-29" 
                        className="rs-pxl-3"
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:1224px,857px,624px,367px;yo:206px,220px,170px,121px;"
                        data-text="w:normal;s:16,11,14,12;l:25,18,13,8;fw:700;"
                        data-dim="h:auto,auto,auto,12px;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2550;sp:1000;sR:2550;"
                        data-frame_999="o:0;st:w;sR:5450;"
                        style={{zIndex:37,fontFamily:"Lato"}}
                        >Data? 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-32" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:69px,50px,37px,23px;yo:188px,137px,102px,63px;"
                        data-text="w:normal;s:95,69,51,31;l:120,87,65,40;fw:900;"
                        data-frame_1="e:Power4.easeInOut;st:600;sp:1000;sR:600;"
                        data-frame_1_sfx="se:blocktoright;"
                        data-frame_999="o:0;st:w;sR:7400;"
                        style={{zIndex:8,fontFamily:"Lato"}}
                        >Intelligence<br />Data 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-33" 
                        data-type="image"
                        data-rsp_ch="on"
                        data-xy="x:r;xo:-141px,-103px,-78px,-158px;y:b;yo:100px,73px,33px,23px;"
                        data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                        data-dim="w:930px,680px,509px,422px;h:783px,572px,428px,355px;"
                        data-frame_1="e:Power4.easeInOut;st:1800;sp:1000;sR:1800;"
                        data-frame_999="o:0;st:w;sR:6200;"
                        style={{zIndex:12,fontFamily:"Roboto"}}
                        ><img src="./assets/revslider/assets_slider7/dummy.png" width="966" height="813" data-lazyload="./assets/revslider/assets_slider7/demo6_revolution_02.png" data-no-retina /> 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-34" 
                        data-type="image"
                        data-rsp_ch="on"
                        data-xy="x:r;xo:0,-3px,-6px,-82px;y:b;yo:95px,73px,29px,22px;"
                        data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                        data-dim="w:787px,575px,436px,345px;h:798px,583px,442px,350px;"
                        data-frame_1="e:Power4.easeInOut;st:1800;sp:1000;sR:1800;"
                        data-frame_999="o:0;st:w;sR:6200;"
                        data-loop_0="x:-3px;"
                        data-loop_999="x:3px;sp:3000;e:Sine.easeInOut;yym:t;"
                        style={{zIndex:13,fontFamily:"Roboto"}}
                        ><img src="./assets/revslider/assets_slider7/dummy.png" width="791" height="802" data-lazyload="./assets/revslider/assets_slider7/demo6_revolution_01.png" data-no-retina /> 
                     </rs-layer>
                    
                     <rs-layer
                        id="slider-2-slide-2-layer-35" 
                        data-type="text"
                        data-color="#313e5b"
                        data-rsp_ch="on"
                        data-xy="xo:596px,435px,327px,204px;y:m;yo:343px,274px,213px,170px;"
                        data-text="w:normal;s:16,11,8,16;l:25,18,13,20;fw:700;a:center;"
                        data-dim="w:45px,32px,23px,30px;h:45px,32px,23px,30px;"
                        data-padding="t:10,7,5,3;b:10,7,5,3;"
                        data-border="bos:solid;boc:#d4d4d4;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;"
                        data-frame_0="sX:0.8;sY:0.8;"
                        data-frame_1="e:Power4.easeOut;st:2000;sp:1000;sR:2000;"
                        data-frame_999="o:0;st:w;sR:6000;"
                        style={{zIndex:14,backgroundColor:"#ffffff",fontFamily:"Lato"}}
                        >0 
                     </rs-layer>
                    						
                  </rs-slide>
                    </RevSlider>
                </div>
            </>
        );
    }
}

export default Index;
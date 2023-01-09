import React from 'react';
import {RevSlider} from "../../../xamin";
import { initRevSlider4 } from '../../../../config/plugins'
class Index extends React.Component{
	componentDidMount() {
		initRevSlider4()
	}
    render() {
        return(
            <>
                <div>
                    <RevSlider
                        revId={"rev_slider_4_1"}
                    >
                        	<rs-slide data-key="rs-4" data-title="Slide" data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;" data-firstanim="t:fade;sl:12;">
							<img src="./assets/revslider/assets_silder5/dummy.png" data-lazyload="./assets/revslider/assets_silder5/transparent.png" data-bg="c:#f9f9fe;" data-parallax="off" className="rev-slidebg" data-no-retina />
                            <rs-layer
								id="slider-4-slide-4-layer-13" 
								className="rs-pxl-2"
								data-type="text"
								data-color="#263c5c"
								data-rsp_ch="on"
								data-xy="xo:55px,40px,25px,41px;yo:110px,80px,153px,208px;"
								data-text="w:normal;s:150,109,82,50;l:250,182,138,84;fw:900;"
								data-frame_1="e:Power4.easeInOut;st:600;sp:1000;sR:600;"
								data-frame_1_sfx="se:blocktoright;"
								data-frame_999="o:0;st:w;sR:7400;"
								style={{zIndex:9,fontFamily:"Lato",textTransform:"uppercase"}}
							>User 
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-14" 
								className="rs-pxl-3"
								data-type="image"
								data-rsp_ch="on"
								data-xy="x:c;xo:-25px,-18px,2px,11px;y:m;yo:-31px,-22px,7px,13px;"
								data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
								data-dim="w:837px,612px,464px,285px;h:474px,346px,262px,161px;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:1000;sp:1000;sR:1000;"
								data-frame_999="o:0;st:w;sR:7000;"
								data-loop_0="y:-10px;"
								data-loop_999="y:10px;sp:5000;e:Sine.easeInOut;yym:t;"
								style={{zIndex:10,fontFamily:"Roboto"}}
							><img src="./assets/revslider/assets_silder5/dummy.png" width="911" height="516" data-lazyload="./assets/revslider/assets_silder5/bannershap.png" data-no-retina /> 
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-15" 
								className="rs-pxl-5"
								data-type="text"
								data-color="#263c5c"
								data-rsp_ch="on"
								data-xy="x:r;xo:52px,29px,32px,31px;y:b;yo:142px,194px,128px,163px;"
								data-text="w:normal;s:150,109,82,50;l:250,182,138,84;fw:900;a:right;"
								data-frame_1="e:Power4.easeInOut;st:600;sp:1000;sR:600;"
								data-frame_1_sfx="se:blocktoright;"
								data-frame_999="o:0;st:w;sR:7400;"
								style={{zIndex:11,fontFamily:"Lato",textTransform:"uppercase"}}
							>Analysis 
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-16" 
								data-type="text"
								data-color="#263c5c"
								data-rsp_ch="on"
								data-xy="xo:66px,48px,40px,27px;yo:372px,272px,312px,324px;"
								data-text="w:normal;s:16,11,16,16;l:25,18,13,20;ls:3px,2px,1px,0px;fw:700;"
								data-frame_1="st:1700;sR:1700;"
								data-frame_999="o:0;st:w;sR:7000;"
								style={{zIndex:12,fontFamily:"Karla"}}
							>Be Ready To Make Decisions 
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-17" 
								className="rs-pxl-3"
								data-type="image"
								data-rsp_ch="on"
								data-xy="xo:1002px,736px,532px,213px;yo:203px,244px,199px,119px;"
								data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
								data-dim="w:61px,44px,33px,20px;h:61px,44px,33px,20px;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:2000;sp:1000;sR:2000;"
								data-frame_999="o:0;st:w;sR:6000;"
								style={{zIndex:13,fontFamily:"Roboto"}}
							><img src="./assets/revslider/assets_silder5/dummy.png" width="61" height="61" data-lazyload="./assets/revslider/assets_silder5/tooltip.png" data-no-retina /> 
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-18" 
								className="rs-pxl-1"
								data-type="text"
								data-color="#263c5c"
								data-rsp_ch="on"
								data-xy="xo:1089px,794px,537px,220px;yo:209px,238px,122px,149px;"
								data-text="w:normal;s:18,13,16,16;l:30,21,15,20;ls:3px,2px,1px,0px;fw:900;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:2300;sp:1000;sR:2300;"
								data-frame_999="o:0;st:w;sR:5700;"
								style={{zIndex:14,fontFamily:"Lato"}}
							>01. Bounce Rate 
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-19" 
								className="rs-pxl-1"
								data-type="text"
								data-color="#263c5c"
								data-rsp_ch="on"
								data-xy="xo:1095px,796px,533px,220px;yo:247px,269px,146px,177px;"
								data-text="w:normal;s:16,11,12,14;l:25,18,16,20;fw:700;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:2300;sp:1000;sR:2300;"
								data-frame_999="o:0;st:w;sR:5700;"
								style={{zIndex:15,fontFamily:"Karla"}}
							>Number of users who leaves the site. 
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-20" 
								className="rs-pxl-3"
								data-type="image"
								data-rsp_ch="on"
								data-xy="xo:493px,369px,293px,274px;yo:531px,486px,411px,470px;"
								data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
								data-dim="w:61px,44px,33px,20px;h:61px,44px,33px,20px;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:2600;sp:1000;sR:2600;"
								data-frame_999="o:0;st:w;sR:5400;"
								style={{zIndex:16,fontFamily:"Roboto"}}
							><img src="./assets/revslider/assets_silder5/dummy.png" width="61" height="61" data-lazyload="./assets/revslider/assets_silder5/tooltip.png" data-no-retina/> 
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-21" 
								className="rs-pxl-1"
								data-type="text"
								data-color="#263c5c"
								data-rsp_ch="on"
								data-xy="xo:341px,263px,139px,127px;yo:595px,536px,464px,502px;"
								data-text="w:normal;s:18,13,16,16;l:30,21,15,20;fw:900;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:2900;sp:1000;sR:2900;"
								data-frame_999="o:0;st:w;sR:5100;"
								style={{zIndex:17,fontFamily:"Lato"}}
							>02. Returning Visitors 
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-22" 
								className="rs-pxl-1"
								data-type="text"
								data-color="#263c5c"
								data-rsp_ch="on"
								data-xy="xo:248px,206px,98px,60px;yo:626px,561px,489px,532px;"
								data-text="w:normal;s:16,11,12,14;l:25,18,13,20;fw:700;a:right;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:2890;sp:1000;sR:2890;"
								data-frame_999="o:0;st:w;sR:5110;"
								style={{zIndex:18,fontFamily:"Karla"}}
							>Number of users re visiting the site.   
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-23" 
								data-type="image"
								data-rsp_ch="on"
								data-xy="x:c;xo:0,0,-22px,-13px;y:m;yo:0,0,-3px,-1px;"
								data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
								data-dim="w:744px,544px,413px,254px;h:744px,544px,413px,254px;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="sp:1000;"
								data-frame_999="o:0;st:w;sR:8000;"
								data-loop_999="rZ:360;sp:30000;"
								style={{zIndex:8,fontFamily:"Roboto"}}
							><img src="./assets/revslider/assets_silder5/dummy.png" width="916" height="916" data-lazyload="./assets/revslider/assets_silder5/bannercircle.png" data-no-retina /> 
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-24" 
								data-type="text"
								data-color="#263c5c"
								data-rsp_ch="on"
								data-xy="xo:-150px,-32px,-24px,-16px;yo:150px,69px,52px,116px;"
								data-text="w:normal;s:16,11,8,12;l:25,18,13,14;ls:3px,2px,1px,0px;fw:700;"
								data-btrans="rZ:-90;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="sp:1000;"
								data-frame_999="o:0;st:w;sR:8000;"
								style={{zIndex:19,fontFamily:"Karla",textTransform:"uppercase"}}
							>#Data Science 
							</rs-layer>
                            <rs-layer
								id="slider-4-slide-4-layer-25" 
								data-type="text"
								data-color="#263c5c"
								data-rsp_ch="on"
								data-xy="x:r;xo:-146px,-36px,-27px,-19px;y:b;yo:136px,95px,72px,84px;"
								data-text="w:normal;s:16,11,8,12;l:25,18,13,14;ls:3px,2px,1px,0px;fw:700;"
								data-dim="w:178px,130px,98px,132px;"
								data-btrans="rZ:-90;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="sp:1000;"
								data-frame_999="o:0;st:w;sR:8000;"
								style={{zIndex:20,fontFamily:"Karla",textTransform:"uppercase"}}
							># Data analysis 
                            </rs-layer>
                        </rs-slide>
                    </RevSlider>
                </div>
            </>
        );
    }
}

export default Index;
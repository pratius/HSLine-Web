import React from 'react';
import { RevSlider } from "../../../xamin";
import { initRevSlider5 } from '../../../../config/plugins'

class Index extends React.Component{
	componentDidMount() {
		initRevSlider5()
	}
    render() {
        return(
            <>
                <div>
                    <RevSlider
                        revId={"rev_slider_5_1"}
                    >
                        		<rs-slide data-key="rs-3" data-title="Slide" data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;" data-firstanim="t:fade;sl:12;">
							<img src="./assets/revslider/assets_slider6/dummy.png" title="demo5-rev-bg" width="1600" height="896" data-lazyload="./assets/revslider/assets_slider6/demo5-rev-bg.png" data-parallax="off" className="rev-slidebg" data-no-retina />

							<rs-layer
								id="slider-3-slide-3-layer-6" 
								data-type="text"
								data-color="#313e5b"
								data-rsp_ch="on"
								data-xy="xo:-185px,-73px,-66px,-40px;yo:342px,572px,265px,281px;"
								data-text="w:normal;s:16,11,16,9;l:20,14,20,12;fw:700;"
								data-dim="w:278px,203px,100px,61px;h:auto,auto,98px,60px;"
								data-vbility="t,t,t,f"
								data-btrans="rZ:90;"
								data-frame_999="o:0;st:w;"
								style={{zIndex:14,fontFamily:"Lato"}}
							> Follow  Us  On: </rs-layer>
							<rs-layer
								id="slider-3-slide-3-layer-8" 
								data-type="text"
								data-color="#437eeb"
								data-rsp_ch="on"
								data-xy="xo:-70px,14px,8px,4px;y:m;yo:-10px,163px,131px,80px;"
								data-text="w:normal;s:16,11,16,9;l:25,18,20,12;a:center;"
								data-dim="w:40px,29px,30px,18px;h:40px,29px,30px,18px;"
								data-vbility="t,t,t,f"
								data-padding="t:10,7,5,3;r:10,7,5,3;b:10,7,5,3;l:10,7,5,3;"
								data-border="bor:90px,90px,90px,90px;"
								data-frame_999="o:0;st:w;"
								data-frame_hover="c:#fff;bgc:#437eeb;bor:90px,90px,90px,90px;"
								style={{zIndex:16,backgroundColor:"#ebecf6",fontFamily:"Roboto"}}
							><a className="text-center"><i className="fab fa-twitter"></i></a> </rs-layer>
							<rs-layer
								id="slider-3-slide-3-layer-9" 
								data-type="text"
								data-color="#437eeb"
								data-rsp_ch="on"
								data-xy="xo:-70px,17px,10px,8px;y:m;yo:-60px,206px,167px,109px;"
								data-text="w:normal;s:16,11,16,9;l:25,18,20,12;ls:1px,0px,0px,0px;a:center;"
								data-dim="w:40px,29px,30px,18px;h:40px,29px,30px,18px;"
								data-vbility="t,t,t,f"
								data-padding="t:10,7,5,3;r:10,7,5,3;b:10,7,5,3;l:10,7,5,3;"
								data-border="bor:90px,90px,90px,90px;"
								data-frame_999="o:0;st:w;"
								data-frame_hover="c:#fff;bgc:#437eeb;bor:90px,90px,90px,90px;"
								style={{zIndex:17,backgroundColor:"#ebecf6",fontFamily:"Lato"}}
							><a className="text-center "><i className="fab fa-instagram"></i></a></rs-layer>
							<rs-layer
								id="slider-3-slide-3-layer-10" 
								data-type="text"
								data-color="#437eeb"
								data-rsp_ch="on"
								data-xy="xo:-70px,13px,9px,7px;yo:324px,558px,381px,349px;"
								data-text="w:normal;s:16,11,16,9;l:25,18,20,12;a:center;"
								data-dim="w:40px,29px,30px,18px;h:40px,29px,30px,18px;"
								data-vbility="t,t,t,f"
								data-padding="t:10,7,5,3;r:10,7,5,3;b:10,7,5,3;l:10,7,5,3;"
								data-border="bor:90px,90px,90px,90px;"
								data-frame_999="o:0;st:w;"
								style={{zIndex:18,backgroundColor:"#eaebf5",fontFamily:"Lato"}}
							><a className="text-center"><i className="fab fa-facebook"></i></a></rs-layer>
							<rs-layer
								id="slider-3-slide-3-layer-13" 
								data-type="image"
								data-rsp_ch="on"
								data-xy="xo:99px,72px,54px,33px;yo:-900px,-658px,-499px,-307px;"
								data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
								data-dim="w:1385px,1013px,769px,473px;h:1376px,1006px,764px,470px;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="sp:1000;"
								data-frame_999="o:0;st:w;sR:8000;"
								data-tloop="u:true;"
								data-loop_999="rZ:90deg;sp:10000;"
								style={{zIndex:8,fontFamily:"Roboto"}}
							><img src="./assets/revslider/assets_slider6/dummy.png" width="1418" height="1406" data-lazyload="./assets/revslider/assets_slider6/demo5-rev-01.png" data-no-retina /> 
							</rs-layer>
							<rs-layer
								id="slider-3-slide-3-layer-14" 
								data-type="text"
								data-color="#313e5b"
								data-rsp_ch="on"
								data-xy="x:c;xo:65px,59px,47px,9px;yo:144px,167px,88px,68px;"
								data-text="w:normal;s:48,48,42,30;l:70,60,50,60;fw:700;a:center;"
								data-frame_0="y:50;"
								data-frame_1="st:600;sp:1000;"
								data-frame_999="o:0;st:w;sR:4300;"
								style={{zIndex:9,fontFamily:"Lato",textTransform:"capitalize"}}
							>Changing the way you think <br />About Data 	</rs-layer>
							<rs-layer
								id="slider-3-slide-3-layer-15" 
								data-type="image"
								data-rsp_ch="on"
								data-xy="x:c;xo:64px,57px,27px,3px;y:b;yo:-35px,10px,-22px,52px;"
								data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
								data-dim="w:911px,766px,578px,435px;h:614px,516px,389px,293px;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:1000;sp:1000;sR:1000;"
								data-frame_999="o:0;st:w;sR:7000;"
								style={{zIndex:10,fontFamily:"Roboto"}}
							><img src="./assets/revslider/assets_slider6/dummy.png" data-lazyload="./assets/revslider/assets_slider6/demo5-rev-02.png" data-no-retina /> 
							</rs-layer><rs-layer
								id="slider-3-slide-3-layer-16" 
								className="rs-pxl-1"
								data-type="image"
								data-rsp_ch="on"
								data-xy="xo:1027px,761px,553px,324px;y:b;yo:0,55px,10px,47px;"
								data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
								data-dim="w:200px,146px,110px,94px;h:378px,276px,209px,177px;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:1400;sp:1000;sR:1400;"
								data-frame_999="o:0;st:w;sR:6600;"
								data-loop_0="y:-10;"
								data-loop_999="y:10;sp:6000;e:Sine.easeInOut;yym:t;"
								style={{zIndex:11,fontFamily:"Roboto"}}
						><img src="./assets/revslider/assets_slider6/dummy.png" data-lazyload="./assets/revslider/assets_slider6/demo5-rev-03.png" data-no-retina /> 
							</rs-layer><rs-layer
								id="slider-3-slide-3-layer-17" 
								className="rs-pxl-1"
								data-type="image"
								data-rsp_ch="on"
								data-xy="xo:139px,103px,42px,-27px;yo:415px,495px,319px,315px;"
								data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
								data-dim="w:470px,343px,260px,213px;h:391px,285px,216px,177px;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:1800;sp:1000;sR:1800;"
								data-frame_999="o:0;st:w;sR:6200;"
								data-loop_0="x:-10px;"
								data-loop_999="x:10px;sp:3000;e:Sine.easeInOut;yym:t;"
								style={{zIndex:12,fontFamily:"Roboto"}}
						><img src="./assets/revslider/assets_slider6/dummy.png" width="521" height="433" data-lazyload="./assets/revslider/assets_slider6/demo5-rev-04-1.png" data-no-retina /> 
							</rs-layer><rs-layer
								id="slider-3-slide-3-layer-18" 
								className="rs-pxl-2"
								data-type="image"
								data-rsp_ch="on"
								data-xy="xo:921px,623px,495px,281px;yo:140px,177px,82px,171px;"
								data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
								data-dim="w:434px,451px,342px,218px;h:376px,391px,297px,189px;"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:2200;sp:1000;sR:2200;"
								data-frame_999="o:0;st:w;sR:5800;"
								data-tloop="u:true;"
								data-loop_0="x:-10px;"
								data-loop_999="x:10px;sp:3000;e:Sine.easeInOut;yym:t;"
								style={{zIndex:13,fontFamily:"Roboto"}}
						><img src="./assets/revslider/assets_slider6/dummy.png" data-lazyload="./assets/revslider/assets_slider6/demo5-rev-05.png" data-no-retina /> 
							</rs-layer>
						</rs-slide>
                    </RevSlider>
                </div>
            </>
        );
    }
}

export default Index;
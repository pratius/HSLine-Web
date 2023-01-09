import React from 'react';
import {RevSlider} from "../../../xamin";
import { initRevSlider10 } from '../../../../config/plugins'
class Index extends React.Component{
	componentDidMount() {
		initRevSlider10();
	}
    render() {
        return(
            <>
                <div>
                    <RevSlider
                        revId={"rev_slider_10_1"}
                    >
						<rs-slide data-key="rs-7" data-title="Slide" data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;">
							<img src="./assets/revslider/assets_slider10/transparent.png" className="rev-slidebg" data-no-retina />
								<rs-layer
									id="slider-7-slide-7-layer-0"
									data-type="image"
									data-rsp_ch="on"
									data-xy="x:r;xo:-188px;y:-166px;"
									data-text="w:normal;"
									data-dim="w:830px;h:905px;"
									data-frame_999="o:0;st:w;sR:8700;"
									style={{zIndex:10,fontFamily:"Roboto"}}
								>
									<img src="./assets/revslider/assets_slider10/xamin-d10-01.png" width="1358" height="1348" data-no-retina />
								</rs-layer>
							<h1
								id="slider-7-slide-7-layer-1"
								className="rs-layer"
								data-type="text"
								data-color="#313e5b"
								data-rsp_ch="on"
								data-xy="x:100px;y:173px;"
								data-text="w:normal;s:100;l:110;fw:700;"
								data-frame_1="e:Power4.easeInOut;st:600;sp:1200;sR:600;"
								data-frame_1_sfx="se:blocktoright;"
								data-frame_999="o:0;st:w;sR:7200;"
								style={{zIndex:11,fontFamily:"Lato"}}
							>Data Visualization Software
							</h1>
							<rs-layer
									id="slider-7-slide-7-layer-2"
									data-type="text"
									data-color="#313e5b"
									data-rsp_ch="on"
									data-xy="x:105px;y:302px;"
									data-text="w:normal;s:16;l:22;"
									data-frame_1="e:Power4.easeInOut;st:600;sp:1200;sR:600;"
									data-frame_1_sfx="se:blocktoright;"
									data-frame_999="o:0;st:w;sR:7200;"
									style={{zIndex:12,fontFamily:"Lato"}}
								>
									The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using <br />Content here, content here', making it look like readable English.<br/> <br/>
								</rs-layer>
								<rs-layer
									id="slider-7-slide-7-layer-3"
									data-type="image"
									data-rsp_ch="on"
									data-xy="x:r;xo:170px;y:b;yo:-12px;"
									data-text="w:normal;"
									data-dim="w:788px;h:513px;"
									data-frame_1="e:Power4.easeInOut;st:1820;sp:1200;sR:1820;"
									data-frame_1_sfx="se:blocktoright;"
									data-frame_999="o:0;st:w;sR:5980;"
									style={{zIndex:13,fontFamily:"Roboto"}}
								>
									<img src="./assets/revslider/assets_slider10/xamin-d10-02.png" width="902" height="587" data-no-retina />
								</rs-layer>
								<rs-layer
									id="slider-7-slide-7-layer-4"
									data-type="button"
									data-color="#313e5b"
									data-rsp_ch="on"
									data-xy="x:100px;y:c;yo:-41px;"
									data-text="w:normal;l:60;a:center;"
									data-dim="w:60px;h:60px;minw:60px;minh:60px;"
									data-border="bos:solid;boc:#313e5b;bow:1px,1px,1px,1px;bor:50%,50%,50%,50%;"
									data-frame_0="sX:0.9;sY:0.9;"
									data-frame_1="st:650;sp:1000;sR:650;"
									data-frame_999="o:0;st:w;sR:7350;"
									style={{zIndex:14,backgroundColor:"#eff1fe",fontFamily:"Lato",textTransform:"uppercase"}}
								>
									<i className="fa-play"></i>
								</rs-layer>
								<rs-layer
									id="slider-7-slide-7-layer-5"
									data-type="image"
									data-rsp_ch="on"
									data-xy="x:1px;"
									data-text="w:normal;"
									data-dim="w:1288px;h:730px;"
									data-frame_999="o:0;st:w;sR:8700;"
									style={{zIndex:8,fontFamily:"Roboto"}}
								>
									<img src="./assets/revslider/assets_slider10/xamin-d10-03.png" width="1323" height="750" data-no-retina />
								</rs-layer>
								<rs-layer
									id="slider-7-slide-7-layer-6"
									data-type="image"
									data-rsp_ch="on"
									data-xy="x:c;xo:-182px;y:b;yo:171px;"
									data-text="w:normal;"
									data-dim="w:179px;h:223px;"
									data-frame_1="e:Power4.easeInOut;st:1820;sp:1200;sR:1820;"
									data-frame_1_sfx="se:blocktoright;"
									data-frame_999="o:0;st:w;sR:5980;"
									style={{zIndex:9,fontFamily:"Roboto"}}
								>
									<img src="./assets/revslider/assets_slider10/xamin-d10-04.png" width="179" height="223" data-no-retina />
								</rs-layer>
								<rs-layer
									id="slider-7-slide-7-layer-10"
									data-type="object"
									data-rsp_ch="on"
									data-xy="x:370px;y:123px;"
									data-text="w:normal;"
									data-frame_999="o:0;st:w;sR:8700;"
									style={{zIndex:15,fontFamily:"Roboto"}}
								>
								</rs-layer>
								<rs-layer
									id="slider-7-slide-7-layer-11"
									data-type="text"
									data-color="#437eeb"
									data-rsp_ch="on"
									data-xy="x:r;xo:92px;y:290px;"
									data-text="w:normal;s:18;l:45;a:center;"
									data-dim="w:45px;h:45px;"
									data-border="bor:90%,90%,90%,90%;"
									data-frame_1="st:2470;sR:2470;"
									data-frame_999="o:0;st:w;sR:6230;"
									data-frame_hover="c:#fff;bgc:#437eeb;bor:90%,90%,90%,90%;"
									style={{zIndex:18,backgroundColor:"#ebecf6",fontFamily:"Lato"}}
								>
									<i className="fa fa-twitter"></i>
								</rs-layer>
								<rs-layer
									id="slider-7-slide-7-layer-12"
									data-type="text"
									data-color="#313e5b"
									data-rsp_ch="on"
									data-xy="x:181px;y:c;yo:-36px;"
									data-text="w:normal;s:16;l:23;fw:700;"
									data-frame_0="sX:0.9;sY:0.9;"
									data-frame_1="st:2230;sp:1000;sR:2230;"
									data-frame_999="o:0;st:w;sR:5770;"
									style={{zIndex:20,fontFamily:"Lato"}}
								>
									Watch Video
								</rs-layer>
								<rs-layer
									id="slider-7-slide-7-layer-13"
									data-type="text"
									data-color="#437eeb"
									data-rsp_ch="on"
									data-xy="x:r;xo:90px;y:350px;"
									data-text="w:normal;s:18;l:45;a:center;"
									data-dim="w:45px;h:45px;"
									data-border="bor:90%,90%,90%,90%;"
									data-frame_1="st:2850;sR:2850;"
									data-frame_999="o:0;st:w;sR:5850;"
									data-frame_hover="c:#fff;bgc:#437eeb;bor:90%,90%,90%,90%;"
									style={{zIndex:17,backgroundColor:"#ebecf6",fontFamily:"Lato"}}
								>
									<i className="fa fa-facebook-f"></i>
								</rs-layer>
								<rs-layer
									id="slider-7-slide-7-layer-14"
									data-type="text"
									data-color="#437eeb"
									data-rsp_ch="on"
									data-xy="x:r;xo:90px;y:410px;"
									data-text="w:normal;s:18;l:45;a:center;"
									data-dim="w:45px;h:45px;"
									data-border="bor:90%,90%,90%,90%;"
									data-frame_1="st:3200;sR:3200;"
									data-frame_999="o:0;st:w;sR:5500;"
									data-frame_hover="c:#fff;bgc:#437eeb;bor:90%,90%,90%,90%;"
									style={{zIndex:16,backgroundColor:"#ebecf6",fontFamily:"Lato"}}
								>
									<i className="fa fa-instagram"></i>
								</rs-layer>
								<rs-layer
									id="slider-7-slide-7-layer-16"
									data-type="text"
									data-color="#313e5b"
									data-rsp_ch="on"
									data-xy="x:r;xo:62px;y:208px;"
									data-text="w:normal;s:18;l:23;fw:700;"
									data-btrans="rZ:-270;"
									data-frame_0="sX:0.9;sY:0.9;"
									data-frame_1="st:2350;sp:1000;sR:2350;"
									data-frame_999="o:0;st:w;sR:5650;"
									style={{zIndex:19,fontFamily:"Lato"}}
								>
									Follow us on:
								</rs-layer>
								<rs-layer
									id="slider-7-slide-7-layer-17"
									data-type="image"
									data-rsp_ch="on"
									data-xy="x:33px;y:b;yo:118px;"
									data-text="w:normal;"
									data-dim="w:379px;h:210px;"
									data-frame_1="e:Power4.easeInOut;st:1820;sp:1200;"
									data-frame_1_sfx="se:blocktoright;"
									data-frame_999="o:0;st:w;sR:6880;"
									style={{zIndex:21,fontFamily:"Roboto"}}
								>
									<img src="./assets/revslider/assets_slider10/xamin-d10-09.png" width="402" height="223" data-no-retina />
								</rs-layer>
						</rs-slide>
                    </RevSlider>
                </div>
            </>
        );
    }
}

export default Index;
import React from 'react';
import {RevSlider} from "../../../xamin";
import { initRevSlider9 } from '../../../../config/plugins'
class Index extends React.Component{
    componentDidMount() {
        initRevSlider9()
    }
    render() {
        return(
            <>
                <div>
                    <RevSlider
                        revId={"rev_slider_9_1"}
                    >
                        <rs-slide data-key="rs-5" data-title="Slide" data-anim="ei:d;eo:d;s:600;r:0;t:fade;sl:0;">
                        <img src="./assets/revslider/assets_slider9/transparent.png" data-bg="c:#f5f6fe;" className="rev-slidebg" data-no-retina />
                        <rs-layer
                            id="slider-5-slide-5-layer-0" 
                            data-type="image"
                            data-rsp_ch="on"
                            data-xy="x:r;xo:262px;y:148px;"
                            data-text="w:normal;"
                            data-dim="w:419px;h:480px;"
                            data-frame_1="e:Power4.easeInOut;st:1740;sp:1200;sR:1740;"
                            data-frame_1_sfx="se:blocktoright;"
                            data-frame_999="o:0;st:w;sR:6060;"
                            style={{zIndex:10,fontFamily:"Roboto"}}
                        ><img src="./assets/revslider/assets_slider9/xamin-d9-banner-img.png" width="600" height="687" data-no-retina /> 
                        </rs-layer>
                        <rs-layer
                            id="slider-5-slide-5-layer-2" 
                            data-type="image"
                            data-rsp_ch="on"
                            data-xy="x:r;xo:205px;y:b;yo:81px;"
                            data-text="w:normal;"
                            data-dim="w:157px;h:365px;"
                            data-frame_1="e:Power4.easeInOut;st:2600;sp:1200;sR:2600;"
                            data-frame_1_sfx="se:blocktoright;"
                            data-frame_999="o:0;st:w;sR:5200;"
                            style={{zIndex:9,fontFamily:"Roboto"}}
                        ><img src="./assets/revslider/assets_slider9/xamin-d9-eclippse2.png" width="157" height="365" data-no-retina /> 
                        </rs-layer>
                        <rs-layer
                            id="slider-5-slide-5-layer-3" 
                            data-type="image"
                            data-rsp_ch="on"
                            data-xy="x:c;xo:298px;y:167px;"
                            data-text="w:normal;"
                            data-dim="w:365px;h:158px;"
                            data-frame_1="e:Power4.easeInOut;st:2120;sp:1200;sR:2120;"
                            data-frame_1_sfx="se:blocktoright;"
                            data-frame_999="o:0;st:w;sR:5680;"
                            style={{zIndex:8,fontFamily:"Roboto"}}
                        ><img src="./assets/revslider/assets_slider9/xamin-d9-eclippse1.png" width="365" height="158" data-no-retina /> 
                        </rs-layer>
                        <h1
                            id="slider-5-slide-5-layer-4" 
                            className="rs-layer"
                            data-type="text"
                            data-color="#437eeb"
                            data-rsp_ch="on"
                            data-xy="x:c;xo:-240px;y:c;yo:-88px;"
                            data-text="w:normal;s:150;l:160;fw:700;"
                            data-frame_0="x:50;"
                            data-frame_1="st:600;sp:1000;sR:600;"
                            data-frame_999="o:0;st:w;sR:7400;"
                            style={{zIndex:11,fontFamily:"Poppins",textTransform:"uppercase"}}
                        >Johan 
                        </h1>
                        <rs-layer
                            id="slider-5-slide-5-layer-5" 
                            data-type="text"
                            data-color="#313e5b"
                            data-rsp_ch="on"
                            data-xy="x:c;xo:-29px;y:c;yo:19px;"
                            data-text="w:normal;s:50;l:60;"
                            data-frame_0="x:50;"
                            data-frame_1="st:600;sp:1000;sR:600;"
                            data-frame_999="o:0;st:w;sR:7400;"
                            style={{zIndex:12,fontFamily:"Poppins"}}
                        >York 
                        </rs-layer>
                        <rs-layer
                            id="slider-5-slide-5-layer-8" 
                            data-type="text"
                            data-color="#303d5b"
                            data-rsp_ch="on"
                            data-xy="x:c;xo:-251px;y:c;yo:101px;"
                            data-text="w:normal;s:16;l:32;"
                            data-frame_0="x:50;"
                            data-frame_1="st:600;sp:1000;sR:600;"
                            data-frame_999="o:0;st:w;sR:7400;"
                            style={{zIndex:14,fontFamily:"Poppins"}}
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut. 
                        </rs-layer>
                        <rs-layer
                            id="slider-5-slide-5-layer-9" 
                            className="button blue-btn rev-btn"
                            data-type="button"
                            data-color="#437eeb"
                            data-rsp_ch="on"
                            data-xy="x:c;xo:-429px;y:c;yo:221px;"
                            data-text="w:normal;s:17;l:40;fw:500;"
                            data-dim="minh:0px;"
                            data-border="bos:solid;boc:#437eeb;bow:1px,1px,1px,1px;"
                            data-frame_1="st:1610;sR:1610;"
                            data-frame_999="o:0;st:w;sR:7090;"
                            data-frame_hover="c:#fff;bgc:#437eeb;boc:rgba(67,126,235,0.75);bor:90px,90px,90px,90px;bos:solid;bow:1px,1px,1px,1px;e:Power1.easeInOut;"
                            style={{zIndex:15,backgroundColor:"rgba(0,0,0,0)",fontFamily:"Poppins"}}
                        >About me 
                        </rs-layer>
                        <rs-layer
                            id="slider-5-slide-5-layer-10" 
                            data-type="text"
                            data-color="#303d5b"
                            data-rsp_ch="on"
                            data-xy="x:-14px;y:c;yo:-72px;"
                            data-text="w:normal;"
                            data-btrans="rZ:-90;"
                            data-frame_0="x:right;"
                            data-frame_1="st:3050;sp:1000;sR:3050;"
                            data-frame_999="o:0;st:w;sR:4950;"
                            style={{zIndex:17,fontFamily:"Poppins"}}
                        >#Data Scientist 
                        </rs-layer>
                        <rs-layer
                            id="slider-5-slide-5-layer-12" 
                            data-type="text"
                            data-color="#303d5b"
                            data-rsp_ch="on"
                            data-xy="x:r;xo:-49px;y:b;yo:127px;"
                            data-text="w:normal;"
                            data-btrans="rZ:-90;"
                            data-frame_0="x:right;"
                            data-frame_1="st:3410;sp:1000;sR:3410;"
                            data-frame_999="o:0;st:w;sR:4590;"
                            style={{zIndex:16,fontFamily:"Poppins"}}
                        >#Design Inspiration 
                        </rs-layer>
                        <rs-layer
                            id="slider-5-slide-5-layer-14" 
                            data-type="text"
                            data-color="#303d5b"
                            data-rsp_ch="on"
                            data-xy="x:r;xo:43px;y:250px;"
                            data-text="w:normal;s:20;"
                            data-frame_1="st:5260;sR:5260;"
                            data-frame_999="o:0;st:w;sR:3440;"
                            style={{zIndex:20,fontFamily:"Poppins"}}
                        ><i className="fa fa-instagram"></i> 
                        </rs-layer>
                        <rs-layer
                            id="slider-5-slide-5-layer-15" 
                            data-type="object"
                            data-rsp_ch="on"
                            data-xy="x:50px;y:173px;"
                            data-text="w:normal;"
                            data-frame_1="st:4240;sR:4240;"
                            data-frame_999="o:0;st:w;sR:4460;"
                            style={{zIndex:19,fontFamily:"Roboto"}}
                        > 
                        </rs-layer>
                        <a
                            id="slider-5-slide-5-layer-16" 
                            className="rs-layer"
                            href="" target="_self" rel="nofollow"
                            data-type="text"
                            data-color="#303d5b"
                            data-rsp_ch="on"
                            data-xy="x:r;xo:47px;y:214px;"
                            data-text="w:normal;s:20;"
                            data-frame_1="st:4940;sp:600;sR:4940;"
                            data-frame_999="o:0;st:w;sR:3460;"
                            style={{zIndex:20,fontFamily:"Poppins"}}
                        ><i className="fa fa-facebook-f"></i> 
                        </a>
                        <rs-layer
                            id="slider-5-slide-5-layer-17" 
                            data-type="text"
                            data-color="#303d5b"
                            data-rsp_ch="on"
                            data-xy="x:r;xo:40px;y:292px;"
                            data-text="w:normal;"
                            data-frame_1="st:5300;sp:600;sR:5300;"
                            data-frame_999="o:0;st:w;sR:3100;"
                            style={{zIndex:20,fontFamily:"Poppins"}}
                        ><i className="fa fa-twitter"></i> 
                        </rs-layer>
                        <rs-layer
                            id="slider-5-slide-5-layer-18" 
                            data-type="text"
                            data-color="#303d5b"
                            data-rsp_ch="on"
                            data-xy="x:r;xo:184px;y:174px;"
                            data-text="w:normal;s:20;"
                            data-dim="w:10px;"
                            data-frame_1="st:3960;sR:3960;"
                            data-frame_999="o:0;st:w;sR:4740;"
                            style={{zIndex:20,fontFamily:"Poppins"}}
                        ><i className="fab fa-whatsapp"></i> 
                        </rs-layer>
                        <rs-layer
                            id="slider-5-slide-5-layer-19" 
                            data-type="text"
                            data-color="#303d5b"
                            data-rsp_ch="on"
                            data-xy="x:r;xo:46px;y:173px;"
                            data-text="w:normal;s:16;"
                            data-frame_1="st:4680;sR:4680;"
                            data-frame_999="o:0;st:w;sR:4020;"
                            style={{zIndex:21,fontFamily:"Roboto"}}
                        >+910123456789 
                        </rs-layer>
						</rs-slide>
                    </RevSlider>
                </div>
            </>
        );
    }
}

export default Index;
import React from 'react';
import { RevSlider } from "../../../xamin";
import { initRevSlider2 } from '../../../../config/plugins'

class Index extends React.Component{
    componentDidMount() {
        initRevSlider2()
    }
    render() {
        return(
            <>
                <div>
                    <RevSlider
                        revId={"rev_slider_1_1"}
                    >
                        <rs-slide data-key="rs-1" data-title="Slide" data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;"
                                  data-firstanim="t:fade;sl:12;">
                            <img src='./assets/revslider/assets_slider2/dummy.png' data-lazyload="./assets/revslider/assets_slider2/transparent.png" data-parallax="off" className="rev-slidebg" data-no-retina />
                                <rs-bgvideo
                                    data-video="w:100%;h:100%;nse:false;l:true;ptimer:true;"
                                    data-mp4='./assets/revslider/assets_slider2/Comp-1_1-converted-with-Clipchamp.mp4' >
                                </rs-bgvideo>
                                <h2
                                id="slider-1-slide-1-layer-1"
                                className="rs-layer"
                                data-type="text"
                                data-rsp_ch="on"
                                data-xy="xo:70px,70px,70px,33px;y:m;yo:-50px,-50px,-50px,-137px;"
                                data-text="w:normal;s:60,60,60,40;l:70,70,70,50;fw:700;"
                                data-frame_0="y:100%;"
                                data-frame_0_mask="u:t;"
                                data-frame_1="st:300;sp:1200;sR:300;"
                                data-frame_1_mask="u:t;"
                                data-frame_999="o:0;st:w;sR:7500;"
                                style={{zIndex:8,fontFamily:"Lato"}}
                            >Data science as<br /> a service
                            </h2>
                            <rs-layer
                                    id="slider-1-slide-1-layer-2"
                                    data-type="text"
                                    data-color="#4bd9ec"
                                    data-rsp_ch="on"
                                    data-xy="xo:70px,70px,70px,33px;y:m;yo:61px,61px,61px,-43px;"
                                    data-text="w:normal;s:16;l:30,30,30,24;"
                                    data-frame_0="y:100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:600;sp:1200;sR:600;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:7200;"
                                    style={{zIndex:9,fontFamily:"Karla"}}
                                >Sigma collects data, transform it for analysis, runs<br /> analytical algorithms, and
                                    prepare visualizations.
                                </rs-layer>
                                <rs-layer
                                    id="slider-1-slide-1-layer-3"
                                    className="blue-btn button rev-btn"
                                    data-type="button"
                                    data-rsp_ch="on"
                                    data-xy="xo:60px,60px,60px,19px;y:m;yo:153px,153px,153px,40px;"
                                    data-text="w:normal;s:16,16,16,14;l:24,24,24,14;"
                                    data-dim="minh:0px,0px,0px,none;"
                                    data-padding="t:15,15,15,20;r:30;b:15,15,15,20;l:30;"
                                    data-border="bor:90px,90px,90px,90px;"
                                    data-frame_0="y:100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:940;sp:1200;sR:940;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:6860;"
                                    data-frame_hover="c:#fff;bgc:#313e5b;bor:90px,90px,90px,90px;"
                                    style={{zIndex:10,backgroundColor:"#437eeb",fontFamily:"Karla"}}
                                >Read More
                                </rs-layer>
                                <rs-layer
                                    id="slider-1-slide-1-layer-7"
                                    data-type="text"
                                    data-color="#4bd9ec"
                                    data-rsp_ch="on"
                                    data-xy="xo:655px,655px,655px,34px;y:m;yo:236px,236px,236px,145px;"
                                    data-text="w:normal;s:16,16,16,14;l:30,30,30,20;"
                                    data-frame_0="y:100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:1780;sp:1200;sR:1780;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:6020;"
                                    style={{zIndex:11,fontFamily:"Lato"}}
                                >Reports Generated
                                </rs-layer>
                                <rs-layer
                                    id="slider-1-slide-1-layer-8"
                                    data-type="text"
                                    data-rsp_ch="on"
                                    data-xy="xo:654px,654px,654px,35px;yo:611px,611px,611px,460px;"
                                    data-text="w:normal;s:36,36,36,18;l:40,40,40,26;fw:700;"
                                    data-frame_0="y:100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:1790;sp:1200;sR:1790;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:6010;"
                                    style={{zIndex:12,fontFamily:"Lato"}}
                                >12600
                                </rs-layer>
                                <rs-layer
                                    id="slider-1-slide-1-layer-9"
                                    data-type="text"
                                    data-color="#4bd9ec"
                                    data-rsp_ch="on"
                                    data-xy="xo:980px,980px,980px,227px;y:m;yo:236px,236px,236px,144px;"
                                    data-text="w:normal;s:16,16,16,14;l:30,30,30,20;"
                                    data-frame_0="y:100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:2140;sp:1200;sR:2140;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:5660;"
                                    style={{zIndex:13,fontFamily:"Lato"}}
                                >Hours
                                </rs-layer>
                                <rs-layer
                                    id="slider-1-slide-1-layer-10"
                                    data-type="text"
                                    data-rsp_ch="on"
                                    data-xy="xo:974px,974px,974px,226px;yo:611px,611px,611px,462px;"
                                    data-text="w:normal;s:36,36,36,18;l:40,40,40,26;fw:700;"
                                    data-frame_0="y:100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:2140;sp:1200;sR:2140;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:5660;"
                                    style={{zIndex:14,fontFamily:"Lato"}}
                                >18:00
                                </rs-layer>
                                <rs-layer
                                    id="slider-1-slide-1-layer-11"
                                    data-type="text"
                                    data-color="#4bd9ec"
                                    data-rsp_ch="on"
                                    data-xy="xo:1220px,1220px,1220px,366px;y:m;yo:236px,236px,236px,147px;"
                                    data-text="w:normal;s:16,16,16,14;l:30,30,30,20;"
                                    data-frame_0="y:100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:2550;sp:1200;sR:2550;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:5250;"
                                    style={{zIndex:15,fontFamily:"Lato"}}
                                >Sessions
                                </rs-layer>
                                <rs-layer
                                    id="slider-1-slide-1-layer-12"
                                    data-type="text"
                                    data-rsp_ch="on"
                                    data-xy="xo:1214px,1214px,1214px,366px;yo:611px,611px,611px,463px;"
                                    data-text="w:normal;s:36,36,36,18;l:40,40,40,26;fw:700;"
                                    data-frame_0="y:100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:2540;sp:1200;sR:2540;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:5260;"
                                    style={{zIndex:16,fontFamily:"Lato"}}
                                >5886
                                </rs-layer>
                        </rs-slide>
                    </RevSlider>
                </div>
            </>
        );
    }
}

export default Index;
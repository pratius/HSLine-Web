import $ from 'jquery';

let WOW;
let tpj;
if (typeof window !== 'undefined') {

    window.$ = $;
    window.jQuery = $;
    tpj = jQuery.noConflict();
    import('../public/assets/js/appear');
    import('../public/assets/revslider/js/revolution.tools.min');
    import('../public/assets/revslider/js/rs6.min');
    import('../public/assets/js/isotope.pkgd.min');
    import('../public/assets/js/Chart.min');
    import('../public/assets/js/Chart.bundle.min');
    require('popper.js');
    require('bootstrap');
    WOW = require('wowjs');
    require('jarallax/dist/jarallax.min');
    require('magnific-popup/dist/jquery.magnific-popup.min');
    require('owl.carousel');
}

const index = () => {
    loaderInit();
    stickyHeader();
    toggleDropdown();
    pillTab();
    backToTop();
    initJarallex();
    accordion();
    accordionTwo();
    wowInit();
    magnific();
    counterJs();
    progressBar();
    owlCarousalInit();
    isotope();
    chartInit();
    chart();
    bigdataserviceChart();
    dataScienceChart();
    dataVisualizationChart();
    artificialIntelligenceChart();
};

// Function for the sticky header...
const stickyHeader = () => {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });
};

const wowInit = () => {
    const elementExist = checkElement('class', 'wow');

    if (elementExist) {

        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            live: false
        }).init();
    }
};

// Function for the Loader...
const loaderInit = () => {
    $('#load').fadeOut();
    $('#loading').delay(1000).fadeOut('slow');
};

const initJarallex = () => {
    jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2
    });
};


// Function for toggle dropdown...
const toggleDropdown = () => {

    $("#main-header .menu-item .toggledrop").off("click");

    if ($(window).width() < 992) {
        $('#main-header .menu-item .toggledrop').on('click', function(e) {
            e.preventDefault();
            $(this).closest('li').find('.sub-menu').toggle('d-block');
        });
    }

    $(window).on('resize', function() { "use strict";

        $('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function() {
            $(this).closest('li').find('.sub-menu').toggle('d-block');
        });
        $("#main-header .menu-item .toggledrop").off("click");
        if ($(window).width() < 992) {
            $('#main-header .menu-item .toggledrop').on('click', function(e) {
                e.preventDefault();
                $(this).closest('li').find('.sub-menu').toggle('d-block');
            });
        }
    });
};

const owlCarousalInit = () => {
    const elementExist = checkElement('class', 'owl-carousel');
    if (elementExist) {
        $('.owl-carousel').each(function() {
            const $carousel = $(this);
            $carousel.owlCarousel({
                items: $carousel.data('items'),
                loop: $carousel.data('loop'),
                margin: $carousel.data('margin'),
                nav: $carousel.data('nav'),
                dots: $carousel.data('dots'),
                autoplay: $carousel.data('autoplay'),
                autoplayTimeout: $carousel.data('autoplay-timeout'),
                navText: ['<i class="fa fa-angle-left fa-2x" />', '<i class="fa fa-angle-right fa-2x" />'],
                responsiveClass: true,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: $carousel.data('items-mobile-sm')
                    },
                    // breakpoint from 480 up
                    480: {
                        items: $carousel.data('items-mobile')
                    },
                    // breakpoint from 786 up
                    786: {
                        items: $carousel.data('items-tab')
                    },
                    // breakpoint from 1023 up
                    1023: {
                        items: $carousel.data('items-laptop')
                    },
                    1199: {
                        items: $carousel.data('items')
                    }
                }
            });
        });
    }
};


const backToTop = () => {

    $('#back-to-top').fadeOut();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1400);
        } else {
            $('#back-to-top').fadeOut(400);
        }
    });
};

const accordion = () => {
    $('.iq-accordion .iq-accordion-block .accordion-details').hide();
    $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
    $('.iq-accordion .iq-accordion-block').on('click', function(e) {
        e.preventDefault();
        if ($(this).children('div.accordion-details').is(':hidden')) {
            $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
            $(this).toggleClass('accordion-active').children('div.accordion-details').slideDown('slow');
        }
    });
};

const accordionTwo = () =>{
    $('.iq-faq .iq-block .iq-details').hide();
		$('.iq-faq .iq-block:first').addClass('iq-active').children().slideDown('slow');
		$('.iq-faq .iq-block').on("click", function() {
			if ($(this).children('div').is(':hidden')) {
				$('.iq-faq .iq-block').removeClass('iq-active').children('div').slideUp('slow');
				$(this).toggleClass('iq-active').children('div').slideDown('slow');
			}
		});
}
const checkElement = (type, element) => {
    let found = false;
    let elements;
    switch (type) {
        case 'class':
            elements = document.getElementsByClassName(element);

            if (elements !== undefined && elements !== null && elements.length > 0) {
                found = true;
            }
            break;

        case 'id':
            elements = document.getElementById(element);

            if (elements !== undefined && elements !== null) {
                found = true;
            }
            break;
    }


    return found;
};

const progressBar = () => {
    const elementExist = checkElement('class', 'iq-progress-bar');
    if (elementExist) {
        $('.iq-progress-bar > span').each(function() {
            var $this = $(this);
            var width = $this.data('percent');
            $this.css({
                'transition': 'width 2s'
            });
            setTimeout(function() {
                $this.appear(function () {
                    $this.css('width', width + '%');
                });
            }, 500);
        });
    }
};

const magnific = () => {
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        tLoading: 'Loading image #%curr%...',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            navigateByImgClick: true,
            enabled: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        mainClass: 'mfp-fade',
        preloader: false,
        removalDelay: 160,
        fixedContentPos: false
    });
};

const counterJs = () => {
    //-- Plugin implementation
        $.fn.countTo = function(options) {
            return this.each(function() {
                //-- Arrange
                let FRAME_RATE = 60; // Predefine default frame rate to be 60fps
                let $el = $(this);
                let countFrom = 0;
                let countTo = parseInt($el.attr('data-to'));
                let countSpeed = $el.attr('data-speed'); // Number increment per second

                //-- Action
                let rafId;
                let increment;
                let currentCount = countFrom;
                let countAction = function() {              // Self looping local function via requestAnimationFrame
                    if(currentCount < countTo) {              // Perform number incremeant
                        $el.text(Math.floor(currentCount));     // Update HTML display
                        increment = countSpeed / FRAME_RATE;    // Calculate increment step
                        currentCount += increment;              // Increment counter
                        rafId = requestAnimationFrame(countAction);
                    } else {                                  // Terminate animation once it reaches the target count number
                        $el.text(countTo);                      // Set to the final value before everything stops
                        //cancelAnimationFrame(rafId);
                    }
                };
                rafId = requestAnimationFrame(countAction); // Initiates the looping function
            });
        };


    $('.timer').countTo();

};

const revslider_showDoubleJqueryError = (sliderID) => {
    // var err = "<div class='rs_error_message_box'>";
    // err += "<div class='rs_error_message_oops'>Oops...</div>";
    // err += "<div class='rs_error_message_content'>";
    // err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
    // err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
    // err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
    // err += "</div>";
    // err += "</div>";
    // jQuery(sliderID).show().html(err);
};

export const initRevSlider1 = () => {
    if(tpj("#rev_slider_0_1").revolution == undefined){
        setTimeout (() => {
            initRevSlider1()
        }, 100)
    }else{
        tpj("#rev_slider_0_1").show().revolution({
            jsFileLocation:"../public/assets/revslider/js/",
            sliderType: "standard",
            sliderLayout:"fullwidth",
            visibilityLevels:[1240,1024,778,480],
            gridwidth:[1400,1024,767,479],
            gridheight:[600,600,800,600],
            minHeight:"",
            autoHeight:true,
            lazyType:"smart",
            spinner:"spinner0",
            editorheight:[600,600,800,600],
            responsiveLevels:[1240,1024,778,480],
            disableProgressBar:"on",
            navigation: {
                mouseScrollNavigation:false,
                touch: {
                    touchenabled:true
                }
            },
            parallax: {
                levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],
                type:"mouse"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid:true
            },
        });
    }
}

export const initRevSlider2 = () => {
    if (tpj("#rev_slider_1_1").revolution == undefined) {
        setTimeout(() => {
            initRevSlider2();
        },100);
    } else {
        tpj("#rev_slider_1_1").show().revolution({
            jsFileLocation: "../public/assets/revslider/js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1240,1240,480",
            gridwidth: "1400,1400,1400,479",
            gridheight: "700,700,700,600",
            minHeight: "",
            autoHeight: true,
            lazyType: "smart",
            spinner: "spinner0",
            editorheight: "700,768,400,600",
            responsiveLevels: "1240,1240,1240,480",
            disableProgressBar: "on",
            navigation: {
                mouseScrollNavigation: false,
                touch: {
                    touchenabled: true
                }
            },
            parallax: {
                levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                type: "mouse"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
}
export const initRevSlider3 = () => {
    if (tpj("#rev_slider_3_1").revolution == undefined) {
        setTimeout(() => {
            initRevSlider3();
        },100);
    } else {
        tpj("#rev_slider_3_1").show().revolution({
            jsFileLocation: "../public/assets/revslider/js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1400,1024,767,479",
            gridheight: "700,600,800,600",
            minHeight: "",
            autoHeight: true,
            lazyType: "smart",
            spinner: "spinner0",
            editorheight: "700,600,800,600",
            responsiveLevels: "1240,1024,778,480",
            disableProgressBar: "on",
            navigation: {
                mouseScrollNavigation: false,
                touch: {
                    touchenabled: true
                }
            },
            parallax: {
                levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                type: "mouse"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
}
export const initRevSlider4 = () => {
    if (tpj("#rev_slider_4_1").revolution == undefined) {
        setTimeout(() => {
            initRevSlider4();
        },100);
    } else {
        tpj("#rev_slider_4_1").show().revolution({
            jsFileLocation: "../public/assets/revslider/js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1400,1024,778,479",
            gridheight: "800,768,600,600",
            minHeight: "",
            autoHeight: true,
            lazyType: "smart",
            spinner: "spinner0",
            editorheight: "800,768,600,600",
            responsiveLevels: "1240,1024,778,480",
            disableProgressBar: "on",
            navigation: {
                mouseScrollNavigation: false,
                touch: {
                    touchenabled: true
                }
            },
            parallax: {
                levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                type: "mouse"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
}
export const initRevSlider5 = () => {
    if (tpj("#rev_slider_5_1").revolution == undefined) {
        setTimeout(() => {
            initRevSlider5();
        },100);
    } else {
        tpj("#rev_slider_5_1").show().revolution({
            jsFileLocation: "../public/assets/revslider/js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1400,1024,778,479",
            gridheight: "900,900,600,600",
            minHeight: "",
            autoHeight: true,
            lazyType: "smart",
            spinner: "spinner0",
            editorheight: "900,900,600,600",
            responsiveLevels: "1240,1024,778,480",
            disableProgressBar: "on",
            navigation: {
                mouseScrollNavigation: false,
                touch: {
                    touchenabled: true
                }
            },
            parallax: {
                levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                type: "mouse"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
}
export const initRevSlider6 = () => {
    if (tpj("#rev_slider_6_1").revolution == undefined) {
        setTimeout(() => {
            initRevSlider6();
        }, 100);
    } else {
        tpj("#rev_slider_6_1").show().revolution({
            sliderType: "hero",
            jsFileLocation: "../public/assets/revslider/js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: 1600,
            gridheight: 900,
            minHeight: "",
            spinner: "spinner0",
            editorheight: "900,768,960,720",
            responsiveLevels: "1240,1024,778,480",
            disableProgressBar: "on",
            navigation: {
                onHoverStop: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
}
export const initRevSlider7 = () => {
    if (tpj("#rev_slider_7_1").revolution == undefined) {
        setTimeout(() => {
            initRevSlider7();
        }, 100);
    } else {
        tpj("#rev_slider_7_1").show().revolution({
            jsFileLocation: "../public/assets/revslider/js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1400,1024,778,480",
            gridheight: "800,650,650,500",
            minHeight: "",
            autoHeight: true,
            spinner: "spinner0",
            editorheight: "800,650,650,500",
            responsiveLevels: "1240,1024,778,480",
            disableProgressBar: "on",
            navigation: {
                onHoverStop: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
}
export const initRevSlider8 = () => {

}
export const initRevSlider9 = () => {
    if (tpj("#rev_slider_9_1").revolution == undefined) {
        setTimeout(() => {
            initRevSlider9();
        }, 100);
    } else {
        tpj("#rev_slider_9_1").show().revolution({
            sliderType: "hero",
            jsFileLocation: "../public/assets/revslider/js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: 1600,
            gridheight: 750,
            minHeight: "",
            spinner: "spinner0",
            editorheight: "750,768,960,720",
            responsiveLevels: "1240,1024,778,480",
            disableProgressBar: "on",
            navigation: {
                onHoverStop: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
}
export const initRevSlider10 = () => {
    if (tpj("#rev_slider_10_1").revolution == undefined) {
        setTimeout(() => {
            initRevSlider10();
        }, 100);
    } else {
        tpj("#rev_slider_10_1").show().revolution({
            sliderType: "hero",
            jsFileLocation: "../public/assets/revslider/js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: 1600,
            gridheight: 900,
            minHeight: "",
            spinner: "spinner0",
            editorheight: "900,768,960,720",
            responsiveLevels: "1240,1024,778,480",
            disableProgressBar: "on",
            navigation: {
                onHoverStop: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
}
export const initRevSlider11 = () => {
    if (tpj("#rev_slider_11_1").revolution == undefined) {
        setTimeout(() => {
            initRevSlider11();
        }, 100);
    } else {
        tpj("#rev_slider_11_1").show().revolution({
            sliderType: "hero",
            jsFileLocation: "../public/assets/revslider/js/",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: 1600,
            gridheight: 800,
            minHeight: "",
            spinner: "spinner0",
            editorheight: "800,768,960,720",
            responsiveLevels: "1240,1024,778,480",
            disableProgressBar: "on",
            navigation: {
                onHoverStop: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
}

const isotope = () => {
    if($(".isotope").length){
    
        $('.isotope').isotope({
            itemSelector: '.iq-grid-item',
         });

       // filter items on button click
       $('.isotope-filters').on('click', 'button', function() {
           var filterValue = $(this).attr('data-filter');
           $('.isotope').isotope({
               resizable: true,
               filter: filterValue
           });
           $('.isotope-filters button').removeClass('active');
           $(this).addClass('active');
       });
    }        

   if($(".iq-masonry-block").length){   
        var $msnry = $('.iq-masonry-block .iq-masonry');
        if ($msnry) {
            var $filter = $('.iq-masonry-block .isotope-filters');
            $msnry.isotope({
                percentPosition: true,
                resizable: true,
                itemSelector: '.iq-masonry-block .iq-masonry-item',
                masonry: {
                    gutterWidth: 0
                }
            });
            // bind filter button click
            $filter.on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $msnry.isotope({
                    filter: filterValue
                });
            });

            $filter.each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function() {
                    $buttonGroup.find('.active').removeClass('active');
                    $(this).addClass('active');
                });
            });
        }
    }
}

const chartInit = () => {
    if($("#data-analytics-pie-chart").length){
            const data = { datasets: [{ data: [60, 40, 40], backgroundColor: ["#f7be68", "#fe6c61", "#5471d2"], }], labels: ['One', 'Two', 'Three'] }; var ctx = $('#data-analytics-pie-chart'); var myPieChart = new Chart(ctx, { type: 'pie', data: data, options: { maintainAspectRatio: false, legend: { display: false, } } }); document.getElementById('js-legend').innerHTML = myPieChart.generateLegend();
    }
};

const chart = () =>{
    if($("#managed-data-analytics").length){
        const data = { labels: ["JAN", " FEB", " MAR", " APR", " MAY", " JUN", " JUL", " AUG"], datasets: [{ label: "One", fillColor: "rgba(84, 114, 210, 0.1)", strokeColor: "#5472d2", pointColor: "#5472d2", pointStrokeColor: "#5472d2", highlightFill: "#3c5ecc", highlightStroke: "#3c5ecc", pointHighlightFill: "#3c5ecc", pointHighlightStroke: "#3c5ecc", data: [10, 15, 20, 25, 27, 25, 23, 25], borderColor: "#5471d2", backgroundColor: "rgba(84,113,210,0.2)", pointBackgroundColor: 'rgba(84,113,210,1)', pointRadius: 5, }, { label: "Two", fill: true, fillColor: "rgba(254,108,97,0.1)", strokeColor: "#fe6c61", pointColor: "#fe6c61", pointStrokeColor: "#fe6c61", highlightFill: "#fe5043", highlightStroke: "#fe5043", pointHighlightFill: "#fe5043", pointHighlightStroke: "#fe5043", data: [25, 18, 16, 17, 20, 25, 30, 35], borderColor: "#fe6c61", backgroundColor: "rgba(254,108,97,0.2)", pointBackgroundColor: 'rgba(254,108,97,1)', pointRadius: 5, }] }; var ctx = $('#managed-data-analytics'); var lineChart = new Chart(ctx, { type: 'line', data: data, options: { legend: { display: false, } } }); document.getElementById('js-legend').innerHTML = lineChart.generateLegend();
    }
}

const bigdataserviceChart = () => {
    if($("#big-data-service").length){
        const data = {
            datasets: [{
                data: [60,40],
                backgroundColor: [
                    "#fe6c61",
                    "#5471d2"
                ],
            }],
            labels: [
                'One',
                'Two',
            ]
        };
        var ctx = $('#big-data-service');
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                }
            }
        });
        document.getElementById('js-legend').innerHTML = myPieChart.generateLegend();
    }
}

const dataScienceChart = () =>{
    if($("#data-science-chart").length){

        const data = { datasets: [{ data: [60, 40, 40], backgroundColor: ["#f7be68", "#fe6c61", "#5471d2"], }], labels: ['One', 'Two', 'Three'] }; var ctx = $('#data-science-chart'); var myPieChart = new Chart(ctx, { type: 'doughnut', data: data, options: { maintainAspectRatio: false, legend: { display: false, } } }); document.getElementById('js-legend').innerHTML = myPieChart.generateLegend();
    }
}

const artificialIntelligenceChart = () =>{
    if($("#artificial-intelligence").length){

        const data = {
            "labels":["JAN"," FEB"," MAR"," APR"," MAY"," JUN"," JUL"," AUG"],
            "datasets":[
                {
                    label:"One",
                    backgroundColor:"rgba(254,108,97,0.2)",
                    borderColor:"#fe6c61",
                    pointColor:"#fe6c61",
                    pointStrokeColor:"#fe6c61",
                    highlightFill:"#fe5043",
                    highlightStroke:"#fe5043",
                    pointHighlightFill:"#fe5043",
                    pointHighlightStroke:"#fe5043",
                    data:["25"," 18"," 16"," 17"," 20"," 25"," 30"," 35"]
                },
                {
                label:"Two",
                backgroundColor:"rgba(84,114,210,0.2)",
                borderColor:"#5472d2",
                pointColor:"#5472d2",
                pointStrokeColor:"#5472d2",
                highlightFill:"#3c5ecc",
                highlightStroke:"#3c5ecc",
                pointHighlightFill:"#3c5ecc",
                pointHighlightStroke:"#3c5ecc",
                data:["10"," 15"," 20"," 25"," 27"," 25"," 23"," 25"]
            }
            ]
        };
        var ctx = jQuery('#artificial-intelligence');
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                // maintainAspectRatio: false,
                legend: {
    
                }
            }
        });
    }
}

const dataVisualizationChart = () =>{
    if($("#data-visualization").length){

        const data = 
        { labels: ["JAN", " FEB", " MAR", " APR", " MAY", " JUN", " JUL", " AUG"],
            datasets: [{ label: "One", data: [20, 28, 20, 25, 27, 25, 23, 25], 
            fillColor: "#5472d2", strokeColor: "#5472d2", 
            pointColor: "#5472d2", pointStrokeColor: "#5472d2",
            highlightFill: "#3c5ecc", highlightStroke: "#3c5ecc", pointHighlightFill: "#3c5ecc",
            pointHighlightStroke: "#3c5ecc", backgroundColor: "#5471d2", },
            { label: "Two", data: [25, 18, 16, 17, 20, 25, 30, 38], 
            fillColor: "#fe6c61", strokeColor: "#fe6c61", pointColor: "#fe6c61", pointStrokeColor: "#fe6c61", 
            highlightFill: "#fe5043", highlightStroke: "#fe5043", pointHighlightFill: "#fe5043", pointHighlightStroke: "#fe5043", 
            backgroundColor: "#fe6c61", }] }; var ctx = $('#data-visualization'); 
            var myPieChart = new Chart(ctx, { type: 'bar', data: data, options: { scaleBeginAtZero: true, legend: { display: false, } } }); 
            document.getElementById('js-legend').innerHTML = myPieChart.generateLegend();
    }
}

const pillTab = () => {
    var nav = jQuery('#pills-tab');
    if (nav.length) {
        jQuery(window).on('scroll', function (e) {
            var contentNav = nav.offset().top - window.outerHeight;
            if (jQuery(window).scrollTop() >= (contentNav)) {
                event.preventDefault();
                jQuery('#pills-tab li a').removeClass('active');
                jQuery('#pills-tab li a[aria-selected=true]').addClass('active');
            }
        });
    }
}

export { index }
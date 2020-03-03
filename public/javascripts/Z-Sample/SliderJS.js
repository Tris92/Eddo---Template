// Lien du tuto : http://sachinchoolur.github.io/lightslider/

//CODE

jQuery(".product-img-box .cols-product-media").attr("id", "lightSlider");
jQuery(".product-img-box center").addClass("col-product-media");
var attribute = { };

            jQuery.each(jQuery(".col-product-media")[0].attributes, function(id, atr) {
                attribute[atr.nodeName] = atr.nodeValue;
            });
            jQuery(".col-product-media").replaceWith(function () {
                return jQuery("<li />",
                    attribute).append(jQuery(this).contents());
            });

var attribute = { };

            jQuery.each(jQuery(".cols-product-media")[0].attributes, function(id, atr) {
                attribute[atr.nodeName] = atr.nodeValue;
            });
            jQuery(".cols-product-media").replaceWith(function () {
                return jQuery("<ul />",
                    attribute).append(jQuery(this).contents());
            });

jQuery.getScript( "https://sachinchoolur.github.io/lightslider/dist/js/lightslider.js", function( data, textStatus, jqxhr ) {
  console.log( data ); // Data returned
  console.log( textStatus ); // Success
  console.log( jqxhr.status ); // 200
  console.log( "Load was performed." );
});

jQuery("head").append('<link type="text/css" rel="stylesheet" href="https://sachinchoolur.github.io/lightslider/dist/css/lightslider.css"/> <script src="https://sachinchoolur.github.io/lightslider/dist/js/lightslider.js"></script>');

setTimeout(function(){
        jQuery("#lightSlider").lightSlider({
        item: 2,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 400, //ms'
        auto: false,
        loop: true,
        slideEndAnimation: true,
        pause: 2000,

        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',

        rtl:false,
        adaptiveHeight:false,

        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,

        thumbItem:10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',

        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,

        responsive : [],

        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });

    /**var slider = jQuery("#lightSlider").lightSlider();
    slider.goToSlide(3);
    slider.goToPrevSlide();
    slider.goToNextSlide();
    slider.getCurrentSlideCount();
    slider.refresh();
    slider.play();
    slider.pause();
jQuery("#lightSlider").lightSlider(); **/
    }, 1000);


// Si plus de sources CSS ou JS sur les lien voici des fichiers avec les codes :
// https://drive.google.com/drive/folders/1OnmAFQ7hIwQEUJ8qWwRUjHjk-SnAz91K

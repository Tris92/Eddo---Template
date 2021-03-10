
jQuery("html,body").animate({
  scrollTop:jQuery("#tab-about_this_product").offset().top+'px'
},1000,'linear');


setTimeout(function() {
  jQuery('#tab-panel-product_documentation').removeAttr("style", 'height');
  jQuery("#tab-product_documentation").on('click', function () {
    jQuery("#tab-panel-product_documentation").slideToggle();
  });
}, 2000);







tab-panel-product_documentation

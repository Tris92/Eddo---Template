// ZOOM SUR IMAGE

setTimeout( function(){
  if (jQuery(' #block-layered-nav-wrapper .block-layered-navs .block-title:contains("Filtrer par")').length === 1){
    jQuery( ".products-grid .item .product-image IMG" ).each(function( index ) {
      jQuery('.products-grid .item .product-image IMG').mouseover(function() {
        jQuery('.products-grid .item .product-image IMG').css({'-webkit-transform': 'scale(1.5)', '-moz-transform': 'scale(1.5)', '-ms-transform': 'scale(1.5)', '-o-transform': 'scale(1.5)', 'transform': 'scale(1.5)'});
      })
    });
  }
}, 100);

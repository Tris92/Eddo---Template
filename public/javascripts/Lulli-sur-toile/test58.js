// ZOOM SUR IMAGE

jQuery(document).ready(function(){
  if (jQuery('#block-layered-nav-wrapper .block-layered-navs .block-title:contains("Filtrer par")').length === 1){
    jQuery('.products-grid .item .product-image IMG').hover(function() {
      jQuery(this).toggle({
        effect: 'scale',
        percent: '150%'
      }, 200)
    }, function() {
      jQuery(this).toggle({
        effect: 'scale',
        percent: '100%'
      }, 200)
    })
  }
});

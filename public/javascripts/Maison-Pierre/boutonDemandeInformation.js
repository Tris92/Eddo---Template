jQuery('.desktop-only.btn-contacte').html('DEMANDE D\'INFORMATION');
jQuery('#edit-submit--4').attr('value', 'DEMANDE D\'INFORMATION');
jQuery('#edit-submit--4').after('<p class="test-replacement-IDno-2" style="text-align: center;">Gratuite et sans engagement</p>');
jQuery('.lp-proprietaire #section-top .info-franchise a.btn').html('DEMANDE D\'INFORMATION');
jQuery('.lp-proprietaire #section-top .info-franchise a.btn').after('<span class="test-replacement-IDno-3">Gratuite et sans engagement</span>');

if (window.matchMedia("(min-width: 450px)").matches) {
  jQuery('.test-replacement-IDno-3').css({'position': 'absolute', 'color': '#rgba(81, 99, 99)', 'font-family': 'Lato', 'font-size': '1em'});
} else {
  jQuery('.test-replacement-IDno-3').css({'color': '#rgba(81, 99, 99)', 'font-family': 'Lato', 'font-size': '1em', 'text-align': 'center', 'display': 'block'});
}


jQuery(window).scroll(function(){
   if((jQuery(window).scrollTop() >= 100 ) && jQuery('.test-replacement-IDno').length === 0 ) {
     jQuery('.desktop-only.btn-contacte').after('<p class="test-replacement-IDno">Gratuite et sans engagement</p>');
     jQuery('.desktop-only.btn-contacte').insertBefore('.test-replacement-IDno');
     if (window.matchMedia("(min-width: 450px)").matches) {
       jQuery('.test-replacement-IDno').css({'position': 'relative', 'top': '65%', 'left': '12%'});
     } else {
       jQuery('.test-replacement-IDno').css({'position': 'relative', 'top': '65%', 'left': '2%'});
     }
   }
   if ((jQuery(window).scrollTop() < 100 )){
    jQuery('.test-replacement-IDno').remove();
   }
})

if (window.matchMedia("(max-width: 1024px)").matches) {
  jQuery('.basket__confirmation-btn--holder').css({'display': 'flex', 'justify-content': 'flex-end', 'margin-top': '-40px'});
  jQuery('.basket__confirmation-btn').css({'width': '50%', 'margin-right': '30px', 'height': '40px'});

  jQuery('.data-line SPAN:eq(0)').addClass("nightNumber");
  var nightAb = jQuery('.nightNumber').html();
  jQuery('.header-section__row-block').hide();
  jQuery('.header-section').after('<div class="nightAbTest">'+ nightAb +'</div>');

  jQuery('.nightAbTest').css({'font-family': 'GothamBook', 'font-size': '12px', 'color': '#767676', 'line-height': '18px'});
  jQuery('.header-section__mobile-block--shevron').css({'margin-left': '85%', 'margin-bottom': '-15px', 'margin-top': '15px', 'position': 'absolute'});
  jQuery('.header-section__mobile-block').css({'margin-bottom': '-10px'});
  jQuery('.singleBooking').css({'top': '88%'});
}




// Click CTA tracking (Enlever la propagation du tracking)

setInterval(function(){
  if(jQuery(".trackingCta").length === 0){
    jQuery(document).on('mousedown', '.basket__confirmation-btn', function () { ABTastyClickTracking('Clic bouton reserver', null, 630322); ev.stopPropagation();});
    jQuery(".basket__confirmation-btn").addClass('trackingCta');  }
}, 100);


// Lien ABTest
https://www.adagio-city.com/fr/booking/room-rates?q=Paris&geoCode=V2996&geoType=VI&dateIn=2020-10-19&nbNight=4&apartment%5B%5D=2%2C0%2C0%2CYm2JoLsLZ-&hotel_id=9104&apartment_id=Ym2JoLsLZ-&roomRateId=SFRO49?abteststicky

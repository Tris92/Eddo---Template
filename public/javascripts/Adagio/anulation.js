//BOOKING ROOM RATES
if (!window.abt644262) {
  window.abt644262 = true;

  jQuery('.aparthotel-breadcrumbs').after('<div class="branding-statement-widget"><div class="branding-statement"><div class="branding-statement__logo"></div><div class="branding-statement__text"><b>Réservez en toute sérénité - Annulation et modification gratuites</b></div></div></div>');

  if (window.matchMedia('(max-width: 1024px)').matches){
    jQuery('.branding-statement__text').text('Réservez en toute sérénité - Annulation et modification gratuites')
    jQuery('.branding-statement-widget').css({
      'margin':'.5em 0',
      'display':'block',
      'text-decoration': 'none',
      'color': '#4a4a4a'
    });

    jQuery('.branding-statement').css({
      'display':'flex',
      'background':'url(/sites/default/files/brand_statement/field_background_image/2020-06/bg_0_0_0_0.png?twic=v1/cover=1280x76) repeat',
      'flex-direction': 'row',
      'align-items': 'center',
      'margin': '10px auto',
      'max-width': '1280px',
      'min-height': '76px',
      'border-radius': '12px',
      'background-repeat': 'repeat-x',
      'background-position': '50%',
      'text-decoration': 'none',
      'position': 'relative',
      'width': '335px'
    });

    jQuery('.branding-statement__text').css({
      'font-family': 'GothamMedium',
      'font-weight': '400',
      'margin-bottom': '5px',
      'padding': '0px'
    });

    if (window.matchMedia('(max-width: 330px)').matches){
      jQuery('.branding-statement').css({
        'width': '280px'
      });
      jQuery('.branding-statement__text').css({
        'font-size': '11px'
      });
    }

  } else {
    jQuery('.branding-statement-widget').css({
      'margin':'.5em 0',
      'display':'block',
      'text-decoration': 'none',
      'color': '#4a4a4a'
    });

    jQuery('.branding-statement').css({
      'display':'flex',
      'background':'url(/sites/default/files/brand_statement/field_background_image/2020-06/bg_0_0_0_0.png?twic=v1/cover=1280x76) repeat',
      'flex-direction': 'row',
      'align-items': 'center',
      'margin': '10px auto',
      'max-width': '1280px',
      'min-height': '76px',
      'border-radius': '12px',
      'background-repeat': 'repeat-x',
      'background-position': '50%',
      'text-decoration': 'none',
      'position': 'relative',
      'width': 'calc(100% - 100px)'
    });

    jQuery('.branding-statement__text').css({
      'font-family': 'GothamMedium',
      'font-weight': '400',
      'margin-bottom': '5px',
    });
  }
}


*********************************************************************************************************


//CHECKOUT PAGE
if (!window.abt644262) {
  window.abt644262 = true;

  jQuery('.reservation-page__title').before('<div class="branding-statement-widget"><div class="branding-statement"><div class="branding-statement__logo"></div><div class="branding-statement__text"><b>Réservez en toute sérénité - Annulation et modification gratuites</b></div></div></div>');

  if (window.matchMedia('(max-width: 1024px)').matches){
    jQuery('.branding-statement__text').text('Réservez en toute sérénité - Annulation et modification gratuites')
    jQuery('.branding-statement-widget').css({
      'margin':'.5em 0',
      'display':'block',
      'text-decoration': 'none',
      'color': '#4a4a4a'
    });

    jQuery('.branding-statement').css({
      'display':'flex',
      'background':'url(/sites/default/files/brand_statement/field_background_image/2020-06/bg_0_0_0_0.png?twic=v1/cover=1280x76) repeat',
      'flex-direction': 'row',
      'align-items': 'center',
      'margin': '10px auto',
      'max-width': '1280px',
      'min-height': '76px',
      'border-radius': '12px',
      'background-repeat': 'repeat-x',
      'background-position': '50%',
      'text-decoration': 'none',
      'position': 'relative',
      'width': '335px'
    });

    jQuery('.branding-statement__text').css({
      'font-family': 'GothamMedium',
      'font-weight': '400',
      'margin-bottom': '5px',
      'padding': '0px'
    });

    if (window.matchMedia('(max-width: 330px)').matches){
      jQuery('.branding-statement').css({
        'width': '280px'
      });
      jQuery('.branding-statement__text').css({
        'font-size': '11px'
      });
    }

  } else {
    jQuery('.branding-statement-widget').css({
      'margin':'.5em 0',
      'display':'block',
      'text-decoration': 'none',
      'color': '#4a4a4a'
    });

    jQuery('.branding-statement').css({
      'display':'flex',
      'background':'url(/sites/default/files/brand_statement/field_background_image/2020-06/bg_0_0_0_0.png?twic=v1/cover=1280x76) repeat',
      'flex-direction': 'row',
      'align-items': 'center',
      'margin': '10px auto',
      'max-width': '1280px',
      'min-height': '76px',
      'border-radius': '12px',
      'background-repeat': 'repeat-x',
      'background-position': '50%',
      'text-decoration': 'none',
      'position': 'relative',
      'width': 'calc(100%)'
    });

    jQuery('.branding-statement__text').css({
      'font-family': 'GothamMedium',
      'font-weight': '400',
      'margin-bottom': '5px',
    });
  }
}


contains: https://www.adagio-city.com/fr/booking/room-rates
abTestAnnulation
https://www.adagio-city.com/fr/booking/room-rates?q=Paris%2C+Ile-de-France&dateIn=2020-12-16&nbNight=4&apartment%5B%5D=2%2C0%2C0%2CLpb6felJ_G&hotel_id=6790&apartment_id=Lpb6felJ_G&roomId=CA1A&roomRateId=RA1AD4-DR?abTestAnnulation

contains: https://www.adagio-city.com/fr/booking/checkout
abTestCheckout
http://adagio-city.com/fr/booking/checkout?abTestCheckout

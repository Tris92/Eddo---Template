//Lien recette:

https://www.adagio-city.com/fr/hotel-9297-aparthotel-adagio-la-defense-courbevoie/index.shtml?abtestAvis


if (window.matchMedia('(max-width: 1023px)').matches){
  jQuery('.trust-widget').removeClass("hide");
  jQuery('.trust-widget').css({
    "display": "inline-block",
  });
  jQuery('.address').hide();
  jQuery('.hotel-address').css({'display': 'flex', 'padding': '0px 10px 0px 15px'});
  jQuery('.trust-widget__rating--2c').css({'display':'-webkit-inline-box', 'padding-top': '7px'});
  jQuery('#services').after('<div id="ancreAbMobile" style="color: transparent; background-color: transparent; margin-top: -100px; margin-bottom: 100px;"></div>')
  jQuery('.trust-widget__rating--2c .red').wrapInner('<a class="btnAncreMobile" href="#ancreAbMobile"></a>');
  jQuery('.btnAncreMobile').css({
    'text-decoration': 'underline',
    'color': '#d50031',
    'align-items': 'center',
    'cursor': 'pointer'
  });

  jQuery('.btnAncreMobile').vmouseover(function(){
    jQuery('.btnAncre').css({
    'text-decoration': 'unset',
    'cursor': 'pointer'
    })
  });

  jQuery('.btnAncreMobile').vmouseout(function(){
    jQuery('.btnAncre').css({
    'text-decoration': 'underline',
    'cursor': 'pointer'
    })
  });

} else {

  jQuery('.trust-widget').removeClass("hide");
  jQuery('.trust-widget').css({
    "display": "inline-block",
  });
  jQuery('.address').hide();

  jQuery('#services').after('<div id="ancreAb" style="color: transparent; background-color: transparent; margin-top: -180px; margin-bottom: 180px;"></div>')
  jQuery('.trust-widget__avis').wrapInner('<a class="btnAncre" href="#ancreAb"></a>');
  jQuery('.btnAncre').css({
    'color': '#767676',
    'text-decoration': 'underline',
    'font-size': '100%'
  });

  jQuery('.btnAncre').mouseover(function(){
    jQuery('.btnAncre').css({
    'color': '#767676',
    'text-decoration': 'unset',
    'font-size': '100%',
    'cursor': 'pointer'
    })
  });

  jQuery('.btnAncre').mouseout(function(){
    jQuery('.btnAncre').css({
    'color': '#767676',
    'text-decoration': 'underline',
    'font-size': '100%',
    'cursor': 'pointer'
    })
  });
}

//CODE GLOBAL

setInterval(function(){
  if(jQuery(".trackingCtaMobile").length === 0){
    jQuery(document).on('mousedown', '.btnAncreMobile', function () { ABTastyClickTracking('Clic ancre avis mobile', null, 639387); ev.stopPropagation();});
    jQuery(".btnAncreMobile").addClass('trackingCtaMobile'); }
}, 100);

setInterval(function(){
  if(jQuery(".trackingCta").length === 0){
    jQuery(document).on('mousedown', '.btnAncre', function () { ABTastyClickTracking('Clic ancre avis desktop', null, 639387); ev.stopPropagation();});
    jQuery(".btnAncre").addClass('trackingCta'); }
}, 100);

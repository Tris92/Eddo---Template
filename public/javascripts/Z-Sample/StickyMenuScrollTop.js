//CODE

jQuery('.select-global option:contains("Trier Par")').text('Trier');

jQuery("body").append("<style>@media (min-width: 375px) and (max-width: 767px) {.topPanelWrapper .list-map-toggle{margin-left:0px;}.topPanelWrapper .list-map-toggle button{float: none;} #show_hotels_on_a_map,#show_hotels_on_a_list{background-color: #FFF;border: 1px solid;border-radius: 5px;}.map_on_hotel.liste-view{display: block;} .uk-button:hover, .uk-button:focus{background-color: #fff; color: #003c7e;} .uk-button:active{background-color: #fff; color: #003c7e;} .summaryBar #summary-col { padding-top: 0 !important; } .ResultsFilters { display: flex; align-items: center; justify-content: space-between; } .ResultsFilters a { background: url(https://image.flaticon.com/icons/svg/263/263067.svg); background-repeat: no-repeat; background-position: center; background-size: auto; text-indent: -9999px; display: inline-block; width: 25px; height: 30px; } .ResultsFilters button { margin-bottom: 0; min-width: 70px; } .ResultsFilters button, .ResultsFilters .btnFilter { font-size: 9px; } .ResultsFilters select { width: 70px; margin-bottom: 0; font-size: 10px; padding-right: 25px !important; background-position: right -17px center !important; } .summaryBar .rightCol #btn-modify-stay { margin-top: 0; } .topPanelWrapper { position: fixed; bottom: 0; width: 100%; left: 0; background: white; z-index: 20; padding: 2px 10px; display: flex; justify-content: left; align-items: center; } .topView .top-panel { padding-bottom: 0; } .summaryBar .rightCol #btn-modify-stay { width: 80px; margin: 0; padding: 7px 5px; } .topPanelWrapper { display: flex; justify-content: left; align-items: center; } .topPanelWrapper .list-map-toggle{width:100% !important;position: fixed;float: none;bottom: 5%;text-align: center;}.summaryBar .leftCol #dates-guests-col{width:65% !important; float: left;} .button-modif-stay {width: 35% !important; float: right; padding-top: 0px !important; padding-bottom: 0px !important;} .summaryBar .leftCol #dates-guests-col .detail-field {line-height: 15px !important;}span#summary-destination {line-height: 12px;}} .footer_liste{z-index: 999 !important;} .summaryBar .detail.destination{width:100% !important; display:block !important;} .summaryBar{padding-bottom: 9px !important;} .summaryBar .detail.destination{padding-bottom: 3px !important;} }</style>");

jQuery("body").append("<style>@media (min-width: 305px) and (max-width: 374px) {.topPanelWrapper .list-map-toggle{margin-left:0px;}.topPanelWrapper .list-map-toggle button{float: none;} #show_hotels_on_a_map,#show_hotels_on_a_list{background-color: #FFF;border: 1px solid;border-radius: 5px;} .map_on_hotel.liste-view{display: block;} .uk-button:hover, .uk-button:focus{background-color: #fff; color: #003c7e;} .uk-button:active{background-color: #fff; color: #003c7e;} .summaryBar #summary-col { padding-top: 0 !important; } .ResultsFilters { display: flex; align-items: center; justify-content: space-between; } .ResultsFilters a { background: url(https://image.flaticon.com/icons/svg/263/263067.svg); background-repeat: no-repeat; background-position: center; background-size: auto; text-indent: -9999px; display: inline-block; width: 25px; height: 30px; } .ResultsFilters button { margin-bottom: 0; min-width: 60px; padding: 0 6px;margin: 0 2px;} .ResultsFilters button, .ResultsFilters .btnFilter { font-size: 8px; } .ResultsFilters select { width: 70px; margin-bottom: 0; font-size: 10px; padding-right: 25px !important; background-position: right -17px center !important; } .summaryBar .rightCol #btn-modify-stay { margin-top: 0; } .topPanelWrapper { position: fixed; bottom: 0; width: 100%; left: 0; background: white; z-index: 20; padding: 2px 10px; display: flex; justify-content: left; align-items: center; } .topView .top-panel { padding-bottom: 0; } .summaryBar .rightCol #btn-modify-stay { width: 80px; margin: 0; padding: 7px 5px; } .topPanelWrapper { display: flex; justify-content: left; align-items: center; } .topPanelWrapper .list-map-toggle{width:100% !important;position: fixed;float: none;bottom: 5%;text-align: center;}.summaryBar .leftCol #dates-guests-col{width:65% !important; float: left;} .button-modif-stay {width: 35% !important; float: right; padding-top: 0px !important; padding-bottom: 0px !important;} .summaryBar .leftCol #dates-guests-col .detail-field {line-height: 15px !important;}span#summary-destination {line-height: 12px;}} .footer_liste{z-index: 999 !important;} .summaryBar .detail.destination{width:100% !important; display:block !important;} .summaryBar{padding-bottom: 9px !important;} .summaryBar .detail.destination{padding-bottom: 3px !important;} }</style>");

jQuery("body").append("<style>#currency_alerte{position: relative;margin: 10px;margin-top: 40px;}.active{background-color: #003c7e!important; color: #fff!important;} .display{display:none;}.topPanelWrapper .list-map-toggle button:nth-child(2){border-left: bloc;border-top-left-radius: bloc;border-bottom-left-radius: blo;}</style>");

var euroBtn = document.querySelector("#devise_code");
var service = document.querySelector("#services");
var serviceFiltre = document.querySelector("#serviceFiltre");

jQuery('#PlusFiltreHotel').after(euroBtn);
jQuery(serviceFiltre).css({'display':'none'});
jQuery('.filtrePrix').after(service);

jQuery('#noteClientFiltre').click(function() {
  jQuery(service).addClass('uk-hidden');
});

jQuery('#PlusFiltreHotel').click(function() {
  jQuery(service).removeClass('uk-hidden');
});

jQuery("#btn-modify-stay").text("Modifier");
jQuery("#dates-guests-col").after(jQuery(".button-modif-stay"));
jQuery("#show_hotels_on_a_list").addClass("display");
var position = jQuery(window).scrollTop();

//stycky element on scroll
jQuery(window).scroll(function() {
  var elValFromTop = Math.ceil(jQuery('.map_on_hotel').offset().top),
  elHeight = jQuery('.map_on_hotel').outerHeight(),
  windowHeight = jQuery(window).height(),
  windowScrollValFromTop = jQuery(this).scrollTop(),
  headerHeightOffset = jQuery('.fixed-header').outerHeight();

  var scroll = jQuery(window).scrollTop();
  if(scroll > position) {
  //console.log('scrollDown');
  if ((windowHeight + windowScrollValFromTop) > elValFromTop){
  // console.log('element is in view!');
    jQuery('#show_hotels_on_a_list').removeClass('display active');
    jQuery('#show_hotels_on_a_map').addClass('display');
  }
  jQuery(".stickyTopWrapper").css({ "position": "relative", "height": "120px", "display": "block", "width": "100%", "z-index": "auto", "top": "auto", "background": "white", "margin-top": "0px", "padding-top": "7px", "box-shadow": "none"});
  } else {
    if((windowHeight + windowScrollValFromTop) < elValFromTop) {
    //console.log('liste is in view!');
      jQuery('#show_hotels_on_a_list').addClass('display');
      jQuery('#show_hotels_on_a_map').removeClass('display active');
    }
    if(position > 210){
    //console.log('scrollUp');
      jQuery(".stickyTopWrapper").css({ "position": "fixed", "height": "130px", "display": "block", "width": "100%", "z-index": "9999", "top": "0", "background": "white", "margin-top": "0px", "padding-top": "7px", "box-shadow": "0 2px 7px rgba(0, 0, 0, 0.1)"});
    }
    if(position < 210){
      jQuery(".stickyTopWrapper").css({ "position": "relative", "height": "115px", "display": "block", "width": "100%", "z-index": "auto", "top": "auto", "background": "white", "margin-top": "0px", "padding-top": "7px", "box-shadow": "none"});}
  }
  position = scroll;
});

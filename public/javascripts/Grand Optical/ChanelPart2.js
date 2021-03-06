// *************************************** VARIATION 3  *********************************************************

jQuery("body").append("<div class='font-not-on-ie' style='display:none;'><style>@font-face{ font-family: 'ABChanelCorpo-SemiBold';  src: url('https://fr-gv-gop.qa.grandvision.global/medias/ABChanelCorpo-SemiBold.otf?context=bWFzdGVyfHJvb3R8NTk5MTJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg5Yy9oY2YvODg1MjEzODQ1OTE2Ni5iaW58MzNkZGM2NmQxYTg3M2IwZjQ3Yjc2ZTExNWYzMDk1YzEwNDIyN2FmY2ZkYTU2M2IzNWRiZjc3MzU1NmIyZTY4Yw'); format('truetype'); font-style: SemiBold;}</style></div>");

//SAFARI CODE
if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  jQuery("body").append("<style>@font-face{ font-family: 'Helvetica Light'; font-style: Light; src: url('https://fr-gv-gop.qa.grandvision.global/medias/helvetica-light.ttf?context=bWFzdGVyfHJvb3R8NTA1ODN8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg4Ni9oOTkvODg1MjIyMTY1NzExOC5iaW58MzAxODQwNjVhODBhZWFkYTM5NWJjNzkzMTE1NWEyZWRiY2ZkYjE4MDA2NzE3NzRhM2E4NGM2MjFjNjc1NjUzNw') format('truetype');}</style>");
}

jQuery("body").append("<style>@font-face { font-family: 'ABChanelCorpo-ExtraLight'; font-style: ExtraLight; src: url('/medias/ABChanelCorpo-ExtraLight.otf?context=bWFzdGVyfHJvb3R8NTY4NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhjYi9oOTUvODg1MjEzODE2NDI1NC5iaW58ZWY4MTMzMGJjYTQwZmIyNWU3NjA5NGFkYjg0NWE2ZDBhZmQ2Y2FlZDhhMGFlYThiOTM1NmYwZTEwMjZkNmNmZg');} @font-face { font-family: 'ABChanelCorpo-Light'; font-style: Light; src: url('/medias/ABChanelCorpo-Light.otf?context=bWFzdGVyfHJvb3R8NTg5NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhZi9oMWMvODg1MjEzODI2MjU1OC5iaW58NTlmOTg3MWQ1ZGE4NDAxNDc1ODIwNDRlMDQ1NWJiNzEwYjAyNjcyZmY2MWI5ODExZTY4NzEyMWM5YzljNDg2ZA');}@font-face { font-family: 'ABChanelCorpo-Regular'; font-style: Regular; src: url('/medias/ABChanelCorpo-Regular.otf?context=bWFzdGVyfHJvb3R8NTYwMDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGgxYy9oNWEvODg1MjEzODM2MDg2Mi5iaW58NTExNDBjODQzMzU5NjFjY2FhMzczMDA5MjIzYWNlMzk0MTY0MDE1ZTRmZjk2NjU0NjM0YzdjMDUyOTRmNDhjNQ');} </style>");

jQuery("body").append("<style type='text/css'>  .product-container--brand-synergieName, .pageType-ProductPage .price, .pageType-ProductPage .product-container--price--infos { font-size: 0.8rem; text-transform: lowercase; font-family: Helvetica Light, Helvetica; color: #333; font-weight: 300;} .product-container--price--details{text-align: left;} h1 a { text-decoration: none;} </style>");
jQuery("body").append("<style>@font-face { font-family: 'ABChanelCorpo-ExtraLight'; font-style: ExtraLight; src: url('/medias/ABChanelCorpo-ExtraLight.otf?context=bWFzdGVyfHJvb3R8NTY4NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhjYi9oOTUvODg1MjEzODE2NDI1NC5iaW58ZWY4MTMzMGJjYTQwZmIyNWU3NjA5NGFkYjg0NWE2ZDBhZmQ2Y2FlZDhhMGFlYThiOTM1NmYwZTEwMjZkNmNmZg');} @font-face { font-family: 'ABChanelCorpo-Light'; font-style: Light; src: url('/medias/ABChanelCorpo-Light.otf?context=bWFzdGVyfHJvb3R8NTg5NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhZi9oMWMvODg1MjEzODI2MjU1OC5iaW58NTlmOTg3MWQ1ZGE4NDAxNDc1ODIwNDRlMDQ1NWJiNzEwYjAyNjcyZmY2MWI5ODExZTY4NzEyMWM5YzljNDg2ZA');}@font-face { font-family: 'ABChanelCorpo-Regular'; font-style: Regular; src: url('/medias/ABChanelCorpo-Regular.otf?context=bWFzdGVyfHJvb3R8NTYwMDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGgxYy9oNWEvODg1MjEzODM2MDg2Mi5iaW58NTExNDBjODQzMzU5NjFjY2FhMzczMDA5MjIzYWNlMzk0MTY0MDE1ZTRmZjk2NjU0NjM0YzdjMDUyOTRmNDhjNQ');}</style>");


//Desktop
if (window.matchMedia('(min-width: 1025px)').matches){
  //Remplace le nombre de produit affiché trois par trois
  jQuery('.itemGrid-1third').css({'width': '33%', 'padding': '72px .75rem'});

  //Bouton "ajouter au panier"
  jQuery('.product-list--details--simple-product').after('<span class="test_cart_button">Ajouter au panier</span>');
  jQuery('.test_cart_button').css({'text-transform': 'uppercase', 'font-size': '11px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'font-weight': '600'});

  // modification image couleurs par phrase avec nombres de couleurs

  setTimeout( function() {
    jQuery( ".product-colors .colors").each(function(e) {
    var colornumab = jQuery(this).find(".js-variantColor.variant-color").length;
    if(colornumab === 1){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">1 couleur disponible</span>');}
    if(colornumab === 2){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">2 couleurs disponibles</span>');}
    if(colornumab === 3){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">3 couleurs disponibles</span>');}
    if(colornumab === 4){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">4 couleurs disponibles</span>');}
    if(colornumab === 5){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">5 couleurs disponibles</span>');}
    if(colornumab === 6){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">6 couleurs disponibles</span>');}
    if(colornumab === 7){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">7 couleurs disponibles</span>');}
    if(colornumab === 8){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">8 couleurs disponibles</span>');}
    if(colornumab === 9){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">9 couleurs disponibles</span>');}
    if(colornumab === 10){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">10 couleurs disponibles</span>');}
    if(colornumab === 11){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">11 couleurs disponibles</span>');}
    });
  },100)

  setTimeout( function() {
    //suppresion trier par
    jQuery('.facet--component--content--sort').remove();
    //suppression "voir tous les filtres"
    jQuery('.see-more-filter').remove();
  },100)

  //Bandeau Chanel en fullwidth
  jQuery('.simple_disp-img IMG').addClass("bandeauFull");
  jQuery('.bandeauFull').css({'width': '113%', 'margin': '0', 'margin-left': '-80px', 'display': 'flex', 'max-width': '113%'});

  //Format du prix
  jQuery('.product-list--price--simple--simple-product').css({'font-size': '12px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'line-height': '12px', 'color': 'black'});
  jQuery('.product-list--price--new').css({'font-size': '12px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'line-height': '12px', 'color': 'black'});

  //inverser prix et couleurs
  jQuery('.product-list--description--simple-product').css({'margin-top': '20px'})
  jQuery('.product-colors').css({'height': '30px', 'margin-top': '-45px', 'margin-bottom': '20px'});

  //remove categorie filter
  jQuery('.facet--component--list .productType').css({'display': 'none'});

  //Forme des filtres
  jQuery('.frameShape DIV UL').addClass('shapeChanel');
  jQuery('.shapeChanel').css({'align-items': 'center'});
  jQuery("ul.shapeChanel li input").css({"display":"inline", "-moz-appearance":"button"});
  jQuery("ul.shapeChanel li svg").remove();
  jQuery(".facet--item--group.frameShape ul.shapeChanel label").css("flex-direction", "row");
  jQuery(".facet--item--group li").css({"width":"92%", "margin-left":"auto", "margin-right":"auto"});
  jQuery(".facet--item--group.frameShape li label span").css("text-transform","capitalize");
  jQuery(".facet--component--list .facet-group").css("margin-top", "0 rem");

  jQuery(".facet--component--container.js-facet-nav li label, .facet--component--container.js-facet-nav .label").css({"font-family":"Helvetica Light, Helvetica", "font-size":"14px"});
  jQuery("#productList DIV.flex.itemGrid-1third.product-list--item--type--optique .product-list--item--wrapper--simple-product .product-list--details .product-colors-sizes").css("height", "25px");
  jQuery(".facet--item--group.frameShape span").css("text-transform", "capitalize");

  jQuery("#facetNavRefinements .facet--btn input.disabled").removeAttr("disabled");
  jQuery('.simple_disp-img:eq(1)').css({'border-top': '1px solid #b2b2b2'});

  jQuery('.category_chanel A').css({'text-decoration': 'none'});
  jQuery('.category_chanel A:eq(0)').css({'text-decoration': 'none'});

  jQuery( ".frameWebColour li span.hidden" ).removeClass("hidden");
  jQuery( ".frameWebColour li span.variant-color--circle" ).remove();

  // Changer l'url des lunettes solaires
  jQuery('.category_chanel A:eq(0)').attr("href", "https://fr-gv-gop.qa.grandvision.global/lunettes-de-soleil/femme/marque/chanel/c/19609");

  //cacher le dépassement de la page
  jQuery('body').css({'overflow-x': 'hidden'});
}

// ********************************************************************************

//Ipad Pro
if (window.matchMedia('(min-width: 600px)').matches){

  //Format du prix
  jQuery('.product-list--price--simple--simple-product').css({'font-size': '10px', 'font-family': 'ABChanelCorpo-SemiBold", Helvetica, Arial, sans-serif'});
  //Bouton "ajouter au panier"
  jQuery('.product-list .product-colors').css({'height': '30px'});
  jQuery('.bandeauFull').css({'width': '100%', 'margin': '0', 'margin-left': '0px', 'display': 'flex', 'max-width': '100%'});

  //Bouton "ajouter au panier"
  jQuery('.test_cart_button').css({'text-transform': 'uppercase', 'font-size': '12px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'margin-top': '33px'});

  setTimeout( function() {
    //suppresion trier par
    jQuery('.facet--component--content--sort').remove();
    //suppression "voir tous les filtres"
    jQuery('.see-more-filter').remove();
  },100)

  jQuery('.category_chanel A:eq(0)').attr("href", "https://fr-gv-gop.qa.grandvision.global/lunettes-de-soleil/femme/marque/chanel/c/19609");

  //Fait apparaitre les couleurs en mobile
  jQuery('.product-colors').removeClass("hidden-xs");
  jQuery('.product-colors').removeClass("hidden-sm");

  // modification image couleurs par phrase avec nombres de couleurs
  setTimeout( function() {
    jQuery( ".product-colors .colors").each(function(e) {
      var colornumab = jQuery(this).find(".js-variantColor.variant-color").length;
      if(colornumab === 1){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">1 couleur disponible</span>');}
      if(colornumab === 2){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">2 couleurs disponibles</span>');}
      if(colornumab === 3){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">3 couleurs disponibles</span>');}
      if(colornumab === 4){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">4 couleurs disponibles</span>');}
      if(colornumab === 5){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">5 couleurs disponibles</span>');}
      if(colornumab === 6){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">6 couleurs disponibles</span>');}
      if(colornumab === 7){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">7 couleurs disponibles</span>');}
      if(colornumab === 8){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">8 couleurs disponibles</span>');}
      if(colornumab === 9){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">9 couleurs disponibles</span>');}
      if(colornumab === 10){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">10 couleurs disponibles</span>');}
      if(colornumab === 11){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">11 couleurs disponibles</span>');}
    });
  },100)

  //remove Trier par
  jQuery('.facet--component--content--sort').remove();

  jQuery('.category_chanel a').css({'text-decoration': 'none', 'font-size': '15px'});

  jQuery('.sticky-wrapper').remove();

  //inverser prix et couleurs
  jQuery('.product-list--description--simple-product').css({'margin-bottom': '-6px'});
  jQuery('.product-colors').css({'height': '30px', 'margin-top': '-80px'});

  //Bordure sur mobile du bouton "Filtrer par"
  jQuery('.facet--component--content').css({'border': '0px', 'margin-left': '10px'});
  jQuery('.facet').css({'border': 'solid #b2b2b2', 'border-width': '0.07142857142857142rem 0'});
  jQuery('.products-list-content.js-display-choice:contains(Filtrer par)').css({'display': 'flex', 'justify-content': 'flex-start'});
  jQuery('.facet--component--content--filter').css({'display': 'flex'});
  jQuery('.product-list--price--simple--simple-product').css({'margin-top': '10px'});

  jQuery('.facet .facet--component').css({'display': 'flex', 'justify-content': 'flex-start', 'margin-left': '10px'});

  setTimeout( function() {
    jQuery('.facet--component--content:contains(Filtrer par)').on('click', function() {
      jQuery('.facet--component--list--filter SPAN .js-facets-opener').remove();
      jQuery('.facet--component--list--filter SPAN:contains(résultats)').remove();
      jQuery('.height-preheader IMG').remove();
      jQuery('.facet--component--list--filter SPAN:contains((9))').remove();
      jQuery('.facet--component--list--filter .facet--close').remove();

      jQuery('.frameGenre').remove();
      jQuery('.promoStickerNames').remove();
      jQuery('.js-facets-opener:contains(Filtrer par)').css({'text-align': 'left'});
      jQuery('.productType').remove();
    });
  },100)
}

// ********************************************************************************

//Mobile
if (window.matchMedia('(max-width: 420px)').matches){
  //Format du prix
  jQuery('.product-list--price--simple--simple-product').css({'font-size': '8px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'margin-top': '-20px'});

  //Bouton "ajouter au panier"
  jQuery('.product-list--item--wrapper--simple-product').after('<span class="test_cart_button">Ajouter au panier</span>');
  jQuery('.test_cart_button').css({'text-transform': 'uppercase', 'font-size': '8px', 'font-family': '"ABChanelCorpo-SemiBold", Helvetica, Arial, sans-serif', 'font-weight': '600', 'margin-top': '16px'});

  //Fait apparaitre les couleurs en mobile
  jQuery('.product-colors').removeClass("hidden-xs");
  jQuery('.product-colors').removeClass("hidden-sm");

  // modification image couleurs par phrase avec nombres de couleurs
  setTimeout( function() {
    jQuery( ".product-colors .colors").each(function(e) {
      var colornumab = jQuery(this).find(".js-variantColor.variant-color").length;
      if(colornumab === 1){jQuery(this).html('<span style="font-size: 8px; font-family: Helvetica Light, Helvetica;">1 couleur disponible</span>');}
      if(colornumab === 2){jQuery(this).html('<span style="font-size: 8px; font-family: Helvetica Light, Helvetica;">2 couleurs disponibles</span>');}
      if(colornumab === 3){jQuery(this).html('<span style="font-size: 8px; font-family: Helvetica Light, Helvetica;">3 couleurs disponibles</span>');}
      if(colornumab === 4){jQuery(this).html('<span style="font-size: 8px; font-family: Helvetica Light, Helvetica;">4 couleurs disponibles</span>');}
      if(colornumab === 5){jQuery(this).html('<span style="font-size: 8px; font-family: Helvetica Light, Helvetica;">5 couleurs disponibles</span>');}
      if(colornumab === 6){jQuery(this).html('<span style="font-size: 8px; font-family: Helvetica Light, Helvetica;">6 couleurs disponibles</span>');}
      if(colornumab === 7){jQuery(this).html('<span style="font-size: 8px; font-family: Helvetica Light, Helvetica;">7 couleurs disponibles</span>');}
      if(colornumab === 8){jQuery(this).html('<span style="font-size: 8px; font-family: Helvetica Light, Helvetica;">8 couleurs disponibles</span>');}
      if(colornumab === 9){jQuery(this).html('<span style="font-size: 8px; font-family: Helvetica Light, Helvetica;">9 couleurs disponibles</span>');}
      if(colornumab === 10){jQuery(this).html('<span style="font-size: 8px; font-family: Helvetica Light, Helvetica;">10 couleurs disponibles</span>');}
      if(colornumab === 11){jQuery(this).html('<span style="font-size: 8px; font-family: Helvetica Light, Helvetica;">11 couleurs disponibles</span>');}
    });
  },100)


  //remove Trier par
  jQuery('.facet--component--content--sort').remove();

  //Format du prix
  jQuery('.product-list--price--new').css({'font-size': '10px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'line-height': '12px', 'color': 'black'});

  //inverser prix et couleurs
  jQuery('.product-list--description--simple-product').css({'margin-top': '23px', 'margin-bottom': '-10px'});
  jQuery('.product-colors').css({'height': '30px', 'margin-top': '-37px'});

  jQuery('.facet--component--content .facet--component--content--filter').click(function() {
    //Aligne la popin avec le logo Chanel
    jQuery('#facetNavRefinements .facet--component--list').css({'margin-top': '100px'});
    //remove categorie filter
    jQuery('.facet--component--list .productType').css({'display': 'none'});
  });

  jQuery('.product-list--name--simple-product').css({'margin-bottom': '5px'});

  //Forme des FILTRES
  jQuery(".facet--item--group.frameShape li svg").remove();
  jQuery("#facetNavRefinements .quantity.facet-group.frameShape .facet--item--group DIV UL").css("font-family", "Helvetica Light, Helvetica");
  jQuery(".facet--item--group.frameShape li input").attr("style", "display: inline !important; -moz-appearance:button;");
  jQuery(".facet--item--group.frameShape li label").css("flex-direction", "row");
  jQuery(".facet--item--group.frameShape li label span").css({"text-transform":"capitalize","font-family":"Helvetica, Arial, sans-serif", "font-weight": "400"});
  jQuery(".facet--item--group.frameWebColour li label span").css({"font-family":"Helvetica, Arial, sans-serif", "font-weight": "400"});

  jQuery("#face-result-ab DIV B, #face-result-ab DIV span, .product-colors-sizes.colors span").css("font-family", "Helvetica Light, Helvetica");
  jQuery(".facet--item--group.frameShape li").css("padding", "0.5rem");
  jQuery('.facet .frameShape ul').css({'width': '100%', 'display': 'block'});

  jQuery(".facet--component--container.js-facet-nav li label, .facet--component--container.js-facet-nav .label").css({"font-family":"Helvetica Light, Helvetica", "font-size":"10px"});
  jQuery("#productList DIV.flex.itemGrid-1third.product-list--item--type--optique .product-list--item--wrapper--simple-product .product-list--details .product-colors-sizes").css("height", "25px");
  jQuery(".facet--item--group.frameShape span").css("text-transform", "capitalize");

  jQuery("#facetNavRefinements .facet--btn input.disabled").removeAttr("disabled");

  jQuery('.category_chanel A').css({'text-decoration': 'none'});
  jQuery( ".frameWebColour li span.hidden" ).removeClass("hidden");
  jQuery( ".frameWebColour li span.variant-color--circle" ).remove();

  jQuery('.yCmsComponent.simple_disp-img').css({'border-top': '0px'});

  //Code Seb pour popin filtrer par
  jQuery("span:contains(Filtrer par) a").css({"color":"black", "padding-right":"5rem"});
  jQuery(".facet--component--list--filter").css({"justify-content":"left"});
  jQuery(".js-facet-count").closest("span").css({"padding-left":"5px", "padding-top":"15px"})
  jQuery('.facet--clear-filter A').css({'border': '1px solid black', 'color': 'black', 'text-decoration': 'none'});

  //Bordure sur mobile du bouton "Filtrer par"
  jQuery('.facet--component--content').css({'border': '0px', 'margin-left': '10px'});
  jQuery('.facet').css({'border': 'solid #b2b2b2', 'border-width': '0.07142857142857142rem 0'});
  jQuery('.products-list-content.js-display-choice:contains(Filtrer par)').css({'display': 'flex', 'justify-content': 'flex-start'});

  // jQuery('.facet--results').css({'display': 'none'});

  jQuery('.facet--component--content--filter').before('<img class="img-filter-go" src="https://www.optical-center.fr/workspace/medias/images/filter.svg" alt="" />');
  jQuery('.sticky-wrapper').remove();
  jQuery('.facet--component').css({'justify-content': 'flex-start'});

  setTimeout( function() {
    jQuery('.facet--component--content:contains(Filtrer par)').on('click', function() {
      jQuery('.facet--component--list--filter SPAN .js-facets-opener').remove();
      jQuery('.facet--component--list--filter SPAN:contains(résultats)').remove();
      jQuery('.height-preheader IMG').remove();
      jQuery('.facet--component--list--filter SPAN:contains((9))').remove();
      jQuery('.facet--component--list--filter .facet--close').remove();

      jQuery('.frameGenre').remove();
      jQuery('.promoStickerNames').remove();
      jQuery('.js-facets-opener:contains(Filtrer par)').css({'text-align': 'left'});

      setTimeout( function() {
        jQuery('.facet--component--content--filter.js-facets-opener').after('<div class="closePopin"><button class="facet--close js-close-facet">x</button></div>');
        jQuery('.closePopin').css({'width': '20px', 'color': 'black'})
      },100)
    });
  },100)

  jQuery('.category_chanel A:eq(0)').attr("href", "https://fr-gv-gop.qa.grandvision.global/lunettes-de-soleil/femme/marque/chanel/c/19609");
}

jQuery("body").append('<style>.facet--component.js-sticky.js-display-choice.js-sticky-cloned.js-sticky-cloned-sticked, .facet-group.priceValue.js-facet--component, .quantity.facet-group.brandName.js-facet--component, .facet--view, span.product_brand, .test_header { display: none !important;}.dual-range .slider, .dual-range .slider.focus, .dual-range .slider.hover, .dual-range .track, .facet--item--group.frameShape li.facet-checked svg { fill: black !important;}.facet--item--group.frameShape li.facet-checked .label { color: black !important;}li.input-check.facet-checked input { background: black !important;}@media screen and (min-width: 1025px) {.facet--btn .btn{padding: 1rem 1rem !important;}.facet--component {max-width: 98rem;}content-head--title,.facet--view,.product-list--tile--position-1 { display: none}.facet { border-bottom: 1px solid #d3d3d33d;}input[type=checkbox] { -webkit-appearance: none; -moz-appearance: none; -ms-appearance: none;}input[type=checkbox] { height: 9px; width: 9px; background: #fff; border: 1px solid #000;}input[type="checkbox"]:checked { background: #000;}.product_name span,.product-list--price,.test_cart_button, .js-facet-reminder, .btn {}#main-content .products-list-content .facet .facet--component { border-top: 1px solid #B2B2B2; border-bottom: 1px solid #B2B2B2;}}@media screen and (max-width: 1024px) { .facet--component--list button[type=button].btn .label{max-width:239px;} .facet--component--list.height-preheader{margin-top: 0rem !important}[type=reset], [type=submit], button, html [type=button]{-webkit-appearance: initial !important; appearance: initial !important; border-radius : initial;} .js-facet-customscroll { display: flex !important; flex-direction: column !important;} .facet-group .btn { border-style: none!important;}.facet--component--list{left:0;z-index: 99999 !important;top: 6em !important;}.facet--component { display: flex; justify-content: center; align-items: center; font-weight: bold;}.facet--component .facet--component--resultat{ font-weight: bold !important; margin: 0;}.facet--component .facet--component--resultat b{ font-weight: bold !important;}.sort { display: flex; align-items: center;} .facet--item--group { display: block;}.js-facet-customscroll ul{ display: flex !important; flex-direction: column !important; flex-wrap: unset !important;}input[name=frameWebColour] { display: block; width: 9px; height: 9px;}.frameShape .js-facet-customscroll li label input { display: none !important;}} #facetNavRefinements .quantity.facet-group.frameWebColour .facet--item--group DIV UL { display: flex; flex-direction: column; justify-content: flex-start;}#facetNavRefinements .quantity.facet-group.frameWebColour .facet--item--group DIV UL li input { height: 9px; width: 9px; background: #fff; border: 1px solid #000; -webkit-appearance: none; -moz-appearance: none; -ms-appearance: none;}#main-content .facet .facet--component .hidden-md.hidden-lg.facet--component--content { width : 100%;}#main-content .facet--component .hidden-md DIV{ border: none; text-align: left; flex-direction: row !important; }.facet--component--content--filter { display: flex; flex-direction: row; border: none;}#main-content .facet--component .hidden-md { display:flex; flex-direction: row;}#frameGenre-Enfant, #frameGenre-Femme, #frameGenre-Homme { margin-right: 10px;}#facetNavRefinements .quantity.facet-group.frameShape .facet--item--group DIV UL { display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0;}#face-result-ab DIV B, #face-result-ab DIV span { font-weight: 300; margin-right: 5px; font-size: 14px; color: #AAA;}#face-result-ab { display: flex; justify-content: space-between; align-items : center;}#facetNavRefinements .facet--component--list .facet--clear-filter A{ border: none; font-weight: lighter; padding: 14.0581px; color: #AAA; text-decoration: underline; font-size: 14px; text-transform: none;}#facetNavRefinements .facet--component--list .facet--clear-filter A:hover{ background-color: #FFF;}#facetNavRefinements .facet--component--list--filter SPAN { align-self: center;}#facetNavRefinements .facet--component--list--filter SPAN A{ color: #AAA; max-height: 14px;}.dual-range .inputs input[type=range] { color: #222; background-color: #222;}#facetNavRefinements .quantity.facet-group.frameShape .facet--item--group DIV UL { display: flex; flex-direction: column; align-items: flex-start;}.facet .accessoryColour input[type=checkbox], .facet .accessoryColour.disabled, .facet .contactLensColour input[type=checkbox], .facet .contactLensColour.disabled, .facet .frameLensColour input[type=checkbox], .facet .frameLensColour.disabled, .facet .frameShape input[type=checkbox], .facet .frameShape.disabled, .facet .frameWebColour input[type=checkbox], .facet .frameWebColour.disabled { display: block;}[type="checkbox"] { height: 9px; width: 9px; background: #fff; border: 1px solid #000;}[type="checkbox"]:checked { background: #000;}.facet--item--group [type=radio], .facet--item--group [type=checkbox]{border-radius: initial !important;}.facet--component--list button[type=button].btn .quantity{margin-right:0.9rem}</style>');

// END VARIATION 3








  setTimeout( function() {
    if(jQuery('.facet--component.js-sticky:visible')){
      jQuery('.js-sticky-cloned-sticked.img-filter-go:eq(0)').css({'display': 'none'});
    }
  },100)


  jQuery(function() {
  jQuery(window).on('wheel', function(e) {
  	var delta = e.originalEvent.deltaY;
  	if (delta > 100) jQuery('body').text('down');
  	else jQuery('body').text('up');
  	return false;
  });
  });


//mot de passe pour site de préprod
Gr4ndv1s10n!
gvdevqa

//Lien recette
https://fr-gv-gop.qa.grandvision.global/lunettes-de-vue/femme/marque/chanel/c/13873?abchanelpagecate



XX








if ( $(element).css('display') == 'none' || $(element).css("visibility") == "hidden"){
    // 'element' is hidden
}



var button = $('#btnUpdate');
if (button.is(":visible"))
{
     button.animate({ width: "toggle" });   // Hide button
}






  jQuery("body").append("<style>@font-face { font-family: 'ABChanelCorpo-ExtraLight'; font-style: ExtraLight; src: url('/medias/ABChanelCorpo-ExtraLight.otf?context=bWFzdGVyfHJvb3R8NTY4NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhjYi9oOTUvODg1MjEzODE2NDI1NC5iaW58ZWY4MTMzMGJjYTQwZmIyNWU3NjA5NGFkYjg0NWE2ZDBhZmQ2Y2FlZDhhMGFlYThiOTM1NmYwZTEwMjZkNmNmZg');} @font-face { font-family: 'ABChanelCorpo-Light'; font-style: Light; src: url('/medias/ABChanelCorpo-Light.otf?context=bWFzdGVyfHJvb3R8NTg5NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhZi9oMWMvODg1MjEzODI2MjU1OC5iaW58NTlmOTg3MWQ1ZGE4NDAxNDc1ODIwNDRlMDQ1NWJiNzEwYjAyNjcyZmY2MWI5ODExZTY4NzEyMWM5YzljNDg2ZA');}@font-face { font-family: 'ABChanelCorpo-Regular'; font-style: Regular; src: url('/medias/ABChanelCorpo-Regular.otf?context=bWFzdGVyfHJvb3R8NTYwMDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGgxYy9oNWEvODg1MjEzODM2MDg2Mi5iaW58NTExNDBjODQzMzU5NjFjY2FhMzczMDA5MjIzYWNlMzk0MTY0MDE1ZTRmZjk2NjU0NjM0YzdjMDUyOTRmNDhjNQ');}</style>");

  jQuery("body").append("<style>@font-face { font-family: 'ABChanelCorpo-ExtraLight'; font-style: ExtraLight; src: url('/medias/ABChanelCorpo-ExtraLight.otf?context=bWFzdGVyfHJvb3R8NTY4NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhjYi9oOTUvODg1MjEzODE2NDI1NC5iaW58ZWY4MTMzMGJjYTQwZmIyNWU3NjA5NGFkYjg0NWE2ZDBhZmQ2Y2FlZDhhMGFlYThiOTM1NmYwZTEwMjZkNmNmZg');} @font-face { font-family: 'ABChanelCorpo-Light'; font-style: Light; src: url('/medias/ABChanelCorpo-Light.otf?context=bWFzdGVyfHJvb3R8NTg5NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhZi9oMWMvODg1MjEzODI2MjU1OC5iaW58NTlmOTg3MWQ1ZGE4NDAxNDc1ODIwNDRlMDQ1NWJiNzEwYjAyNjcyZmY2MWI5ODExZTY4NzEyMWM5YzljNDg2ZA');}@font-face { font-family: 'ABChanelCorpo-Regular'; font-style: Regular; src: url('/medias/ABChanelCorpo-Regular.otf?context=bWFzdGVyfHJvb3R8NTYwMDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGgxYy9oNWEvODg1MjEzODM2MDg2Mi5iaW58NTExNDBjODQzMzU5NjFjY2FhMzczMDA5MjIzYWNlMzk0MTY0MDE1ZTRmZjk2NjU0NjM0YzdjMDUyOTRmNDhjNQ');} </style>");

  jQuery("body").append("<div class='font-not-on-ie' style='display:none;'><style>@font-face{ font-family: 'ABChanelCorpo-SemiBold';  src: url('https://fr-gv-gop.qa.grandvision.global/medias/ABChanelCorpo-SemiBold.otf?context=bWFzdGVyfHJvb3R8NTk5MTJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg5Yy9oY2YvODg1MjEzODQ1OTE2Ni5iaW58MzNkZGM2NmQxYTg3M2IwZjQ3Yjc2ZTExNWYzMDk1YzEwNDIyN2FmY2ZkYTU2M2IzNWRiZjc3MzU1NmIyZTY4Yw'); format('truetype'); font-style: SemiBold;}</style></div>");


  //SAFARI CODE
  if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    jQuery("body").append("<style>@font-face{ font-family: 'Helvetica Light'; font-style: Light; src: url('https://fr-gv-gop.qa.grandvision.global/medias/helvetica-light.ttf?context=bWFzdGVyfHJvb3R8NTA1ODN8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg4Ni9oOTkvODg1MjIyMTY1NzExOC5iaW58MzAxODQwNjVhODBhZWFkYTM5NWJjNzkzMTE1NWEyZWRiY2ZkYjE4MDA2NzE3NzRhM2E4NGM2MjFjNjc1NjUzNw') format('truetype');}</style>");
  }

  //Remplace le nombre de produit affiché trois par trois
  jQuery('.itemGrid-1third').css({'width': '33%', 'padding': '72px .75rem'});

  //Bouton "ajouter au panier"
  jQuery('.product-list--details--simple-product').after('<span class="test_cart_button">Ajouter au panier</span>');
  jQuery('.test_cart_button').css({'text-transform': 'uppercase', 'font-size': '11px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'font-weight': '600'});

  // modification image couleurs par phrase avec nombres de couleurs
  setTimeout( function() {
    //suppresion trier par
    jQuery('.facet--component--content--sort').remove();
    //suppression "voir tous les filtres"
    jQuery('.see-more-filter').remove();
  },100)

  //Bandeau Chanel en fullwidth
  jQuery('.simple_disp-img IMG').addClass("bandeauFull");
  jQuery('.bandeauFull').css({'width': '113%', 'margin': '0', 'margin-left': '-80px', 'display': 'flex', 'max-width': '113%'});

  //Format du prix
  jQuery('.product-list--price--simple--simple-product').css({'font-size': '12px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'line-height': '12px', 'color': 'black'});
  jQuery('.product-list--price--new').css({'font-size': '12px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'line-height': '12px', 'color': 'black'});

  //inverser prix et couleurs
  jQuery('.product-list--description--simple-product').css({'margin-top': '20px'})
  jQuery('.product-colors').css({'height': '30px', 'margin-top': '-45px', 'margin-bottom': '20px'});

  //SAFARI CODE
  if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    jQuery('.product-colors').css({'height': '30px', 'margin-top': '-35px', 'margin-bottom': '20px'});
  }

  //remove categorie filter
  jQuery('.facet--component--list .productType').css({'display': 'none'});

  jQuery( ".product-colors .colors").each(function(e) {
  var colornumab = jQuery(this).find(".js-variantColor.variant-color").length;
  if(colornumab === 1){jQuery(this).html('<span class="colorText" style="font-size: 12px; font-family: Helvetica Light, Helvetica;">1 couleur disponible</span>');}
  if(colornumab === 2){jQuery(this).html('<span class="colorText" style="font-size: 12px; font-family: Helvetica Light, Helvetica;">2 couleurs disponibles</span>');}
  if(colornumab === 3){jQuery(this).html('<span class="colorText" style="font-size: 12px; font-family: Helvetica Light, Helvetica;">3 couleurs disponibles</span>');}
  if(colornumab === 4){jQuery(this).html('<span class="colorText" style="font-size: 12px; font-family: Helvetica Light, Helvetica;">4 couleurs disponibles</span>');}
  if(colornumab === 5){jQuery(this).html('<span class="colorText" style="font-size: 12px; font-family: Helvetica Light, Helvetica;">5 couleurs disponibles</span>');}
  if(colornumab === 6){jQuery(this).html('<span class="colorText" style="font-size: 12px; font-family: Helvetica Light, Helvetica;">6 couleurs disponibles</span>');}
  if(colornumab === 7){jQuery(this).html('<span class="colorText" style="font-size: 12px; font-family: Helvetica Light, Helvetica;">7 couleurs disponibles</span>');}
  if(colornumab === 8){jQuery(this).html('<span class="colorText" style="font-size: 12px; font-family: Helvetica Light, Helvetica;">8 couleurs disponibles</span>');}
  if(colornumab === 9){jQuery(this).html('<span class="colorText" style="font-size: 12px; font-family: Helvetica Light, Helvetica;">9 couleurs disponibles</span>');}
  if(colornumab === 10){jQuery(this).html('<span class="colorText" style="font-size: 12px; font-family: Helvetica Light, Helvetica;">10 couleurs disponibles</span>');}
  if(colornumab === 11){jQuery(this).html('<span class="colorText" style="font-size: 12px; font-family: Helvetica Light, Helvetica;">11 couleurs disponibles</span>');}
  });

  // Changer l'url des lunettes solaires
  jQuery('.category_chanel A:eq(0)').attr("href", "https://fr-gv-gop.qa.grandvision.global/lunettes-de-soleil/femme/marque/chanel/c/19609");

  //Forme des filtres
  jQuery('.frameShape DIV UL').addClass('shapeChanel');
  jQuery('.shapeChanel').css({'align-items': 'center'});
  jQuery("ul.shapeChanel li input").css({"display":"inline", "-moz-appearance":"button"});
  jQuery("ul.shapeChanel li svg").remove();
  jQuery(".facet--item--group.frameShape ul.shapeChanel label").css("flex-direction", "row");
  jQuery(".facet--item--group li").css({"width":"92%", "margin-left":"auto", "margin-right":"auto"});
  jQuery(".facet--item--group.frameShape li label span").css("text-transform","capitalize");
  jQuery(".facet--component--list .facet-group").css("margin-top", "0 rem");

  jQuery(".facet--component--container.js-facet-nav li label, .facet--component--container.js-facet-nav .label").css({"font-family":"Helvetica Light, Helvetica", "font-size":"14px"});
  jQuery("#productList DIV.flex.itemGrid-1third.product-list--item--type--optique .product-list--item--wrapper--simple-product .product-list--details .product-colors-sizes").css("height", "25px");
  jQuery(".facet--item--group.frameShape span").css("text-transform", "capitalize");

  jQuery("#facetNavRefinements .facet--btn input.disabled").removeAttr("disabled");
  jQuery('.logo .simple_disp-img').css({'border-top': '0px'});

  jQuery('.category_chanel A').css({'text-decoration': 'none'});
  jQuery('.category_chanel A:eq(0)').css({'text-decoration': 'none'});

  jQuery( ".frameWebColour li span.hidden" ).removeClass("hidden");
  jQuery( ".frameWebColour li span.variant-color--circle" ).remove();

  jQuery('.frameGenre').remove();

  jQuery('body').css({'overflow-x': 'hidden'});

  //Desktop
  if (window.matchMedia('(min-width:1024px)').matches){
    //Correction du bandeau en full-width
    jQuery('.js-facet-count-text:contains(résultat)').css({'margin-left': '10px'});
    //cacher le dépassement de la page
    jQuery('body').css({'overflow-x': 'hidden'});

    //résultat fix
    jQuery('.facet--component--resultat').css({'display': 'flex', 'align-items': 'center'});
  }

  // ********************************************************************************

  //Ipad Pro
  if (window.matchMedia('(min-width:721px) and (max-width: 1023px)').matches){
    //Correction du bandeau en full-width
    jQuery('.bandeauFull').css({'width': '100%', 'margin': '0', 'margin-left': '0px', 'display': 'flex', 'max-width': '100%'});
  }

  // ********************************************************************************

  //Mobile MAX 420PX
  if (window.matchMedia('(min-width:340px) and (max-width: 720px)').matches){
    jQuery("body").append('<style>.facet--component--list button[type=button].btn .quantity{border: 1px solid #b2b2b2;border-radius: 50%;padding: 0.16em 0.55em 0.1em 0.6em;font-size: .8rem;margin-left: .7rem;}.facet--item--group li{width:100%!important}.facet--item--group-content label > span{font-size:14px!important;font-weight:300!important;}.facet--component--container li label input{margin-right:12px;}.facet--component--container ul{padding: 0px .1rem 0;}.facet--component--container{padding: 0rem 1rem;}.frameShape .js-facet-customscroll li label input{display:inline!important;}.facet--component--content--sort{display:none!important;}.frameGenre{display:none!important;}.promoStickerNames{display:none!important;}</style>');
    //bandeau
    jQuery('.bandeauFull').css({'width': '100%', 'margin': '0', 'margin-left': '0px', 'display': 'flex', 'max-width': '100%'});

    //trier par .hide()
    jQuery('.display-mobile').hide();

    //Remplace le nombre de produit affiché trois par deux
    jQuery('.itemGrid-1third').css({'width': '49%', 'padding': '10px .75rem'});

    //Format du prix
    jQuery('.product-list--price--simple--simple-product').css({'font-size': '8px', 'font-family': 'ABChanelCorpo-SemiBold, sans-serif'});

    jQuery('.test_cart_button').css({'text-transform': 'uppercase', 'font-size': '8px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'font-weight': '600', 'margin-top': '5px'});

    //Fait apparaitre les couleurs en mobile + CSS
    jQuery('.product-colors').removeClass("hidden-xs");
    jQuery('.product-colors').removeClass("hidden-sm");
    jQuery('.colorText').css({'font-size': '8px','font-family': 'Helvetica, Arial, sans-serif' });

    //remove categorie filter
    jQuery('.facet--component--list .productType').css({'display': 'none'});

    //Bordure sur mobile du bouton "Filtrer par"
    jQuery('.facet--component--content').css({'border': '0px', 'margin-left': '10px'});
    jQuery('.facet').css({'border': 'solid #b2b2b2', 'border-width': '0.07142857142857142rem 0'});
    jQuery('.products-list-content.js-display-choice:contains(Filtrer par)').css({'display': 'flex', 'justify-content': 'flex-start'});

    // jQuery('.facet--component--content--filter').before('<img class="img-filter-go" src="https://www.optical-center.fr/workspace/medias/images/filter.svg" alt="" />');
    jQuery('.facet--component').css({'justify-content': 'flex-start'});
    jQuery('.facet--component--content--filter').css({'min-width': '100%', 'display': 'flex', 'border-right': '0px'});

    //enlève les bouton a droite de filtrer par
    jQuery('.js-display-column').hide();
    jQuery('.js-display-line').hide();

    //inverser prix et couleurs disponibles
    jQuery('.product-list--description--simple-product').wrap('<div class="newPriceAB"></div>');
    var newPriceAbTest = jQuery('.newPriceAB').html();
    jQuery('.product-colors').after('<div id="newOrderPrice">'+ newPriceAbTest +'</div>');
    jQuery('.newPriceAB').hide();
    // jQuery('.js-display-choice .template-result--facets DIV:nth-child(2)').addClass("btnAbTestA");

    jQuery('.product-colors').css({'height': '30px', 'margin-top': '-11px', 'margin-bottom': '-24px'});

    jQuery('.facet--close').css({'padding-left': '80px'});

    //filtres sur mobile
    var activeFilter = false;
    setInterval( function() {
      jQuery('.facet--component--content--filter:eq(2)').on('click', function() {
        activeFilter = true;
        if(activeFilter === true) {
          FiltrerPar.css({'display':'none'});
          jQuery('.frameShape .js-facet-customscroll li label input').css({'display': 'block!important'});
          jQuery('.frameShape .js-facet-customscroll li label span').css({'font-size': '12px', 'font-weight': '100'});
          jQuery('.frameWebColour .js-facet-customscroll li label span').css({'font-size': '12px', 'font-weight': '100'});
          jQuery('.template-result--facets').css({'width': '100%'});
          jQuery('.facet--component--list.height-preheader').css({'margin-top': '-50px'})
        }
      });
    },100)
    
    //filtres sur mobile --> cacher le deuxième bouton à l'apparition du menu
    var FiltrerPar = jQuery("div.hidden-md.hidden-lg.facet--component--content.js-sticky > div.facet--component--content--filter.visible-xs.visible-sm > button");
    var test = jQuery('.facet--component--list.height-preheader').attr('id','filtre');
    var Filtres = jQuery('#filtre');
        if(Filtres.hasClass('opened') === true){
            FiltrerPar.css({'display':'none'});
        }else{
            FiltrerPar.css({'display':'block'});
        }
    jQuery('.facet--close').click(function(){FiltrerPar.css({'display':'block'});});
    jQuery('.facet--clear-filter').click(function(){FiltrerPar.css({'display':'block'});});
    jQuery('.js-facets-opener:contains(Filtrer par)').css({'text-align': 'left'});
  }
  jQuery("body").append("<style type='text/css'>  .product-container--brand-synergieName, .pageType-ProductPage .price, .pageType-ProductPage .product-container--price--infos { font-size: 0.8rem; text-transform: lowercase; font-family: Helvetica Light, Helvetica; color: #333; font-weight: 300;} .product-container--price--details{text-align: left;} h1 a { text-decoration: none;} </style>");

  jQuery("body").append('<style>.facet--component.js-sticky.js-display-choice.js-sticky-cloned.js-sticky-cloned-sticked, .facet-group.priceValue.js-facet--component, .quantity.facet-group.brandName.js-facet--component, .facet--view, span.product_brand, .test_header { display: none !important;}.dual-range .slider, .dual-range .slider.focus, .dual-range .slider.hover, .dual-range .track, .facet--item--group.frameShape li.facet-checked svg { fill: black !important;}.facet--item--group.frameShape li.facet-checked .label { color: black !important;}li.input-check.facet-checked input { background: black !important;}@media screen and (min-width: 1025px) {.facet--btn .btn{padding: 1rem 1rem !important;}.facet--component {max-width: 98rem;}content-head--title,.facet--view,.product-list--tile--position-1 { display: none}.facet { border-bottom: 1px solid #d3d3d33d;}input[type=checkbox] { -webkit-appearance: none; -moz-appearance: none; -ms-appearance: none;}input[type=checkbox] { height: 9px; width: 9px; background: #fff; border: 1px solid #000;}input[type="checkbox"]:checked { background: #000;}.product_name span,.product-list--price,.test_cart_button, .js-facet-reminder, .btn {}#main-content .products-list-content .facet .facet--component { border-top: 1px solid #B2B2B2; border-bottom: 1px solid #B2B2B2;}}@media screen and (max-width: 1024px) { .facet--component--list button[type=button].btn .label{max-width:239px;} .facet--component--list.height-preheader{margin-top: 0rem !important}[type=reset], [type=submit], button, html [type=button]{-webkit-appearance: initial !important; appearance: initial !important; border-radius : initial;} .js-facet-customscroll { display: flex !important; flex-direction: column !important;} .facet-group .btn { border-style: none!important;}.facet--component--list{left:0;z-index: 99999 !important;top: 6em !important;}.facet--component { display: flex; justify-content: center; align-items: center; font-weight: bold;}.facet--component .facet--component--resultat{ font-weight: bold !important; margin: 0;}.facet--component .facet--component--resultat b{ font-weight: bold !important;}.sort { display: flex; align-items: center;} .facet--item--group { display: block;}.js-facet-customscroll ul{ display: flex !important; flex-direction: column !important; flex-wrap: unset !important;}input[name=frameWebColour] { display: block; width: 9px; height: 9px;}.frameShape .js-facet-customscroll li label input { display: none;}} #facetNavRefinements .quantity.facet-group.frameWebColour .facet--item--group DIV UL { display: flex; flex-direction: column; justify-content: flex-start;}#facetNavRefinements .quantity.facet-group.frameWebColour .facet--item--group DIV UL li input { height: 9px; width: 9px; background: #fff; border: 1px solid #000; -webkit-appearance: none; -moz-appearance: none; -ms-appearance: none;}#main-content .facet .facet--component .hidden-md.hidden-lg.facet--component--content { width : 100%;}#main-content .facet--component .hidden-md DIV{ border: none; text-align: left; flex-direction: row !important; }.facet--component--content--filter { display: flex; flex-direction: row; border: none;}#main-content .facet--component .hidden-md { display:flex; flex-direction: row;}#frameGenre-Enfant, #frameGenre-Femme, #frameGenre-Homme { margin-right: 10px;}#facetNavRefinements .quantity.facet-group.frameShape .facet--item--group DIV UL { display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0;}#face-result-ab DIV B, #face-result-ab DIV span { font-weight: 300; margin-right: 5px; font-size: 14px; color: #AAA;}#face-result-ab { display: flex; justify-content: space-between; align-items : center;}#facetNavRefinements .facet--component--list .facet--clear-filter A{ border: none; font-weight: lighter; padding: 14.0581px; color: #AAA; text-decoration: underline; font-size: 14px; text-transform: none;}#facetNavRefinements .facet--component--list .facet--clear-filter A:hover{ background-color: #FFF;}#facetNavRefinements .facet--component--list--filter SPAN { align-self: center;}#facetNavRefinements .facet--component--list--filter SPAN A{ color: #AAA; max-height: 14px;}.dual-range .inputs input[type=range] { color: #222; background-color: #222;}#facetNavRefinements .quantity.facet-group.frameShape .facet--item--group DIV UL { display: flex; flex-direction: column; align-items: flex-start;}.facet .accessoryColour input[type=checkbox], .facet .accessoryColour.disabled, .facet .contactLensColour input[type=checkbox], .facet .contactLensColour.disabled, .facet .frameLensColour input[type=checkbox], .facet .frameLensColour.disabled, .facet .frameShape input[type=checkbox], .facet .frameShape.disabled, .facet .frameWebColour input[type=checkbox], .facet .frameWebColour.disabled { display: block;}[type="checkbox"] { height: 9px; width: 9px; background: #fff; border: 1px solid #000;}[type="checkbox"]:checked { background: #000;}.facet--item--group [type=radio], .facet--item--group [type=checkbox]{border-radius: initial !important;}.facet--component--list button[type=button].btn .quantity{margin-right:0.9rem}</style>');


// END VARIATION 3
xx

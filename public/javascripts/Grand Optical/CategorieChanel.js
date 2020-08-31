

// VARIATION 1

if (!window.abt537199) {
  window.abt537199 = true;

// -----AB TEST : Apply the Chanel Visual Code (Grid)-----
jQuery("body").attr("style", "font-family:poppins-regular !important");
function TEST_applyChanelVisual() {
    jQuery('#breadcrumb').after('<div class="test_header"><div class="test_headbar"><img class="test_headbar_img" src="https://images.grandoptical.com/gvfrance?set=angle%5B%5D,articleNumber%5B%5D,genim%5Bchanel_logo_hq.png%5D,w%5B%5D,company%5BGOP%5D,finalSize%5B%5D&call=url%5Bfile:common/GeneralImageJPG%5D" alt="Headbar Chanel Grandvision"></div><img class="test_chanel_img" src="https://images.grandoptical.com/gvfrance?set=angle%5B%5D,articleNumber%5B%5D,genim%5Bchannel-KV-optique.JPG%5D,w%5B%5D,company%5BGOP%5D,finalSize%5B%5D&call=url%5Bfile:common/GeneralImageJPG%5D" alt="Bandeau Chanel Grandvision"></div>');
    jQuery('.product-list--details--simple-product').after('<span class="test_cart_button">Ajouter au panier</span>');
}
TEST_applyChanelVisual();

if (window.matchMedia('(min-width: 1025px)').matches){
  jQuery('.facet--component--list .facet-group.brandName').remove();
  jQuery('.facet--component--list .facet-group.priceValue').remove();
  jQuery('.js-facet-customscroll li div').remove();

  jQuery('.js-facet-customscroll li label span ').removeClass('hidden');
  jQuery('.js-facet-customscroll li label input ').css({'display':'block'});

  jQuery('.frameShape DIV UL').addClass('shapeChanel');
  jQuery('.shapeChanel').css({'align-items': 'center'});
}


jQuery("body").append("<div class='font-not-on-ie' style='display:none;'><style>@font-face{ font-family: 'ABChanelCorpo-SemiBold';  src: url('https://fr-gv-gop.qa.grandvision.global/medias/ABChanelCorpo-SemiBold.otf?context=bWFzdGVyfHJvb3R8NTk5MTJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg5Yy9oY2YvODg1MjEzODQ1OTE2Ni5iaW58MzNkZGM2NmQxYTg3M2IwZjQ3Yjc2ZTExNWYzMDk1YzEwNDIyN2FmY2ZkYTU2M2IzNWRiZjc3MzU1NmIyZTY4Yw'); format('truetype'); font-style: SemiBold;}</style></div>");

//SAFARI CODE
if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  jQuery("body").append("<style>@font-face{ font-family: 'Helvetica Light'; font-style: Light; src: url('https://fr-gv-gop.qa.grandvision.global/medias/helvetica-light.ttf?context=bWFzdGVyfHJvb3R8NTA1ODN8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg4Ni9oOTkvODg1MjIyMTY1NzExOC5iaW58MzAxODQwNjVhODBhZWFkYTM5NWJjNzkzMTE1NWEyZWRiY2ZkYjE4MDA2NzE3NzRhM2E4NGM2MjFjNjc1NjUzNw') format('truetype');}</style>");
}


//IE CODE
var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if ( isIE ) {
jQuery(".font-not-on-ie").remove();
jQuery("body").append("<style>@font-face{ font-family: 'ABChanelCorpo-SemiBold';  src: url('/medias/ABChanelCorpo-SemiBold.eot?context=bWFzdGVyfHJvb3R8ODA2MjR8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhOS9oMzYvODg1MjU4MzI1MTk5OC5iaW58ZGViNWJjZDdhNGQ0OWI4MmRkMDg5YTdiZjk2YTgyODJiZWI3NWQ0OThlYTBlYmMwMDc1MzZmZmM0NmVlZDFhYg'); format('eot'); font-style: SemiBold;}</style>");
}

jQuery("body").append("<style>@font-face { font-family: 'ABChanelCorpo-ExtraLight'; font-style: ExtraLight; src: url('/medias/ABChanelCorpo-ExtraLight.otf?context=bWFzdGVyfHJvb3R8NTY4NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhjYi9oOTUvODg1MjEzODE2NDI1NC5iaW58ZWY4MTMzMGJjYTQwZmIyNWU3NjA5NGFkYjg0NWE2ZDBhZmQ2Y2FlZDhhMGFlYThiOTM1NmYwZTEwMjZkNmNmZg');} @font-face { font-family: 'ABChanelCorpo-Light'; font-style: Light; src: url('/medias/ABChanelCorpo-Light.otf?context=bWFzdGVyfHJvb3R8NTg5NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhZi9oMWMvODg1MjEzODI2MjU1OC5iaW58NTlmOTg3MWQ1ZGE4NDAxNDc1ODIwNDRlMDQ1NWJiNzEwYjAyNjcyZmY2MWI5ODExZTY4NzEyMWM5YzljNDg2ZA');}@font-face { font-family: 'ABChanelCorpo-Regular'; font-style: Regular; src: url('/medias/ABChanelCorpo-Regular.otf?context=bWFzdGVyfHJvb3R8NTYwMDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGgxYy9oNWEvODg1MjEzODM2MDg2Mi5iaW58NTExNDBjODQzMzU5NjFjY2FhMzczMDA5MjIzYWNlMzk0MTY0MDE1ZTRmZjk2NjU0NjM0YzdjMDUyOTRmNDhjNQ');} </style>");

jQuery("body").append("<style type='text/css'>  .product-container--brand-synergieName, .pageType-ProductPage .price, .pageType-ProductPage .product-container--price--infos { font-size: 0.8rem; text-transform: lowercase; font-family: Helvetica Light, Helvetica; color: #333; font-weight: 300;} .product-container--price--details{text-align: left;} h1 a { text-decoration: none;} </style>");
jQuery("body").append("<style>@font-face { font-family: 'ABChanelCorpo-ExtraLight'; font-style: ExtraLight; src: url('/medias/ABChanelCorpo-ExtraLight.otf?context=bWFzdGVyfHJvb3R8NTY4NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhjYi9oOTUvODg1MjEzODE2NDI1NC5iaW58ZWY4MTMzMGJjYTQwZmIyNWU3NjA5NGFkYjg0NWE2ZDBhZmQ2Y2FlZDhhMGFlYThiOTM1NmYwZTEwMjZkNmNmZg');} @font-face { font-family: 'ABChanelCorpo-Light'; font-style: Light; src: url('/medias/ABChanelCorpo-Light.otf?context=bWFzdGVyfHJvb3R8NTg5NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhZi9oMWMvODg1MjEzODI2MjU1OC5iaW58NTlmOTg3MWQ1ZGE4NDAxNDc1ODIwNDRlMDQ1NWJiNzEwYjAyNjcyZmY2MWI5ODExZTY4NzEyMWM5YzljNDg2ZA');}@font-face { font-family: 'ABChanelCorpo-Regular'; font-style: Regular; src: url('/medias/ABChanelCorpo-Regular.otf?context=bWFzdGVyfHJvb3R8NTYwMDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGgxYy9oNWEvODg1MjEzODM2MDg2Mi5iaW58NTExNDBjODQzMzU5NjFjY2FhMzczMDA5MjIzYWNlMzk0MTY0MDE1ZTRmZjk2NjU0NjM0YzdjMDUyOTRmNDhjNQ');}</style>");

// Suppressions des checkbos dans les formes
jQuery('.frameShape li label input').hide();

//déplacement couleurs avant prix
 jQuery(".colors").each(function() {
        jQuery(this).parent('.product-list--details.product-list--details--simple-product').find(".product-list--description--simple-product").before(this);
    });

// modification image couleurs par phrase avec nombres de couleurs
jQuery( ".product-colors-sizes .colors").each(function(e) {
var colornumab = jQuery(this).find(".js-variantColor.variant-color").length;
if(colornumab === 1){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">2 couleurs</span>');}
if(colornumab === 2){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">3 couleurs</span>');}
if(colornumab === 3){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">4 couleurs</span>');}
if(colornumab === 4){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">5 couleurs</span>');}
if(colornumab === 5){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">6 couleurs</span>');}
if(colornumab === 6){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">7 couleurs</span>');}
if(colornumab === 7){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">8 couleurs</span>');}
if(colornumab === 8){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">9 couleurs</span>');}
if(colornumab === 9){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">10 couleurs</span>');}
if(colornumab === 10){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">11 couleurs</span>');}
if(colornumab === 11){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light, Helvetica;">12 couleurs</span>');}
//if(colornumab > 1){jQuery(this).html('<span style="font-size: 13px; font-family: Helvetica Light, Helvetica;"> '+colornumab+'  couleurs</span>');}
//jQuery("div.colors span:contains(1 couleur)").text("2 couleurs");
});

//supression caroussel avant listing
jQuery('.scroller.carousel-product').remove();

//suppression stock
jQuery('.product-list--info-stock').remove();

//suppression voir tous les filtres
if (window.matchMedia('(min-width: 1025px)').matches){
  jQuery('.see-more-filter').remove();
  jQuery('.test_headbar').css({'border-top': '8px solid #1d1d1d'});
}

//suppresion trier par
jQuery('.facet--component--content--sort:eq(4)').remove();

//code spécifique mobile
if (window.matchMedia('(max-width: 1024px)').matches){
//ajout des couleurs
jQuery("label").has(".variant-color").find("span.label").attr("style", "display:block !important");

//supressions affichage type
jQuery('.display-mobile.hidden-md.hidden-lg:eq(2)').remove();

//déplacement nbr résultats
jQuery('.facet--results.js-facet-results.facet--component--resultat:eq(2)').wrapAll('<div id="face-result-ab"></div>');
jQuery('#face-result-ab').insertAfter('#main-content .facet--component .hidden-md DIV');

//adding img filter before
jQuery('.facet--component--content:eq(4) a').before('<img class="img-filter-go" src="https://www.optical-center.fr/workspace/medias/images/filter.svg" alt="" />');

// changing filtrer par ==> filtrer
jQuery('.facet--component--content:eq(4) a').html('Filtrer');

//deleting first line of preheader filter
jQuery('#facetNavRefinements .facet--component--content--filter .facet--component--list--filter SPAN:nth-child(1)').remove();
jQuery('#facetNavRefinements DIV SPAN:nth-child(1) A').remove();
jQuery('#facetNavRefinements .facet--component--content--filter .facet--component--list--filter SPAN:nth-child(1)').remove();


// remonter le clear
jQuery('#facetNavRefinements .facet--component--list .facet--reminder DIV').insertBefore('#facetNavRefinements .facet--component--content--filter .facet--component--list--filter SPAN');
jQuery('#facetNavRefinements .facet--component--list .facet--clear-filter A').html('Clear');
}

jQuery('[type="checkbox"]').css({'-webkit-appearance': 'none'})
jQuery('input[type="checkbox"]:checked').css({'background-color': 'black!important'});


// Centrer titre Chanel
if (window.matchMedia('(max-width: 640px)').matches){
  jQuery('.test_headbar').css({'text-align': 'center'});
// Déplacer le bouton valider des filtres
  jQuery('.facet--component--container .facet--btn').hide();
  jQuery('.facet--component--list').append('<span class=\"facet--btn--chanel\"><input type="submit" value="APPLIQUER LES FILTRES"></span>');
  jQuery('.facet--btn--chanel').css({'width': '80%', 'border-top': '1px solid #cccccc','border-bottom': '1px solid #cccccc', 'background-color': 'white', 'display': 'block', 'position': 'fixed', 'bottom': '0', 'padding': '10px 10px 10px 10px', 'margin-left': '-15px', 'text-align': 'center', 'margin-top': '-10px'});
}


// Réduire taille logo sur tablette
if (window.matchMedia('(min-width: 768px)').matches){
  jQuery('.test_headbar_img').css({'max-width': '174px', 'margin': '33px auto 42px auto'});
  jQuery('.test_headbar').css({'text-align': 'center'});
}

jQuery('.new-price.product-list--price--new--simple-product--new.product-list--price--new.product-list--price--new--simple-product').css({'color':'#222'});
jQuery('.product-list--picto--wrapper').remove();

/** Fix Filtres formes **/
if (window.matchMedia('(min-width: 1025px)').matches){
jQuery("ul.shapeChanel li input").css({"display":"inline", "-moz-appearance":"button"});
jQuery("ul.shapeChanel li svg").remove();
jQuery(".facet--item--group.frameShape ul.shapeChanel label").css("flex-direction", "row");
jQuery(".facet--item--group li").css({"width":"92%", "margin-left":"auto", "margin-right":"auto"});
jQuery(".facet--item--group.frameShape li label span").css("text-transform","capitalize");
jQuery(".facet--component--list .facet-group").css("margin-top", "0 rem");
}

if (window.matchMedia('(max-width: 1024px)').matches){
jQuery(".facet--item--group.frameShape li svg").remove();
jQuery("#facetNavRefinements .quantity.facet-group.frameShape .facet--item--group DIV UL").css("font-family", "Helvetica Light, Helvetica");
jQuery(".facet--item--group.frameShape li input").attr("style", "display: inline !important; -moz-appearance:button;");
jQuery(".facet--item--group.frameShape li label").css("flex-direction", "row");
jQuery(".facet--item--group.frameShape li label span").css({"text-transform":"uppercase","font-family":"ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif"});
jQuery("#face-result-ab DIV B, #face-result-ab DIV span, .product-colors-sizes.colors span").css("font-family", "Helvetica Light, Helvetica");
jQuery(".facet--item--group.frameShape li").css("padding", "0.5rem");
}

/** Fix filtres **/
jQuery(".facet--component--container.js-facet-nav li label, .facet--component--container.js-facet-nav .label").css({"font-family":"Helvetica Light, Helvetica", "font-size":"14px"});
jQuery("#productList DIV.flex.itemGrid-1third.product-list--item--type--optique .product-list--item--wrapper--simple-product .product-list--details .product-colors-sizes").css("height", "25px");
jQuery(".product-colors-sizes.colors .colors span").css({"font-size":"14px"});
jQuery(".facet--item--group.frameShape span").css("text-transform", "capitalize");


}










// *************************************** VARIATION 2  *********************************************************









//Desktop
if (window.matchMedia('(min-width: 1025px)').matches){
  //Remplace le nombre de produit affiché trois par trois
  jQuery('.itemGrid-1third').css({'width': '33%', 'padding': '72px .75rem'});

  //Bouton "ajouter au panier"
  jQuery('.product-list--details--simple-product').after('<span class="test_cart_button">Ajouter au panier</span>');
  jQuery('.test_cart_button').css({'text-transform': 'uppercase', 'font-size': '11px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'font-weight': '600'});

  // modification image couleurs par phrase avec nombres de couleurs
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

  //inverser prix et couleurs
  jQuery('.product-list--description--simple-product').css({'margin-top': '20px'})
  jQuery('.product-colors').css({'height': '30px', 'margin-top': '-45px', 'margin-bottom': '20px'});


  //Bandeau Chanel en fullwidth
  jQuery('.simple_disp-img IMG').addClass("bandeauFull");
  jQuery('.bandeauFull').css({'width': '113%', 'margin': '0', 'margin-left': '-80px', 'display': 'flex', 'max-width': '113%'});

  //Format du prix
  jQuery('.product-list--price--simple--simple-product').css({'font-size': '12px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'line-height': '12px'});

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
  jQuery( ".frameWebColour li span.hidden" ).removeClass("hidden");
  jQuery( ".frameWebColour li span.variant-color--circle" ).remove();

}

//Ipad Pro
if (window.matchMedia('(max-width: 1024px)').matches){
  jQuery('.test_cart_button').css({'text-transform': 'uppercase', 'font-size': '12px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif'});
  //Format du prix
  jQuery('.product-list--price--simple--simple-product').css({'font-size': '10px', 'font-family': 'ABChanelCorpo-SemiBold", Helvetica, Arial, sans-serif'});
  //Bouton "ajouter au panier"
  jQuery('.test_cart_button').css({'text-transform': 'uppercase', 'font-size': '12px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif'});
  jQuery('.product-list .product-colors').css({'height': '30px'});
  jQuery('.bandeauFull').css({'width': '100%', 'margin': '0', 'margin-left': '0px', 'display': 'flex', 'max-width': '100%'});
}


//Mobile
if (window.matchMedia('(max-width: 640px)').matches){
  jQuery('.test_cart_button').css({'text-transform': 'uppercase', 'font-size': '12px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif'});
  //Format du prix
  jQuery('.product-list--price--simple--simple-product').css({'font-size': '8px', 'font-family': 'ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif', 'margin-top': '-20px'});

  //Bouton "ajouter au panier"
  jQuery('.product-list--item--wrapper--simple-product').after('<span class="test_cart_button">Ajouter au panier</span>');
  jQuery('.test_cart_button').css({'text-transform': 'uppercase', 'font-size': '8px', 'font-family': '"ABChanelCorpo-SemiBold", Helvetica, Arial, sans-serif', 'font-weight': '600', 'margin-top': '10px'});
  //Fait apparaitre les couleurs en mobile
  jQuery('.product-colors').removeClass("hidden-xs");
  jQuery('.product-colors').removeClass("hidden-sm");
  // modification image couleurs par phrase avec nombres de couleurs
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

  //inverser prix et couleurs
  jQuery('.product-list--description--simple-product').css({'margin-top': '20px'});
  jQuery('.product-colors').css({'height': '30px', 'margin-top': '-45px'});

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
  jQuery(".facet--item--group.frameShape li label span").css({"text-transform":"uppercase","font-family":"ABChanelCorpo-SemiBold, Helvetica, Arial, sans-serif"});
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
  jQuery(".facet--close").css("padding-left", "10rem");
  jQuery('.facet--clear-filter A').css({'border': '1px solid black', 'color': 'black', 'text-decoration': 'none'});
}

jQuery("body").append('<style>.facet--component.js-sticky.js-display-choice.js-sticky-cloned.js-sticky-cloned-sticked, .facet-group.priceValue.js-facet--component, .quantity.facet-group.brandName.js-facet--component, .facet--view, span.product_brand, .test_header { display: none !important;}.dual-range .slider, .dual-range .slider.focus, .dual-range .slider.hover, .dual-range .track, .facet--item--group.frameShape li.facet-checked svg { fill: black !important;}.facet--item--group.frameShape li.facet-checked .label { color: black !important;}li.input-check.facet-checked input { background: black !important;}@media screen and (min-width: 1025px) {.facet--btn .btn{padding: 1rem 1rem !important;}.facet--component {max-width: 98rem;}content-head--title,.facet--view,.product-list--tile--position-1 { display: none}.facet { border-bottom: 1px solid #d3d3d33d;}input[type=checkbox] { -webkit-appearance: none; -moz-appearance: none; -ms-appearance: none;}input[type=checkbox] { height: 9px; width: 9px; background: #fff; border: 1px solid #000;}input[type="checkbox"]:checked { background: #000;}.product_name span,.product-list--price,.test_cart_button, .js-facet-reminder, .btn {}#main-content .products-list-content .facet .facet--component { border-top: 1px solid #B2B2B2; border-bottom: 1px solid #B2B2B2;}}@media screen and (max-width: 1024px) { .facet--component--list button[type=button].btn .label{max-width:239px;} .facet--component--list.height-preheader{margin-top: 0rem !important}[type=reset], [type=submit], button, html [type=button]{-webkit-appearance: initial !important; appearance: initial !important; border-radius : initial;} .js-facet-customscroll { display: flex !important; flex-direction: column !important;} .facet-group .btn { border-style: none!important;}.facet--component--list{left:0;z-index: 99999 !important;top: 6em !important;}.facet--component { display: flex; justify-content: center; align-items: center; font-weight: bold;}.facet--component .facet--component--resultat{ font-weight: bold !important; margin: 0;}.facet--component .facet--component--resultat b{ font-weight: bold !important;}.sort { display: flex; align-items: center;} .facet--item--group { display: block;}.js-facet-customscroll ul{ display: flex !important; flex-direction: column !important; flex-wrap: unset !important;}input[name=frameWebColour] { display: block; width: 9px; height: 9px;}.frameShape .js-facet-customscroll li label input { display: none !important;}} #facetNavRefinements .quantity.facet-group.frameWebColour .facet--item--group DIV UL { display: flex; flex-direction: column; justify-content: flex-start;}#facetNavRefinements .quantity.facet-group.frameWebColour .facet--item--group DIV UL li input { height: 9px; width: 9px; background: #fff; border: 1px solid #000; -webkit-appearance: none; -moz-appearance: none; -ms-appearance: none;}#main-content .facet .facet--component .hidden-md.hidden-lg.facet--component--content { width : 100%;}#main-content .facet--component .hidden-md DIV{ border: none; text-align: left; flex-direction: row !important; }.facet--component--content--filter { display: flex; flex-direction: row; border: none;}#main-content .facet--component .hidden-md { display:flex; flex-direction: row;}#frameGenre-Enfant, #frameGenre-Femme, #frameGenre-Homme { margin-right: 10px;}#facetNavRefinements .quantity.facet-group.frameShape .facet--item--group DIV UL { display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0;}#face-result-ab DIV B, #face-result-ab DIV span { font-weight: 300; margin-right: 5px; font-size: 14px; color: #AAA;}#face-result-ab { display: flex; justify-content: space-between; align-items : center;}#facetNavRefinements .facet--component--list .facet--clear-filter A{ border: none; font-weight: lighter; padding: 14.0581px; color: #AAA; text-decoration: underline; font-size: 14px; text-transform: none;}#facetNavRefinements .facet--component--list .facet--clear-filter A:hover{ background-color: #FFF;}#facetNavRefinements .facet--component--list--filter SPAN { align-self: center;}#facetNavRefinements .facet--component--list--filter SPAN A{ color: #AAA; max-height: 14px;}.dual-range .inputs input[type=range] { color: #222; background-color: #222;}#facetNavRefinements .quantity.facet-group.frameShape .facet--item--group DIV UL { display: flex; flex-direction: column; align-items: flex-start;}.facet .accessoryColour input[type=checkbox], .facet .accessoryColour.disabled, .facet .contactLensColour input[type=checkbox], .facet .contactLensColour.disabled, .facet .frameLensColour input[type=checkbox], .facet .frameLensColour.disabled, .facet .frameShape input[type=checkbox], .facet .frameShape.disabled, .facet .frameWebColour input[type=checkbox], .facet .frameWebColour.disabled { display: block;}[type="checkbox"] { height: 9px; width: 9px; background: #fff; border: 1px solid #000;}[type="checkbox"]:checked { background: #000;}.facet--item--group [type=radio], .facet--item--group [type=checkbox]{border-radius: initial !important;}.facet--component--list button[type=button].btn .quantity{margin-right:0.9rem}</style>');
// END VARIATION 2

"ABChanelCorpo-SemiBold", Helvetica, Arial, sans-serif !important


//mot de passe pour site de préprod
Gr4ndv1s10n!
gvdevqa

//Lien recette
https://fr-gv-gop.qa.grandvision.global/lunettes-de-vue/femme/marque/chanel/c/13873?abchanelpagecate


xx

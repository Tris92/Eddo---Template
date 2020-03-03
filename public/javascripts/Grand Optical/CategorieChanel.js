// -----AB TEST : Apply the Chanel Visual Code (Grid)-----

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

jQuery("body").append("<style>@font-face{ font-family: 'Helvetica Light'; font-style: Light; src: url('https://fr-gv-gop.qa.grandvision.global/medias/helvetica-light.ttf?context=bWFzdGVyfHJvb3R8NTA1ODN8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg4Ni9oOTkvODg1MjIyMTY1NzExOC5iaW58MzAxODQwNjVhODBhZWFkYTM5NWJjNzkzMTE1NWEyZWRiY2ZkYjE4MDA2NzE3NzRhM2E4NGM2MjFjNjc1NjUzNw') format('truetype');}</style>");



jQuery("body").append("<style>@font-face { font-family: 'ABChanelCorpo-ExtraLight'; font-style: ExtraLight; src: url('/medias/ABChanelCorpo-ExtraLight.otf?context=bWFzdGVyfHJvb3R8NTY4NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhjYi9oOTUvODg1MjEzODE2NDI1NC5iaW58ZWY4MTMzMGJjYTQwZmIyNWU3NjA5NGFkYjg0NWE2ZDBhZmQ2Y2FlZDhhMGFlYThiOTM1NmYwZTEwMjZkNmNmZg');} @font-face { font-family: 'ABChanelCorpo-Light'; font-style: Light; src: url('/medias/ABChanelCorpo-Light.otf?context=bWFzdGVyfHJvb3R8NTg5NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhZi9oMWMvODg1MjEzODI2MjU1OC5iaW58NTlmOTg3MWQ1ZGE4NDAxNDc1ODIwNDRlMDQ1NWJiNzEwYjAyNjcyZmY2MWI5ODExZTY4NzEyMWM5YzljNDg2ZA');}@font-face { font-family: 'ABChanelCorpo-Regular'; font-style: Regular; src: url('/medias/ABChanelCorpo-Regular.otf?context=bWFzdGVyfHJvb3R8NTYwMDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGgxYy9oNWEvODg1MjEzODM2MDg2Mi5iaW58NTExNDBjODQzMzU5NjFjY2FhMzczMDA5MjIzYWNlMzk0MTY0MDE1ZTRmZjk2NjU0NjM0YzdjMDUyOTRmNDhjNQ');} @font-face { font-family: 'ABChanelCorpo-SemiBold'; font-style: SemiBold; src: url('/medias/ABChanelCorpo-SemiBold.otf?context=bWFzdGVyfHJvb3R8NTk5MTJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg5Yy9oY2YvODg1MjEzODQ1OTE2Ni5iaW58MzNkZGM2NmQxYTg3M2IwZjQ3Yjc2ZTExNWYzMDk1YzEwNDIyN2FmY2ZkYTU2M2IzNWRiZjc3MzU1NmIyZTY4Yw');} /**@font-face{ font-family: 'Helvetica Light'; font-style: Light; src: url('https://fr-gv-gop.qa.grandvision.global/medias/helvetica-light.ttf?context=bWFzdGVyfHJvb3R8NTA1ODN8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg4Ni9oOTkvODg1MjIyMTY1NzExOC5iaW58MzAxODQwNjVhODBhZWFkYTM5NWJjNzkzMTE1NWEyZWRiY2ZkYjE4MDA2NzE3NzRhM2E4NGM2MjFjNjc1NjUzNw');} **/</style>");

jQuery("body").append("<style type='text/css'> /**@font-face { font-family: 'ABChanelCorpo-ExtraLight'; font-style: ExtraLight; src: url('/medias/ABChanelCorpo-ExtraLight.otf?context=bWFzdGVyfHJvb3R8NTY4NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg3Ny9oZTkvODkyNjc1OTU1MTAwNi5iaW58OGMyMjZlNDMwNDZkNWI3OTgxNjgxZWYyYTMxY2QxY2I0ZjJjZWVhNDljZmNmNWYwZjU5MzA5ZTgyMTIxNzM0Mg');} @font-face { font-family: 'ABChanelCorpo-Light'; font-style: Light; src: url('/medias/ABChanelCorpo-Light.otf?context=bWFzdGVyfHJvb3R8NTg5NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhmMi9oYjQvODkyNjc2MDA0MjUyNi5iaW58MDIxYmI4NzNhZTNhMDk3ZWZhYTc3OTFjMDY5ZTNiMzg2YzExMjQ5MTUwMjAyOTkwMTQyY2FmYWFmZTM5MmJiNA');}@font-face { font-family: 'ABChanelCorpo-Regular'; font-style: Regular; src: url('/medias/ABChanelCorpo-Regular.otf?context=bWFzdGVyfHJvb3R8NTYwMDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhkZS9oY2YvODkyNjc2MDI3MTkwMi5iaW58YzlhMTA2ZmMzNzk5ZTJkNTU5OTA5N2MyODE1MjNmNmEyYTlkZDVmN2M3ZDc3YTM3ZTFlNjIzOGRhNDA2YjU1NA');}@font-face { font-family: 'ABChanelCorpo-SemiBold'; font-style: SemiBold; src: url('/medias/ABChanelCorpo-SemiBold.otf?context=bWFzdGVyfHJvb3R8NTk5MTJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhmOC9oNzcvODkyNjc2MDQzNTc0Mi5iaW58YzE5NmE0YWVmOTc1NGM4NmE1YWQ2ODVjZTgzNGE1YTQ3NGJlYTAxOGJkMDM4NWQ2NjQ3MGIwZDllYzljMmI4OQ');} @font-face{ font-family: 'Helvetica Light'; font-style: Light; src: url('/medias/helvetica-light.ttf?context=bWFzdGVyfHJvb3R8NTA1ODN8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhOC9oNjIvODkyNzcyNzY0ODc5OC5iaW58MDkzY2RjZTgxNWJjNzZlNTU2NWI3MzUzNGYwZDc0MzcyNmFmZDY5Y2M1ODE4OWE1OWM5OWFjNjRjYzUxNzdlNQ'); **/  .product-container--brand-synergieName, .pageType-ProductPage .price, .pageType-ProductPage .product-container--price--infos { font-size: 0.8rem; text-transform: lowercase; font-family: Helvetica Light; color: #333; font-weight: 300;} .product-container--price--details{text-align: left;} h1 a { text-decoration: none;} </style>");
jQuery("body").append("<style>@font-face { font-family: 'ABChanelCorpo-ExtraLight'; font-style: ExtraLight; src: url('/medias/ABChanelCorpo-ExtraLight.otf?context=bWFzdGVyfHJvb3R8NTY4NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhjYi9oOTUvODg1MjEzODE2NDI1NC5iaW58ZWY4MTMzMGJjYTQwZmIyNWU3NjA5NGFkYjg0NWE2ZDBhZmQ2Y2FlZDhhMGFlYThiOTM1NmYwZTEwMjZkNmNmZg');} @font-face { font-family: 'ABChanelCorpo-Light'; font-style: Light; src: url('/medias/ABChanelCorpo-Light.otf?context=bWFzdGVyfHJvb3R8NTg5NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhZi9oMWMvODg1MjEzODI2MjU1OC5iaW58NTlmOTg3MWQ1ZGE4NDAxNDc1ODIwNDRlMDQ1NWJiNzEwYjAyNjcyZmY2MWI5ODExZTY4NzEyMWM5YzljNDg2ZA');}@font-face { font-family: 'ABChanelCorpo-Regular'; font-style: Regular; src: url('/medias/ABChanelCorpo-Regular.otf?context=bWFzdGVyfHJvb3R8NTYwMDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGgxYy9oNWEvODg1MjEzODM2MDg2Mi5iaW58NTExNDBjODQzMzU5NjFjY2FhMzczMDA5MjIzYWNlMzk0MTY0MDE1ZTRmZjk2NjU0NjM0YzdjMDUyOTRmNDhjNQ');} @font-face { font-family: 'ABChanelCorpo-SemiBold'; font-style: SemiBold; src: url('/medias/ABChanelCorpo-SemiBold.otf?context=bWFzdGVyfHJvb3R8NTk5MTJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg5Yy9oY2YvODg1MjEzODQ1OTE2Ni5iaW58MzNkZGM2NmQxYTg3M2IwZjQ3Yjc2ZTExNWYzMDk1YzEwNDIyN2FmY2ZkYTU2M2IzNWRiZjc3MzU1NmIyZTY4Yw');} /** @font-face{ font-family: 'Helvetica Light'; font-style: Light; src: url('https://fr-gv-gop.qa.grandvision.global/medias/helvetica-light.ttf?context=bWFzdGVyfHJvb3R8NTA1ODN8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg4Ni9oOTkvODg1MjIyMTY1NzExOC5iaW58MzAxODQwNjVhODBhZWFkYTM5NWJjNzkzMTE1NWEyZWRiY2ZkYjE4MDA2NzE3NzRhM2E4NGM2MjFjNjc1NjUzNw');} **/</style>");

// Suppressions des checkbos dans les formes
jQuery('.frameShape li label input').hide();

//déplacement couleurs avant prix
 jQuery(".colors").each(function() {
        jQuery(this).parent('.product-list--details.product-list--details--simple-product').find(".product-list--description--simple-product").before(this);
    });

// modification image couleurs par phrase avec nombres de couleurs
jQuery( ".product-colors-sizes .colors").each(function(e) {
var colornumab = jQuery(this).find(".js-variantColor.variant-color").length;
if(colornumab === 1){jQuery(this).html('<span style="font-size: 12px; font-family: Helvetica Light;">1 couleur</span>');}
if(colornumab > 1){jQuery(this).html('<span style="font-size: 13px; font-family: Helvetica Light;"> '+colornumab+'  couleurs</span>');}
});

//supression caroussel avant listing
jQuery('.scroller.carousel-product').remove();

//suppression stock
jQuery('.product-list--info-stock').remove();

//suppression voir tous les filtres
if (window.matchMedia('(min-width: 1025px)').matches){
jQuery('.see-more-filter').remove();
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

//jQuery("body").append('<style>.test_header{width:100%}.test_headbar{width:100%;text-align:center;border-top:8px solid #1d1d1d}.test_headbar_img{max-width:174px;margin:33px auto 42px auto}.test_chanel_img{width:100%}@media only screen and (max-width:640px){.test_headbar{border-top:6px solid #1d1d1d}.test_headbar_img{max-width:75px;margin:12px auto}}.content-head--title,.facet--view,.product-list--tile--position-1{display:none}.product-list--wrapper{background-color:none}.product-list--mainLink:focus,.product-list--mainLink:hover{box-shadow:none}.product-list--mainLink:hover .product-list--thumb--simple-product img{transform:scale(1)}.product-list .head.product_category,.product-list--brand--simple-product,.product-list--price-start.product_mention{display:none!important}.product-list .head{font-family:poppins-semi-bold;margin-bottom:.2rem}.product-list--price{font-size:10px}.test_cart_button{display:block;font-size:10px;text-transform:uppercase} .product-list--wrapper {background: none;} .facet{border-bottom: 1px solid #d3d3d33d;} .product_name span { font-family:ABChanelCorpo-SemiBold !important;} input[type=checkbox] { -webkit-appearance: none; -moz-appearance: none; -ms-appearance: none;}input[type=checkbox] { height: 9px; width: 9px; background: #fff; border: 1px solid #000;}input[type="checkbox"]:checked { background: #000; } .product-list--info-stock{border-top: 0px;} .stock_message{display:none;} .product_name span, .product-list--price, .test_cart_button{font-family: ABChanelCorpo-SemiBold;}</style>');
//jQuery("Body").append('<style>#main-content .products-list-content .facet .facet--component {border-top: 1px solid #B2B2B2; border-bottom: 1px solid #B2B2B2;}</style>');

//jQuery('body').append('<style>@font-face { font-family: "ab_chanel_corpo";src: url("https://opticien.grandoptical.com/css/font/ABChanelCorpo-Regular.otf");}@media screen and (min-width: 1025px) {.bloc {display:block;clear:both;}.test_header {width: 100%}.test_headbar {width: 100 % ;text - align: center;border - top: 8 px solid #1d1d1d}.test_headbar_img {max-width: 174px;margin: 33px auto 42px auto}.test_chanel_img {width: 100%}@media only screen and (max-width:640px) {.test_headbar {border-top: 6px solid # 1 d1d1d}.test_headbar_img {max - width: 75 px;margin: 12 px auto}}.content - head--title,.facet--view,.product - list--tile--position - 1 {display: none}.product - list--wrapper {background - color: none}.product - list--mainLink: focus,.product - list--mainLink: hover {box - shadow: none}.product - list--mainLink: hover.product - list--thumb--simple - product img {transform: scale(1)}.product - list.head.product_category,.product - list--brand--simple - product,.product - list--price - start.product_mention {display: none!important}.product - list.head {font - family: poppins - semi - bold;margin - bottom: .2 rem}.product - list--price {font - size: 10 px}.test_cart_button {display: block;font - size: 10 px;text - transform: uppercase}.product - list--wrapper {background: none;}.facet {border - bottom: 1 px solid# d3d3d33d;}.product_name span {font - family: ABChanelCorpo - SemiBold!important;}input[type = checkbox] {-webkit - appearance: none; -moz - appearance: none; -ms - appearance: none;}input[type = checkbox] {height: 9 px;width: 9 px;background: #fff;border: 1 px solid #000;}input[type= "checkbox"]: checked {background: #000;}.product-list--info-stock {border-top: 0px;}.stock_message {display: none;}.product_name span,.product-list--price,.test_cart_button {font-family: ABChanelCorpo-SemiBold;}# main - content.products - list - content.facet.facet--component {border - top: 1 px solid# B2B2B2;border - bottom: 1 px solid# B2B2B2;}.facet - group.btn {border - style: none!important;}.facet--component {display: flex;justify - content: center;align - items: center;font - family: "ABChanelCorpo-SemiBold",Helvetica,Arial,sans - serif!important;font - weight: bold;}.facet--component.facet--component--resultat {font - weight: bold!important;margin: 0;}.facet--component.facet--component--resultat b {font - weight: bold!important;}.sort {display: flex;align - items: center;}.facet--component--list {display: flex;justify - content: center;align - items: center;}.js - facet - customscroll {display: flex!important;flex - direction: column!important;}.js - facet - customscroll li label input {display: block;width: 9 px;height: 9 px;}.variant - color span {margin - right: 12 px;}.product - list--picto--wrapper {display: none;}.product - list--item--wrapper--simple - product {margin: 0 px 20 px;}.product_thumb.thumb.product - list--thumb.product - list--thumb--simple - product {max - width: 385 px;margin - bottom: 30 px;}.product_name,.simple - price,.test_cart_button {font - family: "ABChanelCorpo-SemiBold";font - size: 12 px;font - weight: bold;}.product - list--variant - color.product - list--variant - color--simple - product {font - family: "Helvetica Light";font - size: 14 px;font - style: light;}.test_cart_button {margin - top: 12 px;margin - bottom: 9 px;}}@media screen and(max - width: 1024 px) {.product - list--item--wrapper--simple - product {margin: 10.5 px 10 px;}.product_thumb.thumb.product - list--thumb.product - list--thumb--simple - product {max - width: 172;}.product_name, .simple - price, .test_cart_button {font - family: "ABChanelCorpo-SemiBold";font - size: 12 px;font - weight: bold;}.product_thumb.thumb.product - list--thumb.product - list--thumb--simple - product H2 SPAN SPAN {font - family: "Helvetica Light"!important;font - size: 14 px;font - style: light;}.test_cart_button {margin - top: 12 px;margin - bottom: 9 px;}.js - facet - customscroll {display: flex!important;flex - direction: column!important;}}.pagination--wrapper li span {background - color: #222 !important;}.headline:before, .headline:after {background-color: # 222!important;}html, body {font - family: "Helvetica Light"!important;}</style>');

setTimeout( function() {

if(jQuery(".container-dropdown").length === 0){
  if (window.location.href.match('lunettes-de-soleil')){

// Change place le titre
    var titleProduct = jQuery('.product-container--brand').html();
    jQuery('.product-container--right--sidebar').prepend(titleProduct);
    jQuery('.product-container--brand').hide();
    jQuery('.product-container--right--sidebar SPAN:eq(0)').addClass('titleBlocInfo');

//CSS des titres
    jQuery('.titleBlocInfo').css({'text-transform': 'uppercase', 'text-align': 'center', 'font-size': '12px','padding-top': '30px', 'margin-bottom': '-3px', 'display': 'block', 'font-family': 'poppins-semi-bold'});
    jQuery('.product-container--right--sidebar A').css({'text-decoration': 'none'});
    jQuery('.product-container--right--sidebar .brand').css({'text-transform': 'uppercase', 'text-align': 'center', 'font-weight': '900', 'font-size': '22px', 'display': 'block', 'font-family': 'poppins-semi-bold' });
    jQuery('.product-container--brand-synergieName ').css({'text-transform': 'uppercase', 'text-align': 'center', 'font-size': '13px', 'margin-right': '0', 'margin-left': '0', 'display': 'block', 'font-weight': '600'});
    jQuery('.product-colors-sizes').css({'display': 'block', 'margin-top': '-10px'});
    jQuery('.colors').css({'margin-top': '25px'});

// Enlève le titre des tailles
    jQuery('.product-colors--title:contains(Tailles disponibles)').remove();

// Enlève petit coeur et icone maison
    jQuery('.c_icon--add-fav').remove();

// Enlève message en Stock
    jQuery('.stock_message').remove();

//% de réduction à côté du prix

jQuery(".pictos-discount--item").css({"height": "44px", "float":"left", "margin-right":"0px", "padding-right":"0px", 'margin-left': '50px', 'margin-top': '-5px'});
jQuery(".lazy[src*='pix.gif']").each(function() {
  var lelien = jQuery(this).attr("data-src");
  jQuery(this).attr("src", lelien);
});

  }
  jQuery('.action').remove();

//Enlève titre des couleurs
    jQuery('.colors .product-colors--title').replaceWith('<a href="#ancretestab" class=\"descriptionAncre\">Voir la description <img style="height: 10px; width: 15px; vertical-align: middle;" src=\"https://www.eddo.fr/wp-content/uploads/2019/12/noun_chevron_1746037-1.png\"></a>');
    jQuery('.descriptionAncre').css({'text-decoration': 'underline', 'text-align': 'center', 'margin-left': '2%', 'margin-top': '-10px', 'margin-bottom': '10px'});

// Change place prix produit
    var priceProduct = jQuery('.product-container--price--container').html();
    jQuery('.product-container--price--container').remove();
    jQuery('.product-container--config .product-colors-sizes .colors').append(priceProduct);
    jQuery('.colors .price:eq(0)').remove();
    jQuery('.product-container--price--details').remove();

    jQuery('.price').css({'margin-top': '30px'});
    jQuery('.product-container--price .new-price').css({'font-size': '25px', 'font-weight': '900'});
    jQuery('.product-container--price .old-price').css({'float': 'right', 'margin-top': '10px', 'margin-right': '26%', 'margin-left': '-25%'});
    jQuery('.product-command--price-wrapper').remove();
    jQuery('.product-container--price').css({'margin-bottom': '10px', 'margin-top': '-10px'});


jQuery(".variant-size .active").parent().prependTo(".variant-size");
jQuery(".variant-size a:eq(0)").wrap("<div class='container-dropdown' style='width:100%; display: flex; flex-direction: row; align-items: center;'></div>");
jQuery(".container-dropdown").append('<div class="arrowab" style="width: 10%;height: 100%;display: flex;align-items: center;justify-content: center;"><img style="height: 10px; width: 15px; vertical-align: middle; float: right; " src=\"https://www.eddo.fr/wp-content/uploads/2019/12/noun_chevron_1746037-1.png\"></div>');
jQuery(".variant-size a span").not(".active, .rgaa-hidden-content").parent().wrapAll("<div class='othersizesab' style='display: flex;flex-direction: column;width: 100%;'></div>");
jQuery(".othersizesab").before(jQuery(".container-dropdown"));
jQuery(".container-dropdown a").css({"width":"90%"});
jQuery(".product-colors-sizes.sizes .variant-size").css({"border":"1px solid #000"});
jQuery(".product-colors-sizes.sizes .variant-size span.active, .product-colors-sizes.sizes .variant-size span:hover").css({"background": "none", "border":"none"});
jQuery(".container-dropdown span.active").css({"justify-content":"left"});
jQuery(".product-colors-sizes.sizes .variant-size span").css({"border-left":"0px", "border-right":"0px"});
jQuery(".product-colors-sizes.sizes .variant-size a").css("margin-bottom", "0px");
jQuery(".othersizesab a:last-of-type span").css("border-bottom", "none");
jQuery(".arrowab img").css("transform", "none");
jQuery(".othersizesab").css("display", "none");



jQuery('.variant-size .arrowab').click(function(){
    if (jQuery('.arrowab img').css ('transform') === 'none') {
      jQuery('.othersizesab').slideDown("slow");
    jQuery(".othersizesab").css("display", "flex");
    jQuery(".arrowab img").css("transform", "rotate(180deg)");
    } else {
        jQuery('.othersizesab').slideUp("slow");
        jQuery(".othersizesab").css("display", "none");
        jQuery(".arrowab img").css("transform", "none");
      }
    })



// Message de livraison
    var delayMsg = jQuery('.delay-delivery--msg').html();
    jQuery('.delay-delivery--msg ').remove();
    jQuery('.product-colors-sizes:eq(2)').after('<div class=\"delayText\">'+ delayMsg +'</div>');
    jQuery('.delayText').css({'text-align': 'center', 'margin-top': '10px', 'margin-bottom': '-20px'});

//Background color
jQuery(".price").wrap("<div class='newbg' style='background:rgb(247, 247, 247);'></div>");
jQuery(".product-colors-sizes.sizes").appendTo(".newbg");
jQuery(".delayText").appendTo(".newbg");
jQuery(".product-container--action").appendTo(".newbg");
jQuery(".newbg").appendTo(".product-container--config.sizes-colors");
jQuery("body").append("<style>.product-container--right--sidebar{background:none !important;} .newbg{width:80% !important; margin: auto;} .product-command--ctas-wrapper{background:rgb(247, 247, 247) !important;}</style>");
jQuery(".newbg").wrap("<div class='newbcontainer' style='width:100%; background:rgb(247, 247, 247);'></div>");
//Mise en page
jQuery(".product-container--price:eq(1)").css("text-align", "center");

if(jQuery(".variant-size a").length > 1){
jQuery(".variant-size").before("<span style='margin-bottom:5px; display:block; font-size: 14px;'>Sélectionner votre taille</span>");
}
else{jQuery(".product-colors--title:contains(Taille disponible)").remove(); jQuery(".variant-size").before("<span style='margin-bottom:5px; display:block; font-size: 14px;'>1 taille disponible</span>");}

jQuery("body").append("<style>.sizes-guide.js-size-guide{text-decoration:underline !important;} .delayText{font-size:10px;} .product-command--ctas{width: 100% !important; margin-top: 22px !important;} .product-command-ctas--add a span, .addToCartButton{font-size:11px; font-family: poppins-light,arial,sans-serif;} .product-command-ctas--add a span{padding-left: 5px;} .newbcontainer{padding-bottom: 30px; margin-top: 20px;} .product-colors-sizes.sizes > div{font-size: 1rem; padding-top: 0px; padding-bottom: 0px;} .old-price {padding-left: 20px;}</style>");
jQuery(".product-command-ctas--add a span").text("Réserver gratuitement en magasin");
//Description
jQuery(".product-container--reassurance ul span:last-of-type").attr("id", "ancretestab");

//Desktop
if (window.matchMedia('(min-width: 1025px)').matches){
jQuery("body").append("<style>@media (min-width:1025px){.product-container--config.sizes-colors{width:100% !important; padding-right:0px; padding-left:0px; padding-bottom:0px;} .product-container--right--sidebar{padding-bottom:0px;}} .product-colors-sizes.colors{display:flex !important; justify-content: center !important; flex-direction: column;} .product-container--action {padding-right: 0px;padding-left: 0px;} #cta-UNI {width: 100%;} .item.product-command-ctas--add {width: 100% !important;} .socloz.btn.btn-secondary.btn-fullwidth {padding-right: 20px;padding-left: 20px;} </style>");
jQuery(".product-colors-sizes:eq(0)").css("display", "flex");
}
//Fix prix
jQuery(".product-container .totalPrice").css({"margin-bottom": "10px", "text-align": "center", "font-size": "25px", "font-weight": "900", "color": "rgb(205, 206, 0)", "display": "block", "padding-bottom": "20px;"});
jQuery(".sizes-guide.js-size-guide").css("padding-top", "10px");
jQuery(".product-container--price").css({"display": "flex", "flex-direction":"row", "justify-content": "center"});
jQuery(".old-price").css({"float": "none", "margin-left": "0px", "margin-right": "0px", "padding-left":"10px"});
jQuery(".new-price").after(jQuery(".old-price"));

if (window.matchMedia('(max-width: 1024px)').matches){
jQuery(".product-container--right--sidebar .brand").css({"padding-top":"7px", "padding-bottom":"7px"});
}
//Fix dropdown
jQuery(".container-dropdown a").has("span.active").attr("onclick", "event.preventDefault(); jQuery('.arrowab').click()");
//1 seule taille disponible
if (jQuery(".product-colors-sizes.sizes span:contains(1 taille disponible)").length === 1){var currentsizeab = jQuery('.container-dropdown a span.active').text(); jQuery(".variant-size ").has(".container-dropdown").before("<span class='currentsizeab'>"+currentsizeab+"</span>");  jQuery(".variant-size ").has(".container-dropdown").remove(); jQuery("body").append("<style>span.currentsizeab { border: black 1px solid; padding: 5px 8px 3px 8px; min-height: 30px; display: flex; align-items: center !important; min-width: 66px; max-width: 66px; justify-content: center;}span.currentsizeab::before { background: url(https://www.grandoptical.com/_ui/responsive/common/images/svg/checkmark-gossamer.svg) no-repeat; background-size: auto; content: ' '; width: 12px; height: 19px; display: inline-block; background-size: contain; margin-right: 5px;}</style>");}
}
}, 100);


xx

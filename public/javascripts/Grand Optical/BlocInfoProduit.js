if (!window.abt554179) {
  window.abt554179 = true;
setTimeout( function() {

if(jQuery(".container-dropdown").length === 0){
  if (window.location.href.match('lunettes-de-vue')){

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



//Select box

        jQuery("div.item:visible:eq(0)").has("a.btn-primary").before("<div class='info-ab'></div>");
    jQuery(".js-toggle-config-glass").appendTo(".info-ab");

    jQuery("body").append("<style>.current-choice-ab-container { display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; background: white; border: 1px solid black; font-size: 1rem; font-family: poppins-semi-bold; height: 48px; -webkit-box-align: center; -ms-flex-align: center; align-items: center; text-align: left; padding-left: 15px;}.current-choice-ab {font-family: poppins-regular; width: 90%; display: -webkit-inline-box; display: -ms-inline-flexbox; display: inline-flex;line-height: 16px; font-size: 13px; height:100%; }span.titre-section-selectbox { text-align: left; width: 100%; font-size: 1rem; margin-bottom: 5px;}.container-dropdown { background: white; border-right: 1px solid black; border-left: 1px solid black;}.pageType-ProductPage .product-command--lense-choice { padding-left: 0px; margin-left: 0px; padding-right: 0px; margin-right: 0px;}.pageType-ProductPage .product-command--lense-choice label { font-size: 13px;}.product-command--lense-choice.noCorrection input, .product-command--lense-choice.correction input{margin-left:5px !important;} .product-command--lense-choice.correction, .product-command--lense-choice.noCorrection { min-height: 40px;}.product-command--lense-choice { padding: 0px !important;}.pageType-ProductPage .product-command--lense-choice label { font-size: 13px; width: 100%; height: 100%; line-height: normal;} div#cta-UNI { margin-left: 0px;}.pageType-ProductPage .product-command--ctas .cta-config-glass { width: 100%;}.info-ab { width: 100%;} .pageType-ProductPage .product-command--lense-choice label.selected {font-weight: normal;} .current-choice-ab span{margin-top:auto; margin-bottom: auto; } .brand {padding-top: 5px; padding-bottom: 5px;} .product-container--action{margin-top:-20px;} .pageType-ProductPage .product-command--lense-choice label{padding-top: 12px; padding-bottom: 12px;} .container-dropdown input {display: none;}</style>");


    jQuery(".product-command--ctas legend").remove();
    jQuery(".product-command--ctas form").has(".product-command--lense-choice").wrap("<div class='container-dropdown' style='width:100%; display: flex; flex-direction: row; align-items: center;'></div>");
    jQuery(".container-dropdown").before("<div class='current-choice-ab'><span></span></div>");
    jQuery(".current-choice-ab:eq(1), .current-choice-ab:eq(2)").remove();
    jQuery(".current-choice-ab").after('<div class="arrowab" style="width: 10%;height: 100%;display: flex;align-items: center;justify-content: center;"><img style="height: 10px; width: 15px; vertical-align: middle; float: right; " src=\"https://www.eddo.fr/wp-content/uploads/2019/12/noun_chevron_1746037-1.png\"></div>');
    jQuery(".current-choice-ab, .arrowab").wrapAll("<div class='current-choice-ab-container'></div>");
    jQuery(".current-choice-ab-container").before("<span class='titre-section-selectbox'>Sélectionner vos verres</span>");

    jQuery(".product-command--lense-choice")






    jQuery(".product-command--lense-choice.noCorrection, .product-command--lense-choice.correction").css({"width":"100%", "border-bottom":"1px solid black"});

    setInterval(function(){
    jQuery(".current-choice-ab span").text(jQuery("label.selected").text());
    }, 300);


    jQuery(".arrowab img").css("transform", "none");
    jQuery(".container-dropdown").css("display", "none");
    //jQuery(".current-choice-ab-container").attr("onclick", " jQuery('.arrowab').click()");



    jQuery('.current-choice-ab-container .arrowab, .current-choice-ab').click(function(){
    if (jQuery('.arrowab img').css ('transform') === 'none') {
      jQuery('.container-dropdown').slideDown("slow");
    jQuery(".container-dropdown").css("display", "flex");
    jQuery(".arrowab img").css("transform", "rotate(180deg)");
    } else {
        jQuery('.container-dropdown').slideUp("slow");
        jQuery(".container-dropdown").css("display", "none");
        jQuery(".arrowab img").css("transform", "none");

      }
    })

  jQuery('.container-dropdown label').click(function(){
  jQuery(".container-dropdown").css("display", "none");
        jQuery(".arrowab img").css("transform", "none");
    })


// Message de livraison
    var delayMsg = jQuery('.delay-delivery--msg').html();
    jQuery('.delay-delivery--msg ').remove();
    jQuery('.product-colors-sizes:eq(2)').after('<div class=\"delayText\">'+ delayMsg +'</div>');
    jQuery('.delayText').css({'text-align': 'center', 'font-size': '0.857rem', 'line-height': '1.2rem', 'margin-top': '10px', 'margin-bottom': '-20px'});

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
jQuery(".variant-size").before("<span style='margin-bottom:5px; display:block; text-align:left; font-size: 14px;'>Sélectionner votre taille</span>");
}
else{jQuery(".product-colors--title:contains(Taille disponible)").remove(); jQuery(".variant-size").before("<span style='margin-bottom:5px; display:block; font-size: 14px;'>1 taille disponible</span>");}

jQuery("body").append("<style>.sizes-guide.js-size-guide{text-decoration:underline !important;} .delayText{font-size:10px;} .product-command--ctas{width: 100% !important; margin-top: 22px !important;} .product-command-ctas--add a span, .addToCartButton{font-size:11px; font-family: poppins-light,arial,sans-serif;} .product-command-ctas--add a span{padding-left: 5px;} .newbcontainer{padding-bottom: 30px; margin-top: 20px;} .product-colors-sizes.sizes > div{font-size: 1rem; padding-top: 0px; padding-bottom: 0px;} .old-price {padding-left: 20px;}</style>");
jQuery(".product-command-ctas--add a span").text("Réserver gratuitement en magasin");
//Description
jQuery(".product-container--description--block-content").attr("id", "ancretestab");

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


//1 seule taille disponible
if (jQuery(".product-colors-sizes.sizes span:contains(1 taille disponible)").length === 1){var currentsizeab = jQuery('.container-dropdown a span.active').text(); jQuery(".variant-size ").has(".container-dropdown").before("<span class='currentsizeab'>"+currentsizeab+"</span>");  jQuery(".variant-size ").has(".container-dropdown").remove(); jQuery("body").append("<style>span.currentsizeab { border: black 1px solid; padding: 5px 8px 3px 8px; min-height: 30px; display: flex; align-items: center !important; min-width: 66px; max-width: 66px; justify-content: center;}span.currentsizeab::before { background: url(https://www.grandoptical.com/_ui/responsive/common/images/svg/checkmark-gossamer.svg) no-repeat; background-size: auto; content: ' '; width: 12px; height: 19px; display: inline-block; background-size: contain; margin-right: 5px;}</style>");}
}

}, 100);
//afficher le prix en noir quand il n'y a pas de promotion
setTimeout(function() {
  if (jQuery(".old-price").lenght === 1){
    jQuery(".new-price").css({'color': '#cdce01'})
  } else {
    jQuery('.product-container .totalPrice').css({'color': 'black'});
  }


//monture seule unique choix

if (jQuery(".product-command--ctas form label").length === 1 && jQuery(".container-dropdown form label:contains(Monture seule (sans verres))").length === 1){
  var letexte = jQuery(".current-choice-ab").text();
  jQuery(".product-command--ctas").prepend("<span style='background-color: #f7f7f7;'>"+ letexte +"</span>");
  jQuery(".titre-section-selectbox, .current-choice-ab-container").remove();
}
}, 500);

}

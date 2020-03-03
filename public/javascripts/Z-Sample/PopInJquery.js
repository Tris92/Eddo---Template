// À copier coller sur la page https:

//www.fermob.com/fr/La-boutique/Le-mobilier/Chaises-tabourets-bancs/Chaises-fauteuils-repas/Fauteuil-Louvre? par exemple pour voir le fonctionnement.

// La pop-in apparait au clic sur le CTA Ajouter au panier

//CODE


jQuery("body").append("<div class='overlayab'><div class='lapopin'><div class='croixab' ><img src='https://www.eddo.fr/wp-content/uploads/2019/11/croix.png'></div><h3 style='font-family: hind; color: #4C5C65; clear: both; font-size: 2em;text-align: center;font-weight: 600;'><img src='https://www.eddo.fr/wp-content/uploads/2019/11/check.png' style='margin-right: 12px;'><span>Votre produit a bien été ajouté au panier</span></h3><div class='container-cta-ab' style='width: 100%; padding: 0 3em; justify-content: center; display: flex;'><a href='#' style='font-family: ProximaNovaBold;background: rgb(0, 136, 160); color: white; text-transform: uppercase; padding: 16px 15px; font-size: 1.5em; text-decoration: none; display: block; width: 221px; float: left; margin-right: 15px;'>Poursuivre mes achats</a><a href='https://www.fermob.com/fr/La-boutique/panier' style='font-family: ProximaNovaBold; background: #0088A0; color: white; text-transform: uppercase; padding: 16px 15px; font-size: 1.5em; text-decoration: none; display: block; width: 163px; float: right;'>Voir mon panier</a></div><h3 style='font-family: hind; color: #4C5C65; font-size: 2em;text-align: center;font-weight: 600; clear: both;'>Vous aimerez aussi</h3><div class='section-cross-sell-ab'></div></div></div>");
jQuery(".block-product-other").clone().appendTo(jQuery(".section-cross-sell-ab"));
//jQuery(".section-cross-sell-ab .block-product-other li:nth-of-type(n+5), .bx-controls").hide();
jQuery("body").append("<style>.overlayab { position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; background: rgba(0, 0, 0, 0.55);}.lapopin {padding-top: 5px; background: white; width: 70%; max-width: 627px; margin-right: auto; margin-left: auto; margin-top: 10%; margin-bottom: auto; height: 447px;}.lapopin .bx-wrapper{max-width: 552px !important; padding-left: 3px;} .lapopin li{ max-width: 122.6px; border: 1px solid lightgray; min-height: 180px; overflow: hidden; vertical-align: top;} .lapopin .content-product-other { padding: 0.5em 1em;}.lapopin .product-other-collection { font-size: 10px;}.lapopin .media-product-other { border: 0px !important;} .croixab { float: right;padding: 6px 15px 6px 15px; cursor: pointer;}.croixab img { width: 22px; height: 22px;}.container-cta-ab { margin-top: 24px; margin-bottom: 24px;}.section-cross-sell-ab { margin-top: 16px;} .lapopin ul.list-product-other {width: 100%; transform: none !important;} @media only screen and (min-width: 768px){.lapopin .media-product-other img{padding-top: 5px; width: 84% !important; margin: auto !important;} .lapopin .list-product-other {width: 510px !important;} .lapopin li{min-height: 190px !important;} .lapopin li:nth-of-type(4){margint-top: 0px !important; margin-bottom: 0px !important; margin-left: 0px !important;} .lapopin li:nth-of-type(1), .lapopin li:nth-of-type(2), .lapopin li:nth-of-type(3){margin-top: 0px !important; margin-bottom: 0px !important; margin-left: 0px !important;} .lapopin .bx-wrapper{padding-left: 0px !important;} .lapopin .block-product-other{padding: 0px !important;} .lapopin .list-product-other li:nth-of-type(1){margin-left: 0px !important;} .lapopin .bx-viewport{height: 195px !important;}li:nth-of-type(4) {margin-right: 0px !important;} .lapopin li:nth-of-type(1), .lapopin li:nth-of-type(2), .lapopin li:nth-of-type(3){margin-right: 10px !important;} .lapopin .block-product-other {width: 506px !important; margin: auto !important;} .lapopin .bx-wrapper {max-width: 506px !important;padding-left: 3px;} .lapopin .bx-viewport{width: 506px !important; overflow: visible !important; margin: 0px !important;}} .product-other-name{font-size:10px !important;} .product-other-collection{font-size: 10px !important;} .container-cta-ab a:hover{background: rgb(56, 167, 186) !important; -webkit-transition: all 0.15s ease-in-out; -webkit-transition-delay: 0s; -moz-transition: all 0.15s ease-in-out; -o-transition: all 0.15s ease-in-out; transition: all 0.15s ease-in-out false;} @media only screen and (max-width: 767px){ .lapopin li:nth-child(2), .lapopin li:nth-child(4){margin-right: 0px !important; margin-left: 5px !important;} .lapopin ul.list-product-other{max-width: 380px !important; margin: auto;} .lapopin li:nth-of-type(1){margin-left:0px !important;12px !important} .lapopin li{min-height: 75px !important;}.lapopin .content-product-other{display:none;} .lapopin .media-product-other img{padding-top:5px;} .lapopin{height: 430px !important;} .lapopin h3:nth-of-type(2), .lapopin  .container-cta-ab{margin-top:28px !important;} .lapopin .container-cta-ab a:nth-of-type(2){margin: 0px !important;}}</style>");
jQuery(".overlayab").hide();




var stopintervalab = true ;
setInterval(function(){
if (stopintervalab === true){
jQuery(".cta-buy-product.link-primary").on('click', function (event) {
  console.log("ok");
    event.stopPropagation();
  jQuery(".overlayab").show();
});
//var stopintervalab = false;
}

    //Pour remettre le comportement de clic sur le CTA d'ajout au panier en détectant le rechargement dynamique de la section.
   jQuery(".cta-color-product").on('click', function (event) {
if (jQuery(".cta-color-product").hasClass("checkreloadab").length === 0){
var stopintervalab = true ;
jQuery(".cta-color-product").addClass("checkreloadab");
}
       else{var stopintervalab = false;}
});

    }, 500);

jQuery(".section-cross-sell-ab .block-product-other li:nth-of-type(n+5), .bx-controls").remove();
jQuery(".section-cross-sell-ab .block-product-other li:nth-of-type(4)").css("margin-right", "0px");


jQuery(".lapopin a:contains(Poursuivre mes achats), .lapopin .croixab").on('click', function (event) {
event.preventDefault();
jQuery(".overlayab").hide();
});

jQuery(".lapopin").on('click', function (event) {
event.stopPropagation();
});
jQuery(".overlayab").on('click', function (event) {
jQuery(".overlayab").hide();
});


if (window.matchMedia('(max-width: 767px)').matches){
jQuery(".lapopin h3:contains(Votre produit a bien été ajouté au panier)").css("line-height", "18px");
jQuery(".lapopin h3:contains(Votre produit a bien été ajouté au panier)").css("padding", "0% 6%");
jQuery(".lapopin span:contains(Votre produit a bien été ajouté au panier)").css("font-size", "1em");
jQuery(".lapopin a:contains(Poursuivre mes achats)").css("font-size", "1.1em");
jQuery(".lapopin a:contains(Voir mon panier)").css("font-size", "1.1em")
jQuery(".lapopin a:contains(Voir mon panier)").css("float", "none");
jQuery(".lapopin .container-cta-ab").css("float", "none");
jQuery(".lapopin a:contains(Voir mon panier)").css("margin", "0px");
jQuery(".lapopin a:contains(Voir mon panier)").css("text-align", "center");
jQuery(".lapopin a:contains(Poursuivre mes achats)").css("margin", "0 10px 0 auto");
jQuery(".lapopin a:contains(Poursuivre mes achats)").css("text-align", "center");
jQuery(".lapopin").css("width", "90%");
jQuery(".lapopin a:contains(Voir mon panier)").css("padding-top", "20px");
jQuery(".lapopin a:contains(Voir mon panier)").css("margin-right", "0px");
jQuery(".lapopin .content-product-other").css("display", "block");
jQuery(".lapopin li").css("min-height", "75px");
jQuery(".lapopin .media-product-other img").css("width", "70%");
jQuery(".lapopin .media-product-other img").css("margin", "auto");
jQuery(".lapopin").css("height", "525px");
jQuery(".lapopin .container-cta-ab").css("margin-top", "10px");
jQuery(".lapopin .container-cta-ab").css("margin-bottom", "7px");
jQuery(".lapopin span:contains(Votre aimerez aussi)").css("font-size", "1.3em");
jQuery(".lapopin .section-cross-sell-ab").css("margin-top", "4px");
jQuery(".lapopin h3:contains(Vous aimerez aussi)").css("height", "30px");
jQuery(".lapopin a:contains(Voir mon panier)").css("height", "52px");
jQuery(".lapopin li:eq(0), .lapopin li:eq(2)").css("margin-right", "0px");
jQuery(".lapopin li:eq(2)").css("margin-left", "0px");
jQuery(".lapopin li:eq(0)").css("margin-bottom", "9px");
jQuery(".container-cta-ab a").css("margin", "0px");
jQuery(".container-cta-ab a").css("margin-right", "10px");
jQuery(".container-cta-ab a:eq(0)").css("line-height", "15px 13px");
jQuery(".container-cta-ab a:eq(1)").css("line-height", "16px 13px");
jQuery(".lapopin a:contains(Voir mon panier)").css("padding", "16px 15px");
jQuery(".lapopin a:contains(Poursuivre mes achats)").css("height", "52px");
jQuery(".lapopin h3:contains(Votre produit) span").text("Produit ajouté au panier");
jQuery(".lapopin .product-other-name, .lapopin .product-other-collection").hide();
}

if (window.matchMedia('(min-width: 768px)').matches){
jQuery(".container-cta-ab a:eq(0)").css("line-height", "52px");
jQuery(".container-cta-ab a:eq(1)").css("line-height", "52px");
jQuery(".container-cta-ab a:eq(0)").css("padding", "initial");
jQuery(".container-cta-ab a:eq(1)").css("padding", "initial");
jQuery(".lapopin").css("width", "600px");
jQuery(".lapopin .container-cta-ab a").css("text-align", "center");
jQuery(".lapopin li:eq(0), .lapopin li:eq(1), .lapopin li:eq(2)").css("margin-right", "10px");
jQuery(".lapopin li:eq(3)").css("margin-right", "0px");
jQuery(".lapopin li:eq(0)").css("margin-left", "8px");
jQuery(".lapopin li").css("min-width", "118px");
jQuery(".lapopin li").css("max-width", "118px");
jQuery(".lapopin ul.list-product-other").css("width", "578px");
jQuery(".lapopin .bx-viewport").css("max-width", "518px");
jQuery(".lapopin .bx-wrapper").css("padding-left", "0px");
jQuery(".lapopin .bx-wrapper").css("max-width", "503px");
jQuery(".lapopin .bx-wrapper").css("min-width", "503px");
jQuery(".lapopin .bx-viewport").css("height", "180px");
jQuery(".lapopin .bx-viewport").css("width", "518px");
jQuery(".lapopin .bx-viewport").css("margin", "auto");
jQuery(".lapopin .bx-viewport").css("overflow", "visible");
}

setInterval(function(){
if (jQuery(".section-cross-sell-ab .block-product-other li:nth-of-type(n+5)").length > 0){
jQuery(".section-cross-sell-ab .block-product-other li:nth-of-type(n+5)").hide();
}
if (jQuery(".section-cross-sell-ab .bx-controls").length > 0){
jQuery(".section-cross-sell-ab .bx-controls").hide();
}
}, 200);


jQuery(document).on('mousedown', '.lapopin .container-cta-ab a:eq(0)', function () { ABTastyClickTracking('Clic CTA Pop-in Poursuivre mes achats', null, 513271); });
jQuery(document).on('mousedown', '.lapopin .container-cta-ab a:eq(1)', function () { ABTastyClickTracking('Clic CTA Pop-in Voir mon panier', null, 513271); });
jQuery(document).on('mousedown', '.lapopin .croixab', function () { ABTastyClickTracking('Clic croix Pop-in', null, 513271); });
jQuery(document).on('mousedown', '.lapopin li a', function () { ABTastyClickTracking('Clic Pop-in Bloc produit cross-sell', null, 513271); });

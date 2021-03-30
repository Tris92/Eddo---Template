https://www.illicado.com/carte-cadeau-happy-birthday-1.html?abtestPopin



/****************** JavaScript ****************/
jQuery("body").append("<style>.overlay {display:none; background: #000000ab; position: fixed; width: 100%; z-index: 99999; top: 0;} #popin-abTest{display:none;} section#popin-abTest {-webkit-box-shadow: 0px 2px 13px #0000006b; box-shadow: 0px 2px 13px #0000006b; position: fixed; z-index: 9999999999999999; top: 15%; width: 600px; background: white; border-radius: 6px;  display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column;} .product-block-ab { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column;}.container-bloc-cross-sell { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center;}.product-block-ab button.btn { background: #fecc39; color: white; border: none;}.container-close-button button.btn { background: #98b9ea; border: none; color: white; width: 30%;} div#center{visibility: hidden; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center;}.container-close-button { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; padding-top: 30PX;}.product-ab { border: lightgrey 1PX SOLID; margin-bottom: 10px; padding: 0 5px; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -ms-flex-align: center; align-items: center; width: 150px; height: 155px;} .product-ab img { width: 55%;} .etuiAB, .boiteAB, .etuiFetesAB{visibility:hidden; height:0px !important; width:0px !important;} @media (max-width: 768px){section#popin-abTest{width:260px;}#popin-abTest h2 {font-size: 2rem;}}</style>");
jQuery("body").append("<div class='overlay'></div><div id='center'><section id='popin-abTest'><div class='confirmationEtui' style='display: flex;background-color: #fe5ba1; height: 30px; justify-content: center; border-top-left-radius: 3px; border-top-right-radius: 3px; align-items: center;'><img src='https://media.illicado.com/media/500px-Light_green_check.svg_copie.png' class='iconConfirm' style='height: 15px; width: auto'/><p style='font-weight: 600; padding-top: 10px; margin-left: 5px; color: white'>Votre produit a bien été ajouté au panier</p></div><h2 style='padding-right: 20px; padding-left: 20px; margin-top: -20px; text-align: center; font-size: 2rem; font-weight: 800;' class='titlePopin'>Offrez votre carte dans un étui ! Effet garanti !</h2><div class='container-bloc-cross-sell'><div class='product-block-ab'><div class='product-ab'><img src='#'><p></p><p></p></div><button type='button' class='btn btn-popin'>Ajouter</button></div></div><div class='container-close-button' style='margin-bottom: 20px;'><button type='button' class='btn' style='margin-right: 20px; border-radius: 4px; height: 40px; background-color: #cccccc'>Continuer mes achats</button><button type='button' style='margin-left: 10px; border-radius: 4px;height: 40px; background-color: #ffcc00;' class='btn' href='https://www.illicado.com/checkout/cart/'>Valider mon panier</button></div></section></div>");
var hauteurDePage = window.innerHeight;
jQuery(".overlay").height(hauteurDePage);
//ÉTUI CADEAU
var imgA = jQuery(".crosssell-product-list .left img[alt='Etui Cadeau']:eq(0)").attr("src");
var nomBaseA = jQuery(".crosssell-product-list .right p:eq(0)").text();
var regexNom = /:/gi;
var newNom = nomBaseA.replace(regexNom, '');
var productNameA = newNom;
var prixA = jQuery(".crosssell-product-list .right .price:eq(0)").text();
jQuery("#popin-abTest .product-ab:eq(0) img").attr("src", imgA);
jQuery("#popin-abTest .product-ab:eq(0) p:eq(0)").text(productNameA);
jQuery("#popin-abTest .product-ab:eq(0) p:eq(1)").text(prixA);

//iframe dans le body
var currentUrl = window.location.href;
jQuery("body").append('<iframe id="inlineFrameExample" title="Inline Frame Example" width="300" height="200" src="'+ currentUrl +'"></iframe>');
jQuery("#inlineFrameExample").css({"display":"none"});
jQuery('.confirmationEtui').hide();

jQuery('.btn-popin').css({'background': '#98b9ea'});

//ajout image du produit dans la popin

jQuery('.product-info-main .box-tocart .action.tocart, .product-options-bottom .box-tocart .action.tocart').addClass("popinImgAdd");

jQuery('.popinImgAdd').click(function() {
  setTimeout(function() {
    var productPopin = jQuery('#mini-cart LI:eq(0)').html();
    jQuery('.titlePopin').before('<div id="newProductPopin" style="margin-top: 10px;">'+ productPopin +'</div>');
    jQuery('#newProductPopin .product .actions').remove();
    jQuery('#newProductPopin .product').css({'display': 'flex', 'align-items': 'center', 'justify-content': 'center'});
    jQuery('#newProductPopin .product-image-container').css({'width': '200px'});
    jQuery('#newProductPopin .product-image-photo').css({'width': '200px', 'height': 'auto'});
    jQuery('#newProductPopin .product-item-details .product-item-name A').css({'color': 'black', 'font-weight': '600', 'font-size': '16px'});
    jQuery('#newProductPopin .product-item-details').css({'margin-left': '10px'});
    jQuery('#newProductPopin .price-including-tax').prepend('<p style="font-weight: 600; margin-right: 10px; font-size: 16px;">Valeur :</p>');
    jQuery('#newProductPopin .price-including-tax').css({'display': 'flex'});
    jQuery('#newProductPopin .price-container .price').css({'font-size': '16px'});
  }, 4000)
  if(jQuery('#newProductPopin').length) {
    jQuery('#newProductPopin:eq(0)').css({'display': 'none'});
  }
});

jQuery("#popin-abTest .btn:contains(Ajouter):eq(0)").click(function() {
  //Déclencher le clic virtuel / l'ajout au panier
  jQuery("#inlineFrameExample").contents().find('body').find('.action.tocart.primary:eq(2)').click();
  jQuery('.confirmationEtui').toggle();
  setTimeout(function() {
    jQuery('.confirmationEtui').hide();
    jQuery(".overlay").hide();
    jQuery("#center").css({
      "visibility": "hidden"
    });
  }, 4000)
  ABTastyClickTracking('Ajout étui', null, 634401);
});

jQuery("#product-addtocart-button").click(function() {
  setTimeout(function() {
    if (jQuery("#giftcard-amount-box input").val().length !== 0 && jQuery(".item.product.product-item.choosen").length === 0) {
      jQuery(".overlay").show();
      jQuery("#center").css({
        "visibility": "visible"
      });
      ABTastyClickTracking('Affichage pop-in', null, 634401);
    }
  }, 3500);
});
jQuery("#product-addtocart-button-mobile").click(function() {
  setTimeout(function() {
    if (jQuery("#giftcard-amount-box input").val().length !== 0 && jQuery(".item.product.product-item.choosen").length === 0) {
      jQuery(".overlay").show();
      jQuery("#center").css({
        "visibility": "visible"
      });
      ABTastyClickTracking('Affichage pop-in', null, 634401);
    }
  }, 3500);
});
jQuery(".container-close-button button").click(function() {
  jQuery(".overlay").hide();
  jQuery("#center").css({
    "visibility": "hidden"
  });
});
jQuery(".overlay").click(function() {
  jQuery(".overlay").hide();
  jQuery("#center").css({
    "visibility": "hidden"
  });
});

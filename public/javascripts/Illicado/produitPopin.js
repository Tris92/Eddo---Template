https://www.illicado.com/carte-cadeau-happy-birthday-1.html



/****************** JavaScript ****************/
jQuery("body").append("<style>.overlay {display:none; background: #000000ab; position: fixed; width: 100%; z-index: 99999; top: 0;} #popin-abTest{display:none;} section#popin-abTest {-webkit-box-shadow: 0px 2px 13px #0000006b; box-shadow: 0px 2px 13px #0000006b; position: fixed; z-index: 9999999999999999; top: 15%; width: 555px; background: white; border-radius: 6px; padding: 38px; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column;} .product-block-ab { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column;}.container-bloc-cross-sell { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center;}.product-block-ab button.btn { background: #fecc39; color: white; border: none;}.container-close-button button.btn { background: #98b9ea; border: none; color: white; width: 45%;} div#center{visibility: hidden; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center;}.container-close-button { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; padding-top: 30PX;}.product-ab { border: lightgrey 1PX SOLID; margin-bottom: 10px; padding: 0 5px; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -ms-flex-align: center; align-items: center; width: 150px; height: 155px;} .product-ab img { width: 55%;} .etuiAB, .boiteAB, .etuiFetesAB{visibility:hidden; height:0px !important; width:0px !important;} @media (max-width: 768px){section#popin-abTest{width:260px;}#popin-abTest h2 {font-size: 2rem;}}</style>");
jQuery("body").append("<div class='overlay'></div><div id='center'><section id='popin-abTest'><h2>Offrez votre carte dans un étui ! Effet garanti !</h2><div class='container-bloc-cross-sell'><div class='product-block-ab'><div class='product-ab'><img src='#'><p></p><p></p></div><button type='button' class='btn btn-popin'>Ajouter</button><p class='confirmationEtui'>Ajouté !</p></div></div><div class='container-close-button'><button type='button' class='btn'>Non merci !</button></div></section></div>");
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

jQuery("#popin-abTest .btn:contains(Ajouter):eq(0)").click(function() {
  //Déclencher le clic virtuel / l'ajout au panier
  jQuery("#inlineFrameExample").contents().find('body').find('.action.tocart.primary:eq(2)').click();
  jQuery('.confirmationEtui').toggle();
  setTimeout(function() {
    jQuery('.confirmationEtui').hide();
  }, 2000)
  jQuery('.confirmationEtui').css({'color': '#006400', 'text-align': 'center', 'margin-top': '10px', 'margin-bottom': '-15px'});
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
  }, 2000);
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
  }, 2000);
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







var currentUrl = window.location.href;
jQuery("body").append('<iframe id="inlineFrameExample" title="Inline Frame Example" width="300" height="200" src="'+ currentUrl +'"></iframe>');
jQuery("#inlineFrameExample").css({"display":"none"});
//Déclencher le clic virtuel / l'ajout au panier
jQuery("#inlineFrameExample").contents().find('body').find('.action.tocart.primary:eq(2)').click();



border-radius: 0;
margin: 0 0 9px;
padding: 9px 18px;
display: block;
line-height: 1.2em;
font-size: 1.3rem;
border: 2px solid;
background: #fff;
border-color: #e5efe5;
color: #006400;
padding-left: 40px;
position: relative;

// var currentUrl = window.location.href;
// jQuery("body").append('<iframe id="inlineFrameExample" title="Inline Frame Example" width="300" height="200" src="' + currentUrl + '"></iframe>');
// jQuery("#inlineFrameExample").css({
//   "display": "none"
// });
// //Si 1 seul étui va être ajouté
// //Quantité sélectionnée dans le champ
// var qtn = 3;
// if (jQuery("#inlineFrameExample").contents().find('body').find('.action.tocart.primary:eq(2)').attr("data-post").match(/\"qty":1,/)) {
//   jQuery("#inlineFrameExample").contents().find('body').find('.action.tocart.primary:eq(2)').attr('data-post', '{"action":"https:\/\/www.illicado.com\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cuaWxsaWNhZG8uY29tL2NhcnRlcy1jYWRlYXV4L2NhcnRlLWNhZGVhdS1mZXRlLWRlcy1ncmFuZC1tZXJlcy9jYXJ0ZS1jYWRlYXUtYXF1YXJlbGxlLWZsZXVyLmh0bWw%2C\/product\/399\/","data":{"product":"399","qty":' + qtn + ',"uenc":"aHR0cHM6Ly93d3cuaWxsaWNhZG8uY29tL2NhcnRlcy1jYWRlYXV4L2NhcnRlLWNhZGVhdS1mZXRlLWRlcy1ncmFuZC1tZXJlcy9jYXJ0ZS1jYWRlYXUtYXF1YXJlbGxlLWZsZXVyLmh0bWw,"}}');
// }
// //Déclencher le clic virtuel / l'ajout au panier
// jQuery("#inlineFrameExample").contents().find('body').find('.action.tocart.primary:eq(2)').click();

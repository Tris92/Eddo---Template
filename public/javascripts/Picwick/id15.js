// ORIGINAL VERSION

if (!window.abt590820) {
  window.abt590820 = true;

  var stopintervalab = true;
  var script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);


  setTimeout(function(){
    jQuery('body').prepend('<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><div class="containerSuccess"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><p class="messageSuccess">Votre produit a bien été ajouté!</p></div><br><div class="selectedProduct"></div><p class="otherProduct">Autre produit dans votre panier:</p><div class="buttonPopin"><button class="Button Button--primary buttonPanierPopin" href=\"https://www.picwictoys.com/panier\"><p style="text-align: center;font-size: 12px; margin: auto;">Voir mon panier</p></button><button class="Button buttonAchats" href=\"https://www.picwictoys.com/panier\"><p style="text-align: center;font-size: 12px; margin: auto;">Continuer mes achats</p></button></div><div class="footerPopin"><div class="footerPopinDelivery"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block; margin-right: 20px"><p style="display: flex; font-size: 12px; text-align: left;">LIVRAISON OFFERTE</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">EN MAGASIN</p></div></div><div class="footerPopinPayment"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block;"><p style="display: flex; font-size: 12px; text-align: left;">PAIEMENT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">100% SÉCURISÉ</p></div></div></div></div></div>');
    jQuery('.modal').css({'position': 'fixed', 'z-index': '1', 'left': '0', 'top': '0', 'overflow': 'auto', 'width': '100%', 'height': '100%', 'background-color': 'rgba(53, 192, 236, 0.7)'});
    jQuery('.modal-content').css({'background-color': 'white', 'margin': '25% auto', 'padding': '20px', 'width': '100%', 'height': '500px'});
    jQuery('.containerSuccess').css({'display': 'flex', 'align-items': 'center'});
    jQuery('.pictoSuccess').css({'margin-right': '10px'});
    jQuery('.messageSuccess').css({'font-size': '15px', 'color': 'rgba(53, 192, 236)', 'font-weight': '501'});
    jQuery('.otherProduct').css({'font-size': '17px', 'float': 'left'});
    jQuery('.close').css({'float': 'right', 'color': 'rgba(53, 192, 236)', 'font-size': '40px', 'margin-top': '-20px'});
    jQuery('.buttonPanierPopin').css({'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
    jQuery('.buttonPopin').css({'display': 'block'});
    jQuery('.buttonAchats').css({'border': '3px solid rgba(53, 192, 236)', 'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
    jQuery('.footerPopin').css({'display': 'flex', 'align-items': 'center', 'margin': '10px auto'});
    jQuery('.footerPopinDelivery').css({'display': 'flex', 'align-items': 'center', 'margin': 'auto'});
    jQuery('.footerPopinPayment').css({'display': 'flex', 'align-items': 'center', 'margin-right': '20px'});
    jQuery('.modal').hide();
  }, 100);

  setTimeout(function(){
    jQuery('.selectedProduct').append('<iframe src="https://www.picwictoys.com/panier" id="myFrame"></iframe>');
    jQuery('#myFrame').css({'width': '100%', 'height': '100%', 'overflow': 'visible', 'border': 'none'});
    jQuery("#myFrame").contents().find(".Head").css({'display': 'none'});
  }, 200)


  setInterval(function(){
    if (stopintervalab === true){
      jQuery('.CallToAction-flexContainer .Button--withIcon').click(function(event) {
        jQuery('.Snackbar-wrap').remove();
        jQuery('.HeaderContent').hide();
        console.log('ok abtest');
        event.stopPropagation();
        jQuery('.modal').show();
      });
      jQuery('.close').click(function() {
        jQuery('.modal').css({'display': 'none'});
        jQuery('.HeaderContent').show();
      });
    }
  }, 200);

}







// TEST VERSION

if (!window.abt590820) {
  window.abt590820 = true;

  var stopintervalab = true;
  var script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);


  setTimeout(function(){
    jQuery('body').prepend('<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><div class="containerSuccess"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><p class="messageSuccess">Votre produit a bien été ajouté!</p></div><br><div class="selectedProduct"></div><p class="otherProduct">Autre produit dans votre panier:</p><div class="otherSelectedItems" style="height: 150px; margin-top: -20px;"></div><div class="buttonPopin"><button class="Button Button--primary buttonPanierPopin" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Voir mon panier</p></button><button class="Button buttonAchats" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Continuer mes achats</p></button></div><div class="footerPopin"><div class="footerPopinDelivery"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block; margin-right: 20px"><p style="display: flex; font-size: 12px; text-align: left;">LIVRAISON OFFERTE</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">EN MAGASIN</p></div></div><div class="footerPopinPayment"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block;"><p style="display: flex; font-size: 12px; text-align: left;">PAIEMENT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">100% SÉCURISÉ</p></div></div></div></div></div>');
    jQuery('.modal').css({'position': 'fixed', 'z-index': '1', 'left': '0', 'top': '0', 'overflow': 'auto', 'width': '100%', 'height': '100%', 'background-color': 'rgba(53, 192, 236, 0.7)'});
    jQuery('.modal-content').css({'background-color': 'white', 'margin': '16% auto', 'padding': '20px', 'width': '100%', 'height': '580px'});
    jQuery('.containerSuccess').css({'display': 'flex', 'align-items': 'center'});
    jQuery('.pictoSuccess').css({'margin-right': '10px'});
    jQuery('.messageSuccess').css({'font-size': '15px', 'color': 'rgba(53, 192, 236)', 'font-weight': '501'});
    jQuery('.otherProduct').css({'font-size': '17px', 'float': 'left'});
    jQuery('.close').css({'float': 'right', 'color': 'rgba(53, 192, 236)', 'font-size': '40px', 'margin-top': '-20px'});
    jQuery('.buttonPanierPopin').css({'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
    jQuery('.buttonPopin').css({'display': 'block', 'margin-top': '26%'});
    jQuery('.buttonAchats').css({'border': '3px solid rgba(53, 192, 236)', 'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
    jQuery('.footerPopin').css({'display': 'flex', 'align-items': 'center', 'margin': '10px auto'});
    jQuery('.footerPopinDelivery').css({'display': 'flex', 'align-items': 'center', 'margin': 'auto'});
    jQuery('.footerPopinPayment').css({'display': 'flex', 'align-items': 'center', 'margin-right': '20px'});
    jQuery('.selectedProduct').css({'height': '100px', 'margin-bottom': '-20px'});
    jQuery('.modal').hide();
  }, 100);

  setTimeout(function(){
    jQuery('.selectedProduct').append('<iframe src="https://www.picwictoys.com/panier" id="myFrame"></iframe>');
    jQuery('#myFrame').css({'width': '100%', 'height': '100%', 'overflow': 'visible', 'border': 'none'});
  }, 100)

  setInterval(function(){
    if(jQuery("#myFrame").contents().find("body").length > 0){
      jQuery("#myFrame").contents().find("body").ready(function() {
        jQuery("#myFrame").contents().find("body").css("overflow", "visible");
        jQuery("#myFrame").contents().find(".Header").css("display", "none");
        jQuery('#myFrame').contents().find("#toky_container").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".CartProduct-close ").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".Cart:eq(0)").css({'height': '50px', 'margin-bottom': '0px', 'min-height': '0px'});
        jQuery('#myFrame').contents().find(".Layout").css({'padding-top': '0px'});
        jQuery('#myFrame').contents().find(".Cart-title").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".CartProduct-price").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".ShippingSelector").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".ShippingSelector").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".CartSummary").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".CartSummary-fidelityProgram-link").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".Cart-crossell").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".Reinsurance").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".Footer").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".Cart-container:eq(0)").css({'padding-top': '0px', 'padding-bottom': '0px', 'padding-right': '0px', 'padding-left': '0px'});

        jQuery('#myFrame').contents().find(".QuantitySelector-button--min").css({'display': 'none'});
        jQuery('#myFrame').contents().find(".QuantitySelector-button--plus").css({'display': 'none'});
        // jQuery('#myFrame').contents().find(".CartProduct-quantityPriceMobile").css({'display': 'none'});


        jQuery('#myFrame').contents().find(".CartProduct-nameAndDesc:eq(0)").css({'margin-top': '-25px'});
        jQuery('#myFrame').contents().find(".CartProduct-product:eq(0)").css({'box-shadow': 'none', '-webkit-box-shadow': 'none', 'padding': '0px'});
        jQuery('#myFrame').contents().find(".CartProduct-productVisual:eq(0)").css({'width': '7rem', 'height': '7rem'});
        if(jQuery("#myFrame").contents().find(".CartProduct:eq(1)").length > 0){
          jQuery('#myFrame').contents().find(".CartProduct:eq(1)").css({'display': 'none'});
          jQuery('#myFrame').contents().find(".CartProduct:eq(2)").css({'display': 'none'});
          jQuery('#myFrame').contents().find(".CartProduct:eq(3)").css({'display': 'none'});
          jQuery('#myFrame').contents().find(".CartProduct:eq(4)").css({'display': 'none'});
          jQuery('#myFrame').contents().find(".CartProduct:eq(5)").css({'display': 'none'});
          jQuery('#myFrame').contents().find(".CartProduct:eq(6)").css({'display': 'none'});
          jQuery('#myFrame').contents().find(".CartProduct:eq(7)").css({'display': 'none'});
          jQuery('#myFrame').contents().find(".CartProduct:eq(8)").css({'display': 'none'});
          jQuery('#myFrame').contents().find(".CartProduct:eq(9)").css({'display': 'none'});
          jQuery('#myFrame').contents().find(".CartProduct:eq(10)").css({'display': 'none'});
        }
      });
    }
  }, 100)


  setTimeout(function() {
    jQuery('.otherSelectedItems').append('<iframe src="https://www.picwictoys.com/panier" id="mySecondFrame"></iframe>');
    jQuery('#mySecondFrame').css({'width': '100%', 'height': '100%', 'overflow': 'visible', 'border': 'none'});
  }, 100)

  setInterval(function(){
    if(jQuery("#mySecondFrame").contents().find(".CartProduct:eq(1)").length > 0){
      jQuery("#mySecondFrame").contents().find("body").ready(function() {
        jQuery("#mySecondFrame").contents().find("body").css("overflow", "visible");
        jQuery("#mySecondFrame").contents().find(".Header").css("display", "none");
        jQuery('#mySecondFrame').contents().find("#toky_container").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-close ").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".Cart").css({'height': '100px', 'margin-bottom': '0px', 'min-height': '0px'});
        jQuery('#mySecondFrame').contents().find(".Layout").css({'padding-top': '0px'});
        jQuery('#mySecondFrame').contents().find(".Cart-title").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-price").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".ShippingSelector").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".ShippingSelector").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".CartSummary").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".CartSummary-fidelityProgram-link").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".Cart-crossell").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".Reinsurance").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".Footer").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".Cart-container").css({'padding-top': '0px', 'padding-bottom': '0px', 'padding-right': '0px', 'padding-left': '0px'});
        jQuery('#mySecondFrame').contents().find(".QuantitySelector").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-nameAndDesc:eq(1)").css({'margin-top': '-25px'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-product:eq(1)").css({'box-shadow': 'none', '-webkit-box-shadow': 'none', 'padding': '0px', 'margin-top': '0px'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-productVisual:eq(1)").css({'width': '7rem', 'height': '7rem'});
        jQuery('#mySecondFrame').contents().find(".CartProducts").css({'background-color': 'white'});

        jQuery('#mySecondFrame').contents().find(".CartProduct-product:eq(2)").css({'box-shadow': 'none', '-webkit-box-shadow': 'none', 'padding': '0px', 'margin-top': '10px'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-productVisual:eq(2)").css({'width': '7rem', 'height': '7rem'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-nameAndDesc:eq(2)").css({'margin-top': '-25px'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-advantages").css({'display': 'none'});

        jQuery('#mySecondFrame').contents().find(".CartProduct-product:eq(1) .QuantitySelector-button--min").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-product:eq(1) .QuantitySelector-button--plus").css({'display': 'none'});
        // jQuery('#mySecondFrame').contents().find(".CartProduct-product:eq(1) .CartProduct-quantityPriceMobile").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-product:eq(1) .QuantitySelector-input").css({'border-top': 'none', 'border-bottom': 'none'});

        jQuery('#mySecondFrame').contents().find(".CartProduct-product:eq(2) .QuantitySelector-button--min").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-product:eq(2) .QuantitySelector-button--plus").css({'display': 'none'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-product:eq(2) .CartProduct-quantityPriceMobile").css({'margin-left': '7.5rem', 'margin-top': '-35px'});
        jQuery('#mySecondFrame').contents().find(".CartProduct-product:eq(2) .QuantitySelector-input").css({'border-top': 'none', 'border-bottom': 'none'});

        jQuery('#mySecondFrame').contents().find(".CartProduct:eq(2)").css({'margin-top': '43px'});
      });
    }
  }, 100)

  setTimeout(function(){
    if(jQuery("#mySecondFrame").contents().find(".CartProduct:eq(0)").length > 0){
      jQuery('#mySecondFrame').contents().find(".CartProduct:eq(0)").css({'display': 'none'});
    }
    if(jQuery("#mySecondFrame").contents().find(".CartProduct:eq(4)").length > 0){
      jQuery('#mySecondFrame').contents().find(".CartProduct:eq(3)").css({'display': 'none'});
      jQuery('#mySecondFrame').contents().find(".CartProduct:eq(4)").css({'display': 'none'});
      jQuery('#mySecondFrame').contents().find(".CartProduct:eq(5)").css({'display': 'none'});
      jQuery('#mySecondFrame').contents().find(".CartProduct:eq(6)").css({'display': 'none'});
      jQuery('#mySecondFrame').contents().find(".CartProduct:eq(7)").css({'display': 'none'});
      jQuery('#mySecondFrame').contents().find(".CartProduct:eq(8)").css({'display': 'none'});
      jQuery('#mySecondFrame').contents().find(".CartProduct:eq(9)").css({'display': 'none'});
      jQuery('#mySecondFrame').contents().find(".CartProduct:eq(10)").css({'display': 'none'});
      jQuery('#mySecondFrame').contents().find(".CartProduct:eq(11)").css({'display': 'none'});
      jQuery('#mySecondFrame').contents().find(".CartProduct:eq(12)").css({'display': 'none'});
    }
  }, 100)

  setTimeout(function(){
    if(jQuery("#mySecondFrame").contents().find(".CartProduct:eq(1)").length === 0 && jQuery("#mySecondFrame").contents().find(".CartProduct:eq(2)").length === 0){
      jQuery('.otherSelectedItems').hide();
      jQuery('.otherProduct').hide();
      jQuery('.buttonPopin').css({'margin-top': '0px'});
      jQuery('.modal-content').css({'height': '380px'});
    }
  }, 100)

  setTimeout(function(){
    if(jQuery("#mySecondFrame").contents().find(".CartProduct:eq(2)").length === 1 && jQuery("#mySecondFrame").contents().find(".CartProduct:eq(3)").length === 1){
      jQuery('.messageNoItems').css({'display': 'none'});
      jQuery('.otherSelectedItems').show();
      jQuery('.modal-content').css({'height': '570px'});
      jQuery('.buttonPopin').css({'margin-top': '60px'});
      jQuery('.otherSelectedItems').after('<div class="fourItemMessage"><p style="text-align: center;">Autres produits</p></div>');
    }
  }, 100)

  setInterval(function(){
    if(jQuery("#mySecondFrame").contents().find(".CartProduct:eq(1)").length === 1 && jQuery("#mySecondFrame").contents().find(".CartProduct:eq(2)").length === 0){
      jQuery('.messageNoItems').css({'display': 'none'});
      jQuery('.modal-content').css({'height': '530px'});
      jQuery('.buttonPopin').css({'margin-top': '10px'});
    }
  }, 100)

  setInterval(function(){
    if (stopintervalab === true){
      jQuery('.CallToAction-flexContainer .Button--withIcon').click(function(event) {
        jQuery('.Snackbar-wrap').remove();
        jQuery('.HeaderContent').hide();
        console.log('ok abtest');
        event.stopPropagation();
        jQuery('.modal').show();
        jQuery('.Head').css({'background-color': 'rgba(53, 192, 236, 0.7)'});
        jQuery('#toky_container').hide();
      });
      jQuery('.close').click(function() {
        jQuery('.modal').css({'display': 'none'});
        jQuery('.HeaderContent').show();
        jQuery('.Head').css({'background-color': 'white'});
        jQuery('#toky_container').show();
      });
    }
  }, 100);

}








 xx

 Code enlevé

 // setTimeout(function(){
 //   jQuery("#myFrame").contents().find("body").ready(function() {
 //     var numberItem = jQuery('#myFrame').contents().find(".CartProduct:eq(0).QuantitySelector-input").clone();
 //     console.log('clone success');
 //     jQuery('#myFrame').contents().find(".CartProduct:eq(0).CartProduct-quantityPriceMobile").prepend('<div style="display: flex;"><p style="display: flex; height: 10px; color: black;">X</p><div style="color: black; height: 12px; display: block;"> '+ numberItem +'</div></div>');
 //   })
 // }, 100)




































 Final version



 // TEST VERSION

 if (!window.abt590820) {
   window.abt590820 = true;

   var stopintervalab = true;
   var script = document.createElement('script');
   script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
   script.type = 'text/javascript';
   document.getElementsByTagName('head')[0].appendChild(script);


   setTimeout(function(){
     jQuery('body').prepend('<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><div class="containerSuccess"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><p class="messageSuccess">Votre produit a bien été ajouté!</p></div><br><div class="selectedProduct"></div><div class="buttonPopin"><button class="Button Button--primary buttonPanierPopin" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Voir mon panier</p></button><button class="Button buttonAchats" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Continuer mes achats</p></button></div><div class="footerPopin"><div class="footerPopinDelivery"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block; margin-right: 20px"><p style="display: flex; font-size: 12px; text-align: left;">LIVRAISON OFFERTE</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">EN MAGASIN</p></div></div><div class="footerPopinPayment"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block;"><p style="display: flex; font-size: 12px; text-align: left;">PAIEMENT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">100% SÉCURISÉ</p></div></div></div></div></div>');
     jQuery('.modal').css({'position': 'fixed', 'z-index': '1', 'left': '0', 'top': '0', 'overflow': 'auto', 'width': '100%', 'height': '100%', 'background-color': 'rgba(53, 192, 236, 0.7)'});
     jQuery('.modal-content').css({'background-color': 'white', 'margin': '16% auto', 'padding': '20px', 'width': '100%', 'height': '400px'});
     jQuery('.containerSuccess').css({'display': 'flex', 'align-items': 'center'});
     jQuery('.pictoSuccess').css({'margin-right': '10px'});
     jQuery('.messageSuccess').css({'font-size': '15px', 'color': 'rgba(53, 192, 236)', 'font-weight': '501'});
     jQuery('.otherProduct').css({'font-size': '17px', 'float': 'left'});
     jQuery('.close').css({'float': 'right', 'color': 'rgba(53, 192, 236)', 'font-size': '40px', 'margin-top': '-20px'});
     jQuery('.buttonPanierPopin').css({'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
     jQuery('.buttonPopin').css({'display': 'block', 'margin-top': '8%'});
     jQuery('.buttonAchats').css({'border': '3px solid rgba(53, 192, 236)', 'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
     jQuery('.footerPopin').css({'display': 'flex', 'align-items': 'center', 'margin': '10px auto'});
     jQuery('.footerPopinDelivery').css({'display': 'flex', 'align-items': 'center', 'margin': 'auto'});
     jQuery('.footerPopinPayment').css({'display': 'flex', 'align-items': 'center', 'margin-right': '20px'});
     jQuery('.selectedProduct').css({'height': '100px', 'margin-bottom': '-20px'});
     jQuery('.modal').hide();
   }, 100);

   setTimeout(function(){
     jQuery('.selectedProduct').append('<iframe src="https://www.picwictoys.com/panier" id="myFrame"></iframe>');
     jQuery('#myFrame').css({'width': '100%', 'height': '100%', 'overflow': 'visible', 'border': 'none'});
   }, 100)

   setInterval(function(){
     if(jQuery("#myFrame").contents().find("body").length > 0){
       jQuery("#myFrame").contents().find("body").ready(function() {
           jQuery("#myFrame").contents().find("body").css("overflow", "visible");
           jQuery("#myFrame").contents().find(".Header").css("display", "none");
           jQuery('#myFrame').contents().find("#toky_container").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".CartProduct-close ").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".Cart").last().css({'height': '50px', 'margin-bottom': '0px', 'min-height': '0px'});
           jQuery('#myFrame').contents().find(".Layout").css({'padding-top': '0px'});
           jQuery('#myFrame').contents().find(".Cart-title").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".CartProduct-price").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".ShippingSelector").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".ShippingSelector").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".CartSummary").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".CartSummary-fidelityProgram-link").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".Cart-crossell").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".Reinsurance").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".Footer").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".Cart-container").last().css({'padding-top': '0px', 'padding-bottom': '0px', 'padding-right': '0px', 'padding-left': '0px'});

           jQuery('#myFrame').contents().find(".QuantitySelector-button--min").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".QuantitySelector-button--plus").css({'display': 'none'});
           jQuery('#myFrame').contents().find(".CartProduct-quantityPriceMobile").css({'display': 'none'});


           jQuery('#myFrame').contents().find(".CartProduct-nameAndDesc").last().css({'margin-top': '-25px'});
           jQuery('#myFrame').contents().find(".CartProduct-product").last().css({'box-shadow': 'none', '-webkit-box-shadow': 'none', 'padding': '0px'});
           jQuery('#myFrame').contents().find(".CartProduct-productVisual").last().css({'width': '7rem', 'height': '7rem'});
       });
     }
   }, 100)

   setTimeout(function(){
     if(jQuery('#myFrame').contents().find(".CartProduct-product:eq(0)").length > 0){
      jQuery('#myFrame').contents().find(".CartProduct-product:eq(0)").hide();
     }
   }, 100)


  setInterval(function() {
    jQuery('.buttonPanierPopin').click(function() {
      window.location="https://www.picwictoys.com/panier"
    })
    jQuery('.buttonAchats').click(function() {
      window.location="https://www.picwictoys.com/panier"
    })
  }, 200);


   setInterval(function(){
     if (stopintervalab === true){
       jQuery('.CallToAction-flexContainer .Button--withIcon').click(function(event) {
         jQuery('.Snackbar-wrap').remove();
         jQuery('.HeaderContent').hide();
         console.log('ok abtest');
         event.stopPropagation();
         jQuery('.modal').show();
         jQuery('.Head').css({'background-color': 'rgba(53, 192, 236, 0.7)'});
         jQuery('#toky_container').hide();
       });
       jQuery('.close').click(function() {
         jQuery('.modal').css({'display': 'none'});
         jQuery('.HeaderContent').show();
         jQuery('.Head').css({'background-color': 'white'});
         jQuery('#toky_container').show();
       });
     }
   }, 100);

 }




















 // TEST VERSION

 if (!window.abt590820) {
   window.abt590820 = true;

   var stopintervalab = true;
   var script = document.createElement('script');
   script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
   script.type = 'text/javascript';
   document.getElementsByTagName('head')[0].appendChild(script);


   setTimeout(function(){
     jQuery('body').prepend('<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><div class="containerSuccess"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><p class="messageSuccess">Votre produit a bien été ajouté!</p></div><br><div class="selectedProduct"></div><div class="buttonPopin"><button class="Button Button--primary buttonPanierPopin" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Voir mon panier</p></button><button class="Button buttonAchats" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Continuer mes achats</p></button></div><div class="footerPopin"><div class="footerPopinDelivery"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block; margin-right: 20px"><p style="display: flex; font-size: 12px; text-align: left;">LIVRAISON OFFERTE</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">EN MAGASIN</p></div></div><div class="footerPopinPayment"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block;"><p style="display: flex; font-size: 12px; text-align: left;">PAIEMENT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">100% SÉCURISÉ</p></div></div></div></div></div>');
     jQuery('.modal').css({'position': 'fixed', 'z-index': '1', 'left': '0', 'top': '0', 'overflow': 'auto', 'width': '100%', 'height': '100%', 'background-color': 'rgba(53, 192, 236, 0.7)'});
     jQuery('.modal-content').css({'background-color': 'white', 'margin': '16% auto', 'padding': '20px', 'width': '100%', 'height': '400px'});
     jQuery('.containerSuccess').css({'display': 'flex', 'align-items': 'center'});
     jQuery('.pictoSuccess').css({'margin-right': '10px'});
     jQuery('.messageSuccess').css({'font-size': '15px', 'color': 'rgba(53, 192, 236)', 'font-weight': '501'});
     jQuery('.otherProduct').css({'font-size': '17px', 'float': 'left'});
     jQuery('.close').css({'float': 'right', 'color': 'rgba(53, 192, 236)', 'font-size': '40px', 'margin-top': '-20px'});
     jQuery('.buttonPanierPopin').css({'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
     jQuery('.buttonPopin').css({'display': 'block', 'margin-top': '8%'});
     jQuery('.buttonAchats').css({'border': '3px solid rgba(53, 192, 236)', 'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
     jQuery('.footerPopin').css({'display': 'flex', 'align-items': 'center', 'margin': '10px auto'});
     jQuery('.footerPopinDelivery').css({'display': 'flex', 'align-items': 'center', 'margin': 'auto'});
     jQuery('.footerPopinPayment').css({'display': 'flex', 'align-items': 'center', 'margin-right': '20px'});
     jQuery('.selectedProduct').css({'height': '100px', 'margin-bottom': '-20px'});
     jQuery('.modal').hide();
   }, 100);

   setTimeout(function(){
     jQuery(document).ready(function(){
       if(jQuery('body').hasClass("ProductGallery-main") {
       // if(jQuery('.ProductGallery-main').length > 0 && jQuery('.ProductGallery-slide').length === 0) {
         var imgPop = jQuery('.ProductGallery-main').html();
         jQuery('.selectedProduct').append('<div class="imgPopin">'+imgPop+'</div>');
         jQuery('.imgPopin').css({'display': 'flex'});
         jQuery('.imgPopin IMG').css({'display': 'flex', 'max-height': '7rem', 'border': '.2rem solid #f2f2f2', 'padding': '1rem', 'max-width': '7rem'});
         var brandPop = jQuery('.ProductSummary-brandName').html();
         var textPop = jQuery('.ProductSummary-title').html();
         jQuery('.imgPopin').append('<div class="brandItem">'+ brandPop +'</div>');
         jQuery('.brandItem').append('<div class="brandTitle">'+ textPop +'</div>');
         jQuery('.brandTitle').css({'display': 'block', 'margin': '.5rem 0', 'font-size': '1.2rem', 'font-weight': '600'});
         jQuery('.brandItem').css({'display': 'block', 'margin': '.5rem 10px', 'font-size': '1.2rem'});
         jQuery('.imgPopin2').hide();
       } else {
         // jQuery('.imgPopin').css({'display': 'none'});
       }
       })
     })
   }, 100)

   setTimeout(function(){
     jQuery(document).ready(function(){
       if(jQuery('body').hasClass("ProductGallery-slide"){
       // if(jQuery('.ProductGallery-slide').length > 0 && jQuery('.ProductGallery-main').length === 0) {
         var imgPop2 = jQuery('.ProductGallery-slide:eq(0)').html();
         jQuery('.selectedProduct').append('<div class="imgPopin2">'+imgPop2+'</div>');
         jQuery('.imgPopin2').css({'display': 'flex'});
         jQuery('.imgPopin2 IMG').css({'display': 'flex', 'max-height': '7rem', 'border': '.2rem solid #f2f2f2', 'padding': '1rem', 'max-width': '7rem'});
         var brandPop2 = jQuery('.ProductSummary-brandName').html();
         var textPop2 = jQuery('.ProductSummary-title').html();
         jQuery('.imgPopin2').append('<div class="brandItem">'+ brandPop2 +'</div>');
         jQuery('.brandItem').append('<div class="brandTitle">'+ textPop2 +'</div>');
         jQuery('.brandTitle').css({'display': 'block', 'margin': '.5rem 0', 'font-size': '1.2rem', 'font-weight': '600'});
         jQuery('.brandItem').css({'display': 'block', 'margin': '.5rem 10px', 'font-size': '1.2rem'});
         jQuery('.imgPopin2.Slider__actions').css({'display': 'none'});
         jQuery('.imgPopin').hide();
       } else {
         // jQuery('.imgPopin2').css({'display': 'none'});
       }
       )
     })
   }, 100)


  setInterval(function() {
    jQuery('.buttonPanierPopin').click(function() {
      window.location="https://www.picwictoys.com/panier"
    })
    jQuery('.buttonAchats').click(function() {
      window.location="https://www.picwictoys.com/panier"
    })
  }, 200);


   setInterval(function(){
     if (stopintervalab === true){
       jQuery('.CallToAction-flexContainer .Button--withIcon').click(function(event) {
         jQuery('.Snackbar-wrap').remove();
         jQuery('.HeaderContent').hide();
         console.log('ok abtest');
         event.stopPropagation();
         jQuery('.modal').show();
         jQuery('.Head').css({'background-color': 'rgba(53, 192, 236, 0.7)'});
         jQuery('#toky_container').hide();
       });
       jQuery('.close').click(function() {
         jQuery('.modal').css({'display': 'none'});
         jQuery('.HeaderContent').show();
         jQuery('.Head').css({'background-color': 'white'});
         jQuery('#toky_container').show();
       });
     }
   }, 100);
 }






 display: block;
 margin: .5rem 0;
 font-size: 1.2rem;
 font-weight: 600;
 color: #000;



 isplay: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 1rem;
    border: ;
    padding: 1rem;
    width: 10rem;
    height: auto;
    background-color: #fff;











    if (!window.abt590820) {
   window.abt590820 = true;

   var stopintervalab = true;
   var script = document.createElement('script');
   script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
   script.type = 'text/javascript';
   document.getElementsByTagName('head')[0].appendChild(script);


   setTimeout(function(){
     jQuery('body').prepend('<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><div class="containerSuccess"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><p class="messageSuccess">Votre produit a bien été ajouté!</p></div><br><div class="selectedProduct"></div><div class="buttonPopin"><button class="Button Button--primary buttonPanierPopin" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Voir mon panier</p></button><button class="Button buttonAchats" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Continuer mes achats</p></button></div><div class="footerPopin"><div class="footerPopinDelivery"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block; margin-right: 20px"><p style="display: flex; font-size: 12px; text-align: left;">RETRAIT GRATUIT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">EN MAGASIN</p></div></div><div class="footerPopinPayment"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block;"><p style="display: flex; font-size: 12px; text-align: left;">PAIEMENT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">100% SÉCURISÉ</p></div></div></div></div></div>');
     jQuery('.modal').css({'position': 'fixed', 'z-index': '1', 'left': '0', 'top': '0', 'overflow': 'auto', 'width': '100%', 'height': '100%', 'background-color': 'rgba(53, 192, 236, 0.7)'});
     jQuery('.modal-content').css({'background-color': 'white', 'margin': '16% auto', 'padding': '20px', 'width': '100%', 'height': '400px'});
     jQuery('.containerSuccess').css({'display': 'flex', 'align-items': 'center'});
     jQuery('.pictoSuccess').css({'margin-right': '10px'});
     jQuery('.messageSuccess').css({'font-size': '15px', 'color': 'rgba(53, 192, 236)', 'font-weight': '501'});
     jQuery('.otherProduct').css({'font-size': '17px', 'float': 'left'});
     jQuery('.close').css({'float': 'right', 'color': 'rgba(53, 192, 236)', 'font-size': '40px', 'margin-top': '-20px'});
     jQuery('.buttonPanierPopin').css({'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
     jQuery('.buttonPopin').css({'display': 'block', 'margin-top': '8%'});
     jQuery('.buttonAchats').css({'border': '3px solid rgba(53, 192, 236)', 'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
     jQuery('.footerPopin').css({'display': 'flex', 'align-items': 'center', 'margin': '10px auto'});
     jQuery('.footerPopinDelivery').css({'display': 'flex', 'align-items': 'center', 'margin': 'auto'});
     jQuery('.footerPopinPayment').css({'display': 'flex', 'align-items': 'center', 'margin-right': '20px'});
     jQuery('.selectedProduct').css({'height': '100px', 'margin-bottom': '-20px'});
     jQuery('.modal').hide();
   }, 100);

   setTimeout(function(){
     jQuery(document).ready(function(){
       if(jQuery('.ProductGallery-main').length > 0 && jQuery('.ProductGallery-slide').length === 0) {
         var imgPop = jQuery('.ProductGallery-main').html();
         jQuery('.selectedProduct').append('<div class="imgPopin">'+imgPop+'</div>');
         jQuery('.imgPopin').css({'display': 'flex'});
         jQuery('.imgPopin IMG').css({'display': 'flex', 'max-height': '7rem', 'border': '.2rem solid #f2f2f2', 'padding': '1rem', 'max-width': '7rem'});
         var brandPop = jQuery('.ProductSummary-brandName').html();
         var textPop = jQuery('.ProductSummary-title').html();
         jQuery('.imgPopin').append('<div class="brandItem">'+ brandPop +'</div>');
         jQuery('.brandItem').append('<div class="brandTitle">'+ textPop +'</div>');
         jQuery('.brandTitle').css({'display': 'block', 'margin': '.5rem 0', 'font-size': '1.2rem', 'font-weight': '600'});
         jQuery('.brandItem').css({'display': 'block', 'margin': '.5rem 10px', 'font-size': '1.2rem'});
       }
       if(jQuery('.ProductGallery-slide').length > 0 && jQuery('.ProductGallery-main').length === 0) {
         var imgPop = jQuery('.ProductGallery-slide:eq(0)').html();
         jQuery('.selectedProduct').append('<div class="imgPopin">'+imgPop+'</div>');
         jQuery('.imgPopin').css({'display': 'flex'});
         jQuery('.imgPopin IMG').css({'display': 'flex', 'max-height': '7rem', 'border': '.2rem solid #f2f2f2', 'padding': '1rem', 'max-width': '7rem'});
         var brandPop = jQuery('.ProductSummary-brandName').html();
         var textPop = jQuery('.ProductSummary-title').html();
         jQuery('.imgPopin').append('<div class="brandItem">'+ brandPop +'</div>');
         jQuery('.brandItem').append('<div class="brandTitle">'+ textPop +'</div>');
         jQuery('.brandTitle').css({'display': 'block', 'margin': '.5rem 0', 'font-size': '1.2rem', 'font-weight': '600'});
         jQuery('.brandItem').css({'display': 'block', 'margin': '.5rem 10px', 'font-size': '1.2rem'});
         jQuery('.imgPopin.Slider__actions').css({'display': 'none'});
       }
     })
   }, 100)


  setInterval(function() {
    jQuery('.buttonPanierPopin').click(function() {
      window.location="https://www.picwictoys.com/panier"
    })
    jQuery('.buttonAchats').click(function() {
      window.location="https://www.picwictoys.com/panier"
    })
  }, 200);


   setInterval(function(){
     if (stopintervalab === true){
       jQuery('.CallToAction-flexContainer .Button--withIcon').click(function(event) {
         jQuery('.Snackbar-wrap').remove();
         jQuery('.HeaderContent').hide();
         console.log('ok abtest');
         event.stopPropagation();
         jQuery('.modal').show();
         jQuery('.Head').css({'background-color': 'rgba(53, 192, 236, 0.7)'});
         jQuery('#toky_container').hide();
       });
       jQuery('.close').click(function() {
         jQuery('.modal').css({'display': 'none'});
         jQuery('.HeaderContent').show();
         jQuery('.Head').css({'background-color': 'white'});
         jQuery('#toky_container').show();
       });
     }
   }, 100);

 }


















 if (!window.abt590820) {
   window.abt590820 = true;

   var stopintervalab = true;
   var script = document.createElement('script');
   script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
   script.type = 'text/javascript';
   document.getElementsByTagName('head')[0].appendChild(script);


   setTimeout(function(){
     jQuery('body').prepend('<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><div class="containerSuccess"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><p class="messageSuccess">Votre produit a bien été ajouté!</p></div><br><div class="selectedProduct"></div><div class="buttonPopin"><button class="Button Button--primary buttonPanierPopin" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Voir mon panier</p></button><button class="Button buttonAchats" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Continuer mes achats</p></button></div><div class="footerPopin"><div class="footerPopinDelivery"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block; margin-right: 20px"><p style="display: flex; font-size: 12px; text-align: left;">RETRAIT GRATUIT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">EN MAGASIN</p></div></div><div class="footerPopinPayment"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block;"><p style="display: flex; font-size: 12px; text-align: left;">PAIEMENT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">100% SÉCURISÉ</p></div></div></div></div></div>');
     jQuery('.modal').css({'position': 'fixed', 'z-index': '1', 'left': '0', 'top': '0', 'overflow': 'auto', 'width': '100%', 'height': '100%', 'background-color': 'rgba(53, 192, 236, 0.7)'});
     jQuery('.modal-content').css({'background-color': 'white', 'margin': '16% auto', 'padding': '20px', 'width': '100%', 'height': '400px'});
     jQuery('.containerSuccess').css({'display': 'flex', 'align-items': 'center'});
     jQuery('.pictoSuccess').css({'margin-right': '10px'});
     jQuery('.messageSuccess').css({'font-size': '15px', 'color': 'rgba(53, 192, 236)', 'font-weight': '501'});
     jQuery('.otherProduct').css({'font-size': '17px', 'float': 'left'});
     jQuery('.close').css({'float': 'right', 'color': 'rgba(53, 192, 236)', 'font-size': '40px', 'margin-top': '-20px'});
     jQuery('.buttonPanierPopin').css({'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
     jQuery('.buttonPopin').css({'display': 'block', 'margin-top': '8%'});
     jQuery('.buttonAchats').css({'border': '3px solid rgba(53, 192, 236)', 'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
     jQuery('.footerPopin').css({'display': 'flex', 'align-items': 'center', 'margin': '10px auto'});
     jQuery('.footerPopinDelivery').css({'display': 'flex', 'align-items': 'center', 'margin': 'auto'});
     jQuery('.footerPopinPayment').css({'display': 'flex', 'align-items': 'center', 'margin-right': '20px'});
     jQuery('.selectedProduct').css({'height': '100px', 'margin-bottom': '-20px'});
     jQuery('.modal').hide();
   }, 100);

   setTimeout(function(){
     jQuery(document).ready(function(){
       if(jQuery('.ProductGallery-main').length > 0 && jQuery('.ProductGallery-slide').length === 0) {
         var imgPop = jQuery('.ProductGallery-main').html();
         jQuery('.selectedProduct').append('<div class="imgPopin">'+imgPop+'</div>');
         jQuery('.imgPopin').css({'display': 'flex'});
         jQuery('.imgPopin IMG').css({'display': 'flex', 'max-height': '7rem', 'border': '.2rem solid #f2f2f2', 'padding': '1rem', 'max-width': '7rem'});
         var brandPop = jQuery('.ProductSummary-brandName').html();
         var textPop = jQuery('.ProductSummary-title').html();
         jQuery('.imgPopin').append('<div class="brandItem">'+ brandPop +'</div>');
         jQuery('.brandItem').append('<div class="brandTitle">'+ textPop +'</div>');
         jQuery('.brandTitle').css({'display': 'block', 'margin': '.5rem 0', 'font-size': '1.2rem', 'font-weight': '600'});
         jQuery('.brandItem').css({'display': 'block', 'margin': '.5rem 10px', 'font-size': '1.2rem'});
       }
       if(jQuery('.ProductGallery-slide').length > 0 && jQuery('.ProductGallery-main').length === 0) {
         var imgPop = jQuery('.ProductGallery-slide:eq(0)').html();
         jQuery('.selectedProduct').append('<div class="imgPopin">'+imgPop+'</div>');
         jQuery('.imgPopin').css({'display': 'flex'});
         jQuery('.imgPopin IMG').css({'display': 'flex', 'max-height': '7rem', 'border': '.2rem solid #f2f2f2', 'padding': '1rem', 'max-width': '7rem'});
         var brandPop = jQuery('.ProductSummary-brandName').html();
         var textPop = jQuery('.ProductSummary-title').html();
         jQuery('.imgPopin').append('<div class="brandItem">'+ brandPop +'</div>');
         jQuery('.brandItem').append('<div class="brandTitle">'+ textPop +'</div>');
         jQuery('.brandTitle').css({'display': 'block', 'margin': '.5rem 0', 'font-size': '1.2rem', 'font-weight': '600'});
         jQuery('.brandItem').css({'display': 'block', 'margin': '.5rem 10px', 'font-size': '1.2rem'});
         jQuery('.imgPopin.Slider__actions').css({'display': 'none'});
       }
     })
   }, 100)


  setInterval(function() {
    jQuery('.buttonPanierPopin').click(function() {
      window.location="https://www.picwictoys.com/panier"
    })
    jQuery('.buttonAchats').click(function() {
      window.location="https://www.picwictoys.com/panier"
    })
  }, 200);


   setInterval(function(){
     if (stopintervalab === true){
       jQuery('.CallToAction-flexContainer .Button--withIcon').click(function(event) {
         jQuery('.Snackbar-wrap').remove();
         jQuery('.HeaderContent').hide();
         console.log('ok abtest');
         event.stopPropagation();
         jQuery('.modal').show();
         jQuery('.Head').css({'background-color': 'rgba(53, 192, 236, 0.7)'});
         jQuery('#toky_container').hide();
       });
       jQuery('.close').click(function() {
         jQuery('.modal').css({'display': 'none'});
         jQuery('.HeaderContent').show();
         jQuery('.Head').css({'background-color': 'white'});
         jQuery('#toky_container').show();
       });
     }
   }, 100);

//FIX IMG POP_IN
setInterval(function(){
if(jQuery('.selectedProduct').length > 0 && jQuery('.imgPopin').length === 0){
  var imgPop = jQuery('.ProductGallery-main').html();
           jQuery('.selectedProduct').append('<div class="imgPopin">'+imgPop+'</div>');
           jQuery('.imgPopin').css({'display': 'flex'});
           jQuery('.imgPopin IMG').css({'display': 'flex', 'max-height': '7rem', 'border': '.2rem solid #f2f2f2', 'padding': '1rem', 'max-width': '7rem'});
           var brandPop = jQuery('.ProductSummary-brandName').html();
           var textPop = jQuery('.ProductSummary-title').html();
           jQuery('.imgPopin').append('<div class="brandItem">'+ brandPop +'</div>');
           jQuery('.brandItem').append('<div class="brandTitle">'+ textPop +'</div>');
           jQuery('.brandTitle').css({'display': 'block', 'margin': '.5rem 0', 'font-size': '1.2rem', 'font-weight': '600'});
           jQuery('.brandItem').css({'display': 'block', 'margin': '.5rem 10px', 'font-size': '1.2rem'});
jQuery(".selectedProduct .Slider__dots").hide();
jQuery(".selectedProduct .Slider__list").css("width", "23%");

}
}, 500);

 }

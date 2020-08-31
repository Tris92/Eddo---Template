if (!window.abt596421) {
   window.abt596421 = true;

   var stopintervalab = true;
   var script = document.createElement('script');
   script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
   script.type = 'text/javascript';
   document.getElementsByTagName('head')[0].appendChild(script);


   setTimeout(function(){
     jQuery('body').prepend('<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><div class="containerSuccess"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><p class="messageSuccess">Votre produit a été ajouté !</p></div><br><div class="buttonPopin"><button class="Button Button--primary buttonPanierPopin" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Voir mon panier</p></button><button class="Button buttonAchats" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Continuer mes achats</p></button></div><div class="footerPopin"><div class="footerPopinDelivery"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block; margin-right: 5px"><p style="display: flex; font-size: 12px; text-align: left;">RETRAIT GRATUIT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">EN MAGASIN</p></div></div><div class="footerPopinPayment"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block;"><p style="display: flex; font-size: 12px; text-align: left;">PAIEMENT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">100% SÉCURISÉ</p></div></div></div></div></div>');

     jQuery(document).on('mousedown', '#myModal .close', function () { ABTastyClickTracking('Clic bouton fermeture pop-in', null, 596421); });
     jQuery(document).on('mousedown', '#myModal .buttonAchats', function () { ABTastyClickTracking('Clic bouton continuer achats', null, 596421); });
     jQuery(document).on('mousedown', '#myModal .buttonPanierPopin', function () { ABTastyClickTracking('Clic bouton voir panier', null, 596421); });

     jQuery('.modal').css({'position': 'fixed', 'z-index': '1', 'left': '0', 'top': '0', 'overflow': 'auto', 'width': '100%', 'height': '100%', 'background-color': 'rgba(53, 192, 236, 0.7)'});
     jQuery('.modal-content').css({'background-color': 'white', 'margin': '40% auto', 'padding': '20px', 'width': 'auto', 'height': '260px', 'border-radius': '10px', 'margin-left': '5px', 'margin-right': '5px'});
     jQuery('.containerSuccess').css({'display': 'flex', 'align-items': 'center', 'justify-content': 'center'});
     jQuery('.pictoSuccess').css({'margin-right': '10px'});
     jQuery('.messageSuccess').css({'font-size': '15px', 'color': 'rgba(53, 192, 236)', 'font-weight': '501'});
     jQuery('.otherProduct').css({'font-size': '17px', 'float': 'left'});
     jQuery('.close').css({'float': 'right', 'color': 'rgba(53, 192, 236)', 'font-size': '40px', 'margin-top': '-20px'});
     jQuery('.buttonPanierPopin').css({'height': '40px', 'padding': '5px', 'margin': '10px auto', 'display': 'flex', 'align-items': 'center'});
     jQuery('.buttonPopin').css({'display': 'block', 'margin-top': '-20px'});
     jQuery('.buttonAchats').css({'border': '3px solid rgba(53, 192, 236)', 'height': '40px', 'padding': '5px', 'margin': '20px auto', 'display': 'flex', 'align-items': 'center'});
     jQuery('.footerPopin').css({'display': 'flex', 'align-items': 'center', 'margin': '10px auto'});
     jQuery('.footerPopinDelivery').css({'display': 'flex', 'align-items': 'center', 'margin': 'auto'});
     jQuery('.footerPopinPayment').css({'display': 'flex', 'align-items': 'center', 'margin-right': '6px'});
     jQuery('.modal').hide();
   }, 100);

   setTimeout(function(){
     jQuery(document).ready(function(){
       if(jQuery('.ProductGallery-main').length > 0 && jQuery('.ProductGallery-slide').length === 0) {
         var imgPop = jQuery('.ProductGallery-main').html();
         var brandPop = jQuery('.ProductSummary-brandName').html();
         var textPop = jQuery('.ProductSummary-title').html();
         jQuery('.brandItem').append('<div class="brandTitle">'+ textPop +'</div>');
         jQuery('.brandTitle').css({'display': 'block', 'margin': '.5rem 0', 'font-size': '1.2rem', 'font-weight': '600'});
         jQuery('.brandItem').css({'display': 'block', 'margin': '.5rem 10px', 'font-size': '1.2rem'});
       }
       if(jQuery('.ProductGallery-slide').length > 0 && jQuery('.ProductGallery-main').length === 0) {
         var imgPop = jQuery('.ProductGallery-slide:eq(0)').html();
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
         jQuery('.modal').css({'display': 'none'});
         jQuery('.HeaderContent').show();
         jQuery('.Head').css({'background-color': 'white'});
         jQuery('#toky_container').show();
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

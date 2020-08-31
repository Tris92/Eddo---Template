

if (!window.abt595717) {
   window.abt595717 = true;
   jQuery(document).ready(function(){
     if(jQuery('.abtasty-modal__content').length > 0) {
       setTimeout(function(){
         if (window.matchMedia('(max-width: 415px)').matches){
           jQuery('.abtasty-modal__content').css({'height': '460px'});
           jQuery('.abtasty-modal__image IMG').css({'height': '200px', 'width': '150px', 'margin-top': '-23px', 'padding': '20px 15px'});
           jQuery('.abtasty-modal__title P SPAN').addClass("titlePopin");
           jQuery('.abtasty-modal__title P .titlePopin').replaceWith('<div><p style="font-size: 19px; color: #4D4D4D; font-family: arial, sans-serif; font-weight: 600;">AUTO SANTÉ Artisans et TNS</p></div>')
           jQuery('.abtasty-modal__title').css({'margin-top': '-20px'});
           jQuery('.abtasty-modal__innertext SPAN').css({'font-size': '15px'});
           jQuery('#replie #ctaConseiller').css({'width': '100%!important'});
         } else {
           jQuery('#replie #ctaConseiller').css({'width': '70%'});
           jQuery('.abtasty-modal__content').css({'height': 'auto'});
           jQuery('.abtasty-modal__image IMG').css({'height': '250px', 'width': '200px'});
           jQuery('.abtasty-modal__title titlePopin').css({'font-size': '24px'});
         }
       }, 100);
     }
   })
 }

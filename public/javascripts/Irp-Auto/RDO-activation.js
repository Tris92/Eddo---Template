// RESPONSIVE VARIATION 1

TEST 1

jQuery(document).ready(function(){
 if (window.matchMedia('(max-width: 415px)').matches){
   setTimeout(function(){
     if(jQuery('.abtasty-modal__content').length > 0) {
       var imgPopin = jQuery('.abtasty-modal__image').html();
       jQuery('.abtasty-modal__image').remove();
       jQuery('.abtasty-modal__image IMG:eq(0)').remove();
       jQuery('.abtasty-modal__text').before('<div class="imgPopin">'+ imgPopin +'</div>');
       jQuery('.abtasty-modal__content').css({'height': '460px', 'margin-left': '4px', 'margin-right': '7px'});
       jQuery('.abtasty-modal__text').css({'width': '100%', 'margin-top': '-40px', 'padding': '0px'});
       jQuery('.titlePopin span').css({'font-size': '17px'});
       jQuery('.titlePopin').css({'margin-top': '40px'});
       jQuery('.textPopin span').css({'font-size': '13px'});
       jQuery('.imgPopin #ClickImgPopin').css({'width': '130px', 'height': '130px', 'margin': '20px auto', 'display': 'flex'});
       jQuery('.abtasty-modal__button #activationCompte').css({'font-size': '13px'});
       jQuery('.abtasty-modal__button').css({'margin-top': '20px'});
     } else {
       jQuery('.titlePopin span').css({'font-size': '24px'});
       jQuery('.textPopin span').css({'font-size': '16px'});
       jQuery('.abtasty-modal__button #activationCompte').css({'font-size': '16px'});
     }
   }, 100);
 }
})

TEST 2

jQuery(document).ready(function(){
 if (window.matchMedia('(max-width: 415px)').matches){
   setTimeout(function(){
     if(jQuery('.abtasty-animation-slideIn') = true) {
       var imgPopin = jQuery('.abtasty-modal__image').html();
       jQuery('.abtasty-modal__image').remove();
       jQuery('.abtasty-modal__image IMG:eq(0)').remove();
       jQuery('.abtasty-modal__text').before('<div class="imgPopin">'+ imgPopin +'</div>');
       jQuery('.abtasty-modal__content').css({'height': '460px', 'margin-left': '4px', 'margin-right': '7px'});
       jQuery('.abtasty-modal__text').css({'width': '100%', 'margin-top': '-40px', 'padding': '0px'});
       jQuery('.titlePopin span').css({'font-size': '17px'});
       jQuery('.titlePopin').css({'margin-top': '40px'});
       jQuery('.textPopin span').css({'font-size': '13px'});
       jQuery('.imgPopin #ClickImgPopin').css({'width': '130px', 'height': '130px', 'margin': '20px auto', 'display': 'flex'});
       jQuery('.abtasty-modal__button #activationCompte').css({'font-size': '13px'});
       jQuery('.abtasty-modal__button').css({'margin-top': '20px'});
     } else {
       jQuery('.titlePopin span').css({'font-size': '24px'});
       jQuery('.textPopin span').css({'font-size': '16px'});
       jQuery('.abtasty-modal__button #activationCompte').css({'font-size': '16px'});
     }
   }, 100);
 }
})


 var effectPopin = jQuery(jQuery('.abtasty-animation-slideIn').length > 0);



abtasty-animation-slideIn


// RESPONSIVE VARIATION 2

if (!window.abt591018) {
   window.abt591018 = true;

   jQuery(document).ready(function(){
     if (window.matchMedia('(max-width: 415px)').matches){
       setTimeout(function(){
         if(jQuery('.abtasty-modal__content').length > 0) {
           var imgPopin = jQuery('.abtasty-modal__image').html();
           jQuery('.abtasty-modal__image').remove();
           jQuery('.abtasty-modal__image IMG:eq(0)').remove();
           jQuery('.abtasty-modal__text').before('<div class="imgPopin">'+ imgPopin +'</div>');
           jQuery('.abtasty-modal__content').css({'height': '460px', 'margin-left': '4px', 'margin-right': '7px'});
           jQuery('.abtasty-modal__text').css({'width': '100%', 'padding': '0px'});
           jQuery('.imgPopin #ClickImgPopin').css({'width': '145px', 'height': '130px', 'margin': '20px auto', 'display': 'flex'});
           jQuery('.abtasty-modal__button').css({'margin-top': '-20px'});
           jQuery('.abtasty-modal__text h4 span').css({'font-size': '15px'});
           jQuery('.abtasty-modal__text .abtasty-modal__innertext p').addClass("innerTextPopin");
           jQuery('.abtasty-modal__text .abtasty-modal__innertext .innerTextPopin:eq(1) span').addClass("textInner");
           jQuery('.innerTextPopin .textInner').css({'font-size': '13px'});
           jQuery('.abtasty-modal__button #activationCompte').css({'font-size': '13px'});
         } else {
           jQuery('.abtasty-modal__text h4 span').css({'font-size': '24px'});
           jQuery('.abtasty-modal__text .abtasty-modal__innertext p span span').css({'font-size': '16px'});
           jQuery('.abtasty-modal__button #activationCompte').css({'font-size': '16px'});
         }
       }, 100);
     }
   })

 }

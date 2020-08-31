// ********************* VARIATION 1 ************************

// RESPONSIVE POUR VARIATION 1

  jQuery(document).ready(function() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setTimeout(function() {
        if (jQuery('.abtasty-banner-wrapper').length > 0) {

          jQuery('.textShorter h1:eq(0)').hide();
          jQuery('.textShorter h1:eq(1)').hide();
          jQuery('.abtasty-banner-wrapper P:nth-child(2) A').addClass('imgVar1');
          jQuery('.textShorter').before('<div class="headerPopin"><div class="imgBannerPopin"></div><div class="titlePopin" style="display: block; width: 240px;"><p class="titleA">PRÊT IMMOBILIER</p><br><p class="titleB">Assurance IRP AUTO Emprunteur</p></div><div>');
          jQuery('.headerPopin').css({
            'display': 'flex',
            'align-items': 'center',
            'margin-top': '-43px'
          });
          var imgBanner = jQuery('.imgVar1').html();
          jQuery('.imgBannerPopin').append('<div>' + imgBanner + '</div>');
          jQuery('.img-Popin:eq(0)').hide();
          jQuery('.img-Popin:eq(1)').css({
            'width': '70px',
            'height': '70px',
            'margin-left': '10px'
          });
          jQuery('.abtasty-banner-txt-content DIV:eq(0)').addClass('totalBanner');
          jQuery('.totalBanner').css({
            'display': 'block'
          })
          jQuery('.textShorter .titleBanner').css({
            'font-size': '16px'
          });
          jQuery('.textShorter DIV').addClass(
            'abSubText'
          );
          jQuery('.textShorter P:eq(2)').addClass(
            'lastSubText'
          );
          jQuery('.abSubText').css({'margin-top': '-10px'});
          var titleBannerVar = jQuery('.titleBanner').text();
          jQuery(titleBannerVar).css({
            'font-size': '16px!important'
          });
          jQuery('.titlePopin').css({
            'font-size': '16px',
            'color': '##3498db',
            'font-family': 'arial, Verdana, sans-serif',
            'font-weight': '600'
          });

          jQuery('.titleB').css({
            'margin-top': '-12px',
            'font-size': '14px',
            'line-height': '22px'
          });

          jQuery('.abtasty-banner-txt-content DIV:nth-child(1) .textShorter').css({
            'max-width': '280px',
            'margin': '5px auto',
            'max-height': '110px'
          });

          jQuery('.abtasty-banner-txt-content').css({
            'width': '300px'
          });
          jQuery('.textBannerInfo').css({
            'font-size': '12px'
          });

          var subText = jQuery('.subText-Banner').text();
          jQuery('.lastSubText').prepend('<div class="subTextWrapper">' + subText + '</div>');
          jQuery('.subTextWrapper').css({'font-size': '12px', 'margin': '-5px auto 0px auto', 'width': '290px', 'line-height': '15px'});
          jQuery('.subText-Banner').hide();
          jQuery('.abtasty-banner-wrapper').css({'min-height': '240px', 'padding': '0px'});
          jQuery('.abtasty-banner-txt-content').css({'margin-top': '-20px'});
          var btnBanner = jQuery('.lastSubText SPAN').html();
          jQuery('.abtasty-banner-wrap-button').after('<div>'+ btnBanner +'</div>');
          jQuery('.abtasty-banner-wrap-button').css({'margin-top':'-23px', 'margin-bottom': '5px'});
          jQuery('.abtasty-banner-wrap-button A').css({'padding': '5px 40px!mportant'});

          jQuery('.lastSubText SPAN').hide();
          jQuery('.abtasty-banner-close').addClass("newClassClose");
          jQuery('.newClassClose').css({'margin': '-210px 100px 0px 0px!important'});
          jQuery('.lastChildBanner').css({'font-size': '11px'});

        }
      }, 100);
    }
  })






// Variation 3

if (!window.abt590230) {
  window.abt590230 = true;

  jQuery(document).ready(function(){
    if(jQuery('.abtasty-modal__content').length > 0) {
      jQuery('.abtasty-modal__innertext P:eq(3)').addClass('textChange');
      jQuery('.abtasty-modal__innertext .textChange').css({})
      setTimeout(function(){
        if (window.matchMedia('(max-width: 415px)').matches){
          var imgPopin = jQuery('.abtasty-modal__image').html();
          jQuery('.abtasty-modal__image').remove();
          jQuery('.abtasty-modal__image IMG:eq(0)').remove();
          jQuery('.abtasty-modal__text').before('<div class="imgPopin">'+ imgPopin +'</div>');
          jQuery('.abtasty-modal__content').css({'height': '480px', 'margin-left': '4px', 'margin-right': '7px'});
          jQuery('.abtasty-modal__text').css({'width': '100%', 'margin-top': '-40px', 'padding': '0px'});
          jQuery('.titlePopin span').css({'font-size': '17px'});
          jQuery('.titlePopin').css({'margin-top': '40px'});
          jQuery('.textPopin span').css({'font-size': '13px'});
          jQuery('.imgPopin IMG').css({'width': '130px', 'height': '130px', 'margin': '10px auto 49px auto', 'display': 'flex'});
          jQuery('.abtasty-modal__button #activationCompte').css({'font-size': '13px'});
          jQuery('.abtasty-modal__button').css({'margin-top': '0px'});
          var buttonModal = jQuery('.abtasty-modal__button').html();
          jQuery('.lastTextPopin').css({'font-size': '12px', 'margin': '15px', 'text-align': 'center'});
        }
      }, 3100);
    }
  })

}




// AUTOPLAY VARIATION 2

setTimeout(function(){
  jQuery(".popinPromo").contents().find(".player").play();
}, 200);


jQuery("#abtasty-widget-video-1592925919405").contents().find(".player").play();


jQuery("iframe.player").attr("src", jQuery("iframe.player").attr("src").replace("autoplay=0", "autoplay=1"));


jQuery("#myFrame").contents().find(".Head").css({'display': 'none'});


xxx






var script = document.createElement('script');
script.src = 'https://player.vimeo.com/api/player.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
setTimeout(function(){

  if(jQuery('#popinPromoVideo').lenght > 0){
    var autoPlayPopin = jQuery(".abtasty-modal__content iframe").contents().find("#abtasty-widget-video-1592925919405");
    jQuery(autoPlayPopin).addClass("autoPlay");
    var options = {
        id: 431849307,
        loop: true,
        autoplay: true
    };

    var player = new Vimeo.Player('autoPlay', options);
    player.setVolume(0);

    player.on('play', function() {
        console.log('played the video!');
    });
  }
}, 3100)



// VARIATION 2


// REMPLACER LA VIDEO EN JQUERY ET AFFICHER L'autoPlay
// 
// setTimeout(function(){
//   if(){
//
//     var autoPlayPopin = jQuery(".abtasty-modal__content iframe").contents().find("#abtasty-widget-video-1592925919405");
//     jQuery(autoPlayPopin).addClass("autoPlay");
//     var options = {
//         id: 431849307,
//         loop: true,
//         autoplay: true
//     };
//
//     var player = new Vimeo.Player('autoPlay', options);
//     player.setVolume(0);
//
//     player.on('play', function() {
//         console.log('played the video!');
//     });
//   }
// }, 3100)



XX

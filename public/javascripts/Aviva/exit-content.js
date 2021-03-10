// jQuery('body').append("<script>(function(a){function d(e){0<e.clientY||(b&&clearTimeout(b),0>=a.exitIntent.settings.sensitivity?a.event.trigger("exitintent"):b=setTimeout(function(){b=null;a.event.trigger('exitintent')},a.exitIntent.settings.sensitivity))}function c(){b&&(clearTimeout(b),b=null)}var b;a.exitIntent=function(b,f){a.exitIntent.settings=a.extend(a.exitIntent.settings,f);if('enable'==b)a(window).mouseleave(d),a(window).mouseenter(c);else if('disable'==b)c(),a(window).unbind('mouseleave',d),a(window).unbind('mouseenter',c);else throw 'Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'';};a.exitIntent.settings={sensitivity:300}})(jQuery)</script>");
jQuery(function (exitPage) {
    'use strict';

    var timer;

    function trackLeave(ev) {
        if (ev.clientY > 0) {
            return;
        }

        if (timer) {
            clearTimeout(timer);
        }

        if (exitPage.exitIntent.settings.sensitivity <= 0) {
            exitPage.event.trigger('exitintent');
            return;
        }

        timer = setTimeout(
            function() {
                timer = null;
                exitPage.event.trigger('exitintent');
            }, exitPage.exitIntent.settings.sensitivity);
    }

    function trackEnter() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    exitPage.exitIntent = function(enable, options) {
        exitPage.exitIntent.settings = exitPage.extend(exitPage.exitIntent.settings, options);

        if (enable == 'enable') {
            jQuery(window).mouseleave(trackLeave);
            jQuery(window).mouseenter(trackEnter);
        } else if (enable == 'disable') {
            trackEnter(); // Turn off any outstanding timer
            jQuery(window).unbind('mouseleave', trackLeave);
            jQuery(window).unbind('mouseenter', trackEnter);
        } else {
            throw "Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";
        }
    }

    exitPage.exitIntent.settings = {
        'sensitivity': 300
    };
});


jQuery('body').prepend('<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><div class="containerSuccess"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><p class="messageSuccess">Votre produit a été ajouté !</p></div><br><div class="buttonPopin"><button class="Button Button--primary buttonPanierPopin" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Voir mon panier</p></button><button class="Button buttonAchats" href="https://www.picwictoys.com/panier"><p style="text-align: center;font-size: 12px; margin: auto;">Continuer mes achats</p></button></div><div class="footerPopin"><div class="footerPopinDelivery"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block; margin-right: 5px"><p style="display: flex; font-size: 12px; text-align: left;">RETRAIT GRATUIT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">EN MAGASIN</p></div></div><div class="footerPopinPayment"><svg version="1.1" viewBox="0 0 17 17" class="svg-icon svg-fill pictoSuccess"><g fill="none" fill-rule="evenodd"><rect pid="0" fill="#00B0E7" width="17" height="17" rx="8.5"></rect><path pid="1" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M4 8l3.25 3.25L12.5 6"></path></g></svg><div style="display: block;"><p style="display: flex; font-size: 12px; text-align: left;">PAIEMENT</p><br><p style="display: flex; font-size: 12px; text-align: left; margin-top: -24px;">100% SÉCURISÉ</p></div></div></div></div></div>');
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

$(function() {
  exitPage.exitIntent('enable');
  $(document).bind('exitintent', function() {
    $("#myModal").css({'dispay': 'block'});
  });
  $("#warning a").bind('click', function() {
    $("#myModal").css({'display': 'none'});
    return false;
  });
});

.firstBlur.modalBlur > *:not(.modal) {
  -webkit-filter: blur(8px);
}










jQuery('body').prepend('<div id="myModal" class="modal fade"><div class="modal-content"><span class="close">&times;</span><div class="containerPop"></div></div></div>');
jQuery('.modal-content').css({
  'background-color': 'white',
  'padding': '20px 0px 20px 0px',
  'width': 'auto',
  'height': '360px',
  'border-radius': '10px',
  'margin-left': '5px',
  'margin-right': '5px'
});
jQuery('.containerPopin').css({'display': 'flex', 'align-items': 'center', 'justify-content': 'center'});


// Exit intent
function addEvent(obj, evt, fn) {
   if (obj.addEventListener) {
       obj.addEventListener(evt, fn, false);
   }
   else if (obj.attachEvent) {
       obj.attachEvent("on" + evt, fn);
   }
}

// Exit intent trigger
addEvent(document, 'mouseout', function(evt) {
   if (evt.toElement == null && evt.relatedTarget == null ) {
       $('#myModal').show();
   };
});

// Closing the Popup Box
$('a.close').click(function(){
  $('#myModal').hide();
});

jQuery('#myModal').css({
  'display': 'none',
  'position': 'fixed',
  'z-index': '9999',
  'width': '100%',
  'height': '100%',
  'top': '0',
  'left': '0',
  'color':'#333333',
  'background-color': 'rgb(10, 7, 7, 0.2)',
  'padding-left': '300px',
  'padding-right': '300px',
  'padding-top': '200px'
});

jQuery('#myModal *:not(.modal-content)').css({
  '-webkit-filter': 'blur(8px)'
});

jQuery('#myModal:after').css({
  "content": "''",
  "display": "table",
  "clear": "both"
});

jQuery('.close').css({
  'float':'right',
  'display':'block',
  'text-decoration':'none',
  'font-family':'Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif',
  'font-size':'22px',
  'color':'#858585'
});





xx

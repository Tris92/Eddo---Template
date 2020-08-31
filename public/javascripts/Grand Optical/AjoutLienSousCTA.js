// AJOUT LIEN CTA
9897226


// VARIATION 1
  if (!window.abt559954) {
    window.abt559954 = true;

    setTimeout(function() {
      if(window.location.href.match('lunettes-de-vue')) {
        jQuery('.product-command--ctas-price').css({'padding-bottom': '5px'});
        var lienA = jQuery('.product-command-ctas--add').html();
        jQuery('.product-container--action').after('<div id="lienCtaA"><div class="popinCtaA">'+ lienA +'</div></div>');


        jQuery('#lienCtaA .popinCtaA').find('span').empty();
        jQuery('#lienCtaA .popinCtaA').find('.c_icon--home').remove();
        jQuery('#lienCtaA .popinCtaA').find('span').addClass('toDeleteA');
        jQuery('#lienCtaA .popinCtaA .toDeleteA').remove();

        var toDeleteTextA = jQuery('#lienCtaA .popinCtaA').find('span');
        jQuery(toDeleteTextA).contents().filter(function() {
          return this.nodeType === Node.TEXT_NODE;
        }).remove();

        jQuery('#lienCtaA .popinCtaA').find('a').append('<p style="text-decoration: underline; cursor: pointer; text-transform: none; margin-bottom: 10px; font-size: .9rem;">Voir les disponibilités en magasin</p>');
        jQuery('#lienCtaA .popinCtaA').find('a').css({'background-color': '#f7f7f7', 'border': 'none'});

        jQuery( "#lienCtaA .popinCtaA a P" ).hover(
          function() {
            jQuery( this ).css({'text-decoration': 'none', 'color': 'black'});
          }, function() {
            jQuery( this ).css({'text-decoration': 'underline'});
          }
        );

        if (window.matchMedia('(max-width: 450px)').matches){
          jQuery('#lienCtaA').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block','background': '#f7f7f7'});
        } else {
          jQuery('#lienCtaA').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block', 'background': '#f7f7f7', 'font-family': 'poppins-regular,arial,sans-serif'});
        }

        //rectification Mobile
        if (window.matchMedia('(max-width: 450px)').matches){
          jQuery(".product-container--action img[src*=abtasty]").wrap('<div class="assuranceA"></div>');
          jQuery('assuranceA').css({'margin-top': '200px'});
          jQuery('#lienCtaA').css({'margin-top': '-131px', 'margin-bottom': '105px'});
        }
      }

      if(window.location.href.match('lunettes-de-soleil')) {
        jQuery('.product-command--ctas-price').css({'padding-bottom': '5px'});
        var lienB = jQuery('.product-command-ctas--add:eq(1)').html();
        jQuery('.product-container--action').after('<div id="lienCtaB"><div class="popinCtaB">'+ lienB +'</div></div>');


        jQuery('#lienCtaB .popinCtaB').find('span').empty();
        jQuery('#lienCtaB .popinCtaB').find('.c_icon--home').remove();
        jQuery('#lienCtaB .popinCtaB').find('span').addClass('toDeleteB');
        jQuery('#lienCtaB .popinCtaB .toDeleteB').remove();

        var toDeleteTextB = jQuery('#lienCtaB .popinCtaB').find('span');
        jQuery(toDeleteTextB).contents().filter(function() {
          return this.nodeType === Node.TEXT_NODE;
        }).remove();

        jQuery('#lienCtaB .popinCtaB').find('a').append('<p style="text-decoration: underline; cursor: pointer; text-transform: none; margin-bottom: 10px; font-size: .9rem;">Voir les disponibilités en magasin</p>');
        jQuery('#lienCtaB .popinCtaB').find('a').css({'background-color': '#f7f7f7', 'border': 'none'});

        jQuery( "#lienCtaB .popinCtaB a P" ).hover(
          function() {
            jQuery( this ).css({'text-decoration': 'none', 'color': 'black'});
          }, function() {
            jQuery( this ).css({'text-decoration': 'underline'});
          }
        );

        if (window.matchMedia('(max-width: 450px)').matches){
          jQuery('#lienCtaB').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block','background': '#f7f7f7'});
        } else {
          jQuery('#lienCtaB').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block', 'background': '#f7f7f7', 'font-family': 'poppins-regular,arial,sans-serif'});
        }

        //rectification Mobile
        if (window.matchMedia('(max-width: 450px)').matches){
          jQuery(".product-container--action img[src*=abtasty]").wrap('<div class="assuranceA"></div>');
          jQuery('assuranceA').css({'margin-top': '200px'});
          jQuery('#lienCtaA').css({'margin-top': '-131px', 'margin-bottom': '105px'});
        }
      }

      if(window.location.href.match('masque-de-ski')) {
        jQuery('.product-command--ctas-price').css({'padding-bottom': '5px'});
        var lienC = jQuery('.product-command-ctas--add:eq(1)').html();
        jQuery('.product-container--action').after('<div id="lienCtaC"><div class="popinCtaC">'+ lienC +'</div></div>');


        jQuery('#lienCtaC .popinCtaC').find('span').empty();
        jQuery('#lienCtaC .popinCtaC').find('.c_icon--home').remove();
        jQuery('#lienCtaC .popinCtaC').find('span').addClass('toDeleteC');
        jQuery('#lienCtaC .popinCtaC .toDeleteC').remove();

        var toDeleteTextC = jQuery('#lienCtaC .popinCtaC').find('span');
        jQuery(toDeleteTextC).contents().filter(function() {
          return this.nodeType === Node.TEXT_NODE;
        }).remove();

        jQuery('#lienCtaC .popinCtaC').find('a').append('<p style="text-decoration: underline; cursor: pointer; text-transform: none; margin-bottom: 10px; font-size: .9rem;">Voir les disponibilités en magasin</p>');
        jQuery('#lienCtaC .popinCtaC').find('a').css({'background-color': '#f7f7f7', 'border': 'none'});

        jQuery( "#lienCtaC .popinCtaC a P" ).hover(
          function() {
            jQuery( this ).css({'text-decoration': 'none', 'color': 'black'});
          }, function() {
            jQuery( this ).css({'text-decoration': 'underline'});
          }
        );

        if (window.matchMedia('(max-width: 450px)').matches){
          jQuery('#lienCtaC').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block','background': '#f7f7f7'});
        } else {
          jQuery('#lienCtaC').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block', 'background': '#f7f7f7', 'font-family': 'poppins-regular,arial,sans-serif'});
        }

        //rectification Mobile
        if (window.matchMedia('(max-width: 450px)').matches){
          jQuery(".product-container--action img[src*=abtasty]").wrap('<div class="assuranceC"></div>');
          jQuery('assuranceC').css({'margin-top': '200px'});
          jQuery('#lienCtaC').css({'margin-top': '-131px', 'margin-bottom': '105px'});
        }
      }

      if(window.location.href.match('lunettes-de-ski')) {
        jQuery('.product-command--ctas-price').css({'padding-bottom': '5px'});
        var lienD = jQuery('.product-command-ctas--add:eq(1)').html();
        jQuery('.product-container--action').after('<div id="lienCtaD"><div class="popinCtaD">'+ lienD +'</div></div>');


        jQuery('#lienCtaD .popinCtaD').find('span').empty();
        jQuery('#lienCtaD .popinCtaD').find('.c_icon--home').remove();
        jQuery('#lienCtaD .popinCtaD').find('span').addClass('toDeleteD');
        jQuery('#lienCtaD .popinCtaD .toDeleteD').remove();

        var toDeleteTextD = jQuery('#lienCtaD .popinCtaD').find('span');
        jQuery(toDeleteTextD).contents().filter(function() {
          return this.nodeType === Node.TEXT_NODE;
        }).remove();

        jQuery('#lienCtaD .popinCtaD').find('a').append('<p style="text-decoration: underline; cursor: pointer; text-transform: none; margin-bottom: 10px; font-size: .9rem;">Voir les disponibilités en magasin</p>');
        jQuery('#lienCtaD .popinCtaD').find('a').css({'background-color': '#f7f7f7', 'border': 'none'});

        jQuery( "#lienCtaD .popinCtaD a P" ).hover(
          function() {
            jQuery( this ).css({'text-decoration': 'none', 'color': 'black'});
          }, function() {
            jQuery( this ).css({'text-decoration': 'underline'});
          }
        );

        if (window.matchMedia('(max-width: 450px)').matches){
          jQuery('#lienCtaD').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block','background': '#f7f7f7'});
        } else {
          jQuery('#lienCtaD').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block', 'background': '#f7f7f7', 'font-family': 'poppins-regular,arial,sans-serif'});
        }

        //rectification Mobile
        if (window.matchMedia('(max-width: 450px)').matches){
          jQuery(".product-container--action img[src*=abtasty]").wrap('<div class="assuranceD"></div>');
          jQuery('assuranceD').css({'margin-top': '200px'});
          jQuery('#lienCtaD').css({'margin-top': '-131px', 'margin-bottom': '105px'});
        }
      }
    }, 100)

  setTimeout(function() {
      if (window.location.href.match("9897226") != 1) {
        jQuery('.popinCtaA A.socloz:eq(2)').css({'display': 'none'});
        jQuery('.popinCtaA A.socloz:eq(1)').css({'display': 'none'});
        jQuery('.popinCtaA A.socloz:eq(0)').css({'display': 'block'});
        jQuery('.popinCtaA A.socloz:eq(0)').removeAttr("data-socloz-disable_product_step");

        jQuery('.popinCtaB A.socloz:eq(2)').css({'display': 'none'});
        jQuery('.popinCtaB A.socloz:eq(1)').css({'display': 'none'});
        jQuery('.popinCtaB A.socloz:eq(0)').css({'display': 'block'});
        jQuery('.popinCtaB A.socloz:eq(0)').removeAttr("data-socloz-disable_product_step");

        jQuery('.popinCtaC A.socloz:eq(2)').css({'display': 'none'});
        jQuery('.popinCtaC A.socloz:eq(1)').css({'display': 'none'});
        jQuery('.popinCtaC A.socloz:eq(0)').css({'display': 'block'});
        jQuery('.popinCtaC A.socloz:eq(0)').removeAttr("data-socloz-disable_product_step");

        jQuery('.popinCtaD A.socloz:eq(2)').css({'display': 'none'});
        jQuery('.popinCtaD A.socloz:eq(1)').css({'display': 'none'});
        jQuery('.popinCtaD A.socloz:eq(0)').css({'display': 'block'});
        jQuery('.popinCtaD A.socloz:eq(0)').removeAttr("data-socloz-disable_product_step");
      }
        jQuery(".mention-ab:eq(1)").remove();
    }, 100);

    //FIX Ajout phrase CTA
    jQuery(".socloz.btn.btn-secondary.btn-fullwidth span:contains(Réserver gratuitement en magasin), .socloz.btn.btn-secondary.btn-fullwidth:contains(Réserver gratuitement en magasin) div:eq(0)").wrapAll("<div class='wrapperabt'></div>");
    jQuery(".wrapperabt:eq(0)").after("<div class='mention-ab'>Service gratuit, simple et rapide</div>");
    jQuery(".socloz.btn.btn-secondary.btn-fullwidth:contains(Réserver gratuitement en magasin)").css({"display": "block"});
    jQuery(".socloz.btn.btn-secondary.btn-fullwidth:contains(Réserver gratuitement en magasin) span:contains(Réserver gratuitement en magasin):eq(0)").text("Réserver en magasin");
    jQuery(".mention-ab").css({"font-size":"11px", "text-transform":"none"});
    jQuery(".wrapperabt").attr("style", "display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center;");
    jQuery(".wrapperabt .c_icon.c_icon--home").css({"margin-right": "10px"});
    jQuery(".wrapperabt span:contains(Réserver en magasin)").css("padding-top", "3px");

  }

  /* <---- */



  // AJOUT LIEN CTA STEP 2 SOCLOZ
      if (!window.abt559954) {
        window.abt559954 = true;

        setTimeout(function() {
              if(window.location.href.match('lunettes-de-vue')) {
                jQuery('.product-command--ctas-price').css({'padding-bottom': '5px'});
                var lienE = jQuery('.product-command-ctas--add').html();
                jQuery('.product-container--action').after('<div id="lienCtaE"><div class="popinCtaE">'+ lienE +'</div></div>');


                jQuery('#lienCtaE .popinCtaE').find('span').empty();
                jQuery('#lienCtaE .popinCtaE').find('.c_icon--home').remove();
                jQuery('#lienCtaE .popinCtaE').find('span').addClass('toDeleteE');
                jQuery('#lienCtaE .popinCtaE .toDeleteE').remove();

                var toDeleteTextE = jQuery('#lienCtaE .popinCtaE').find('span');
                jQuery(toDeleteTextE).contents().filter(function() {
                  return this.nodeType === Node.TEXT_NODE;
                }).remove();

                jQuery('#lienCtaE .popinCtaE').find('a').append('<p style="text-decoration: underline; cursor: pointer; text-transform: none; margin-bottom: 10px; font-size: .9rem;">Voir les disponibilités en magasin</p>');
                jQuery('#lienCtaE .popinCtaE').find('a').css({'background-color': '#f7f7f7', 'border': 'none'});

                jQuery( "#lienCtaE .popinCtaE a P" ).hover(
                  function() {
                    jQuery( this ).css({'text-decoration': 'none', 'color': 'black'});
                  }, function() {
                    jQuery( this ).css({'text-decoration': 'underline'});
                  }
                );

                jQuery("#lienCtaE .popinCtaE a").attr("data-socloz-disable_product_step", "1");

                if (window.matchMedia('(max-width: 450px)').matches){
                  jQuery('#lienCtaE').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block','background': '#f7f7f7'});
                } else {
                  jQuery('#lienCtaE').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block', 'background': '#f7f7f7', 'font-family': 'poppins-regular,arial,sans-serif'});
                }

                //rectification Mobile
                if (window.matchMedia('(max-width: 450px)').matches){
                  jQuery(".product-container--action img[src*=abtasty]").wrap('<div class="assuranceE"></div>');
                  jQuery('assuranceE').css({'margin-top': '200px'});
                  jQuery('#lienCtaE').css({'margin-top': '-131px', 'margin-bottom': '105px'});
                }
              }

              if(window.location.href.match('lunettes-de-soleil')) {
                jQuery('.product-command--ctas-price').css({'padding-bottom': '5px'});
                var lienF = jQuery('.product-command-ctas--add:eq(1)').html();
                jQuery('.product-container--action').after('<div id="lienCtaF"><div class="popinCtaF">'+ lienF +'</div></div>');


                jQuery('#lienCtaF .popinCtaF').find('span').empty();
                jQuery('#lienCtaF .popinCtaF').find('.c_icon--home').remove();
                jQuery('#lienCtaF .popinCtaF').find('span').addClass('toDeleteF');
                jQuery('#lienCtaF .popinCtaF .toDeleteF').remove();

                var toDeleteTextF = jQuery('#lienCtaF .popinCtaF').find('span');
                jQuery(toDeleteTextF).contents().filter(function() {
                  return this.nodeType === Node.TEXT_NODE;
                }).remove();

                jQuery('#lienCtaF .popinCtaF').find('a').append('<p style="text-decoration: underline; cursor: pointer; text-transform: none; margin-bottom: 10px; font-size: .9rem;">Voir les disponibilités en magasin</p>');
                jQuery('#lienCtaF .popinCtaF').find('a').css({'background-color': '#f7f7f7', 'border': 'none'});

                jQuery( "#lienCtaF .popinCtaF a P" ).hover(
                  function() {
                    jQuery( this ).css({'text-decoration': 'none', 'color': 'black'});
                  }, function() {
                    jQuery( this ).css({'text-decoration': 'underline'});
                  }
                );

                jQuery("#lienCtaF .popinCtaF a").attr("data-socloz-disable_product_step", "1");

                if (window.matchMedia('(max-width: 450px)').matches){
                  jQuery('#lienCtaF').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block','background': '#f7f7f7'});
                } else {
                  jQuery('#lienCtaF').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block', 'background': '#f7f7f7', 'font-family': 'poppins-regular,arial,sans-serif'});
                }

                //rectification Mobile
                if (window.matchMedia('(max-width: 450px)').matches){
                  jQuery(".product-container--action img[src*=abtasty]").wrap('<div class="assuranceF"></div>');
                  jQuery('assuranceF').css({'margin-top': '200px'});
                  jQuery('#lienCtaF').css({'margin-top': '-131px', 'margin-bottom': '105px'});
                }
              }


              if(window.location.href.match('lunettes-de-ski')) {
                jQuery('.product-command--ctas-price').css({'padding-bottom': '5px'});
                var lienG = jQuery('.product-command-ctas--add:eq(1)').html();
                jQuery('.product-container--action').after('<div id="lienCtaG"><div class="popinCtaG">'+ lienG +'</div></div>');


                jQuery('#lienCtaG .popinCtaG').find('span').empty();
                jQuery('#lienCtaG .popinCtaG').find('.c_icon--home').remove();
                jQuery('#lienCtaG .popinCtaG').find('span').addClass('toDeleteG');
                jQuery('#lienCtaG .popinCtaG .toDeleteG').remove();

                var toDeleteTextG = jQuery('#lienCtaG .popinCtaG').find('span');
                jQuery(toDeleteTextG).contents().filter(function() {
                  return this.nodeType === Node.TEXT_NODE;
                }).remove();

                jQuery('#lienCtaG .popinCtaG').find('a').append('<p style="text-decoration: underline; cursor: pointer; text-transform: none; margin-bottom: 10px; font-size: .9rem;">Voir les disponibilités en magasin</p>');
                jQuery('#lienCtaG .popinCtaG').find('a').css({'background-color': '#f7f7f7', 'border': 'none'});

                jQuery( "#lienCtaG .popinCtaG a P" ).hover(
                  function() {
                    jQuery( this ).css({'text-decoration': 'none', 'color': 'black'});
                  }, function() {
                    jQuery( this ).css({'text-decoration': 'underline'});
                  }
                );

                jQuery("#lienCtaG .popinCtaG a").attr("data-socloz-disable_product_step", "1");

                if (window.matchMedia('(max-width: 450px)').matches){
                  jQuery('#lienCtaG').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block','background': '#f7f7f7'});
                } else {
                  jQuery('#lienCtaG').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block', 'background': '#f7f7f7', 'font-family': 'poppins-regular,arial,sans-serif'});
                }

                //rectification Mobile
                if (window.matchMedia('(max-width: 450px)').matches){
                  jQuery(".product-container--action img[src*=abtasty]").wrap('<div class="assuranceG"></div>');
                  jQuery('assuranceG').css({'margin-top': '200px'});
                  jQuery('#lienCtaG').css({'margin-top': '-131px', 'margin-bottom': '105px'});
                }
              }

              if(window.location.href.match('masque-de-ski')) {
                jQuery('.product-command--ctas-price').css({'padding-bottom': '5px'});
                var lienH = jQuery('.product-command-ctas--add:eq(1)').html();
                jQuery('.product-container--action').after('<div id="lienCtaH"><div class="popinCtaH">'+ lienH +'</div></div>');


                jQuery('#lienCtaH .popinCtaH').find('span').empty();
                jQuery('#lienCtaH .popinCtaH').find('.c_icon--home').remove();
                jQuery('#lienCtaH .popinCtaH').find('span').addClass('toDeleteH');
                jQuery('#lienCtaH .popinCtaH .toDeleteH').remove();

                var toDeleteTextH = jQuery('#lienCtaH .popinCtaH').find('span');
                jQuery(toDeleteTextH).contents().filter(function() {
                  return this.nodeType === Node.TEXT_NODE;
                }).remove();

                jQuery('#lienCtaH .popinCtaH').find('a').append('<p style="text-decoration: underline; cursor: pointer; text-transform: none; margin-bottom: 10px; font-size: .9rem;">Voir les disponibilités en magasin</p>');
                jQuery('#lienCtaH .popinCtaH').find('a').css({'background-color': '#f7f7f7', 'border': 'none'});

                jQuery( "#lienCtaH .popinCtaH a P" ).hover(
                  function() {
                    jQuery( this ).css({'text-decoration': 'none', 'color': 'black'});
                  }, function() {
                    jQuery( this ).css({'text-decoration': 'underline'});
                  }
                );

                jQuery("#lienCtaH .popinCtaH a").attr("data-socloz-disable_product_step", "1");

                if (window.matchMedia('(max-width: 450px)').matches){
                  jQuery('#lienCtaH').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block','background': '#f7f7f7'});
                } else {
                  jQuery('#lienCtaH').css({'font-style': 'underline', 'line-height': '1rem', 'text-align': 'center', 'display': 'block', 'background': '#f7f7f7', 'font-family': 'poppins-regular,arial,sans-serif'});
                }

                //rectification Mobile
                if (window.matchMedia('(max-width: 450px)').matches){
                  jQuery(".product-container--action img[src*=abtasty]").wrap('<div class="assuranceH"></div>');
                  jQuery('assuranceH').css({'margin-top': '200px'});
                  jQuery('#lienCtaH').css({'margin-top': '-131px', 'margin-bottom': '105px'});
                }
              }
              jQuery(".mention-ab:eq(1)").remove();
          }, 100);

          setTimeout(function() {
            if (window.location.href.match("9897226") != 1) {
              jQuery('.popinCtaE A.socloz:eq(1)').css({'display': 'none'});
              jQuery('.popinCtaE A.socloz:eq(0)').css({'display': 'block'});

              jQuery('.popinCtaF A.socloz:eq(1)').css({'display': 'none'});
              jQuery('.popinCtaF A.socloz:eq(0)').css({'display': 'block'});

              jQuery('.popinCtaG A.socloz:eq(1)').css({'display': 'none'});
              jQuery('.popinCtaG A.socloz:eq(0)').css({'display': 'block'});

              jQuery('.popinCtaH A.socloz:eq(1)').css({'display': 'none'});
              jQuery('.popinCtaH A.socloz:eq(0)').css({'display': 'block'});
            }
          }, 100);
  //FIX Ajout attribut CTA
  jQuery(".socloz.btn.btn-secondary.btn-fullwidth:contains(Réserver gratuitement en magasin)").attr("data-socloz-disable_product_step", "1");
  //FIX Ajout phrase CTA
  jQuery(".socloz.btn.btn-secondary.btn-fullwidth span:contains(Réserver gratuitement en magasin), .socloz.btn.btn-secondary.btn-fullwidth:contains(Réserver gratuitement en magasin) div:eq(0)").wrapAll("<div class='wrapperabt'></div>");
  jQuery(".wrapperabt:eq(0)").after("<div class='mention-ab'>Service gratuit, simple et rapide</div>");
  jQuery(".socloz.btn.btn-secondary.btn-fullwidth:contains(Réserver gratuitement en magasin)").css({"display": "block"});
  jQuery(".socloz.btn.btn-secondary.btn-fullwidth:contains(Réserver gratuitement en magasin) span:contains(Réserver gratuitement en magasin):eq(0)").text("Réserver en magasin");
  jQuery(".mention-ab").css({"font-size":"11px", "text-transform":"none"});
  jQuery(".wrapperabt").attr("style", "display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center;");
  jQuery(".wrapperabt .c_icon.c_icon--home").css({"margin-right": "10px"});
  jQuery(".wrapperabt span:contains(Réserver en magasin)").css("padding-top", "3px");
        }




https://www.grandoptical.com/lunettes-de-soleil/homme/ray-ban/rb2447-round/p/4840813?ABtestSOCLOZ


  XX


if(window.location.href.match('lipocils-platinium')) {

    // affichage du prix du produit
    jQuery('.right_part_product h3').remove();
    jQuery('.right_part_product').css({'align-items': 'center', 'margin-right': '40px'});

    jQuery('.prod_nxt').remove();
    jQuery('.prod_prv').remove();
    jQuery('#retour_product').remove();

    jQuery('.social_product').remove();
    jQuery('#autres_vues').remove();

    jQuery('.ref_txt').remove();

    //flèche de navigation

    jQuery('.fond_middle .wrapper_picto').append('<div style="display:flex;"><a href="/soin-des-yeux/soin-des-cils/soin-des-cils/creme-de-la-pousse-des-cils/1.html"><img src="https://www.eddo.fr/wp-content/uploads/2020/07/arrow-left.png" class="left_arrow"></a><a href="https://www.talika.fr/soin-des-yeux/soin-des-cils/soin-des-cils/lipocils-mascara-marron/3865.html"><img src="https://www.eddo.fr/wp-content/uploads/2020/07/arrow-right.png" class="arrow_right"></a></div>');
    jQuery('.arrow_right').css({'position': 'absolute', 'margin-top': '-150px', 'width': '79px', 'left': '58%'});
    jQuery('.left_arrow').css({'position': 'absolute', 'margin-top': '-150px', 'width': '79px', 'right': '58%'});

    // changement de texte pour la description du sous-titre
    jQuery('.sub_title_product').text('DOUBLE-SERUM POUSSE ET MULTIPLICATION DES CILS');
    jQuery('.left_part').remove();

    jQuery('#slider_gamme h2').remove();

    // jQuery('.wrap_gondole_product .bloc_slider_gondole.right_part').css({'width': '100%'});
    jQuery('.wrap_gondole_product').before('<div><h1 style="font-family: Montserrat,sans-serif;font-size: 2rem; line-height: 2em; font-weight: 300; color: #8dd4df; text-align: center; margin: 20px 0;">VOUS AIMEREZ AUSSI</h1></div>');

    jQuery('.components_push').before('<div style="margin-top: 20px;"><h1 style="font-family: Montserrat,sans-serif;font-size: 2rem; line-height: 2em; font-weight: 300; color: #8dd4df; text-align: center; margin-bottom: -20px;">AVIS</h1></div>');

    //Bouton ajout panier

    jQuery('.ajout_btn').css({'background-color': '#92d6e0'});
    jQuery('.ajout_btn SPAN').css({'color': 'white'});

    //fil d'ariane du produit

    jQuery('.current_ariane').css({'color': '#92d6e0'});

    //Ajout de l'iframe pour la vidéo youtube

    setTimeout(function(){
      jQuery('#wrapper_prod_infos').before('<div style="display: flex;"><iframe src="https://www.youtube.com/embed/yupMDxJTbKM?rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.talika.fr&widgetid=1" id="myFrame"></iframe><div class="descText"></div></div>');
      jQuery('#myFrame').css({'width': '55%', 'height': '415px', 'overflow': 'visible', 'border': 'none', 'margin-top': '50px'});
    }, 100)

    //Refonte de la partie description
    setTimeout(function(){
      jQuery('.txt_tab div:eq(0) P').addClass("textDesc");
      var txtDescription = jQuery('.textDesc').html();
      jQuery('#myFrame').after('<div style="width: 35%; margin: 50px 80px 0 80px;"><h1 style="font-family: Montserrat,sans-serif;font-size: 1.4rem; line-height: 1.82rem; font-weight: 300; color: #8dd4df; text-align: left;">DESCRIPTION</h1><div style="font-family: Montserrat,sans-serif; font-size: .8rem; line-height: 1.04rem; color: #666; font-weight: 300; font-size: .8rem;">'+ txtDescription +'</div></div>');
    }, 100)

    jQuery('.txt_tab DIV:eq(0)').hide();

    //Avis vérifiés

    jQuery('.product_page .components_push .avis_verifie').css({'margin-top': '-345px'});
    jQuery('.product_page .components_push .avis_verifie h2').wrap('<div class="emptyDiv"></div>');
    jQuery('.product_page .components_push .avis_verifie .emptyDiv').empty();
    jQuery('.product_page .components_push .avis_verifie').prepend('<div class="newTitle"><p class="newText">CHEZ VOUS</p></div>');
    jQuery('.product_page .components_push .avis_verifie P').css({'font-family': 'Montserrat, sans-serif', 'font-size': '50px', 'display': 'flex', 'color': 'rgb(1, 1, 1)', 'font-weight': '200', 'text-align': 'right', 'justify-content':'center', 'line-height': '50px'});
    jQuery('.newTitle').css({'border-right': '1px solid #010101', 'display': 'flex', 'height': '200px', 'align-items': 'center'});

    //Case instagram + presse

    jQuery('.components_push .col_right_push h2 A').text('DANS LA PRESSE');
    jQuery('.components_push .col_right_push h2').css({'display': 'flex', 'align-items':'center'});
    jQuery('.components_push .col_right_push h2 A').css({'line-height': '50px'});

    jQuery('.components_push .col_right_push:eq(0)').before('<div class="instaPart"><h2 class="titleInsta">SUR <br> INSTA</h2><a><img src="https://www.eddo.fr/wp-content/uploads/2020/07/Capture-d’écran-2020-07-15-à-14.01.09.png" class="imgInsta"></a><div class="textInstaDesc"><h3>SUIVEZ-NOUS !</h3><br><p>Suivez l\'actualité #Talika sur Instagram</p><br><a href="https://www.instagram.com/explore/tags/talika/?hl=fr"><h5 style="font-family: Montserrat,sans-serif; font-size: 13.5px; line-height: 17.55px; font-weight: 700; color: #010101;"> - VOIR TOUT </h5></a></div></div>');
    jQuery('.instaPart').css({'display': 'flex','align-items': 'center', 'width': '100%', 'margin-bottom': '100px'});
    jQuery('.titleInsta').css({'font-family': 'Montserrat,sans-serif', 'font-size': '50px', 'color': '#010101', 'font-weight': '200', 'display': 'flex', 'align-items': 'center'});
    jQuery('.titleInsta:after').css({'content': '', 'display': 'block', 'width': '1px', 'height': '100%', 'position': 'absolute', 'top': '0', 'right': '1px', 'background': '#010101'});
    jQuery('.imgInsta').css({'width': '220px', 'margin-left': '20px'});
    jQuery('.textInstaDesc').css({'margin-left': '20px'});

    //Bouton laisser un avis

    jQuery('.netreviewsProductWrapper A:eq(0)').wrap('<div class="btnAvisProduct"></div>');
    var btnAvis = jQuery('.netreviewsProductWrapper .btnAvisProduct').html();
    jQuery('.netreviewsProductWrapper').append('<div style="display: block; margin: -40px auto 20px auto; width: 68%;">'+ btnAvis +'</div>');
    jQuery('.netreviewsProductWrapper A:eq(0)').hide();

    // New slider
    setTimeout(function(){

      //Texte des autres produits
      jQuery('.swiper-container .swiper-wrapper LI:eq(0) .bloc_price .price').after('<div><p style="font-size: 15px; font-family: Montserrat,sans-serif; margin-top: 10px;">Pousse et <br> pigmentation <br> des cils</p></div>');
      jQuery('.swiper-container .swiper-wrapper LI:eq(1) .bloc_price .price').after('<div><p style="font-size: 15px; font-family: Montserrat,sans-serif; margin-top: 10px;">Pousse et <br> pigmentation <br> des sourcils</p></div>');
      jQuery('.swiper-container .swiper-wrapper LI:eq(2) .bloc_price .price').after('<div><p style="font-size: 15px; font-family: Montserrat,sans-serif; margin-top: 10px;">Démaquillant <br>non gras <br> pour cils</p></div>');
      jQuery('.swiper-container .swiper-wrapper LI:eq(3) .bloc_price .price').after('<div><p style="font-size: 15px; font-family: Montserrat,sans-serif; margin-top: 10px;">Pousse,<br> repousse et <br> pigmentation <br> des cils</p></div>');
      jQuery('.swiper-container .swiper-wrapper LI:eq(4) .bloc_price .price').after('<div><p style="font-size: 15px; font-family: Montserrat,sans-serif; margin-top: 10px;">Pousse et <br> pigmentation <br> des sourcils</p></div>');

      //slider
      var slideA = jQuery('.swiper-container-horizontal UL.swiper-wrapper LI:eq(0)').html();
      jQuery('#slider_gamme').append('<div class="imgA">'+ slideA +'</div>');
      jQuery('.imgA').css({'margin': '5px 5px 5px 50px'});
      jQuery('.imgA .wrapper_img img').css({'width': '240px', 'height': 'auto', 'padding': '5px'});
      jQuery('.imgA .product_hover').css({'margin-top': '5px'});


      var slideB = jQuery('.swiper-container-horizontal UL LI:eq(1)').html();
      jQuery('#slider_gamme').append('<div class="imgB">'+ slideB +'</div>');
      jQuery('.imgB').css({'margin': '5px'});
      jQuery('.imgB .wrapper_img img').css({'width': '240px', 'height': 'auto'});

      var slideC = jQuery('.swiper-container-horizontal UL LI:eq(2)').html();
      jQuery('#slider_gamme').append('<div class="imgC">'+ slideC +'</div>');
      jQuery('.imgC').css({'margin': '5px'});
      jQuery('.imgC .wrapper_img img').css({'width': '240px', 'height': 'auto'});


      var slideD = jQuery('.swiper-container-horizontal UL LI:eq(3)').html();
      jQuery('#slider_gamme').append('<div class="imgD">'+ slideD +'</div>');
      jQuery('.imgD').css({'margin': '5px'});
      jQuery('.imgD .wrapper_img img').css({'width': '240px', 'height': 'auto'});

      var slideE = jQuery('.swiper-container-horizontal UL LI:eq(4)').html();
      jQuery('#slider_gamme').append('<div class="imgE">'+ slideE +'</div>');
      jQuery('.imgE').css({'margin': '5px'});
      jQuery('.imgE .wrapper_img img').css({'width': '240px', 'height': 'auto'});

      jQuery('#slider_gamme').css({'display': 'flex'});
      jQuery('#slider_gamme .swiper-container').remove();
      jQuery('.wrap_gondole_product').css({'padding': '20px'});
      jQuery('.swiper-container').empty();

    }, 200);
  }










xx

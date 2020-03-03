

//FONT Changé directement sur la page d'ab tasty

setTimeout( function(){
  if (window.matchMedia('(min-width: 992px)').matches){
    jQuery('#sliderhome img:eq(0)').remove();
    jQuery('#sliderhome a:eq(0)').after('<img class=\"img--ab\" src=\"https://www.eddo.fr/wp-content/uploads/2020/01/201028-slider-valeurs-sures-abtest-4.jpg\" style=\"width: 692px; heigth: 835px\">');
    jQuery('#musthave IMG').wrap("<div class=\" wrapper--musthave-img\"></div>");
    jQuery('.wrapper--musthave-img').css({'width': '390px', 'height': '265px', 'overflow': 'hidden'});
    jQuery('.img--ab').after('<button class=\"btn--img--ab\"><p class=\"text-btn--musthave-img\">VOIR LA COLLECTION ></p></button>');

    //First image
    jQuery('#musthave IMG:eq(0)').addClass('first--mushave-img');
    jQuery('.first--mushave-img').after('<div style=\"display: flex; position: absolute; margin-top: -50px; margin-bottom: 20px;justify-content: space-between; vertical-align: baseline; \"><div class=\"vertical-line\"></div><p class=\"text--musthave-img\">Saint Valentin</p><button class=\"btn--musthave-img\"><p class=\"text-btn--musthave-img\">VOIR LA COLLECTION ></p></button></div>');

    //Second image
    jQuery('#musthave IMG:eq(1)').addClass('second--mushave-img');
    jQuery('.second--mushave-img').after('<div style=\"display: flex; position: absolute; margin-top: -80px; margin-bottom: 20px; justify-content: space-between; vertical-align: baseline;\"><div class=\"vertical-line\"></div><p class=\"text--musthave-img\">See by Chloé</p><button class=\"btn--musthave-img\"><p class=\"text-btn--musthave-img\">VOIR LA COLLECTION ></p></button></div>');

    //Third image
    jQuery('#musthave IMG:eq(2)').addClass('third--mushave-img');
    jQuery('.third--mushave-img').after('<div style=\"display: flex; position: absolute; margin-top: -80px; margin-bottom: 20px; justify-content: space-between; vertical-align: baseline;\"><div class=\"vertical-line\"></div><p class=\"text--musthave-img\">Forte Forte</p><button class=\"btn--musthave-img\"><p class=\"text-btn--musthave-img\">VOIR LA COLLECTION ></p></button></div>');

    //CSS images
    jQuery('.second--mushave-img').css({'margin-top': '30px'});
    jQuery('.third--mushave-img').css({'margin-top': '30px'});
    jQuery('.btn--img--ab').css({'width': '200px', 'height': '32px', 'padding': '5px 10px 5px 10px', 'position': 'absolute', 'margin-top': '560px', 'margin-left': '-560px'});

    //CSS bouton collection + texte + vertical line
    jQuery('.vertical-line').css({'border-left': '1px solid gray', 'height': '50px', 'margin-top': '-20px', 'margin-left': '20px','margin-right': '-10px'})
    jQuery('.btn--musthave-img').css({'width': '200px', 'height': '32px', 'padding': '5px 10px 5px 10px', 'justify-content': 'space-between', 'margin-left': '28px'});
    jQuery('.text-btn--musthave-img').css({'font-family': '"Lato", sans-serif;', 'font-size': '15px', 'font-weight': 'lighter'});
    jQuery('.text--musthave-img').css({'font-family': '"GFS Didot", sans-serif;', 'font-size': '19px', 'padding-left': '10px', 'margin-left': '10px', 'vertical-align':'baseline', 'width': '140px', 'padding-top': '5px'});

  } else {

    jQuery('#sliderhome img:eq(0)').remove();
    jQuery('#sliderhome a:eq(0)').after('<img class=\"img--ab\" src=\"https://www.eddo.fr/wp-content/uploads/2020/01/201028-slider-valeurs-sures.jpg\">');

//remplacer les images
    jQuery('.show-for-small IMG:eq(0)').remove();
    jQuery('.show-for-small IMG:eq(1)').remove();
    jQuery('.show-for-small IMG:eq(2)').remove();

//Ajouter les nouvelles images
    jQuery('.show-for-small a:eq(0)').after('<img class=\"first--img-small\" src=\"https://www.eddo.fr/wp-content/uploads/2020/01/200128-MH1-saint-valentin.jpg\">');
    jQuery('.show-for-small a:eq(1)').after('<img class=\"second--img-small\" src=\"\">');
    jQuery('.show-for-small a:eq(2)').after('<img class=\"third--img-small\" src=\"https://www.eddo.fr/wp-content/uploads/2020/01/200128-MH3-forte.jpg\">');

//Boutons VOIR COLLECTION

    //First image
    jQuery('.first--img-small').after('<div style=\"display: flex; position: absolute;justify-content: space-between; vertical-align: baseline; margin-top: 10px;\"><div class=\"vertical-line\"></div><p class=\"text--musthave-img\">Saint Valentin</p><button class=\"btn--musthave-img\"><p class=\"text-btn--musthave-img\">VOIR LA COLLECTION ></p></button></div>');

    //Second image
    jQuery('.second--img-small').after('<div style=\"display: flex; position: absolute; justify-content: space-between; vertical-align: baseline; margin-top: -60px; background-color: white; height: 100px;\"><div class=\"vertical-line\"></div><p class=\"text--musthave-img\">See by Chloé</p><button class=\"btn--musthave-img\"><p class=\"text-btn--musthave-img\">VOIR LA COLLECTION ></p></button></div>');

    //Third image
    jQuery('.third--img-small').after('<div style=\"display: flex; position: absolute; justify-content: space-between; vertical-align: baseline; margin-top: 10px;\"><div class=\"vertical-line\"></div><p class=\"text--musthave-img\">Forte Forte</p><button class=\"btn--musthave-img\"><p class=\"text-btn--musthave-img\">VOIR LA COLLECTION ></p></button></div>');
    jQuery('.third--img-small').css({'margin-top': '-65px'})

    //CSS bouton collection + texte + vertical line
    jQuery('.vertical-line').css({'border-left': '1px solid gray', 'height': '40px', 'margin-top': '-20px', 'margin-left': '10px','margin-right': '-10px'})
    jQuery('.btn--musthave-img').css({'width': '140px', 'height': '28px', 'padding': '5px 5px 5px 5px', 'justify-content': 'space-between'});
    jQuery('.text-btn--musthave-img').css({'font-size': '10px'});
    jQuery('.text--musthave-img').css({'font-size': '14px', 'padding-left': '10px', 'margin-left': '10px' ,'vertical-align':'baseline', 'width': '130px', 'line-height': '30px'});

    jQuery('#justinatlulli H3').css({'margin-top': '80px'})

  }
}, 100);

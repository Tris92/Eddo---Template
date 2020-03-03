
// PAGE DE CONNEXION


//Bouton première connexion
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0)').prepend("<div class=\"connectDiv\"> <img class=\"connectPic\" src='https://www.eddo.fr/wp-content/uploads/2019/12/just-me-solid.png'> <p class=\"connectText\">Première connexion ?<a class=\"connectSpan\" href=\"https://www.aviva.fr/espaceclient/MonCompte/Inscription/Recherche\">Inscrivez-vous</a></p></div>");
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0)').css({'display': 'flex', 'background-color': 'rgb(229, 229, 229)', 'height': '70px', 'width': 'auto', 'margin-bottom':'20px'});
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0) > IMG.connectPic:eq(0)').css({'height': '38px', 'width': '32px', 'margin': '15px 10px 10px 10px'});
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0) > P.connectText:eq(0) > A:nth-of-type(1)').css({'margin-left':'8px', 'border-bottom':'Opx'});
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0) > P.connectText:eq(0)').css({'margin-top':'20px'});

//Delete dernier paragraph

jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > DIV.last-row:eq(0)').remove();

// aligner élément à gauche

jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > P.m-form-row__explanatory-text-link:eq(0) > A:nth-of-type(1)').css({'text-align': 'left!important'});
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(1) > P.m-form-row__explanatory-text-link:eq(0) > A:nth-of-type(1)').css({'text-align': 'left!important'});

jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > HR.a-keyline-divider:eq(0)').remove();
jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > H2.a-heading:eq(0)').remove();


//Bouton première connexion
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0)').prepend("<div class=\"connectDiv\"> <img class=\"connectPic\" src='https://www.eddo.fr/wp-content/uploads/2019/12/just-me-solid.png'> <p class=\"connectText\">Première connexion ? <a> Inscrivez-vous </a></p></div>");
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0)').css({'background-color': 'rgb(229, 229, 229)', 'height': '70px', 'width': 'auto', 'margin-bottom':'20px'});
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0) > IMG.connectPic:eq(0)').css({'height': '38px', 'width': '32px', 'margin': '15px 10px 10px 10px'});

if (window.matchMedia('(max-width: 768px)').matches){
  jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0) > P.connectText:eq(0)').css({'display': 'block'})
} else {
  jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0) > P.connectText:eq(0)').css({'display': 'flex', 'vertical-align': 'middle', 'margin-top': '20px'})
}

//Delete dernier paragraph
jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > DIV.last-row:eq(0)').remove();
// aligner élément à gauche

jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > P.m-form-row__explanatory-text-link:eq(0)').css({'text-align': 'left'});
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(1) > P.m-form-row__explanatory-text-link:eq(0)').css({'text-align': 'left'});


jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > HR.a-keyline-divider:eq(0)').remove();
jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > H2.a-heading:eq(0)').remove();

XXXX



jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0)').prepend("<div class=\"connectDiv\"> <img class=\"connectPic\" src='https://www.eddo.fr/wp-content/uploads/2019/12/just-me-solid.png'> <p class=\"connectText\">Première connexion ? <a> Inscrivez-vous </a></p></div>");
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0)').css({'background-color': 'rgb(229, 229, 229)', 'height': '70px', 'width': 'auto', 'margin-bottom':'20px'});
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0) > IMG.connectPic:eq(0)').css({'height': '38px', 'width': '32px', 'margin': '15px 10px 10px 10px'});

if (Modernizr.mq('(max-width: 414px)')) {
  jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0) > P.connectText:eq(0)').css({'display': 'block'})
} else {
  jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0) > P.connectText:eq(0)').css({'display': 'flex', 'vertical-align': 'middle', 'margin-top': '20px'})
}


//Delete dernier paragraph
jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > DIV.last-row:eq(0)').remove();
// aligner élément à gauche

jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > P.m-form-row__explanatory-text-link:eq(0)').css({'text-align': 'left'});
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(1) > P.m-form-row__explanatory-text-link:eq(0)').css({'text-align': 'left'});


jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > HR.a-keyline-divider:eq(0)').remove();
jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > H2.a-heading:eq(0)').remove();



//Bouton première connexion

setInterval(function() {
  if (window.matchMedia('(min-width: 414px)').matches){
    jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0)').prepend("<div class=\"connectDiv\"> <img class=\"connectPic\" src='https://www.eddo.fr/wp-content/uploads/2019/12/just-me-solid.png'> <p class=\"connectText\">Première connexion ? <a class=\"connectSpan\">Inscrivez-vous</a></p></div>");
    jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0)').css({'display': 'flex', 'background-color': '#EEEEEE', 'height': '70px', 'width': 'auto', 'margin-bottom':'20px'});
    jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > DIV.connectDiv:eq(0) > IMG.connectPic:eq(0)').css({'height': '38px', 'width': '32px', 'margin': '15px 10px 10px 10px'});
  } else {
    jQuery('.connectSpan').prepend('<br>');
  }
},200);

//Delete dernier paragraph
jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > DIV.last-row:eq(0)').remove();

// aligner élément à gauche
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(0) > P.m-form-row__explanatory-text-link:eq(0) > A:nth-of-type(1)').css({'text-align': 'left!important'});
jQuery('#loginForm > FIELDSET:nth-of-type(1) > DIV.m-form-row:eq(1) > P.m-form-row__explanatory-text-link:eq(0) > A:nth-of-type(1)').css({'text-align': 'left!important'});

// Delete HR Lines
jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > HR.a-keyline-divider:eq(0)').remove();
jQuery('#main > DIV.l-section:eq(0) > DIV.l-content-container:eq(0) > DIV.l-max:eq(0) > H2.a-heading:eq(0)').remove();








// xxx

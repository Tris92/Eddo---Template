<script>
var waitForJQuery = setInterval(function (){
  if (typeof $ != 'undefined') {
    if(jQuery(".newLynxBanner").length === 0){
//Stocker le prénom
var nameAB = jQuery(".m-hero-message__text p:contains(Bienvenue) span").text();
//enlève le devis auto de la bannière du haut
jQuery('.m-masterhead-web-application-name').hide();
//changement de la bannière
jQuery('.m-hero-wrapper DIV:eq(0)').attr("id", "changeBanner");
jQuery('body').append("<style>#changeBanner{  background-image: url('https://www.aviva.fr/images/cro/proposition-bandeau-auto.png')!important }</style>");
jQuery('#main .l-content-container:eq(0)').hide();
setTimeout(function() {
  jQuery(".m-hero-message__text P").contents().filter(function() {
    return this.nodeType === Node.TEXT_NODE;
  }).remove();
}, 100);
setTimeout(function() {
  jQuery('.cmsvar_prenom').after('<div class="comaAb">,</div>');
}, 150);
//remove original text
setTimeout(function() {
  jQuery(".m-hero__sub-heading").contents().filter(function() {
    return this.nodeType === Node.TEXT_NODE;
  }).remove();
}, 200);
setTimeout(function() {
  jQuery('.cmsvar_tarif').before("<span>"+ nameAB +", finalisez votre devis de </span> ");
  jQuery('.cmsvar_prenom').css({'font-size': '.4em', 'font-weight': '100', 'font-family': 'source_sans_prolight,-apple-system,blinkmacsystemfont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,arial,helvetica,sans-serif'});
  jQuery('.comaAb').css({'font-size': '.4em', 'font-weight': '100', 'font-family': 'source_sans_prolight,-apple-system,blinkmacsystemfont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,arial,helvetica,sans-serif', 'display': 'contents'});
  jQuery('.m-hero-message__text').css({'display': 'flex'});
  jQuery('.cmsvar_partenaire').text('pour votre véhicule :');
  jQuery('.cmsvar_tarif').css({'font-weight': '600', 'margin-right': '5px'});
  jQuery('.cmsvar_marque').css({'font-weight': '600', 'margin-right': '5px'});
  jQuery('.cmsvar_modele').css({'font-weight': '600', 'margin-right': '5px'});
  jQuery('.cmsvar_version_commerciale').css({'font-weight': '600', 'margin-right': '5px'});
}, 250)
//ajout bouton souscrire en ligne
jQuery('.m-hero-message__text').after('<div class="m-hero-message__button"><ul class="m-button-group"><li class="m-button-group__item"><a class="a-button a-button--primary" href="#">Souscrire en ligne </a></li></ul></div>');
//changement de place de la bannière partenariat
jQuery('.l-columns--12-large').wrap('<div class="newLynx"></div>');
var lynxBanner = jQuery('.newLynx').html();
jQuery('#new-section-comparateur').before('<div class="newLynxBanner">'+ lynxBanner +'</div>');
jQuery('.newLynx').hide();
jQuery('.newLynxBanner').css({'padding': '30px 0px', 'background-color': 'rgb(238, 238, 238, 0.8)'});
jQuery('.newLynxBanner DIV').css({'margin-left': '7%', 'display': 'flex', 'align-items': 'center'});
jQuery('.newLynxBanner DIV IMG').css({'margin-left': '10px'});
//change le texte en en dessous du titre "devis auto"

  setTimeout(function() {
    jQuery('.l-fr-70-content P:eq(0)').addClass("underTitle")
    jQuery('.underTitle').text("Compte tenu de votre profil et de vos déclarations sur le site du comparateur, nous vous proposons l'offre suivante.");
    jQuery('.underTitle').css({'margin-top': '-20px', 'margin-bottom': '20px', 'border-bottom': '1px solid rgb(209, 209, 209, 0.8)', 'padding-bottom': '25px'});
    jQuery('.underTitle').after('<div style="display: flex; align-items: center; margin-bottom: 20px"><svg style="height: 25px; margin-right: 10px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0C7.177 0 0 7.177 0 16s7.177 16 16 16 16-7.178 16-16c0-8.823-7.178-16-16-16zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14zm-5-10l6-3.991L11.013 12l-.003 2.122 2.819 1.887-2.825 1.879zm7.828-3.991l-2.825 1.879L16 20l6-3.991L16.013 12l-.003 2.122zM28 16c0-6.627-5.371-12-11.998-12H16v2.138h.003c5.437 0 9.86 4.424 9.86 9.862s-4.423 9.862-9.861 9.862H16V28h.003C22.629 28 28 22.627 28 16z" fill="#106cb2"/></svg><p>Changer d\'assurance facilement, souscrivez en ligne en moins de 5 minutes : Aviva s\'occupe de tout !</p></div>');
    //remonte les encarts de droite
    jQuery('.l-fr-main-aside').css({'margin-top': '-50px'});
    jQuery('.m-card-notification--information').css({'background-color': '#46bfff'});
    jQuery('.m-fr-recapitulatif--prix .l-content-container:eq(0)').attr("id", "removeMargin");
  }, 300);

  jQuery('body').append("<style>#removeMargin{ margin-top: 0px!important} .cmsvar.cmsvar_prenom, .comaAb {display: none !important;}</style>");
  }
  clearInterval(waitForJQuery);
  }
}, 500);
</script>




//version setInterval



<script>
var waitForJQuery = setInterval(function(){
if (typeof $ != 'undefined') {
  if(jQuery(".newLynxBanner").length === 0){

  jQuery('.l-columns--12-large').wrap('<div class="newLynx"></div>');
  var lynxBanner = jQuery('.newLynx').html();
  //changement de place de la bannière partenariat
  jQuery('#new-section-comparateur').before('<div class="newLynxBanner">'+ lynxBanner +'</div>');
  jQuery('.newLynx').hide();
  jQuery('.newLynxBanner').css({'padding': '30px 0px', 'background-color': 'rgb(238, 238, 238, 0.8)'});
  jQuery('.newLynxBanner DIV').css({'margin-left': '7%', 'display': 'flex', 'align-items': 'center'});
  jQuery('.newLynxBanner DIV IMG').css({'margin-left': '10px'});

  //enlève le devis auto de la bannière du haut
  jQuery('.m-masterhead-web-application-name').hide();
  //changement de la bannière
  jQuery('.m-hero-wrapper DIV:eq(0)').attr("id", "changeBanner");
  jQuery('body').append("<style>#changeBanner{  background-image: url('https://www.aviva.fr/images/cro/proposition-bandeau-auto.png')!important }</style>");
  jQuery('#main .l-content-container:eq(0)').hide();

  setTimeout(function() {
    jQuery(".m-hero-message__text P").contents().filter(function() {
      return this.nodeType === Node.TEXT_NODE;
    }).remove();
  }, 100);

  var nameAB = jQuery(".m-hero-message__text p:contains(Bienvenue) span").text();
  setInterval(function() {
    if(jQuery('.newNameAb').length === 0) {
      jQuery('.cmsvar_tarif').before("<span class='newNameAb'>"+ nameAB +", finalisez votre devis de </span> ");
    }
  }, 150);

  setTimeout(function() {
    jQuery('.cmsvar_prenom').after('<div class="comaAb">,</div>');
  }, 200);
  //remove original text
  setTimeout(function() {
    jQuery(".m-hero__sub-heading").contents().filter(function() {
      return this.nodeType === Node.TEXT_NODE;
    }).remove();
  }, 250);

  setInterval(function() {
    jQuery('.cmsvar_prenom').css({'font-size': '.4em', 'font-weight': '100', 'font-family': 'source_sans_prolight,-apple-system,blinkmacsystemfont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,arial,helvetica,sans-serif'});
    jQuery('.comaAb').css({'font-size': '.4em', 'font-weight': '100', 'font-family': 'source_sans_prolight,-apple-system,blinkmacsystemfont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,arial,helvetica,sans-serif', 'display': 'contents'});
    jQuery('.m-hero-message__text').css({'display': 'flex'});
    jQuery('.cmsvar_tarif').css({'font-weight': '600', 'margin-right': '5px'});
    jQuery('.cmsvar_marque').css({'font-weight': '600', 'margin-right': '5px'});
    jQuery('.cmsvar_modele').css({'font-weight': '600', 'margin-right': '5px'});
    jQuery('.cmsvar_version_commerciale').css({'font-weight': '600', 'margin-right': '5px'});
  }, 300)
  //ajout bouton souscrire en ligne
  jQuery('.m-hero-message__text').after('<div class="m-hero-message__button"><ul class="m-button-group"><li class="m-button-group__item"><a class="a-button a-button--primary" href="#">Souscrire en ligne </a></li></ul></div>');

  jQuery('.cmsvar_partenaire').text('pour votre véhicule :');

  //change le texte en en dessous du titre "devis auto"
  setInterval(function() {
    if(jQuery('.undertitle').length === 0) {
      jQuery('.l-fr-70-content P:eq(0)').addClass("underTitle")
      jQuery('.underTitle').text("Compte tenu de votre profil et de vos déclarations sur le site du comparateur, nous vous proposons l'offre suivante.");
      jQuery('.underTitle').css({'margin-top': '-20px', 'margin-bottom': '20px', 'border-bottom': '1px solid rgb(209, 209, 209, 0.8)', 'padding-bottom': '25px'});
    }
    jQuery('.l-fr-main-aside').css({'margin-top': '-50px'});
    jQuery('.m-card-notification--information').css({'background-color': '#46bfff'});
    jQuery('.m-fr-recapitulatif--prix .l-content-container:eq(0)').attr("id", "removeMargin");
  }, 400);

  setInterval(function() {
    if(jQuery('.newTextAb').length === 0 ){
      jQuery('.underTitle').after('<div class="newTextAb" style="display: flex; align-items: center; margin-bottom: 20px"><svg style="height: 25px; margin-right: 10px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0C7.177 0 0 7.177 0 16s7.177 16 16 16 16-7.178 16-16c0-8.823-7.178-16-16-16zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14zm-5-10l6-3.991L11.013 12l-.003 2.122 2.819 1.887-2.825 1.879zm7.828-3.991l-2.825 1.879L16 20l6-3.991L16.013 12l-.003 2.122zM28 16c0-6.627-5.371-12-11.998-12H16v2.138h.003c5.437 0 9.86 4.424 9.86 9.862s-4.423 9.862-9.861 9.862H16V28h.003C22.629 28 28 22.627 28 16z" fill="#106cb2"/></svg><p>Changer d\'assurance facilement, souscrivez en ligne en moins de 5 minutes : Aviva s\'occupe de tout !</p></div>');
    }
  }, 450);

  //remonte les encarts de droite
  jQuery('body').append("<style>#removeMargin{ margin-top: 0px!important} .cmsvar.cmsvar_prenom, .comaAb {display: none !important;}</style>");
  }
  clearInterval(waitForJQuery);
  }
}, 500);
</script>

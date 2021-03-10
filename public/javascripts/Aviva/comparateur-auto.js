//enlève le devis auto de la bannière du haut
jQuery('.m-masterhead-web-application-name').hide();

//changement de place de la bannière partenariat
jQuery('.l-columns--12-large').wrap('<div class="newLynx"></div>');
var lynxBanner = jQuery('.newLynx').html();
jQuery('#seoTitle').before('<div class="newLynxBanner">'+ lynxBanner +'</div>');
jQuery('.newLynx').hide();
jQuery('.newLynxBanner').css({'padding': '30px 0px', 'background-color': 'rgb(238, 238, 238, 0.8)'});

//texte hero banner
jQuery('.cmsvar_prenom').css({'font-size': '20px', 'font-weight': '100'});
jQuery('.cmsvar_prenom').unwrap();
jQuery('.m-hero-message__text').find('Bienvenue').remove();​


//change le texte en en dessous du titre "devis auto"
jQuery('.l-fr-70-content P:eq(0)').addClass("underTitle")
jQuery('.underTitle').text("Compte tenu de votre profil et de vos déclarations sur le site du comparateur, nous vous proposons l'offre suivante.");
jQuery('.underTitle').css({'margin-top': '-20px', 'margin-bottom': '20px', 'border-bottom': '1px solid rgb(209, 209, 209, 0.8)', 'padding-bottom': '25px'});

//remonte les encarts de droite
jQuery('.l-fr-main-aside').css({'margin-top': '-50px'});

//jQuery('.m-hero-background-animation').attr("background-image", "XXX")

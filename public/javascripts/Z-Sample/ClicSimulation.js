// CODE SITE EN AJAX

jQuery(document).ready(function(){
// Interval d'une seconde pour relancer la fonction en boucle (contrainte Ajax)
  setInterval(function(){
  //XXXXX
  }, 1000);
});


// SIMULER UN CLICK SUR UN ELEMENT
jQuery(this).closest('.large-room').click();


// EXAMPLE D'APPLICATION

jQuery(document).ready(function(){
// Interval d'une seconde pour relancer la fonction en boucle (contrainte Ajax)
  setInterval(function(){
    // Mise en place du texte du CTA sur les appartements
    // Version mobile
    var textCTA = 'Choisir cet appartement';

    // Boucle sur les blocs d'appartements
    jQuery('.large-room').each(function(){
      // Suppression du CTA pour éviter le doublon s'il existe déjà
      jQuery(this).find('.btnABTastyApt').remove();

      //Ajout du CTA avec le texte declaré plus haut dans le bloc s'il n'a pas la classe "active"
      if (!jQuery(this).hasClass('active')) {
        jQuery(this).find('.large-room__data-prices').append('<span class="btnABTastyApt">'+textCTA+'</span>');
      }

      //Au clic du bouton, simuler le clic sur le bloc appartement pour le sélectionner
      jQuery('.btnABTastyApt').click(function(){
        jQuery(this).closest('.large-room').click();
      });
    });
  }, 1000);
});

// AUTRE EXEMPLE

  // mise en place de la variable booléen
  var check_shipping_method_true = true ;

  // detect the #checkout-shipping-method-load for auto scroll to the top
  if (jQuery("#checkout-shipping-method-load").length === 1 && check_shipping_method_true === true){
    jQuery('html, body').animate({
    scrollTop: jQuery('BODY').offset().top
    }, 500);
  check_shipping_method_true = false;
  });


// XXXX

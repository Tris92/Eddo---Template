https://www.fr.weber/facades-neuves/les-enduits-monocouches-projetes/weberpral-dr?Weber-ab-146




jQuery('.product-body #product-accordion .panel:eq(2)').addClass("newItemAb");
var newDiv = jQuery('.newItemAb').html();
jQuery('.product-body #product-accordion .panel:eq(0)').before('<div class="panel panel-default validItem">'+ newDiv +'</div>');
jQuery('.newItemAb').remove();
jQuery('.validItem #tab-panel-product_documentation').removeAttr("style", 'height');
jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeClass("collapsed");
jQuery('.validItem .panel-heading .panel-title A:eq(0)').addClass("newCollapse");
setTimeout(function() {
  jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeAttr("aria-expanded");
  jQuery('#tab-panel-product_documentation').removeAttr("aria-expanded");
  jQuery('.validItem .panel-heading .panel-title A:eq(0)').attr("aria-expanded", "true");
  jQuery('#tab-panel-product_documentation').attr("aria-expanded", "true");
  jQuery('#tab-panel-product_documentation').css({'display': 'block'});
  jQuery('#tab-panel-product_documentation').addClass("in");
}, 100)

setTimeout(function() {
  jQuery(".validItem .panel-heading .panel-title A:eq(0)").click(function() {
    jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeAttr("aria-expanded");
    jQuery('.validItem .panel-heading .panel-title A:eq(0)').attr("aria-expanded", "false");
    jQuery('#tab-panel-product_documentation').attr("aria-expanded", "false");
    jQuery('#tab-panel-product_documentation').css({'display': 'none'});
    jQuery('.validItem .panel-heading .panel-title A:eq(0)').addClass("collapsed");
  })
}, 150)

setInterval(function() {
  jQuery(".validItem .panel-heading .panel-title A:eq(0)").click(function() {
    if(jQuery(".newCollapse:visible").length === 1){
      // jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeAttr("aria-expanded");
      jQuery('.validItem .panel-heading .panel-title A:eq(0)').attr("aria-expanded", "true");
      jQuery('#tab-panel-product_documentation').css({'display': 'block'});
      setTimeout(function() {
        jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeClass("newCollapse");
        jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeClass("collapsed");
      }, 100)
    } else {
      jQuery('.validItem .panel-heading .panel-title A:eq(0)').attr("aria-expanded", "false");
      jQuery('#tab-panel-product_documentation').css({'display': 'none'});
      setTimeout(function() {
        jQuery('.validItem .panel-heading .panel-title A:eq(0)').addClass("newCollapse");
        // jQuery('.validItem .panel-heading .panel-title A:eq(0)').addClass("collapsed");
      }, 100)
    }
  })
}, 500);






jQuery('.product-body #product-accordion .panel:eq(2)').addClass("newItemAb");
var newDiv = jQuery('.newItemAb').html();
jQuery('.product-body #product-accordion .panel:eq(0)').before('<div class="panel panel-default validItem">'+ newDiv +'</div>');
jQuery('.newItemAb').remove();
jQuery('.validItem #tab-panel-product_documentation').removeAttr("style", 'height');
jQuery('.validItem .panel-heading .panel-title A:eq(0)').addClass("newCollapse");
setTimeout(function() {
  jQuery('.validItem .panel-heading .panel-title A:eq(0)').attr("aria-expanded", "true");
  jQuery('#tab-panel-product_documentation').css({'display': 'block'});
  // jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeClass("collapsed");
}, 100)

setInterval(function() {
  jQuery(".validItem .panel-heading .panel-title A:eq(0)").click(function() {
    if(jQuery(".newCollapse:visible").length === 1){
      jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeAttr("aria-expanded");
      jQuery('.validItem .panel-heading .panel-title A:eq(0)').attr("aria-expanded", "true");
      jQuery('#tab-panel-product_documentation').css({'display': 'block'});
      setTimeout(function() {
        jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeClass("newCollapse");
      }, 100)
    } else {
      jQuery('.validItem .panel-heading .panel-title A:eq(0)').attr("aria-expanded", "false");
      jQuery('#tab-panel-product_documentation').css({'display': 'none'});
      setTimeout(function() {
        jQuery('.validItem .panel-heading .panel-title A:eq(0)').addClass("newCollapse");
      }, 100)
    }
  })
}, 100);



***
jQuery('.product-body #product-accordion .panel:eq(2)').addClass("newItemAb");
var newDiv = jQuery('.newItemAb').html();
jQuery('.product-body #product-accordion .panel:eq(0)').before('<div class="panel panel-default validItem">'+ newDiv +'</div>');
jQuery('.newItemAb').remove();
jQuery('.validItem #tab-panel-product_documentation').removeAttr("style", 'height');
jQuery('.validItem .panel-heading .panel-title A:eq(0)').addClass("newCollapse");
setTimeout(function() {
  jQuery('.validItem .panel-heading .panel-title A:eq(0)').attr("aria-expanded", "true");
  jQuery('#tab-panel-product_documentation').css({'display': 'block'});
}, 100)



setInterval(function() {
  jQuery(".validItem .panel-heading .panel-title A:eq(0)").click(function() {
    if(jQuery(".newCollapse:visible").length === 1){
      jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeAttr("aria-expanded");
      jQuery('.validItem .panel-heading .panel-title A:eq(0)').attr("aria-expanded", "true");
      jQuery('#tab-panel-product_documentation').css({'display': 'block'});
      setTimeout(function() {
        jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeClass("newCollapse");
      }, 100)
    } else {
      jQuery('.validItem .panel-heading .panel-title A:eq(0)').attr("aria-expanded", "false");
      jQuery('#tab-panel-product_documentation').css({'display': 'none'});
      setTimeout(function() {
        jQuery('.validItem .panel-heading .panel-title A:eq(0)').addClass("newCollapse");
      }, 100)
    }
  })
}, 100);
***







******************************************************************************************************
OFFICIAL VERSION POUR AB TEST

 if (!window.abt636073) {
   window.abt636073 = true;
   jQuery('.product-body #product-accordion .panel:eq(2)').addClass("newItemAb");
   var newDiv = jQuery('.newItemAb').html();
   jQuery('.product-body #product-accordion .panel:eq(0)').before('<div class="panel panel-default validItem">'+ newDiv +'</div>');
   jQuery('.newItemAb').remove();
   jQuery('#tab-panel-product_documentation').removeAttr("style", 'height');
   jQuery('.validItem .panel-heading .panel-title A:eq(0)').addClass("newCollapse");
   setTimeout(function() {
     jQuery('.validItem .panel-heading .panel-title A:eq(0)').attr("aria-expanded", "true");
     jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeClass("collapsed");
     jQuery('[id^=tab-panel-product_documentation]').addClass('in');
   }, 100)

   setTimeout(function(event) {
     var ouvert = false;
     if ( ouvert !== true) {
       jQuery('.validItem .panel-heading .panel-title A:eq(0)').click(function(){
         jQuery('#tab-panel-product_documentation').toggle();
         event.stopPropagation();
         ouvert = true;
       });
     }
     if (ouvert !== false) {
       jQuery('.validItem .panel-heading .panel-title A:eq(0)').click(function(){
         jQuery('#tab-panel-product_documentation').toggle();
         event.stopPropagation();
       });
       ouvert = false;
     }
   }, 100);

   //classe des boutons

   jQuery('.panel-heading .panel-title A:eq(1)').addClass("clicBonSavoir");
   jQuery('.panel-heading .panel-title A:eq(2)').addClass("clicAvantages");

   jQuery('.thumbnail-inline:eq(1) .thumbnail-excerpt SPAN A').addClass("clicFicheDop");
   jQuery('.thumbnail-inline:eq(2) .thumbnail-excerpt SPAN A').addClass("clicFicheSecu");
}



//Boutons accordéons
jQuery(document).on('mousedown', '.newCollapse', function () {
  ABTastyClickTracking('Clic Accordeon - Documents', null, 636073);
});
jQuery(document).on('mousedown', '.clicBonSavoir', function () {
  ABTastyClickTracking('Clic Accordeon - Bon à savoir', null, 636073);
});
jQuery(document).on('mousedown', '.clicAvantages', function () {
  ABTastyClickTracking('Clic Accordeon - Avantages', null, 636073);
});

//boutons DoP/Sécu
jQuery(document).on('mousedown', '.clicFicheDop', function () {
  ABTastyClickTracking('Clic Télécharger la fiche DoP', null, 636073);
});
jQuery(document).on('mousedown', '.clicFicheSecu', function () {
  ABTastyClickTracking('Clic Télécharger la fiche Sécurité', null, 636073);
});


********************************************************************************************************



xx

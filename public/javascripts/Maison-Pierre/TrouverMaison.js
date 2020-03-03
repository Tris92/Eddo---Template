
// <--------------------------------------    MASQUER LES FILTRES

// PAGE VOTRE MAISON

var $rechercheVoir = jQuery('<div class="input-wrapper mobile-center voir-form-btn"><input value="Voir plus" type="button" id="showVoir"></div>');
jQuery('.col2-search > div:nth-child(8) .input-wrapper').after($rechercheVoir);
jQuery('#showVoir').click(function () {
jQuery('.col2-search > div:nth-child(5), .col2-search > div:nth-child(6), .col2-search > div:nth-child(7)').toggle();
  if ( jQuery("label:contains('Surface'):visible").length ) {
    jQuery("#showVoir").attr("value", "Voir moins");
  }
  if ( jQuery("label:contains('Surface'):hidden").length ) {
    jQuery("#showVoir").attr("value", "Voir plus");
  }
});

jQuery('.col2-search > div:nth-child(8) .input-wrapper').addClass('buttonWrap');

setInterval(function() {
  if((jQuery('#ui-id-3').length === 1 && jQuery('#ui-id-4').length === 1) || (jQuery('#ui-id-5').length === 1 && jQuery('#ui-id-7').length === 1)){
    jQuery('#ui-id-3').remove();
    jQuery('#ui-id-4').remove();
    jQuery('#ui-id-5').remove();
    jQuery('#ui-id-7').remove();
  }
}, 200);


// CSS

@media (max-width: 450px) {
    .buttonWrap .input-wrapper input{
        display: block;
    }

    .col2-search > div:nth-child(5){display: none;}
    .col2-search > div:nth-child(6){display: none;}
    .col2-search > div:nth-child(7){display: none;}

    .col2-search > div:nth-child(8) .voir-form-btn input {
      text-decoration: underline;
      text-align: right;
      background-color: #fff;
      border: none;
      color: #00acb6;
      float: right;
      margin-top: -5px;
      margin-left: -15px;
      margin-right: 10px;
      font-weight: 400;
      font-size: 16px;
      font-family: "Lato";
      padding: 0;
      height: 48px;
      -webkit-transition: none;
      -moz-transition: none;
      -o-transition: none;
      transition: none;
    }
    .col2-search > div:nth-child(8) .input-wrapper:nth-child(1) {
    	order: 2;
    }


}

@media (min-width: 768px){
    .col2-search > div:nth-child(5){display: none;}
    .col2-search > div:nth-child(6){display: none;}
    .col2-search > div:nth-child(7){display: none;}

    .buttonWrap .input-wrapper input {
        display: flex;
    }

    .col2-search > div:nth-child(8) .voir-form-btn input {
      text-decoration: underline;
      text-align: right;
      background-color: #fff;
      border: none;
      color: #00acb6;
      float: right;
      margin-top: -5px;
      margin-right: 10px;
      font-weight: 400;
      font-size: 16px;
      font-family: "Lato";
      padding: 0;
      height: 48px;
      width: 238px;
      -webkit-transition: none;
      -moz-transition: none;
      -o-transition: none;
      transition: none;
    }
    .col2-search > div:nth-child(8) .input-wrapper:nth-child(1) {
    	order: 2;
    }
}


// PAGE RESULTAT RECHERCHE


var $rechercheVoir = jQuery('<div class="input-wrapper mobile-center voir-form-btn"><input value="Voir plus" type="button" id="showVoir-2"></div>');
jQuery('.col2-search > div:nth-child(8)').after($rechercheVoir);
jQuery('#showVoir-2').click(function () {
jQuery('.col2-search > div:nth-child(5), .col2-search > div:nth-child(6), .col2-search > div:nth-child(7)').toggle();
  if ( jQuery("label:contains('Surface'):visible").length ) {
    jQuery("#showVoir-2").attr("value", "Voir moins");
  }
  if ( jQuery("label:contains('Surface'):hidden").length ) {
    jQuery("#showVoir-2").attr("value", "Voir plus");
  }
});

jQuery('.col2-search > div:nth-child(8)').addClass('hidden-xs buttonWrap');

setInterval(function() {
  if((jQuery('#ui-id-3').length === 1 && jQuery('#ui-id-4').length === 1) || (jQuery('#ui-id-5').length === 1 && jQuery('#ui-id-7').length === 1)){
    jQuery('#ui-id-3').remove();
    jQuery('#ui-id-4').remove();
    jQuery('#ui-id-5').remove();
    jQuery('#ui-id-7').remove();
  }
}, 200);


// CSS

@media (max-width: 450px) {
    .buttonWrap .input-wrapper {
        display: flex;
    }

    .col2-search > div:nth-child(5){display: none;}
    .col2-search > div:nth-child(6){display: none;}
    .col2-search > div:nth-child(7){display: none;}

    .col2-search .voir-form-btn input {
      text-decoration: underline;
      text-align: center;
      background-color: transparent;
      border: 0px;
      color: #00acb6;
      float: left;
      margin-top: -5px;
      margin-right: 10px;
      font-weight: 400;
      font-size: 16px;
      font-family: "Lato";
      height: 48px;
      width: auto;
      -webkit-transition: none;
      -moz-transition: none;
      -o-transition: none;
      transition: none;
    }
}

@media (min-width: 768px) {
    .col2-search > div:nth-child(5){display: none;}
    .col2-search > div:nth-child(6){display: none;}
    .col2-search > div:nth-child(7){display: none;}

    .buttonWrap .input-wrapper input {
        display: flex;
    }

    .col2-search .voir-form-btn input {
      text-decoration: underline;
      text-align: right;
      background-color: #fff;
      border: 0px;
      color: #00acb6;
      float: right;
      margin-top: -5px;
      margin-right: 10px;
      font-weight: 400;
      font-size: 16px;
      font-family: "Lato";
      padding: 0;
      height: 48px;
      width: 238px;
      -webkit-transition: none;
      -moz-transition: none;
      -o-transition: none;
      transition: none;
    }
}




XXXX

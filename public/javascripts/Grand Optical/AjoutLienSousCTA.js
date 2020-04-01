// AJOUT LIEN CTA
if (!window.abt559954) {
  window.abt559954 = true;
  jQuery('.product-container--action').after('<a href="#" class="lienCta socloz">Vérifier la disponibilité en magasin</a>');
  if (window.matchMedia('(max-width: 450px)').matches){
    jQuery('.lienCta').css({'font-style': 'underline', 'font-size': '1.2rem', 'line-height': '1.2rem', 'text-align': 'center', 'display': 'block', 'margin-top': '15px', 'margin-bottom': '10px'});
  } else {
    jQuery('.lienCta').css({'font-style': 'underline', 'font-size': '1rem', 'line-height': '1.2rem', 'text-align': 'center', 'display': 'block'});
  }
}

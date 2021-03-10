jQuery( document ).ready(function() {
if (!window.abt635614) {
  window.abt635614 = true;

  const trouver = jQuery('a:contains("Trouver un distributeur")');
  trouver.wrap('<a class="btn btn-block btn-primary"></a>');
  trouver.removeClass("btn btn-block btn-primary");
  trouver.css({ color: "#222" });
  trouver.before(
  '<img class="img-for-ab" src="https://www.eddo.fr/wp-content/uploads/2020/07/thumb_F8FE922E1F694EECA3C7F52CA965C538-1.png" alt="Trouver un distributeur" />'
  );

  const dispo = jQuery("a:contains('Voir la disponibilité')");

  dispo.wrap('<a class="btn btn-block btn-primary"></a>');
  dispo.removeClass("btn btn-block btn-primary");
  dispo.css({ color: "#222" });
  dispo.before(
  '<img class="img-for-ab" src="https://www.eddo.fr/wp-content/uploads/2020/07/thumb_1E318202400B436991167EC3C16C6226-1.png" alt="Voir la disponibilité" />'
  );
  const calculer = jQuery("button:contains('Calculer les quantités')");
  const bim = jQuery("a:contains('objet BIM')");


  const comparer = jQuery('.btn.btn-compare.btn-action-compare.btn-block.btn-outline.button.js-form-submit.form-submit');


  comparer.wrap('<div class="line-for-ab"></div>');
  const lineAb = jQuery(".line-for-ab");
  lineAb.css({
    "padding-top": "10px",
    "border-top": "1px solid #CCC",
    "margin-top": "10px",
  });


  calculer.wrap('<a class="btn a-ab"></a>');
  calculer.before('<img class="img-for-ab" src="https://www.eddo.fr/wp-content/uploads/2019/12/calcul-quantités.png" alt="Voir la disponibilité" />');
  bim.wrap('<a class="btn a-ab"></a>');
  bim.before('<img class="img-for-ab" src="https://www.eddo.fr/wp-content/uploads/2019/12/objets-bim.png" alt="Voir la disponibilité" />');

  const calculer2 = jQuery(".a-ab:eq(0)");
  const bim2 = jQuery(".a-ab:eq(1)");

  const divAb = jQuery(".a-ab");

  const imgAb = jQuery(".img-for-ab");
  imgAb.css({
    "height-max": "24px",
    "width-max": "24px",
    "height": "24px",
    "margin-right": "10px",
  });
  divAb.css({
    "display": "flex",
    "width":"100%",
    "border": "1px solid #ccc",
    "border-radius": "50rem",
    "color": "#222",
    "padding": "8px 0",
    "border-radius":"50rem",
    "justify-content":"center",
    "align-items":"center",
    "margin-top":"20px",
  });
  calculer.removeClass("btn btn-block btn-primary");
  bim.removeClass("btn btn-block btn-primary");

  jQuery('button:contains("Calculer les quantités")').css({
    "background":"none ",
    "border":"none"
  });
  jQuery("a:contains('objet BIM')").css({
    "color":"#222",
  })

  lineAb.after(calculer2);
  calculer2.after(bim2);

  jQuery('.product-actions A:eq(0)').addClass("connaitreStock");
  jQuery('.connaitreStock').before('<p class="connaitreAbtest">Connaître nos stocks</p>');
  jQuery('.connaitreAbtest').css({'font-weight': '600'});
  jQuery('.product-actions A:eq(2)').addClass("trouverProduit");
  jQuery('.trouverProduit').before('<p class="trouverAbtest">Trouver nos produits</p>');
  jQuery('.trouverAbtest').css({'font-weight': '600', 'margin-top': '10px'});

  }
});

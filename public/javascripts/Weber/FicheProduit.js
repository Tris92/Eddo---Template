
// VARIATION 1

  if (jQuery("#duplicate-none").length === 0){
    jQuery(".product-actions a:contains(Trouver un distributeur)").text("Voir nos distributeurs");
    jQuery(".product-actions a:contains(Voir nos distributeurs)").after('<span id="duplicate-none" style="border-bottom: grey 2px solid; height: 1px; display: block; width: 100%; margin-top: 16px; margin-bottom: 16px;"></span>');
    jQuery(".product-actions a:contains(Voir la disponibilité)").html("<img src='https://www.eddo.fr/wp-content/uploads/2019/12/Weber-dispo.png' style='width: 27px; margin-right: 5px; margin-left: -32px;'><span>Voir la disponibilité</span>");
    jQuery(".product-actions a:contains(Voir nos distributeurs)").html("<img src='https://www.eddo.fr/wp-content/uploads/2019/12/distributeurs.png' style='width: 17px; margin-right: 5px; margin-left: -12px;'><span>Voir nos distributeurs</span>");

    jQuery(".product-actions a").css({"background-color": "#CCCCCC", "border-color": "#CCCCCC"});
    jQuery(".product-actions a:contains(Voir nos distributeurs), .product-actions a:contains(Voir la disponibilité)").css({"background-color": "#FFEB00", "border-color" : "#FFEB00"});

    jQuery(".product-actions a:contains(Télécharger la fiche produit)").html("<img src='https://www.eddo.fr/wp-content/uploads/2019/12/télécharger.png' style='width: 23px; margin-right: 2px; margin-left: -8px;'><span>Télécharger la fiche produit</span>");

    jQuery(".product-actions a:contains(Calculer les quantités)").html("<img src='https://www.eddo.fr/wp-content/uploads/2019/12/calcul-quantités.png' style='width: 17px; margin-right: 5px; margin-left: -12px;'><span>Calculer les quantités</span>");

    jQuery(".product-actions a:contains(Télécharger l'objet BIM)").html("<img src='https://www.eddo.fr/wp-content/uploads/2019/12/objets-bim.png' style='width: 25px; margin-right: 5px; margin-left: -12px;'><span>Télécharger l'objet BIM</span>");

    jQuery(".product-actions a").css("font-size", "15px");
    jQuery(".product-actions>li").css("margin-top", "10px");

    jQuery(".product-actions a:contains(Voir la disponibilité)").before("<span style='font-weight: bold'>Connaître nos stocks</span>");
    jQuery(".product-actions a:contains(Voir nos distributeurs)").before("<span style='font-weight: bold'>Trouver nos produits</span>");
  }


  // VARIATION 1

    if (jQuery("#duplicate-none").length === 0){
      jQuery(".product-actions a:contains(Trouver un distributeur)").text("Voir nos distributeurs");
      jQuery(".product-actions a:contains(Voir nos distributeurs)").after('<span id="duplicate-none" style="border-bottom: grey 2px solid; height: 1px; display: block; width: 100%; margin-top: 16px; margin-bottom: 16px;"></span>');

      jQuery(".product-actions a").css({"background-color": "#CCCCCC", "border-color": "#CCCCCC"});
      jQuery(".product-actions a:contains(Voir nos distributeurs), .product-actions a:contains(Voir la disponibilité)").css({"background-color": "#FFEB00", "border-color" : "#FFEB00"});

      jQuery(".product-actions a").css("font-size", "15px");
      jQuery(".product-actions>li").css("margin-top", "10px");

      jQuery(".product-actions a:contains(Voir la disponibilité)").before("<span style='font-weight: bold'>Connaître nos stocks</span>");
      jQuery(".product-actions a:contains(Voir nos distributeurs)").before("<span style='font-weight: bold'>Trouver nos produits</span>");
    }


xx

//CODE 

setInterval(function(){
if (jQuery("#drupal-modal--body:contains(Votre message a bien été envoyé)").length === 1 && jQuery(".trackingconversionab").length === 0){
jQuery("#drupal-modal--body:contains(Votre message a bien été envoyé)").addClass("trackingconversionab");
ABTastyClickTracking("Envoie de fichier", null, 522459);
}
}, 500);

// Regarde toute les 500 millisecondes si un message de confirmation d’envoie est détecté sur la page.

// Si c’est le cas une class est ajoutée sur l’élément.

// Si l’élément est détecté et que la class n’a pas été ajoutée (pour éviter d’envoyer plusieurs conversions pour un affichage) ça envoie une conversion “Envoie de fichier” dans le reporting en utilisant la fonction ABTastyClickTracking (bien mettre l’id du test entre les parenthèses de la fonction).

// **** Attention **** pour recetter ce tracking il faut ajouter un console.log("la conversion bidule est envoyée"); pour vérifier que le hit part bien. Ça ne remonte pas dans Ariane comme pour les autres click tracking.

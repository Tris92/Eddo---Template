$('#additemform2').after("<a class='scrollab' href='#promo_details'>Voir les détails de l'offre</a>");
// Ajout du bouton Voir les détails de l’offre
$('.promo_details').attr('id', 'promo_details'); // Ajout d’un id sur la section des détails de l’offre
$(document).ready(function () {
    $('.scrollab').on('click', function () { // Au clic sur le bouton
        var page = $(this).attr('href'); // Élément cible du scroll, ici il s’agit de l’ancre
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top - 50
        }, speed);
        return false;
    });
});

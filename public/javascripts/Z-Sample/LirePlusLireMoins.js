
//CODE

var urlab = "https://cdnjs.cloudflare.com/ajax/libs/Readmore.js/2.2.1/readmore.min.js";
jQuery.getScript(urlab, function()
{jQuery('.blog .wrap-text-to-min').readmore({
        //Vitesse d'animation
        speed: 75,
        //Bouton lire moins
        lessLink: '<a href="#" class="readmore-ab">Lire moins</a>',
        //Bouton lire plus
        moreLink: '<a href="#" class="readmore-ab">Lire plus</a>',
        //Hauteur maximum d'affichage quand le texte est plié (en pixels)
        collapsedHeight: 120
    });}
)


//EXEMPLE D'APPLICATION

// Ajouter une div qui va délimiter la zone à réduire
jQuery(".text-to-min").wrap("<div class='wrap-text-to-min'></div>")
jQuery( ".wrap-text-to-min" ).append( jQuery( ".append-ab" ) );


var urlab = "https://cdnjs.cloudflare.com/ajax/libs/Readmore.js/2.2.1/readmore.min.js";
jQuery.getScript(urlab, function()
{jQuery('.blog .wrap-text-to-min').readmore({
        //Vitesse d'animation
        speed: 75,
        //Bouton lire moins
        lessLink: '<a href="#" class="readmore-ab">Lire moins</a>',
        //Bouton lire plus
        moreLink: '<a href="#" class="readmore-ab">Lire plus</a>',
        //Hauteur maximum d'affichage quand le texte est plié (en pixels)
        collapsedHeight: 120
    });}
)

// Masquer un paragraphe vide
jQuery('.blog p:nth-of-type(2)').css("display", "none");


//xxx

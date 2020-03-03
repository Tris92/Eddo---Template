
//JS (jQUERY)

jQuery("#maincontent").append('<iframe src="https://www.illicado.com/tpe-pme/cartes-cadeaux-tpe-pme/carte-cadeau-culture.html" width="500" height="300" name="myFrame" id="myFrame"></iframe');
jQuery("#myFrame").wrap( "<div class='resp-container-ab'></div>" );

setInterval(function(){
if(jQuery("#myFrame").contents().find("#amount-label-input").length === 1){
jQuery("#myFrame").contents().find(".fotorama__img").ready(function() {
    jQuery("#myFrame").contents().find("body").css("overflow", "hidden");
});
}
var panierab = jQuery("#myFrame").contents().find(".minicart-wrapper").clone();
jQuery(".minicart-wrapper").replaceWith(panierab);
jQuery("#myFrame").contents().find("#ms-topmenu").hide();
jQuery("#myFrame").contents().find("footer").hide();
jQuery("#myFrame").contents().find("header").css("visibility", "hidden");
jQuery("#myFrame").contents().find("header").css("max-width", "0px");
jQuery("#myFrame").contents().find("header").css("max-height", "0px");
jQuery("#myFrame").contents().find(".breadcrumbs").hide();

if (window.matchMedia('(min-width: 808px)').matches){
var abhauteur = jQuery("#myFrame").contents().find(".column.main").height();

var abhauteura = jQuery("#myFrame").contents().find(".crosssell-product-list").height();

var abhauteurb = (abhauteur + abhauteura) - 200;

jQuery('.resp-container-ab').css('padding-top', abhauteurb);}


if (window.matchMedia('(max-width: 807px)').matches){
var abhauteurc = jQuery("#myFrame").contents().find(".column.main").height();

var abhauteurd = jQuery("#myFrame").contents().find(".crosssell-product-list").height();

var abhauteure = (abhauteurc + abhauteurd) - 400;

jQuery('.resp-container-ab').css('padding-top', abhauteure);}

    }, 2000);


//  CSS

iframe {
    width: 100%;
    border: none;
    overflow: visible;
    height: 100%;
    top: 0;
    position: absolute;
    left: 0;
}
.resp-container-ab {
    position: relative;
    overflow: hidden;
}


// COMMENTAIRES SEBASTIEN

// la partie:
"
if (window.matchMedia('(min-width: 808px)').matches){
  var abhauteur = jQuery("#myFrame").contents().find(".column.main").height();
  var abhauteura = jQuery("#myFrame").contents().find(".crosssell-product-list").height();
  var abhauteurb = (abhauteur + abhauteura) - 200;
  jQuery('.resp-container-ab').css('padding-top', abhauteurb);
}
"

// sert à adapter la hauteur de l'iframe à son contenu, c'est à dire pour rendre l'iframe responsive.

// On additionne la hauteur des contenus de l'iframe pour déterminer la hauteur de l'iframe. Les soustractions de quleques centaines de pixels selon les devices permettent de réduire l'espace blanc entre l'iframe et le reste de la page (footer dans ce cas).

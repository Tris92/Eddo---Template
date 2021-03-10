//Choix couleurs générale

setInterval(function() {

if (jQuery(".ttcouleursab").length === 0){
jQuery(".switcher-field.switcher-lulli_couleur label").wrapAll("<div class='ttcouleursab'></div>");

jQuery(".ttcouleursab").hide();
jQuery("dt.swatch-attr:contains(Choisissez la Couleur :)").hide();
jQuery(".ttcouleursab").before("<div class='conteneur-couleursab'><div class='choixcouleursab'>CHOISISSEZ LA COULEUR :</div><div class='guidecouleursab'><a href='#' class=\"btn-guide--color\">Voir le guide des couleurs</a></div></div>");

  //faire apparaitre le guide couleur
  if(jQuery("div[id*='color-guide']").length === 1) {
    jQuery('.btn-guide--color').on('click', function(){
      jQuery("dl.last dt").has("div[id*='color-guide']").show();
      jQuery("dl.last dt").has("div[id*='color-guide']").children().show();
      jQuery("dl.last dt").has("div[id*='color-guide']").find("label").hide();
    });
  } else(jQuery("div[id*='color-guide']").length === 0) {
    jQuery('.btn-guide--color').hide();
  }

jQuery(".ttcouleursab").before("<div class='nbcouleursab'><span></span><span></span></div>");
var nbcouleurs = jQuery(".ttcouleursab label").length;
jQuery(".nbcouleursab span:eq(0)").text(""+nbcouleurs+" couleurs disponibles");
jQuery(".nbcouleursab span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='width: 7px;'/>");
jQuery(".nbcouleursab span:eq(0)").css({"max-width":"140px", "float":"left", "font-size":"10px", "padding-top":"6px", "padding-left":"5px", "height":"27px"});
jQuery(".nbcouleursab span:eq(1)").css({"max-width":"10px", "float":"right", "padding-top":"3px", "margin-right":"4px", "height":"27px"});
jQuery(".nbcouleursab span:eq(1)").css("font-size", "0.7rem");

jQuery(".nbcouleursab").click(function() {
  if(jQuery(".ttcouleursab:visible").length === 0){
    jQuery(".ttcouleursab").show();
    jQuery(".ttcouleursab").css("height", "auto");
    jQuery(".ttcouleursab").css("max-height", "250px");
    jQuery(".nbcouleursab span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/up-arrow.png' style='width: 7px;' />");
    jQuery(".nbcouleursab span:eq(1)").css("font-size", "0.7rem");
    jQuery(".ttcouleursab").css("margin-bottom", "1px solid black");
}
    else{jQuery(".ttcouleursab").hide(); jQuery(".ttcouleursab").css("height", "auto"); jQuery(".ttcouleursab").css("margin-bottom", "0px"); jQuery(".nbcouleursab span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='width: 7px;'/>");}
});

jQuery("body").append("<style>.product-view .product-options dl dd .switcher-field label{display:block; float:none; border: none;}.ttcouleursab{height: auto; overflow-y: scroll; border-bottom: 1px solid black; border-right: 1px solid black; border-left: 1px solid black; position: absolute; z-index: 55; background: white; width: 100%;} .choixcouleursab{font-size:11px; letter-spacing: 0.08em; font-weight: 700;} .guidecouleursab {font-size: 11px; font-weight: 900; color: #888888;} .conteneur-couleursab {margin-top: 30px;} .nbcouleursab{border: 1px solid black; margin-top:15px; height:27px;} .ttcouleursab label {font-size: 0.7em !important;} /**div[class*='taille'] label.switcher-label{border: 1px solid #e7e9ea !important; color: #696e72 !important;} .product-view .product-options dl dd .switcher-field label.selected {border-color: black !important; color: #696e72 !important; font-weight: 700; border-width: 2px !important;} **/</style>");

jQuery(".ttcouleursab label").click(function() {
    console.log("ok abb");
    var nomcouleureselect = jQuery(this).text();
    jQuery(".ttcouleursab").hide();
    jQuery(".nbcouleursab span:eq(0)").text(""+nomcouleureselect+"");
    jQuery(".nbcouleursab span:eq(0)").css("text-transform", "uppercase");
    jQuery(".nbcouleursab span:eq(0)").css("color", "#696e72");
    jQuery(".nbcouleursab span:eq(0)").css("text-align", "center");
    jQuery(".nbcouleursab span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='width: 7px;' />");
  });
 }
}, 150);

/**Choix tailles**/

setInterval(function() {

if (jQuery(".tttaillesab").length === 0){
jQuery(".switcher-field.switcher-lulli_taillenum label").wrapAll("<div class='tttaillesab'></div>");

jQuery(".tttaillesab").hide();
jQuery("dt.swatch-attr label:contains(Choisissez la Taille :)").hide();
jQuery(".tttaillesab").before("<div class='conteneur-taillesab'><div class='choixtaillesab'>CHOISISSEZ LA TAILLE :</div><div class='guidetaillessab'><a href='#' class=\"btn-guide--size\" onclick='$(\"cart-modal-size-guide >\").show();'>Voir le guide des tailles</a></div></div>");
jQuery(".tttaillesab").before("<div class='nbtaillesab'><span></span><span></span></div>");
var nbtailless = jQuery(".tttaillesab label").length;
jQuery(".nbtaillesab span:eq(0)").text(""+nbtailless+" tailles disponibles");
jQuery(".nbtaillesab span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='width: 7px;' />");
jQuery(".nbtaillesab span:eq(1)").css("font-size", "0.7rem");
jQuery(".nbtaillesab span:eq(0)").css({"max-width":"140px", "float":"left", "font-size":"10px", "padding-top":"6px", "padding-left":"5px", "height":"27px"});
jQuery(".nbtaillesab span:eq(1)").css({"max-width":"10px", "float":"right", "padding-top":"3px", "margin-right":"4px", "height":"27px"});

jQuery(".nbtaillesab").click(function() {
  if(jQuery(".tttaillesab:visible").length === 0){jQuery(".tttaillesab").show(); jQuery(".tttaillesab").css("height", "auto"); jQuery(".tttaillesab").css("max-height", "250px"); jQuery(".nbtaillesab span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/up-arrow.png' style='width: 7px;' />"); jQuery(".tttaillesab").css("margin-bottom", "1px solid black");}
    else{jQuery(".tttaillesab").hide(); jQuery(".tttaillesab").css("height", "auto"); jQuery(".tttaillesab").css("margin-bottom", "0px"); jQuery(".nbtaillesab span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='width: 7px;' />");}
});

//faire apparaitre le guide couleur
if(jQuery("div[id*='size-guide']").length === 0) {
  jQuery('.btn-guide--size').hide();
}

jQuery(".tttaillesab label").click(function() {
    var nomtailleselect = jQuery(this).text();
    jQuery(".tttaillesab").hide();
    jQuery(".nbtaillesab span:eq(0)").text(""+nomtailleselect+"");
    jQuery(".nbtaillesab span:eq(0)").css("text-transform", "uppercase");
    jQuery(".nbtaillesab span:eq(0)").css("color", "#696e72");
    jQuery(".nbtaillesab span:eq(0)").css("text-align", "center");
    jQuery(".nbtaillesab span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='width: 7px;' />");

});


jQuery("body").append("<style>.product-options .last .last .switcher-field.switcher-lulli_taille_bijoux{display:none!important;}.tttaillesab{height: auto; overflow-y: scroll; border-bottom: 1px solid black; border-right: 1px solid black; border-left: 1px solid black; position: absolute; z-index: 55; background: white; width: 100%;} .choixtaillesab{font-size:11px; letter-spacing: 0.08em; font-weight: 700;} .guidetaillessab {font-size: 11px; font-weight: 900; color: #888888;} .conteneur-taillesab {margin-top: 30px;} .nbtaillesab{border: 1px solid black; margin-top:15px; height:27px;} .tttaillesab label {font-size: 0.7em !important;} .lulli-guide-link{display:none !important;} /**div[class*='taille'] label.switcher-label{border: 1px solid #e7e9ea !important; color: #696e72 !important;} .product-view .product-options dl dd .switcher-field label.selected {border-color: black !important; color: #696e72 !important; font-weight: 700; border-width: 2px !important;} **/</style>");

jQuery("dd").has(".choixcouleursabor").height(60);

if(jQuery(".tttaillesab label").length === 1){jQuery(".nbtaillesab span:eq(0)").text("1 taille disponible");}

jQuery("dd").has(".nbtaillesab").css("display", "block");
jQuery("dd").has(".nbtaillesab").css("width", "159px");
jQuery("dd").has(".nbtaillesab").css("margin", "auto");

}
}, 100);
/**fin choix tailles**/



setInterval(function() {

if (jQuery(".ajouttailleab").length === 0){
jQuery(".linked-products").has("span:contains(Choisissez la Taille :)").find("li a[href*=17-cm] img").css("display", "none");
jQuery(".linked-products").has("span:contains(Choisissez la Taille :)").find("li a[href*=17-cm]").append('<span style="margin-bottom: 0px; padding-left: 5px; padding-right: 5px; color: #888888;" class="ajouttailleab">17 CM</span>');
jQuery(".linked-products").has("span:contains(Choisissez la Taille :)").find("li a[href*=19-cm] img").css("display", "none");
jQuery(".linked-products").has("span:contains(Choisissez la Taille :)").find("li a[href*=19-cm]").append('<span style="margin-bottom: 0px; padding-left: 5px; padding-right: 5px; color: #888888;" class="ajouttailleab">19 CM</span>');


if (window.location.href.indexOf("19-cm") > -1){jQuery(".linked-products").has("span:contains(Choisissez la Taille :)").find("li.current a img").css("display", "none");
jQuery(".linked-products").has("span:contains(Choisissez la Taille :)").find("li.current a").append('<span style="margin-bottom: 0px; padding-left: 5px; padding-right: 5px; color: #888888;" class="ajouttailleab">19 CM</span>');}

if (window.location.href.indexOf("17-cm") > -1){jQuery(".linked-products").has("span:contains(Choisissez la Taille :)").find("li.current a img").css("display", "none");
jQuery(".linked-products").has("span:contains(Choisissez la Taille :)").find("li.current a").append('<span style="margin-bottom: 0px; padding-left: 5px; padding-right: 5px; color: #888888;" class="ajouttailleab">17 CM</span>');}

}
}, 90);
jQuery(".ttcouleursab label").click(function() {
    var nomcouleurselect = jQuery(this).text();
    jQuery(".ttcouleursab").hide();
    jQuery(".nbcouleursab span:eq(0)").text(""+nomcouleurselect+"");
    jQuery(".nbcouleursab span:eq(0)").css("text-transform", "uppercase");
    jQuery(".nbcouleursab span:eq(0)").css("color", "#696e72");
    jQuery(".nbcouleursab span:eq(0)").css("text-align", "center");
    jQuery(".nbcouleursab span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='width: 7px;' />");
jQuery(".nbcouleursab span:eq(1)").css("font-size", "0.7rem");

});


//Réduction espaces entre les deux choix de couleurs
jQuery(".product-view .product-options dl dt.swatch-attr").css('margin-top', '0px');



//Choix couleur or

setInterval(function(){
    if(jQuery(".switcher-field.switcher-lulli_couleur_or label").length > 0 && jQuery(".nbcouleursabor").length === 0){
jQuery(".switcher-field.switcher-lulli_couleur_or label").wrapAll("<div class='ttcouleursabor'></div>");

jQuery(".ttcouleursabor").hide();
jQuery("dt.swatch-attr label:contains(Choisissez la Couleur Or :)").hide();
jQuery(".ttcouleursabor").before("<div class='conteneur-couleursabor'><div class='choixcouleursabor'>CHOISISSEZ LA COULEUR OR :</div></div>");
jQuery(".ttcouleursabor").before("<div class='nbcouleursabor'><span></span><span></span></div>");
var nbcouleursor = jQuery(".ttcouleursabor label").length;
jQuery(".nbcouleursabor span:eq(0)").text(""+nbcouleursor+" couleurs disponibles");
jQuery(".nbcouleursabor span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='width: 7px;' />");
jQuery(".nbcouleursabor span:eq(1)").css("font-size", "0.7rem");
jQuery(".nbcouleursabor span:eq(0)").css({"max-width":"140px", "float":"left", "font-size":"10px", "padding-top":"6px", "padding-left":"5px", "height":"27px"});
jQuery(".nbcouleursabor span:eq(1)").css({"max-width":"10px", "float":"right", "padding-top":"3px", "margin-right":"4px", "height":"27px"});

jQuery(".nbcouleursabor").click(function() {
  if(jQuery(".ttcouleursabor:visible").length === 0){jQuery(".ttcouleursabor").show(); jQuery(".ttcouleursabor").css("height", "auto"); jQuery(".nbcouleursabor span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/up-arrow.png' style='width: 7px;' />"); jQuery(".ttcouleursabor").css("margin-bottom", "1px solid black");}
    else{jQuery(".ttcouleursabor").hide(); jQuery(".ttcouleursabor").css("margin-bottom", "0px"); jQuery(".nbcouleursabor span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='width: 7px;' />");}
});


jQuery("body").append("<style>.product-view .product-options dl dd .switcher-field label{display:block; float:none; border: none;}.ttcouleursabor{height: auto; overflow-y: scroll; border-bottom: 1px solid black; border-right: 1px solid black; border-left: 1px solid black; position: absolute; z-index: 55; background: white; width: 100%;} .choixcouleursabor{font-size:11px; letter-spacing: 0.08em; font-weight: 700;} .conteneur-couleursabor {margin-top: 17px;} .nbcouleursabor{border: 1px solid black; margin-top:15px; height:27px;}</style>");


jQuery(".ttcouleursabor label").click(function() {
    var nomcouleurselector = jQuery(this).text();
    jQuery(".ttcouleursabor").hide();
    jQuery(".nbcouleursabor span:eq(0)").text(""+nomcouleurselector+"");
    jQuery(".nbcouleursabor span:eq(0)").css("text-transform", "uppercase");
    jQuery(".nbcouleursabor span:eq(0)").css("color", "#696e72");
    jQuery(".nbcouleursabor span:eq(0)").css("text-align", "center");
    jQuery(".nbcouleursabor span:eq(1)").html("<img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='width: 7px;' />");

});
 }

if (jQuery(".linked-products span:contains(Choisissez le modèle :)").length > 0 ){
jQuery("label.required:contains(Choisissez la Taille :)").hide();

jQuery(".linked-products span:contains(Choisissez le modèle :)").text("Choisissez la Taille :");
jQuery(".switcher-field.switcher-lulli_taillenum, .switcher-field.switcher-lulli_taille_bijoux").hide();
}

//hide 'choisir taille' si taille présente dans le h1

if (window.location.href.indexOf("cm") > 0){ //cible les éléments de l'url
  jQuery('dd.last').hide();
}

}, 200);

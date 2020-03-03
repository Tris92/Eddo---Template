
// CHAUSPORT MESSAGE D'URGENCE


var minNumber = 3;
var maxNumber = 15;
var randomNumber = Math.floor(Math.random() * (maxNumber - 3) + minNumber);
jQuery('.hide640 P').addClass('.text-hide640');
setTimeout(function() {
    if (jQuery(".text-hide640").length === 1){
      jQuery(".right-col .price-box").after("</div><img src=\"https://www.eddo.fr/wp-content/uploads/2019/12/flame.png\" style=\"height:25px; width: 25px;\"><span style=\"font-size:14px; margin-left: 4px; vertical-align: middle; margin-botom: 5px;\"><span style=\"color:#e74c3c\"><strong>"+ randomNumber + " personnes ont consult&eacute; ce produit r&eacute;cemment</strong></span></span></div>");
    } else {
      jQuery('.right-col #product_addtocart_form').prepend("</div><img src=\"https://www.eddo.fr/wp-content/uploads/2019/12/flame.png\" style=\"height:25px; width: 25px;\"><span style=\"font-size:14px; margin-left: 4px; vertical-align: middle; margin-botom: 5px;\"><span style=\"color:#e74c3c\"><strong>"+ randomNumber + " personnes ont consult&eacute; ce produit r&eacute;cemment</strong></span></span></div>")
    }
}, 200)



(function() {
//c'est comme si on était en global sauf que les variables sont pas globales
//Donc là tu déclare ta fonction
function fct(){}
//tu lance l'interval en stockant la valeur de retour
var id = window.setInterval(fct, 1000);
//et on va dire que tu l'enlève au clic sur le body mais tu fais ce que tu veux avec la variable
document.body.onclick = function() {
    window.clearInterval(id);
};
}());


$("div").click(function(event){
    alert("This is : " + $(this).text());
    event.stopPropagation();
});


setInterval(function() {
    if (jQuery(".product-card-content").hasClass("hide640")) {
    jQuery(".right-col .price-box").after("</div><img src=\"https://www.eddo.fr/wp-content/uploads/2019/12/flame.png\" style=\"height:25px; width: 25px;\"><span style=\"font-size:14px; margin-left: 4px; vertical-align: middle; margin-botom: 5px;\"><span style=\"color:#e74c3c\"><strong>"+ randomNumber + " personnes ont consult&eacute; ce produit r&eacute;cemment</strong></span></span></div>");
  }
}, 100);

setInterval(function() {
  if (jQuery(".product-card-content").hasClass("new-search-button")) {
    jQuery('.right-col #product_addtocart_form').prepend("</div><img src=\"https://www.eddo.fr/wp-content/uploads/2019/12/flame.png\" style=\"height:25px; width: 25px;\"><span style=\"font-size:14px; margin-left: 4px; vertical-align: middle; margin-botom: 5px;\"><span style=\"color:#e74c3c\"><strong>"+ randomNumber + " personnes ont consult&eacute; ce produit r&eacute;cemment</strong></span></span></div>")
  }
}, 100);




if (jQuery(".a-label:contains(Sélectionnez le modèle de votre véhicule)").length === 1 && jQuery(".dropdownab").length === 0) {

  setInterval(function() {
      if (jQuery(".right-col").hasClass("hide640")) {
      jQuery(".right-col .price-box").after("</div><img src=\"https://www.eddo.fr/wp-content/uploads/2019/12/flame.png\" style=\"height:25px; width: 25px;\"><span style=\"font-size:14px; margin-left: 4px; vertical-align: middle; margin-botom: 5px;\"><span style=\"color:#e74c3c\"><strong>"+ randomNumber + " personnes ont consult&eacute; ce produit r&eacute;cemment</strong></span></span></div>");
    } else {
      jQuery('.left-col #product_addtocart_form').prepend("</div><img src=\"https://www.eddo.fr/wp-content/uploads/2019/12/flame.png\" style=\"height:25px; width: 25px;\"><span style=\"font-size:14px; margin-left: 4px; vertical-align: middle; margin-botom: 5px;\"><span style=\"color:#e74c3c\"><strong>"+ randomNumber + " personnes ont consult&eacute; ce produit r&eacute;cemment</strong></span></span></div>")
    }
  }, 200);
}

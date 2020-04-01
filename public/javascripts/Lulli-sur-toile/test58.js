if (!window.abt557055) {
  window.abt557055 = true;
jQuery("li.item").each(function(index, el) {
  var lienab = jQuery(this).find("a").attr("href");
  jQuery(this).find(".price-box").after("<a href='"+lienab+"' class='btn-ab'><span>Voir ce produit</span><img style='margin-left:10px; vertical-align: sub;' src='https://www.eddo.fr/wp-content/uploads/2020/03/flèche.png'></a>")
});
}

//CSS

.products-grid .item:hover .product-image {
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
            transform: scale(1.1);
}

a.btn-ab {
    background: black;
    color: white;
    padding: 8px;
    margin-top: 5px;
    display: block;
    max-width: 150px;
    margin-left: auto;
    margin-right: auto;
    text-transform: uppercase;
}

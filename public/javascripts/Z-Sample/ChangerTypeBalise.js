//CODE

//ici transforme l'élément avec la class .col-product-media en <li>

var attribute = { };

jQuery.each(jQuery(".col-product-media")[0].attributes, function(id, atr) {
    attribute[atr.nodeName] = atr.nodeValue;
});
jQuery(".col-product-media").replaceWith(function () {
    return jQuery("<li />",
        attribute).append(jQuery(this).contents());
});

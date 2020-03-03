setInterval(function(){
    if ( (jQuery('#lienabpanier').length > 0) && (jQuery('.fixed-to-top').height() > 65)){
     jQuery('#lienabpanier').show();
    }
    else if ((jQuery('#lienabpanier').length > 0) && (jQuery('.fixed-to-top').length === 0)){
    jQuery('#lienabpanier').hide();
}
    else if ((jQuery('#lienabpanier').length === 0) && (jQuery('.fixed-to-top').length > 0)) {
         jQuery(".line.box-mod.collection.hide640").append("<a id='lienabpanier' href='https://www.chausport.com/checkout/cart/'><span class='lien-wording-ab'>Mon panier</span></a>");
            jQuery('#lienabpanier').show();
    }
}, 1000);

//déplacement couleurs avant prix
jQuery(".colors").each(function() {
  jQuery(this).parent('.product-list--details.product-list--details--simple-product').find(".product-list--description--simple-product").before(this);
});

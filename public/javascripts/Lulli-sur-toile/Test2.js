
setTimeout( function(){
  if (window.matchMedia('(min-width: 992px)').matches){
  setInterval( function(){
    jQuery('.item-count').css({'color': 'black', 'font-size': '12px'});
  }, 100)
    jQuery('.header .links li.cart.not-empty>a').css({'background': 'url("https://www.eddo.fr/wp-content/uploads/2020/02/panier-noir-lulli-2.png") no-repeat', 'width': '36px'});
  }
  if (window.matchMedia('(max-width: 420px)').matches){
    jQuery('.item-count').css({'color': 'black', 'font-size': '12px', 'margin-left': '-14px', 'margin-top': '8px', 'top': '3px'});
    jQuery('.top-line .links li.cart>a').css({'background': 'url("https://www.eddo.fr/wp-content/uploads/2020/02/panier-noir-lulli-2.png") no-repeat', 'width': '36px'});
    jQuery('.item-count').append('<p class="panierTitle">PANIER</p>');
    jQuery('.panierTitle').css({'color': 'black', 'font-weight': '600', 'font-size': '8px', 'margin-top': '-13px'});
  }
}, 100)

if (!window.abt600291 && jQuery('.hamburger-box:visible')) {
window.abt600291 = true;
jQuery('.dropdown-toggle:eq(2)').remove();
jQuery('.dropdown.dropdown-wide:eq(2)').append('<a href="#" class="dropdown-toggle">Services <span class="caret"></span></a><div class="dropdown-menu"><div class="container"><div class="row"><div class="col-sm-12">TEST</div></div></div></div>');
jQuery('.col-sm-12:eq(0)').empty();
jQuery('.col-sm-12:eq(0)').append('<div class="dropdown-services-mobile"> <ul class="parent-item parent-item-flex"> Nos distributeurs <img class="img-item" src="https://www.eddo.fr/wp-content/uploads/2019/12/distributeurs.png" alt=""> </ul> <ul class="parent-item"> Nos applications Weber <img class="img-item-carret" src="https://www.eddo.fr/wp-content/uploads/2020/06/down-arrow.png" alt=""> <li class="child-item"> Weber design </li><li class="child-item"> Weber Color </li><li class="child-item"> Saint Gobain Weber </li></ul> <ul class="parent-item"> Nos formations <img class="img-item-carret" src="https://www.eddo.fr/wp-content/uploads/2020/06/down-arrow.png" alt=""> <li class="child-item"> Weber design </li><li class="child-item"> Weber Color </li><li class="child-item"> Saint Gobain Weber </li></ul> <ul class="parent-item"> Nos services <img class="img-item-carret" src="https://www.eddo.fr/wp-content/uploads/2020/06/down-arrow.png" alt=""> <li class="child-item"> Weberdispo <img class="img-item-li" src="https://www.eddo.fr/wp-content/uploads/2020/06/down-arrow.png" alt=""> </li><li class="child-item"> Weberlogistique <img class="img-item-li" src="https://www.eddo.fr/wp-content/uploads/2020/06/down-arrow.png" alt=""> </li><li class="child-item"> Weberfloor <img class="img-item-li" src="https://www.eddo.fr/wp-content/uploads/2020/06/down-arrow.png" alt=""> </li><li class="child-item"> Webercollect <img class="img-item-li" src="https://www.eddo.fr/wp-content/uploads/2020/06/down-arrow.png" alt=""> </li><li class="child-item"> Weberspace <img class="img-item-li" src="https://www.eddo.fr/wp-content/uploads/2020/06/down-arrow.png" alt=""> </li><li class="child-item"> Weberassistance <img class="img-item-li" src="https://www.eddo.fr/wp-content/uploads/2020/06/down-arrow.png" alt=""> </li></ul> <ul class="parent-item"> Nos ressources <img class="img-item-carret" src="https://www.eddo.fr/wp-content/uploads/2020/06/down-arrow.png" alt=""> <li class="child-item"> Weberdispo </li><li class="child-item"> Weberlogistique </li><li class="child-item"> Weberfloor </li><li class="child-item"> Webercollect </li></ul></div>');
var ouvert = false;
console.log(ouvert);
if ( ouvert !== true) {
jQuery('.dropdown-toggle:eq(2)').click(function(){
jQuery('.dropdown-menu:eq(2)').toggle();
ouvert = true;
console.log(ouvert);
});
}
if (ouvert !== false)
 {
console.log(ouvert);
jQuery('.dropdown-toggle:eq(0), .dropdown-toggle:eq(1), .dropdown-toggle:eq(3), .dropdown-toggle:eq(4), .dropdown-toggle:eq(5), .dropdown-toggle:eq(6), .dropdown-toggle:eq(7)').click(function(){
jQuery('.dropdown-menu:eq(2)').toggle();
});
ouvert = false;
console.log(ouvert);
}
jQuery('.parent-item').click(function(){
jQuery(this).addClass('clicked');
jQuery('.clicked .child-item').toggle('visible');
jQuery('.parent-item.clicked').removeClass('clicked');
});
}

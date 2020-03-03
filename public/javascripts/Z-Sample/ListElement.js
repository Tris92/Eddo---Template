jQuery(".hotelBrand").removeAttr("onclick");
// hotelsListGrid: element qui contient toute la liste et sur lequel on va écouter s'il ya des clics, alternative au set interval, permet de déclencher le code meme s'il y a des changements dynamiques à l'intérieur de hotelsListGrid
// hotelBrand: element sur lequel on veut changer le comportement du clic, et sur lequel on va déclencher la fonction
jQuery(".hotelsListGrid").on('click', '.hotelBrand', function (event) {
  event.preventDefault();
  // enleve le comportement par defaut du html (ex : href d'un lien a) pour l'élement sur lequel l'écouteur d'événement est mis (ici hotellistgrid)
  // event.stopPropagation();
  // empeche la propagation de l'evenement (c'est à dire si ce n'est pas mis un evenement ici clic va etre détecté par le javascript lorque l'évenment var remonter jusqu'au body puis redescendre jusqu'à notre élement hotelbrand. donc s'il y a des écouteurs de clic plus haut sur la page ils seront activés (c'est le comportement natif appelé "propargation des évenements dans le dom"). Pour empêcher cela le stopPropagation arrête la remonté de l'évenement à l'élément écouté (ici hotelsListGrid)
  var href = jQuery(this).parent('.hotelsListItem').find('.hotelTypeDescription a').attr('href');
  window.open(href);
  // dans un nouvel onglet
  // window.location = href; // dans le meme onglet
  return false;
  // enleve le comportement par defaut du html (ex : href d'un lien a)
});

//hotelListItem : le nom du parent le plus haut commun  aux deux éléments (l'élement cliqué et l'élément avec le lien à réuitliser) et qui ne contient pas d'autre item de liste, important pour bien matcher l'élement cliqué avec l'élement qui contient le lien à utiliser au clic.

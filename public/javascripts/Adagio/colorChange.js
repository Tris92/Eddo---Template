https://www.adagio-city.com/fr/offres/3-nuit-pour-le-prix-de-2.shtml?abtestSearchBar
https://www.adagio-city.com/fr/yes-weekend.shtml?abtestSearchBar
https://www.adagio-city.com/gb/offers/3-night-for-2.shtml?abtestSearchBar
https://www.adagio-city.com/de/angebote/3-nachtes-zum-2.shtml?abtestSearchBar

setInterval(function() {
  if(jQuery('.newSvgAb').length === 0){
    jQuery('.header-search__search-icon').empty();
      jQuery('.header-search__search-icon').append('<svg class="newSvgAb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 22.5" version="1.1" x="0px" y="0px"><path fill="#e35107" d="M12.076923,7.76923077 C12.076923,6.5833274 11.655453,5.56891447 10.8125,4.72596154 C9.969547,3.88300861 8.955134,3.46153846 7.769231,3.46153846 C6.583327,3.46153846 5.568914,3.88300861 4.725962,4.72596154 C3.883009,5.56891447 3.461538,6.5833274 3.461538,7.76923077 C3.461538,8.95513413 3.883009,9.96954707 4.725962,10.8125 C5.568914,11.6554529 6.583327,12.0769231 7.769231,12.0769231 C8.955134,12.0769231 9.969547,11.6554529 10.8125,10.8125 C11.655453,9.96954707 12.076923,8.95513413 12.076923,7.76923077 L12.076923,7.76923077 L12.076923,7.76923077 Z M17,15.7692308 C17,16.1025658 16.878206,16.3910244 16.634615,16.6346154 C16.391024,16.8782063 16.102566,17 15.769231,17 C15.423075,17 15.134617,16.8782063 14.903846,16.6346154 L11.605769,13.3461538 C10.458328,14.1410296 9.179494,14.5384615 7.769231,14.5384615 C6.85256,14.5384615 5.975966,14.3605787 5.139423,14.0048077 C4.30288,13.6490367 3.581734,13.1682723 2.975962,12.5625 C2.370189,11.9567277 1.889425,11.2355811 1.533654,10.3990385 C1.177883,9.56249582 1,8.68590202 1,7.76923077 C1,6.85255952 1.177883,5.97596572 1.533654,5.13942308 C1.889425,4.30288043 2.370189,3.5817338 2.975962,2.97596154 C3.581734,2.37018928 4.30288,1.88942486 5.139423,1.53365385 C5.975966,1.17788284 6.85256,1 7.769231,1 C8.685902,1 9.562496,1.17788284 10.399038,1.53365385 C11.235581,1.88942486 11.956728,2.37018928 12.5625,2.97596154 C13.168272,3.5817338 13.649037,4.30288043 14.004808,5.13942308 C14.360579,5.97596572 14.538462,6.85255952 14.538462,7.76923077 C14.538462,9.17949423 14.14103,10.4583276 13.346154,11.6057692 L16.644231,14.9038462 C16.881411,15.1410268 17,15.4294855 17,15.7692308 L17,15.7692308 L17,15.7692308 Z"/></svg>');
    //CSS de l'icone et bouton
    jQuery('.newSvgAb').css({'width': '22px', 'height': '27px','margin-top': '-2px'});
    jQuery('.search-widget .search-home .header-search').css({'border': '2px solid #e35107'});
    jQuery('.wrapper .header-search__search-button').css({'background-color': '#e35107'});
  }
}, 100)


// if (window.matchMedia('(max-width: 1023px)').matches){
//   jQuery('#header-search-field').append('<input class="header-search__search-button" type="button" value="Search" style="background-color: rgb(227, 81, 7);">');
//   jQuery('.search-widget .search-home .header-search__search-button').css({''})
// }

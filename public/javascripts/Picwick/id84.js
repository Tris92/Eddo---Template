// var stopintervalab = true;
// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
// setTimeout(function() {
//   jQuery('.Products-grid').css({'display':'block'});
//   jQuery('.Products-sidebar').css({'width':'calc(100% - 3.5rem - .01px)'});
//   jQuery('.Products-main').css({'width':'calc(100% - 3.5rem - .01px)', 'margin-top': '-47px'});
//   jQuery('.FacetExtras').css({'width': '100%', 'flex-direction': 'row-reverse', 'display': 'flex', 'align-items': 'flex-end', 'margin-top': '6px', 'margin-bottom': '20px'});
//   jQuery('.Products-listItem').css({'width': '24.4%'});
//   jQuery('.FacetsList').css({'display': 'flex', 'justify-content': 'flex-start', 'margin-bottom': '33px', 'margin-top': '-82px'});
//   jQuery('.ListBanner').wrap('<div class="banniereAb"></div>');
//   var newBanner = jQuery('.banniereAb').html();
//   jQuery('.ProductFacets').before('<div>'+ newBanner +'</div>');
//   jQuery('.banniereAb').remove();
//   jQuery('.ActiveFacets-list').css({'display': 'flex'});
//   jQuery('.FacetsList-facet').css({'margin': '3rem 20px 3rem 0'});
//   jQuery('.ListHeader-bottom').css({'display': 'flex'});
//   jQuery('.ListHeader-bottom .Breadcrumb').css({'margin-bottom': '.1rem', 'padding-top': '10px'});
//   jQuery('.FacetsList-headState').css({'margin-left': '10px'});
//   jQuery('.FacetExtras').before('<div class="titleFilters"><b>Affinez vos résultats avec les filtres : </b></div>');
//   jQuery('.titleFilters').css({'font-size': '1.2rem', 'font-family': 'Montserrat,Arial,sans-serif', 'line-height': '1.1667', 'margin-right': '56%', 'padding-bottom': '5px', 'width': '50%', 'margin-top': '20px'});
//   jQuery('.FacetExtras-item').css({'max-width': '248px'});
//   jQuery('.FacetExtras-item:eq(1)').css({'margin-right': '6px'});
//   jQuery('.ListHeader').css({'margin-top': '-90px'});
// }, 100);
// setInterval(function() {
//   jQuery(".Switch-input:eq(0)").click(function() {
//     if(jQuery(".Switch--checked:visible").length === 0){
//       jQuery('.Products-main').css({'margin-top': '70px'});
//     } else {
//       jQuery('.Products-main').css({'margin-top': '-47px'});
//       jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
//     }
//   });
// }, 100);
// setInterval(function() {
//   jQuery(".Switch-input:eq(1)").click(function() {
//     if(jQuery(".Switch--checked:visible").length === 0){
//       jQuery('.Products-main').css({'margin-top': '70px'});
//       jQuery('.titleFilters').hide();
//     } else {
//       jQuery('.Products-main').css({'margin-top': '-47px'});
//       jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
//       jQuery('.titleFilters').show();
//     }
//   });
// }, 100);
// setTimeout(function() {
//   if(jQuery(".Switch-input:eq(1).Switch--checked:visible").length === 0 && jQuery(".Switch-input:eq(0).Switch--checked:visible").length === 0){
//     jQuery('.Products-main').css({'margin-top': '70px'});
//     jQuery('.titleFilters').hide();
//   } else {
//     jQuery('.Products-main').css({'margin-top': '-47px'});
//     jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
//     jQuery('.titleFilters').show();
//   }
// }, 100);
// setInterval(function() {
//   jQuery(".Switch-input:contains(Voir nos coups de coeur)").click(function() {
//     if(jQuery(".Switch--checked:visible").length === 0){
//       jQuery('.Products-main').css({'margin-top': '0px'});
//     } else {
//       jQuery('.Products-main').css({'margin-top': '-47px'});
//     }
//   });
// }, 100);
// setInterval(function() {
//   if(jQuery('.FacetsList-facet').hasClass("Collapse--expanded") > 0) {
//       jQuery('.FacetsList-facet:eq(4) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
//     } else {
//       jQuery('.FacetsList-facet UL:eq(4)').css({'overflow': 'unset'});
//     }
// }, 100);
// setInterval(function() {
//   if(jQuery('.FacetsList-facet:eq(3) UL LI').length >= 4) {
//       jQuery('.FacetsList-facet:eq(3) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
//     } else {
//       jQuery('.FacetsList-facet:eq(3) UL').css({'overflow': 'unset'});
//     }
// }, 150);
// setInterval(function() {
//   if(jQuery('.FacetsList-facet:eq(2) UL LI').length >= 4) {
//       jQuery('.FacetsList-facet:eq(2) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
//     } else {
//       jQuery('.FacetsList-facet:eq(2) UL').css({'overflow': 'unset'});
//     }
// }, 200);
//
// setInterval(function() {
//   if(jQuery('.FacetsList-facet:eq(0) UL LI').length >= 4) {
//       jQuery('.FacetsList-facet:eq(0) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
//     } else {
//       jQuery('.FacetsList-facet:eq(0) UL').css({'overflow': 'unset'});
//     }
// }, 250);




// FORMAT SEB

document.querySelector('.ListHeader').appendChild(document.createElement('section'));
document.querySelector('.ListHeader section').classList.add("banniereAb");
var newBanner = document.querySelector('.banniereAb').innerHTML;
var divToAdd = document.createElement("div");
document.querySelector('.ProductFacets').insertAdjacentElement('beforebegin', divToAdd);
document.querySelector('.banniereAb').parentNode.removeChild(document.querySelector('.banniereAb'));


var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

jQuery(".Products-grid").prepend(jQuery(".ListBanner"));

setInterval(function() {
  jQuery(".Switch-input:eq(0)").click(function() {
    if(jQuery(".Switch--checked:visible").length === 0){
      jQuery('.Products-main').css({'margin-top': '70px'});
    } else {
      jQuery('.Products-main').css({'margin-top': '-47px'});
      jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
    }
  });
}, 30);

setInterval(function() {
  jQuery(".Switch-input:eq(1)").click(function() {
    if(jQuery(".Switch--checked:visible").length === 0){
      jQuery('.Products-main').css({'margin-top': '70px'});
    } else {
      jQuery('.Products-main').css({'margin-top': '-47px'});
      jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
    }
  });
}, 40);

 setInterval(function() {
   if(jQuery(".Switch-input:eq(1).Switch--checked").length === 0 && jQuery(".Switch-input:eq(0).Switch--checked").length === 0){
     jQuery('.Products-main').css({'margin-top': '70px'});
   } else {
     jQuery('.Products-main').css({'margin-top': '-47px'});
     jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
   }
 }, 50);

 setInterval(function() {
   jQuery(".Switch-input:contains(Voir nos coups de coeur)").click(function() {
     if(jQuery(".Switch--checked:visible").length === 0){
       jQuery('.Products-main').css({'margin-top': '0px'});
     } else {
       jQuery('.Products-main').css({'margin-top': '-47px'});
     }
   });
 }, 60);

 setInterval(function() {
   if(jQuery('.FacetsList-facet').hasClass("Collapse--expanded") > 0) {
       jQuery('.FacetsList-facet:eq(4) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet UL:eq(4)').css({'overflow': 'unset'});
     }
 }, 70);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(3) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(3) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(3) UL').css({'overflow': 'unset'});
     }
 }, 80);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(2) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(2) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(2) UL').css({'overflow': 'unset'});
     }
 }, 90);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(0) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(0) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(0) UL').css({'overflow': 'unset'});
     }
 }, 100);

 setInterval(function() {
   if(jQuery('.FacetExtras-item .Switch--checked:visible').length === 0) {
     jQuery('.FacetExtras').css({'margin-top': '6px', 'margin-bottom': '20px'});

     } else {
       jQuery('.FacetExtras').css({'margin-top': '-50px', 'margin-bottom': '110px'});

     }
 }, 105);





// https://www.picwictoys.com/u/premieres-activites-manuelles-222?picwicABtest
// color: #00b0e7;


// setTimeout(function() {
//   if(jQuery(".Switch-input:eq(1).Switch--checked:visible").length === 0 && jQuery(".Switch-input:eq(0).Switch--checked:visible").length === 0){
//     jQuery('.Products-main').css({'margin-top': '70px'});
//     jQuery('.titleFilters').hide();
//   } else {
//     jQuery('.Products-main').css({'margin-top': '-47px'});
//     jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
//     jQuery('.titleFilters').show();
//   }
// }, 100);

// XXX:




document.querySelector('.ListHeader').appendChild(document.createElement('section'));
document.querySelector('.ListHeader section').classList.add("banniereAb");
var newBanner = document.querySelector('.banniereAb').innerHTML;
var divToAdd = document.createElement("div");
document.querySelector('.ProductFacets').insertAdjacentElement('beforebegin', divToAdd);
document.querySelector('.banniereAb').parentNode.removeChild(document.querySelector('.banniereAb'));


var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

jQuery(".Products-grid").prepend(jQuery(".ListBanner"));

setTimeout(function() {
  jQuery(".Switch-input:eq(0)").click(function() {
    if(jQuery(".Switch--checked:visible").length){
      jQuery('.Products-main').css({'margin-top': '70px'});
      jQuery('.titleFilters').hide();
    } else {
      jQuery('.Products-main').css({'margin-top': '-47px'});
      jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
      jQuery('.titleFilters').show();
    }
  });
}, 30);

setTimeout(function() {
  jQuery(".Switch-input:eq(1)").click(function() {
    if(jQuery(".Switch--checked:visible").length){
      jQuery('.Products-main').css({'margin-top': '70px'});
      jQuery('.titleFilters').hide();
    } else {
      jQuery('.Products-main').css({'margin-top': '-47px'});
      jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
      jQuery('.titleFilters').show();
    }
  });
}, 40);

 setTimeout(function() {
   if(jQuery(".Switch-input:eq(1).Switch--checked").length && jQuery(".Switch-input:eq(0).Switch--checked").length){
     jQuery('.Products-main').css({'margin-top': '70px'});
     jQuery('.titleFilters').hide();
   } else {
     jQuery('.Products-main').css({'margin-top': '-47px'});
     jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
     jQuery('.titleFilters').show();
   }
 }, 50);

 setInterval(function() {
   jQuery(".Switch-input:contains(Voir nos coups de coeur)").click(function() {
     if(jQuery(".Switch--checked:visible").length === 0){
       jQuery('.Products-main').css({'margin-top': '0px'});
     } else {
       jQuery('.Products-main').css({'margin-top': '-47px'});
     }
   });
 }, 60);

 setInterval(function() {
   if(jQuery('.FacetsList-facet').hasClass("Collapse--expanded") > 0) {
       jQuery('.FacetsList-facet:eq(4) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet UL:eq(4)').css({'overflow': 'unset'});
     }
 }, 70);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(3) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(3) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(3) UL').css({'overflow': 'unset'});
     }
 }, 80);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(2) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(2) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(2) UL').css({'overflow': 'unset'});
     }
 }, 90);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(0) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(0) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(0) UL').css({'overflow': 'unset'});
     }
 }, 100);






XX














document.querySelector('.ListHeader').appendChild(document.createElement('section'));
document.querySelector('.ListHeader section').classList.add("banniereAb");
var newBanner = document.querySelector('.banniereAb').innerHTML;
var divToAdd = document.createElement("div");
document.querySelector('.ProductFacets').insertAdjacentElement('beforebegin', divToAdd);
document.querySelector('.banniereAb').parentNode.removeChild(document.querySelector('.banniereAb'));


var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

jQuery(".Products-grid").prepend(jQuery(".ListBanner"));

jQuery('.FacetExtras').before('<div class="titleFilters"><b>Affinez vos résultats avec les filtres : </b></div>');
jQuery('.titleFilters').css({'font-size': '1.2rem', 'font-family': 'Montserrat,Arial,sans-serif', 'line-height': '1.1667', 'margin-right': '56%', 'padding-bottom': '5px', 'width': '50%', 'margin-top': '20px'});


setInterval(function() {
  jQuery(".Switch-input:eq(0)").click(function() {
    if(jQuery(".Switch--checked:visible").length){
      jQuery('.Products-main').css({'margin-top': '70px'});
    } else {
      jQuery('.Products-main').css({'margin-top': '-47px'});
      jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
    }
  });
}, 30);

setInterval(function() {
  jQuery(".Switch-input:eq(1)").click(function() {
    if(jQuery(".Switch--checked:visible").length){
      jQuery('.Products-main').css({'margin-top': '70px'});
      jQuery('.titleFilters').hide();
    } else {
      jQuery('.Products-main').css({'margin-top': '-47px'});
      jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
      jQuery('.titleFilters').show();
    }
  });
}, 40);

 setInterval(function() {
   if(jQuery(".Switch-input:eq(1).Switch--checked").length && jQuery(".Switch-input:eq(0).Switch--checked").length){
     jQuery('.Products-main').css({'margin-top': '70px'});
     jQuery('.titleFilters').hide();
   } else {
     jQuery('.Products-main').css({'margin-top': '0px'});
     jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
     jQuery('.titleFilters').show();
   }
 }, 50);

 setInterval(function() {
   jQuery(".Switch-input:contains(Voir nos coups de coeur)").click(function() {
     if(jQuery(".Switch--checked:visible").length === 0){
       jQuery('.Products-main').css({'margin-top': '0px'});
     } else {
       jQuery('.Products-main').css({'margin-top': '-47px'});
     }
   });
 }, 60);

 setInterval(function() {
   if(jQuery('.FacetsList-facet').hasClass("Collapse--expanded") > 0) {
       jQuery('.FacetsList-facet:eq(4) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet UL:eq(4)').css({'overflow': 'unset'});
     }
 }, 70);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(3) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(3) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(3) UL').css({'overflow': 'unset'});
     }
 }, 80);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(2) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(2) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(2) UL').css({'overflow': 'unset'});
     }
 }, 90);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(0) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(0) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(0) UL').css({'overflow': 'unset'});
     }
 }, 100);

















 var script = document.createElement('script');
 script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
 script.type = 'text/javascript';
 document.getElementsByTagName('head')[0].appendChild(script);

 document.querySelector('.ListHeader').appendChild(document.createElement('section'));
 document.querySelector('.ListHeader section').classList.add("banniereAb");
 var newBanner = document.querySelector('.banniereAb').innerHTML;
 var divToAdd = document.createElement("div");
 document.querySelector('.ProductFacets').insertAdjacentElement('beforebegin', divToAdd);
 document.querySelector('.banniereAb').parentNode.removeChild(document.querySelector('.banniereAb'));

 setTimeout(function() {
   jQuery('.Products-grid').css({'display':'block'});
   jQuery('.Products-sidebar').css({'width':'calc(100% - 3.5rem - .01px)'});
   jQuery('.Products-main').css({'width':'calc(100% - 3.5rem - .01px)', 'margin-top': '-47px'});
   jQuery('.FacetExtras').css({'width': '100%', 'flex-direction': 'row-reverse', 'display': 'flex', 'align-items': 'flex-end', 'margin-top': '6px', 'margin-bottom': '20px'});
   jQuery('.Products-listItem').css({'width': '24.4%'});
   jQuery('.FacetsList').css({'display': 'flex', 'justify-content': 'flex-start', 'margin-bottom': '33px', 'margin-top': '-82px'});
   jQuery('.ActiveFacets-list').css({'display': 'flex'});
   jQuery('.FacetsList-facet').css({'margin': '3rem 20px 3rem 0'});
   jQuery('.ListHeader-bottom').css({'display': 'flex'});
   jQuery('.ListHeader-bottom .Breadcrumb').css({'margin-bottom': '.1rem', 'padding-top': '10px'});
   jQuery('.FacetsList-headState').css({'margin-left': '10px'});
   jQuery('.FacetExtras').before('<div class="titleFilters"><b>Affinez vos résultats avec les filtres : </b></div>');
   jQuery('.titleFilters').css({'font-size': '1.2rem', 'font-family': 'Montserrat,Arial,sans-serif', 'line-height': '1.1667', 'margin-right': '56%', 'padding-bottom': '5px', 'width': '50%', 'margin-top': '20px'});
   jQuery('.FacetExtras-item').css({'max-width': '248px'});
   jQuery('.FacetExtras-item:eq(1)').css({'margin-right': '6px'});
   jQuery('.ListHeader').css({'margin-top': '-90px'});
 }, 20);

 // setInterval(function() {
 //   jQuery(".Switch-input:eq(0)").click(function() {
 //     if(jQuery(".Switch--checked:visible").length === 0){
 //       jQuery('.Products-main').css({'margin-top': '70px'});
 //     } else {
 //       jQuery('.Products-main').css({'margin-top': '-47px'});
 //       jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
 //     }
 //   });
 // }, 100);
 //
 // setInterval(function() {
 //   jQuery(".Switch-input:eq(1)").click(function() {
 //     if(jQuery(".Switch--checked:visible").length === 0){
 //       jQuery('.Products-main').css({'margin-top': '70px'});
 //       jQuery('.titleFilters').hide();
 //     } else {
 //       jQuery('.Products-main').css({'margin-top': '-47px'});
 //       jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
 //       jQuery('.titleFilters').show();
 //     }
 //   });
 // }, 100);

 setInterval(function() {
   if(jQuery(".Switch-input:eq(1).Switch--checked:visible").length === 0 || jQuery(".Switch-input:eq(0).Switch--checked:visible").length === 0){
     jQuery('.Products-main').css({'margin-top': '70px'});
     jQuery('.titleFilters').hide();
   } else {
     jQuery('.Products-main').css({'margin-top': '-47px'});
     jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
     jQuery('.titleFilters').show();
   }
 }, 100);

 setInterval(function() {
   if(jQuery(".Switch-input:eq(1).Switch--checked:visible").length === 0 && jQuery(".Switch-input:eq(0).Switch--checked:visible").length === 0){
     jQuery('.Products-main').css({'margin-top': '70px'});
     jQuery('.titleFilters').hide();
   } else {
     jQuery('.Products-main').css({'margin-top': '-47px'});
     jQuery('.FacetsList-headTitle').css({'margin-right': '10px'});
     jQuery('.titleFilters').show();
   }
 }, 100);

 setInterval(function() {
   jQuery(".Switch-input:contains(Voir nos coups de coeur)").click(function() {
     if(jQuery(".Switch--checked:visible").length === 0){
       jQuery('.Products-main').css({'margin-top': '0px'});
     } else {
       jQuery('.Products-main').css({'margin-top': '-47px'});
     }
   });
 }, 100);

 setInterval(function() {
   if(jQuery('.FacetsList-facet').hasClass("Collapse--expanded") > 0) {
       jQuery('.FacetsList-facet:eq(4) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet UL:eq(4)').css({'overflow': 'unset'});
     }
 }, 100);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(3) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(3) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(3) UL').css({'overflow': 'unset'});
     }
 }, 150);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(2) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(2) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(2) UL').css({'overflow': 'unset'});
     }
 }, 200);

 setInterval(function() {
   if(jQuery('.FacetsList-facet:eq(0) UL LI').length >= 4) {
       jQuery('.FacetsList-facet:eq(0) UL').css({'max-height': '120px', 'overflow-y': 'scroll'});
     } else {
       jQuery('.FacetsList-facet:eq(0) UL').css({'overflow': 'unset'});
     }
 }, 250);


// PLAN INTERIEUR MAISON PIERRE
if (!window.abt552101) {
  window.abt552101 = true;
  jQuery('.version-box p:eq(1)').addClass('model-text');
  var modelText = jQuery('.model-text').html();
  jQuery('.model-text').remove();
  jQuery('.version-details').after('<p class=\'newText\'>'+ modelText +'</p>');
  jQuery('.newText').css({'text-align': 'center', 'margin-left': '20px', 'font-weight': '600'});
  jQuery('.version-box').css({'width': '300px', 'margin-bottom': '15px'});

  jQuery('.version-box p.break-line').css({'border-bottom': '0px', 'padding': '0px', 'padding-top': '15px'});

  jQuery('.contact-btn').wrap("<div class='contactBtn'></div>");
  var contactButton = jQuery('.contactBtn').html();
  jQuery('.contact-btn').remove();
  jQuery('.newText').after(contactButton);
  jQuery('.contact-btn').addClass('styleContact');
  jQuery('.styleContact').css({'width': '300px', 'float': 'right', 'text-align': 'center', 'color': 'white', 'background-color': '#00acb6', 'border-radius': '5px', 'height': '60px', 'padding': '7px'});
  jQuery('.styleContact').removeClass('contact-btn');
  jQuery('.styleContact SPAN:eq(0)').css({'font-size': '17px', 'font-weight': '400', 'text-transform': 'uppercase'});
  jQuery('.styleContact em').css({'font-size': '16px', 'font-style': 'normal!important'});
  jQuery('.styleContact em').addClass('seconText');
  jQuery('.seconText').css({'font-style': 'normal'});

  jQuery('.notice').after('<div class="container-download tab-plan-interieur r-tabs-anchor" href="#tabs-3"><img class="picto-download" src="https://www.eddo.fr/wp-content/uploads/2020/02/Weber-Picto.png"><span class="button-download" >telecharger plan interieur</span></div>');
  jQuery('.container-download').css({'display': 'flex', 'width': '100%', 'height': 'auto'});
  jQuery('.picto-download').css({'width': '25px', 'height': 'auto'});
  jQuery('.button-download').css({'text-transform': 'uppercase', 'text-decoration': 'underline', 'color': '#d43533', 'margin-left': '10px'});
}




xx

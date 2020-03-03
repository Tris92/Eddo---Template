
// HOME PAGE

if (jQuery(".container-distri").length === 0){
  if (window.matchMedia("(min-width: 992px)").matches) {
    jQuery('Section:eq(0).section-wide').append('<div class="container-distri"><div class="container-title-distri-desktop"><span class="first-title"><b> Retrouvez tous nos produits près de chez vous dans plus de <span class="second-title">2000 points de vente</span></b></span></div><div class="container-button-distri"><a href="https://distributeurs.fr.weber/fr" class=button-distri"><img src="https://www.eddo.fr/wp-content/uploads/2019/12/distributeurs.png" class="img-button-distri"><span class="span-button-distri">Trouver un distributeur</span></a></div></div>');
    jQuery('.img-button-distri').css({'width': '15px', 'height': 'auto', 'margin-top': '-2px'});
    jQuery('.container-button-distri').css({'display': 'block', 'text-align': 'center', 'background-color': '#ffeb00', 'border-radius': '40px', 'width': '240px', 'margin-left': '15px', 'vertical-align': 'middle', 'padding-top': '5px', 'padding-bottom': '5px'});
    jQuery('.container-distri').css({'background-color': '#5a4c40', 'display': 'flex', 'justify-content': 'center', 'padding-top': '15px', 'padding-bottom': '15px', 'max-width': '2000px'});
    jQuery('.container-title-distri-desktop').css({'text-align': 'center', 'padding-top': '4px'});
    jQuery('.first-title').css({'color': 'white'});
    jQuery('.second-title').css({'color': '#ffeb00', 'margin-left': '10px', 'padding-top': '15px'});
    jQuery('.span-button-distri').css({'color': '#333333', 'margin-left': '10px', 'font-weight': '700'});

  } if (window.matchMedia("(max-width: 420px)").matches) {
    jQuery('Section:eq(0).section-wide').append('<div class="container-distri"><div class="container-title-distri-mobile"><span class="first-title"><b>Plus de 2000 points de vente</b></span></div><div class="container-btn-distri"><a href="https://distributeurs.fr.weber/fr" class=button-distri"><img src="https://www.eddo.fr/wp-content/uploads/2019/12/distributeurs.png" class="img-button-distri"><span class="span-button-distri">Trouver un distributeur</span></a></div></div>');
    jQuery('.img-button-distri').css({'width': '15px', 'height': 'auto'});
    jQuery('.container-btn-distri').css({'text-align': 'center', 'background-color': '#ffeb00', 'border-radius': '40px', 'margin': '10px 50px 10px 50px', 'heigth': '50px'});
    jQuery('.container-distri').css({'background-color': 'white', 'margin-bottom': '20px'});
    jQuery('.container-title-distri-mobile').css({'text-align': 'center', 'padding-top': '10px'});
    jQuery('.first-title').css({'color': '#333333', 'margin-top': '30px'});
    jQuery('.second-title').css({'color': '#ffeb00'});
    jQuery('.span-button-distri').css({'color': '#333333', 'font-weight': '900', 'margin-left': '10px'});
  }
}


// SELECTOR PAGE

setTimeout(function() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    jQuery('.search-result .row:eq(5)').after('<div class="container-distri"><div class="container-title-distri-desktop"><span class="first-title"><b> Retrouvez tous nos produits près de chez vous <br>dans plus de <span class="second-title">2000 points de vente</span></b></span></div><div class="container-button-distri"><a href="https://distributeurs.fr.weber/fr" class=button-distri"><img src="https://www.eddo.fr/wp-content/uploads/2019/12/distributeurs.png" class="img-button-distri"><span class="span-button-distri">Trouver un distributeur</span></a></div></div>');
    jQuery('.img-button-distri').css({'width': '20px', 'height': 'auto'});
    jQuery('.first-title').css({'color': 'white', 'font-size': '20px'});
    jQuery('.second-title').css({'color': '#ffeb00'});
    jQuery('.container-title-distri-desktop').css({'margin-left': '20px'});
    jQuery('.span-button-distri').css({'color': '#333333', 'margin-left': '10px', 'font-weight': '700'});
    jQuery('.container-distri').css({'background-color': '#5a4c40', 'display': 'flex', 'height': '80px'});
    jQuery('.container-button-distri').css({'margin-left': '100px', 'background-color': '#ffeb00', 'text-align': 'center', 'border-radius': '40px', 'padding': '8px', 'height': '40px'});
  } if (window.matchMedia("(max-width: 420px)").matches) {
    jQuery('.entry-pagination').before('<div class="container-distri"><div class="container-title-distri-mobile"><span class="first-title"><b style="display: flex; margin-top: 5px">Plus de <div class="second-title">2000 points de vente</div></b></span></div><div class="container-btn-distri"><a href="https://distributeurs.fr.weber/fr" class=button-distri"><img src="https://www.eddo.fr/wp-content/uploads/2019/12/distributeurs.png" class="img-button-distri"><span class="span-button-distri">Trouver un distributeur</span></a></div></div>');
    jQuery('.container-distri').css({'display': 'block', 'background-color': '#5a4c40', 'justify-items': 'center', 'height': '70px'});
    jQuery('.img-button-distri').css({'width': '15px', 'height': 'auto'});
    jQuery('.first-title').css({'color': 'white', 'display': 'flex'});
    jQuery('.second-title').css({'color': '#ffeb00', 'display': 'flex', 'margin-left': '5px'});
    jQuery('.container-title-distri-mobile').css({'display': 'flex', 'justify-content': 'center'});
    jQuery('.container-btn-distri').css({'background-color': '#ffeb00', 'text-align': 'center', 'border-radius': '40px', 'margin-left': '70px', 'margin-right': '70px', 'margin-top': '7px'});
    jQuery('.span-button-distri').css({'color': '#333333', 'margin-left': '5px', 'font-weight': '500'});
  }
}, 100)


xx

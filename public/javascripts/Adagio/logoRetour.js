//Variation 1
setInterval(function(){
  if(jQuery('.burger-menu__container').length > 0){
    if(jQuery('#newLogo').length === 0) {
      jQuery('.burger-menu-user').before('<div id="newLogo"><a href="https://www.adagio-city.com/"><img class="imgLogoBurger" src="https://editor-assets.abtasty.com/46894/60181255424001612190293.png" style="heigth: 30px; width: 96px;"></a></div>');
      jQuery('#newLogo').css({'display': 'flex', 'heigth': 'auto', 'width': 'auto', 'justify-content': 'center', 'margin-left': '20%'});
      console.log("success");
    }
  }
}, 100);


//Variation 2
setInterval(function(){
  if(jQuery('.burger-menu__container').length > 0){
    if(jQuery('#newText').length === 0) {
      jQuery('.burger-menu-user').before('<div id="newText"><a href="https://www.adagio-city.com/" style="text-decoration-color: black;"><p style="color: black; font-size: 13px; font-family: GothamMedium; font-weight: 400;text-decoration-color: black;">Retour Accueil</p></a></div>');
      jQuery('#newText').css({'display': 'flex', 'heigth': 'auto', 'width': 'auto', 'justify-content': 'center', 'margin-left': '20%', 'color': 'black'});
      console.log("success text");
    }
  }
}, 100);

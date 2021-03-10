  //ajout du dropdown
  jQuery('.l-content-container:eq(3)').after('<section id="recentPage"><div class="containerRecentPage"><img src="https://www.eddo.fr/wp-content/uploads/2020/09/add.png" class="iconRecentPage"><p class="textRecentPage">Consultés récemment</p></div><div class="containerDropdown"><ul class="containerBloc"><li class="blocA">XA</li><li class="blocB">XB</li><li class="blocC">XC</li></ul></div></section>')

  //css bouton 'consulté récemment'
  jQuery('.containerRecentPage').css({'display': 'flex','height': '50px', 'background-color': 'white', 'max-width': '81.25em', 'margin': '20px auto 0px auto', 'padding': '0 1.875em', 'justify-content': 'center', 'align-items': 'center'});
  jQuery('.iconRecentPage').css({'height': '20px', 'width': '20px'});
  jQuery('.textRecentPage').css({'color': '#004fb6', 'font-weight': '200', 'font-family': 'source_sans_probold,-apple-system,blinkmacsystemfont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,arial,helvetica,sans-serif', 'margin-left': '10px'});

  //CSS accordéon
  jQuery('.containerDropdown').css({'display': 'flex','height': '200px', 'background-color': 'white', 'max-width': '81.25em', 'margin': '0px auto', 'padding': '0 1.875em', 'justify-content': 'center', 'align-items': 'center'});
  jQuery('.containerBloc').css({'display': 'flex', 'width': '100%', 'justify-content': 'space-evenly', 'list-style-type': 'none'});
  jQuery('.blocA').css({'padding': '20px 20px', 'border': '1px solid black', 'max-width': '32%', 'margin': '0 30px'});
  jQuery('.blocB').css({'padding': '20px 20px', 'border': '1px solid black', 'max-width': '32%', 'margin': '0 30px'});
  jQuery('.blocC').css({'padding': '20px 20px', 'border': '1px solid black', 'max-width': '32%', 'margin': '0 30px'});

  jQuery('.containerDropdown').hide();

  //toggle dropdown
  jQuery(".containerRecentPage").on('click', function (event) {
    event.stopPropogation();
    jQuery(".containerDropdown").slideToggle();
  });

  //icone + et -
  setInterval( function() {
    if(jQuery(".containerBloc:visible").length){
      jQuery('.iconRecentPage').attr("src", "https://www.eddo.fr/wp-content/uploads/2020/09/minus.png");
    } else {
      jQuery('.iconRecendtPage').attr("src", "https://www.eddo.fr/wp-content/uploads/2020/09/add.png");s
    }
  }, 10);

  //Desktop
  if (window.matchMedia('(max-width: 1024px)').matches){
    jQuery('.containerBloc').css({'display': 'block'});
  };

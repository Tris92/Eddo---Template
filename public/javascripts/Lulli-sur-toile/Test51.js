
// DESKTOP

// VARIATION 1 *****************************************************************


//Bouton search bar
var newSearchBtn = jQuery('.search-button-wrapper').html();
var searchForm = jQuery('#search_mini_form').html();
jQuery('.search-button-wrapper').hide();

jQuery('.header-right UL').append('<div class=\"searchNavbar search-button-toggle\"><a id=\"search\"  style=\'display: flex; width: 100%;\'><input type=\"text\" placeholder=\" Que recherchez-vous?\" style=\'border: 0px; height: 25px!important; padding: 5px;\'><img class=\"searchLogo\" src=\"https://www.lulli-sur-la-toile.com/skin/frontend/lulli/default/images/desktop/loupe.png\"></a></div>');
jQuery('.searchNavbar').css({'display': 'flex', 'border': '1px solid black', 'height': '30px', 'width': '70%', 'float': 'right', 'margin-top': '5px', 'margin-bottom': '5px'});
jQuery('.searchLogo').css({'width': '15px', 'height': '15px', 'margin': '6px 10px 10px 10px', 'position': 'relative'});
jQuery('#search::placeholder').css({'font-family': 'Didot, Roboto, sans-serif'});


// VARIATION 2 *****************************************************************


//Bouton search bar
jQuery('.header-left').hide();
jQuery('.header-center').css({'float': 'left', 'text-align': 'left', 'display': 'flex', 'margin-left': '-100px'});

var newSearchBtn = jQuery('.search-button-wrapper').html();
var searchForm = jQuery('#search_mini_form').html();
jQuery('.search-button-wrapper').hide();

jQuery('.header-center').after('<div class=\"searchNavbar search-button-toggle \"><a id=\"search\"  style=\'display: flex; width: 100%;\'><input type=\"text\" placeholder=\" Que recherchez-vous?\" style=\'border: 0px; height: 25px!important; padding: 5px;\'><img class=\"searchLogo\" src=\"https://www.lulli-sur-la-toile.com/skin/frontend/lulli/default/images/desktop/loupe.png\"></a></div>');
jQuery('.searchNavbar').css({'display': 'flex', 'border': '1px solid black', 'height': '30px', 'width': '22%', 'position': 'absolute', 'margin-left': '320px', 'margin-top': '28px'});
jQuery('.searchLogo').css({'width': '15px', 'height': '15px', 'margin': '6px 15px 10px 10px'});
jQuery('.header-right').css({'float': 'right'});

jQuery('.welcome-msg').css({'text-align': 'left', 'display': 'flex'});
jQuery('.top-line .welcome-msg').append('<p class=\"newMsgTopline\">Contactez le site : 04 91 44 61 67 - par mail</p><a href=\"https://www.lulli-sur-la-toile.com/toutes-nos-boutiques-mode\"><span class=\"newMsgGolden\">Contactez nos boutiques ici</span></a>');
jQuery('.newMsgTopline').css({'margin-left': '20%'});
jQuery('.newMsgGolden').css({'color': '#bdaf79', 'text-transform': 'uppercase', 'font-size': '11px', 'letter-spacing': '.08em', 'margin-left': '30px'});



// VERSION MOBILE *****************************************************************


jQuery('.links .search-button').hide();
jQuery('.scroll-to-fixed-fixed').append('<div class=\"searchNavbar search-button-toggle \"><a id=\"search\"  style=\'display: flex; width: 100%;\'><input type=\"text\" placeholder=\" Que recherchez-vous?\" style=\'border: 0px; height: 25px!important; padding: 5px; float: left;\'><img class=\"searchLogo search-button-toggle\" src=\"https://www.lulli-sur-la-toile.com/skin/frontend/lulli/default/images/desktop/loupe.png\"></a></div>');

jQuery('.searchNavbar').css({'display': 'flex', 'border': '1px solid black', 'height': '30px', 'width': '95%', 'margin-top': '5px', 'margin-bottom': '5px', 'margin-right': '5px', 'margin-left': '5px'});
jQuery('.searchLogo').css({'width': '15px', 'height': '15px', 'margin': '5px 10px 10px 10px', 'float': 'left'});
jQuery('#search input::placeholder').css({'font-family': '"Didot","Roboto",sans-serif', 'font-style': 'italic'});

xx

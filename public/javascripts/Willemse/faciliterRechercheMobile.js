// CODE IULIAN

jQuery('.c-site-header__btn-menu.ox-iconfont.ox-iconfont-menu.c-cs-icon.c-cs-icon--type-button').wrap('<div class="second-element"></div>');
jQuery('.second-element').append(jQuery('.c-site-header__btn-search.ox-iconfont.ox-iconfont-search.c-cs-icon.c-cs-icon--type-button'));
jQuery('.c-site-header__logo-img').wrap('<div class="first-element"></div>');

jQuery('.first-element').append(jQuery('.c-site-header__cart-infos.ng-isolate-scope.c-oxm-cart-infos'));
jQuery('.second-element').before(jQuery('.first-element'));


//CODE TRISTAN
jQuery('.l-site__header').css({'height': '120px', 'position': 'inherit'});
jQuery('abtasty-banner-wrapper').css({'margin-top': '60px'});
jQuery('.c-site-header__btn-menu').css({'margin-left': '10px'});
jQuery('.c-site-header__logo-inner').css({'margin-top': '-100px', 'margin-left': '-30px'});
jQuery('.c-site-header__cart-infos').css({'margin-top': '-100px', 'margin-right': '10px'});
jQuery('.c-site-header__btn-search').css({'margin-right': '-40px'});
jQuery('.c-site-header__btn-search').wrap('<div class="newSearch"></div>');

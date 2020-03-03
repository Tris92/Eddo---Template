// -----AB TEST : Apply the Chanel Visual Code (Product)-----

jQuery("body").append("<style type='text/css'> /**@font-face { font-family: 'ABChanelCorpo-ExtraLight'; font-style: ExtraLight; src: url('/medias/ABChanelCorpo-ExtraLight.otf?context=bWFzdGVyfHJvb3R8NTY4NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg3Ny9oZTkvODkyNjc1OTU1MTAwNi5iaW58OGMyMjZlNDMwNDZkNWI3OTgxNjgxZWYyYTMxY2QxY2I0ZjJjZWVhNDljZmNmNWYwZjU5MzA5ZTgyMTIxNzM0Mg');} @font-face { font-family: 'ABChanelCorpo-Light'; font-style: Light; src: url('/medias/ABChanelCorpo-Light.otf?context=bWFzdGVyfHJvb3R8NTg5NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhmMi9oYjQvODkyNjc2MDA0MjUyNi5iaW58MDIxYmI4NzNhZTNhMDk3ZWZhYTc3OTFjMDY5ZTNiMzg2YzExMjQ5MTUwMjAyOTkwMTQyY2FmYWFmZTM5MmJiNA');}@font-face { font-family: 'ABChanelCorpo-Regular'; font-style: Regular; src: url('/medias/ABChanelCorpo-Regular.otf?context=bWFzdGVyfHJvb3R8NTYwMDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhkZS9oY2YvODkyNjc2MDI3MTkwMi5iaW58YzlhMTA2ZmMzNzk5ZTJkNTU5OTA5N2MyODE1MjNmNmEyYTlkZDVmN2M3ZDc3YTM3ZTFlNjIzOGRhNDA2YjU1NA');}@font-face { font-family: 'ABChanelCorpo-SemiBold'; font-style: SemiBold; src: url('/medias/ABChanelCorpo-SemiBold.otf?context=bWFzdGVyfHJvb3R8NTk5MTJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhmOC9oNzcvODkyNjc2MDQzNTc0Mi5iaW58YzE5NmE0YWVmOTc1NGM4NmE1YWQ2ODVjZTgzNGE1YTQ3NGJlYTAxOGJkMDM4NWQ2NjQ3MGIwZDllYzljMmI4OQ');} @font-face{ font-family: 'Helvetica Light'; font-style: Light; src: url('/medias/helvetica-light.ttf?context=bWFzdGVyfHJvb3R8NTA1ODN8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhOC9oNjIvODkyNzcyNzY0ODc5OC5iaW58MDkzY2RjZTgxNWJjNzZlNTU2NWI3MzUzNGYwZDc0MzcyNmFmZDY5Y2M1ODE4OWE1OWM5OWFjNjRjYzUxNzdlNQ'); **/  .product-container--brand-synergieName, .pageType-ProductPage .price, .pageType-ProductPage .product-container--price--infos { font-size: 0.8rem; text-transform: lowercase; font-family: Helvetica Light; color: #333; font-weight: 300;} .product-container--price--details{text-align: left;} h1 a { text-decoration: none;} </style>");

jQuery("body").append("<style>@font-face { font-family: 'ABChanelCorpo-ExtraLight'; font-style: ExtraLight; src: url('/medias/ABChanelCorpo-ExtraLight.otf?context=bWFzdGVyfHJvb3R8NTY4NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhjYi9oOTUvODg1MjEzODE2NDI1NC5iaW58ZWY4MTMzMGJjYTQwZmIyNWU3NjA5NGFkYjg0NWE2ZDBhZmQ2Y2FlZDhhMGFlYThiOTM1NmYwZTEwMjZkNmNmZg');} @font-face { font-family: 'ABChanelCorpo-Light'; font-style: Light; src: url('/medias/ABChanelCorpo-Light.otf?context=bWFzdGVyfHJvb3R8NTg5NzJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGhhZi9oMWMvODg1MjEzODI2MjU1OC5iaW58NTlmOTg3MWQ1ZGE4NDAxNDc1ODIwNDRlMDQ1NWJiNzEwYjAyNjcyZmY2MWI5ODExZTY4NzEyMWM5YzljNDg2ZA');}@font-face { font-family: 'ABChanelCorpo-Regular'; font-style: Regular; src: url('/medias/ABChanelCorpo-Regular.otf?context=bWFzdGVyfHJvb3R8NTYwMDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGgxYy9oNWEvODg1MjEzODM2MDg2Mi5iaW58NTExNDBjODQzMzU5NjFjY2FhMzczMDA5MjIzYWNlMzk0MTY0MDE1ZTRmZjk2NjU0NjM0YzdjMDUyOTRmNDhjNQ');} @font-face { font-family: 'ABChanelCorpo-SemiBold'; font-style: SemiBold; src: url('/medias/ABChanelCorpo-SemiBold.otf?context=bWFzdGVyfHJvb3R8NTk5MTJ8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg5Yy9oY2YvODg1MjEzODQ1OTE2Ni5iaW58MzNkZGM2NmQxYTg3M2IwZjQ3Yjc2ZTExNWYzMDk1YzEwNDIyN2FmY2ZkYTU2M2IzNWRiZjc3MzU1NmIyZTY4Yw');} @font-face{ font-family: 'Helvetica Light'; font-style: Light; src: url('https://fr-gv-gop.qa.grandvision.global/medias/helvetica-light.ttf?context=bWFzdGVyfHJvb3R8NTA1ODN8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg4Ni9oOTkvODg1MjIyMTY1NzExOC5iaW58MzAxODQwNjVhODBhZWFkYTM5NWJjNzkzMTE1NWEyZWRiY2ZkYjE4MDA2NzE3NzRhM2E4NGM2MjFjNjc1NjUzNw');} </style>");


function TEST_applyChanelVisual() {
    jQuery('#breadcrumb').after('<div class="test_header"><div class="test_headbar"><img class="test_headbar_img" src="https://images.grandoptical.com/gvfrance?set=angle%5B%5D,articleNumber%5B%5D,genim%5Bchanel_logo_hq.png%5D,w%5B%5D,company%5BGOP%5D,finalSize%5B%5D&call=url%5Bfile:common/GeneralImageJPG%5D" alt="Headbar Chanel Grandvision"></div></div>');
if (window.matchMedia('(min-width: 1025px)').matches){
jQuery("div.visible-md.visible-lg").has("div.info-optique  h1").attr("style", "width:100%; display:inline-flex !important; justify-content:flex-end !important;");
jQuery("h1").css("float", "right"); jQuery(".product-container--brand-synergieName").css("display", "inline-block");
//var widthcolonneproduit = jQuery(".product-container--right--sidebar").width();
jQuery("h1, .product-container--price--container, .product-container--config.sizes-colors, .pageType-ProductPage .product-command--ctas, a:contains(Configurer mes verres)").css({"width": "100%", "overflow-x": "hidden"});
jQuery("a:contains(Configurer mes verres)").css({"padding-left": "0px", "padding-right": "0px"});
jQuery("h1").css("border-bottom", "5px solid #1d1d1d");
jQuery(".product-container--price").css("background", "none");
jQuery(".product-container--price--container").css("align-items", "baseline");
jQuery(".product-container--right--sidebar").css("box-shadow", "none");
jQuery(".price").css({"width": "100%", "border-bottom": "1px solid #ececec"});
jQuery(".product-container--top").after("<section class='description-ab'></section>");
jQuery(".product-detail--dimensions").appendTo(jQuery(".description-ab"));
jQuery(".price:eq(0)").before(jQuery(".product-container--brand-synergieName:eq(0) "));
jQuery(".description-ab").prepend(jQuery(".product-detail--title:eq(0)"));
jQuery(".product-container--right").prepend(jQuery(".info-optique:eq(0)"));
jQuery(".product-detail--dimensions").after(jQuery("#productTechnical"));
var letexteab = jQuery(".product-container--brand-synergieName:eq(0) ").text();
jQuery(".visible-xs.visible-sm h1:eq(1) span:eq(0)").text(letexteab);
jQuery("h1:eq(1) span:eq(0)").text(letexteab);
jQuery(".product-container--brand-synergieName ").hide();
var textecouleur = jQuery("li:contains(Couleur :) b").text();
jQuery('span.product-container--price--infos').text(textecouleur);
jQuery(".product-container--price--details").append(jQuery(".action--icon.action--icon-wishlist-add"));
jQuery(".product-container--price--container .price").before("<div class='refab' style='color: #767676; font-family: Helvetica Light; font-size: 0.8rem; margin-top: -6px;'><span>Ref.</span><span></span></div>");
var texterefab = jQuery("li:contains(Référence :) b").text();
jQuery(".refab span:eq(1)").text(texterefab);
jQuery("#productInfo").after("<div class='materialab'><div class='product-colors--title'>MATIÈRE</div><div class='lamatiereab'></div></div>");
var textematiere = jQuery("li:contains(Matière :) b").text();
jQuery(".lamatiereab").text(textematiere);


var nbcouleurs = jQuery(".product-colors-sizes.colors div.colors div").has("a").length;

jQuery(".product-colors--title:contains(couleurs)").text(""+nbcouleurs+" couleurs");
jQuery(".product-colors-sizes.colors div.colors div").has("a").hide();
jQuery(".product-colors--title:contains(couleurs)").after("<div class='dropdown-ab' style='width: 100%;'><span style='width:20%;'></span><span style='display: flex;justify-content: space-between;width: 80%;float: right;align-items: center;'><span></span><span class='arrowab'><img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='border-radius:unset;'></span></span></div>");
var srcimgcouleurs = jQuery(".slider-view--item.slider-view--dot.active img").attr("src");
jQuery(".dropdown-ab span:eq(0)").append(jQuery("<img src='#'>"));
jQuery(".dropdown-ab span:eq(0) img").attr("src", srcimgcouleurs);
//jQuery(".dropdown-ab span:eq(0)").append(jQuery("div a").has("div.variant-color.active").find("img"));
jQuery(".dropdown-ab span:eq(2)").text(jQuery("li:contains(Couleur :) b").text());
//jQuery(".dropdown-ab span img").css("border", "2px solid black");

jQuery(".product-colors-sizes.colors div.colors").has(".variant-color").attr("style", "display: flex;flex-direction: column;height: auto;width: 100%;");
jQuery(".product-colors-sizes.colors div.colors div").has("a").find("img").attr("style", "height:35px; margin-bottom: 10px; display: block; width:auto;");
jQuery(".product-colors-sizes.colors div.colors div").has("a").find("div").attr("style", "height:39px; width: 39px; margin-bottom: 10px;");
jQuery(".product-colors-sizes.colors div.colors div").has("a").attr("style", "margin-bottom:10px;");
jQuery(".product-colors-sizes.colors div.colors div").has("a").hide();

jQuery(".dropdown-ab").click(function() {
  if(jQuery(".product-colors-sizes.colors div.colors div").has("a:visible").length === 0){
jQuery(".product-colors-sizes.colors div.colors div").has("a").show();
jQuery(".arrowab img").attr("src", "https://www.eddo.fr/wp-content/uploads/2020/01/up-arrow.png"); }
    else{jQuery(".product-colors-sizes.colors div.colors div").has("a").hide(); jQuery(".arrowab img").attr("src", "https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png")}
});


  jQuery("body").append("<style>.pageType-ProductPage .product-container .product-colors--title { text-transform: uppercase; color: black; font-weight: bolder; font-size: 0.8rem  !important;} .product-container--config{padding-left:0px; margin-left: 0px !important;} .product-container--price--container{padding-left:0px;} .page h1{font-size: 1.5625rem !important;} .product-container--config.sizes-colors{padding-right: 0px;} .product-container--config.sizes-colors{border-bottom: 1px solid #ececec;} .product-container--action, .pageType-ProductPage .product-command--lense-choice, .pageType-ProductPage .product-command--lense-choice legend b{padding-right: 0px; padding-left: 0px; margin-left: 0px;} .pageType-ProductPage .product-command--ctas .item:not(:first-child){margin-left: 0px;} .pageType-ProductPage .product-container--price .price{justify-content: start; padding-bottom: 30px;} .product-container--price--container{padding-right: 0px;} .description-ab .product-detail--dimensions ul{display: flex;flex-wrap: nowrap; flex-direction: row;} .description-ab .product-detail--dimensions ul li{width:33%; display:block;} .pageType-ProductPage .product-command--ctas{align-items:start !important;} section.description-ab {background: #ececec;padding: 50px;} .description-ab h2.product-detail--title { text-align: center; font-family: ABChanelCorpo-SemiBold; font-size: 1.5625rem !important; padding-bottom: 40px;} .pageType-ProductPage .product-command .btn.socloz {background-color: black;} .materialab{padding-bottom: 18px;border-bottom: 1px solid rgb(236, 236, 236);margin-bottom: 32px; margin-top: -3px;} .arrowab img{border-radius: unset; width: 10px !important;} .product-colors-sizes{margin:0px !important} .dropdown-ab{height: 30px;} .product-container--config.sizes-colors{padding-bottom:0px;}</style>");

  }
}
TEST_applyChanelVisual();

jQuery("body").append('<style>.editorial--grid--item-paragraph{display:none}.test_header{width:100%}.test_headbar{width:100%;text-align:center;border-top:8px solid #1d1d1d}.test_headbar_img{max-width:174px;margin:33px auto 42px auto}@media only screen and (max-width:640px){.test_headbar{border-top:6px solid #1d1d1d}.test_headbar_img{max-width:75px;margin:12px auto}}.pageType-ProductPage .product-command .btn.socloz{background-color:black;border-color:#fff;color:#fff} .product-colors-sizes.colors .see-less.active, .product-colors-sizes.colors .see-less:hover, .product-colors-sizes.colors .see-more.active, .product-colors-sizes.colors .see-more:hover, .product-colors-sizes.colors .variant-color.active, .product-colors-sizes.colors .variant-color:hover {border-color: black !important;} .pageType-ProductPage .product-command--lense-choice legend span:after, .pageType-ProductPage .product-command--lense-choice legend span:before{display:none;} .pageType-ProductPage .product-command--lense-choice legend b{color: black;} [type=radio]:checked{background-color: black; border: 1px solid black;} .slider-view li.active{border: 1px solid black;} .pageType-ProductPage .product-detail--title a:before{background-color: black;} .promo--main--content--items--separator{    border-color: black;} h1{font-family:"ABChanelCorpo-SemiBold";} .font--family-poppins-medium {font-family: ABChanelCorpo-Regular;} .product-container--brand{padding-bottom: 9px !important;} .product-container--price--container{padding-top: 20px; margin-top: -6px;} .pageType-ProductPage .product-container--price .price{padding-bottom: 20px !important;} .totalPrice{padding-top: 20px; height: 51px;font-size: 16pt;} .product-container--config.sizes-colors{ border-bottom: 1px solid #ececec; padding-top: 0px; margin-top: -11px; margin-bottom: 12px;} .pageType-ProductPage .product-container .product-colors--title{font-family: ABChanelCorpo-SemiBold; font-size: 0.8rem !important;} .product-container--config.sizes-colors .product-colors-sizes .colors { margin-bottom: 6px;}.pageType-ProductPage .product-command--lense-choice legend b { color: black; font-family: Helvetica Light; font-weight: 200;} .pageType-ProductPage .product-command--lense-choice .product-command--lense-choice{font-family: Helvetica Light; font-size: 0.8rem ; padding-bottom: 0px;} .product-container--action, .pageType-ProductPage .product-command--lense-choice, .pageType-ProductPage .product-command--lense-choice legend b{padding-top: 0px;    padding-bottom: 0px;}.pageType-ProductPage .product-command--lense-choice legend b { padding-top: 14px !important; padding-bottom: 4px;} .pageType-ProductPage .product-detail--title a:before{display:none;} div#descriptionCollapse, .pageType-ProductPage .product-detail--wrapper-lists b, section.ODP-component-wrapper,  div#opticalHowToBuyHelperParagraphComponent{ font-family: Helvetica Light;} .ODP-Flex.flexMargin { background: none !important;} .titre_3blocs, h2, h3{font-family: ABChanelCorpo-SemiBold} h1 .brand{display: none;}.pageType-ProductPage .product-command--ctas .item{width:100%;} .pageType-ProductPage .product-command .btn.socloz{width:100%;} .item.product-command-ctas--add {flex-direction: column;} .product-container--price--details{align-items: center; display: flex; flex-direction: row; justify-content: space-between;} .action--icon.action--icon-wishlist-add a{text-decoration: none;} .lamatiereab{font-size: 0.8rem ; font-weight: 300; color: #767676; padding-top: 16px;}</style>');


if (window.matchMedia("(max-width: 1023px)").matches) {
  jQuery("body").append("<style>.product-container--brand-synergieName, .pageType-ProductPage .price, .pageType-ProductPage .product-container--price--infos, .lamatiereab{font-size: 1.2rem !important;}  .visible-xs.visible-sm h1 span:nth-of-type(3) { padding-top: 20px;} .product-container--config.sizes-colors .product-colors-sizes .colors div {justify-content: left;} .product-container--config.sizes-colors{width:90%; margin: auto;} .pageType-ProductPage .product-command--lense-choice .product-command--lense-choice, .refab span{font-size: 1.2rem;} .page h2 { font-family: ABChanelCorpo-Regular !important; font-size: 2.1rem;} .promo--main--content--items--seeMore{display: flex;} .promo--main--content--items--seeMore a{justify-content: left;} .pageType-ProductPage .product-command--lense-choice legend{font-size: 1rem;} .pageType-ProductPage .product-container .product-colors--title {color: black; font-weight: bolder; font-size: 10px !important;} .product-container .colors{font-size: 11px !important;} .materialab {padding-bottom: 18px; border-bottom: 1px solid rgb(236, 236, 236); margin-bottom: 32px; margin-top: -3px;} .pageType-ProductPage .product-command--price-wrapper{border-bottom: 1px solid rgb(236, 236, 236); width:90%; margin: auto;} .materialab{width: 90%; margin: auto; border-bottom: 1px solid rgba(236, 236, 236); padding-bottom: 19px; } .product-colors--title{text-align:left;} .product-command--price{width: 100%;} .refab{text-align: left;} .totalPrice{text-align: left; font-weight: 700;} .product-colors-sizes{width: 100% !important; } .pageType-ProductPage .product-command--ctas{width: 90%;} .pageType-ProductPage .product-command--lense-choice legend b{padding-left: 0px;} .pageType-ProductPage .product-command--price-wrapper{padding:0px;}</style>");
  jQuery(".visible-xs.visible-sm h1 span:eq(0)").css({"border-bottom": "5px solid rgb(29, 29, 29)", "width": "fit-content", "width": "-moz-fit-content", "margin": "auto"});
  jQuery(".pageType-ProductPage .product-container .product-colors--title").attr("style", "font-size: 1rem !important; font-family: ABChanelCorpo-SemiBold;text-transform: uppercase;color:black;font-weight: bolder;");
  jQuery(".visible-xs.visible-sm .info-optique").after(jQuery(".visible-xs.visible-sm.product-command--price-wrapper"));
  jQuery(".colors:eq(1)").css("width", "100%");
  jQuery(".product-container--description").prepend(jQuery("#productTechnical"));
  var letexteab = jQuery(".product-container--brand-synergieName:eq(0)").text();
  jQuery(".visible-xs.visible-sm h1:eq(0) span:eq(0)").text(letexteab);
  jQuery("h1:eq(0) span:eq(0)").text(letexteab);
  jQuery(".product-container--brand-synergieName").hide();
  var textecouleur = jQuery("li:contains(Couleur :) b").text();
  jQuery('span.product-container--price--infos').text(textecouleur);
  jQuery(".product-container--price--details").append(jQuery(".action--icon.action--icon-wishlist-add"));
  jQuery(".price:eq(0)").before("<div class='refab' style='color: #767676; font-family: Helvetica Light, Helvetica Neue,Helvetica,Arial,sans-serif; font-size: 0.8rem; margin-top: -6px;'><span>Ref.</span><span></span></div>");
  var texterefab = jQuery("li:contains(Référence :) b").text();
  jQuery(".refab span:eq(1)").text(texterefab);
  jQuery("#productInfo").after("<div class='materialab'><div class='product-colors--title'>MATIÈRE</div><div class='lamatiereab'></div></div>");
  var textematiere = jQuery("li:contains(Matière :) b").text();
  jQuery(".lamatiereab").text(textematiere);
  var nbcouleurs = jQuery(".product-colors-sizes.colors div.colors div").has("a").length;

  jQuery(".product-colors--title:contains(couleurs)").text(""+nbcouleurs+" couleurs");
  jQuery(".product-colors-sizes.colors div.colors div").has("a").hide();
  jQuery(".product-colors--title:contains(couleurs)").after("<div class='dropdown-ab' style='width: 100%;'><span style='width:20%;'></span><span style='display: flex;justify-content: space-between;width: 80%;float: right;align-items: center;'><span></span><span class='arrowab'><img src='https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png' style='border-radius:unset !important; width: 10px !important;'></span></span></div>");
  var srcimgcouleurs = jQuery(".slider-view--item.slider-view--dot.active img").attr("src");
  jQuery(".dropdown-ab span:eq(0)").append(jQuery("<img src='#'>"));
  jQuery(".dropdown-ab span:eq(0) img").attr("src", srcimgcouleurs);
  jQuery(".dropdown-ab span:eq(0)").append(jQuery("div a").has("div.variant-color.active").find("img"));
  jQuery(".dropdown-ab span:eq(2)").text(jQuery("li:contains(Couleur :) b").text());
  jQuery(".dropdown-ab span img").css("border", "2px solid black");

  jQuery(".product-colors-sizes.colors div.colors").has(".variant-color").attr("style", "display: flex;flex-direction: column;height: auto;width: 100%;");
  jQuery(".product-colors-sizes.colors div.colors div").has("a").find("img").attr("style", "height:35px; margin-bottom: 10px; display: block; width:auto;");
  jQuery(".product-colors-sizes.colors div.colors div").has("a").find("div").attr("style", "height:39px; width: 39px; margin-bottom: 10px;");
  jQuery(".product-colors-sizes.colors div.colors div").has("a").attr("style", "margin-bottom:10px;");
  jQuery(".product-colors-sizes.colors div.colors div").has("a").hide();
  jQuery(".product-colors--title:contains(couleurs)").css("padding-top", "16px");

  jQuery(".dropdown-ab").click(function() {
    if(jQuery(".product-colors-sizes.colors div.colors div").has("a:visible").length === 0){
    jQuery(".product-colors-sizes.colors div.colors div").has("a").show();
    jQuery(".arrowab img").attr("src", "https://www.eddo.fr/wp-content/uploads/2020/01/up-arrow.png"); }
        else{jQuery(".product-colors-sizes.colors div.colors div").has("a").hide(); jQuery(".arrowab img").attr("src", "https://www.eddo.fr/wp-content/uploads/2020/01/down-arrow.png")}
  });

  //Enlève le doublon du titre en mobile
  jQuery('.info-optique:eq(0) H1').remove();

}

// FICHE PRODUIT MODIFICATION

setTimeout(function() {
   if (jQuery("body:contains('CHANEL'):visible").length > 0 ) {
     //elements a masquer après la partie description
     jQuery('#opticalHowToBuyHelperParagraphComponent').hide();
     jQuery('.simple_disp-img').hide();
     jQuery('.ODP-Flex').hide();
     jQuery('.pictos').remove();
     jQuery('.stock_message').remove();
     jQuery('.promo--main').hide();
     jQuery('#rondeShapeParagraphComponent').hide();
     //Masquer les messages de promotions sur les verres
     jQuery('#choice-PROG').click(function() {
       jQuery('#cms-ONLY_FRAME').hide();
     });
     jQuery(".product-command--lense-choice").click(function() {
       jQuery('#cta-PROG').hide();
       jQuery('.pageType-ProductPage .product-command--ctas .cta-config-glass').css({'width': '100%'})
     });
   }
 }, 100);

// TEST CODE SLIDER
 if (jQuery("body:contains('CHANEL'):visible").length > 0 ) {
   var imgChanelA = jQuery('.owl-item:eq(3) img').attr('data-src');
   var imgChanelB = jQuery('.owl-item:eq(4) img').attr('data-src');
   jQuery('.main-picture').hide();
   jQuery('.owl-nav').hide();
   jQuery('.slider-view').hide();
   jQuery('.layer-360--poping').hide();
// Carousel
   jQuery('.product-container--upperbar').append('<div class="carousel-product--chanel"><div class="item-product--chanel slide-in" id="first-item--chanel"><img src="' + imgChanelA + '" /></div><div class="item-product--chanel slide-in" id="second-item--chanel"><img src="' + imgChanelB + '" /></div><div class=\"carousel-controls--chanel\"><span href=\"#first-item--chanel\" class=\"carousel-btn--chanel selected\"></span><span href=\"#second-item--chanel\" class=\"carousel-btn--chanel\"></span></div></div><style>.carousel-product--chanel .carousel-controls--chanel .carousel-btn--chanel.selected{width:15px !important; height: 15px !important; border:1px solid black; background-color: #fff !important; transition: background-color 0s ease-out .1s,width .2s ease-out .1s,height .2s ease-out .1s;} #first-item--chanel, #second-item--chanel{pointer-events: none; cursor:pointer;}</style>');
// CSS
   jQuery('.carousel-product--chanel').css({'position': 'relative', 'width': '100%', 'height': '100%'});
   jQuery('.carousel-product--chanel .item-product--chanel').css({'position': 'absolute', 'width': '100%', 'height': '100%', 'text-align': 'center'});
   jQuery('.carousel-product--chanel .slide-in').css({'-webkit-transform': 'translate3d(-90%, 0px, 0px);', '-moz-transform':'translate3d(-90%, 0px, 0px);', '-ms-transform':'translate3d(-90%, 0px, 0px);', '-o-transform': 'translate(-90%, 0px, 0px);', 'transform': 'translate3d(-90%, 0px, 0px);', '-webkit-transition': '-webkit-transform 0.5s ease-out;', '-moz-transition': '-moz-transform 0.5s ease-out;', '-ms-transition': '-ms-transform 0.5s ease-out;', '-o-transition':'-o-transform 0.5s ease-out;', 'transition': 'transform 0.5s ease-out;', 'z-index': '1'});
   jQuery('.carousel-product--chanel .slide-in:target ~ .slide-in').css({'-webkit-transform': 'translate3d(90%, 0px, 0px);', '-moz-transform':'translate3D(90%, 0px, 0px)', '-ms-transform': 'translate3d(90%, 0px, 0px)', '-o-transform': 'translate(90%, 0px, 0px);', 'transform': 'translate3d(90%, 0px, 0px);'});
   jQuery('.carousel-product--chanel .slide-in:target').css({'-webkit-transform': 'translate3d(0px, 0px, 0px);', '-moz-transform':'translate3D(0px, 0px, 0px)', '-ms-transform': 'translate3d(0px, 0px, 0px)', '-o-transform': 'translate(0px, 0px, 0px);', 'transform': 'translate3d(0px, 0px, 0px);', 'z-index': '3'});
   jQuery('.carousel-product--chanel .slide-in:target + .slide-in').css({'z-index': '2'});
   jQuery('.carousel-product--chanel .carousel-controls--chanel').css({'postion': 'absolute', 'bottom':'0', 'width': '100%', 'z-index': '5'});
   jQuery('.carousel-product--chanel .carousel-controls--chanel .carousel-btn--chanel').css({'display': 'block', 'background-color':'grey', '-webkit-border-radius': '100%', '-moz-border-radius': '100%', 'border-radius': '100%', 'width': '8px', 'vertical-align': 'middle', 'margin': '0px 6px 15px', 'transition': 'background-color 0s ease-out width .2s ease-out .1s,height .2s ease-out .1s', 'padding':'5px'});
 };

jQuery("#second-item--chanel img").hide();
jQuery(".carousel-btn--chanel:eq(0)").click(function(){
   jQuery(".carousel-btn--chanel:eq(1)").removeClass("selected");
   jQuery(".carousel-btn--chanel:eq(0)").addClass("selected");
   jQuery("#second-item--chanel img").hide();
   jQuery("#first-item--chanel img").show();
});
jQuery(".carousel-btn--chanel:eq(1)").click(function(){
   jQuery(".carousel-btn--chanel:eq(0)").removeClass("selected");
   jQuery(".carousel-btn--chanel:eq(1)").addClass("selected");
   jQuery("#first-item--chanel img").hide();
   jQuery("#second-item--chanel img").show();
});


// FLUX DE DONNEES

jQuery("body").append("<div class='section-json-ab' style='max-height: 0px; overflow: hidden;'></div>");
         jQuery.getJSON('https://fr-gv-gop.qa.grandvision.global/medias/d38324aa-861d-4fc8-8821-2fba365b81ca.json?context=bWFzdGVyfHJvb3R8MTgwNDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg4OC9oZDcvODg1MjU5MjYyMzY0Ni5iaW58NmE2NDZlNDgwNTEwMzQ2Mzk2YTRkYTU0YzUxZDRmMTAzY2QxYmVlMTgxMjRmZDBiMjI0ZDk4NGI4OWQ1ZWJmNw',function(data){
           jQuery.each(data,function(index,d){
             jQuery('.section-json-ab').append('<div class=" '+ d.Sapid +' "> '+d.Custom1+' </div> ');
             jQuery('.section-json-ab').append('<div class=" '+ d.Sapid +' ">'+d.Color+'</div> ');
             jQuery('.section-json-ab').append('<div class=" '+ d.Sapid +' "> '+d.Custom2+' </div> ');
           });
         });
setTimeout(function(){
var imgrulautrecoloris = jQuery(".colors:eq(1) div:eq(2) img").attr("src");
var autrecolorisproductid = imgrulautrecoloris.match(/[0-9]*6/img);
var imgnoncouppeecolorisproduct = jQuery(".section-json-ab").find("."+ autrecolorisproductid +":eq(0)").text();
var nomcolorisautrecoloris = jQuery(".section-json-ab").find("."+ autrecolorisproductid +":eq(1)").text();
var imgcolorisactuel = jQuery("a.js-product-zoom.product-zoom img:eq(0)").attr("src");
var nomcoloriinitial = jQuery(".dropdown-ab span:eq(2)").text();
jQuery(".variant-color.active img").after("<span> "+ nomcoloriinitial +"</span>");
jQuery(".colors:eq(1) div:eq(2) img").attr("src", imgnoncouppeecolorisproduct);
jQuery(".colors:eq(1) div:eq(2) img").after("<span> "+ nomcolorisautrecoloris +"</span>");
jQuery(".dropdown-ab span img:eq(0), .colors:eq(1) div:eq(1) img").attr("src", imgcolorisactuel);
}, 1000);
jQuery("body").append("<style>.product-colors-sizes.colors .colors { border: 1px solid #ececec; padding: 10px 10px 0px 10px;} .product-colors-sizes.colors .colors div { border: none !important;}.product-colors-sizes.colors .colors span{ width: auto;} .variant-color.active{height:auto !important; width:65px !important;}</style>");

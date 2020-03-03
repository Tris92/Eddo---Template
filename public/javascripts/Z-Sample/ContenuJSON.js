//CODE

//Complément avec flux produit JSON
 jQuery("body").append("<div class='section-json-ab' style='max-height: 0px; overflow: hidden;'></div>");
          jQuery.getJSON('https://fr-gv-gop.qa.grandvision.global/medias/d38324aa-861d-4fc8-8821-2fba365b81ca.json?context=bWFzdGVyfHJvb3R8MTgwNDh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg4OC9oZDcvODg1MjU5MjYyMzY0Ni5iaW58NmE2NDZlNDgwNTEwMzQ2Mzk2YTRkYTU0YzUxZDRmMTAzY2QxYmVlMTgxMjRmZDBiMjI0ZDk4NGI4OWQ1ZWJmNw',function(data){

            jQuery.each(data,function(index,d){

              jQuery('.section-json-ab').append('<div class=" '+ d.Sapid +' "> '+d.Custom1+' </div> ');

              jQuery('.section-json-ab').append('<div class=" '+ d.Sapid +' ">'+d.Color+'</div> ');

              jQuery('.section-json-ab').append('<div class=" '+ d.Sapid +' "> '+d.Custom2+' </div> ');

            });

          });

jQuery("body").append("<div class='section-color-links-ab' style='display:none; height:0px; overflow:hidden;'></div>");
var allcolorsvariations = jQuery(".product-colors-sizes.colors .colors div").has("a").find("a");
jQuery(allcolorsvariations).each(function(index){
             var linkab = jQuery(this).attr("href").match(/[0-9]{6}/img).toString();
             jQuery(this).clone().appendTo('.section-color-links-ab');
            jQuery(this).addClass("linkab-"+index);
            jQuery(this).append("<span class='underlinkab' style='display:none'>"+linkab+"</span>");
});

setTimeout(function(){
var imgrulautrecoloris = jQuery(".colors:eq(1) .variant-color:not('.active') img").attr("src");
var autrecolorisproductid = jQuery(".colors:eq(1) .variant-color:not('.active') img").attr("src").match(/[0-9]{6}/img).toString();
var imgnoncouppeecolorisproduct = jQuery(".section-json-ab").find("."+ autrecolorisproductid +":eq(0)").text();
var nomcolorisautrecoloris = jQuery(".section-json-ab").find("."+ autrecolorisproductid +":eq(1)").text();
var imgcolorisactuel = jQuery("a.js-product-zoom.product-zoom img:eq(0)").attr("src");
var nomcoloriinitial = jQuery(".colors .variant-color.active span").text();
jQuery(".variant-color.active img").after("<span> "+ nomcoloriinitial +"</span>");
jQuery(".colors:eq(1) div:eq(2) img").attr("src", imgnoncouppeecolorisproduct);
jQuery(".colors:eq(1) div:eq(2) img").after("<span> "+ nomcolorisautrecoloris +"</span>");
jQuery(".dropdown-ab span img:eq(0), .colors:eq(1) div:eq(1) img").attr("src", imgcolorisactuel);

jQuery(".product-colors-sizes.colors .colors div").has("a").has("div").has("img[src='"+imgcolorisactuel+"']").remove();
jQuery(".product-colors-sizes.colors div.variant-color img").css({"margin-top":"10px", "margin-bottom":"10px"});
jQuery(".product-colors-sizes.colors .colors div").has("a").css("margin-bottom", "0px");
jQuery(".product-colors-sizes.colors .colors div").has("a").find("div").css({"margin-bottom": "0px", "display":"flex", "align-items":"center", "flex-direction":"row"});
jQuery(".product-container--config.sizes-colors .product-colors-sizes .colors").css({"margin-bottom":"0px", "padding-top":"0px"});
jQuery(".dropdown-ab").css("display", "flex");
jQuery(".product-colors-sizes.colors .colors div a").css({"width":"100%", "display":"inline-block"});
jQuery(".product-colors-sizes.colors div.variant-color span").css("padding-left", "7px");


var currentilgurlab = window.location.href.match(/[0-9]{7}/img).toString();
jQuery(".section-color-links-ab").find("a[href*='"+currentilgurlab+"']").remove();
var liencoloroptionpage1 = jQuery(".section-color-links-ab a:eq(0)").attr("href");
jQuery(".linkab-1").attr("href", liencoloroptionpage1);
var liencoloroptionpage2 = jQuery(".section-color-links-ab a:eq(1)").attr("href");
jQuery(".linkab-2").attr("href", liencoloroptionpage2);
var liencoloroptionpage3 = jQuery(".section-color-links-ab a:eq(2)").attr("href");
jQuery(".linkab-3").attr("href", liencoloroptionpage3);
var liencoloroptionpage4 = jQuery(".section-color-links-ab a:eq(3)").attr("href");
jQuery(".linkab-4").attr("href", liencoloroptionpage4);
var liencoloroptionpage5 = jQuery(".section-color-links-ab a:eq(4)").attr("href");
jQuery(".linkab-5").attr("href", liencoloroptionpage5);
var liencoloroptionpage6 = jQuery(".section-color-links-ab a:eq(5)").attr("href");
jQuery(".linkab-6").attr("href", liencoloroptionpage6);
var liencoloroptionpage7 = jQuery(".section-color-links-ab a:eq(6)").attr("href");
jQuery(".linkab-7").attr("href", liencoloroptionpage7);
var liencoloroptionpage8 = jQuery(".section-color-links-ab a:eq(7)").attr("href");
jQuery(".linkab-8").attr("href", liencoloroptionpage8);
var liencoloroptionpage9 = jQuery(".section-color-links-ab a:eq(8)").attr("href");
jQuery(".linkab-9").attr("href", liencoloroptionpage9);
var liencoloroptionpage10 = jQuery(".section-color-links-ab a:eq(9)").attr("href");
jQuery(".linkab-10").attr("href", liencoloroptionpage10);

jQuery(".product-colors-sizes.colors .colors .variant-color").css({"height":"40px", "width":"auto"});

//A compléter lorsque les lunnettes de soleil seront disponibles
if (window.location.href.match('lunettes-de-soleil')){}
}, 1000);

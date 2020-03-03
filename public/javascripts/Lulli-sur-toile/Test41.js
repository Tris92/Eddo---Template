
    //COLISSIMO
    jQuery('.sp-methods .medium-4 dt.socolissimo').click(function() {
      if(jQuery('.sp-methods .medium-4 dd.socolissimo UL').css('display') === 'block') {
        jQuery('.sp-methods .medium-4 dd.socolissimo UL').slideUp();
      jQuery('.sp-methods .medium-4 dd.socolissimo UL').css({'display': 'none'});
      } else {
        jQuery('.sp-methods .medium-4 dd.socolissimo UL').slideDown();
      jQuery('.sp-methods .medium-4 dd.socolissimo UL').css({'display': 'block'});
      }
    })

    //CHRONOPOST
    setTimeout(function() {
      jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').slideUp();
    }, 100)

    jQuery('.sp-methods .medium-4 dt.edn2chronopost').click(function() {
      if(jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').css('display') === 'block') {
        jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').slideUp();
      jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').css({'display': 'none'});
      } else {
        jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').slideDown();
      jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').css({'display': 'block'});
      }
    })

    //DHL
    setTimeout(function() {
      jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').slideUp();
    }, 100)

    jQuery('.sp-methods .medium-4 dt.edn2dhlfrance').click(function() {
      if(jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').css('display') === 'block') {
        jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').slideUp();
      jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').css({'display': 'none'});
      } else {
        jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').slideDown();
      jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').css({'display': 'block'});
      }
    })


    jQuery('.variant-size .arrowab').click(function(){
        if (jQuery('.arrowab img').css ('transform') === 'none') {
          jQuery('.othersizesab').slideDown("slow");
        jQuery(".othersizesab").css("display", "flex");
        jQuery(".arrowab img").css("transform", "rotate(180deg)");
        } else {
            jQuery('.othersizesab').slideUp("slow");
            jQuery(".othersizesab").css("display", "none");
            jQuery(".arrowab img").css("transform", "none");
          }
        })


    //chronopost
    jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').hide();
    jQuery('.sp-methods .medium-4 dt.edn2chronopost').click(function() {
      if ('.sp-methods .medium-4 dd.edn2chronopost UL:hidden'){
        jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').slideDown();
      }
    })
    jQuery('.sp-methods .medium-4 dt.edn2chronopost').click(function() {
      if('.sp-methods .medium-4 dd.edn2chronopost UL:visible'){
        jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').slideUp();
      }
    })



    //DHL
    //chronopost
    jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').hide();
    jQuery('.sp-methods .medium-4 dt.edn2dhlfrance').click(function() {
      jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').slideDown();
      if('.sp-methods .medium-4 dd.edn2dhlfrance UL:visible'){
        jQuery('.sp-methods .medium-4 dt.edn2dhlfrance').click(function() {
          jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').slideUp();
        })
      }
    })

https://www.lulli-sur-la-toile.com/onestep/index/index/?abtest

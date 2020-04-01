
    //COLISSIMO
    jQuery('.sp-methods .medium-4 dt.socolissimo').click(function() {
      if(jQuery('.sp-methods .medium-4 dd.socolissimo UL').css('display') === 'block') {
        jQuery('.sp-methods .medium-4 dd.socolissimo UL').slideUp();
      jQuery('.sp-methods .medium-4 dd.socolissimo UL').css({'display': 'none'});
      } else {
        jQuery('.sp-methods .medium-4 dd.socolissimo UL').slideDown();
      jQuery('.sp-methods .medium-4 dd.socolissimo UL').css({'display': 'block'});
      }
      //chronopost slide up
      jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').slideUp();
      jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').css({'display': 'none'});
      //dhl slideup
      jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').slideUp();
      jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').css({'display': 'none'});
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
      //colissimo slideup
      jQuery('.sp-methods .medium-4 dd.socolissimo UL').slideUp();
      jQuery('.sp-methods .medium-4 dd.socolissimo UL').css({'display': 'none'});
      //dhl slideup
      jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').slideUp();
      jQuery('.sp-methods .medium-4 dd.edn2dhlfrance UL').css({'display': 'none'});
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
      //colissimo slideUp
      jQuery('.sp-methods .medium-4 dd.socolissimo UL').slideUp();
      jQuery('.sp-methods .medium-4 dd.socolissimo UL').css({'display': 'none'});
      //chronopost slideup
      jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').slideUp();
      jQuery('.sp-methods .medium-4 dd.edn2chronopost UL').css({'display': 'none'});
    })

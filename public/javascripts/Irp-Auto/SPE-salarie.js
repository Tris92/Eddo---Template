

  if (window.matchMedia('(min-width: 768px)').matches){
    jQuery('.push_bloc_contact DIV').addClass("triggerBtn")
    setTimeout(function(){
      jQuery('.triggerBtn').on("click", function(){
        jQuery( ".triggerBtn" ).trigger( "click" );
      })
    }, 100)
    setTimeout(function(){
      jQuery('.LnkWcbForm-container-pos').hide();
    }, 100)

    jQuery('.abtasty-modal__content').addClass("var2");
    jQuery('.var2').css({'height': '500px'});
    jQuery('.buttonVar2').click(function() {
      jQuery('.abtasty-modal').hide();
      setTimeout(function(){
        if(jQuery('.abtasty-modal__content').length === 0) {
          jQuery('.LnkWcbForm-container-pos').show();
        }
      }, 500)
    })
  }

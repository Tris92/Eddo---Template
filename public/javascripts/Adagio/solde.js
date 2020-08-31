// VERSION FRANCAISE

  if (!window.abt606646) {
    window.abt606646 = true;

      jQuery('.hotel-address').after('<div class="coronaDiv"><div style="display: flex; flex-direction: row;"><img class="coronaLogo" src="/themes/custom/adagio/hotel/logo-adagio_red.svg"><div style="display: flex; flex-direction: column;"><p class="coronaText"> <b> SOLDES ADAGIO </b> : jusqu\'a <b> -40% </b> sur les séjours jusqu\'au 1er novembre en réservant avant le 30 juillet*</p><div id="demo"></div></div></div></div>');

    // Set the date we're counting down to
var countDownDate = new Date("Jul 30, 2020 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
if (window.matchMedia("(min-width: 768px)").matches) {
  jQuery("#demo").html(" <span>Plus que </span><span class='joursab'><p class='number'>"+ days +"</p><p>jours</p></span><span class='heuresab'><p class='number'>"+ hours +"</p><p> heures</p></span> <span class='minutesab'><p class='number'>"+ minutes +"</p><p>minutes</p></span><span class='secondessab'><p class='number'>"+ seconds +"</p><p> secondes</p> </span><span> pour en profiter !</span>");
  jQuery('#demo').css({'margin-bottom': '13px'});
} if (window.matchMedia("(max-width: 767px)").matches) {
  jQuery("#demo").html(" <span>Plus que </span><span class='joursab'><p class='number'>"+ days +"</p><p>j</p></span><span class='heuresab'><p class='number'>"+ hours +"</p><p> h</p></span> <span class='minutesab'><p class='number'>"+ minutes +"</p><p>m</p></span><span class='secondessab'><p class='number'>"+ seconds +"</p><p> s</p> </span><span class='textProfiter'> pour en profiter !</span>");
}
if (window.matchMedia("(max-width: 321px)").matches) {
  jQuery("#demo").html("<div style='display: block'> <div style='display: -webkit-inline-box; margin-bottom: 10px'> <span>Plus que </span><span class='joursab'><p class='number'>"+ days +"</p><p>j</p></span><span class='heuresab'><p class='number'>"+ hours +"</p><p> h</p></span> <span class='minutesab'><p class='number'>"+ minutes +"</p><p>m</p></span><span class='secondessab'><p class='number'>"+ seconds +"</p><p> s</p> </span> </div> <span class='textProfiter'> <br> pour en profiter !</span> </div>");
}

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
     //jQuery("#demo").html(" <span class='joursab'><p>0</p><p>jours</p></span> <span class='heuresab'><p>0</p><p> heures</p></span> <span class='secondessab'><p>0</p><p> secondes</p> </span>");
  }
//Espacements compte à rebours nombre et lettres
jQuery( ".number" ).each(function() {
  var number = jQuery(this).text();
  var numberFloatted = parseFloat(number);
    if(numberFloatted < 10){jQuery(this).css({'width':'15px'});}
    else {jQuery(this).css({'width':'23px'});}
});

}, 1000);


jQuery('.coronaDiv').css({'padding-left': '23px', 'margin': '15px auto auto auto', 'display': 'block', 'background': 'url(https://res.cloudinary.com/adagio/image/upload/s--mNFPXKew--/c_crop%2Cdn_72%2Cf_auto%2Ch_76%2Cq_auto%2Cw_1280/v1/brand_statement/field_background_image/2020-03/bg_0_0_0_0.png?itok=I62TGZKC) repeat', 'align-items': 'center', 'min-height': '76px', 'border-radius': '12px', 'width': '90%', 'justify-content': 'center'});
      jQuery('.coronaText').css({'margin-left': '15px', 'font-size':'14px', 'line-height': '22px', 'color': '#4a4a4a', 'padding': '20px 20px 0px 0', 'flex-basis': '90%', 'font-family': 'GothamMedium', 'justify-content': 'center'});
      jQuery('.coronaHyperText').css({'font-style': 'underline', 'color': '#4a4a4a'});
      jQuery('.coronaLogo').css({'display': 'flex', 'vertical-align': 'middle', 'padding-top':'4px'});
    }



    //CSS

    #demo {
      display: flex;
      flex-flow: row;
      width: 100%;
      justify-content: flex-start;
      margin-left: 4px;
      font-family: GothamMedium;
      font-size: 14px;
      color: rgb(74, 74, 74);
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left:11px;
    }

    div#demo .joursab, div#demo .heuresab, div#demo .secondessab, div#demo .minutesab {
      display: flex;
      padding-left: 0px;
      padding-right: 4px;
      color: rgb(227, 82, 5);
    }

    div#demo .joursab p:nth-of-type(1), div#demo .heuresab p:nth-of-type(1), div#demo .secondessab p:nth-of-type(1), div#demo .minutesab p:nth-of-type(1) {
      padding-left: 0px;
      padding-right: 0px;
      width: 20px;
    }

    div#demo span:nth-of-type(1) {
      padding-right: 3px;
    }

    div#demo .joursab p:nth-of-type(1) {
      padding-right: 1px;
    }
    .number {
      text-align: center !important;
    }

    @media screen and (min-width: 381px) and (max-width:767px){
      .coronaText{
        font-size: 13px !important;
      }
      div#demo span:nth-of-type(1),  div#demo span:nth-of-type(6){
          font-size: 13px;
      }
      div#demo span:nth-of-type(1){
        padding-right: 0px;
      }

      .coronaDiv{
        padding-left: 5px !important;
      }
      .coronaLogo{
        width: 25px !important;
      }
      #demo{
        padding-left:11px !important
      }
    }

    @media screen and (max-width:380px){
    .coronaText{
      font-size: 13px !important;
    }
    div#demo span:nth-of-type(1), div#demo span:nth-of-type(6){
      font-size: 13px;
    }
    div#demo span:nth-of-type(1){
      width: 30px !important;
      max-width: 30px !important;
      overflow-wrap: break-word;
      padding-right: 0px;
    }
    div#demo span:nth-of-type(6){
      width: 60px !important;
      max-width: 60px !important;
      overflow-wrap: break-word;
    }
    .coronaDiv{
      padding-left: 5px !important; padding-right: 20px;
    }
    .coronaLogo{
      width: 25px !important;
    }
    #demo{
      display: -webkit-inline-box;
    }
    }







// OLD VERSION


// VERSION FRANCAISE

  if (!window.abt606646) {
    window.abt606646 = true;

/**if (window.matchMedia("(max-width: 414px)").matches) {
      jQuery('.hotel-address').after('<div class="coronaDiv"><img class="coronaLogo" src="/themes/custom/adagio/hotel/logo-adagio_red.svg"><p class="coronaText">PETIT-DEJEUNER GRATUIT pour les enfants en juillet et en août (pour un petit-déjeuner adulte acheté) ! & 10 € OFFERTS sur l\'épicerie (pour un séjour jusqu\'au 31 décembre 2020)!</p></div>');
      jQuery('.coronaDiv').css({'padding-left': '23px', 'margin': '5px auto auto auto', 'display': 'block', 'background': 'url(https://res.cloudinary.com/adagio/image/upload/s--mNFPXKew--/c_crop%2Cdn_72%2Cf_auto%2Ch_76%2Cq_auto%2Cw_1280/v1/brand_statement/field_background_image/2020-03/bg_0_0_0_0.png?itok=I62TGZKC) repeat', 'align-items': 'center', 'min-height': '76px', 'border-radius': '12px', 'width': '93%', 'justify-content': 'center'});
      jQuery('.coronaText').css({'margin-left': '20px', 'font-size':'12px', 'line-height': '22px', 'color': '#4a4a4a', 'padding': '20px 5px 0px 0', 'flex-basis': '85%', 'flex-shrink': '0.5', 'font-family': 'GothamMedium', 'justify-content': 'center'});
      jQuery('.coronaHyperText').css({'font-style': 'underline', 'color': '#4a4a4a'});
      jQuery('.coronaLogo').css({'display': 'flex', 'vertical-align': 'middle', 'height': '30px', 'width': '30px', 'margin-right': '-10px'});
    } **/
      jQuery('.hotel-address').after('<div class="coronaDiv"><div style="display: flex; flex-direction: row;"><img class="coronaLogo" src="/themes/custom/adagio/hotel/logo-adagio_red.svg"><div style="display: flex; flex-direction: column;"><p class="coronaText"> <b> SOLDES ADAGIO </b> : jusqu\'a <b> -40% </b> sur les séjours jusqu\'au 1er novembre en réservant avant le 30 juillet*</p><div id="demo"></div><p style="margin-left: 15px;font-size: 14px;line-height: 7px;color: rgb(74, 74, 74);padding: 0px 20px 0px 0px;padding: 0px 20px 16px 0px;-basis: 90%;font-family: GothamMedium;justify-content: center;"><i style="margin-left: 0px;font-size: 10px;line-height: 22px;color: rgb(74, 74, 74);padding: 0px 20px 0px 0px;flex-basis: 90%;font-family: GothamMedium !important;justify-content: center;"></i></p></div></div></div>');

    // Set the date we're counting down to
var countDownDate = new Date("Jul 30, 2020 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
if (window.matchMedia("(min-width: 768px)").matches) {
  jQuery("#demo").html(" <span>Plus que </span><span class='joursab'><p class='number'>"+ days +"</p><p>jours</p></span><span class='heuresab'><p class='number'>"+ hours +"</p><p> heures</p></span> <span class='minutesab'><p class='number'>"+ minutes +"</p><p>minutes</p></span><span class='secondessab'><p class='number'>"+ seconds +"</p><p> secondes</p> </span><span> pour en profiter !</span>");
} if (window.matchMedia("(max-width: 767px)").matches) {
  jQuery("#demo").html(" <span>Plus que </span><span class='joursab'><p class='number'>"+ days +"</p><p>j</p></span><span class='heuresab'><p class='number'>"+ hours +"</p><p> h</p></span> <span class='minutesab'><p class='number'>"+ minutes +"</p><p>m</p></span><span class='secondessab'><p class='number'>"+ seconds +"</p><p> s</p> </span><span class='textProfiter'> pour en profiter !</span>");
}

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
     //jQuery("#demo").html(" <span class='joursab'><p>0</p><p>jours</p></span> <span class='heuresab'><p>0</p><p> heures</p></span> <span class='secondessab'><p>0</p><p> secondes</p> </span>");
  }
//Espacements compte à rebours nombre et lettres
jQuery( ".number" ).each(function() {
  var number = jQuery(this).text();
  var numberFloatted = parseFloat(number);
    if(numberFloatted < 10){jQuery(this).css({'width':'15px'});}
    else {jQuery(this).css({'width':'23px'});}
});

}, 1000);


jQuery('.coronaDiv').css({'padding-left': '23px', 'margin': '15px auto auto auto', 'display': 'block', 'background': 'url(https://res.cloudinary.com/adagio/image/upload/s--mNFPXKew--/c_crop%2Cdn_72%2Cf_auto%2Ch_76%2Cq_auto%2Cw_1280/v1/brand_statement/field_background_image/2020-03/bg_0_0_0_0.png?itok=I62TGZKC) repeat', 'align-items': 'center', 'min-height': '76px', 'border-radius': '12px', 'width': '90%', 'justify-content': 'center'});
      jQuery('.coronaText').css({'margin-left': '15px', 'font-size':'14px', 'line-height': '22px', 'color': '#4a4a4a', 'padding': '20px 20px 0px 0', 'flex-basis': '90%', 'font-family': 'GothamMedium', 'justify-content': 'center'});
      jQuery('.coronaHyperText').css({'font-style': 'underline', 'color': '#4a4a4a'});
      jQuery('.coronaLogo').css({'display': 'flex', 'vertical-align': 'middle', 'padding-top':'4px'});
    }

jQuery('.hotel-address').after('<div class="coronaDiv" style="padding-bottom: 5px !important"><div style="display: flex; flex-direction: row;"><img class="coronaLogo" src="/themes/custom/adagio/hotel/logo-adagio_red.svg"><div style="display: flex; flex-direction: column;"><p class="coronaText"> <b> EASTER PROMOTION </b> <b style="color: rgb(227, 82, 5);">3 = 2 </b> </br> For stays from <b> 03/26 to 09/01</b></p><div id="demo"></div></div></div></div>');
// Set the date we're counting down to
var countDownDate = new Date("March 25, 2021 23:50:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes a$nd seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  if (window.matchMedia("(min-width: 768px)").matches) {
    jQuery("#demo").html(" <span></span><span class='joursab'><p class='number'>" + days + "</p><p>days</p></span><span class='heuresab'><p class='number'>" + hours + "</p><p> hours</p></span> <span class='minutesab'><p class='number'>" + minutes + "</p><p>minutes</p></span><span class='secondessab'><p class='number'>" + seconds + "</p><p> secondes</p> </span><span></span>");
    jQuery('#demo').css({
      'margin-bottom': '12px'
    });
  }
  if (window.matchMedia("(max-width: 767px)").matches) {
    jQuery("#demo").html(" <span></span><span class='joursab'><p class='number'>" + days + "</p><p>d</p></span><span class='heuresab'><p class='number'>" + hours + "</p><p> h</p></span> <span class='minutesab'><p class='number'>" + minutes + "</p><p>m</p></span><span class='secondessab'><p class='number'>" + seconds + "</p><p> s</p> </span><span class='textProfiter'></span>");
  }
  if (window.matchMedia("(max-width: 321px)").matches) {
    jQuery("#demo").html("<div style='display: block'> <div style='display: -webkit-inline-box; margin-bottom: 15px'> <span></span><span class='joursab'><p class='number'>" + days + "</p><p>d</p></span><span class='heuresab'><p class='number'>" + hours + "</p><p> h</p></span> <span class='minutesab'><p class='number'>" + minutes + "</p><p>m</p></span><span class='secondessab'><p class='number'>" + seconds + "</p><p> s</p> </span> </div> <span class='textProfiter'> <br></span> </div>");
  }
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    //jQuery("#demo").html(" <span class='joursab'><p>0</p><p>jours</p></span> <span class='heuresab'><p>0</p><p> heures</p></span> <span class='secondessab'><p>0</p><p> secondes</p> </span>");
  }
  //Espacements compte à rebours nombre et lettres
  jQuery(".number").each(function() {
    var number = jQuery(this).text();
    var numberFloatted = parseFloat(number);
    if (numberFloatted < 10) {
      jQuery(this).css({
        'width': '15px'
      });
    } else {
      jQuery(this).css({
        'width': '23px'
      });
    }
  });
}, 1000);
jQuery('.coronaDiv').css({
  'padding-left': '23px',
  'margin': '15px auto auto auto',
  'display': 'block',
  'background': 'url(https://res.cloudinary.com/adagio/image/upload/s--mNFPXKew--/c_crop%2Cdn_72%2Cf_auto%2Ch_76%2Cq_auto%2Cw_1280/v1/brand_statement/field_background_image/2020-03/bg_0_0_0_0.png?itok=I62TGZKC) repeat',
  'align-items': 'center',
  'min-height': '76px',
  'border-radius': '12px',
  'width': '90%',
  'justify-content': 'center'
});
jQuery('.coronaText').css({
  'margin-left': '15px',
  'font-size': '14px',
  'line-height': '22px',
  'color': '#4a4a4a',
  'padding': '20px 20px 0px 0',
  'flex-basis': '90%',
  'font-family': 'GothamMedium',
  'justify-content': 'center'
});
jQuery('.coronaHyperText').css({
  'font-style': 'underline',
  'color': '#4a4a4a'
});
jQuery('.coronaLogo').css({
  'display': 'flex',
  'vertical-align': 'middle',
  'padding-top': '4px'
});

//CSS du timer

jQuery("body").append("<style>.ab_widget_container_countdown{\ndisplay:none !important;\n}\n\n#demo {\n      display: flex;\n      flex-flow: row;\n      width: 100%;\n      justify-content: flex-start;\n      margin-left: 4px;\n      font-family: GothamMedium;\n      font-size: 14px;\n      color: rgb(74, 74, 74);\n      padding-top: 10px;\n      padding-bottom: 10px;\n      padding-left:11px;\nmargin-bottom: 10px !important;\n    }\n\n    div#demo .joursab, div#demo .heuresab, div#demo .secondessab, div#demo .minutesab {\n      display: flex;\n      padding-left: 0px;\n      padding-right: 4px;\n      color: rgb(227, 82, 5);\n    }\n\n    div#demo .joursab p:nth-of-type(1), div#demo .heuresab p:nth-of-type(1), div#demo .secondessab p:nth-of-type(1), div#demo .minutesab p:nth-of-type(1) {\n      padding-left: 0px;\n      padding-right: 0px;\n      width: 20px;\n    }\n\n    div#demo span:nth-of-type(1) {\n      padding-right: 3px;\n    }\n\n    div#demo .joursab p:nth-of-type(1) {\n      padding-right: 1px;\n    }\n    .number {\n      text-align: center !important;\n    }\n\n    @media screen and (min-width: 381px) and (max-width:767px){\n      .coronaText{\n        font-size: 13px !important;\n      }\n      div#demo span:nth-of-type(1),  div#demo span:nth-of-type(6){\n          font-size: 13px;\n      }\n      div#demo span:nth-of-type(1){\n        padding-right: 0px;\n      }\n\n      .coronaDiv{\n        padding-left: 5px !important;\n      }\n      .coronaLogo{\n        width: 25px !important;\n      }\n      #demo{\n        padding-left:11px !important\n      }\n    }\n\n@media screen and (max-width:380px){\n    .coronaText{\n      font-size: 13px !important;\n    }\n    div#demo span:nth-of-type(1), div#demo span:nth-of-type(6){\n      font-size: 13px;\n    }\n    div#demo span:nth-of-type(1){\n      width: 30px !important;\n      max-width: 30px !important;\n      overflow-wrap: break-word;\n      padding-right: 0;\n    }\n    div#demo span:nth-of-type(6){\n      width: 60px !important;\n      max-width: 60px !important;\n      overflow-wrap: break-word;\n    }\n    .coronaDiv{\n      padding-left: 5px !important; \n      padding-right: 20px;\n    padding-bottom:15px !important;\n    }\n    .coronaLogo{\n      width: 25px !important;\n    }\n    #demo{\n      display: -webkit-inline-box;\n      margin-bottom: 15px!important;\n    }\n    }</style>");

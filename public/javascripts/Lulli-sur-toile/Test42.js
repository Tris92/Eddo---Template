// ANCIENNE VERSION DU TEST


var testPrice = jQuery(".checkout-totals .price:eq(0)").text().toString();
var az = testPrice.match(/[-+]?[0-9]{1,6}[,][0-9]{1,6}/img);
console.log(testPrice);

jQuery(document).ready(function(){
  if(jQuery(az > 0)) {
    jQuery("#p_method_PaylineCPT6668822").click();
    var paymentCta = jQuery('#place-order-wrapper').html();
    jQuery('#dd_method_PaylineCPT6668822 UL IMG').after(paymentCta);
    jQuery('#dd_method_PaylineCPT666882201 UL IMG').after(paymentCta);

    jQuery('#dd_method_PaylineCPT666882202 UL IMG').after(paymentCta);
    jQuery('#dd_method_PaylineCPT9492622725 UL IMG').after(paymentCta);
    jQuery('#dd_method_paypal_standard UL LI').after(paymentCta);
    jQuery('#dd_method_bankpayment UL LI').after(paymentCta);

    jQuery('#place-order-button').css({'display': 'block', 'margin-top': '10px'});
    jQuery('#place-order-wrapper').remove();
  }
  if(jQuery(az <= 0)) {
    jQuery('.onestep-wrapper  #place-order-wrapper').show();
    jQuery('.onestep-wrapper  #place-order-wrapper').css({'display': 'block !important'});
  }
});

jQuery(function(){
  var isFirefox = typeof InstallTrigger !== 'undefined';
  jQuery('.radio').css({'width': '19px', 'height': '19px'});
})


// NEW TEST VERSION


var testPrice = jQuery(".checkout-totals .price:eq(0)").text().toString();
var az = testPrice.match(/[-+]?[0-9]{1,6}[,][0-9]{1,6}/img);
console.log(testPrice);

jQuery(document).ready(function(){
  jQuery("#p_method_PaylineCPT6668822").click();
  var paymentCta = jQuery('#place-order-wrapper').html();
  if(jQuery(az > 0)) {
    jQuery('#place-order-wrapper').remove();
  }
  if(jQuery(az <= 0)) {
    jQuery('#place-order-wrapper').remove();
  }
  jQuery('#checkout-step-payment').append(paymentCta);
  jQuery('#place-order-button').css({'margin-top': '15px'});
});

jQuery(function(){
  var isFirefox = typeof InstallTrigger !== 'undefined';
  jQuery('.radio').css({'width': '19px', 'height': '19px'});
})

// xxx

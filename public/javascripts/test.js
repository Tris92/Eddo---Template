if (!window.abt559181) {
  window.abt559181 = true;


jQuery('.section.section-wide.section-sep:has(.meta .label.label-primary)').after('<div class="container-753l"> <div class="flex-container-753l"> <span class="span-white-753l">Découvrez :</span> <a class="button-flex-container-753l" href="https://www.fr.weber/search-content/content_type/article"><img class="img-flex-container-753" src="https://www.eddo.fr/wp-content/uploads/2019/12/Weber-dispo.png" alt=""><span class="span-yellow-flex-753">Tous nos articles</span> </a> <a class="button-flex-container-753l" href="https://www.fr.weber/search-content/content_type/problem_solution"> <img class="img-flex-container-753" src="https://www.eddo.fr/wp-content/uploads/2019/12/Weber-dispo.png" alt=""> <span class="span-yellow-flex-753">Nos fiches Pas à Pas</span> </a> <a class="button-flex-container-753l" href="https://www.fr.weber/search-content/bundle/video"> <img class="img-flex-container-753" src="https://www.eddo.fr/wp-content/uploads/2020/01/picto_btn_video.png" alt=""> <span class="span-yellow-flex-753">Nos vidéos</span> </a> </div></div></div>');
jQuery('.section.section-wide.section-sep:has(.meta .label.label-primary)').before('<div class="container-753"> <div class="flex-container-753"> <div class="text-flex-container-753"><span class="span-black-753">Retrouver tous nos produits prêt de chez vous dans plus de</span></br><span class="span-yellow-753">2000 points de ventes</span> </div><a class="button-flex-container-753" href="https://distributeurs.fr.weber/fr"> <img class="img-flex-container-753" src="https://www.eddo.fr/wp-content/uploads/2019/12/distributeurs.png" alt=""> <span class="span-yellow-flex-753">Trouver un distributeur</span> </a> </div></div></div>');

}




// Display the result in the element with id="demo"
if (window.matchMedia("(min-width: 768px)").matches) {
  jQuery("#demo").html("<span>Only </span><span class='joursab'><p class='number'>"+ days +"</p><p>days</p></span><span class='heuresab'><p class='number'>"+ hours +"</p><p> hours</p></span> <span class='minutesab'><p class='number'>"+ minutes +"</p><p>minutes</p></span><span class='secondessab'><p class='number'>"+ seconds +"</p><p> seconds</p> </span><span> to enjoy it!</span>");
  jQuery('#demo').css({'margin-bottom': '12px'});
} if (window.matchMedia("(max-width: 767px)").matches) {
  jQuery("#demo").html(" <span>Only </span><span class='joursab'><p class='number'>"+ days +"</p><p>days</p></span><span class='heuresab'><p class='number'>"+ hours +"</p><p> hours</p></span> <span class='minutesab'><p class='number'>"+ minutes +"</p><p>minutes</p></span><span class='secondessab'><p class='number'>"+ seconds +"</p><p> seconds</p> </span><span class='textProfiter'> to enjoy it!</span>");
} if (window.matchMedia("(max-width: 321px)").matches) {
  jQuery("#demo").html("<div style='display: block'> <div style='display: -webkit-inline-box; margin-bottom: 15px'> <span>Only </span><span class='joursab'><p class='number'>"+ days +"</p><p>j</p></span><span class='heuresab'><p class='number'>"+ hours +"</p><p> h</p></span> <span class='minutesab'><p class='number'>"+ minutes +"</p><p>m</p></span><span class='secondessab'><p class='number'>"+ seconds +"</p><p> s</p> </span> </div> <span class='textProfiter'> <br> to enjoy it!</span> </div>");


  // setInterval(function() {
    jQuery(".validItem #tab-product_documentation").on('click', function () {
      if(jQuery('.validItem .panel-heading .panel-title A:eq(0)').css('background-color') === 'rgb(238, 238, 238)') {
        jQuery('.validItem .panel-heading .panel-title A:eq(0)').addClass("collapsed");}
      // } else {
      //   jQuery('.validItem .panel-heading .panel-title A:eq(0)').removeClass("collapsed");
      // }
    });
  // }, 300);

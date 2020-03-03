//CODE

Copier-coller le code sur https:
//www.prixtel.com/
pour voir le fonctionnement.

jQuery(".abtest-test-burger").click(function(){
    jQuery(".abtest-test-overlay").css("visibility", "visible");
    });

jQuery("header .wpx_cross li:eq(0), header .wpx_cross li:eq(1)").hide();

jQuery(".wpx_primary").hide();

jQuery("header .wpx_cross").append("<div class='burger abtest-test-burger-open'><span></span></div>");

jQuery("body").append('<nav class="abtest-test-nav"><ul class="main"><li><a href="https://assistance.prixtel.com/" class="wpx_icon wpx_i-assistance" id="go-to-assistance-header" data-ga="Assistance"><span>Forum/FAQ</span></a></li><li><a href="https://www.prixtel.com/pws/SSO/authentication?callback=/client" id="ahref_ec" class="wpx_icon wpx_i-client" data-ga="Espace Client"><span>Espace client</span></a></li><li><a href="//www.prixtel.com/forfait-mobile/" data-ga="Forfaits mobile">Forfaits mobile</a></li><li><a href="//www.prixtel.com/telephone-mobile/" data-ga="Telephones">Téléphones</a></li></ul></nav>');

    jQuery(".abtest-test-nav").prepend("<div class='burger abtest-test-burger-open'><span></span></div>");
    jQuery(".abtest-test-nav").prepend("<div class='burger abtest-test-burger-close'><span></span></div>");
jQuery(".abtest-test-nav").after('<div class="abtest-test-overlay overlay"></div>');



    jQuery(".abtest-test-burger-open span").click(function(){
     jQuery(".burger.abtest-test-burger-open").hide();
        jQuery(".burger.abtest-test-burger-close").show();
        jQuery(".abtest-test-overlay.overlay").show();
    jQuery(".abtest-test-nav").show();

    var hauteurbody = jQuery("body").height();
    jQuery(".abtest-test-overlay.overlay").height(hauteurbody);
    jQuery(".abtest-test-nav").height(hauteurbody);

console.log("clic open");

    });

         jQuery(".abtest-test-burger-close span, .abtest-test-overlay.overlay").click(function(){
             jQuery(".burger.abtest-test-burger-close").hide();
             jQuery(".burger.abtest-test-burger-open").show();
            jQuery(".abtest-test-overlay.overlay").hide();
            jQuery(".abtest-test-nav").hide();
        console.log("clic close");
    });



    jQuery("body").append('<style>header .wpx_basket.wpx_empty:before{border-color: transparent transparent #ffd77b transparent;} header .wpx_basket{top:4em !important;} .wpx_cross a{margin-right:56px;} .abtest-test-nav{display:none;} .abtest-test-burger-open span { display: block !important; background-image: url(https://www.eddo.fr/wp-content/uploads/2019/10/prixtel-menu-open.png); height: 33px; background-size: contain; background-repeat: no-repeat; position: absolute; top: 14px; right: 31px; width: 31px;} .abtest-test-burger-close span { display: block !important; background-image: url(https://www.eddo.fr/wp-content/uploads/2019/10/prixtel-menu-close.png); height: 33px; background-size: contain; background-repeat: no-repeat; position: absolute; top: 14px; right: 31px; width: 31px;} .abtest-test-overlay.overlay {background: #00000040; min-width: 200%; position: absolute; display: none; top: 0; Z-INDEX: 9999;} nav.abtest-test-nav { position: absolute; top: 0px; right: 0px; z-index: 99999; width: 80%; height: 100%; background: white;} .abtest-test-nav .main li a { width: 100%; display: block !important; text-align: center; font-size: 2.5em; padding-top: 1em; color: #444444; margin-right: 0px !important;} .abtest-test-nav .main { padding: 17%;} .abtest-test-nav .main li a:hover { color: #EB5A5E;}header.wpx_header { border-bottom: 2px solid #F4F4F4;}</style>');

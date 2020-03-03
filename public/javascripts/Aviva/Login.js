// <------------------------------------------- ORIGINAL

<script>
    console.log("ok test target");

    _satellite.setVar('experienceName', 'AB test 14 - Variante B');
  	hj('trigger', 'Homepage_FusionBouton');


//$( document ).ready( function() {
  setInterval(function () {

    if ($("header a:contains(Mon espace)").length === 0 && $("#login .a-button.a-button--primary.a-button--full-width:contains(Mon espace)").length === 0){

    if ( ( $(".o-masthead__login-link a:contains(Se connecter)").length && $(".o-masthead__login-link a:contains(inscrire)").length ) || ( $("#login .a-button.a-button--primary.a-button--full-width:contains(Se connecter)").length && $("#login .a-button.a-button--primary.a-button--full-width:contains(enregistrer)").length ) ) {

		$(".o-masthead__login-link a:contains(inscrire)").hide();
		$(".o-masthead__login-link a:contains(Se connecter)").text("Mon espace");

		$("header a:contains(Mon espace)").html("<span>Mon espace</span><img src='https://www.eddo.fr/wp-content/uploads/2019/10/login.png'>");
		$("header a:contains(Mon espace) img").css("width", "22px");
		$("header a:contains(Mon espace) img").css("vertical-align", "middle");
		$("header a:contains(Mon espace) img").css("padding-left", "5px");
		$("header a:contains(Mon espace) img").css("padding-bottom", "5px");

    if (window.matchMedia('(max-width: 559px)').matches){

		$("ul.a-list-plain.o-masthead-login__link-list").hide();
    	$(".o-masthead-logo").after("<a href='https://www.aviva.fr/espaceclient/MonCompte/Connexion'><img src='https://www.eddo.fr/wp-content/uploads/2019/11/login-aviva.png' style='width: 24px; display: block; position: absolute; top: 17px; right: 20px;'></a>");

      }


	    }
    }

    }, 200);

  console.log("ok test target fin du code");
</script>

// <-------------------------------------------- WEB

setInterval(function () {

    if ($("header a:contains(Mon espace)").length === 0 && $("#login .a-button.a-button--primary.a-button--full-width:contains(Mon espace)").length === 0){
    if (( $(".o-masthead__login-link a:contains(Se connecter)").length && $(".o-masthead__login-link a:contains(inscrire)").length ) || ( $("#login .a-button.a-button--primary.a-button--full-width:contains(Se connecter)").length && $("#login .a-button.a-button--primary.a-button--full-width:contains(enregistrer)").length ) ) {

    $(".o-masthead__login-link a:contains(inscrire)").hide();
    $(".o-masthead__login-link a:contains(Se connecter)").text("Mon espace");
    $("header a:contains(Mon espace)").html("<span>Mon espace</span><img src='https://www.eddo.fr/wp-content/uploads/2019/10/login.png'>");
    $("header a:contains(Mon espace) img").css("width", "22px");
    $("header a:contains(Mon espace) img").css("vertical-align", "middle");
    $("header a:contains(Mon espace) img").css("padding-left", "5px");
    $("header a:contains(Mon espace) img").css("padding-bottom", "5px");

    }
    }
    }, 200);

console.log("ok test target fin du code");


// <-------------------------------------- MOBILE

<script>
    console.log("ok test target");

    _satellite.setVar('experienceName', 'AB test 14 - Variante B');
  	hj('trigger', 'Homepage_FusionBouton');

  setInterval(function () {

  if (window.matchMedia('(max-width: 559px)').matches){

		$("ul.a-list-plain.o-masthead-login__link-list").hide();
    	$(".o-masthead-logo").after("<a href='https://www.aviva.fr/espaceclient/MonCompte/Connexion'><img src='https://www.eddo.fr/wp-content/uploads/2019/11/login-aviva.png' style='width: 24px; display: block; position: absolute; top: 17px; right: 20px;'></a>");

      }

    }, 200);

  console.log("ok test target fin du code");


</script>

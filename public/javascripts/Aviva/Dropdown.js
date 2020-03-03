
	// SOLUTION SEBASTIEN  *********************************** VERSION OFFICIELLE UTILISE POUR TEST *********************************************


 // AFFICHAGE WARNING

	 jQuery('.seoInfo').eq(2).after('<div class=\"warningDiv\"><div class=\"warningIcon\">i</div><p class=\"warningInfo\">Pensez à vous munir de votre carte grise & relevé dinformation pour compléter votre devis</p></div>')
	 jQuery('.warningDiv').css({'display': 'flex', 'margin-top': '10px', });
	 jQuery('.warningIcon').css({'background-color': '#44c0ff', 'height': 'auto', 'width': '3.125em', 'padding': '10px 10px 5px 20px', 'color': '#FFFF', 'font-size': '15px', 'border': '3px solid #44c0ff'});
	 jQuery('.warningInfo').css({'background-color': '#FFFFF', 'height': 'auto', 'width': '100%', 'margin': '0', 'padding': '10px', 'border': '1px solid #aaa'});


	// DROPDOWN MODELE DE VEHICULE

	setInterval(function() {
	    if (jQuery(".a-label:contains(Sélectionnez le modèle de votre véhicule)").length === 1 && jQuery(".dropdownab").length === 0){
		    jQuery(".m-form-row:contains(Sélectionnez le modèle de votre véhicule)").find(".m-form-row__content").append("<div class='dropdownab'></div>");
		    jQuery(".m-form-row:contains(Sélectionnez le modèle de votre véhicule)").find(".m-form-row__content ul").addClass("liste-origine-ab");
		    jQuery(".m-form-row:contains(Sélectionnez le modèle de votre véhicule)").find(".m-form-row__content ul li").each(function(index, value){
		    jQuery(this).clone().appendTo(jQuery('.dropdownab'));
			});
      /** DÉBUT STYLE **/
      jQuery('.dropdownab').before("<div class='btn-dropdown-ab'>Choisir un modèle <span class=\"a-dropdown__ui-2\"></span></div> ");
			jQuery('.btn-dropdown-ab').css({'border': '1px solid #aaa', 'width': '100%', 'padding': '.75em 1.25em', 'min-height': '3.125em', 'border-radius': '.25em', 'color': '#444', 'line-height': '1.5em',  'box-shadow': '0 2px 2px 0 hsla(0,0%,80%,.5)'});
			jQuery('.a-dropdown__ui-2').css({'background': 'transparent url(https://www.eddo.fr/wp-content/uploads/2019/12/noun_chevron_1746037-1.png) no-repeat center', 'border-radius': '0 .3125em .3125em 0', 'bottom': '.1875em', 'content': '""', 'width':'2em', 'position': 'absolute', 'top': '.1875em', 'right': '.125em', 'display': 'block', 'margin-right': '10px'});
      jQuery(".liste-origine-ab").height(0);
      jQuery(".dropdownab").hide();
      jQuery(".m-form-row:contains(Sélectionnez le modèle de votre véhicule) .m-form-row__content").on('click', '.btn-dropdown-ab', function (event) {
          event.stopPropagation();
              if(jQuery(".dropdownab:visible").length === 1){jQuery(".dropdownab").slideUp();}
              if(jQuery(".dropdownab:visible").length === 0){jQuery(".dropdownab").slideDown();}
      });
			jQuery(".dropdownab span.a-radio__label").addClass('itemDropdown');
			jQuery('body').append("<style>.itemDropdown:before{border:0 !important; background: none !important; }</style>");
			jQuery('body').append("<style>.dropdownab{border:1px solid #eeeeee;  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); border-radius: 1%; background: #EEEEEE}</style>");
	    /** FIN STYLE **/
				jQuery(".dropdownab").on('click', 'li', function (event) {
				event.stopPropagation();
				var elementcliqueab = jQuery(this).find("span:eq(1)").text();
				console.log(this);
				console.log(elementcliqueab);
				var elementacliquer = jQuery(".m-form-row:contains(Sélectionnez le modèle de votre véhicule)").find(".m-form-row__content .liste-origine-ab li").has("span span:contains('"+ elementcliqueab +"')").find("input");
				console.log(elementacliquer);
				jQuery(elementacliquer).click();
				jQuery(".dropdownab").slideUp();
				});
				}
	    }, 200);

// DROPDOWN VERSION COMMERCIALE

			setInterval(function() {
					if (jQuery(".a-label:contains(Version commerciale de votre véhicule)").length === 1 && jQuery(".dropdownab-2").length === 0){
						jQuery(".m-form-row:contains(Version commerciale de votre véhicule)").find(".m-form-row__content").append("<div class='dropdownab-2'></div>");
						jQuery(".m-form-row:contains(Version commerciale de votre véhicule)").find(".m-form-row__content ul").addClass("liste-origine-ab-2");
						jQuery(".m-form-row:contains(Version commerciale de votre véhicule)").find(".m-form-row__content ul li").each(function(index, value){
						jQuery(this).clone().appendTo(jQuery('.dropdownab-2'));
					});
					/** DÉBUT STYLE **/
					jQuery('.dropdownab-2').before("<div class='btn-dropdown-ab-2'>Sélectionner la version commerciale <span class=\"a-dropdown__ui-2\"></span></div>");
					jQuery('.btn-dropdown-ab-2').css({'border': '1px solid #aaa', 'width': '100%', 'padding': '.75em 1.25em', 'min-height': '3.125em', 'border-radius': '.25em', 'color': '#444', 'line-height': '1.5em', 'box-shadow': '0 2px 2px 0 hsla(0,0%,80%,.5)'})
					jQuery('.a-dropdown__ui-2').css({'background': 'transparent url(https://www.eddo.fr/wp-content/uploads/2019/12/noun_chevron_1746037-1.png) no-repeat center', 'border-radius': '0 .3125em .3125em 0', 'bottom': '.1875em', 'content': '""', 'width':'2em', 'position': 'absolute', 'top': '.1875em', 'right': '.125em', 'display': 'block', 'margin-right': '10px'});
					jQuery(".liste-origine-ab-2").height(0);
					jQuery(".dropdownab-2").hide();
					jQuery('.m-radio-group--custom__section-background').hide();
					jQuery(".m-form-row:contains(Version commerciale de votre véhicule) .m-form-row__content").on('click', '.btn-dropdown-ab-2', function (event) {
							event.stopPropagation();
									if(jQuery(".dropdownab-2:visible").length === 1){jQuery(".dropdownab-2").slideUp();}
									if(jQuery(".dropdownab-2:visible").length === 0){jQuery(".dropdownab-2").slideDown();}
					});
					jQuery(".dropdownab-2 span.a-radio__label").addClass('itemDropdown2');
					jQuery('body').append("<style>.itemDropdown2:before{border:0 !important; background: none !important; }</style>");
					jQuery('body').append("<style>.dropdownab-2{border:1px solid #eeeeee;  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); border-radius: 1%; background: #EEEEEE}</style>");

					/** FIN STYLE **/
						jQuery(".dropdownab-2").on('click', 'li', function (event) {
						event.stopPropagation();
						var elementcliqueabVersion = jQuery(this).find("span:eq(1)").text();
						console.log(this);
						console.log(elementcliqueabVersion);
						var elementacliquerVersion = jQuery(".m-form-row:contains(Version commerciale de votre véhicule)").find(".m-form-row__content .liste-origine-ab li").has("span span:contains('"+ elementcliqueabVersion +"')").find("input");
						console.log(elementacliquerVersion);
						jQuery(elementacliquerVersion).click();
						jQuery(".dropdownab-2").slideUp();
						});
						}
					}, 200);





// TEMPLATE DE CODE

// REMPLACE UL/LI LIST BY SELECT/OPTION DROPDOWN

// Bouton "modèle de véhicule"

// TEMPLATE 1

jQuery('.m-radio-group').insertAfter(jQuery('.dropdown'));
jQuery(document).ready(function() {
		var $list   = $('.m-radio-group'),
		$select = $('<select />');
		$list.children('li').each(function(index) {
		 $select.append($('<option />').attr('value', index).html($(this).html()));
		});
		$list.eq(2).replaceWith($select);

		var $list   = $('.m-radio-group'),
		    index   = $('.dropdown, select[id^="converted_dropdown_"]')
});

// TEMPLATE QUI MARCHE (2)

jQuery('.m-radio-group').insertAfter(jQuery('.dropdown'));
jQuery(document).ready(function() {
		var $list   = $('.m-radio-group'),
		$select = $('<select />');
		$list.children('li').each(function(index) {
			$select.eq(3).append($('<option />').attr('value', index).html($(this).html()));
		});
		$list.eq(2).replaceWith($select);

		var $list   = $('.m-radio-group'),
		    index   = $('.dropdown, select[id^="converted_dropdown_"]').index( this ),
		    $select = $('<select />').attr('id', 'converted_dropdown_' + (index + 1));
});

// TEMPLATE 3 (MARCHE)


	jQuery('.seoInfo').eq(2).after('<div class=\"warningDiv\"><div class=\"warningIcon\">i</div><p class=\"warningInfo\">Pensez à vous munir de votre carte grise & relevé dinformation pour compléter votre devis</p></div>')
	jQuery('.warningDiv').css({'display': 'flex', 'margin-top': '10px'});
	jQuery('.warningIcon').css({'background-color': '#44c0ff', 'height': '3.13em', 'width': '3.125em', 'padding': '10px 10px 5px 20px', 'color': '#FFFF', 'font-size': '15px', 'border': '3px solid #44c0ff'});
	jQuery('.warningInfo').css({'background-color': '#FFFFF', 'height': '3em', 'width': '100%', 'margin': '0', 'padding': '10px', 'border': '1px solid #aaa'});


	jQuery('.m-form-row__content').eq(3).insertAfter($('.dropdownContent'));
	jQuery('.dropdownContent .m-radio-group--4').insertAfter(jQuery('.dropdown'));
	jQuery(document).ready(function() {
			var $list   = $('.m-radio-group--4'),
			$select = $('<select />');
			$list.children('li.m-item--text').each(function(index) {
				$select.append($('<option />').attr('value', index).html($(this).html()));
			});
			$list.eq(1).replaceWith($select);
			jQuery($('select')).addClass('select-dropdown');
			jQuery('.select-dropdown').after(jQuery('<span class=\"a-dropdown__ui\"></span>'));
			jQuery('.select-dropdown').css({'padding': '.75em 1.25em', 'width': '100%', 'border': '1px solid #aaa', 'min-height': '3.125em', })
			jQuery('.select-dropdown SPAN').addClass('newSpan');
			jQuery('.newSpan').css({'margin-left': '-30px'});
	});


// DROPDOWN VERSION COMMERCIALE VEHICULE

	jQuery('.m-form-row__content').eq(5).insertAfter($('.dropdownContent-2'));
	jQuery('.dropdownContent-2 .m-radio-group--3').insertAfter(jQuery('.dropdown'));
	jQuery('.dropdown').unwrap();
	jQuery(document).ready(function() {
			var $list   = $('.m-radio-group--3'),
			$select = $('<select />');
			$list.children('li.m-item--text').each(function(index) {
				$select.append($('<option />').attr('value', index).html($(this).html()));
			});
			$list.eq(1).replaceWith($select);
	});
	jQuery($('select')).addClass('select-dropdown-2');
	jQuery('.select-dropdown-2').after(jQuery('<span class=\"a-dropdown__ui\"></span>'));
	jQuery('.select-dropdown-2').css({'padding': '.75em 1.25em', 'width': '100%', 'border': '1px solid #aaa', 'min-height': '3.125em', })
	jQuery('.select-dropdown-2 SPAN').addClass('newSpan-2');
	jQuery('.newSpan-2').css({'margin-left': '-30px'});


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx NE PAS UTILISER xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// TESTS AVEC SETINTERVAL


jQuery('.m-form-row__content').eq(3).insertAfter($('.dropdownContent'));
jQuery('.dropdownContent .m-radio-group--4').insertAfter(jQuery('.dropdown'));
setInterval(function() {
		var $list   = $('.m-radio-group--4'),
		$select = $('<select />');
		$list.children('li.m-item--text').each(function(index) {
			$select.append($('<option />').attr('value', index).html($(this).html()));
		});
		$list.eq(1).replaceWith($select);
		jQuery($('select')).addClass('select-dropdown');
		jQuery('.select-dropdown').after(jQuery('<span class=\"a-dropdown__ui\"></span>'));
		jQuery('.select-dropdown').css({'padding': '.75em 1.25em', 'width': '100%', 'border': '1px solid #aaa', 'min-height': '3.125em', })
		jQuery('.select-dropdown SPAN').addClass('newSpan');
		jQuery('.newSpan').css({'margin-left': '-30px'});
}, 200);



// TEST AVEC SETINTERVAL + CLICK

	jQuery('.seoInfo').eq(2).after('<div class=\"warningDiv\"><div class=\"warningIcon\">i</div><p class=\"warningInfo\">Pensez à vous munir de votre carte grise & relevé dinformation pour compléter votre devis</p></div>')
	jQuery('.warningDiv').css({'display': 'flex', 'margin-top': '10px'});
	jQuery('.warningIcon').css({'background-color': '#44c0ff', 'height': '3.13em', 'width': '3.125em', 'padding': '10px 10px 5px 20px', 'color': '#FFFF', 'font-size': '15px', 'border': '3px solid #44c0ff'});
	jQuery('.warningInfo').css({'background-color': '#FFFFF', 'height': '3em', 'width': '100%', 'margin': '0', 'padding': '10px', 'border': '1px solid #aaa'});


	jQuery(function() {
	  if (
	    jQuery('.m-form-row__content').eq(2).click()
	  ) {
			jQuery('.m-form-row__content').eq(3).insertAfter($('.dropdownContent'));
			jQuery('.dropdownContent .m-radio-group--4').insertAfter(jQuery('.dropdown'));
			setInterval(function() {
					var $list   = $('.m-radio-group--4'),
					$select = $('<select />');
					$list.children('li.m-item--text').each(function(index) {
						$select.append($('<option />').attr('value', index).html($(this).html(), "placeholder", "Votre email"));
					});
					$list.eq(1).replaceWith($select);
					jQuery($('select')).addClass('select-dropdown');
					jQuery('.select-dropdown').after(jQuery('<span class=\"a-dropdown__ui\"></span>'));
					jQuery('.select-dropdown').css({'padding': '.75em 1.25em', 'width': '100%', 'border': '1px solid #aaa', 'min-height': '3.125em', })
					jQuery('.select-dropdown SPAN').addClass('newSpan');
					jQuery('.newSpan').css({'margin-left': '-30px'});
			}, 200);
	  }
	});

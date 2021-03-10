************************************************************************************************
SOLUTION SEB POUR TEST
************************************************************************************************

https://www.generale-optique.com/opticien?abtestStoreLocator
btn-abt-ouvert

jQuery(document).ready(function () {
  var locations;
  jQuery
    .ajax({
      url:
        "https://uberall.com/api/storefinders/3wg7zoSQ5DhaI1rhTTqlOG1fMUBRw0/locations/all",
      method: "GET",
      data: {
        "response-format": "json",
        "api-key": ""
      }
    })
    .done(function (response) {
      // const m = new Map([
      //   [0,'premiere valeur'],
      //   ['10','valeur numero deux']
      // ]);
      // m.get('0'); // undefined
      // m.get('10'); // 'valeur numero deux
      // m.has('0') // false
      // m.has(0) // true
      // m.delete('10');
      // m.get('10'); // undefined
      // m.set('10', 'valeur #2')
      // locations = {};
      // response['response']['locations'].forEach(function(location) {
      //   locations[String(location.id)] = location.callToAction.url;
      // });
      locations = new Map(
        response["response"]["locations"].map(function (location) {
          return [
            String(location.id),
            location.callToAction && location.callToAction.url // { url: location.callToAction.url, somethingElse: location.truc }
          ];
        })
      );
      console.log(locations);
    })
    .fail(function (error) {
      alert(
        "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
      );
    });
  // CODE FOR ADDING THE CTAS
  jQuery("body").append(
    "<style>.magasin-ouvert ul.ubsf_locations-list-item-additional-info, .magasin-ferme ul.ubsf_locations-list-item-additional-info { height: 60px;}.magasin-ouvert li.ubsf_locations-list-item-time, .magasin-ferme li.ubsf_locations-list-item-time { margin-bottom: 14px !important;}a.btn-abt-ouvert, a.btn-abt-ferme { background: #089583; color: white !important; min-height: 38px; max-height: 38px; height: 38px; padding: 7px !important; border-radius: 55px; min-width: 155px; text-align: center;}</style>"
  );
  setInterval(function () {
    if (!locations) return;
    jQuery(".ubsf_locations-list-item").each(function () {
      var addedButton;
      if (
        jQuery(this).find(".btn-abt-ouvert").length === 0 &&
        jQuery(this).find(".btn-abt-ferme").length === 0
      ) {
        //Bloc magasin ouvert
        if (
          jQuery(this).find(".ubsf_message:contains(Fermé maintenant)")
            .length === 0
        ) {
          jQuery(this).addClass("magasin-ouvert");
          addedButton = jQuery(
            "<a href='#' class='btn-abt-ouvert'>Prendre rendez-vous</a>"
          ).insertAfter(
            jQuery(this).find(".ubsf_locations-list-item-additional-info li")
          );
        }
        //Bloc magasin fermé
        if (
          jQuery(this).find(".ubsf_message:contains(Fermé maintenant)")
            .length === 1
        ) {
          jQuery(this).addClass("magasin-ferme");
          addedButton = jQuery(
            "<a href='#' class='btn-abt-ferme'>Prendre rendez-vous</a>"
          ).insertAfter(
            jQuery(this).find(".ubsf_locations-list-item-additional-info li")
          );
        }
      }
      if (addedButton) {
        var store_block_url = jQuery(this).find("a:eq(0)").attr("href");
        //CODE FOR FINDING THE STORE BLOCK URL
        const regexp = /([0-9]{7})$/g;
        var store_block_id = regexp.exec(store_block_url);
        console.log(store_block_id);
        if (store_block_id && store_block_id[1]) {
          var url = locations.get(store_block_id[1]);
          console.log(url);
          if (url) {
            addedButton.attr("href", url);
            addedButton.click(function (event) {
              event.stopPropagation();
              window.location = url;
            });
          }
          // var myObject = locations.get(store_block_id[1]);
          // if (myObject.url)
        }
      }
    });
  }, 1000);
});

jQuery(document).on('mousedown', '.btn-abt-ouvert', function () { ABTastyClickTracking('Clic bouton - prendre rendez-vous', null, 674184); });





// AUTRES BOUT DE CODE

jQuery.ajax({
  type: 'GET',
  url: 'https://uberall.com/api/storefinders/3wg7zoSQ5DhaI1rhTTqlOG1fMUBRw0/locations/all/?fieldMask=callToAction',
  data: {
    'response-format': "jsonp",
    'api-key': 't819yeOuX4DepoV9e1bRkiT2M8uyDBCAv7cQCHLKWr3FbAkELbmVz14jkeC35oac',
  },
  success: function(data) {
    console.log(data);
    jQuery.each(data,function(index, d){
      jQuery('#store-finder-widget').before('<div class="newData"> '+d.callToAction+' </div>');
    });
  },
  error: function(err) {
    console.log('error:' + err)
  }
});



************************************************************************************************

jQuery(document).ready(function(){
    jQuery.ajax({
        url: "https://uberall.com/api/storefinders/3wg7zoSQ5DhaI1rhTTqlOG1fMUBRw0/locations/all/?fieldMask=callToAction",
        method: "GET",
        data: {
          'response-format': "jsonp",
          'api-key': 't819yeOuX4DepoV9e1bRkiT2M8uyDBCAv7cQCHLKWr3FbAkELbmVz14jkeC35oac',
        },
    })
    .done(function(response){
        var dataList = JSON.stringify(response);

        // jQuery("#store-finder-widget").before('<div id="newData">'+ data.callToAction +'</div>');
    })
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })
    .always(function(){
        // alert("Requête effectuée");
        // jQuery('#newData').hide();
    });
});

*************************************************************************************************



const arr1 = data.filter(d => d.age > 37);
console.log('arr1', arr1);

jQuery(document).ready(function(){
  jQuery.ajax({
      url: "https://uberall.com/api/storefinders/3wg7zoSQ5DhaI1rhTTqlOG1fMUBRw0/locations/all/?fieldMask=callToAction",
      method: "GET",
      data: {
        'response-format': "jsonp",
        'api-key': 't819yeOuX4DepoV9e1bRkiT2M8uyDBCAv7cQCHLKWr3FbAkELbmVz14jkeC35oac',
      },
  })
  .done(function(response){
      let data = JSON.stringify(response);
      jQuery("#store-finder-widget").before('<div id="newData">'+ data +'</div>');
      console.log(data);
  })
  .fail(function(error){
      alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
  })
  .always(function(){
      alert("Requête effectuée");
      jQuery('#newData').hide();
  });
});


//Code Seb pour ajouter les boutons dynamiquement
jQuery("body").append("<style>.magasin-ouvert ul.ubsf_locations-list-item-additional-info, .magasin-ferme ul.ubsf_locations-list-item-additional-info { height: 60px;}.magasin-ouvert li.ubsf_locations-list-item-time, .magasin-ferme li.ubsf_locations-list-item-time { margin-bottom: 14px !important;}a.btn-abt-ouvert, a.btn-abt-ferme { background: #089583; color: white !important; min-height: 38px; max-height: 38px; height: 38px; padding: 7px !important; border-radius: 55px; min-width: 155px; text-align: center;}</style>");
setInterval(function(){
 jQuery(".ubsf_locations-list-item").each(function() {
     if (jQuery(this).find(".btn-abt-ouvert").length === 0 && jQuery(this).find(".btn-abt-ferme").length === 0){
         //Bloc magasin ouvert
         if (jQuery(this).find(".ubsf_message:contains(Fermé maintenant)").length === 0){
             jQuery(this).addClass("magasin-ouvert");
             jQuery(this).find(".ubsf_locations-list-item-additional-info li").after("<a href='#' class='btn-abt-ouvert'>Prendre rendez-vous</a>");
         }
         //Bloc magasin fermé
         if (jQuery(this).find(".ubsf_message:contains(Fermé maintenant)").length === 1){
             jQuery(this).addClass("magasin-ferme");
             jQuery(this).find(".ubsf_locations-list-item-additional-info li").after("<a href='#' class='btn-abt-ferme'>Prendre rendez-vous</a>");
         }
         }
    });
}, 1000);



//Code
jQuery(document).ready(function(){
    jQuery.ajax({
        url: "https://uberall.com/api/storefinders/3wg7zoSQ5DhaI1rhTTqlOG1fMUBRw0/locations/all",
        method: "GET",
        data: {
          'response-format': "json",
          'api-key': 't819yeOuX4DepoV9e1bRkiT2M8uyDBCAv7cQCHLKWr3FbAkELbmVz14jkeC35oac',
        },
    })
    .done(function(response){
        var result = Object.keys(response).map((key) => [Number(key), response[key]]);
        console.log(result[1][1].locations[0].id);
        var dataArray = [];
        for(var i in result){
          dataArray.push([i, result[1][1].locations[i].id]);
          dataArray.push([i, result[1][1].locations[i].callToAction.url]);
          console.log(dataArray);
        }
    })
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })
});


// jQuery(document).ready(function(){
//     jQuery.ajax({
//         url: "https://uberall.com/api/storefinders/3wg7zoSQ5DhaI1rhTTqlOG1fMUBRw0/locations/all",
//         method: "GET",
//         data: {
//           'response-format': "json",
//           'api-key': 't819yeOuX4DepoV9e1bRkiT2M8uyDBCAv7cQCHLKWr3FbAkELbmVz14jkeC35oac',
//         },
//     })
//     .done(function(response){
//         var result = Object.keys(response).map((key) => [Number(key), response[key]]);
//         var dataArrayA = [];
//         for(var i=0; i < result[1][1].locations.length; i++){
//           dataArrayA.push([i, result[1][1].locations[i].id, result[1][1].locations.callToAction.url]);
//           //dataArray.push([i, result[1][1].locations[i].callToAction.url]);
//           console.log(dataArrayA);
//         }
//         var dataArrayB = [];
//         for(var i=100; i < result[1][1].locations.length; i++){
//           dataArrayB.push([i, result[1][1].locations[190].id, result[1][1].locations[i].callToAction.url]);
//           console.log(dataArrayB);
//         }
//     })
//     .fail(function(error){
//         alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
//     })
// });

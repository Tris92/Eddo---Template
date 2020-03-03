//CODE

jQuery.getJSON("https://api.ipify.org/?format=json", function(e) {
    console.log(e.ip);
});

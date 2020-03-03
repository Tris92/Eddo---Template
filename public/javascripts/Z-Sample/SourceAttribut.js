//CODE

// Vérifie si une image possède un attribut src qui contient svg et change l'attribut src si c'est la cas.

jQuery('img').filter(function () {
    return this.src.match(/.*\.svg$/);
}).each(function () {
    if (this.attr('src') == 'data:image/svg+xml;charset=UTF-8,<?xml version="1.0"?><svg width="66" height="44" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>  <rect id="a" x="0" y="0" width="66" height="31" rx="15.5"/></defs><g fill="none" fill-rule="evenodd">  <path fill="%23D50031" d="M23 29l10.049 14.09L43 29z"/>  <g>    <rect fill="%23fff" stroke="%23D50031" stroke-width="5" x="2.5" y="2.5" width="61" height="26" rx="13"/>  </g></g></svg>') {
        this.attr('src', 'data:image/svg+xml;charset=UTF-8,<?xml version="1.0"?><svg width="66" height="44" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>  <rect id="a" x="0" y="0" width="66" height="31" rx="15.5"/></defs><g fill="none" fill-rule="evenodd">  <path fill="%23D50031" d="M23 29l10.049 14.09L43 29z"/>  <g>    <rect fill="%23D50031" stroke="%23D50031" stroke-width="5" x="2.5" y="2.5" width="61" height="26" rx="13"/>  </g></g></svg>');
    }
});

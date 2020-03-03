// Vous pouvez trouver toutes les pages visitées précédemment dans cette variable :

JSON.parse(localStorage.getItem('ABTastyData')).VisitedPages

// Et ici il y a toutes les pages vues pendant la session en cours :

const visites = JSON.parse(localStorage.getItem('ABTastyData')).VisitedPages.reverse(),
visites_id = visites.map(function (el) { return parseInt(el.visite); }),
different_id = visites_id.find(function (el, index, arr) { return el !== arr[0]; }),
nb_pages_viewed = typeof different_id === 'undefined' ? visites_id.length : visites_id.indexOf(different_id),
pages_viewed = visites.filter(function (el, index, arr) { return index < nb_pages_viewed && el.visite === arr[0].visite; });

// Donc vous pouvez cibler une url spécifique pendant la session de cette façon :

const visites = JSON.parse(localStorage.getItem('ABTastyData')).VisitedPages.reverse(),
visites_id = visites.map(function (el) { return parseInt(el.visite); }),
different_id = visites_id.find(function (el, index, arr) { return el !== arr[0]; }),
nb_pages_viewed = typeof different_id === 'undefined' ? visites_id.length : visites_id.indexOf(different_id),
pages_viewed = visites.filter(function (el, index, arr) { return index < nb_pages_viewed && el.visite === arr[0].visite; });

return pages_viewed.map(function (el) { return el.url }).indexOf('targeted_url') !== -1;

// Vous devez juste remplacer "targeted_url"

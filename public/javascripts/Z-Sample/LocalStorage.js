
// AB Tasty stocke dans le local storage les pages visitées (c'est pour ça que les objectifs d'atteinte de page sont rétroactifs).

// Avec ce code on va chercher dans le local storage si l'user à un moment donné vu la page, et si c'est le cas il est ciblé par le test :

var maxVisited = 1;

var visitedPages = JSON.parse(localStorage.getItem("ABTastyData")).VisitedPages;

return visitedPages.filter(function (el) {
return el.visite == visitedPages[visitedPages.length - 1].visite && el.url.indexOf('YourURL')>-1;
}).length >= maxVisited;

// Remplacer 'YourURL' par l'url de la page que l'utilisateur doit avoir déjà visité pour qu'il soit exposé au test.

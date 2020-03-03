//Si l'élément n'existe pas dans le code : **
if (jQuery(".monelement").length === 0) { je met mon code ici}

//Si l'élément existe dans le code**
if (jQuery(".monelement").length === 1) { je met mon code ici}

//Si l'élément est visible à l'écran pour l'utilisateur (et qu'il est présent dans le code)**
jQuery('.monelement:visible')

//Si l'élément n'est pas visible à l'écran de l'utilisateur mais qu'il est présent dans le code**
jQuery('.monelement:hidden')

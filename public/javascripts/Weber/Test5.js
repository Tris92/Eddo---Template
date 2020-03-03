
if(jQuery("#element-wrapped").length === 0) {
  jQuery(".navbar-link-icon SPAN").removeClass("visible-xs-inline");
  jQuery(".navbar-link-icon").css({"display": "flex", "flex-direction": "column", "align-items": "center"});
  jQuery(".navbar-link-icon:eq(1)").css({"padding-top": "15px"});
  jQuery(".navbar-link-icon span:eq(0)").css({"line-height":"15px", "margin-top": "10px",});
  jQuery(".navbar-link-icon span:eq(1)").css({"line-height":"15px", "margin-top": "10px"});
  jQuery(".navbar-link-icon:eq(2) span").wrapAll("<div id='element-wrapped' />");
  jQuery(".navbar-link-icon:eq(1) svg").css({"color":"#ffeb00"});
  jQuery(".navbar-link-icon svg").css({"color":"#ffeb00",});
  jQuery(".navbar-link-icon").css({"background-color":"#eee",});
  jQuery("#element-wrapped").css({"line-height":"15px", "margin-top": "10px",});
  jQuery(".navbar-link-icon").css({"min-height":"80px","display":"flex","justify-content":"center"});

  if (window.matchMedia("(max-width: 1510px)").matches) {
    jQuery(".navbar-link-icon SPAN").addClass("visible-xs-inline");
  }
  if (window.matchMedia("(max-width: 1200px)").matches) {
    jQuery(".navbar-link-icon").css({"max-height":"70px", "height":"70px","min-height":"50px","display":"flex","justify-content":"center"});
  }

  if (window.matchMedia("(max-width: 1200px)").matches) {
    jQuery("#navbar .container-fluid .navbar-header .navbar-phone").clone().appendTo("#navbar .container-fluid .navbar-header");
    jQuery(".icon.icon-2x:eq(1)").html('<svg id="icon-location" viewBox="0 0 18 24"><path d="M9 .77c-4.1 0-7.81 3-7.81 6.74S4.56 15.68 9 22.05c4.42-6.37 7.81-10.82 7.81-14.54S13.08.77 9 .77zm0 9.76a2.8 2.8 0 01-2.94-2.67A2.8 2.8 0 019 5.2a2.8 2.8 0 012.93 2.66A2.8 2.8 0 019 10.52z" fill="currentColor"></path><path d="M9.36 9.63h.16a1.9 1.9 0 001.62-2.25 2 2 0 00-1.88-1.57 2.11 2.11 0 011.89 1.93 1.75 1.75 0 01-1.66 1.75 1.65 1.65 0 01.41-.39 1.49 1.49 0 00.82-1.1h.21a2 2 0 00-1.06-1.75 1.84 1.84 0 00-2.21.32c.06 0 .06 0 .08.06s0 0 .1 0h-.1a1.91 1.91 0 012-.28A1.55 1.55 0 0110.72 8a1.47 1.47 0 00-.59-1.35 1.88 1.88 0 00-1.56-.33 1.74 1.74 0 00-1.21.95 1.49 1.49 0 00.14 1.45 1.67 1.67 0 00.24.28 1.21 1.21 0 001 .65c-.07.11 0 .3 0 .44s-.21.25-.74 0l-.08.18A5.06 5.06 0 019 11a.21.21 0 01-.1.31 1.49 1.49 0 01-.89.11 3.62 3.62 0 01-2.8-5.16 3.86 3.86 0 011.85-1.81 4.27 4.27 0 015.55 1.82 3.12 3.12 0 01-.22 3.22 4.53 4.53 0 01-1 1.08 2.13 2.13 0 01-1.07.5c-.31 0-.35-.07-.34-.19a3.36 3.36 0 002.43-2.41 3.27 3.27 0 00-1.83-3.68 3.37 3.37 0 011.83 3.68A3.29 3.29 0 0110 10.78a.29.29 0 00-.09-.28 3.6 3.6 0 01-.49.1c-.7-.18-.45-.55-.25-.79z" fill="#222"></path><path d="M11 .14a6.93 6.93 0 01.81.25 8.56 8.56 0 015.37 4.94A6.77 6.77 0 0117.39 9a13.07 13.07 0 01-1.32 3.44C15.24 14 14.23 15.51 13.2 17l-3.3 4.83 2-2.85c.59-.84 1.19-1.69 1.76-2.55A32.29 32.29 0 0016.79 11a10 10 0 00.78-3.12A6.57 6.57 0 0017 4.61 8.83 8.83 0 0011.89.25 7.23 7.23 0 0115 1.63a8 8 0 012.66 3.69 7 7 0 01.34 2.2 8.79 8.79 0 01-.32 2.11h-.2a22.55 22.55 0 01-3.48 6.8c-.7 1-1.42 2-2.13 3L9 23.57l-2.66-3.8L4.35 17c.12.23 0 .12-.06.09-.05 0-.06 0 .2.39-.26-.38-.26-.42-.2-.39L9 23.86l3-4.26c.7-1 1.39-2 2.07-3a27.48 27.48 0 003.53-6.65 27.49 27.49 0 01-3.51 6.66c-.68 1-1.37 2-2.06 3L9 24l-3.67-5.22c-.89-1.29-1.79-2.59-2.62-4a22.29 22.29 0 01-2.18-4.36 7.65 7.65 0 01-.12-5.25 8.23 8.23 0 011.11-2 10.15 10.15 0 016-3.17c-.26.16.2.27.15.42S7.5.56 7.1.69a14.39 14.39 0 00-2 .73l.1.17A5.2 5.2 0 019 1.26c.21.11.11.21-.22.32s-.92.21-1.77.49a6.7 6.7 0 00-4.46 4.28c-.55 2.07.57 4.65 1.9 6.8.84 1.39 1.79 2.76 2.74 4.13l1.44 2.07.35.5H9l.15-.2.3-.41.6-.83 1.2-1.68c.79-1.13 1.58-2.28 2.28-3.45 1.38-2.31 2.61-4.8 2.13-7a5.43 5.43 0 00-1.58-2.61A11.19 11.19 0 0012 2.2c-.57-.33-.58-.4-.43-.48a7.37 7.37 0 013.63 2.72 5.36 5.36 0 01.88 4.1 15.45 15.45 0 01-2.23 5.06c-1 1.62-2.14 3.2-3.29 4.77 1.14-1.53 2.27-3.08 3.28-4.71a15.25 15.25 0 002.26-5.12 5.4 5.4 0 00-.82-4.1 7.48 7.48 0 00-3.56-2.78c.15-.05.3-.1.15-.26l-.55-.18c-.31-.09-.68-.17-.93-.22L9.32.7C9.09.63 9 .55 9 .48s.4-.29 1-.35a7.66 7.66 0 011 .01z" fill="#222"></path></svg>');
    jQuery(".icon.icon-2x:eq(1)").css({"stroke-width":"0.5px"});
    jQuery(".icon.icon-2x").css({"color":"#ffeb00","min-width":"24px",});
    jQuery("#navbar .container-fluid .navbar-header .navbar-phone").css({"background-color":"#eee","max-width":"40px","min-height":"54px",'display':'flex','justify-content':'center','align-items':'center','margin':'0'});
    jQuery('.navbar-brand').css({'position':'absolute', 'left':'50%','top':'50%','transform':'translate(-50%,-50%)'});
  }
}

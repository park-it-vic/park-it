(()=>{"use strict";(function(){Shiny&&Shiny.addCustomMessageHandler("filters_panel_toggle",(function(e){var t=document.querySelector("[data-value='Filters'].tab-pane");t.classList.contains("active")&&function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=document.querySelector("[data-value='Dimmer'].tab-pane");e&&e.classList.remove("active"),e&&t&&a.classList.remove("dim")}(t)||function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=document.querySelector("[data-value='Dimmer'].tab-pane");e&&e.classList.add("active"),e&&t&&a.classList.add("dim")}(t)}))})(),window.onload=function(){navigator.userAgent.includes("QtWebEngine")&&window.alert("For best effect, please use an external browser.")}})();
//# sourceMappingURL=shiny_app.js.map
window.onload = function() {
    var largeurEcran = window.innerWidth;

    var largeurMinimale = 450; 

    if (largeurEcran > largeurMinimale) {
        window.location.href = "desktop.html";
    }
};

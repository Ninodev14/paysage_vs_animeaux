window.onload = function() {
    var largeurEcran = window.innerWidth;

    var largeurMinimale = 450; 

    if (largeurEcran > largeurMinimale) {
        console.log("test")
        window.location.href = "desktop.html";
    }
};

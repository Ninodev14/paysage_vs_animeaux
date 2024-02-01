// Récupérer le canvas et son contexte 2D
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Créer une image
let img = new Image();
img.src = 'above_the_birds.png';

// Attendre le chargement de l'image
img.onload = function() {
    // Dessiner l'image sur le canvas
    ctx.drawImage(img, 0, 0);
};

// Fonction pour gommer une partie de l'image
function gommer(x, y, rayon) {
    // Utiliser compositing pour effacer les pixels
    ctx.globalCompositeOperation = 'destination-out';
    // Dessiner un cercle transparent
    ctx.beginPath();
    ctx.arc(x, y, rayon, 0, Math.PI * 2, true);
    ctx.fill();
}

// Exemple d'utilisation de la fonction pour gommer
// Cela effacera un cercle de 20 pixels de rayon au coordonnées (100, 100)
gommer(100, 100, 20);

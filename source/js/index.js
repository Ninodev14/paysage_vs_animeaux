function explicationP1() {
    document.getElementById("container-presentation").style.display = "none";
    document.body.style.backgroundColor = "#ffffff";
    document.getElementById("title-paragraph").style.display = "flex";
    document.getElementById("text-1").style.display = "block";
    document.getElementById("text-2").style.display = "block";
    document.getElementById("container-menue-home").style.height = "fit-content";
    document.getElementById("container-menue-home").style.justifyContent = "normal";
    document.getElementById("container-menue-home").style.marginTop = "26px";
    document.getElementById("container-menue-home-title").style.display = "none";
    document.getElementById("container-menue-home").style.display = "flex";
    document.getElementById("title-paragraph").innerText = "Mais que se passe-t-il ?";
    document.getElementById("text-1").innerText = "C’est la cacophonie dans la salle “Paysages & peinture animalière” ! ";
    document.getElementById("text-2").innerText = "En cette soirée de Bacchanight, deux équipes s’affrontent avec acharnement pour déterminer qui des animaux ou des paysages est le plus important pour cette salle…";
    document.getElementById("btn-explication").setAttribute("onclick", "explicationP2()");
    document.getElementById("btn-explication").innerText = "LIRE LA SUITE";
    document.getElementById("btn-explication").style.backgroundColor ="#1D1D1D";
    document.getElementById("btn-explication").style.setProperty("color", "#ffffff", "important");
    document.getElementById("btn-explication").style.position ="absolute";
    document.getElementById("btn-explication").style.bottom ="40px";
    document.getElementById("text-1").style.textAlign = "center";
    document.getElementById("text-2").style.textAlign = "center";
    document.getElementById("svg-transition1").style.display = "block";
}

function explicationP2() {
    document.getElementById("text-2").style.display = "block";
    document.getElementById("text-3").style.display = "block";
    document.getElementById("title-paragraph").innerText = "Quelle est ta mission ?";
    document.getElementById("text-1").innerText = "Ils ont besoin de ton aide pour mettre enfin fin à ce débat. Prends place, choisis ton camp et lance-toi dans le combat pour défendre ton équipe !";
    document.getElementById("text-2").innerHTML = "Pour cela, tu vas devoir répondre à des questions. Les réponses peuvent sembler suggestives, mais n’oublie pas: <strong>tu dois défendre l'opinion de ton équipe.</strong>";
    document.getElementById("text-2").style.textAlign = "right";
    document.getElementById("text-2").style.paddingLeft = "30%";
    document.getElementById("text-3").innerText = "Bonne chance !";
    document.getElementById("btn-explication").setAttribute("onclick", "redirectToLink()");
    document.getElementById("btn-explication").style.marginTop ="50px";
    document.getElementById("btn-explication").innerText = "J’AI COMPRIS !";
    document.getElementById("svg-transition1").style.display = "none";
    document.getElementById("svg-transition2").style.display = "block";
}

function redirectToLink() {
    window.location.href = "questionaire.html";
}



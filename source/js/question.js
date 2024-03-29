let infoWithTotal = 6;
let infoWithActualle = 0;
let typeKind = 0;
let pointPerso = 0;
let pointsCounted = false;
let checkLost = 0;
let reloadCheck = 0;
let witchReponce = 0;
let req = new XMLHttpRequest();
let pointisSet = false;
let bodyNone = document.getElementById('body-none');

req.open("GET", "https://api.jsonbin.io/v3/b/660346ebfe36e24a20a863ba/latest", true);
req.setRequestHeader("X-Master-Key", "$2a$10$t0TB.mYwq16iqROanh0X7OBAWGrdVeyeXa3Xd92lZNir2NRkwtOi.");
req.send();


function addPoint(teamName, points) {
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            const jsonData = JSON.parse(req.responseText);
            const team = jsonData.record.teams.find(t => t.teamName === teamName);
            console.log(teamName);
            console.log(team);

            if (team) {
                team.points += points;

                // Update data on JSONBin
                req.open("PUT", "https://api.jsonbin.io/v3/b/660346ebfe36e24a20a863ba", true);
                req.setRequestHeader("Content-Type", "application/json");
                req.setRequestHeader("X-Master-Key", "$2a$10$t0TB.mYwq16iqROanh0X7OBAWGrdVeyeXa3Xd92lZNir2NRkwtOi.");

                if (pointisSet == false) {
                    req.send(JSON.stringify(jsonData.record));
                    console.log('POINTS!');
                    pointisSet = true;
                    document.getElementById('scorebtn').removeAttribute('disabled');
                }

            }
        }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/660346ebfe36e24a20a863ba/latest", true);
    req.setRequestHeader("X-Master-Key", "$2a$10$t0TB.mYwq16iqROanh0X7OBAWGrdVeyeXa3Xd92lZNir2NRkwtOi.");
    req.send();

    pointisSet = false;
}
window.onbeforeunload = function (event) {
    if (reloadCheck == 0) {
        return "Êtes-vous sûr de vouloir quitter cette page ? Vos données non sauvegardées seront perdues.";
    }
};


function IniA() {
    typeKind = 1;
    document.getElementById("img2").style.height = "100px";
    document.getElementById("img1").style.height = "150px";
    document.getElementById("img2").style.filter = "grayscale(100%)";
    document.getElementById("img1").style.filter = "grayscale(0%)";
    document.getElementById("name-kind").innerText = "Animaux";
    document.getElementById("paragraphe-center").style.marginLeft = "10%"
    document.getElementById("paragraphe-center").style.marginRight = "10%"
    document.getElementById("paragraphe-center").style.textAlign = "center";
    document.getElementById("button-next").style.backgroundColor = "#CD844E";
    document.getElementById("paragraphe-center").style.marginTop = "30px";
    document.getElementById("paragraphe-center").innerText = "Ils sont souvent associés à la loyauté, à la force et au charisme. Ils sont reconnus pour leur générosité et leur enthousiasme.";
    bodyNone.classList.add('body-animal');
    bodyNone.classList.remove('body-paysage');
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("name-kind").style.display = "flex";
}

function IniP() {
    typeKind = 2;
    document.getElementById("img1").style.height = "100px";
    document.getElementById("img2").style.height = "150px";
    document.getElementById("img2").style.filter = "grayscale(0%)";
    document.getElementById("img1").style.filter = "grayscale(100%)";
    document.getElementById("name-kind").innerText = "Paysages";;
    document.getElementById("paragraphe-center").style.marginLeft = "5%"
    document.getElementById("paragraphe-center").style.marginRight = "5%"
    document.getElementById("paragraphe-center").style.textAlign = "center";
    document.getElementById("button-next").style.backgroundColor = "#AFCF94";
    document.getElementById("paragraphe-center").style.marginTop = "30px";
    document.getElementById("paragraphe-center").innerText = "Ils possèdent une détermination et une résilience silencieuse, comme le calme avant une tempête. Ils sont reconnus pour leur empathie et leur créativité.";
    bodyNone.classList.add('body-paysage');
    bodyNone.classList.remove('body-animal');
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("name-kind").style.display = "flex"
}


function validationKind() {
    if (typeKind == 1) {
        document.getElementById("img1").style.filter = "grayscale(0%)";
        document.getElementById("img2").style.filter = "grayscale(0%)";
        document.getElementById("question").innerText = "Bienvenue chez les animaux";
        document.getElementById("paragraphe-center").innerHTML = "Attention le combat va bientôt commencer. Durant cet affrontement, les questions te rapporteront plus ou moins de points. <br> <br> Il y a 3 types de réponses possibles : <br> Pour ton équipe : <strong>50 points. </strong> <br> Pour aucune équipe : <strong>25 points.</strong> <br>Pour l’équipe adverse : <strong>5 points.</strong> <br> <br> Choisis la réponse adaptée à l’équipe Animaux pour rapporter le plus de points.";
        document.getElementById("img1").style.height = "150px";
        document.getElementById("img1").setAttribute("onclick", "");
        document.getElementById("paragraphe-center").style.display = "block";
        document.getElementById("button-next").setAttribute("onclick", "step1()");
        document.getElementById("img1").setAttribute("onclick", "");
        document.getElementById("btn1").style.borderColor = "#CD844E";
        document.getElementById("btn2").style.borderColor = "#CD844E";
        document.getElementById("btn3").style.borderColor = "#CD844E";
        document.getElementById("container-score").style.backgroundColor = "#F4D9BD";
        document.getElementById("container-score").style.borderColor = "#CD844E";
        document.getElementById("container-bottom-info").style.backgroundColor = "#CD844E";
        document.getElementById("barre-info-contenue").style.backgroundColor = "#493C36";
        document.getElementById("img1").style.marginTop = "26px";
        document.getElementById("img2").style.marginTop = "26px";
        document.getElementById("name-kind").style.display = "none";
        document.getElementById("img2").style.display = "none";
        document.getElementById("ico").href = "source/image/Logo_ZIZANIE_A.ico";
        scrollToTop();

    }
    else if (typeKind == 2) {
        document.getElementById("img1").style.filter = "grayscale(0%)";
        document.getElementById("img2").style.filter = "grayscale(0%)";
        document.getElementById("question").innerText = "Bienvenue chez les paysages";
        document.getElementById("paragraphe-center").innerHTML = "Attention le combat va bientôt commencer. Durant cet affrontement, les questions te rapporteront plus ou moins de points. <br> <br> Il y a 3 types de réponses possibles: <br> Pour ton équipe : <strong>50 points. </strong> <br> Pour aucune équipe : <strong>25 points.</strong> <br>Pour l’équipe adverse : <strong>5 points.</strong> <br> <br> Choisis la réponse adaptée à l’équipe Paysages pour rapporter le plus de points.";
        document.getElementById("img2").style.height = "150px";
        document.getElementById("img2").setAttribute("onclick", "");
        document.getElementById("paragraphe-center").style.display = "block";
        document.getElementById("button-next").setAttribute("onclick", "step1()");
        document.getElementById("img1").setAttribute("onclick", "");
        document.getElementById("btn1").style.borderColor = "#AFCF94";
        document.getElementById("btn2").style.borderColor = "#AFCF94";
        document.getElementById("btn3").style.borderColor = "#AFCF94";
        document.getElementById("container-score").style.backgroundColor = "#E1F5ED";
        document.getElementById("container-score").style.borderColor = "#AFCF94";
        document.getElementById("container-bottom-info").style.backgroundColor = "#AFCF94";
        document.getElementById("barre-info-contenue").style.backgroundColor = "#225945";
        document.getElementById("name-kind").style.display = "none";
        document.getElementById("img1").style.display = "none";
        document.getElementById("img1").style.marginTop = "26px";
        document.getElementById("img2").style.marginTop = "26px";
        document.getElementById("ico").href = "source/image/Logo_ZIZANIE_P.ico";
        scrollToTop();
    }
}

function step1() {
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").src = "source/image/tableau_musee/Chevaux.jpg";
    document.getElementById("question").innerText = "Déplacez-vous jusqu'à cette œuvre.";
    document.getElementById("paragraphe-center").classList.remove('p1');
    document.getElementById("paragraphe-center").classList.add('p2');
    document.getElementById("paragraphe-center").innerText = "La Foulaison du blé en Camargue\nRosa Bonheur";
    document.getElementById("paragraphe-center").style.marginTop = "5px"
    document.getElementById("paragraphe-center").style.textAlign = "end"
    document.getElementById("button-next").setAttribute("onclick", "BeginQuestion()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("container-img").style.position = "relative"
    document.getElementById("container-img").style.height = "fit-content"
    document.getElementById("plans").src = "source/image/plans/Plan_BleCamargue.svg";
    document.getElementById("paragraphe-center").style.marginLeft = "0%"
    document.getElementById("paragraphe-center").style.marginRight = "0%"
    document.getElementById("paragraphe-center").style.width = "80%"
    document.getElementById("paragraphe-center").style.justifyContent = "flex-end"
    document.getElementById("img2").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("container-bottom-info").style.display = "flex";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("button-lost").style.display = "flex";
    scrollToTop();
    setTimeout(function () {
        infoWithActualle++;
        document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
        document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
    }, 1);
}



function BeginQuestion() {
    scrollToTop();
    document.getElementById("button-next").setAttribute("onclick", "reponceQ2()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    document.getElementById("question-ask").innerText = "Ces chevaux…";
    checkLost = 1;
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    document.getElementById("question-ask").style.display = "block";
    setTimeout(function () {
        document.getElementById("container-img").getElementsByTagName("img")[0].style.transition = "0ms";
    }, 500);
}

function updateQuestionAndButtons(questionText, btn1Text, btn1OnClick, btn2Text, btn2OnClick, btn3Text, btn3OnClick) {
    document.getElementById("question-ask").innerHTML = questionText;
    document.getElementById("btn1").innerHTML = btn1Text;
    document.getElementById("btn1").setAttribute("onclick", btn1OnClick);
    document.getElementById("btn2").innerHTML = btn2Text;
    document.getElementById("btn2").setAttribute("onclick", btn2OnClick);
    document.getElementById("btn3").innerHTML = btn3Text;
    document.getElementById("btn3").setAttribute("onclick", btn3OnClick);
    document.getElementById("question-ask").style.display = "block";
    setTimeout(function () {
        document.getElementById("container-img").getElementsByTagName("img")[0].style.transition = "0ms";
    }, 500);
    scrollToTop();
}



function Q2R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}

function Q2R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}
function Q2R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });

}


function reponceQ2() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Tu t’en sors très bien !";
            document.getElementById("paragraphe-reponce").innerText = "Bravo, tu as compris le principe. Tu dois choisir la réponse en fonction de ton équipe. Continue sur cette lancée.";
            document.getElementById("container-score-h3").innerText = "+50";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "Dommage !";
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse est destinée à l’équipe Animaux. Rappelle-toi, tu dois choisir la réponse en fonction de ton équipe pour pouvoir gagner.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "Dommage !";
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse était destinée à l’équipe Paysages. Rappelle-toi, tu dois choisir la réponse en fonction de ton équipe pour pouvoir gagner.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Tu t’en sors très bien !";
            document.getElementById("paragraphe-reponce").innerText = "Bravo, tu as compris le principe. Tu dois choisir la réponse en fonction de ton équipe. Continue sur cette lancée.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Pas mal !";
            document.getElementById("paragraphe-reponce").innerText = "Cette réponse n'avait rien à voir avec notre combat contre l'équipe Paysages, mais au moins nous avons pu récolter quelques points. Réfléchis bien à choisir ta réponse en fonction de ton équipe.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Pas mal !";
            document.getElementById("paragraphe-reponce").innerText = "Cette réponse n'avait rien à voir avec notre combat contre l'équipe Animaux, mais au moins nous avons pu récolter quelques points. Réfléchis bien à choisir ta réponse en fonction de ton équipe.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step2()");
    document.getElementById("score-validation").style.display = "flex";
    document.getElementById("container-img").getElementsByTagName("img")[0].style.transition = "500ms";
    scrollToTop();

}


function step2() {
    document.getElementById("img1").src = "source/image/tableau_musee/Chabry_Léonce_-_La_vague.jpg";
    document.getElementById("paragraphe-center").innerText = "La vague \n Léonce Chabry";
    document.getElementById("button-next").setAttribute("onclick", "next1()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
    document.getElementById("plans").src = "source/image/plans/Plan_Vague.svg";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("img2").style.width = "none";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("paragraphe-center").style.display = "block";
    scrollToTop();
}


function next1() {
    updateQuestionAndButtons(
        "Cette mer est ...",
        "Est agitée. (Qui a amené sa planche de surf ?)",
        "Q3R1()",
        "Doit être pleine de vie.",
        "Q3R2()",
        "Est sublimée par son contraste avec le ciel.",
        "Q3R3()"
    );
    document.getElementById("container-button").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ3()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    checkLost = 1;
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
}


function Q3R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}

function Q3R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}
function Q3R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}


function reponceQ3() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Tu y étais presque !";
            document.getElementById("paragraphe-reponce").innerText = "Jolie figure, mais cette mer est sans doute pleine de poissons !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Tu y étais presque !";
            document.getElementById("paragraphe-reponce").innerText = " Jolie figure, mais regarde plutôt ce magnifique paysage créé avec le contraste entre ciel et mer.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Joli !";
            document.getElementById("paragraphe-reponce").innerText = "Eh oui, la mer est sans doute pleine de poissons.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "Mauvaise pioche !";
            document.getElementById("paragraphe-reponce").innerText = "Ah zut, cette mer est sans doute pleine de poissons ! Ce contraste entre ciel et mer, quant à lui, était quand même magnifique.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "Mauvaise pioche !";
            document.getElementById("paragraphe-reponce").innerText = "Ces deux éléments créent un magnifique paysage, mais cette mer est sans doute pleine de poissons !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Joli !";
            document.getElementById("paragraphe-reponce").innerText = "Ah, on est bien d’accord, ces deux éléments créent un magnifique paysage !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step3()");
    document.getElementById("score-validation").style.display = "flex";
    document.getElementById("container-img").getElementsByTagName("img")[0].style.transition = "500ms";
    scrollToTop();
}

function step3() {
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").src = "source/image/tableau_musee/Autonme.jpg";
    document.getElementById("paragraphe-center").innerText = "Rayon d’Automne \nSouvenir du parc de Cognac \nLouis Augustin Auguin";
    document.getElementById("button-next").setAttribute("onclick", "next2()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
    document.getElementById("plans").src = "source/image/plans/Plan_RayonAutomne.svg";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("img2").style.width = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("question").style.display = "block";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("paragraphe-center").style.display = "block";
    scrollToTop();
}

function next2() {
    updateQuestionAndButtons(
        "Cette forêt est :",
        "Accueillante. (On se fait une petite sieste ?)",
        "Q4R1()",
        "Originale. (Je reconnais, c’est la forêt interdite !)",
        "Q4R2()",
        "Stressante (mais protectrice ?).",
        "Q4R3()"
    );
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-next").setAttribute("onclick", "reponceQ4()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("question").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("button-lost").style.display = "none";
}

function Q4R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}

function Q4R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}
function Q4R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}


function reponceQ4() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "Tu auras essayé…";
            document.getElementById("paragraphe-reponce").innerText = "Mais ce paysage est tout de même effrayant, non ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo !";
            document.getElementById("paragraphe-reponce").innerText = "Eh oui, quel paysage splendide, parfait pour un petit dodo.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Tu n’es pas dans le bon univers…";
            document.getElementById("paragraphe-reponce").innerText = "Si seulement il pouvait y avoir une équipe “Sorciers”...";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Tu n’es pas dans le bon univers…";
            document.getElementById("paragraphe-reponce").innerText = "Si seulement il pouvait y avoir une équipe “Sorciers”...";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo !";
            document.getElementById("paragraphe-reponce").innerText = "Elle fait un peu peur, non ? Mais au moins elle accueille les animaux.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "Tu auras essayé…";
            document.getElementById("paragraphe-reponce").innerText = "Eh oui, quel paysage splendide, parfait pour un petit dodo.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step4()");
    document.getElementById("score-validation").style.display = "flex";
    document.getElementById("container-img").getElementsByTagName("img")[0].style.transition = "500ms";
    scrollToTop();
}

function step4() {
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").src = "source/image/tableau_musee/Baindiane.jpg";
    document.getElementById("paragraphe-center").innerText = "Le Bain de Diane \nCamille Corot";
    document.getElementById("button-next").setAttribute("onclick", "next3()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
    document.getElementById("plans").src = "source/image/plans/Plan_BainDiane.svg";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img2").style.width = "none";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("paragraphe-center").style.display = "block";
    scrollToTop();
}
function next3() {
    updateQuestionAndButtons(
        "Le plus important dans ce tableau c’est…",
        "Le mythe étrange qui l’inspire. (Pourquoi est-ce toujours des histoires tordues ?)",
        "Q5R1()",
        "La globalité de l'œuvre. (C’est la grandeur qui fait la beauté !)",
        "Q5R2()",
        "Les (tout tout tout petits) détails qui apportent de la consistance à l’œuvre.",
        "Q5R3()"
    );

    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    document.getElementById("button-next").setAttribute("onclick", "reponceQ5()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
}


function Q5R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}

function Q5R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}
function Q5R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}


function reponceQ5() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "C’est un choix compréhensible…";
            document.getElementById("paragraphe-reponce").innerText = "Il y a une vraie inspiration d’un mythe de Diane, mais ici ce n’est pas le sujet le plus important pour ton équipe ! Regarde plutôt les lévriers sur la berge.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "C’est un choix compréhensible…";
            document.getElementById("paragraphe-reponce").innerText = "Il y a une vraie inspiration d’un mythe de Diane, mais ici ce n’est pas le sujet le plus important pour ton équipe !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "Tu es passé à côté…";
            document.getElementById("paragraphe-reponce").innerText = "Aïe, tu as manqué un détail essentiel. Si tu regardes bien, il y a des lévriers sur la berge !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Très bon choix !";
            document.getElementById("paragraphe-reponce").innerText = "Yeah, tu as su choisir la bonne réponse ! La globalité de l'œuvre représente majoritairement la nature.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bien vu !";
            document.getElementById("paragraphe-reponce").innerText = "Tu as l'œil ! Tu as su voir les lévriers sur la berge !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "Ce n’est pas le plus intéressant…";
            document.getElementById("paragraphe-reponce").innerText = "Aïe, cette réponse était pour l’équipe Animaux ! L’œuvre représente majoritairement les bois et une source d’eau. ";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step5()");
    document.getElementById("score-validation").style.display = "flex";
    document.getElementById("container-img").getElementsByTagName("img")[0].style.transition = "500ms";
    scrollToTop();
}

function step5() {

    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").src = "source/image/tableau_musee/Chasse.jpg";
    document.getElementById("paragraphe-center").innerText = "La chasse de Méléagre ou la Mort du sanglier de Calydon \nJacques Raymond Brascassat";
    document.getElementById("button-next").setAttribute("onclick", "next4()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
    document.getElementById("plans").src = "source/image/plans/Plan_ChasseMéléagre.svg";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img2").style.width = "none";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("paragraphe-center").style.display = "block";
    scrollToTop();

}
function next4() {
    updateQuestionAndButtons(
        "En regardant cette œuvre, tu ressens…",
        "Une profonde et intense tristesse. (Quelle scène désolante !)",
        "Q6R1()",
        "Une indifférence totale.",
        "Q6R2()",
        "Un sentiment de calme brisé (<em>*Crac*</em>).",
        "Q6R3()"
    );
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;

    document.getElementById("button-next").setAttribute("onclick", "reponceQ6()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
}

function Q6R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}

function Q6R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}
function Q6R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}


function reponceQ6() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Tu as le sens du détail !";
            document.getElementById("paragraphe-reponce").innerText = "Dans le titre tu peux retrouver Mort du sanglier, quel triste événement !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "C’était visible pourtant…";
            document.getElementById("paragraphe-reponce").innerText = "Dommage ! Si tu regardes bien, il y a un grand arbre brisé composant le tableau.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Ah.";
            document.getElementById("paragraphe-reponce").innerText = "... Ok ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Ah.";
            document.getElementById("paragraphe-reponce").innerText = "... Ok ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "C’était écrit pourtant…";
            document.getElementById("paragraphe-reponce").innerText = "Dommage, cette réponse était pour l’équipe Paysages. Tu peux remarquer que le nom du tableau Mort du sanglier annonce une sombre nouvelle…";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Tu as le sens du détail !";
            document.getElementById("paragraphe-reponce").innerText = "Félicitations, tu as remarqué l’arbre brisé qui a une grande importance dans ce tableau.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step6()");
    document.getElementById("score-validation").style.display = "flex";
    document.getElementById("container-img").getElementsByTagName("img")[0].style.transition = "500ms";
    scrollToTop();
}

function step6() {
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").src = "source/image/tableau_musee/vache.jpg";
    document.getElementById("paragraphe-center").innerText = "Equipage de boeufs \nRené Princeteau";
    document.getElementById("button-next").setAttribute("onclick", "next5()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
    document.getElementById("plans").src = "source/image/plans/Plan_Equipage.svg";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img2").style.width = "none";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("paragraphe-center").style.display = "block";
    scrollToTop();
}
function next5() {
    updateQuestionAndButtons(
        "Ce qui m’attire dans ce tableau, c’est…",
        "Les ombres des animaux qui animent le tableau.",
        "Q7R1()",
        "La joie de vivre du chien. (Qui veut lui faire des câlins ?)",
        "Q7R2()",
        "Son nom : Équipages de bœufs charriant des engrais... (Equipage ? On part à l'aventure ?!)",
        "Q7R3()"
    );
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    document.getElementById("button-next").setAttribute("onclick", "reponceQ7()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
}
function Q7R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}

function Q7R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}
function Q7R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").scrollIntoView({ behavior: 'smooth' });
}


function reponceQ7() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "Tu es tombé dans le piège !";
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse était pour l’équipe Paysages. Dans cette réponse, on parle de l’ombre d’un animal, ombre qui fait partie du paysage du tableau.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Super !";
            document.getElementById("paragraphe-reponce").innerText = " Bravo, tu as trouvé la bonne réponse ! Ces ombres animent parfaitement le paysage.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Super !";
            document.getElementById("paragraphe-reponce").innerText = "C’était la bonne réponse ! Il a l’air si heureux !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "Bien essayé !";
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse était pour l’équipe Animaux ! Tu aurais dû te concentrer sur les ombres du tableau…";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Oups !";
            document.getElementById("paragraphe-reponce").innerText = "Cette réponse était neutre. Ce chien avait pourtant l’air si heureux…";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Oups !";
            document.getElementById("paragraphe-reponce").innerText = "Cette réponse était neutre. Pourtant, les ombres des animaux étaient réussies, tu ne trouves pas ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "next6()");
    document.getElementById("score-validation").style.display = "flex";
    document.getElementById("container-img").getElementsByTagName("img")[0].style.transition = "500ms";
    scrollToTop();
}

function next6() {
    if (typeKind == 1) {
        document.getElementById("img1").src = "source/image/badge-animaux.svg";
    } else if (typeKind == 2) {
        document.getElementById("img1").src = "source/image/badge-paysage.svg";
    }
    if (pointsCounted == false) {
        if (typeKind == 1) {
            addPoint('Team A', pointPerso);
        } else {
            addPoint('Team B', pointPerso)
        }
        checkCompletion();
    }
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.height = "150px";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
}

function checkCompletion() {
    if (infoWithActualle = infoWithTotal) {
        reloadCheck = 1;
        document.getElementById("container-bottom-info").style.display = "none";
        document.getElementById("question").innerText = "Félicitations !";
        document.getElementById("bottom-info").innerText = infoWithTotal + "/" + infoWithTotal;
        document.getElementById("barre-info-contenue").style.width = "100%";
        document.getElementById("paragraphe-resultat1").style.textAlign = "center";
        document.getElementById("paragraphe-resultat2").innerHTML = "Viens récupérer ton badge !";
        document.getElementById("button-next").style.display = "none";
        document.getElementById("container-button").style.display = "none";
        document.getElementById("img1").style.marginBottom = "26px";
        document.getElementById("img1").style.width = "80%";
        document.getElementById("question").style.display = "block";
        document.getElementById("scorF").style.display = "flex";
        document.getElementById("paragraphe-resultat1").style.display = "block";
        document.getElementById("paragraphe-resultat2").style.display = "block";
        scrollToTop();
        if (typeKind == 1) {
            document.getElementById("paragraphe-resultat1").innerHTML = "Grâce à toi, ton équipe Animaux a remporté " + pointPerso + " points"
        } else {
            document.getElementById("paragraphe-resultat1").innerHTML = "Grâce à toi, ton équipe Paysages a remporté " + pointPerso + " points"
        }
    }
}

function iAmLost() {
    if (checkLost == 0) {
        document.getElementById("container-plans").style.display = "flex";
        checkLost = 1;
    } else {
        checkLost = 0;
        document.getElementById("container-plans").style.display = "none";
    }
}

function zoomImgIn() {
    document.getElementById("img1").style.width = "calc(100% - 40px)";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("fond-img-plans").style.display = "flex"
    document.getElementById("img1").setAttribute("onclick", "zoomImgOut()");
    document.getElementById("container-img").style.zIndex = "2000"
    document.getElementById("container-img").style.position = "absolute"
    document.getElementById("container-img").style.top = "50%"
    document.getElementById("container-img").style.left = "50%"
    document.getElementById("container-img").style.transform = "translate(-50%, -50%)";


}
function zoomImgOut() {
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("container-img").style.zIndex = "1"
    document.getElementById("container-img").style.position = "relative"
    document.getElementById("container-img").style.top = "0"
    document.getElementById("container-img").style.left = "0"
    document.getElementById("container-img").style.transform = "translate(0%, 0%)";
    document.getElementById("fond-img-plans").style.display = "none"
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
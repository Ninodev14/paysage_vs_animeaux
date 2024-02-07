let infoWithTotal = 6;
let infoWithActualle = 1;
let typeKind = 0;
let pointPerso = 0;
let pointsCounted = false;
let checkLost = 0;
let reloadCheck = 0;
let witchReponce = 0;
let req = new XMLHttpRequest();
let lol = false;
let bodyNone = document.getElementById('body-none');

req.open("GET", "https://api.jsonbin.io/v3/b/65ba11021f5677401f28c1a7/latest", true);
req.setRequestHeader("X-Master-Key", "$2a$10$t0TB.mYwq16iqROanh0X7OBAWGrdVeyeXa3Xd92lZNir2NRkwtOi.");
req.send();

function addPoint(teamName, points) {
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            const jsonData = JSON.parse(req.responseText);
            const team = jsonData.record.teams.find(t => t.teamName === teamName);

            if (team) {
                team.points += points;

                // Update data on JSONBin
                req.open("PUT", "https://api.jsonbin.io/v3/b/65ba11021f5677401f28c1a7", true);
                req.setRequestHeader("Content-Type", "application/json");
                req.setRequestHeader("X-Master-Key", "$2a$10$t0TB.mYwq16iqROanh0X7OBAWGrdVeyeXa3Xd92lZNir2NRkwtOi.");

                if (lol == false) {
                    req.send(JSON.stringify(jsonData.record));
                    console.log('POINTS!');
                    lol = true;
                }

            }
        }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/65ba11021f5677401f28c1a7/latest", true);
    req.setRequestHeader("X-Master-Key", "$2a$10$t0TB.mYwq16iqROanh0X7OBAWGrdVeyeXa3Xd92lZNir2NRkwtOi.");
    req.send();

    lol = false;
}
window.onbeforeunload = function (event) {
    if (reloadCheck == 0) {
        return "Êtes-vous sûr de vouloir quitter cette page ? Vos données non sauvegardées seront perdues.";
    }
};

function IniA() {
    typeKind = 1;
    document.getElementById("img2").style.width = "100px";
    document.getElementById("img2").style.height = "100px";
    document.getElementById("img1").style.width = "150px";
    document.getElementById("img1").style.height = "150px";
    document.getElementById("img2").style.filter = "grayscale(100%)";
    document.getElementById("img1").style.filter = "grayscale(0%)";
    document.getElementById("name-kind").innerText = "Animaux";
    document.getElementById("name-kind").style.display = "flex";


    document.getElementById("paragraphe-center").style.marginLeft = "10%"
    document.getElementById("paragraphe-center").style.marginRight = "10%"
    document.getElementById("paragraphe-center").style.textAlign = "center";
    document.getElementById("button-next").style.backgroundColor = "#CD844E";
    document.getElementById("paragraphe-center").style.marginTop = "30px";

    document.getElementById("paragraphe-center").innerText = "Les animaux sont souvent associés à la loyauté, à la force et au charisme. Ils sont reconnus pour leur générosité et leur enthousiasme.";
    bodyNone.classList.add('body-animal');
    bodyNone.classList.remove('body-paysage');
}

function IniP() {
    typeKind = 2;
    document.getElementById("img1").style.width = "100px";
    document.getElementById("img1").style.height = "100px";
    document.getElementById("img2").style.width = "150px";
    document.getElementById("img2").style.height = "150px";
    document.getElementById("img2").style.filter = "grayscale(0%)";
    document.getElementById("img1").style.filter = "grayscale(100%)";
    document.getElementById("name-kind").innerText = "Paysage";
    document.getElementById("name-kind").style.display = "flex";

    document.getElementById("paragraphe-center").style.marginLeft = "10%"
    document.getElementById("paragraphe-center").style.marginRight = "10%"
    document.getElementById("paragraphe-center").style.textAlign = "center";
    document.getElementById("button-next").style.backgroundColor = "#AFCF94";
    document.getElementById("paragraphe-center").style.marginTop = "30px";

    document.getElementById("paragraphe-center").innerText = "Les paysages possèdent une détermination et une résilience silencieuse, comme le calme avant une tempête. Ils sont reconnus pour leur empathie et leur créativité.";
    bodyNone.classList.add('body-paysage');
    bodyNone.classList.remove('body-animal');
}


function validationKind() {
    if (typeKind == 1) {
        document.getElementById("img1").style.filter = "grayscale(0%)";
        document.getElementById("img2").style.filter = "grayscale(0%)";
        document.getElementById("question").innerText = "Bienvenue chez les animaux";
        document.getElementById("paragraphe-center").innerText = "Pour défendre notre équipe dans ce combat acharné, tu vas devoir te confronter à une série de mini-jeux et de questions. En ce qui concerne les questions, toutes les réponses peuvent te sembler correctes, mais ne te trompe pas, tu fais partie de l'équipe Animal. Garde toujours cette pensée en tête avant de répondre. Pour les mini-jeux, essaie juste d’obtenir le maximum de points.";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img1").style.width = "150px";
        document.getElementById("img1").style.height = "150px";
        document.getElementById("img1").setAttribute("onclick", "");
        document.getElementById("name-kind").style.display = "none";
        document.getElementById("paragraphe-center").style.display = "flex";
        document.getElementById("button-next").setAttribute("onclick", "step1()");
        document.getElementById("img1").setAttribute("onclick", "");
        document.getElementById("btn1").style.borderColor = "#CD844E";
        document.getElementById("btn2").style.borderColor = "#CD844E";
        document.getElementById("btn3").style.borderColor = "#CD844E";
        document.getElementById("container-score").style.backgroundColor = "#F4D9BD";
        document.getElementById("container-score").style.borderColor = "#CD844E";
        document.getElementById("container-bottom-info").style.backgroundColor = "#CD844E";
        

    }
    else if (typeKind == 2) {
        document.getElementById("img1").style.filter = "grayscale(0%)";
        document.getElementById("img2").style.filter = "grayscale(0%)";
        document.getElementById("question").innerText = "Bienvenue chez les paysages";
        document.getElementById("paragraphe-center").innerText = "Pour défendre notre équipe dans ce combat acharné, tu vas devoir te confronter à une série de mini-jeux et de questions. En ce qui concerne les questions, toutes les réponses peuvent te sembler correctes, mais ne te trompe pas, tu fais partie de l'équipe paysage. Garde toujours cette pensée en tête avant de répondre. Pour les mini-jeux, essaie juste d’obtenir le maximum de points.";
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.width = "150px";
        document.getElementById("img2").style.height = "150px";
        document.getElementById("img2").setAttribute("onclick", "");
        document.getElementById("name-kind").style.display = "none";
        document.getElementById("paragraphe-center").style.display = "flex";
        document.getElementById("button-next").setAttribute("onclick", "step1()");
        document.getElementById("img1").setAttribute("onclick", "");
        document.getElementById("btn1").style.borderColor = "#AFCF94";
        document.getElementById("btn2").style.borderColor = "#AFCF94";
        document.getElementById("btn3").style.borderColor = "#AFCF94";
        document.getElementById("container-score").style.backgroundColor = "#E1F5ED";
        document.getElementById("container-score").style.borderColor = "#AFCF94";
        document.getElementById("container-bottom-info").style.backgroundColor = "#AFCF94";
    }
}

function step1() {
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Chevaux.jpg";
    document.getElementById("img2").style.display = "none";
    document.getElementById("question").innerText = "Déplacez-vous jusqu'à cette œuvre.";
    document.getElementById("paragraphe-center").innerText = "La Foulaison du blé en Camargue\nRosa Bonheur";
    document.getElementById("button-next").setAttribute("onclick", "BeginQuestion()");
    document.getElementById("button-next").innerText = "J'Y SUIS";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("paragraphe-center").style.marginTop = "0px"
    document.getElementById("container-img").style.position = "relative"
    document.getElementById("container-img").style.marginTop = "0px"
    document.getElementById("container-img").style.height = "fit-content"

}


function BeginQuestion() {
    document.getElementById("question").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ2()");
    document.getElementById("button-next").innerHTML = "Continuer";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("container-bottom-info").style.display = "flex";
    document.getElementById("container-button").style.display = "flex";
    document.getElementById("question-ask").style.display = "block";
    document.getElementById("question-ask").innerText = "Ces chevaux…";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
}

function updateQuestionAndButtons(questionText, btn1Text, btn1OnClick, btn2Text, btn2OnClick, btn3Text, btn3OnClick) {
    document.getElementById("question-ask").innerText = questionText;
    document.getElementById("btn1").innerText = btn1Text;
    document.getElementById("btn1").setAttribute("onclick", btn1OnClick);
    document.getElementById("btn2").innerText = btn2Text;
    document.getElementById("btn2").setAttribute("onclick", btn2OnClick);
    document.getElementById("btn3").innerText = btn3Text;
    document.getElementById("btn3").setAttribute("onclick", btn3OnClick);
    document.getElementById("question-ask").style.display = "block";
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

}


function reponceQ2() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = "Bravo, tu as compris. Continue sur cette lancée.";
            document.getElementById("container-score-h3").innerText = "+50";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse était en faveur des animaux. Rappelle-toi, nous devons tout faire pour les battre.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse était en faveur du paysage. Rappelle-toi, nous devons tout faire pour les battre.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = "Bravo, tu as compris. Continue sur cette lancée.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Cette réponse n'avait rien à voir avec notre combat contre l'équipe paysage, mais au moins nous avons pu récolter quelques points.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Cette réponse n'avait rien à voir avec notre combat contre l'équipe animal, mais au moins nous avons pu récolter quelques points.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step2()");
    document.getElementById("score-validation").style.display = "flex";
}


function step2() {
    document.getElementById("question").style.display = "block";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Mareebasse.jpg";
    document.getElementById("img2").style.width = "none";

    document.getElementById("paragraphe-center").innerText = "Marée basse à Etaples \nEugène Boudin";
    document.getElementById("button-next").setAttribute("onclick", "next1()");
    document.getElementById("button-next").innerText = "J'Y SUIS";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("paragraphe-center").style.display = "block";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
}


function next1() {
    updateQuestionAndButtons(
        "Que font les personnages ?",
        "Ils se promènent.",
        "Q3R1()",
        "Ils pêchent les coquillages.",
        "Q3R2()",
        "Ils admirent le reflet du ciel sur la mer.",
        "Q3R3()"
    );
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ3()");
    document.getElementById("button-next").innerHTML = "Continuer";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("question").style.display = "none";
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
}


function reponceQ3() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Certes, mais les coquillages sont des animaux.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Certes, mais ce ciel et son reflet étaient quand même éblouissants.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = "Eh oui, les coquillages sont bien des animaux.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Zut, les coquillages sont des animaux. Ce ciel, quant à lui, était quand même magnifique.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Zut, les coquillages sont des animaux.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = "Quel magnifique paysage !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step3()");
    document.getElementById("score-validation").style.display = "flex";
}

function step3() {
    document.getElementById("question").style.display = "block";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Autonme.jpg";
    document.getElementById("img2").style.width = "none";

    document.getElementById("paragraphe-center").innerText = "Rayon d’Automne \nSouvenir du parc de Cognac \nLouis Augustin Auguin";
    document.getElementById("button-next").setAttribute("onclick", "next2()");
    document.getElementById("button-next").innerText = "J'Y SUIS";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("paragraphe-center").style.display = "block";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
}

function next2() {
    updateQuestionAndButtons(
        "Cette forêt est :",
        "Accueillante et relaxante",
        "Q4R1()",
        "Originale et mystérieuse",
        "Q4R2()",
        "Stressante, mais protectrice",
        "Q4R3()"
    );
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ4()");
    document.getElementById("button-next").innerHTML = "Continuer";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("question").style.display = "none";
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
}


function reponceQ4() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Ce paysage est tout de même un peu effrayant, non.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = "Eh oui, quel paysage splendide pour une petite promenade.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Un peu trop flou, non ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Un peu trop flou, non ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = "Elle fait un peu peur, non ? Mais au moins elle accueille les animaux.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Dans la team paysage, on essaie de voir tous les paysages sous un aspect positif.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step4()");
    document.getElementById("score-validation").style.display = "flex";
}

function step4() {
    document.getElementById("question").style.display = "block";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Baindiane.jpg";
    document.getElementById("img2").style.width = "none";

    document.getElementById("paragraphe-center").innerText = "Le Bain de Diane \nCamille Corot";
    document.getElementById("button-next").setAttribute("onclick", "next3()");
    document.getElementById("button-next").innerText = "J'Y SUIS";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("paragraphe-center").style.display = "block";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
}
function next3() {
    updateQuestionAndButtons(
        "Le plus important dans ce tableau c’est…",
        "Le mythe, l’histoire qui inspire le tableau.",
        "Q5R1()",
        "L’ensemble du tableau qui donne vie à l'espace.",
        "Q5R2()",
        "Les détails qui apportent de la consistance à l’œuvre.",
        "Q5R3()"
    );
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ5()");
    document.getElementById("button-next").innerHTML = "Continuer";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("question").style.display = "none";
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
}


function reponceQ5() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Il y a un vrai mythe, mais ici, ce n’est pas le sujet le plus important pour ton équipe !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Il y a un vrai mythe, mais ici, ce n’est pas le sujet le plus important pour ton équipe !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Aïe, cette réponse était pour l’équipe paysage car l’ensemble représente majoritairement un paysage.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = "Yeah, tu as su choisir la bonne réponse !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = "Yeah ! Tu as su voir les lévriers sur la berge!";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Aïe, cette réponse était pour l’équipe animal. En effet, si tu regardes bien, il y a des lévriers sur la berge !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step5()");
    document.getElementById("score-validation").style.display = "flex";
}

function step5() {
    document.getElementById("question").style.display = "block";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Chasse.jpg";
    document.getElementById("img2").style.width = "none";

    document.getElementById("paragraphe-center").innerText = "La chasse de Méléagre ou la Mort du sanglier de Calydon \nJacques Raymond Brascassat";
    document.getElementById("button-next").setAttribute("onclick", "next4()");
    document.getElementById("button-next").innerText = "J'Y SUIS";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("paragraphe-center").style.display = "block";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
}
function next4() {
    updateQuestionAndButtons(
        "En regardant cette œuvre, tu ressens…",
        "Une profonde tristesse.",
        "Q6R1()",
        "Une indifférence totale.",
        "Q6R2()",
        "Un sentiment de calme brisé.",
        "Q6R3()"
    );
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ6()");
    document.getElementById("button-next").innerHTML = "Continuer";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("question").style.display = "none";
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
}


function reponceQ6() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = "Bravo, tu as bien répondu ! Dans le titre, tu peux retrouver 'mort du sanglier', quel triste événement !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Dommage ! Cette réponse était pour l’équipe animal car tu peux retrouver 'mort du sanglier' dans le titre de l'œuvre.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Pourquoi cette réponse ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Pourquoi cette réponse ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Mince, cette réponse était pour l’équipe paysage. En effet, tu peux remarquer qu’un arbre est brisé à droite du centre.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = "Félicitations, tu as remarqué l’arbre brisé ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step6()");
    document.getElementById("score-validation").style.display = "flex";
}

function step6() {
    document.getElementById("question").style.display = "block";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/vache.jpg";
    document.getElementById("img2").style.width = "none";

    document.getElementById("paragraphe-center").innerText = "Marée basse à Etaples \nEugène Boudin";
    document.getElementById("button-next").setAttribute("onclick", "next5()");
    document.getElementById("button-next").innerText = "J'Y SUIS";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("paragraphe-center").style.display = "block";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
}
function next5() {
    updateQuestionAndButtons(
        "Je suis attiré par…",
        "Le reflet de la vache dans la flaque d’eau.",
        "Q7R1()",
        "Les textures de la laine des moutons.",
        "Q7R2()",
        "Le soir qui approche, et les ombres qui arrivent.",
        "Q7R3()"
    );
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ7()");
    document.getElementById("button-next").innerHTML = "Continuer";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("question").style.display = "none";
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
}


function reponceQ7() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse était pour l’équipe paysage ! En effet, dans cette réponse, nous parlons du reflet d’une flaque.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = "Bravo, tu as trouvé la bonne réponse ! Tu n’es pas tombé dans le piège du coucher de soleil !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("paragraphe-reponce").innerText = " Bravo, tu as trouvé la bonne réponse ! Tu n’es pas tombé dans le piège de la flaque d’eau !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse était pour l’équipe animal ! Tu aurais dû te concentrer sur le reflet de la flaque d’eau…";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Oups, cette réponse était neutre. Pourtant, la texture de la laine des moutons avait l’air bien, n'est-ce pas ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-reponce").innerText = "Oups, cette réponse était neutre. Pourtant, le reflet de la flaque d’eau est réussi.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "next6()");
    document.getElementById("score-validation").style.display = "flex";
}

function next6() {
    if (typeKind == 1) {
        document.getElementById("img1").src = "source/image/badge-team-animaux.svg";
    } else if (typeKind == 2) {
        document.getElementById("img1").src = "source/image/badge-team-paysage.svg";
    }
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "150px";
    document.getElementById("img1").style.height = "150px";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("question-ask").style.display = "none";
    if (pointsCounted == false) {
        if (typeKind = 1) {
            addPoint('Team A', pointPerso);
        } else {
            addPoint('Team B', pointPerso)
        }
        checkCompletion();
    }
}

function checkCompletion() {
    if (infoWithActualle = infoWithTotal) {
        reloadCheck = 1;
        document.getElementById("question").style.display = "block";
        document.getElementById("question").innerText = "Félicitations !";
        document.getElementById("container-button").style.display = "none";
        document.getElementById("bottom-info").innerText = infoWithTotal + "/" + infoWithTotal;
        document.getElementById("barre-info-contenue").style.width = "100%";
        document.getElementById("scorF").style.display = "flex";
        document.getElementById("button-next").style.display = "none";
        document.getElementById("paragraphe-resultat1").style.display = "block";
        document.getElementById("paragraphe-resultat1").innerHTML = "Grâce à toi, ton équipe Animaux a remporté"+ pointPerso + "pts"
        document.getElementById("paragraphe-resultat2").style.display = "block";
        document.getElementById("paragraphe-resultat2").innerHTML = "Viens récupérer ton badge !";
    }
}

function iAmLost() {
    if (checkLost == 0) {
        document.getElementById("plans").style.display = "flex";
        checkLost = 1;
    } else {
        document.getElementById("plans").style.display = "none";
        checkLost = 0;
    }
}

function zoomImgIn() {
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("fond-img-plans").style.display = "flex"
    document.getElementById("img1").setAttribute("onclick", "zoomImgOut()");
    document.getElementById("container-img").style.zIndex = "2000"
    document.getElementById("container-img").style.position = "absolute"
    document.getElementById("container-img").style.top = "50%"
    document.getElementById("container-img").style.left = "50%"
    document.getElementById("container-img").style.transform = "translate(-50%, -50%)";
    document.getElementById("img1").style.margin = "0px";

}
function zoomImgOut() {
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("fond-img-plans").style.display = "none"
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("container-img").style.zIndex = "1"
    document.getElementById("container-img").style.position = "relative"
    document.getElementById("container-img").style.top = "0"
    document.getElementById("container-img").style.left = "0"
    document.getElementById("container-img").style.transform = "translate(0%, 0%)";
    document.getElementById("img1").style.marginTop = "60px";
    document.getElementById("img1").style.marginBottom = "20px";
}
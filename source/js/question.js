let infoWithTotal = 6;
let infoWithActualle = 1;
let typeKind = 0;
let pointPerso = 0;
let pointsCounted = false;
let checkLost = 0;
let witchReponce = 0;
let req = new XMLHttpRequest();
let lol = false;


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
    const link = document.getElementById('scorF');
    if (event.target === link) {
        return;
    }
    return "Êtes-vous sûr de vouloir quitter cette page ? Vos données non sauvegardées seront perdues.";
};

function IniA() {
    typeKind = 1;
    document.getElementById("img2").style.width = "100px";
    document.getElementById("img2").style.height = "100px";
    document.getElementById("img1").style.width = "150px";
    document.getElementById("img1").style.height = "150px";
}

function IniP() {
    typeKind = 2;
    document.getElementById("img1").style.width = "100px";
    document.getElementById("img1").style.height = "100px";
    document.getElementById("img2").style.width = "150px";
    document.getElementById("img2").style.height = "150px";
}


function validationKind() {
    if (typeKind == 1) {
        document.getElementById("question").innerText = "Bienvenue chez les animaux";
        document.getElementById("paragraphe-center").innerText = "Pour défendre notre équipe dans ce combat acharné, tu vas devoir te confronter à une série de mini-jeux et de questions. En ce qui concerne les questions, toutes les réponses peuvent te sembler correctes, mais ne te trompe pas, tu fais partie de l'équipe Animal. Garde toujours cette pensée en tête avant de répondre. Pour les mini-jeux, essaie juste d’obtenir le maximum de points.";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img1").style.width = "200px";
        document.getElementById("img1").style.height = "200px";
        document.getElementById("img1").setAttribute("onclick", "");
        document.getElementById("button-next").setAttribute("onclick", " step1()");
        document.getElementById("paragraphe-center").style.display = "flex";
    }
    else if (typeKind == 2) {
        document.getElementById("question").innerText = "Bienvenue chez les paysages";
        document.getElementById("paragraphe-center").innerText = "Pour défendre notre équipe dans ce combat acharné, tu vas devoir te confronter à une série de mini-jeux et de questions. En ce qui concerne les questions, toutes les réponses peuvent te sembler correctes, mais ne te trompe pas, tu fais partie de l'équipe paysage. Garde toujours cette pensée en tête avant de répondre. Pour les mini-jeux, essaie juste d’obtenir le maximum de points.";
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.width = "200px";
        document.getElementById("img2").style.height = "200px";
        document.getElementById("img2").setAttribute("onclick", "");
        document.getElementById("button-next").setAttribute("onclick", "step1()");
        document.getElementById("paragraphe-center").style.display = "flex";
    }
}

function step1() {
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Chevaux.jpg";
    document.getElementById("img2").style.display = "none";
    document.getElementById("question").innerText = "La Foulaison du blé en Camargue, Rosa Bonheur";
    document.getElementById("paragraphe-center").innerText = "Déplacez-vous jusqu'à cette œuvre.";
    document.getElementById("button-next").setAttribute("onclick", "BeginQuestion()");
    document.getElementById("button-next").innerText = "j'y suis";
    document.getElementById("button-lost").style.display = "flex";
}


function BeginQuestion() {
    document.getElementById("button-next").style.display = "none";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ2()");
    document.getElementById("button-next").innerHTML = "Continuer";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("img1").style.display = "none";
    document.getElementById("container-bottom-info").style.display = "flex";
    document.getElementById("container-button").style.display = "flex";
    document.getElementById("question").innerText = "blablabli ou blablablou ?";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    
}

function updateQuestionAndButtons(questionText, btn1Text, btn1OnClick, btn2Text, btn2OnClick, btn3Text, btn3OnClick) {
    infoWithActualle++;
    document.getElementById("question").innerText = questionText;
    document.getElementById("btn1").innerText = btn1Text;
    document.getElementById("btn1").setAttribute("onclick", btn1OnClick);
    document.getElementById("btn2").innerText = btn2Text;
    document.getElementById("btn2").setAttribute("onclick", btn2OnClick);
    document.getElementById("btn3").innerText = btn3Text;
    document.getElementById("btn3").setAttribute("onclick", btn3OnClick);
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
}



function Q2R1() {
    witchReponce = 1;
    document.getElementById("btn1").style.backgroundColor = "red";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q2R2() {
    witchReponce = 2;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "red";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q2R3() {
    witchReponce = 3;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "red";
    document.getElementById("button-next").style.display = "flex";
}


function reponceQ2() {
    if (witchReponce = 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAADDDDADAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    else if (witchReponce = 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAEEEEAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    } else if (witchReponce = 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAADDDAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAA45AAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step2()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
    document.getElementById("paragraphe-center").style.display = "flex";
    
}


function step2() {
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Mareebasse.jpg";
    document.getElementById("img2").style.width = "none";
    document.getElementById("question").innerText = "Marée basse à Etaples, Eugène Boudin";
    document.getElementById("paragraphe-center").innerText = "Déplacez-vous jusqu'à cette œuvre.";
    document.getElementById("button-next").setAttribute("onclick", "next1()");
    document.getElementById("button-next").innerText = "j'y suis";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("container-score").style.display = "none"
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
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
    document.getElementById("img1").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ3()");
    document.getElementById("button-next").innerHTML = "Continuer";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
}


function Q3R1() {
    witchReponce = 1;
    document.getElementById("btn1").style.backgroundColor = "red";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q3R2() {
    witchReponce = 2;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "red";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q3R3() {
    witchReponce = 3;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "red";
    document.getElementById("button-next").style.display = "flex";
}


function reponceQ3() {
    if (witchReponce = 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAADDDDADAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    else if (witchReponce = 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAEEEEAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    } else if (witchReponce = 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAADDDAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAA45AAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step3()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
    document.getElementById("paragraphe-center").style.display = "flex";
    
}

function step3() {
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Autonme.jpg";
    document.getElementById("img2").style.width = "none";
    document.getElementById("question").innerText = "Rayon d’Automne. Souvenir du parc de Cognac, Louis Augustin Auguin";
    document.getElementById("paragraphe-center").innerText = "Déplacez-vous jusqu'à cette œuvre.";
    document.getElementById("button-next").setAttribute("onclick", "next2()");
    document.getElementById("button-next").innerText = "j'y suis";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("container-score").style.display = "none"
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
}

function next2() {
    updateQuestionAndButtons(
        "Cette forêt est :",
        "Accueillante et relaxante",
        "Q4R1()",
        "Originale et mystérieuse",
        "Q4R2()",
        "bof en vrai",
        "Q4R3()"
    );
    document.getElementById("img1").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ4()");
    document.getElementById("button-next").innerHTML = "Continuer";
}

function Q4R1() {
    witchReponce = 1;
    document.getElementById("btn1").style.backgroundColor = "red";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q4R2() {
    witchReponce = 2;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "red";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q4R3() {
    witchReponce = 3;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "red";
    document.getElementById("button-next").style.display = "flex";
}


function reponceQ4() {
    if (witchReponce = 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAADDDDADAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    else if (witchReponce = 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAEEEEAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    } else if (witchReponce = 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAADDDAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAA45AAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step4()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
    document.getElementById("paragraphe-center").style.display = "flex";
    
}
function step4() {
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Baindiane.jpg";
    document.getElementById("img2").style.width = "none";
    document.getElementById("question").innerText = "Le Bain de Diane, Camille Corot";
    document.getElementById("paragraphe-center").innerText = "Déplacez-vous jusqu'à cette œuvre.";
    document.getElementById("button-next").setAttribute("onclick", "next3()");
    document.getElementById("button-next").innerText = "j'y suis";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("container-score").style.display = "none"
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
}
function next3() {
    updateQuestionAndButtons(
        "Est de 4 ?",
        "é wé mon pote",
        "Q5R1()",
        "bof en vrai",
        "Q5R2()",
        "bof en vrai",
        "Q5R3()"
    );
    document.getElementById("img1").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ5()");
    document.getElementById("button-next").innerHTML = "Continuer";
}


function Q5R1() {
    witchReponce = 1;
    document.getElementById("btn1").style.backgroundColor = "red";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q5R2() {
    witchReponce = 2;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "red";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q5R3() {
    witchReponce = 3;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "red";
    document.getElementById("button-next").style.display = "flex";
}


function reponceQ5() {
    if (witchReponce = 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAADDDDADAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    else if (witchReponce = 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAEEEEAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    } else if (witchReponce = 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAADDDAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAA45AAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step5()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
    document.getElementById("paragraphe-center").style.display = "flex";
    
}

function step5() {
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Chasse.jpg";
    document.getElementById("img2").style.width = "none";
    document.getElementById("question").innerText = " La chasse de Méléagre ou la Mort du sanglier de Calydon, Jacques Raymond Brascassat";
    document.getElementById("paragraphe-center").innerText = "Déplacez-vous jusqu'à cette œuvre.";
    document.getElementById("button-next").setAttribute("onclick", "next4()");
    document.getElementById("button-next").innerText = "j'y suis";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("container-score").style.display = "none"
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
}
function next4() {
    updateQuestionAndButtons(
        "Est de 5 ?",
        "é wé mon pote",
        "Q6R1()",
        "bof en vrai",
        "Q6R2()",
        "bof en vrai",
        "Q6R3()"
    );
    document.getElementById("img1").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ6()");
    document.getElementById("button-next").innerHTML = "Continuer";
}

function Q6R1() {
    witchReponce = 1;
    document.getElementById("btn1").style.backgroundColor = "red";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q6R2() {
    witchReponce = 2;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "red";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q6R3() {
    witchReponce = 3;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "red";
    document.getElementById("button-next").style.display = "flex";
}


function reponceQ6() {
    if (witchReponce = 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAADDDDADAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    else if (witchReponce = 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAEEEEAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    } else if (witchReponce = 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAADDDAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAA45AAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step6()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
    document.getElementById("paragraphe-center").style.display = "flex";
    
}

function step6() {
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Mareebasse.jpg";
    document.getElementById("img2").style.width = "none";
    document.getElementById("question").innerText = "Marée basse à Etaples, Eugène Boudin";
    document.getElementById("paragraphe-center").innerText = "Déplacez-vous jusqu'à cette œuvre.";
    document.getElementById("button-next").setAttribute("onclick", "next5()");
    document.getElementById("button-next").innerText = "j'y suis";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("container-score").style.display = "none"
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
}
function next5() {
    updateQuestionAndButtons(
        "Est de 6 ?",
        "é wé mon pote",
        "Q7R1()",
        "bof en vrai",
        "Q7R2()",
        "bof en vrai",
        "Q7R3()"
    );
    document.getElementById("img1").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ7()");
    document.getElementById("button-next").innerHTML = "Continuer";
}
function Q7R1() {
    witchReponce = 1;
    document.getElementById("btn1").style.backgroundColor = "red";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q7R2() {
    witchReponce = 2;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "red";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q7R3() {
    witchReponce = 3;
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "red";
    document.getElementById("button-next").style.display = "flex";
}


function reponceQ7() {
    if (witchReponce = 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAADDDDADAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    else if (witchReponce = 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAEEEEAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    } else if (witchReponce = 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 1;
            document.getElementById("paragraphe-center").innerText = "BLAAAAADDDAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("paragraphe-center").innerText = "BLAAAAAAAA45AAAAAAAAAAABLAAAAAAAAAAAAAAA";
            witchReponce = 0;
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "next6()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
    document.getElementById("paragraphe-center").style.display = "flex";
    
}

function next6() {
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
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
        document.getElementById("question").innerText = "Merci d'avoir participer, vous avez fais " + pointPerso + " point";
        document.getElementById("container-button").style.display = "none";
        document.getElementById("container-score").style.display = "none";
        document.getElementById("bottom-info").innerText = infoWithTotal + "/" + infoWithTotal;
        document.getElementById("barre-info-contenue").style.width = "100%";
        document.getElementById("scorF").style.display = "flex";
        document.getElementById("button-next").style.display = "none";

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
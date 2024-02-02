let infoWithTotal = 5;
let infoWithActualle = 1;
let typeKind = 0;
let pointPerso = 0;
let pointsCounted = false;
let checkLost = 0;
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

window.onbeforeunload = function(event) {
    if (event.target.id === "scoreLink") {
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
        document.getElementById("paragraphe-center").innerText = "BLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAbla";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img1").style.width = "200px";
        document.getElementById("img1").style.height = "200px";
        document.getElementById("img1").setAttribute("onclick", "");
        document.getElementById("button-next").setAttribute("onclick", " step1()");
        document.getElementById("paragraphe-center").style.display = "flex";
    }
    else if (typeKind == 2) {
        document.getElementById("question").innerText = "Bienvenue chez les paysages";
        document.getElementById("paragraphe-center").innerText = "BLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAbla";
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
    document.getElementById("img1").src = "source/image/above_the_birds.png";
    document.getElementById("img2").style.display = "none";
    document.getElementById("question").innerText = "nom de l'oeuvre 1";
    document.getElementById("paragraphe-center").innerText = "déplacer vous jusqu'as cette oeuvre";
    document.getElementById("button-next").setAttribute("onclick", "BeginQuestion()");
    document.getElementById("button-next").innerText = "j'y suis";
    document.getElementById("button-lost").style.display = "flex";
}


function BeginQuestion() {
    document.getElementById("button-next").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("img1").style.display = "none";
    document.getElementById("container-bottom-info").style.display = "flex";
    document.getElementById("container-button").style.display = "flex";
    document.getElementById("question").innerText = "blablabli ou blablablou ?";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
}

function updateQuestionAndButtons(questionText, btn1Text, btn1OnClick, btn2Text, btn2OnClick) {
    infoWithActualle++;
    document.getElementById("question").innerText = questionText;
    document.getElementById("btn1").innerText = btn1Text;
    document.getElementById("btn1").setAttribute("onclick", btn1OnClick);
    document.getElementById("btn2").innerText = btn2Text;
    document.getElementById("btn2").setAttribute("onclick", btn2OnClick);
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
}



function Q2R1() {
    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step2()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function Q2R2() {
    if (typeKind == 0) {
        pointPerso = pointPerso + 1;
    } else {
        pointPerso = pointPerso + 5;
    }
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step2()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function step2() {
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/above_the_birds.png";
    document.getElementById("img2").style.width = "none";
    document.getElementById("question").innerText = "nom de l'oeuvre 2";
    document.getElementById("paragraphe-center").innerText = "déplacer vous jusqu'as cette oeuvre";
    document.getElementById("button-next").setAttribute("onclick", "next1()");
    document.getElementById("button-next").innerText = "j'y suis";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("container-score").style.display = "none"
    document.getElementById("button-lost").style.display = "flex";
}


function next1() {
    updateQuestionAndButtons(
        "c'est la deusieme question ou kua ?",
        "é wé mon pote",
        "Q3R1()",
        "bof en vrai",
        "Q3R2()"
    );
    document.getElementById("img1").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
}



function Q3R1() {

    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step3()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}


function Q3R2() {

    if (typeKind == 0) {
        pointPerso = pointPerso + 1;
    } else {
        pointPerso = pointPerso + 5;
    }
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step3()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function step3() {
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/above_the_birds.png";
    document.getElementById("img2").style.width = "none";
    document.getElementById("question").innerText = "nom de l'oeuvre 3";
    document.getElementById("paragraphe-center").innerText = "déplacer vous jusqu'as cette oeuvre";
    document.getElementById("button-next").setAttribute("onclick", "next2()");
    document.getElementById("button-next").innerText = "j'y suis";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("container-score").style.display = "none"
    document.getElementById("button-lost").style.display = "flex";
}

function next2() {
    updateQuestionAndButtons(
        "Est de 3 ?",
        "é wé mon pote",
        "Q4R1()",
        "bof en vrai",
        "Q4R2()"
    );
    document.getElementById("img1").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
}


function Q4R1() {
    if (typeKind == 0) {
        pointPerso = pointPerso + 1;
    } else {
        pointPerso = pointPerso + 5;
    }
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step4()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function Q4R2() {
    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step4()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}
function step4() {
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/above_the_birds.png";
    document.getElementById("img2").style.width = "none";
    document.getElementById("question").innerText = "nom de l'oeuvre 4";
    document.getElementById("paragraphe-center").innerText = "déplacer vous jusqu'as cette oeuvre";
    document.getElementById("button-next").setAttribute("onclick", "next3()");
    document.getElementById("button-next").innerText = "j'y suis";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("container-score").style.display = "none"
    document.getElementById("button-lost").style.display = "flex";
}
function next3() {
    updateQuestionAndButtons(
        "Est de 4 ?",
        "é wé mon pote",
        "Q5R1()",
        "bof en vrai",
        "Q5R2()"
    );
    document.getElementById("img1").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
}



function Q5R1() {
    if (typeKind == 0) {
        console.log("test")
        pointPerso = pointPerso + 1;
    } else {
        pointPerso = pointPerso + 5;
    }
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step5()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function Q5R2() {
    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "step5()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function step5() {
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/above_the_birds.png";
    document.getElementById("img2").style.width = "none";
    document.getElementById("question").innerText = "nom de l'oeuvre 5";
    document.getElementById("paragraphe-center").innerText = "déplacer vous jusqu'as cette oeuvre";
    document.getElementById("button-next").setAttribute("onclick", "next4()");
    document.getElementById("button-next").innerText = "j'y suis";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("container-score").style.display = "none"
    document.getElementById("button-lost").style.display = "flex";
}
function next4() {
    updateQuestionAndButtons(
        "Est de 5 ?",
        "é wé mon pote",
        "Q6R1()",
        "bof en vrai",
        "Q6R2()"
    );
    document.getElementById("img1").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
}


function Q6R1() {
    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "next5()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;

}

function Q6R2() {
    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }
    document.getElementById("button-next").innerText = "suivant";
    document.getElementById("button-next").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "next5()");
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function next5() {
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
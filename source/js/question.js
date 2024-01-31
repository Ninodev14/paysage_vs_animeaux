let infoWithTotal = 5;
let infoWithActualle = 1;
let typeKind = 0;
let pointPerso = 0;

function IniA() {
    typeKind = 0;
    document.getElementById("question").innerText = "Bienvenue chez les animaux";
    document.getElementById("paragraphe-center").innerText = "BLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAbla";
    document.getElementById("paragraphe-center").style.display = "flex";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img1").style.width = "200px";
    document.getElementById("img1").style.height = "200px";
    document.getElementById("button-begin").style.display = "flex";
}

function IniP() {
    typeKind = 1;
    document.getElementById("question").innerText = "Bienvenue chez les paysages";
    document.getElementById("paragraphe-center").innerText = "BLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAblaBLAbla";
    document.getElementById("paragraphe-center").style.display = "flex";
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.width = "200px";
    document.getElementById("img2").style.height = "200px";
    document.getElementById("button-begin").style.display = "flex";
}




function BeginQuestion() {
    document.getElementById("button-begin").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("container-img").style.display = "none";
    document.getElementById("container-bottom-info").style.display = "flex";
    document.getElementById("container-button").style.display = "flex";
    document.getElementById("question").innerText = "blablabli ou blablablou ?";
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
    updateQuestionAndButtons(
        "c'est la deusieme question ou kua ?",
        "é wé mon pote",
        "Q3R1()",
        "bof en vrai",
        "Q3R2()"
    );
    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }    
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function Q2R2() {
    updateQuestionAndButtons(
        "c'est la deusieme question ou kua ?",
        "é wé mon pote",
        "Q3R1()",
        "bof en vrai",
        "Q3R2()"
    );
    if (typeKind == 0) {
        pointPerso = pointPerso + 1;
    } else {
        pointPerso = pointPerso + 5;
    }
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function Q3R1() {
    updateQuestionAndButtons(
        "Est de 3 ?",
        "é wé mon pote",
        "Q4R1()",
        "bof en vrai",
        "Q4R2()"
    );
    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function Q3R2() {
    updateQuestionAndButtons(
        "Est de 3 ?",
        "é wé mon pote",
        "Q4R1()",
        "bof en vrai",
        "Q4R2()"
    );
    if (typeKind == 0) {
        pointPerso = pointPerso + 1;
    } else {
        pointPerso = pointPerso + 5;
    }
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function Q4R1() {
    updateQuestionAndButtons(
        "Est de 4 ?",
        "é wé mon pote",
        "Q5R1()",
        "bof en vrai",
        "Q5R2()"
    );
    if (typeKind == 0) {
        pointPerso = pointPerso + 1;
    } else {
        pointPerso = pointPerso + 5;
    }
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function Q4R2() {
    updateQuestionAndButtons(
        "Est de 4 ?",
        "é wé mon pote",
        "Q5R1()",
        "bof en vrai",
        "Q5R2()"
    );
    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function Q5R1() {
    updateQuestionAndButtons(
        "Est de 5 ?",
        "é wé mon pote",
        "Q6R1()",
        "bof en vrai",
        "Q6R2()"
    );
    if (typeKind == 0) {
        console.log("test")
        pointPerso = pointPerso + 1;
    } else {
        pointPerso = pointPerso + 5;
    }
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function Q5R2() {
    updateQuestionAndButtons(
        "Est de 5 ?",
        "é wé mon pote",
        "Q6R1()",
        "bof en vrai",
        "Q6R2()"
    );
    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
}

function Q6R1() {
    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
    checkCompletion();
}

function Q6R2() {
    if (typeKind == 0) {
        pointPerso = pointPerso + 5;
    } else {
        pointPerso = pointPerso + 1;
    }
    document.getElementById("container-score").style.display = "flex";
    document.getElementById("container-score-h3").innerText = pointPerso;
    checkCompletion();
}
function checkCompletion() {
    if (infoWithActualle = infoWithTotal) {
        document.getElementById("question").innerText = "Vous avez fais " + pointPerso + " point";
        document.getElementById("container-button").style.display = "none";
        document.getElementById("bottom-info").innerText = infoWithTotal + "/" + infoWithTotal;
        document.getElementById("barre-info-contenue").style.width = "100%";
    }
}
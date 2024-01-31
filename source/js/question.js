let infoWithTotal = 5;
let infoWithActualle = 1;
let typeKind = 0;

function IniA() {
    document.getElementById("question").innerText = "Choisser votre type";
    document.getElementById("img1").setAttribute("onclick", "teamAA()");
    document.getElementById("img2").setAttribute("onclick", "teamAB()");
    document.getElementById("img3").setAttribute("onclick", "teamAC()");
    document.getElementById("img4").setAttribute("onclick", "teamAD()");
    document.getElementById("img3").style.display = "flex";
    document.getElementById("img4").style.display = "flex";
    document.getElementById("img1").src = "source/image/test_ours.webp";
    document.getElementById("img2").src = "source/image/test_ours.webp";
    document.getElementById("img3").src = "source/image/test_ours.webp";
    document.getElementById("img4").src = "source/image/test_ours.webp";
}

function IniP() {
    document.getElementById("question").innerText = "Choisser votre type";
    document.getElementById("img1").setAttribute("onclick", "teamPA()");
    document.getElementById("img2").setAttribute("onclick", "teamPB()");
    document.getElementById("img3").setAttribute("onclick", "teamPC()");
    document.getElementById("img4").setAttribute("onclick", "teamPD()");
    document.getElementById("img3").style.display = "flex";
    document.getElementById("img4").style.display = "flex";
    document.getElementById("img1").src = "source/image/test_mer.jpg";
    document.getElementById("img2").src = "source/image/test_mer.jpg";
    document.getElementById("img3").src = "source/image/test_mer.jpg";
    document.getElementById("img4").src = "source/image/test_mer.jpg";
}

function teamAA() {
    BeginQuestion()
    typeKind = 1;
}

function teamAB() {
    BeginQuestion()
    typeKind = 2;
}

function teamAC() {
    BeginQuestion()
    typeKind = 3;
}

function teamAD() {
    BeginQuestion()
    typeKind = 4;
}

function teamPA() {
    BeginQuestion()
    typeKind = 5;
}

function teamPB() {
    BeginQuestion()
    typeKind = 6;
}

function teamPC() {
    BeginQuestion()
    typeKind = 7;
}

function teamPD() {
    BeginQuestion()
    typeKind = 8;
}


function BeginQuestion() {
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
}

function Q2R2() {
    updateQuestionAndButtons(
        "c'est la deusieme question ou kua ?",
        "é wé mon pote",
        "Q3R1()",
        "bof en vrai",
        "Q3R2()"
    );
}

function Q3R1() {
    updateQuestionAndButtons(
        "Est de 3 ?",
        "é wé mon pote",
        "Q4R1()",
        "bof en vrai",
        "Q4R2()"
    );
}

function Q3R2() {
    updateQuestionAndButtons(
        "Est de 3 ?",
        "é wé mon pote",
        "Q4R1()",
        "bof en vrai",
        "Q4R2()"
    );
}

function Q4R1() {
    updateQuestionAndButtons(
        "Est de 4 ?",
        "é wé mon pote",
        "Q5R1()",
        "bof en vrai",
        "Q5R2()"
    );
}

function Q4R2() {
    updateQuestionAndButtons(
        "Est de 4 ?",
        "é wé mon pote",
        "Q5R1()",
        "bof en vrai",
        "Q5R2()"
    );
}

function Q5R1() {
    updateQuestionAndButtons(
        "Est de 5 ?",
        "é wé mon pote",
        "Q6R1()",
        "bof en vrai",
        "Q6R2()"
    );
}

function Q5R2() {
    updateQuestionAndButtons(
        "Est de 5 ?",
        "é wé mon pote",
        "Q6R1()",
        "bof en vrai",
        "Q6R2()"
    );
}

function Q6R1() {
    checkCompletion();
}

function Q6R2() {
    checkCompletion();
}
function checkCompletion() {
    if (infoWithActualle = infoWithTotal) {
        document.getElementById("question").innerText = "Vous avez finis";
        document.getElementById("container-button").style.display = "none";
        document.getElementById("bottom-info").innerText = infoWithTotal + "/" + infoWithTotal;
        document.getElementById("barre-info-contenue").style.width = "100%";
    }
}
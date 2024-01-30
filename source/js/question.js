let infoWithTotal = 5;
let infoWithActualle = 1;
let typeVs = 0;

function IniA() {
    typeVs = 0;
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
    typeVs = 1;
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

function Q1R1() {
    updateQuestionAndButtons(
        "c'est la deusieme question ou kua ?",
        "é wé mon pote",
        "Q2R1()",
        "bof en vrai",
        "Q2R2()"
    );
}

function Q1R2() {
    updateQuestionAndButtons(
        "c'est la deusieme question ou kua ?",
        "é wé mon pote",
        "Q2R1()",
        "bof en vrai",
        "Q2R2()"
    );
}
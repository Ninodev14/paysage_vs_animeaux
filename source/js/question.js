let infoWithTotal = 5;
let infoWithActualle = 1;

function Q1R1() {
    infoWithActualle = infoWithActualle + 1; 
    document.getElementById("question").innerText = "c'est la deusieme question ou kua ?";
    document.getElementById("btn1").innerText = "é wé mon pote";
    document.getElementById("btn1").setAttribute("onclick", "Q2R1");
    document.getElementById("btn2").innerText = "bof en vrai";
    document.getElementById("btn2").setAttribute("onclick", "Q2R2");
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = "20%";   
}

function Q1R2() {
    infoWithActualle = infoWithActualle + 1; 
    document.getElementById("question").innerText = "c'est la deusieme question ou kua ?";
    document.getElementById("btn1").innerText = "é wé mon pote";
    document.getElementById("btn1").setAttribute("onclick", "Q2R1");
    document.getElementById("btn2").innerText = "bof en vrai";
    document.getElementById("btn2").setAttribute("onclick", "Q2R2");
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = 100 * infoWithActualle / infoWithTotal + "%";
}
var goldmine_level;
var geld;
var goldmine_faktor;

if (localStorage.getItem("gameIsSaved") == null) {
    localStorage.setItem("gameIsSaved", true);
    console.log("game was not saved, created save file");
    gameSave();
} else {
    console.log("game save found, loading...");
    gameLoad();
}


update();

function update() {
    document.getElementById("goldmine-levelangabe").innerHTML = "Level: " + goldmine_level + "/10";
    document.getElementById("Kontostand").innerHTML = "Kontostand: " + geld;
    document.getElementById("goldmine_geldsekunde").innerHTML = "Geld/Sekunde";
}

function gameSave() {
    localStorage.setItem("goldmine_level", goldmine_level);
    localStorage.setItem("geld", geld);
}

function gameLoad() {
    goldmine_level = localStorage.getItem("goldmine_level");
    geld = localStorage.getItem("geld");
}
var goldmine_level = 0;
var geld = 10;
var goldmine_faktor = 0;

if (localStorage.getItem("gameIsSaved") == null) {
    localStorage.setItem("gameIsSaved", true);
    console.log("game was not saved yet, creating save file...");
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
    document.getElementById("goldmine_progress").value = goldmine_level;
}

function gameSave() {
    localStorage.setItem("goldmine_level", goldmine_level);
    localStorage.setItem("geld", geld);
    update();
}

function gameLoad() {
    goldmine_level = localStorage.getItem("goldmine_level");
    geld = localStorage.getItem("geld");
    update();
}

function goldmine_upgrade() {
    if (goldmine_level > 11) {
        window.alert("Du hast bereits das Maximum erreicht!");
    } else {
        if (geld > 100 || geld == 100) {
            geld = geld - 100;
            goldmine_level++;
            gameSave();
        } else {
            window.alert("Du hast nicht genügend Geld für diesen Kaufvorgang oder hast bereits das maximum erreicht!")
        }
    }
}
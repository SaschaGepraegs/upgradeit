var goldmine_level = 0;
var geld = 100;
var goldmine_faktor = 0;
var diamine_level = 0;

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
    document.getElementById("goldmine_geldsekunde").innerHTML = goldmine_level + " Geld/Sekunde";
    document.getElementById("goldmine_progress").value = goldmine_level;
    document.getElementById("diamine-levelangabe").innerHTML = "Level: " + diamine_level + "/10";
    document.getElementById("diamine_geldsekunde").innerHTML = diamine_level + " Geld/Sekunde";
    document.getElementById("diamine_progress").value = diamine_level;

}

function gameSave() {
    localStorage.setItem("goldmine_level", goldmine_level);
    localStorage.setItem("geld", geld);
    localStorage.setItem("diamine_level", diamine_level);
    update();
}

function gameLoad() {
    goldmine_level = localStorage.getItem("goldmine_level");
    geld = localStorage.getItem("geld");
    goldmine_level = localStorage.getItem("diamine_level");
    update();
}

function goldmine_upgrade() {
    if (goldmine_level > 9) {
        window.alert("Du hast bereits das Maximum erreicht!");
    } else {
        if (geld > 100 || geld == 100) {
            geld = geld - 100;
            goldmine_level++;
            gameSave();
        } else {
            window.alert("Du hast nicht genügend Geld für diesen Kaufvorgang!")
        }
    }
}

function diamine_upgrade() {
    if (diamine_level > 9) {
        window.alert("Du hast bereits das Maximum erreicht!");
    } else {
        if (geld > 100 || geld == 100) {
            geld = geld - 100;
            diamine_level++;
            gameSave();
        } else {
            window.alert("Du hast nicht genügend Geld für diesen Kaufvorgang!")
        }
    }
}

var goldmine_geldmachen = window.setInterval(function() {
    geld = Number(geld) + Number((5 * goldmine_level));
    update();
    gameSave();
}, 5000);

var diamine_geldmachen = window.setInterval(function() {
    geld = Number(geld) + Number((5 * diamine_level));
    update();
    gameSave();
}, 5000);
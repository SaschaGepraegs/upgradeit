var goldmine_level = 0;
var geld = 10;
var goldmine_faktor = 0;
var diamine_level = 0;
var silbermine_level = 0;

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
    var allg_faktor = Number(goldmine_level) + Number(diamine_level * 3) + Number(silbermine_level * 0.3);
    document.getElementById("goldmine-levelangabe").innerHTML = "Level: " + goldmine_level + "/10";
    document.getElementById("Kontostand").innerHTML = "Kontostand: " + Math.round(geld);
    document.getElementById("goldmine_geldsekunde").innerHTML = goldmine_level + " Geld/Sekunde";
    document.getElementById("goldmine_progress").value = goldmine_level;
    document.getElementById("diamine-levelangabe").innerHTML = "Level: " + diamine_level + "/10";
    document.getElementById("diamine_geldsekunde").innerHTML = diamine_level * 3 + " Geld/Sekunde";
    document.getElementById("diamine_progress").value = diamine_level;
    document.getElementById("gpros").innerHTML = "Aktuell machst du " + allg_faktor + " Geld pro Sekunde";
    document.getElementById("silbermine-levelangabe").innerHTML = "Level: " + silbermine_level + "/10";
    document.getElementById("silbermine_geldsekunde").innerHTML = silbermine_level * 0.3 + " Geld/Sekunde";
    document.getElementById("silbermine_progress").value = silbermine_level;

}

function gameSave() {
    localStorage.setItem("goldmine_level", goldmine_level);
    localStorage.setItem("geld", geld);
    localStorage.setItem("diamine_level", diamine_level);
    localStorage.setItem("silbermine_level", silbermine_level);
    update();
}

function gameLoad() {
    goldmine_level = localStorage.getItem("goldmine_level");
    geld = localStorage.getItem("geld");
    diamine_level = localStorage.getItem("diamine_level");
    silbermine_level = localStorage.getItem("silbermine_level");
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
        if (geld > 1000 || geld == 1000) {
            geld = geld - 1000;
            diamine_level++;
            gameSave();
        } else {
            window.alert("Du hast nicht genügend Geld für diesen Kaufvorgang!")
        }
    }
}

function silbermine_upgrade() {
    if (silbermine_level > 9) {
        window.alert("Du hast bereits das Maximum erreicht!");
    } else {
        if (geld > 10 || geld == 10) {
            geld = geld - 10;
            silbermine_level++;
            gameSave();
        } else {
            window.alert("Du hast nicht genügend Geld für diesen Kaufvorgang!")
        }
    }
}

var goldmine_geldmachen = window.setInterval(function() {
    geld = Number(geld) + Number((goldmine_level));
    update();
    gameSave();
}, 1000);

var diamine_geldmachen = window.setInterval(function() {
    geld = Number(geld) + Number((3 * diamine_level));
    update();
    gameSave();
}, 1000);

var silbermine_geldmachen = window.setInterval(function() {
    geld = Number(geld) + Number((0.3 * silbermine_level));
    update();
    gameSave();
}, 1000);

function assignToMenu() {
    window.location.assign("menu.html");
}

function reset() {
    localStorage.clear();
    window.location.assign("index.html");
}

function cheat_geld() {
    var cheat_geld_menge = window.prompt("Bitte gib die Geldmenge ein, die du ercheaten möchtest.");
    if (cheat_geld_menge == null || cheat_geld_menge == "" || cheat_geld_menge !== 187) {
        window.alert("Der eingegebene Wert ist keine Zahl!")
    } else {
        window.alert("Der Cheat wurde erfolgreich angewandt!");
        geld = cheat_geld_menge;
        gameSave();
    }
}
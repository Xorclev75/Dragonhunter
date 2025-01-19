document.addEventListener("DOMContentLoaded", function () {		
    const earthDragon = document.getElementById("earthDragon");
    const fireDragon = document.getElementById("fireDragon");
    const iceDragon = document.getElementById("iceDragon");
    const windDragon = document.getElementById("windDragon");
    const castleButton = document.getElementById("castleButton");
    const cancelButton = document.getElementById("cancelButton");

    // Retrieve dragon defeat statuses as strings
    const edrgDefeated = localStorage.getItem('edrgDefeated');
    const fdrgDefeated = localStorage.getItem('fdrgDefeated');
    const idrgDefeated = localStorage.getItem('idrgDefeated');
    const wdrgDefeated = localStorage.getItem('wdrgDefeated');

    // Log values for debugging
    console.log("edrgDefeated: ", edrgDefeated);
    console.log("fdrgDefeated: ", fdrgDefeated);
    console.log("idrgDefeated: ", idrgDefeated);
    console.log("wdrgDefeated: ", wdrgDefeated);

    // ADDED THIS FUNCTION ON 12/29/24, PROBABLY UNNECESSARY
    function checkWind() {
        if (wdrgDefeated === "true") {
            location.href = "dh-final.html";
        } else {
            location.href = "dh-castle.html";
        }
    }

    // Update button states based on dragon defeat statuses
    if (edrgDefeated === "true") { 
        earthDragon.disabled = true;
        fireDragon.disabled = false;
        iceDragon.disabled = true;
        windDragon.disabled = true;
    } else {
        earthDragon.disabled = false;
        fireDragon.disabled = true;
        iceDragon.disabled = true;
        windDragon.disabled = true;
    }

    if (fdrgDefeated === "true") { 
        earthDragon.disabled = true;
        fireDragon.disabled = true;
        iceDragon.disabled = false;
        windDragon.disabled = true;
    } 

    if (idrgDefeated === "true") { 
        earthDragon.disabled = true;
        fireDragon.disabled = true;
        iceDragon.disabled = true;
        windDragon.disabled = false;
    } 

    if (wdrgDefeated === "true") { 
        earthDragon.disabled = true;
        fireDragon.disabled = true;
        iceDragon.disabled = true;
        windDragon.disabled = true;
    }

    // Event listeners for dragon buttons
    earthDragon.addEventListener("click", function() {
        location.href = "dh-earth.html";
    });

    fireDragon.addEventListener("click", function() {
        location.href = "dh-fire.html";
    });

    iceDragon.addEventListener("click", function() {
        location.href = "dh-ice.html";
    });

    windDragon.addEventListener("click", function() {
        location.href = "dh-wind.html";
    });

    // Event listener for Castle Obsidian button
    castleButton.addEventListener("click", function() {
        checkWind();
    });

    // Event listener for Cancel button
    cancelButton.addEventListener("click", function() {
        location.href = "dh.html";
    });
});
document.addEventListener("DOMContentLoaded", () => {
	const startButton = document.getElementById("startButton");

    // Function to reset all states and variables
    function resetStates() {
        // Reset all dragon defeat statuses to default (false)
        localStorage.setItem('edrgDefeated', "false");
        localStorage.setItem('fdrgDefeated', "false");
        localStorage.setItem('idrgDefeated', "false");
        localStorage.setItem('wdrgDefeated', "false");

        // Reset heroName and riddleNumber
        let heroName = ""; // Resets heroName to an empty string
        let riddleReset = 0; // Resets riddleNumber to 0
        localStorage.setItem('riddleNumber', riddleReset);


        // Debugging logs to confirm reset
        /*console.log("States have been reset:");
        console.log("edrgDefeated: ", localStorage.getItem('edrgDefeated'));
        console.log("fdrgDefeated: ", localStorage.getItem('fdrgDefeated'));
        console.log("idrgDefeated: ", localStorage.getItem('idrgDefeated'));
        console.log("wdrgDefeated: ", localStorage.getItem('wdrgDefeated'));
        console.log("riddleNumber: ", localStorage.getItem('riddleNumber'));*/
    }

    // Call resetStates on page load
    resetStates();

    // Function to parse dragon status correctly
    function getDragonStatus(key) {
        return localStorage.getItem(key) === "true"; // Returns true or false as boolean
    }

    // Test parsing logic
    /*console.log("Parsed edrgDefeated: ", getDragonStatus('edrgDefeated'));
    console.log("Parsed fdrgDefeated: ", getDragonStatus('fdrgDefeated'));
    console.log("Parsed idrgDefeated: ", getDragonStatus('idrgDefeated'));
    console.log("Parsed wdrgDefeated: ", getDragonStatus('wdrgDefeated'));*/

    // Event listener for the Start button
    startButton.addEventListener("click", function () {        
        location.href = "dh-whisper.html";
    });
	});
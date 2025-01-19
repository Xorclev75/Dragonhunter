document.addEventListener("DOMContentLoaded", () => {
		// Retrieve heroName and addPotion from localStorage
		const heroName = localStorage.getItem('heroName');
		const addPotion = localStorage.getItem('riddleNumber');
		const fightExit = document.getElementById("fightExit");
        const attackButton = document.getElementById("attackButton");
		const defendButton = document.getElementById("defendButton");
		const specialButton = document.getElementById("specialButton");
		const playerMessage = document.getElementById("playerMessage");
		const enemyMessage = document.getElementById("enemyMessage");
		const questionMark = document.getElementById("questionMark");
		const tutorialModal = document.getElementById("tutorialModal");
		const modalButton2 = document.getElementById("modalButton2");
		let eHP = 1500;
		let hHP = 500;
		let eMaxHP = 1500;
		let hMaxHP = 500;
		let Potions = Number(addPotion) + 4;		
		const enemyHP = document.getElementById("enemyHP");
		const playerHP = document.getElementById("playerHP");
		
		

		// Check if heroName exists, otherwise provide a fallback name
		if (!heroName) {
			console.warn("heroName is not found in localStorage. Using default name.");
		}
		
		function updatePotionButton() {
			specialButton.textContent = `Potion x ${Potions}`;
		}

		// Initialize the Potion button text
		updatePotionButton();

		// Function to disable all buttons
		function disableButtons() {
			attackButton.disabled = true;
			defendButton.disabled = true;
			specialButton.disabled = true;
		}

		// Function to enable all buttons
		function enableButtons() {
			attackButton.disabled = false;
			defendButton.disabled = false;
			specialButton.disabled = false;
		}

		// Modify dragonAttack function
		function dragonAttack() {			
			let drgAtk = Math.floor(Math.random() * 60) + 10;
			enemyMessage.textContent = "The Mad Jester attacks for " + drgAtk + " points of damage!";	
			hHP = Math.max(hHP - drgAtk, 0); // Ensure HP doesn't go below 0
			updateHP();
			heroDefeat();
			setTimeout(() => {
				clearMsg();  // Clear messages
				enableButtons(); // Re-enable buttons after clearing messages
			}, 1000);
		}		

		// Function to update HP displays
		function updateHP() {
			// Ensure elements exist before trying to modify them
			if (enemyHP && playerHP) {
				enemyHP.innerText = `Mad Jester: ${eHP}/${eMaxHP}`;
				playerHP.innerText = `${heroName || "Hero"}: ${hHP}/${hMaxHP}`; // Fallback to "Hero" if heroName is null
			} else {
				console.error("HP display elements are not found in the DOM.");
			}
		}

		// Initialize HP displays
		updateHP();
		
		// Function to clear messages
		function clearMsg() {
			playerMessage.textContent = "";
			enemyMessage.textContent = "";
		}

		// Get modal elements
		const gameModal = document.getElementById("gameModal");
		const modalMessage = document.getElementById("modalMessage");
		const modalButton = document.getElementById("modalButton");

		// Function to show the modal with a custom message
		function showModal(message) {
			modalMessage.textContent = message; // Set the modal's message
			gameModal.style.display = "block"; // Show the modal
		}

		// Event listener for the modal button
		modalButton.addEventListener("click", function () {
			if(eHP <= 0) {			
			location.href = "dh-ending.html"; 
			} else {
			gameModal.style.display = "none"; // Hide the modal
			resetGame(); // Call a function to reset or continue the game
			}
		});

		// Adjust defeat functions to show the modal
		function drgDefeat() {
			if (eHP <= 0) {
				let idrgDefeated = true;
				localStorage.setItem('idrgDefeated', idrgDefeated);
				console.log("idrgDefeated = " + idrgDefeated);
				showModal("You defeated the Mad Jester!");	
			}
		}

		function heroDefeat() {
			if (hHP <= 0) {
				showModal("You were defeated by the Mad Jester...");
			}
		}

		// Reset game function (example)
		function resetGame() {
			eHP = eMaxHP;
			hHP = hMaxHP;
			updateHP();
			playerMessage.textContent = "";
			enemyMessage.textContent = "";
		}

		// Three buttons
		attackButton.addEventListener("click", function () {
			let randomNumber = Math.floor(Math.random() * 64) + 50;
			eHP = Math.max(eHP - randomNumber, 0); // Ensure HP doesn't go below 0
			updateHP();
			playerMessage.textContent = "You slash the Mad Jester for " + randomNumber + " points of damage!";
			drgDefeat();
			disableButtons(); // Disable buttons during action
			setTimeout(dragonAttack, 1000); // Pass function reference without executing it
		});

		defendButton.addEventListener("click", function () {
			let rdmNumber = Math.floor(Math.random() * 100) + 1;
			let randomNumber = Math.floor(Math.random() * 74) + 60;
			if(rdmNumber > 30) {
			eHP = Math.max(eHP - randomNumber, 0); // Ensure HP doesn't go below 0
			updateHP();
			playerMessage.textContent = "Your arrow strikes for " + randomNumber + " points of damage!";
			drgDefeat();
			disableButtons(); // Disable buttons during action
			setTimeout(dragonAttack, 1000); }
			else {			
			playerMessage.textContent = "Your arrow missed the Mad Jester!";			
			disableButtons(); // Disable buttons during action
			setTimeout(dragonAttack, 1000); }			
		});

		// Use Potions
		specialButton.addEventListener("click", function () {
		if (Potions > 0) {
			Potions--;
			updatePotionButton();
			playerMessage.textContent = "You quaffed a healing potion!";
			hHP = Math.min(hHP + 90, hMaxHP); // Heal the hero, but don't exceed max HP
			updateHP();
			disableButtons(); // Disable buttons during action
			setTimeout(dragonAttack, 1000);
		} else {
			playerMessage.textContent = "No potions left!";
		}
	});

		
        });
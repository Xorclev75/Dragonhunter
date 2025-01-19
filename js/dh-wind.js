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
		let eHP = 1000;
		let hHP = 400;
		let eMaxHP = 1000;
		let hMaxHP = 400;
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
			let drgAtk = Math.floor(Math.random() * 50) + 10;
			enemyMessage.textContent = "The dragon attacks for " + drgAtk + " points of damage!";	
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
				enemyHP.innerText = `Wind Dragon: ${eHP}/${eMaxHP}`;
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
			location.href = "dh-final.html"; 
			} else {
			gameModal.style.display = "none"; // Hide the modal
			resetGame(); // Call a function to reset or continue the game
			}
		});

		// Adjust defeat functions to show the modal
		function drgDefeat() {
			if (eHP <= 0) {
				let wdrgDefeated = true;
				localStorage.setItem('wdrgDefeated', wdrgDefeated);
				console.log("wdrgDefeated = " + wdrgDefeated);
				showModal("You defeated the Wind Dragon!  HP, Attack and Defense go up by 1 Level!");					
			}
		}

		function heroDefeat() {
			if (hHP <= 0) {
				showModal("You were defeated by the Wind Dragon...");
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
			let randomNumber = Math.floor(Math.random() * 54) + 40;
			eHP = Math.max(eHP - randomNumber, 0); // Ensure HP doesn't go below 0
			updateHP();
			playerMessage.textContent = "You slash the dragon for " + randomNumber + " points of damage!";
			drgDefeat();
			disableButtons(); // Disable buttons during action
			setTimeout(dragonAttack, 1000); // Pass function reference without executing it
		});

		defendButton.addEventListener("click", function () {
			let rdmNumber = Math.floor(Math.random() * 100) + 1;
			let randomNumber = Math.floor(Math.random() * 64) + 50;
			if(rdmNumber > 35) {
			eHP = Math.max(eHP - randomNumber, 0); // Ensure HP doesn't go below 0
			updateHP();
			playerMessage.textContent = "Your arrow strikes for " + randomNumber + " points of damage!";
			drgDefeat();
			disableButtons(); // Disable buttons during action
			setTimeout(dragonAttack, 1000); }
			else {
			playerMessage.textContent = "Your arrow missed the dragon!";			
			disableButtons(); // Disable buttons during action
			setTimeout(dragonAttack, 1000); }			
		});

		// Use Potions
		specialButton.addEventListener("click", function () {
		if (Potions > 0) {
			Potions--;
			updatePotionButton();
			playerMessage.textContent = "You quaffed a healing potion!";
			hHP = Math.min(hHP + 80, hMaxHP); // Heal the hero, but don't exceed max HP
			updateHP();
			disableButtons(); // Disable buttons during action
			setTimeout(dragonAttack, 1000);
		} else {
			playerMessage.textContent = "No potions left!";
		}
	});

		fightExit.addEventListener("click", function () {
			location.href = "dh-map.html";
		});
		
		questionMark.addEventListener("click", function() {
			console.log("icon clicked");
			tutorialModal.style.display = "flex";
		});
		
		modalButton2.addEventListener("click", function () {
			tutorialModal.style.display = "none";
		});
        });
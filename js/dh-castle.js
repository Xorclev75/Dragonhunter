	document.addEventListener("DOMContentLoaded", () => {
		const dragonButton = document.getElementById("dragonButton");
		const kingButton = document.getElementById("kingButton");
		const jesterButton = document.getElementById("jesterButton");
		const whisperButton = document.getElementById("whisperButton");
		const backButton = document.getElementById("backButton");
		const backButton2 = document.getElementById("backButton2");
		const backButton3 = document.getElementById("backButton3");
		const backButton4 = document.getElementById("backButton4");
		const mapButton = document.getElementById("mapButton");
		const riddleButton = document.getElementById("riddleButton");

		// Cache DOM elements
		const dragonMenu = document.getElementById("dh-menu-dragons");
		const kingMenu = document.getElementById("dh-menu-king");
		const jesterMenu = document.getElementById("dh-menu-jester");
		const whisperMenu = document.getElementById("dh-menu-whisper");
		const mainMenu = document.getElementById("dh-menu");

		// Button event listeners
		dragonButton.addEventListener("click", function () {
			dragonMenu.style.display = "flex";
			kingMenu.style.display = "none";
			jesterMenu.style.display = "none";
			whisperMenu.style.display = "none";
			mainMenu.style.display = "none";
		});

		kingButton.addEventListener("click", function () {
			dragonMenu.style.display = "none";
			kingMenu.style.display = "flex";
			jesterMenu.style.display = "none";
			whisperMenu.style.display = "none";
			mainMenu.style.display = "none";
		});

		jesterButton.addEventListener("click", function () {
			dragonMenu.style.display = "none";
			kingMenu.style.display = "none";
			jesterMenu.style.display = "flex";
			whisperMenu.style.display = "none";
			mainMenu.style.display = "none";
		});

		whisperButton.addEventListener("click", function () {
			dragonMenu.style.display = "none";
			kingMenu.style.display = "none";
			jesterMenu.style.display = "none";
			whisperMenu.style.display = "flex";
			mainMenu.style.display = "none";
		});

			backButton.addEventListener("click", function () {
		console.log("Back button clicked!");

			// Hide all menus
			dragonMenu.style.display = "none";
			kingMenu.style.display = "none";
			jesterMenu.style.display = "none";
			whisperMenu.style.display = "none";

			// Show the main menu
			mainMenu.style.display = "flex";
			
		});
		
		backButton2.addEventListener("click", function () {
		console.log("Back button clicked!");

			// Hide all menus
			dragonMenu.style.display = "none";
			kingMenu.style.display = "none";
			jesterMenu.style.display = "none";
			whisperMenu.style.display = "none";

			// Show the main menu
			mainMenu.style.display = "flex";
			
		});
		
		backButton3.addEventListener("click", function () {
		console.log("Back button clicked!");

			// Hide all menus
			dragonMenu.style.display = "none";
			kingMenu.style.display = "none";
			jesterMenu.style.display = "none";
			whisperMenu.style.display = "none";

			// Show the main menu
			mainMenu.style.display = "flex";
			
		});
		
		backButton4.addEventListener("click", function () {
		console.log("Back button clicked!");

			// Hide all menus
			dragonMenu.style.display = "none";
			kingMenu.style.display = "none";
			jesterMenu.style.display = "none";
			whisperMenu.style.display = "none";

			// Show the main menu
			mainMenu.style.display = "flex";

			/* Log current display states for debugging
			console.log("dragonMenu:", dragonMenu.style.display);
			console.log("kingMenu:", kingMenu.style.display);
			console.log("jesterMenu:", jesterMenu.style.display);
			console.log("whisperMenu:", whisperMenu.style.display);
			console.log("mainMenu:", mainMenu.style.display);*/
		});

		riddleButton.addEventListener("click", function () {
			location.href = "dh-riddles.html";
		});


		mapButton.addEventListener("click", function () {
			location.href = "dh-map.html";
		});
	});
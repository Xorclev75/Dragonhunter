	// dh-final.html
		document.addEventListener("DOMContentLoaded", () => {
		const finaleBtn = document.getElementById("finaleButton");
		const finaleWhisper	= document.getElementById("dh-finale-whisper");
		const finaleBtn2 = document.getElementById("finaleButton2");
		const finaleEggs = document.getElementById("dh-finale-eggs");
		const finaleBtn3 = document.getElementById("finaleButton3");
		const finaleJester = document.getElementById("dh-finale-jester");
		
		finaleBtn.addEventListener("click", function() {
			finaleWhisper.style.display = "none";
			finaleEggs.style.display = "flex";
		});
		
		finaleBtn2.addEventListener("click", function() {
			finaleEggs.style.display = "none";
			finaleJester.style.display = "flex";
		});
		
		finaleBtn3.addEventListener("click", function() {
			location.href = "dh-jester.html";
		});
		});
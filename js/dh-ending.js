	// dh-ending.html
		document.addEventListener("DOMContentLoaded", () => {
		const endingBtn = document.getElementById("endingButton");
        const endingWhisper = document.getElementById("dh-ending-whisper");
        const endingText = document.getElementById("dh-ending-text");
        let heroName = localStorage.getItem('heroName'); // Retrieve from localStorage        
       
        
        function setText() {
            endingText.innerHTML =
                "Thus, " + heroName + " saved the kingdom and returned the dragon eggs to their nests. <br> Once returned, the elemental dragons went back to safeguard their eggs. <br> The King and his family returned to the castle. <br> And all lived happily ever after...well, except for the Mad Jester who now resides in the castle dungeon where he can play riddle games with the rats! <br> THE END";
        }

        setText();

        endingBtn.addEventListener("click", function() {        
            location.href = "dh.html";
        });
		});
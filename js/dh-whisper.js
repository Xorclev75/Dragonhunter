document.addEventListener("DOMContentLoaded", () => {
            const whisperButton = document.getElementById("whisperButton");
            const whisperChat = document.getElementById("whisperChat");
            const inputName = document.getElementById("input-name");

            // Initial chat message
            function setChat() {
                whisperChat.innerHTML = `
                    Dragon Hunter, please do not be afraid. <br>
                    My name is Whisper and I'm a kindly spirit who inhabits this castle. <br>
                    You appear to have been injured when the dragons attacked. <br>
                    Do you know your name?
                `;
            }
            setChat();

            // Forbidden words list
            const forbiddenWords = [
                "shit", "bitch", "damn", "balls", "fuck", "cunt", "whore", 
                "slut", "tits", "penis", "vagina", "scrotum", "taint", "cock", 
                "dick", "suck", "wank", "twat", "pussy", "nuts", "crap"
            ];

            // Handle name submission
            whisperButton.addEventListener("click", () => {
                const heroName = inputName.value.trim();
                const checkName = heroName.toLowerCase();
                const hasBadWord = forbiddenWords.some(word => checkName.includes(word));

                if (hasBadWord) {
                    whisperChat.innerHTML = "Please watch your language in this castle!";
                    inputName.value = ""; // Clear the input field
                } else if (checkName === "") {
                    whisperChat.innerHTML = "You do not remember your name? Please try again...";
                } else {
                    localStorage.setItem("heroName", heroName);
                    storeName();
                }
            });

            // Redirect to the next page
            function storeName() {
                location.href = "dh-castle.html";
            }
        });
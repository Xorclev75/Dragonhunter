document.addEventListener("DOMContentLoaded", () => {
    let riddleNumber = localStorage.getItem('riddleNumber')
        ? parseInt(localStorage.getItem('riddleNumber'))
        : 0;

    const riddlesP = document.getElementById("riddles-p");
    const pRiddle = document.getElementById("p-riddles");
    const submitRiddle = document.getElementById("submitRiddle");
    const exitBtn = document.getElementById("buttonExit");

    const riddles = [
        "What has keys but can't open locks?",
        "I'm tall when I'm young. I'm short when I'm old. What am I?",
        "What has to be broken before you can use it?",
        "I'm light as a feather, yet the strongest man cannot hold me for much longer than a minute. What am I?",
        "What begins with a T, ends with a T, and has T in it?",
        "What can travel around the world while staying in a corner?",
        "What has a head, a tail, is brown, and has no legs?",
        "What shows up once in a minute, twice in a moment, but never in a thousand years?",
        "What gets wetter the more it dries?",
        "What has one eye, but cannot see?",
    ];

    const answers = [
        "Piano",
        "Candle",
        "Egg",
        "Breath",
        "Teapot",
        "Stamp",
        "Penny",
        "M",
        "Towel",
        "Needle",
    ];

    function loadRiddle() {
        if (riddleNumber < riddles.length) {
            riddlesP.innerHTML = "Answer my 10 riddles if you dare!<br> For each one right, I'll give you an extra potion!";
            pRiddle.textContent = riddles[riddleNumber];
        } else {
            riddlesP.textContent = "Congratulations, you have answered all the riddles!";
            pRiddle.textContent = "";
            pRiddle.style.display = "none";
            submitRiddle.style.display = "none";
			inputRiddle.style.display = "none";
        }
    }

    function nextRiddle() {
        riddleNumber++; // Increment AFTER showing the current riddle
        localStorage.setItem('riddleNumber', riddleNumber);
        loadRiddle();
    }

    submitRiddle.addEventListener("click", function () {
        let inputRiddle = document.getElementById("inputRiddle").value.trim();
        if (riddleNumber < answers.length && inputRiddle.toLowerCase() === answers[riddleNumber].toLowerCase()) {
            riddlesP.textContent = "That's correct!";
            document.getElementById("inputRiddle").value = ""; // Clear input field
            nextRiddle();
        } else {
            riddlesP.textContent = "That's not correct!";
            document.getElementById("inputRiddle").value = ""; // Clear input field
        }
    });

    exitBtn.addEventListener("click", function () {
        location.href = "dh-castle.html";
    });

    // Load the first riddle on page load
    loadRiddle();
	});
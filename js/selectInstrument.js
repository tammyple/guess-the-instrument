
document.addEventListener("DOMContentLoaded", function() {
    let currentLevel = 0;

    const correctList = ["piano", "drum", "piano", "guitar", "violin", "saxophone", "banjo", "trumpet", "xylophone"];
    const instrumentList = ["piano", "drum", "guitar", "violin", "saxophone", "banjo", "trumpet", "oboe", "xylophone"];

    const successMessage = document.querySelector("#success");
    const wrongMessage = document.querySelector("#wrong");

    function displayMessage(selector) {
        setTimeout(() => {
            document.querySelector(selector).classList.remove("visible");
            document.querySelector(selector).classList.add("hidden");
        }, 2000);
    }

    // if user click correct one from correctList, it will load correctAnswer.html

    const instruments = document.querySelectorAll("li[data-instrument]");

    instruments.forEach(instrument => {
        instrument.addEventListener("click", function() {
            const element = instrument.getAttribute("data-instrument");
            console.log("target instrument", element);

            if (element === correctList[currentLevel]) {
                currentLevel ++;
                console.log("correct answer");
                successMessage.classList.remove("hidden");
                successMessage.textContent = `CORRECT ANSWER! THE INSTRUMENT WAS: ${element} `

                setTimeout(() => {
                    successMessage.classList.add("hidden");
                }, 2000);

                for (i=1; i <= currentLevel; i++) {
                    document.querySelector(`li[data-instrument=${instrumentList[i]}]`).classList.remove("hidden");
                }
            } else {
                wrongMessage.classList.remove("hidden");

                setTimeout(() => {
                    wrongMessage.classList.add("hidden");
                }, 2000);

            }
        })
    });
})
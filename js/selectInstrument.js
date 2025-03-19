
document.addEventListener("DOMContentLoaded", function() {
    let currentLevel = 0;
    let selectedAnswers = new Set();

    // const correctList = ["piano", "drum", "guitar", "violin", "saxophone", "banjo", "trumpet", "oboe", "xylophone"];
    const correctList = {
        "sound0": ["piano"],
        "sound1": ["drum"],
        "sound2": ["guitar"],
        "sound3": ["violin"],
        "sound4": ["piano", "violin"],
        "sound5": ["guitar", "drum"],
        "sound6": ["saxophone"],
        "sound7": ["banjo"],

    }
    const instrumentList = ["piano", "drum", "guitar", "violin", "saxophone", "banjo", "trumpet", "oboe", "xylophone"];

    const soundKeys = Object.keys(correctList);
    const successMessage = document.querySelector("#success");
    const wrongMessage = document.querySelector("#wrong");
    const hearSoundBtn = document.querySelector("#hear-sound");

    function displayMessage(selector) {
        clearTimeout();
        setTimeout(() => {
            document.querySelector(selector).classList.add("hidden");
        }, 1000);
    }

    function playInstrument(instrument) {
        let audio = new Audio(`../assets/instruments/${instrument}.mp3`);
        audio.play();
    }

    function playSound(currentLevel) {
        console.log("current level", currentLevel);
        console.log("key", soundKeys[currentLevel])
        let audio = new Audio(`../assets/sounds/sound${currentLevel}.mp3`);
        audio.play();
    }

    // Play the current level's sound 
    hearSoundBtn.addEventListener("click", function() {
        console.log("sound being played", correctList[`sound${[currentLevel]}`]);
        playSound(currentLevel);
    })

    // if user click correct one from correctList, it will show next level

    const instruments = document.querySelectorAll("li[data-instrument]");

    instruments.forEach(instrument => {
        instrument.addEventListener("click", function() {
            const element = instrument.getAttribute("data-instrument");
            console.log("target instrument", element);
            
            playInstrument(element);
            selectedAnswers.add(element);

            const currentSound = soundKeys[currentLevel];
            const correctInstruments = correctList[currentSound];
            console.log("currentSound", currentSound);
            console.log("correctInstruments", correctInstruments);

            console.log("selected answer", selectedAnswers);
            console.log("correctInstruments", correctInstruments);

            const allCorrectAnswers = correctInstruments.every( instru => selectedAnswers.has(instru) );

            // if (selectedAnswers[0] === correctList[soundKeys[currentLevel][0]]) {
            if (allCorrectAnswers) {
                console.log("allCorrectAnswers", allCorrectAnswers)
                currentLevel ++;
                selectedAnswers.clear();
                console.log("current level", currentLevel);
                successMessage.classList.remove("hidden");
                successMessage.textContent = `CORRECT! THE INSTRUMENT WAS: ${element} `

                displayMessage("#success");

                for (i=1; i <= currentLevel; i++) {
                    document.querySelector(`li[data-instrument=${instrumentList[i]}]`).classList.remove("hidden");
                }
            } else {
                wrongMessage.classList.remove("hidden");

                displayMessage("#wrong");

            }
        })
    });
})
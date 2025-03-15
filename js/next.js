
document.addEventListener("DOMContentLoaded", function() {
    // next button trigger for loop
    document.getElementById("next-btn").addEventListener("click", clickNext);

    let currentLevel = 0;
    // array of instrument
    const instrumentList = ["piano", "drum", "guitar", "violin", "saxophone", "banjo", "trumpet", "oboe"];

    function clickNext() {
        currentLevel++;
        console.log("currentLevel", currentLevel);

        for (i=1; i <= currentLevel; i++) {
            document.querySelector(`li[data-instrument=${instrumentList[i]}]`).className = "visible";
        }
    }
})
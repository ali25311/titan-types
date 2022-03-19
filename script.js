// Main code here
$(document).ready(function () {
    let wordCount = 0;
    let errorCount = 0;
    let secondsPassed = 0;
    let secondsRemaining = 0;
    let Gross_wpm = 0;
	let Raw_wpm = 0;
	let AccuracyPercent = 0;
    let quote = "Hello there, this is a test! How are you today? I am doing quite well, how about yourself? I am doing good! Gilbert is a good pig who likes to eat parsley and ham and potatoes and to be a snug pig.";
    let currentIndex = 0;
    let quoteEl = $("#generated-quote");

    function generateQuote() {
        for (let i = 0; i < quote.length; i++) {
            let char = document.createElement("span");
            char.innerText = quote[i];
            quoteEl.append(char);
        }
    }

    function updatePosition(status) {
        let charEl = $("span").eq(currentIndex);

        if (status === 0) {
            charEl.css("background-color", "#ff4f1f");
            charEl.css("color", "#ffffff");
        }
        else if (status === 1) {
            charEl.css("background-color", "#39c217");
            charEl.css("color", "#ffffff");
        }
        else {
            charEl.css("background", "transparent");
            charEl.css("color", "#ff9c2b");
        }
    }

    generateQuote();








    // Keypress handling
    $(document).on('keypress', function(key) {
        let charTyped = String.fromCharCode(key.keyCode);

        if (charTyped == quote[currentIndex]) {
            updatePosition(1);
            currentIndex++;
        }
        else {
            errorCount++;
            updatePosition(0);
            currentIndex++;
            console.log(errorCount);
        }
    });


    // Backspace
    $(document).on('keydown', function(key) {
        if (key.keyCode === 8) {
            if (currentIndex > 0) {
                currentIndex--;
                if ($("span").eq(currentIndex).css("background-color") === "rgb(255, 79, 31)") {
                    errorCount--;
                    console.log(errorCount);
                }
                updatePosition(2);
            }
        }
    })

});

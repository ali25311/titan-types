// Main code here
$(document).ready(function () {
  let wordCount = 0;
  let errorCount = 0;
  let errorStreak = 0;
  let secondsPassed = 0;
  let secondsRemaining = 0;
  let Gross_wpm = 0;
  let Raw_wpm = 0;
  let AccuracyPercent = 0;
  // let quote = "Hello there, this is a test! How are you today? I am doing quite well, how about yourself? I am doing good! Gilbert is a good pig who likes to eat parsley and ham and potatoes and to be a snug pig.";
  let currentIndex = 0;
  let quoteEl = $("#generated-quote");
  var fetchedQuote = "";
  var randomWords = require("random-words");
  var fetchedWord = "";

  //   Ali's probably really bad random words function (NPM)
  function randomWord() {
    fetchedWord = randomWords(1);
    return fetchedWord;
  }

  //   Ali's probably really bad fetch random quotes from API function
  function randomQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        fetchedQuote = data.content;
      });
  }

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
    } else if (status === 1) {
      charEl.css("background-color", "#39c217");
      charEl.css("color", "#ffffff");
    } else {
      charEl.css("background", "transparent");
      charEl.css("color", "#ff9c2b");
    }
  }

  generateQuote();

  // Keypress handling
  $(document).on("keypress", function (key) {
    let charTyped = String.fromCharCode(key.keyCode);

    if (charTyped === quote[currentIndex]) {
      errorStreak = 0;
    }

    if (quote[currentIndex + 1] === " " && errorStreak < 2) {
      wordCount++;
      console.log(wordCount);
    }

    if (charTyped === quote[currentIndex]) {
      updatePosition(1);
      currentIndex++;
    } else {
      if (errorStreak < 2) {
        updatePosition(0);
        errorCount++;
        currentIndex++;
        errorStreak++;
      }
    }
  });

  // Backspace
  $(document).on("keydown", function (key) {
    if (key.keyCode === 8) {
      if (currentIndex > 0) {
        if (quote[currentIndex] == " ") {
          wordCount--;
        }
        currentIndex--;
        if (
          $("span").eq(currentIndex).css("background-color") ===
          "rgb(255, 79, 31)"
        ) {
          errorCount--;
          if (errorStreak > 0) {
            errorStreak--;
          }
        }
        updatePosition(2);
      }
    }
  });
});

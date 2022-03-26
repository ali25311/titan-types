const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random?minLength=200&maxLength=250";

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
  let currentIndex = 0;
  let quoteEl = $("#generated-quote");
  let testContent = "";

	async function getRandomQuote() {
		return fetch(RANDOM_QUOTE_API_URL)
			.then((response) => response.json())
			.then((data) => data.content)
			.then((quote) => {
				let clean = cleanQuote(quote);
				return clean;
			});
	}

  async function cleanQuote(inputQuote) {
		let quote = inputQuote
		let cleanQuote = false;
		let dirtyChar = false;
		let cleanChar = false;

		while (cleanQuote == false) {

			var filteredQuote = quote;
			filteredQuote = filteredQuote.split('');

			for (let x = 0; x < filteredQuote.length; x++) {
				if (filteredQuote[x].charCodeAt() < 126 && filteredQuote[x].charCodeAt() != 96 && filteredQuote[x].charCodeAt() != 95) {
					cleanChar = true;
				}
				else {
					quote = await getRandomQuote();
					dirtyChar = true;
					break;
				}
			}
			if (cleanChar == true && dirtyChar == false) {
				cleanQuote = true;

			}
			else {
				dirtyChar = false;
				cleanChar = false;
			}
		}
		return quote;
	}



  async function renderQuotes() {
    quoteEl.empty();
    currentIndex = 0;
		let quote1 = await getRandomQuote();
    let quote2 = await getRandomQuote();

    //record the length of the first quote
		topQuoteLength = quote1.length;
	
		// record the length of the second quote
		bottomQuoteLength = quote2.length;

		// add a single  character in between them (so one of the quote lengths is actually wrong)
		quote1 = quote1 + ' ' + quote2;
    testContent = quote1;
    testContent += " ";

		quote1.split("").forEach((character) => {
			// we can add an ASCII filter here
			const characterSpan = document.createElement("span");
			characterSpan.innerText = character;
			//characterSpan.addClass("quoteChar")
			quoteEl.append(characterSpan);
		});
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



  // Keypress handling
  $(document).on("keypress", function (key) {
    let charTyped = String.fromCharCode(key.keyCode);

    if (charTyped === testContent[currentIndex]) {
      errorStreak = 0;
    }

    if (testContent[currentIndex + 1] === " " && errorStreak < 2) {
      wordCount++;
      console.log(wordCount);
    }

    if (charTyped === testContent[currentIndex]) {
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

    if (currentIndex == testContent.length) {
      renderQuotes();
    }
  });

  // Backspace
  $(document).on("keydown", function (key) {
    if (key.keyCode === 8) {
      if (currentIndex > 0) {
        if (testContent[currentIndex] == " ") {
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




  renderQuotes();
});
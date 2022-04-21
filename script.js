// ==========================================================
// Authors: Stephen Landaas, Emily Le, Ali Hussain
// ==========================================================
// Licensing Information: MIT License
// ==========================================================

// Constants
const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random?minLength=200&maxLength=250';
const RANDOM_WORDS = ('sale spokesperson rainbow reader tent mill sweat '
+ 'black gesture isolation settle fortune provide try interactive prayer '
+ 'build research date shortage palace troop brag activity room integration '
+ 'market total ankle cool battlefield duck stick ready publish vertical '
+ 'federation concrete bold rob have habitat pension outside freeze '
+ 'disposition cheap symbol feeling clay alarm inappropriate merit loss '
+ 'haunt laborer go bee frighten fit ecstasy assessment lot gown depart wing '
+ 'producer coast fuss fibre chain purpose random wine friend book researcher '
+ 'discount theorist cheque  council machinery coma gregarious bronze even '
+ 'offensive hard rehearsal cap negligence information producer project sheet '
+ 'breast mug galaxy charter shatter calendar wheel dismiss guerrilla report '
+ 'rotten basket dawn child secular sermon salmon purpose nonremittal stay '
+ 'labour bar preference liberal exploit isolation platform amuse tie '
+ 'jewel reserve native volume patrol poetry organisation socialist lily '
+ 'jet prevalence general ratio artificial approve management sticky second '
+ 'rebel tycoon jaw marine application outfit letter factor rock eat '
+ 'ribbon herd play float soldier recognize report contribution census '
+ 'citizen disappear ham cat dog coffee place keys rainbow cruise ship '
+ 'cater sandwich direct proportion objective unlikely circulation deviation '
+ 'mark wrong cherry deal cluster version invasion turkey annual thank camera '
+ 'layer property log devote environmental peanut episode image bench carbon '
+ 'advertising bundle tasty beneficiary house home box desk telephone pants ' 
+ 'shoes shirt hair glasses whiskey poster water real nail hammer pool vase '
+ 'pot highway street lamp radio endorse adventure pluck').split(' ');

$(document).ready(function () {
  let wordCount = 0; // The number of words the user has typed
  let errorCount = 0; // The number of errors the user has made
  let errorStreak = 0; // The number of consecutive errors made by the user
  let characterCount = 0; // The number of characters the user has typed
  let secondsRemaining = 60; // The seconds remaining in the current match
  let secondsDuration = 0; // The length of the session (value from dropdown)
  let currentIndex = 0; // The user's current position in the typing test
  let segmentEl = $('#test-segment'); // The region where quotes/words go
  let timerEl = $('#timer-val'); // The timer element
  let wordCountEl = $('#word-count-val'); // The word count
  let accuracyEl = $('#accuracy-val'); // The accuracy percentage
  let testContent = ''; // String intermediary to store generated quotes/words
  let state = 'words'; // State of the match (quotes mode or words mode)
  let sessionStarted = false;
  let sessionEnded = false; // Track if the session is still going

  // MODAL VARIABLES
  let finalWpmEl = $('#final-wpm'); // WPM in status modal
  let finalWordsTypedEl = $('#final-words-typed'); // Status modal word count
  let finalCharactersEl = $('#final-characters'); // Status modal char count
  let finalErrorsEl = $('#final-errors'); // Status modal error count
  let finalAccuracyEl = $('#final-accuracy'); // Status modal acc. %
  
  // Function to utilize API call to generate random quote
	async function getRandomQuote() {
		return fetch(RANDOM_QUOTE_API_URL)
			.then((response) => response.json())
			.then((data) => data.content)
			.then((quote) => {
        // Ensure that we're returning a quote without special chars (em-dash)
        let clean = cleanQuote(quote);
				return clean;
			});
	}

  // Returns a quote without hard-to-type characters (if present)
	async function cleanQuote(inputQuote) {
    let quote = inputQuote; // Potential replacement quote
		let cleanQuote = false; // Boolean to determine if a quote is "clean"
    let parsedQuote = null; // Placeholder for array of string chars

    // While we don't have a clean quote...
		while (!cleanQuote) {
      // Assume that the quote is clean to start
      cleanQuote = true;

      // Parse our quote into an array of chars
			parsedQuote = quote.split('');
			
      // Iterate through the entirety of the quote
      for (let i = 0; i < parsedQuote.length; i++) {
        // If the quote has a type-able ASCII value, go to next loop iteration
				if (parsedQuote[i].charCodeAt() > 31 
              && parsedQuote[i].charCodeAt() < 126) {
          continue;
				}
        else {
          // If it's not a type-able ASCII value, we don't have a clean quote
          cleanQuote = false;
          break;
        }
      }

      // If the quote wasn't clean, get a new one
      if (!cleanQuote) {
        quote = await getRandomQuote();
      }
    }

    return quote;
	}

  // This function will generate and render the quotes in the testing section
  async function renderQuotes() {
     // Fetch two quotes
		let quote1 = await getRandomQuote();
    let quote2 = await getRandomQuote();
    let characterSpan = null;

    // Empty the current test contents (if any)
    segmentEl.empty(); 
    // Reset the user's position to index 0
    currentIndex = 0;

		// Assign the testcontent to be both quotes appended 
    // (with additional spaces for formatting purposes)
    testContent = quote1 + ' ' + quote2 + ' ';

    // Iterate through the test content, character by character
		testContent.split('').forEach((character) => {
      // Create a new span element, with its contents being an 
      // individual character in testContent
			characterSpan = document.createElement('span');
			characterSpan.innerText = character;
      
      // Append this span element to the testing section, the segment element
			segmentEl.append(characterSpan);
		});
	}

  // This function will gather a specific amount of random words, 
  // and return them as an array
  async function getRandomWords() {
    let words = [];

    // Gather a fixed amount of random words from our constant RANDOM_WORDS array, 
    // and push them into a new array
    for (let i = 0; i < 60; i++) {
      words.push(RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)]);
    }

    // Return the contents of this array (return the selected random words)
    return words;
  }

  // This function will utilized the random words selected, and
  // render them into the testing segment/section
  async function renderWords() {
    let characterSpan = null;

    // Empty the contents of the testing segment (if any)
    segmentEl.empty();
    // Reset the user's current index position to 0
    currentIndex = 0;

    // Set the test content to the fixed amount of random words selected, 
    // joined by a space
    testContent = (await getRandomWords()).join(' ');
    // Append a space to the test content for formatting purposes 
    // (better flow for the user)
    testContent += ' ';

    // Iterate through our test content, character by character, 
    // render them into the testing segment as a sequence of spans
    testContent.split('').forEach((character) => {
      // Create a new span element, assign its contents to the character 
      // that we are focusing on.
			characterSpan = document.createElement('span');
			characterSpan.innerText = character;

      // Append this span element to the testing segment, 
      // generating the test segment.
			segmentEl.append(characterSpan);
		});
  }

  // Function to update the display of the user's position,  
  // based off of their status (correct, incorrect, backspacing)
  function updatePosition(status) {
    let prevEl = null;
    let charEl = null;

    // Remove the blinking effect for the previous character, as long as 
    // the user has progressed past the first character
    if (currentIndex > 0) {
      prevEl = $('span').eq(currentIndex - 1);
      prevEl.removeClass('blinking');
    }
    
    // Select the character that the user is currently on, 
    // give it a blinking effect
    charEl = $('span').eq(currentIndex);
    charEl.addClass('blinking');

    // If the user made an error (status 0), 
    // give the incorrect mark a red bg color
    if (status === 0) {
      charEl.css('background-color', '#ff4f1f');
      charEl.css('color', '#ffffff');
    // If the user typed in a correct mark (status 1), 
    // give the correct char a green bg color
    } else if (status === 1) {
      charEl.css('background-color', '#39c217');
      charEl.css('color', '#ffffff');
    // If the user hit backspace (status > 1), 
    // remove the bg from the current char
    } else {
      charEl.css('background', 'transparent');
      charEl.css('color', '#ff9c2b');
    }
  }

  // Event handler for user keypresses 
  // (all standard keys typed, except backspacing)
  $(document).on('keypress', function (key) {
    let charTyped = null;

    // If the match is over (secondsRemaining <= 0), 
    // immediately exit this handler
    if (secondsRemaining <= 0) {
      return;
    }

    // Exit this handler and send to other handler, 
    // since keypress handles backspaces on Safari
    if (key.keyCode === 8) {
      return;
    }

		// If the user hits a key and the session hasn't started, begin the timer
		if (sessionStarted === false) {
      startTimer(); 
      sessionStarted = true;
    }

    // Fetch the character that the user typed in
    charTyped = String.fromCharCode(key.keyCode);

    // If the character typed is correct, reset the error streak
    if (charTyped === testContent[currentIndex]) {
      errorStreak = 0;
    }

    // If the use hits the end of a word and their error streak is < 2, 
    // update the word count.
    if ((testContent[currentIndex + 1]) === ' ' && (errorStreak < 2)) {
      wordCount++;
    }

    // If the user types the correct character, 
    // update their position accordingly
    if (charTyped === testContent[currentIndex]) {
      updatePosition(1);
      // Update their position (index) and total characters typed
      currentIndex++;
      characterCount++;
    } else {
      // If the user types incorrectly and their error streak is < 2...
      if (errorStreak < 2) {
        // Move them along
        updatePosition(0);
        // Increment their error counts, increment their index, characters, 
        //and error streak
        errorCount++;
        currentIndex++;
        characterCount++;
        errorStreak++;
      }
      // Do nothing if error streak is >= 2 and they typed incorrectly,
      // force them to fix their mistake.
    }
    // If the user hits the end of the testing content
    if (currentIndex === testContent.length) {
      // Generate new words or quotes, based off of the setting
      (state === 'words') ? renderWords() : renderQuotes();
    }

    // Update the stats once a user's keypress has been handled 
    // and the respective variables have been updated
    updateStats();
  });

  // Event handler for if a user hits the backspace key, 
  // 'keydown' needed for event-related keys.
  $(document).on('keydown', function (key) {

    // If the match is over, immediately exit this handler
    if (secondsRemaining <= 0) {
      return;
    }

    // If the keycode is 8 (ASCII code for a backspace), act accordingly
    if (key.keyCode === 8) {
      // Remove the blinking effect from where they just backspaced from
      $('span').eq(currentIndex).removeClass('blinking');

      // If the amount of characters exceeds zero, decrement it
      if (characterCount > 0) {
        characterCount--;
      }

      // If the user passed the first character in the test, act accordingly
      if (currentIndex > 0) {
        // If the user backspaces past a space, decrement the word count
        if (testContent[currentIndex] === ' ') {
          wordCount--;
        }

        // Decrement the currentIndex
        currentIndex--;

        // If the user backspaces a wrong character...
        if ($('span').eq(currentIndex).css('background-color') 
            === 'rgb(255, 79, 31)') {
          // Decrease # of errors and the error streak (if there is one)
          errorCount--;
          if (errorStreak > 0) {
            errorStreak--;
          }
        }

        // Update the user's position with a backspace status (2)
        updatePosition(2);
      }
    }
    updateStats();
  });

  // Function to calculate the WPM and return its value
	function wpmCounter() {
		let grossWpm = 0; // The gross WPM
    let netWpm = 0; // The net WPM (our final result)
    let minuteCount = secondsDuration / 60; // # of Minutes

    // Calculate the gross and net WPM using specific formulas
    grossWpm = Math.floor(Math.floor(characterCount / 5) / (minuteCount));
    netWpm = Math.floor((grossWpm - errorCount) / minuteCount);

    // Ensure that the gross WPM is a safe value
    if (isNaN(grossWpm) || grossWpm === Infinity || grossWpm == undefined 
        || grossWpm == null || grossWpm < 0) {
      grossWpm = 0;
    }

    // Ensure that the net WPM is a safe value
    if (netWpm < 0 || isNaN(netWpm) || netWpm === Infinity
        || netWpm == undefined || netWpm == null) {
      netWpm = 0;
    }

    return netWpm;
	}
  
	// Calculation for the accuracy of the user
	function fetchAccuracy() {
    // Calculate the ccuracy based off of a specific formula
		let accuracyPercent = (((characterCount - errorCount) 
        / characterCount) * 100);

    // If the accuracy isn't a number, set it to 0 for safety
    if (isNaN(accuracyPercent)) { 
      accuracyPercent = 0;
    }

    // Round off the accuracy percentage to 2 decimal places
		accuracyPercent = accuracyPercent.toFixed(2);
		
    return accuracyPercent;
	}

  // Updates the WPM, accuracy, and all of the corresponding displays
	function updateStats() {
    // Fetch the user's accuracy
		let accuracyPercent = fetchAccuracy();
    // Fetch the user's WPM
    let wpm = wpmCounter();
    
    // Update the statistics display with the proper word count and accuracy
    wordCountEl.text(wordCount.toString());
    accuracyEl.text(accuracyPercent.toString() + '%');

    // MODAL DISPLAY UPDATES...
    finalWpmEl.text('WPM: ' + wpm.toString());
    finalWordsTypedEl.text('Words Typed: ' + wordCount.toString());
    finalCharactersEl.text('Characters Typed: ' + characterCount.toString());
    finalErrorsEl.text('Errors: ' + errorCount.toString());
    finalAccuracyEl.text('Accuracy: ' + accuracyPercent.toString() + '%');
	}

  // Function to initiate the timer
	function startTimer() {
    // Tick down the timer every second
		let interval = setInterval(function () {
			if (secondsRemaining-- > 0) {
        // Update the timer every second
        timerEl.text(secondsRemaining.toString());
			} else if (secondsRemaining <= 0 && sessionEnded === false) {
        // End the session if it hasn't already ended, display the modal
        sessionEnded = true;
        $('#modal-overlay').css('display', 'flex');
      }
		}, 1000);
	}

  // Event handler to handle the user changing the type of test
  $('#test-type').change(() => {
    // Fetch the user's selected test value from the dropdown menu
    let testValue = $('#test-type').val();
    // Store its value in local storage
    localStorage.setItem('testType', testValue);
    
    // Reload the page (refresh)
    window.location.reload();
  });

  // Handle the user changing the duration of the test  
  $('#duration').change(() => {
     // Fetch the user's selected time duration from the dropdown menu
    let timeValue = $('#duration').val();
    // Store its value in local storage
    localStorage.setItem('timeVal', timeValue);

    // Reload the page (refresh)
    window.location.reload();
  });

  // Function to prepare the session 
  // (integrate user's settings, prepare the test itself)
  function sessionSetup() {
    // Fetch both the state (quores or words) and duration from local storage
    state = localStorage.getItem('testType');
    secondsDuration = localStorage.getItem('timeVal');

    // Based off of the state of the match, render the corresponding input
    if (state === 'words') {
      renderWords();
    } else {
      renderQuotes();
    }

    // If the seconds isn't found in local storage, or the user clicked the menu option
    //  that's text (111), set it to 60 by default
    if (secondsDuration == null || secondsDuration == undefined ||
        secondsDuration === 111) {
      secondsDuration = 60;
    }
    
    // Set the seconds remaining to be the duration of the test 
    // that the user specified
    secondsRemaining = secondsDuration;

    // Set the text of our timer to be whatever the duration is of our test
    timerEl.text(secondsRemaining.toString());
  }
  
  // Set up the session of the test upon loading of the document/page.
  sessionSetup();
});
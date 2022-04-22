// ==========================================================
// Authors: Stephen Landaas, Emily Le, Ali Hussain
// ==========================================================
// Licensing Information: MIT License
// ==========================================================
// Description: This corresponds to test scenario 1, where we create unit tests to see if the functionality is correct with all the given test reults, regarding the Restart button. This is test case 2, it tests to see if the restart button is reloaded to the same values and new quotes appear in the text box.
// ==========================================================

function TestCase1_2() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate(
    "https://titan-types-finalized-testing-environment.vercel.app/"
  );
  Aliases.browser.pageTitantypes.Wait();
  Content1 = Aliases.browser.pageTitantypes.FindElement("//div[contains(@class, 'segment-container')]").contentText;
  //Clicks the reset button
  Aliases.browser.pageTitantypes.button.ClickButton();
  Aliases.browser.pageTitantypes.Wait();
  Content2 = Aliases.browser.pageTitantypes.FindElement("//div[contains(@class, 'segment-container')]").contentText;
  
  if (Content1 != Content2) {
    Log.message("Session reset");
  }
  else {
    Log.message("Session not reset");
  }
}
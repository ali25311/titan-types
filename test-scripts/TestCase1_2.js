// ==========================================================
// Authors: Stephen Landaas, Emily Le, Ali Hussain
// ==========================================================
// Licensing Information: MIT License
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
/* ==========================================================
Authors: Stephen Landaas, Emily Le, Ali Hussain
==========================================================
Licensing Information: MIT License
==========================================================
Description: This corresponds to test scenario 4, where we ensure that the typing test is operational and is able to complete its course and subsequently display the statistics on a variety of different web browsers. This is test case 1, in which we are checking to see if the test completes and the result window appears properly on Chrome.
========================================================== */

function TestCase4_1() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  Aliases.browser.pageTitantypes.Wait();
  Aliases.browser.BrowserWindow.Maximize();

  // Reset us back to 1 minute
  Aliases.browser.pageTitantypes.selectDuration.ClickItem("1 Minute");
  Aliases.browser.pageTitantypes.Wait();
  Aliases.browser.pageTitantypes.FindElement("//div[contains(@class, 'segment-container')]").Click();

  // Click a random key to start the test
  Aliases.browser.pageTitantypes.textnodeTitantypes.Keys("z");

  // Wait the time of a 1-minute test (plus 1 second of padding)
  Delay(61000);

  // Check if the modal displays/verify that session has ended successfully
  if (Aliases.browser.pageTitantypes.FindElement("#modal-heading").textContent == "Cumulative Statistics") {
    Log.Message("Test completed successfully");
  }
  else {
    Log.Message("Test not completed successfully");
  }
}
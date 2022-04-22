// ==========================================================
// Authors: Stephen Landaas, Emily Le, Ali Hussain
// ==========================================================
// Licensing Information: MIT License
// ==========================================================
// Description: This corresponds to test scenario 2, where we check the timer functionality to ensure that selecting the different times appear properly on the application. This is test case 1, it tests to see if selecting the "1 Minute" item in the timer changes the timer to 60 seconds.

function TestCase2_1() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  Aliases.browser.pageTitantypes.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object equals '60'.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#timer-val"), "contentText", cmpEqual, "60");
  //Clicks the 'selectDuration' object.
  Aliases.browser.pageTitantypes.selectDuration.ClickItem("1 Minute");
  Aliases.browser.pageTitantypes.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object equals '60'.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#timer-val"), "contentText", cmpEqual, "60");
}
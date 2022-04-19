// ==========================================================
// Authors: Stephen Landaas, Emily Le, Ali Hussain
// ==========================================================
// Licensing Information: MIT License
// ==========================================================

function TestCase1_1() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  Aliases.browser.pageTitantypes.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("//button[contains(@class, 'reset-button')]") object equals ''.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("//button[contains(@class, 'reset-button')]"), "contentText", cmpEqual, "");
}
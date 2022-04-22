/* ==========================================================
Authors: Stephen Landaas, Emily Le, Ali Hussain
=============================================================
Licensing Information: MIT License
=============================================================
Description: This corresponds to test scenario 1, where we create 
unit tests to see if the functionality is correct with all the given 
test reults, regarding the Restart button. This is test case 1, 
it tests to see if the restart button is visible when the application loads.
============================================================= */

function TestCase1_1() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  Aliases.browser.pageTitantypes.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("//button[contains(@class, 'reset-button')]") object equals ''.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("//button[contains(@class, 'reset-button')]"), "contentText", cmpEqual, "");
}
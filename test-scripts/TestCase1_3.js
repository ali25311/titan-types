/* ==========================================================
Authors: Stephen Landaas, Emily Le, Ali Hussain
==========================================================
Licensing Information: MIT License
==========================================================
Description: This corresponds to test scenario 1, where we 
create unit tests to see if the functionality is correct with 
all the given test reults, regarding the Restart button. This is 
test case 3, it tests to see if the restart button restarts an ongoing 
test in different timer selection scenarios 
(the default status should be restored).
========================================================== */


function TestCase1_3() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  Aliases.browser.pageTitantypes.Wait();
  Aliases.browser.BrowserWindow.Maximize();
  //Enters 'a' in the 'textnodeTitantypes' object.
  Aliases.browser.pageTitantypes.FindElement("//div[contains(@class, 'segment-container')]").Click();
  Aliases.browser.pageTitantypes.textnodeTitantypes.Keys("a");
  //Selects the '1 Minute' item of the 'selectDuration' combo box.
  Aliases.browser.pageTitantypes.selectDuration.ClickItem("1 Minute");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTitantypes.Wait();
  //Selects the '2 Minutes' item of the 'selectDuration' combo box.
  Aliases.browser.pageTitantypes.selectDuration.ClickItem("2 Minutes");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTitantypes.Wait();
  //Enters 'a' in the 'textnodeTitantypes' object.
  Aliases.browser.pageTitantypes.textnodeTitantypes.Keys("a");
  //Clicks the 'selectDuration' object.
  Aliases.browser.pageTitantypes.selectDuration.ClickItem("3 Minutes");
  Aliases.browser.pageTitantypes.Wait();

  Aliases.browser.pageTitantypes.selectDuration.ClickItem("1 Minute");
  Aliases.browser.pageTitantypes.Wait();
}
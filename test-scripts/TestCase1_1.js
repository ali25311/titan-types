function Test1()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("//button[contains(@class, 'reset-button')]") object equals ''.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("//button[contains(@class, 'reset-button')]"), "contentText", cmpEqual, "");
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(94, 53);
  //Clicks the 'button' button.
  Aliases.browser.pageTitantypes.button.ClickButton();
}
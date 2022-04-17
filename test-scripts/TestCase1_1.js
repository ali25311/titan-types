function Test4()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  //Checks whether the 'contentText' property of the NameMapping.Sys.Browser().Page("https://titan-types-finalized-testing-environment.vercel.app/").FindElement("//button[contains(@class, 'reset-button')]") object equals ''.
  aqObject.CheckProperty(NameMapping.Sys.Browser().Page("https://titan-types-finalized-testing-environment.vercel.app/").FindElement("//button[contains(@class, 'reset-button')]"), "contentText", cmpEqual, "");
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(96, 61);
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(100, 60);
}
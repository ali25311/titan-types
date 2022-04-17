function Test5()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  //Checks whether the 'Enabled' property of the Aliases.browser.pageTitantypes object equals True.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes, "Enabled", cmpEqual, true);
  //Clicks the 'button' button.
  Aliases.browser.pageTitantypes.button.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTitantypes.Wait();
  //Clicks the 'button' button.
  Aliases.browser.pageTitantypes.button.ClickButton();
}
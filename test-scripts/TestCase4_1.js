function Test4()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  //Maximizes the specified Window object.
  Aliases.browser3.BrowserWindow.Maximize();
  //Clicks the 'textnode' control.
  Aliases.browser3.pageTitantypes.textnode.Click();
  //Enters 'A[BS]' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys("A[BS]");
  //Checks whether the 'Enabled' property of the Aliases.browser.pageTitantypes.FindElement("#modal-overlay") object equals True.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#modal-overlay"), "Enabled", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#modal-overlay") object equals 'Cumulative Statistics
  //×
  //WPM: 0
  //Words Typed: 0
  //Characters Typed: 0
  //Errors: 0
  //Accuracy: 0.00%'.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#modal-overlay"), "contentText", cmpEqual, "Cumulative Statistics\n×\nWPM: 0\nWords Typed: 0\nCharacters Typed: 0\nErrors: 0\nAccuracy: 0.00%");
}
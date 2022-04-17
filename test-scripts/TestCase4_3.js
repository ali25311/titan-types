function Test6()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  Aliases.browser3.BrowserWindow.Maximize();
  //Clicks the 'textnodeT2' control.
  Aliases.browser3.pageTitantypes.textnodeT2.Click();
  //Enters 'T[BS]' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys("T[BS]");
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#modal-overlay") object equals 'Cumulative Statistics
  //×
  //WPM: 0
  //Words Typed: 0
  //Characters Typed: 0
  //Errors: 0
  //Accuracy: 0.00%'.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#modal-overlay"), "contentText", cmpEqual, "Cumulative Statistics\n×\nWPM: 0\nWords Typed: 0\nCharacters Typed: 0\nErrors: 0\nAccuracy: 0.00%");
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#status-modal") object equals 'Cumulative Statistics
  //×
  //WPM: 0
  //Words Typed: 0
  //Characters Typed: 0
  //Errors: 0
  //Accuracy: 0.00%'.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#status-modal"), "contentText", cmpEqual, "Cumulative Statistics\n×\nWPM: 0\nWords Typed: 0\nCharacters Typed: 0\nErrors: 0\nAccuracy: 0.00%");
}
function Test9()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  Aliases.browser3.BrowserWindow.Maximize();
  //Enters '![ReleaseLast]' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys("![ReleaseLast]");
  //Clicks the 'panel' control.
  Aliases.browser3.pageTitantypes.panel.Click();
  //Enters 'It is impossible to escape the impression' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys("It is impossible to escape the impression");
  //Checks whether the 'Enabled' property of the Aliases.browser.pageTitantypes object equals True.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes, "Enabled", cmpEqual, true);
  //Clicks the 'textnodeP2' control.
  Aliases.browser3.pageTitantypes.textnodeP2.Click();
  //Enters ' that people commonly use false standards of mesa[BS][BS]asurement' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys(" that people commonly use false standards of mesa[BS][BS]asurement");
  //Clicks the 'panelTitantypes' control.
  Aliases.browser3.pageTitantypes.panelTitantypes.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#status-modal") object equals 'Cumulative Statistics
  //×
  //WPM: 19
  //Words Typed: 15
  //Characters Typed: 97
  //Errors: 0
  //Accuracy: 100.00%'.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#status-modal"), "contentText", cmpEqual, "Cumulative Statistics\n×\nWPM: 19\nWords Typed: 15\nCharacters Typed: 97\nErrors: 0\nAccuracy: 100.00%");
}
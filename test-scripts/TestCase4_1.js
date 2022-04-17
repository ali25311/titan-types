function Test8()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  Aliases.browser3.BrowserWindow.Maximize();
  //Clicks the 'textnodeTestSegment' control.
  Aliases.browser3.pageTitantypes.textnodeTestSegment.Click();
  //Enters 'The way a woman carries herself and the way se[BS]he dressed o[BS][BS][BS]s ought to promote the following types' in the 'textnodeTitantypes' object.
  Aliases.browser3.pageTitantypes.textnodeTitantypes.Keys("The way a woman carries herself and the way se[BS]he dressed o[BS][BS][BS]s ought to promote the following types");
  //Clicks the 'panelStatsBody' control.
  Aliases.browser3.pageTitantypes.panelStatsBody.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#stats-body") object equals 'WPM: 18
  //Words Typed: 17
  //Characters Typed: 92
  //Errors: 0
  //Accuracy: 100.00%'.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#stats-body"), "contentText", cmpEqual, "WPM: 18\nWords Typed: 17\nCharacters Typed: 92\nErrors: 0\nAccuracy: 100.00%");
}
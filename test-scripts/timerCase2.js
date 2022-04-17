function Timer2()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://titan-types-finalized-testing-environment.vercel.app/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'selectDuration' object.
  Aliases.browser.pageTitantypes.selectDuration.Click(38, 11);
  OCR.Recognize(Aliases.browser.wndChrome_WidgetWin_1.Chrome_RenderWidgetHostHWND).BlockByText("Minutes", spNearestToCenter).Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageTitantypes.FindElement("#timer-val") object equals '120'.
  aqObject.CheckProperty(Aliases.browser.pageTitantypes.FindElement("#timer-val"), "contentText", cmpEqual, "120");
}